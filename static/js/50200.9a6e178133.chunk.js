"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[50200],{82506:(e,n,t)=>{t.d(n,{d:()=>useDebounce});var o=t(578104);function useDebounce(e,n,t){var[c]=(0,o.d7)(e,n,t);return c}},278484:(e,n,t)=>{t.d(n,{wI:()=>DAppAccountListItem,ZY:()=>DAppAccountListStandAloneItem,X1:()=>DAppAccountListStandAloneItemForHomeScene,VV:()=>WalletConnectAccountTriggerList});var o=t(460986),c=t.n(o),r=t(324586),a=t(586330),i=t(514041),s=t(908867),u=t(17617),d=t(490343),l=t(610421),p=t(325809),m=t(237532),A=t(24284),g=t(911998),f=t(162616),h=t(226952),b=t(254491),x=(t(663522),t(584186)),I=t(714191),y=t(82506);var j=t(831085);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function DAppAccountListInitFromHome({num:e,shouldSyncFromHome:n}){var[,t]=(0,f.K7)(),o=(0,f.z$)();return(0,i.useEffect)((function(){return(0,a.A)((function*(){try{t((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!0}})})),yield x.A.wait(600),n&&(yield o.current.syncFromScene({from:{sceneName:I.Zs.home,sceneNum:0},num:e}))}finally{n&&(yield x.A.wait(300)),t((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!1}})}))}}))(),function(){t((function(n){return _objectSpread(_objectSpread({},n),{},{[e]:{isLoading:!1}})}))}}),[o,e,t,n]),null}function DAppAccountListItem({num:e,handleAccountChanged:n,readonly:t,networkReadonly:o,compressionUiMode:c,initFromHome:r,beforeShowTrigger:a,skeletonRenderDuration:s}){!function useHandleDiscoveryAccountChanged({num:e,handleAccountChanged:n}){var{activeAccount:t}=(0,f.LH)({num:e}),{selectedAccount:o}=(0,f.wz)({num:e}),c=(0,y.d)(t,200),r=(0,y.d)(o,200),a=(0,i.useRef)(t),s=(0,i.useRef)(o);(0,i.useEffect)((function(){a.current=t,s.current=o}),[t,o]),(0,i.useEffect)((function(){n&&(c.isOthersWallet&&c.account?.id===r.othersWalletAccountId||c.indexedAccount?.id===r.indexedAccountId)&&n({activeAccount:a.current,selectedAccount:s.current},e)}),[c,r,n,e])}({num:e,handleAccountChanged:n});var l=Boolean(r&&!t);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(d.YGroup,{bg:"$bg",borderRadius:"$3",borderColor:"$borderSubdued",borderWidth:u.A.hairlineWidth,separator:(0,j.jsx)(d.Divider,{}),disabled:t,children:[(0,j.jsx)(d.YGroup.Item,{children:(0,j.jsx)(p.jY,{num:e,beforeShowTrigger:a,disabled:o||t,loadingDuration:0})}),(0,j.jsx)(d.YGroup.Item,{children:(0,j.jsx)(m.Up,{num:e,compressionUiMode:c,beforeShowTrigger:a,loadingDuration:0})})]}),(0,j.jsx)(DAppAccountListInitFromHome,{num:e,shouldSyncFromHome:l})]})}function DAppAccountListStandAloneItem({readonly:e,handleAccountChanged:n,onConnectedAccountInfoChanged:t}){var o=(0,s.A)(),{serviceDApp:r,serviceNetwork:u}=l.A,{$sourceInfo:m}=(0,A.A)(),{result:f}=(0,g.yk)((0,a.A)((function*(){var e,n;if(!m?.origin||!m.scope)return{accountSelectorNum:null,networkIds:null};var t=(0,h.zg)(m.scope),o=t?(yield u.getNetworkIdsByImpls({impls:t})).networkIds:null,c=yield r.getConnectedAccountsInfo({origin:m.origin,scope:null!=(e=m.scope)?e:"",isWalletConnectRequest:m.isWalletConnectRequest});return Array.isArray(c)&&c.length>0&&"number"==typeof c[0]?.num?{accountSelectorNum:c[0].num,networkIds:o,existConnectedAccount:!0}:{accountSelectorNum:yield r.getAccountSelectorNum({origin:m.origin,scope:null!=(n=m.scope)?n:"",isWalletConnectRequest:m.isWalletConnectRequest}),networkIds:o,existConnectedAccount:!1}})),[m?.origin,m?.scope,m?.isWalletConnectRequest,r,u]);return(0,i.useEffect)((function(){c()(f?.accountSelectorNum)&&t&&t({num:f.accountSelectorNum,existConnectedAccount:f.existConnectedAccount})}),[f?.accountSelectorNum,f?.existConnectedAccount,t]),(0,j.jsxs)(d.YStack,{gap:"$2",testID:"DAppAccountListStandAloneItem",children:[(0,j.jsx)(d.SizableText,{size:"$headingMd",color:"$text",children:o.formatMessage({id:b.ETranslations.global_accounts})}),"number"==typeof f?.accountSelectorNum&&Array.isArray(f?.networkIds)?(0,j.jsx)(p.b8,{config:{sceneName:I.Zs.discover,sceneUrl:m?.origin},enabledNum:[f.accountSelectorNum],availableNetworksMap:{[f.accountSelectorNum]:{networkIds:f.networkIds}},children:(0,j.jsx)(DAppAccountListItem,{initFromHome:!f?.existConnectedAccount,num:f?.accountSelectorNum,handleAccountChanged:n,readonly:e})}):null]})}function DAppAccountListStandAloneItemForHomeScene(){var e=(0,s.A)();return(0,j.jsxs)(d.YStack,{gap:"$2",testID:"DAppAccountListStandAloneItem",children:[(0,j.jsx)(d.SizableText,{size:"$headingMd",color:"$text",children:e.formatMessage({id:b.ETranslations.global_accounts})}),(0,j.jsx)(p.b8,{config:{sceneName:I.Zs.home},enabledNum:[0],children:(0,j.jsx)(DAppAccountListItem,{initFromHome:!1,num:0,readonly:!0})})]})}function WalletConnectAccountTriggerList({sceneUrl:e,sessionAccountsInfo:n,handleAccountChanged:t}){var o=n.map((function(e){return e.accountSelectorNum})),c=n.reduce((function(e,n){var t=n.networkIds.filter(Boolean);return e[n.accountSelectorNum]={networkIds:t,defaultNetworkId:t[0]},e}),{});return(0,j.jsxs)(d.YStack,{gap:"$2",children:[(0,j.jsx)(d.SizableText,{size:"$headingMd",color:"$text",children:"Accounts"}),Array.isArray(n)&&n.length?(0,j.jsx)(p.b8,{config:{sceneName:I.Zs.discover,sceneUrl:e},enabledNum:o,availableNetworksMap:c,children:(0,j.jsx)(d.YStack,{gap:"$2",children:n.map((function(e){return(0,j.jsx)(d.Stack,{children:(0,j.jsx)(DAppAccountListItem,{initFromHome:!0,num:e.accountSelectorNum,handleAccountChanged:t})},e.accountSelectorNum)}))})}):null]})}},450200:(e,n,t)=>{t.r(n),t.d(n,{default:()=>I});var o=t(503668),c=t.n(o),r=t(586330),a=t(514041),i=t(654266),s=t(908867),u=t(490343),d=t(610421),l=t(325809),p=t(791088),m=t(498356),A=t(254491),g=t(392097),f=t(714191),h=t(233693),b=t(278484),x=t(831085);const I=function CurrentConnectionModal(){var e=(0,s.A)(),n=(0,m.A)(),t=(0,i.lq)(),{faviconUrl:o,origin:I}=t.params,{handleAccountInfoChanged:y}=(0,h.Q)(),[j,S]=(0,a.useState)([]),w=(0,a.useRef)(!1),v=(0,a.useCallback)((0,r.A)((function*(){if(I){var e=yield d.A.serviceDApp.findInjectedAccountByOrigin(I);e?S(e):n.pop()}else S(null)})),[I,n]);(0,i.xK)((function(){w.current&&(v(),w.current=!1)})),(0,a.useEffect)((function(){v()}),[v]);var k=(0,a.useCallback)((function(){w.current=!0,n.pushModal(g.ry.DAppConnectionModal,{screen:g.EB.ConnectionList})}),[n]),C=(0,a.useCallback)((function(){n.pushModal(g.ry.DAppConnectionModal,{screen:g.EB.DefaultWalletSettingsModal})}),[n]),D=(0,a.useCallback)((0,r.A)((function*(){j?.[0].storageType&&(yield d.A.serviceDApp.disconnectWebsite({origin:I,storageType:j?.[0].storageType}),n.pop())})),[I,j,n]);return(0,x.jsxs)(u.Page,{children:[(0,x.jsx)(u.Page.Header,{title:e.formatMessage({id:A.ETranslations.global_connect})}),(0,x.jsxs)(u.Page.Body,{children:[(0,x.jsxs)(u.XStack,{p:"$5",gap:"$3",children:[(0,x.jsxs)(u.Image,{size:"$10",borderRadius:"$2",children:[(0,x.jsx)(u.Image.Source,{src:o}),(0,x.jsx)(u.Image.Fallback,{children:(0,x.jsx)(u.Icon,{size:"$10",name:"GlobusOutline"})}),(0,x.jsx)(u.Image.Loading,{children:(0,x.jsx)(u.Skeleton,{width:"100%",height:"100%"})})]}),(0,x.jsxs)(u.YStack,{children:[(0,x.jsx)(u.SizableText,{size:"$bodyLgMedium",children:new URL(I).hostname}),(0,x.jsx)(u.SizableText,{size:"$bodyMd",color:"$textSuccess",children:e.formatMessage({id:A.ETranslations.global_connected})})]})]}),c()(j)||!j.length?null:(0,x.jsx)(l.b8,{config:{sceneName:f.Zs.discover,sceneUrl:I},enabledNum:j.map((function(e){return e.num})),availableNetworksMap:j.reduce((function(e,n){return Array.isArray(n.availableNetworkIds)&&(e[n.num]={networkIds:n.availableNetworkIds}),e}),{}),children:(0,x.jsx)(u.ListView,{data:j,renderItem:function({item:e}){return(0,x.jsx)(u.YStack,{px:"$5",pb:"$2",children:(0,x.jsx)(b.wI,{num:e.num,compressionUiMode:!0,handleAccountChanged:(n=(0,r.A)((function*(n){yield y({origin:I,accountSelectorNum:e.num,prevAccountInfo:e,accountChangedParams:n,storageType:e.storageType,afterUpdate:v})})),function(e){return n.apply(this,arguments)})},e.num)});var n},estimatedItemSize:"$10"})})]}),(0,x.jsxs)(u.Page.Footer,{children:[(0,x.jsx)(u.Divider,{}),(0,x.jsxs)(u.YStack,{bg:"$bgSubdued",py:"$3",gap:"$2",children:[(0,x.jsx)(p.c,{onPress:k,children:(0,x.jsx)(u.SizableText,{size:"$bodyMd",children:e.formatMessage({id:A.ETranslations.explore_manage_dapp_connections})})},"manage-connection"),(0,x.jsx)(p.c,{onPress:C,children:(0,x.jsx)(u.SizableText,{size:"$bodyMd",children:e.formatMessage({id:A.ETranslations.explore_default_wallet_settings})})},"default-wallet-settings"),(0,x.jsx)(u.Divider,{mx:"$5"}),(0,x.jsx)(p.c,{onPress:D,children:(0,x.jsx)(u.SizableText,{size:"$bodyMd",children:e.formatMessage({id:A.ETranslations.explore_disconnect})})},"disconnection")]})]})]})}},233693:(e,n,t)=>{t.d(n,{Q:()=>useShouldUpdateConnectedAccount});var o=t(586330),c=t(797331),r=t.n(c),a=t(514041);t(663522),t(392097);var i=t(184251),s=t(610421),u=(t(317522),t(394764),t(660015),t(574319),{"https://wallet.keplr.app":!0});r()((function(e,n){var t=new URL(e).origin;"domReady"===n&&u[t]||(s.A.serviceDApp.notifyDAppAccountsChanged(t),s.A.serviceDApp.notifyDAppChainChanged(t))}),800);function useShouldUpdateConnectedAccount(){var e,n=(0,a.useCallback)((function(e,n){var t=e.walletId!==n.walletId||e.indexedAccountId!==n.indexedAccountId||e.networkId!==n.networkId||e.accountId!==n.accountId||e.address!==n.address,o=n.accountId&&n.walletId&&(i.A.isLightningNetworkByNetworkId(n.networkId)||n.address)&&n.networkId;return e&&t&&o}),[]),t=(0,a.useCallback)((function({activeAccount:e,selectedAccount:n}){var t,o,c,r,a,i;return{walletId:null!=(t=e.wallet?.id)?t:"",indexedAccountId:null!=(o=e.indexedAccount?.id)?o:"",networkId:null!=(c=e.network?.id)?c:"",accountId:null!=(r=e.account?.id)?r:"",address:null!=(a=e.account?.address)?a:"",networkImpl:null!=(i=e.network?.impl)?i:"",deriveType:e.deriveType,focusedWallet:n.focusedWallet,othersWalletAccountId:n.othersWalletAccountId}}),[]),c=(0,a.useCallback)((e=(0,o.A)((function*({origin:e,accountSelectorNum:o,prevAccountInfo:c,accountChangedParams:r,storageType:a,afterUpdate:i}){var u=t(r);if(n(c,u)){var{serviceDApp:d}=s.A;yield s.A.serviceDApp.updateConnectionSession({origin:e,accountSelectorNum:o,updatedAccountInfo:u,storageType:a}),i(),c.accountId!==u.accountId&&d.notifyDAppAccountsChanged(e),c.networkId!==u.networkId&&d.notifyDAppChainChanged(e)}})),function(n){return e.apply(this,arguments)}),[t,n]);return{handleAccountInfoChanged:c}}}}]);