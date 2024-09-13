import { useCallback, useEffect, useRef, useState } from 'react';

import { noop } from 'lodash';
import { useIntl } from 'react-intl';
import { useDebouncedCallback } from 'use-debounce';

import {
  Button,
  Divider,
  Page,
  SizableText,
  Spinner,
  Stack,
  Switch,
} from '@onekeyhq/components';
import backgroundApiProxy from '@onekeyhq/kit/src/background/instance/backgroundApiProxy';
import { ListItem } from '@onekeyhq/kit/src/components/ListItem';
import { showNotificationPermissionsDialog } from '@onekeyhq/kit/src/components/PermissionsDialog';
import { usePromiseResult } from '@onekeyhq/kit/src/hooks/usePromiseResult';
import {
  useDevSettingsPersistAtom,
  useSettingsPersistAtom,
} from '@onekeyhq/kit-bg/src/states/jotai/atoms';
import { ETranslations } from '@onekeyhq/shared/src/locale';
import { EModalRoutes } from '@onekeyhq/shared/src/routes';
import { EModalNotificationsRoutes } from '@onekeyhq/shared/src/routes/notifications';
import type { INotificationPushSettings } from '@onekeyhq/shared/types/notification';

import useAppNavigation from '../../../../hooks/useAppNavigation';

export default function NotificationsSettings() {
  const intl = useIntl();
  const [settings, setSettings] = useState<
    INotificationPushSettings | undefined
  >();
  const [devAppSettings] = useDevSettingsPersistAtom();
  const [appSettings] = useSettingsPersistAtom();
  const navigation = useAppNavigation();

  const prevSettings = useRef<INotificationPushSettings | undefined>();

  const { result: pushClient } = usePromiseResult(() => {
    noop(devAppSettings.enabled);
    return backgroundApiProxy.serviceNotification.getPushClient();
  }, [devAppSettings.enabled]);

  const reloadSettings = useCallback(async () => {
    const result =
      await backgroundApiProxy.serviceNotification.fetchNotificationSettings();
    setSettings(result);
    prevSettings.current = result;
  }, []);

  const updateSettingsToServer = useDebouncedCallback(
    async (partSettings: INotificationPushSettings) => {
      let updated = false;
      try {
        updated =
          await backgroundApiProxy.serviceNotification.updateNotificationSettings(
            {
              ...settings,
              ...partSettings,
            },
          );
      } catch (e) {
        if (prevSettings.current) {
          setSettings(prevSettings.current);
        }
        throw e;
      }
      if (updated) {
        await reloadSettings();
      }
    },
    300,
    {
      leading: false,
      trailing: true,
    },
  );

  const updateSettings = useCallback(
    async (partSettings: INotificationPushSettings) => {
      setSettings((v) => ({
        ...v,
        ...partSettings,
      }));
      void updateSettingsToServer(partSettings);
    },
    [updateSettingsToServer],
  );

  useEffect(() => {
    void reloadSettings();
  }, [reloadSettings]);

  return (
    <Page>
      <Page.Header
        title={intl.formatMessage({ id: ETranslations.global_notifications })}
      />
      <Page.Body>
        {!settings ? (
          <Stack pt={240} justifyContent="center" alignItems="center">
            <Spinner size="large" />
          </Stack>
        ) : (
          <>
            <ListItem>
              <ListItem.Text
                flex={1}
                primary={intl.formatMessage({
                  id: ETranslations.notifications_notifications_switch_label,
                })}
              />
              <Switch
                value={!!settings?.pushEnabled}
                onChange={(checked) => {
                  void updateSettings({
                    pushEnabled: checked,
                  });
                }}
              />
            </ListItem>

            {settings?.pushEnabled ? (
              <>
                <Divider m="$5" />
                <ListItem>
                  <ListItem.Text
                    flex={1}
                    primary={intl.formatMessage({
                      id: ETranslations.notifications_notifications_account_activity_label,
                    })}
                    secondary={intl.formatMessage({
                      id: ETranslations.notifications_notifications_account_activity_desc,
                    })}
                    secondaryTextProps={{
                      maxWidth: '$96',
                    }}
                  />
                  <Switch
                    value={!!settings?.accountActivityPushEnabled}
                    onChange={(checked) => {
                      void updateSettings({
                        accountActivityPushEnabled: checked,
                      });
                    }}
                  />
                </ListItem>
                {/* <ListItem>
          <ListItem.Text
            flex={1}
            primary={intl.formatMessage({
              id: ETranslations.notifications_notifications_price_alert_label,
            })}
            secondary={intl.formatMessage({
              id: ETranslations.notifications_notifications_price_alert_desc,
            })}
            secondaryTextProps={{
              maxWidth: '$96',
            }}
          />
          <Switch value />
        </ListItem> */}
              </>
            ) : null}
          </>
        )}

        {devAppSettings?.enabled ? (
          <Stack p="$8">
            <Button onPress={showNotificationPermissionsDialog}>
              通知权限
            </Button>
            <Button
              onPress={() => {
                navigation.pushModal(EModalRoutes.NotificationsModal, {
                  screen: EModalNotificationsRoutes.NotificationIntroduction,
                });
              }}
            >
              初次引导
            </Button>
            <SizableText>
              InstanceId: {appSettings?.instanceId?.slice(0, 8)}...
            </SizableText>
            <SizableText>
              JPush: {pushClient?.jpushId?.slice(0, 8)}...
            </SizableText>
            <SizableText>
              WebSocket: {pushClient?.socketId?.slice(0, 8)}...
            </SizableText>
          </Stack>
        ) : null}
      </Page.Body>
    </Page>
  );
}
