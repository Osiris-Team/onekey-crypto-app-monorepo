"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[55209],{455209:(e,n,t)=>{t.r(n),t.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=t(514041),i=t(490343),r=t(654004),l=t(831085);function ProgressDemo(){var[e,n]=(0,s.useState)(0);return(0,l.jsxs)(i.YStack,{gap:"$2",children:[(0,l.jsx)(i.Progress,{value:e}),(0,l.jsx)(i.Button,{onPress:function(){n(e+10)},children:"Increase"})]})}const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,l.jsx)(r.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Default",element:(0,l.jsx)(ProgressDemo,{})},{title:"0",element:(0,l.jsxs)(i.YStack,{gap:"$2",children:[(0,l.jsx)(i.Progress,{value:0}),(0,l.jsx)(i.Progress,{value:.1}),(0,l.jsx)(i.Progress,{value:60}),(0,l.jsx)(i.Progress,{value:80}),(0,l.jsx)(i.Progress,{value:100})]})}]})}},654004:(e,n,t)=>{t.d(n,{P:()=>Layout});var s=t(586330),i=t(654266),r=t(490343),l=t(989375),a=t(610421),c=t(498356),o=t(392097),d=t(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(r.Stack,{children:(0,d.jsxs)(r.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.Stack,{gap:"$1",children:e.map((function(n,t){return(0,d.jsx)(r.Stack,{children:(0,d.jsxs)(r.SizableText,{children:[t+1,". ",n,t===e.length-1?"。":"；"]})},t.toString())}))})})};function Layout({description:e="",suggestions:n=[],boundaryConditions:t=[],elements:x=[],scrollEnabled:h=!0,contentInsetAdjustmentBehavior:u="never",skipLoading:j=!1,children:g}){var S=(0,l.U6)(),p=(0,c.A)();return(0,d.jsx)(r.Page,{skipLoading:j,children:(0,d.jsx)(r.ScrollView,{maxWidth:"100%",scrollEnabled:h,flex:1,marginBottom:S,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:u,children:(0,d.jsxs)(r.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6",children:[(0,d.jsxs)(r.XStack,{children:[(0,d.jsx)(r.IconButton,{icon:"HomeLineOutline",onPress:function(){p.dispatch(i.y9.replace(o.WP.Main,{screen:o.V4.Developer,params:{screen:o.f$.TabDeveloper}}))}}),(0,d.jsx)(r.Button,{ml:"$4",onPress:(0,s.A)((function*(){yield a.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(r.Button,{ml:"$4",variant:"primary",onPress:(0,s.A)((function*(){yield a.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(r.Stack,{gap:"$2",children:[(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(r.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,n?(0,d.jsxs)(r.Stack,{gap:"$2",children:[(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,t?.length>0?(0,d.jsxs)(r.Stack,{gap:"$2",children:[(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:t})]}):null,(0,d.jsxs)(r.Stack,{gap:"$2",children:[(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(r.Stack,{children:x?.map((function(e,n){return(0,d.jsxs)(r.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(r.Stack,{flexDirection:"column",children:[(0,d.jsx)(r.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(r.Stack,{paddingTop:1,children:(0,d.jsxs)(r.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(r.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${n}`)}))}),(0,d.jsx)(r.Stack,{children:g?(0,d.jsx)(r.Stack,{gap:"$3",children:g}):null})]})]})})})}}}]);