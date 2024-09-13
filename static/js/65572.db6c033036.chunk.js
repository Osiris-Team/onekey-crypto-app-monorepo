"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[65572],{665572:(e,n,t)=>{t.r(n),t.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=t(586330),i=t(514041),c=t(483040),d=t(490343),r=t(610421),l=t(325809),o=t(162616),a=t(714191),x=t(654004),u=t(831085),{serviceAccount:h,servicePassword:j,serviceDemo:p}=r.A;function Demo(){var[e,n]=(0,i.useState)("hd-1"),{activeAccount:{device:t}}=(0,o.LH)({num:0});return(0,u.jsxs)(d.Stack,{gap:"$2",children:[(0,u.jsx)(d.Input,{value:e,onChangeText:function(e){return n(e)}}),(0,u.jsx)(d.Button,{onPress:(0,s.A)((function*(){yield h.getWallet({walletId:e})})),children:"获取 HD 钱包"}),(0,u.jsx)(d.Button,{onPress:(0,s.A)((function*(){var{password:n}=yield j.promptPasswordVerify();yield h.getCredentialDecrypt({password:n,credentialId:e})})),children:"解密 Credentials"}),(0,u.jsx)(d.Button,{onPress:(0,s.A)((function*(){yield h.addIndexedAccount({walletId:e,indexes:[0],skipIfExists:!1})})),children:"重复添加 HD IndexedAccount 报错"}),(0,u.jsx)(d.Button,{onPress:(0,s.A)((function*(){yield h.addIndexedAccount({walletId:e,indexes:[0],skipIfExists:!0})})),children:"重复添加 HD IndexedAccount 不报错"}),(0,u.jsx)(d.Button,{onPress:function(){c.randomBytes(32)},children:"Test getRandomBytes"}),(0,u.jsx)(d.Button,{onPress:function(){r.A.servicePassword.clearCachedPassword()},children:"清空缓存密码"}),(0,u.jsxs)(l.b8,{enabledNum:[0,1],config:{sceneName:a.Zs.swap,sceneUrl:""},children:[(0,u.jsx)(l.sj,{num:0}),(0,u.jsx)(l.sj,{num:1})]}),(0,u.jsx)(d.Divider,{}),(0,u.jsx)(d.Divider,{}),(0,u.jsx)(d.Divider,{}),(0,u.jsx)(d.Divider,{}),(0,u.jsx)(d.Button,{onPress:(0,s.A)((function*(){yield p.demoHwGetBtcPublicKeysByLoop({connectId:t?.connectId,deviceId:t?.deviceId})})),children:"hw 批量创建地址公钥 （循环方式）"}),(0,u.jsx)(d.Button,{onPress:(0,s.A)((function*(){yield p.demoHwGetAllNetworkAddresses({connectId:t?.connectId,deviceId:t?.deviceId})})),children:"hw 批量创建地址 （sdk allNetwork api 方式）"})]})}const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,u.jsx)(x.P,{description:"Account Model",suggestions:["Account Model"],boundaryConditions:["Account Model"],elements:[{title:"Account Model",element:(0,u.jsx)(l.b8,{config:{sceneName:a.Zs.home,sceneUrl:""},enabledNum:[0],children:(0,u.jsx)(d.Stack,{gap:"$1",children:(0,u.jsx)(Demo,{})})})}]})}},654004:(e,n,t)=>{t.d(n,{P:()=>Layout});var s=t(586330),i=t(654266),c=t(490343),d=t(989375),r=t(610421),l=t(498356),o=t(392097),a=t(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,a.jsx)(c.Stack,{children:(0,a.jsxs)(c.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,a.jsx)(c.Stack,{children:(0,a.jsx)(c.Stack,{gap:"$1",children:e.map((function(n,t){return(0,a.jsx)(c.Stack,{children:(0,a.jsxs)(c.SizableText,{children:[t+1,". ",n,t===e.length-1?"。":"；"]})},t.toString())}))})})};function Layout({description:e="",suggestions:n=[],boundaryConditions:t=[],elements:x=[],scrollEnabled:u=!0,contentInsetAdjustmentBehavior:h="never",skipLoading:j=!1,children:p}){var m=(0,d.U6)(),g=(0,l.A)();return(0,a.jsx)(c.Page,{skipLoading:j,children:(0,a.jsx)(c.ScrollView,{maxWidth:"100%",scrollEnabled:u,flex:1,marginBottom:m,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:h,children:(0,a.jsxs)(c.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6",children:[(0,a.jsxs)(c.XStack,{children:[(0,a.jsx)(c.IconButton,{icon:"HomeLineOutline",onPress:function(){g.dispatch(i.y9.replace(o.WP.Main,{screen:o.V4.Developer,params:{screen:o.f$.TabDeveloper}}))}}),(0,a.jsx)(c.Button,{ml:"$4",onPress:(0,s.A)((function*(){yield r.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,a.jsx)(c.Button,{ml:"$4",variant:"primary",onPress:(0,s.A)((function*(){yield r.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,a.jsxs)(c.Stack,{gap:"$2",children:[(0,a.jsx)(c.Stack,{children:(0,a.jsx)(c.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,a.jsx)(c.Stack,{children:(0,a.jsx)(FormattedText,{text:e})})]}):null,n?(0,a.jsxs)(c.Stack,{gap:"$2",children:[(0,a.jsx)(c.Stack,{children:(0,a.jsx)(c.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,a.jsx)(FormattedText,{text:n})]}):null,t?.length>0?(0,a.jsxs)(c.Stack,{gap:"$2",children:[(0,a.jsx)(c.Stack,{children:(0,a.jsx)(c.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,a.jsx)(FormattedText,{text:t})]}):null,(0,a.jsxs)(c.Stack,{gap:"$2",children:[(0,a.jsx)(c.Stack,{children:(0,a.jsx)(c.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,a.jsx)(c.Stack,{children:x?.map((function(e,n){return(0,a.jsxs)(c.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,a.jsxs)(c.Stack,{flexDirection:"column",children:[(0,a.jsx)(c.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,a.jsx)(c.Stack,{paddingTop:1,children:(0,a.jsxs)(c.SizableText,{children:[e.description,"。"]})}):null]}),(0,a.jsx)(c.Stack,{children:"function"==typeof e.element?(0,a.jsx)(e.element,{}):e.element})]},`elements-${n}`)}))}),(0,a.jsx)(c.Stack,{children:p?(0,a.jsx)(c.Stack,{gap:"$3",children:p}):null})]})]})})})}}}]);