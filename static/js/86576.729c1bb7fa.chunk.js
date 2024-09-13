"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[86576],{786576:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var i=n(514041),r=n(490343),l=n(663522),a=n(654004),s=n(831085),FirstRoute=function(){return(0,s.jsx)(r.ListView,{data:new Array(20).fill({}),estimatedItemSize:"$10",scrollEnabled:l.Ay.isWebTouchable,disableScrollViewPanResponder:!0,renderItem:function({index:e}){return(0,s.jsx)(r.Stack,{style:{padding:10},children:(0,s.jsxs)(r.SizableText,{children:["Page 1 Row: ",e]})})}})},SecondRoute=function(){return(0,s.jsx)(r.ListView,{data:new Array(50).fill({}),estimatedItemSize:"$10",scrollEnabled:l.Ay.isWebTouchable,disableScrollViewPanResponder:!0,renderItem:function({index:e}){return(0,s.jsx)(r.Stack,{style:{padding:20},children:(0,s.jsxs)(r.SizableText,{children:["Page 2 Row: ",e]})})}})},TabViewScrollStickyDemo=function(){var e=(0,i.useMemo)((function(){return[{title:"吸顶标签1",page:FirstRoute},{title:"吸顶标签2",page:SecondRoute}]}),[]);return(0,s.jsx)(r.Tab,{data:e,initialScrollIndex:1,ListHeaderComponent:(0,s.jsx)(r.Stack,{bg:"$bgInfoStrong",h:100}),style:{height:400},headerProps:{itemContainerStyle:{flex:1},cursorStyle:{width:"70%",h:"$0.5",bg:"$text"}},onSelectedPageIndex:function(e){}})},ThirdRoute=function(){return(0,s.jsx)(r.ListView,{data:new Array(20).fill({}),estimatedItemSize:"$10",renderItem:function({index:e}){return(0,s.jsx)(r.Stack,{style:{padding:10},children:(0,s.jsxs)(r.SizableText,{children:["Page 1 Row: ",e]})})}})},FourthRoute=function(){return(0,s.jsx)(r.ListView,{data:new Array(50).fill({}),estimatedItemSize:"$10",renderItem:function({index:e}){return(0,s.jsx)(r.Stack,{style:{padding:20},children:(0,s.jsxs)(r.SizableText,{children:["Page 2 Row: ",e]})})}})},TabViewScrollPageDemo=function(){var e=(0,i.useMemo)((function(){return[{title:"不吸顶标签1",page:ThirdRoute},{title:"禁止选中标签2",page:FourthRoute},{title:"不吸顶标签3",page:FourthRoute}]}),[]);return(0,s.jsx)(r.Tab.Page,{data:e,initialScrollIndex:2,ListHeaderComponent:(0,s.jsx)(r.Stack,{bg:"$bgInfoStrong",h:100}),ListFooterComponent:(0,s.jsx)(r.Stack,{bg:"$bgInfoStrong",h:100}),headerProps:{cursorStyle:{width:"70%",h:"$0.5",bg:"$text"}},shouldSelectedPageIndex:function(e){var t=1!==e;return t||r.Toast.error({title:"未登录"}),t},onSelectedPageIndex:function(e){}})};const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,s.jsx)(a.P,{description:"",suggestions:["吸顶用 Tab","不需要吸顶用 Tab.Page, 它继承自 Fragment, 尽量不要把 Tab.Page 放到 ScrollView 里面"],boundaryConditions:[],elements:[{title:"Header 自定义1",element:(0,s.jsx)(r.Tab.Header,{data:[{title:"标签1"},{title:"标签2"},{title:"标签标签3"},{title:"标签4"}],onSelectedPageIndex:function(e){}})},{title:"Header 自定义2",element:(0,s.jsx)(r.Tab.Header,{data:[{title:"标签1"},{title:"标签2"},{title:"标签标签3"},{title:"标签4"}],itemContainerStyle:{flex:1},itemTitleNormalStyle:{color:"$text",fontSize:13},itemTitleSelectedStyle:{color:"$textInverse",fontSize:15},cursorStyle:{width:88,height:34,borderRadius:17,top:5,bg:"$bgInfoStrong"},onSelectedPageIndex:function(e){}})},{title:"Tab 需要吸顶使用",element:(0,s.jsx)(TabViewScrollStickyDemo,{})},{title:"Tab.Page 不需要吸顶使用",element:(0,s.jsx)(r.Stack,{h:700,children:(0,s.jsx)(TabViewScrollPageDemo,{})})}]})}},654004:(e,t,n)=>{n.d(t,{P:()=>Layout});var i=n(586330),r=n(654266),l=n(490343),a=n(989375),s=n(610421),d=n(498356),o=n(392097),c=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,c.jsx)(l.Stack,{children:(0,c.jsxs)(l.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,c.jsx)(l.Stack,{children:(0,c.jsx)(l.Stack,{gap:"$1",children:e.map((function(t,n){return(0,c.jsx)(l.Stack,{children:(0,c.jsxs)(l.SizableText,{children:[n+1,". ",t,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:n=[],elements:x=[],scrollEnabled:h=!0,contentInsetAdjustmentBehavior:u="never",skipLoading:g=!1,children:S}){var j=(0,a.U6)(),m=(0,d.A)();return(0,c.jsx)(l.Page,{skipLoading:g,children:(0,c.jsx)(l.ScrollView,{maxWidth:"100%",scrollEnabled:h,flex:1,marginBottom:j,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:u,children:(0,c.jsxs)(l.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6",children:[(0,c.jsxs)(l.XStack,{children:[(0,c.jsx)(l.IconButton,{icon:"HomeLineOutline",onPress:function(){m.dispatch(r.y9.replace(o.WP.Main,{screen:o.V4.Developer,params:{screen:o.f$.TabDeveloper}}))}}),(0,c.jsx)(l.Button,{ml:"$4",onPress:(0,i.A)((function*(){yield s.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,c.jsx)(l.Button,{ml:"$4",variant:"primary",onPress:(0,i.A)((function*(){yield s.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,c.jsxs)(l.Stack,{gap:"$2",children:[(0,c.jsx)(l.Stack,{children:(0,c.jsx)(l.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,c.jsx)(l.Stack,{children:(0,c.jsx)(FormattedText,{text:e})})]}):null,t?(0,c.jsxs)(l.Stack,{gap:"$2",children:[(0,c.jsx)(l.Stack,{children:(0,c.jsx)(l.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,c.jsx)(FormattedText,{text:t})]}):null,n?.length>0?(0,c.jsxs)(l.Stack,{gap:"$2",children:[(0,c.jsx)(l.Stack,{children:(0,c.jsx)(l.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,c.jsx)(FormattedText,{text:n})]}):null,(0,c.jsxs)(l.Stack,{gap:"$2",children:[(0,c.jsx)(l.Stack,{children:(0,c.jsx)(l.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,c.jsx)(l.Stack,{children:x?.map((function(e,t){return(0,c.jsxs)(l.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,c.jsxs)(l.Stack,{flexDirection:"column",children:[(0,c.jsx)(l.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,c.jsx)(l.Stack,{paddingTop:1,children:(0,c.jsxs)(l.SizableText,{children:[e.description,"。"]})}):null]}),(0,c.jsx)(l.Stack,{children:"function"==typeof e.element?(0,c.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,c.jsx)(l.Stack,{children:S?(0,c.jsx)(l.Stack,{gap:"$3",children:S}):null})]})]})})})}}}]);