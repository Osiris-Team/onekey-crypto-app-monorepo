"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[74247],{474247:(e,n,i)=>{i.r(n),i.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var t=i(490343),s=i(790810),o=i(654004),c=i(831085),r=Object.keys(s.A);const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,c.jsx)(o.P,{description:"图标是一种视觉符号，用于表示对象或概念",suggestions:["图标的设计应该简洁、易于理解、易于识别"],boundaryConditions:[],elements:[{title:"colorful icon",element:(0,c.jsxs)(t.XStack,{gap:10,children:[(0,c.jsx)(t.Icon,{name:"AirpodsSolid",color:"$icon"}),(0,c.jsx)(t.Icon,{name:"AirpodsSolid",color:"$iconHover"}),(0,c.jsx)(t.Icon,{name:"AirpodsSolid",color:"$iconInverse"}),(0,c.jsx)(t.Icon,{name:"AirpodsSolid",color:"$iconActive"})]})},{title:"sized icon",element:(0,c.jsxs)(t.XStack,{gap:10,children:[(0,c.jsx)(t.Icon,{name:"AirpodsSolid",color:"$icon",size:"$4"}),(0,c.jsx)(t.Icon,{name:"AirpodsSolid",color:"$iconInverse",size:"$8"}),(0,c.jsx)(t.Icon,{name:"AirpodsSolid",color:"$icon",size:"$12"}),(0,c.jsx)(t.Icon,{name:"AirpodsSolid",color:"$iconInverse",size:"$16"})]})},{title:"icons",element:(0,c.jsx)(t.ListView,{estimatedItemSize:"$20",removeClippedSubviews:!0,width:"100%",height:"$75",numColumns:4,data:r,renderItem:function({item:e}){return(0,c.jsxs)(t.Stack,{height:"$28",children:[(0,c.jsx)(t.SizableText,{children:e}),(0,c.jsx)(t.Stack,{position:"absolute",bottom:"$10",children:(0,c.jsx)(t.Icon,{name:e})})]},e)}})}]})}},654004:(e,n,i)=>{i.d(n,{P:()=>Layout});var t=i(586330),s=i(654266),o=i(490343),c=i(989375),r=i(610421),l=i(498356),a=i(392097),d=i(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(o.Stack,{children:(0,d.jsxs)(o.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.Stack,{gap:"$1",children:e.map((function(n,i){return(0,d.jsx)(o.Stack,{children:(0,d.jsxs)(o.SizableText,{children:[i+1,". ",n,i===e.length-1?"。":"；"]})},i.toString())}))})})};function Layout({description:e="",suggestions:n=[],boundaryConditions:i=[],elements:x=[],scrollEnabled:h=!0,contentInsetAdjustmentBehavior:j="never",skipLoading:S=!1,children:m}){var p=(0,c.U6)(),u=(0,l.A)();return(0,d.jsx)(o.Page,{skipLoading:S,children:(0,d.jsx)(o.ScrollView,{maxWidth:"100%",scrollEnabled:h,flex:1,marginBottom:p,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:j,children:(0,d.jsxs)(o.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6",children:[(0,d.jsxs)(o.XStack,{children:[(0,d.jsx)(o.IconButton,{icon:"HomeLineOutline",onPress:function(){u.dispatch(s.y9.replace(a.WP.Main,{screen:a.V4.Developer,params:{screen:a.f$.TabDeveloper}}))}}),(0,d.jsx)(o.Button,{ml:"$4",onPress:(0,t.A)((function*(){yield r.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(o.Button,{ml:"$4",variant:"primary",onPress:(0,t.A)((function*(){yield r.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(o.Stack,{gap:"$2",children:[(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(o.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,n?(0,d.jsxs)(o.Stack,{gap:"$2",children:[(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,i?.length>0?(0,d.jsxs)(o.Stack,{gap:"$2",children:[(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:i})]}):null,(0,d.jsxs)(o.Stack,{gap:"$2",children:[(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(o.Stack,{children:x?.map((function(e,n){return(0,d.jsxs)(o.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(o.Stack,{flexDirection:"column",children:[(0,d.jsx)(o.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(o.Stack,{paddingTop:1,children:(0,d.jsxs)(o.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(o.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${n}`)}))}),(0,d.jsx)(o.Stack,{children:m?(0,d.jsx)(o.Stack,{gap:"$3",children:m}):null})]})]})})})}}}]);