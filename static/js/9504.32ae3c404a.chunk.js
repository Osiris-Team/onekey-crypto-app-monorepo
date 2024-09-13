"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9504],{709504:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=n(514041),a=n(490343),i=n(287121),c=n(654004),l=n(831085),o={type:void 0,path:"",coinType:"",impl:"",networks:[],template:"",id:"111111111",address:"2222222",name:"1",pub:"",addresses:{aaaa:"1"},connectedAddresses:{},selectedAddress:{},addressDetail:{networkId:"tbtc--0",address:"0x1111111",baseAddress:"0x1111111",normalizedAddress:"0x1111111",displayAddress:"0x1111111",isValid:!0,allowEmptyAddress:!1}},r={id:"external--hw-da2fb056-f3c8-4b55-922e-a04a6fea29cf--m/44'/0'/0",name:"2222",address:"0x222222",connectionInfo:{evmInjected:{global:"ethereum",name:"string",icon:"https://uni.onekey-asset.com/static/chain/btc.png"}}},d={id:"external--hw-da2fb05u-f3c8-4b55-922e-a04a6fea29cf--m/44'/0'/0",name:"3333",address:"0x222222",connectionInfo:{evmInjected:{global:"ethereum",name:"string",icon:"https://onekey-asset.com/assets/btc/btc.pn"}}};const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,l.jsx)(c.P,{description:"",suggestions:[""],boundaryConditions:[""],elements:[{title:"Default",element:(0,l.jsxs)(a.YStack,{gap:"$4",justifyContent:"center",children:[(0,l.jsx)(i.h,{}),(0,l.jsx)(i.h,{src:"https://cdn.bitkeep.vip/web/v10037/img/down/logo.png"}),(0,l.jsx)(i.h,{src:"https://avatars2.githubusercontent.com/u/48327834?s=200&v=4"}),(0,l.jsx)(i.h,{address:"0x1111111"}),(0,l.jsx)(i.h,{account:o}),(0,l.jsx)(i.h,{size:"small"}),(0,l.jsx)(i.h,{size:"small",account:o}),(0,l.jsx)(i.h,{networkId:"tbtc--0"}),(0,l.jsx)(i.h,{account:o,networkId:"tbtc--0"}),(0,l.jsx)(i.h,{size:"small",networkId:"tbtc--0"}),(0,l.jsx)(i.h,{size:"small",account:o,networkId:"tbtc--0"}),(0,l.jsx)(i.h,{size:"small",src:"https://onekey-asset.com/assets/btc/btc.pn"}),(0,l.jsx)(i.h,{size:"small",src:"https://uni.onekey-asset.com/static/chain/btc.png"}),(0,l.jsx)(i.h,{src:"https://uni.onekey-asset.com/static/chain/btc.png"})]})},{title:"Switch Image URI",element:function(){var[e,t]=(0,s.useState)("");return(0,l.jsxs)(a.YStack,{gap:"$4",children:[(0,l.jsx)(i.h,{src:e}),(0,l.jsxs)(a.YStack,{gap:"$4",children:[(0,l.jsx)(a.Button,{onPress:function(){t("https://onekey-asset.com/assets/btc/btc.pn")},children:"Change to invalid URI"}),(0,l.jsx)(a.Button,{onPress:function(){t("https://uni.onekey-asset.com/static/chain/btc.png")},children:"Change to valid URI"}),(0,l.jsx)(a.Button,{onPress:function(){t("")},children:"Change to empty URI"})]})]})}},{title:"Switch Account",element:function(){var[e,t]=(0,s.useState)("default"),[n,c]=(0,s.useState)(void 0);return(0,l.jsxs)(a.YStack,{gap:"$4",children:[(0,l.jsx)(i.h,{dbAccount:n,size:e}),(0,l.jsxs)(a.YStack,{gap:"$4",children:[(0,l.jsx)(a.Select,{items:[{value:"default",label:"default"},{value:"small",label:"small"}],value:e,onChange:t,title:"Demo Title",onOpenChange:function(){}}),(0,l.jsx)(a.Button,{onPress:function(){c(o)},children:"Change to db Network Account"}),(0,l.jsx)(a.Button,{onPress:function(){c(r)},children:"Change to External account"}),(0,l.jsx)(a.Button,{onPress:function(){c(d)},children:"Change to invalid External account"}),(0,l.jsx)(a.Button,{onPress:function(){c(void 0)},children:"Change to empty account"})]})]})}}]})}},654004:(e,t,n)=>{n.d(t,{P:()=>Layout});var s=n(586330),a=n(654266),i=n(490343),c=n(989375),l=n(610421),o=n(498356),r=n(392097),d=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(i.Stack,{children:(0,d.jsxs)(i.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.Stack,{gap:"$1",children:e.map((function(t,n){return(0,d.jsx)(i.Stack,{children:(0,d.jsxs)(i.SizableText,{children:[n+1,". ",t,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:n=[],elements:h=[],scrollEnabled:x=!0,contentInsetAdjustmentBehavior:u="never",skipLoading:j=!1,children:m}){var p=(0,c.U6)(),g=(0,o.A)();return(0,d.jsx)(i.Page,{skipLoading:j,children:(0,d.jsx)(i.ScrollView,{maxWidth:"100%",scrollEnabled:x,flex:1,marginBottom:p,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:u,children:(0,d.jsxs)(i.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6",children:[(0,d.jsxs)(i.XStack,{children:[(0,d.jsx)(i.IconButton,{icon:"HomeLineOutline",onPress:function(){g.dispatch(a.y9.replace(r.WP.Main,{screen:r.V4.Developer,params:{screen:r.f$.TabDeveloper}}))}}),(0,d.jsx)(i.Button,{ml:"$4",onPress:(0,s.A)((function*(){yield l.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(i.Button,{ml:"$4",variant:"primary",onPress:(0,s.A)((function*(){yield l.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(i.Stack,{gap:"$2",children:[(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(i.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,t?(0,d.jsxs)(i.Stack,{gap:"$2",children:[(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:t})]}):null,n?.length>0?(0,d.jsxs)(i.Stack,{gap:"$2",children:[(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,(0,d.jsxs)(i.Stack,{gap:"$2",children:[(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(i.Stack,{children:h?.map((function(e,t){return(0,d.jsxs)(i.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(i.Stack,{flexDirection:"column",children:[(0,d.jsx)(i.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(i.Stack,{paddingTop:1,children:(0,d.jsxs)(i.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(i.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,d.jsx)(i.Stack,{children:m?(0,d.jsx)(i.Stack,{gap:"$3",children:m}):null})]})]})})})}}}]);