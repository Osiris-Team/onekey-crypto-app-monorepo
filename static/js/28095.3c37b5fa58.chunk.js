"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[28095],{49139:(e,t,n)=>{n.d(t,{A:()=>BackupDeviceList});var r=n(324586),o=n(586330),i=n(839850),s=n(514041),a=n(187753),c=n(908867),l=n(490343),u=n(610421),d=n(791088),p=n(498356),b=n(911998),g=n(153763),f=n(259227),m=n(254491),y=n(392097),j=n(567807),k=n(903469),h=n(831085),v=["ListEmptyComponent"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function BackupDeviceList(e){var t,{ListEmptyComponent:n}=e,r=(0,i.A)(e,v),S=(0,c.A)(),[{isEnabled:x,isInProgress:_}]=(0,f.useCloudBackupPersistAtom)(),O=(0,p.A)(),A=(0,s.useMemo)((function(){return{iOS:"PhoneOutline",Android:"PhoneOutline",iPadOS:"SuqarePlaceholderOutline"}}),[]),{result:$,run:w}=(0,b.yk)((0,o.A)((function*(){var e=yield u.A.serviceCloudBackup.getBackupDeviceList();return n||x?e.map((function(e){return{deviceName:e.deviceInfo.deviceName,osName:e.deviceInfo.osName,detail:S.formatMessage({id:m.ETranslations.backup_updated_time},{time:(0,j.Yq)(new Date(e.backupTime))}),icon:e.deviceInfo.osName in A?A[e.deviceInfo.osName]:"SuqarePlaceholderOutline",isCurrentDevice:e.deviceInfo.deviceName===a.g7&&e.deviceInfo.osName===a.wH}})):[]})),[S,A,n,x]),P=(null!=(t=$?.length)?t:0)>0,E=(0,g.E)();return(0,s.useEffect)((function(){_||E&&w()}),[_,E,w,x]),$?(0,h.jsx)(l.SectionList,_objectSpread({sections:P?[{data:$}]:[],renderSectionHeader:function(){return n||x?(0,h.jsx)(l.SectionList.SectionHeader,{mt:"$5",title:S.formatMessage({id:m.ETranslations.backup_all_devices})}):null},renderItem:function({item:e}){return(0,h.jsx)(d.c,{onPress:function(){O.pushModal(y.ry.CloudBackupModal,{screen:y.pc.CloudBackupList,params:{deviceInfo:e}})},renderItemText:function(t){return(0,h.jsx)(d.c.Text,_objectSpread(_objectSpread({},t),{},{primary:(0,h.jsxs)(l.XStack,{alignItems:"center",children:[(0,h.jsx)(l.SizableText,{size:"$bodyLgMedium",children:e.deviceName}),e.isCurrentDevice?(0,h.jsx)(l.Stack,{ml:"$1",bg:"$bgInfo",px:"$2",py:"$0.5",borderRadius:"$1",children:(0,h.jsx)(l.SizableText,{size:"$bodySmMedium",color:"$textInfo",children:S.formatMessage({id:m.ETranslations.global_current})})}):null]})}))},subtitle:e.detail,icon:e.icon,iconProps:{bg:"$bgStrong",p:"$5"},renderIcon:(0,h.jsx)(l.Stack,{bg:"$bgStrong",p:"$2",borderRadius:"$3",children:(0,h.jsx)(l.Icon,{name:e.icon,size:"$6",color:"$icon"})}),drillIn:!0})},estimatedItemSize:"$16",ListFooterComponent:!P&&n?null:(0,h.jsx)(l.SizableText,{size:"$bodySm",color:"$textSubdued",px:"$5",pt:"$3",children:S.formatMessage({id:m.ETranslations.backup_onekey_doesnt_back_up_hardware_wallets})}),ListEmptyComponent:n},r)):(0,h.jsx)(k.A,{})}},903469:(e,t,n)=>{n.d(t,{A:()=>BackupListLoading});var r=n(490343),o=n(831085);function BackupListLoading(){return(0,o.jsxs)(r.Stack,{flex:1,px:"$5",gap:"$2",pt:"$5",children:[(0,o.jsx)(r.Skeleton,{h:"$6",w:"70%"}),(0,o.jsx)(r.Skeleton,{h:"$6",w:"100%"}),(0,o.jsx)(r.Skeleton,{h:"$6",w:"70%"}),(0,o.jsx)(r.Skeleton,{h:"$6",w:"100%"})]})}},928095:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Home});var r=n(586330),o=n(514041),i=n(908867),s=n(490343),a=n(610421),c=n(791088),l=n(498356),u=n(259227),d=n(254491),p=n(663522),b=n(49139),g=n(324586),f=(n(584186),n(833800)),m=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,g.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function useBackupToggleAction(){var e,t=(0,f.S)(),n=(0,o.useCallback)((e=(0,r.A)((function*(e,n){e&&(yield t.check()),yield u.cloudBackupPersistAtom.set(_objectSpread(_objectSpread({},yield u.cloudBackupPersistAtom.get()),{},{isEnabled:e},e?{isFirstEnabled:!1,isInProgress:!0}:{isFirstDisabled:!1,isInProgress:!1})),!e&&p.Ay.isNativeAndroid&&(yield a.A.serviceCloudBackup.logoutFromGoogleDrive(!0)),n?.(e)})),function(t,n){return e.apply(this,arguments)}),[t]);return(0,o.useMemo)((function(){return{toggle:n}}),[n])}function Home(){var e=(0,i.A)(),t=function useBackupToggleDialog(){var e,t=(0,i.A)(),n=useBackupToggleAction(),s=(0,o.useCallback)((e=(0,r.A)((function*(e){})),function(t){return e.apply(this,arguments)}),[t,n]);return(0,o.useMemo)((function(){return{maybeShow:s}}),[s])}(),[{isEnabled:n,isInProgress:g}]=(0,u.useCloudBackupPersistAtom)(),[f,y]=(0,o.useState)(""),j=(0,l.A)(),k=(0,o.useCallback)((0,r.A)((function*(){yield t.maybeShow(!0),y("");try{yield a.A.serviceCloudBackup.backupNow()}catch(t){var e;y("Sync failed, please retry."),s.Toast.error({title:`${null!=(e=t?.message)?e:t}`})}})),[t]),h=(0,o.useCallback)((function(){return g?(0,m.jsx)(s.Button,{disabled:!0,bg:"transparent",p:"0",loading:!0,children:e.formatMessage({id:d.ETranslations.global_syncing})}):f?(0,m.jsx)(s.Button,{disabled:!0,bg:"transparent",p:"0",icon:"XCircleSolid",iconColor:"$iconCritical",children:e.formatMessage({id:d.ETranslations.global_sync_error})}):(0,m.jsx)(s.Button,{disabled:!0,bg:"transparent",p:"0",icon:"CheckRadioSolid",iconColor:"$iconSuccess",children:e.formatMessage({id:d.ETranslations.global_synced})})}),[e,g,f]);return(0,m.jsxs)(s.Page,{children:[(0,m.jsx)(s.Page.Header,{title:e.formatMessage({id:p.Ay.isNativeAndroid?d.ETranslations.settings_google_drive_backup:d.ETranslations.settings_icloud_backup})}),(0,m.jsxs)(s.Page.Body,{children:[(0,m.jsx)(b.A,{ListHeaderComponent:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.c,{title:e.formatMessage({id:p.Ay.isNativeAndroid?d.ETranslations.backup_backup_to_google_drive:d.ETranslations.backup_backup_to_icloud}),children:(0,m.jsx)(s.Stack,{pointerEvents:"box-only",onPress:(0,r.A)((function*(){yield t.maybeShow(!n),n?p.Ay.isNativeAndroid&&j.pop():yield k()})),children:(0,m.jsx)(s.Switch,{value:n})})}),n?(0,m.jsx)(c.c,{pt:"$3",title:e.formatMessage({id:p.Ay.isNativeAndroid?d.ETranslations.backup_google_drive_status:d.ETranslations.backup_icloud_status}),children:h()}):null,(0,m.jsx)(s.Divider,{pt:"$6"})]})}),(0,m.jsx)(s.Stack,{m:"$5",children:(0,m.jsx)(s.Button,{mt:"$4",borderRadius:"$3",py:"$3",disabled:g,onPress:k,children:e.formatMessage({id:d.ETranslations.backup_backup_now})})})]})]})}}}]);