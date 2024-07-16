import { memo, useCallback, useEffect, useMemo, useRef } from 'react';

import { CanceledError } from 'axios';

import type { ITabPageProps } from '@onekeyhq/components';
import {
  Portal,
  useMedia,
  useTabIsRefreshingFocused,
} from '@onekeyhq/components';
import backgroundApiProxy from '@onekeyhq/kit/src/background/instance/backgroundApiProxy';
import { WALLET_TYPE_WATCHING } from '@onekeyhq/shared/src/consts/dbConsts';
import {
  POLLING_DEBOUNCE_INTERVAL,
  POLLING_INTERVAL_FOR_TOKEN,
} from '@onekeyhq/shared/src/consts/walletConsts';
import { IMPL_ALLNETWORKS } from '@onekeyhq/shared/src/engine/engineConsts';
import {
  EModalAssetDetailRoutes,
  EModalRoutes,
} from '@onekeyhq/shared/src/routes';
import accountUtils from '@onekeyhq/shared/src/utils/accountUtils';
import { getEmptyTokenData } from '@onekeyhq/shared/src/utils/tokenUtils';
import type {
  IAccountToken,
  IFetchAccountTokensResp,
  IToken,
  ITokenFiat,
} from '@onekeyhq/shared/types/token';

import { TokenListView } from '../../../components/TokenListView';
import { useAllNetworkRequests } from '../../../hooks/useAllNetwork';
import useAppNavigation from '../../../hooks/useAppNavigation';
import { useBuyToken } from '../../../hooks/useBuyToken';
import { usePromiseResult } from '../../../hooks/usePromiseResult';
import { useReceiveToken } from '../../../hooks/useReceiveToken';
import { useActiveAccount } from '../../../states/jotai/contexts/accountSelector';
import { useTokenListActions } from '../../../states/jotai/contexts/tokenList';
import { HomeTokenListProviderMirror } from '../components/HomeTokenListProvider/HomeTokenListProviderMirror';
import { UrlAccountHomeTokenListProviderMirror } from '../components/HomeTokenListProvider/UrlAccountHomeTokenListProviderMirror';
import { WalletActions } from '../components/WalletActions';

function TokenListContainer({
  showWalletActions = false,
  ...props
}: ITabPageProps) {
  const { onContentSizeChange } = props;
  const { isFocused, isHeaderRefreshing, setIsHeaderRefreshing } =
    useTabIsRefreshingFocused();

  const {
    activeAccount: { account, network, wallet, deriveInfo, deriveType },
  } = useActiveAccount({ num: 0 });

  const { handleOnBuy, isSupported } = useBuyToken({
    accountId: account?.id ?? '',
    networkId: network?.id ?? '',
  });
  const { handleOnReceive } = useReceiveToken({
    accountId: account?.id ?? '',
    networkId: network?.id ?? '',
    walletId: wallet?.id ?? '',
    deriveInfo,
    deriveType,
  });

  const refreshAllNetworksTokenList = useRef(false);

  const media = useMedia();
  const navigation = useAppNavigation();

  const {
    refreshAllTokenList,
    refreshAllTokenListMap,
    refreshTokenList,
    refreshTokenListMap,
    refreshRiskyTokenList,
    refreshRiskyTokenListMap,
    refreshSmallBalanceTokenList,
    refreshSmallBalanceTokenListMap,
    refreshSmallBalanceTokensFiatValue,
    updateTokenListState,
    updateSearchKey,
  } = useTokenListActions().current;

  const { run } = usePromiseResult(
    async () => {
      try {
        if (!account || !network) return;

        if (account.impl === IMPL_ALLNETWORKS) return;

        await backgroundApiProxy.serviceToken.abortFetchAccountTokens();
        const blockedTokens =
          await backgroundApiProxy.serviceToken.getBlockedTokens({
            networkId: network.id,
          });
        const r = await backgroundApiProxy.serviceToken.fetchAccountTokens({
          accountId: account.id,
          mergeTokens: true,
          networkId: network.id,
          flag: 'home-token-list',
          blockedTokens: Object.keys(blockedTokens),
        });

        refreshTokenList({ keys: r.tokens.keys, tokens: r.tokens.data });
        refreshTokenListMap({
          tokens: r.tokens.map,
        });
        refreshRiskyTokenList({
          keys: r.riskTokens.keys,
          riskyTokens: r.riskTokens.data,
        });
        refreshRiskyTokenListMap({
          tokens: r.riskTokens.map,
        });
        refreshSmallBalanceTokenList({
          keys: r.smallBalanceTokens.keys,
          smallBalanceTokens: r.smallBalanceTokens.data,
        });
        refreshSmallBalanceTokenListMap({
          tokens: r.smallBalanceTokens.map,
        });
        refreshSmallBalanceTokensFiatValue(
          r.smallBalanceTokens.fiatValue ?? '0',
        );

        if (r.allTokens) {
          refreshAllTokenList({
            keys: r.allTokens?.keys,
            tokens: r.allTokens?.data,
          });
          refreshAllTokenListMap({
            tokens: r.allTokens.map,
          });
          const mergedTokens = r.allTokens.data;
          if (mergedTokens && mergedTokens.length) {
            void backgroundApiProxy.serviceToken.updateLocalTokens({
              networkId: network.id,
              tokens: mergedTokens,
            });
          }
          updateTokenListState({
            initialized: true,
            isRefreshing: false,
          });
        }
      } catch (e) {
        if (e instanceof CanceledError) {
          console.log('fetchAccountTokens canceled');
        } else {
          throw e;
        }
      } finally {
        setIsHeaderRefreshing(false);
      }
    },
    [
      account,
      network,
      refreshTokenList,
      refreshTokenListMap,
      refreshRiskyTokenList,
      refreshRiskyTokenListMap,
      refreshSmallBalanceTokenList,
      refreshSmallBalanceTokenListMap,
      refreshSmallBalanceTokensFiatValue,
      refreshAllTokenList,
      refreshAllTokenListMap,
      updateTokenListState,
      setIsHeaderRefreshing,
    ],
    {
      overrideIsFocused: (isPageFocused) => isPageFocused && isFocused,
      debounced: POLLING_DEBOUNCE_INTERVAL,
      pollingInterval: POLLING_INTERVAL_FOR_TOKEN,
    },
  );

  const handleAllNetworkRequests = useCallback(
    async ({
      accountId,
      networkId,
    }: {
      accountId: string;
      networkId: string;
    }) => {
      const r = await backgroundApiProxy.serviceToken.fetchAccountTokens({
        networkId,
        accountId,
        flag: 'home-token-list',
      });

      if (!refreshAllNetworksTokenList.current) {
        refreshTokenList({
          keys: r.tokens.keys,
          tokens: r.tokens.data,
          merge: true,
        });
        refreshTokenListMap({
          tokens: r.tokens.map,
          merge: true,
        });

        refreshSmallBalanceTokenList({
          keys: r.smallBalanceTokens.keys,
          smallBalanceTokens: r.smallBalanceTokens.data,
          merge: true,
        });
        refreshSmallBalanceTokenListMap({
          tokens: r.smallBalanceTokens.map,
          merge: true,
        });

        refreshRiskyTokenList({
          keys: r.riskTokens.keys,
          riskyTokens: r.riskTokens.data,
          merge: true,
        });

        refreshRiskyTokenListMap({
          tokens: r.riskTokens.map,
          merge: true,
        });

        updateTokenListState({
          initialized: true,
          isRefreshing: false,
        });
      }

      return r;
    },
    [
      refreshRiskyTokenList,
      refreshRiskyTokenListMap,
      refreshSmallBalanceTokenList,
      refreshSmallBalanceTokenListMap,
      refreshTokenList,
      refreshTokenListMap,
      updateTokenListState,
    ],
  );

  const handleClearAllNetworkData = useCallback(() => {
    const emptyTokens = getEmptyTokenData();

    refreshAllTokenList({
      tokens: emptyTokens.allTokens.data,
      keys: emptyTokens.allTokens.keys,
    });
    refreshAllTokenListMap({
      tokens: emptyTokens.allTokens.map,
    });

    refreshTokenList({
      tokens: emptyTokens.tokens.data,
      keys: emptyTokens.tokens.keys,
    });
    refreshTokenListMap({
      tokens: emptyTokens.tokens.map,
    });

    refreshSmallBalanceTokenList({
      smallBalanceTokens: emptyTokens.smallBalanceTokens.data,
      keys: emptyTokens.smallBalanceTokens.keys,
    });
    refreshSmallBalanceTokenListMap({
      tokens: emptyTokens.smallBalanceTokens.map,
    });

    refreshRiskyTokenList({
      riskyTokens: emptyTokens.riskTokens.data,
      keys: emptyTokens.riskTokens.keys,
    });

    refreshRiskyTokenListMap({
      tokens: emptyTokens.riskTokens.map,
    });
  }, [
    refreshAllTokenList,
    refreshAllTokenListMap,
    refreshRiskyTokenList,
    refreshRiskyTokenListMap,
    refreshSmallBalanceTokenList,
    refreshSmallBalanceTokenListMap,
    refreshTokenList,
    refreshTokenListMap,
  ]);

  const { result: allNetworksResult } =
    useAllNetworkRequests<IFetchAccountTokensResp>({
      account,
      network,
      wallet,
      allNetworkRequests: handleAllNetworkRequests,
      clearAllNetworkData: handleClearAllNetworkData,
      disabled: true,
    });

  useEffect(() => {
    const tokenList: {
      tokens: IAccountToken[];
      keys: string;
    } = {
      tokens: [],
      keys: '',
    };

    const smallBalanceTokenList: {
      smallBalanceTokens: IAccountToken[];
      keys: string;
    } = {
      smallBalanceTokens: [],
      keys: '',
    };

    const riskyTokenList: {
      riskyTokens: IAccountToken[];
      keys: string;
    } = {
      riskyTokens: [],
      keys: '',
    };

    const tokenListMap: {
      [key: string]: ITokenFiat;
    } = {};

    const smallBalanceTokenListMap: {
      [key: string]: ITokenFiat;
    } = {};

    const riskyTokenListMap: {
      [key: string]: ITokenFiat;
    } = {};
    if (refreshAllNetworksTokenList.current && allNetworksResult) {
      for (const r of allNetworksResult) {
        tokenList.tokens = tokenList.tokens.concat(r.tokens.data);
        tokenList.keys = `${tokenList.keys}_${r.tokens.keys}`;
        Object.assign(tokenListMap, r.tokens.map);

        smallBalanceTokenList.smallBalanceTokens =
          smallBalanceTokenList.smallBalanceTokens.concat(
            r.smallBalanceTokens.data,
          );
        smallBalanceTokenList.keys = `${smallBalanceTokenList.keys}_${r.smallBalanceTokens.keys}`;
        Object.assign(smallBalanceTokenListMap, r.smallBalanceTokens.map);

        riskyTokenList.riskyTokens = riskyTokenList.riskyTokens.concat(
          r.riskTokens.data,
        );
        riskyTokenList.keys = `${riskyTokenList.keys}_${r.riskTokens.keys}`;
        Object.assign(riskyTokenListMap, r.riskTokens.map);
      }

      refreshTokenList(tokenList);
      refreshTokenListMap({
        tokens: tokenListMap,
      });

      refreshSmallBalanceTokenList(smallBalanceTokenList);
      refreshSmallBalanceTokenListMap({
        tokens: smallBalanceTokenListMap,
      });

      refreshRiskyTokenList(riskyTokenList);
      refreshRiskyTokenListMap({
        tokens: riskyTokenListMap,
      });
    }
  }, [
    allNetworksResult,
    refreshAllTokenList,
    refreshAllTokenListMap,
    refreshRiskyTokenList,
    refreshRiskyTokenListMap,
    refreshSmallBalanceTokenList,
    refreshSmallBalanceTokenListMap,
    refreshTokenList,
    refreshTokenListMap,
  ]);

  useEffect(() => {
    if (isHeaderRefreshing) {
      void run();
    }
  }, [isHeaderRefreshing, run]);

  const { result: vaultSettings } = usePromiseResult(
    () =>
      backgroundApiProxy.serviceNetwork.getVaultSettings({
        networkId: network?.id ?? '',
      }),
    [network?.id],
  );

  useEffect(() => {
    if (account?.id && network?.id && wallet?.id) {
      updateTokenListState({
        initialized: false,
        isRefreshing: true,
      });
      updateSearchKey('');
      refreshAllNetworksTokenList.current = false;
    }
  }, [
    account?.id,
    network?.id,
    updateSearchKey,
    updateTokenListState,
    wallet?.id,
  ]);

  const handleOnPressToken = useCallback(
    (token: IToken) => {
      if (!account || !network || !wallet || !deriveInfo) return;
      navigation.pushModal(EModalRoutes.MainModal, {
        screen: EModalAssetDetailRoutes.TokenDetails,
        params: {
          accountId: token.accountId ?? account.id,
          networkId: token.networkId ?? network.id,
          walletId: wallet.id,
          deriveInfo,
          deriveType,
          tokenInfo: token,
        },
      });
    },
    [account, deriveInfo, deriveType, navigation, network, wallet],
  );

  const isBuyAndReceiveEnabled = useMemo(
    () =>
      !vaultSettings?.disabledSendAction &&
      wallet?.type !== WALLET_TYPE_WATCHING,
    [vaultSettings?.disabledSendAction, wallet?.type],
  );

  return (
    <>
      {showWalletActions ? (
        <Portal.Body container={Portal.Constant.WALLET_ACTIONS}>
          <WalletActions
            pt="$5"
            $gtLg={{
              pt: 0,
            }}
          />
        </Portal.Body>
      ) : null}
      <TokenListView
        withHeader
        withFooter
        withPrice
        withBuyAndReceive={isBuyAndReceiveEnabled}
        isBuyTokenSupported={isSupported}
        onBuyToken={handleOnBuy}
        onReceiveToken={handleOnReceive}
        onPressToken={handleOnPressToken}
        onContentSizeChange={onContentSizeChange}
        {...(media.gtLg && {
          tableLayout: true,
        })}
      />
    </>
  );
}

const TokenListContainerWithProvider = memo((props: ITabPageProps) => {
  const {
    activeAccount: { account },
  } = useActiveAccount({ num: 0 });
  const isUrlAccount = accountUtils.isUrlAccountFn({
    accountId: account?.id ?? '',
  });
  return isUrlAccount ? (
    <UrlAccountHomeTokenListProviderMirror>
      <TokenListContainer showWalletActions {...props} />
    </UrlAccountHomeTokenListProviderMirror>
  ) : (
    <HomeTokenListProviderMirror>
      <TokenListContainer showWalletActions {...props} />
    </HomeTokenListProviderMirror>
  );
});
TokenListContainerWithProvider.displayName = 'TokenListContainerWithProvider';

export { TokenListContainerWithProvider };
