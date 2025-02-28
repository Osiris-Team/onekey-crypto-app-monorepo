export enum EModalSettingRoutes {
  SettingListModal = 'SettingListModal',
  SettingCurrencyModal = 'SettingCurrencyModal',
  SettingAccountDerivationModal = 'SettingAccountDerivationModal',
  SettingSpendUTXOModal = 'SettingSpendUTXOModal',
  SettingCustomRPC = 'SettingCustomRPC',
  SettingAppAutoLockModal = 'SettingAppAutoLockModal',
  SettingProtectModal = 'SettingProtectModal',
  SettingSignatureRecordModal = 'SettingSignatureRecordModal',
  SettingDevFirmwareUpdateModal = 'SettingDevFirmwareUpdateModal',
  SettingDevV4MigrationModal = 'SettingDevV4MigrationModal',
  SettingExportCustomNetworkConfig = 'SettingExportCustomNetworkConfig',
  SettingNotifications = 'SettingNotifications',
}

export type IModalSettingParamList = {
  [EModalSettingRoutes.SettingListModal]: { flag?: string } | undefined;
  [EModalSettingRoutes.SettingCurrencyModal]: undefined;
  [EModalSettingRoutes.SettingAccountDerivationModal]: undefined;
  [EModalSettingRoutes.SettingSpendUTXOModal]: undefined;
  [EModalSettingRoutes.SettingCustomRPC]: undefined;
  [EModalSettingRoutes.SettingAppAutoLockModal]: undefined;
  [EModalSettingRoutes.SettingProtectModal]: undefined;
  [EModalSettingRoutes.SettingSignatureRecordModal]: undefined;
  [EModalSettingRoutes.SettingDevFirmwareUpdateModal]: undefined;
  [EModalSettingRoutes.SettingDevV4MigrationModal]: undefined;
  [EModalSettingRoutes.SettingExportCustomNetworkConfig]: undefined;
  [EModalSettingRoutes.SettingNotifications]: undefined;
};
