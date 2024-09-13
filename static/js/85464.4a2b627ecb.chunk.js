(self.webpackChunkweb=self.webpackChunkweb||[]).push([[85464],{389587:(e,t,r)=>{"use strict";r.d(t,{K:()=>n});var n=80},82506:(e,t,r)=>{"use strict";r.d(t,{d:()=>useDebounce});var n=r(578104);function useDebounce(e,t,r){var[o]=(0,n.d7)(e,t,r);return o}},471230:(e,t,r)=>{"use strict";r.d(t,{YG:()=>y,U9:()=>o.U});r(490343),r(791088),r(392097);var n=r(498356);r(831085);var o=r(952954),a=r(324586),i=r(586330),s=r(514041),c=r(259227),u=r(318822),l=(r(254491),r(663522)),d=r(584186),f=r(610421),p=r(131397),m=r(621591);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=0,g=!1,b=!1;var y=(0,s.memo)((function OnboardingOnMountCmp(){var e=(0,p.t1)(),t=(0,n.A)(),r=(0,m.D)(),[o,a]=(0,c.useV4migrationPersistAtom)(),y=o?.downgradeWarningConfirmed;(0,s.useRef)(y).current=y;var h=(0,s.useCallback)((0,i.A)((function*(){(yield f.A.serviceV4Migration.checkShouldMigrateV4OnMount())&&(g||(g=!0,yield f.A.serviceV4Migration.migrateBaseSettings()))})),[]),j=(0,s.useCallback)((0,i.A)((function*({checkingV4Migration:t}={}){try{if(t)if(yield f.A.serviceV4Migration.checkShouldMigrateV4OnMount()){if(yield h(),yield d.A.wait(600),!b){b=!0,yield r.navigateToV4MigrationPage({isAutoStartOnMount:!0});var n=Date.now();n-v>3e3&&(v=n,a((function(e){return _objectSpread(_objectSpread({},e),{},{v4migrationAutoStartCount:(e.v4migrationAutoStartCount||0)+1})})))}return}}catch(e){}if(!(0,p.p1)()){var{isOnboardingDone:o}=yield f.A.serviceOnboarding.isOnboardingDone();o||l.Ay.isWebDappMode||e({isFullModal:!0})}})),[h,a,e,r]),w=(0,s.useCallback)((0,i.A)((function*(){yield j({checkingV4Migration:!0})})),[j,h,a]);return(0,s.useEffect)((function(){}),[]),(0,s.useEffect)((function(){}),[a]),(0,s.useEffect)((function(){}),[t]),(0,s.useEffect)((function(){}),[r]),(0,s.useEffect)((function(){w()}),[w]),(0,s.useEffect)((function(){var fn=function(){j({checkingV4Migration:!1})};return u.iL.on(u.Tu.WalletClear,fn),function(){u.iL.off(u.Tu.WalletClear,fn)}}),[j]),null}))},85464:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>I});var n=r(586330),o=r(514041),a=r(908867),i=r(490343),s=r(610421),c=r(325809),u=r(498356),l=r(911998),d=r(162616),f=r(181447),p=r(254491),m=r(157572),v=r(714191),g=r(471230),b=r(324586),y=r(70107),h=r.n(y),j=r(575995),w=r(660395),x=r(389587),O=r(82506),k=r(834015),A=r(625931),_=r(831085);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,b.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var fixInputImportSingleChain=function(e){return h()(e)};function ImportSingleChainBase({validationParams:e,title:t,inputLabel:r,inputPlaceholder:u,inputIsSecure:l,inputTestID:d,invalidMessage:m,children:v,onConfirm:g,networkIds:b}){var y=(0,a.A)(),h=(0,i.useMedia)(),{activeAccount:{network:I}}=(0,w.w)({num:0}),{clearText:S}=(0,i.useClipboard)(),P=(0,i.useForm)({values:{networkId:I?.id&&I.id!==(0,A.V)().onekeyall?I?.id:(0,A.V)().btc,input:"",deriveType:void 0,accountName:""},mode:"onChange",reValidateMode:"onBlur"}),{setValue:M,control:E}=P,[T,C]=(0,o.useState)(),D=(0,o.useRef)(!1),V=(0,i.useFormWatch)({control:E,name:"networkId"}),$=(0,i.useFormWatch)({control:E,name:"input"}),F=(0,O.d)($,600),N=(0,i.useFormWatch)({control:E,name:"accountName"}),K=(0,O.d)(N?.trim()||"",600),W=(0,o.useCallback)((0,n.A)((function*(){if(K)try{yield s.A.serviceAccount.ensureAccountNameNotDuplicate({name:K,walletId:f.C5}),P.clearErrors("accountName")}catch(e){P.setError("accountName",{message:e?.message})}else P.clearErrors("accountName");if(M("deriveType",void 0),F&&V){var t=yield s.A.servicePassword.encodeSensitiveText({text:fixInputImportSingleChain(F)});try{var r=yield s.A.serviceAccount.validateGeneralInputOfImporting(_objectSpread(_objectSpread({},e),{},{input:t,networkId:V}));C(r)}catch(e){C({isValid:!1})}}else C(void 0)})),[K,P,F,V,M,e]);(0,o.useEffect)((function(){(0,n.A)((function*(){try{D.current=!0,yield W()}finally{D.current=!1}}))()}),[W]),(0,o.useEffect)((function(){}),[V,M]);var R,{start:B}=(0,k.A)();return(0,_.jsxs)(i.Page,{scrollEnabled:!0,children:[(0,_.jsx)(i.Page.Header,{title:t}),(0,_.jsxs)(i.Page.Body,{px:"$5",children:[(0,_.jsxs)(i.Form,{form:P,children:[(0,_.jsx)(i.Form.Field,{label:y.formatMessage({id:p.ETranslations.global_network}),name:"networkId",children:(0,_.jsx)(c.YS,{networkIds:b})}),(0,_.jsx)(i.Form.Field,{label:r,name:"input",children:(0,_.jsx)(i.Input,{secureTextEntry:l,placeholder:u,size:h.gtMd?"medium":"large",testID:d,onPaste:S,addOns:[{iconName:"ScanOutline",onPress:(R=(0,n.A)((function*(){var e=yield B({handlers:[],autoHandleResult:!1});P.setValue("input",e.raw)})),function onPress(){return R.apply(this,arguments)})}]})}),T&&!T?.isValid&&F?(0,_.jsx)(i.SizableText,{size:"$bodyMd",color:"$textCritical",children:m}):null,T?.deriveInfoItems?(0,_.jsx)(i.Form.Field,{label:y.formatMessage({id:p.ETranslations.derivation_path}),name:"deriveType",children:(0,_.jsx)(j.l$,{networkId:P.getValues().networkId||"",enabledItems:T?.deriveInfoItems||[],renderTrigger:function({label:e,onPress:t}){return(0,_.jsxs)(i.Stack,{testID:"wallet-derivation-path-selector-trigger",userSelect:"none",flexDirection:"row",px:"$3.5",py:"$2.5",borderWidth:1,borderColor:"$borderStrong",borderRadius:"$3",$gtMd:{px:"$3",py:"$1.5",borderRadius:"$2"},borderCurve:"continuous",hoverStyle:{bg:"$bgHover"},pressStyle:{bg:"$bgActive"},onPress:t,children:[(0,_.jsx)(i.SizableText,{flex:1,children:e}),(0,_.jsx)(i.Icon,{name:"ChevronDownSmallOutline",color:"$iconSubdued",mr:"$-0.5"})]})}})}):null,(0,_.jsx)(i.Form.Field,{label:y.formatMessage({id:p.ETranslations.form_enter_account_name}),name:"accountName",children:(0,_.jsx)(i.Input,{maxLength:x.K,placeholder:y.formatMessage({id:p.ETranslations.form_enter_account_name_placeholder})})})]}),v]}),(0,_.jsx)(i.Page.Footer,{confirmButtonProps:{disabled:!T?.isValid||!!Object.values(P.formState.errors).length},onConfirm:(0,n.A)((function*(){return g(P)}))})]})}function ImportPrivateKey(){var e,t=(0,a.A)(),r=(0,o.useMemo)((function(){return{input:"",validateXprvt:!0,validatePrivateKey:!0}}),[]),c=(0,d.z$)(),v=(0,u.A)(),{result:b}=(0,l.yk)((0,n.A)((function*(){return(yield s.A.serviceNetwork.getImportedAccountEnabledNetworks()).map((function(e){return e.id}))})),[],{initResult:[]});return(0,_.jsx)(ImportSingleChainBase,{title:t.formatMessage({id:p.ETranslations.global_import_private_key}),inputLabel:t.formatMessage({id:p.ETranslations.global_private_key}),inputPlaceholder:t.formatMessage({id:p.ETranslations.form_enter_private_key_placeholder}),inputIsSecure:!0,inputTestID:"private-key",invalidMessage:t.formatMessage({id:p.ETranslations.form_private_key_error_invalid}),validationParams:r,onConfirm:(e=(0,n.A)((function*(e){var r=e.getValues();if(r.input&&r.networkId){var n=yield s.A.servicePassword.encodeSensitiveText({text:fixInputImportSingleChain(r.input)}),o=yield s.A.serviceAccount.addImportedAccount({input:n,deriveType:r.deriveType,networkId:r.networkId,name:r.accountName,shouldCheckDuplicateName:!0}),a=o?.accounts?.[0]?.id;a&&i.Toast.success({title:t.formatMessage({id:p.ETranslations.global_success})}),c.current.updateSelectedAccountForSingletonAccount({num:0,networkId:r.networkId,walletId:f.C5,othersWalletAccountId:a}),v.popStack(),m.U.account.wallet.importWallet({importMethod:"privatekey"})}})),function(t){return e.apply(this,arguments)}),networkIds:b,children:(0,_.jsx)(g.U9,{list:[{title:t.formatMessage({id:p.ETranslations.faq_private_key}),description:t.formatMessage({id:p.ETranslations.faq_private_key_desc})},{title:t.formatMessage({id:p.ETranslations.faq_recovery_phrase_safe_store}),description:t.formatMessage({id:p.ETranslations.faq_recovery_phrase_safe_store_desc})}]})})}const I=function ImportPrivateKeyPage(){return(0,_.jsx)(c.b8,{config:{sceneName:v.Zs.home},enabledNum:[0],children:(0,_.jsx)(ImportPrivateKey,{})})}},552837:e=>{e.exports=function asciiToArray(e){return e.split("")}},751312:(e,t,r)=>{var n=r(73501);e.exports=function castSlice(e,t,r){var o=e.length;return r=void 0===r?o:r,!t&&r>=o?e:n(e,t,r)}},728774:(e,t,r)=>{var n=r(2478);e.exports=function charsEndIndex(e,t){for(var r=e.length;r--&&n(t,e[r],0)>-1;);return r}},217905:(e,t,r)=>{var n=r(2478);e.exports=function charsStartIndex(e,t){for(var r=-1,o=e.length;++r<o&&n(t,e[r],0)>-1;);return r}},283417:e=>{var t=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function hasUnicode(e){return t.test(e)}},482237:(e,t,r)=>{var n=r(552837),o=r(283417),a=r(792013);e.exports=function stringToArray(e){return o(e)?a(e):n(e)}},792013:e=>{var t="\\ud800-\\udfff",r="["+t+"]",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",a="[^"+t+"]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",c="(?:"+n+"|"+o+")"+"?",u="[\\ufe0e\\ufe0f]?",l=u+c+("(?:\\u200d(?:"+[a,i,s].join("|")+")"+u+c+")*"),d="(?:"+[a+n+"?",n,i,s,r].join("|")+")",f=RegExp(o+"(?="+o+")|"+d+l,"g");e.exports=function unicodeToArray(e){return e.match(f)||[]}},70107:(e,t,r)=>{var n=r(652291),o=r(386403),a=r(751312),i=r(728774),s=r(217905),c=r(482237),u=r(595243);e.exports=function trim(e,t,r){if((e=u(e))&&(r||void 0===t))return o(e);if(!e||!(t=n(t)))return e;var l=c(e),d=c(t),f=s(l,d),p=i(l,d)+1;return a(l,f,p).join("")}}}]);