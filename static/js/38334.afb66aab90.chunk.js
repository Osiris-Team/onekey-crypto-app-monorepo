"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[38334],{304695:(e,t,r)=>{r.d(t,{V:()=>NetworksFilterItem});var n=r(324586),o=r(839850),c=r(17617),a=r(490343),i=r(831085),s=["networkImageUri","networkName","isSelected","tooltipContent","disabled"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function NetworksFilterItem(e){var{networkImageUri:t,networkName:r,isSelected:n,tooltipContent:l,disabled:d}=e,u=(0,o.A)(e,s),p=(0,i.jsxs)(a.XStack,_objectSpread(_objectSpread(_objectSpread(_objectSpread({justifyContent:"center",px:"$3",py:"$1.5",borderRadius:"$2",userSelect:"none",borderWidth:c.A.hairlineWidth,borderColor:n?"$borderActive":"$border"},!n&&!d&&{focusable:!0,hoverStyle:{bg:"$bgStrongHover"},pressStyle:{bg:"$bgStrongActive"},focusVisibleStyle:{outlineWidth:2,outlineStyle:"solid",outlineColor:"$focusRing"}}),d&&{opacity:.5}),u),{},{children:[t?(0,i.jsx)(a.Image,{height:"$6",width:"$6",borderRadius:"$full",$gtMd:{height:"$5",width:"$5"},children:(0,i.jsx)(a.Image.Source,{source:{uri:t}})}):null,r?(0,i.jsx)(a.SizableText,{numberOfLines:1,color:n?"$textOnColor":"$textSubdued",size:"$bodyLgMedium",$gtMd:{size:"$bodyMdMedium"},children:r}):null]}));return l?(0,i.jsx)(a.Tooltip,{renderContent:l,placement:"top",renderTrigger:p}):p}},771821:(e,t,r)=>{r.d(t,{v:()=>TokenListItem});var n=r(324586),o=r(839850),c=r(490343),a=r(791088),i=r(491180),s=r(391944),l=r(831085),d=["tokenImageSrc","networkImageSrc","tokenName","isSearch","tokenSymbol","tokenContrastAddress","balance","valueProps","disabled","titleMatchStr","moreComponent"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function TokenListItem(e){var t,{tokenImageSrc:r,networkImageSrc:n,tokenName:u,isSearch:p,tokenSymbol:b,tokenContrastAddress:m,balance:g,valueProps:h,disabled:j,titleMatchStr:S,moreComponent:x}=e,f=(0,o.A)(e,d);return(0,l.jsxs)(a.c,_objectSpread(_objectSpread(_objectSpread({userSelect:"none"},p&&{$md:{alignItems:"flex-start"}}),f),{},{children:[(0,l.jsx)(s.o,_objectSpread(_objectSpread({},j&&{opacity:.5}),{},{tokenImageUri:r,networkImageUri:n})),(0,l.jsx)(a.c.Text,_objectSpread(_objectSpread({},j&&{opacity:.5}),{},{flex:1,primary:b,primaryMatch:S,primaryTextProps:{numberOfLines:1},secondary:p?(0,l.jsxs)(c.Stack,{gap:"$0.5",$gtMd:{flexDirection:"row",gap:"$1"},children:[(0,l.jsx)(c.SizableText,{numberOfLines:1,color:"$textSubdued",size:"$bodyMd",children:u}),(0,l.jsx)(c.SizableText,{color:"$textDisabled",size:"$bodyMd",children:i.A.shortenAddress({address:m,leadingLength:8,trailingLength:6})})]}):null!=u?u:""})),(0,l.jsx)(a.c.Text,_objectSpread(_objectSpread({},j&&{opacity:.5}),{},{align:"right",primary:(0,l.jsx)(c.NumberSizeableText,{textAlign:"right",color:"$text",formatter:"balance",size:"$bodyLgMedium",children:g}),secondary:h?.value?(0,l.jsx)(c.NumberSizeableText,{textAlign:"right",size:"$bodyMd",formatter:"value",color:"$textSubdued",formatterOptions:{currency:null!=(t=h?.currency)?t:"$"},children:h.value}):null})),x]}))}},638334:(e,t,r)=>{r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var n=r(324586),o=r(514041),c=r(490343),a=r(88803),i=r(304695),s=r(771821),l=r(654004),d=r(831085);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,d.jsx)(l.P,{description:"",suggestions:[""],boundaryConditions:[""],elements:[{title:"Example 1 (Send)",element:function(){var[e,t]=(0,o.useState)("123");return(0,d.jsx)(a.J,{value:e,onChange:t,valueProps:{value:"1.00",onPress:function(){alert("onSwitchPress")},currency:"$"},balanceProps:{value:"0.5",onPress:function(){alert("onBalancePress")}},inputProps:{placeholder:"0"},tokenSelectorTriggerProps:{selectedTokenImageUri:"https://uni.onekey-asset.com/static/chain/btc.png",selectedTokenSymbol:"BTC"},enableMaxAmount:!0,reversible:!0})}},{title:"Example 2 (fallback element)",element:function(){var[e,t]=(0,o.useState)(""),[r,n]=(0,o.useState)({selectedTokenImageUri:"https://uni.onekey-asset.com/static/chain/btc.png",selectedTokenSymbol:"BTC"}),[i,s]=(0,o.useState)({balance:"",onPress:function(){alert("onBalancePress")}}),[l,u]=(0,o.useState)({value:"1.00",onPress:function(){alert("onAmountPress")}}),[p,b]=(0,o.useState)(!1),m=(0,o.useCallback)((function(){b(!0),setTimeout((function(){b(!1)}),3e3)}),[]),g=(0,o.useCallback)((function(){n((function(e){return _objectSpread(_objectSpread({},e),{},{loading:!0})})),setTimeout((function(){n((function(e){return _objectSpread(_objectSpread({},e),{},{loading:!1})}))}),3e3)}),[]),h=(0,o.useCallback)((function(){u((function(e){return _objectSpread(_objectSpread({},e),{},{loading:!0})})),setTimeout((function(){u((function(e){return _objectSpread(_objectSpread({},e),{},{value:"131231.123123",loading:!1})}))}),3e3)}),[]),j=(0,o.useCallback)((function(){s((function(e){return _objectSpread(_objectSpread({},e),{},{loading:!0})})),setTimeout((function(){s((function(e){return _objectSpread(_objectSpread({},e),{},{balance:"111111.2222",loading:!1})}))}),3e3)}),[]);return(0,d.jsxs)(c.YStack,{gap:"$5",children:[(0,d.jsx)(a.J,{value:e,onChange:t,valueProps:l,balanceProps:i,inputProps:{placeholder:"0",loading:p},tokenSelectorTriggerProps:r,enableMaxAmount:!0,reversible:!0}),(0,d.jsx)(c.Button,{onPress:m,children:"Amount loading"}),(0,d.jsx)(c.Button,{onPress:g,children:"Token loading"}),(0,d.jsx)(c.Button,{onPress:h,children:"Value loading"}),(0,d.jsx)(c.Button,{onPress:j,children:"Balance loading"})]})}},{title:"Example 3 (Swap - Empty)",element:function(){var[e,t]=(0,o.useState)("123");return(0,d.jsx)(a.J,{valueProps:{},value:e,onChange:t,tokenSelectorTriggerProps:{onPress:function(){return alert("TokenSelectorModal")}},inputProps:{placeholder:"0"}})}},{title:"Example 4 (Swap - From Token)",element:(0,d.jsx)(a.J,{inputProps:{placeholder:"0"},valueProps:{},tokenSelectorTriggerProps:{selectedTokenImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/usdc.png",selectedNetworkImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/matic.png",selectedTokenSymbol:"BTC",onPress:function(){return alert("TokenSelectorModal")}},balanceProps:{value:"0.5"},enableMaxAmount:!0})},{title:"Example 5 (Swap - To Token)",element:(0,d.jsx)(a.J,{value:"0.5",valueProps:{},inputProps:{placeholder:"0",readOnly:!0},tokenSelectorTriggerProps:{selectedTokenImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/usdc.png",selectedNetworkImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/matic.png",selectedTokenSymbol:"BTC",onPress:function(){return alert("TokenSelectorModal")}},balanceProps:{value:"0.5"}})},{title:"Example 6 (Error)",element:function(){var e=(0,c.useForm)({defaultValues:{amount:""}});return(0,d.jsx)(c.Form,{form:e,children:(0,d.jsx)(c.Form.Field,{name:"amount",rules:{required:!0},children:(0,d.jsx)(a.J,{valueProps:{},balanceProps:{value:"0.5"}})})})}},{title:"Example 7 (Form)",element:function(){var e=(0,c.useForm)({defaultValues:{amount:""}});return(0,d.jsxs)(c.Stack,{gap:"$2",children:[(0,d.jsx)(c.Form,{form:e,children:(0,d.jsx)(c.Form.Field,{name:"amount",children:(0,d.jsx)(a.J,{valueProps:{},balanceProps:{value:"0.5"}})})}),(0,d.jsx)(c.Button,{onPress:function(){alert(JSON.stringify(e.getValues()))},children:"get form values"})]})}},{title:"TokenListItem in TokenSearchModal",element:(0,d.jsxs)(c.Stack,{children:[(0,d.jsxs)(c.Stack,{children:[(0,d.jsxs)(c.XStack,{px:"$5",pt:"$1",pb:"$3",gap:"$2",children:[(0,d.jsx)(i.V,{networkName:"All",tooltipContent:"All Networks"}),(0,d.jsx)(i.V,{networkImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/eth.png",isSelected:!0,tooltipContent:"Ethereum"}),(0,d.jsx)(i.V,{networkImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/btc.png",tooltipContent:"Bitcoin"}),(0,d.jsx)(i.V,{networkImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/eth.png",tooltipContent:"Ethereum"}),(0,d.jsx)(i.V,{networkImageUri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/btc.png",tooltipContent:"Bitcoin",disabled:!0}),(0,d.jsx)(i.V,{networkName:"12+",flex:1})]}),(0,d.jsxs)(c.XStack,{px:"$5",py:"$2",children:[(0,d.jsx)(c.SizableText,{size:"$headingSm",pr:"$2",children:"Network:"}),(0,d.jsxs)(c.XStack,{children:[(0,d.jsx)(c.Image,{height:"$5",width:"$5",borderRadius:"$full",children:(0,d.jsx)(c.Image.Source,{source:{uri:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/eth.png"}})}),(0,d.jsx)(c.SizableText,{size:"$bodyMd",pl:"$2",children:"Ethereum"})]})]})]}),(0,d.jsx)(c.ListView,{estimatedItemSize:60,data:new Array(10).fill({tokenImageSrc:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/usdc.png",networkImageSrc:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/matic.png",tokenName:"USD Coin",tokenSymbol:"USDC",tokenContrastAddress:"0x1234...5678",balance:"89.9",value:"$89.75",onPress:function(){}}),renderItem:function({item:e}){return(0,d.jsx)(s.v,_objectSpread({},e))}})]})}]})}},654004:(e,t,r)=>{r.d(t,{P:()=>Layout});var n=r(586330),o=r(654266),c=r(490343),a=r(989375),i=r(610421),s=r(498356),l=r(392097),d=r(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(c.Stack,{children:(0,d.jsxs)(c.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.Stack,{gap:"$1",children:e.map((function(t,r){return(0,d.jsx)(c.Stack,{children:(0,d.jsxs)(c.SizableText,{children:[r+1,". ",t,r===e.length-1?"。":"；"]})},r.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:r=[],elements:u=[],scrollEnabled:p=!0,contentInsetAdjustmentBehavior:b="never",skipLoading:m=!1,children:g}){var h=(0,a.U6)(),j=(0,s.A)();return(0,d.jsx)(c.Page,{skipLoading:m,children:(0,d.jsx)(c.ScrollView,{maxWidth:"100%",scrollEnabled:p,flex:1,marginBottom:h,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:b,children:(0,d.jsxs)(c.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6",children:[(0,d.jsxs)(c.XStack,{children:[(0,d.jsx)(c.IconButton,{icon:"HomeLineOutline",onPress:function(){j.dispatch(o.y9.replace(l.WP.Main,{screen:l.V4.Developer,params:{screen:l.f$.TabDeveloper}}))}}),(0,d.jsx)(c.Button,{ml:"$4",onPress:(0,n.A)((function*(){yield i.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(c.Button,{ml:"$4",variant:"primary",onPress:(0,n.A)((function*(){yield i.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(c.Stack,{gap:"$2",children:[(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(c.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,t?(0,d.jsxs)(c.Stack,{gap:"$2",children:[(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:t})]}):null,r?.length>0?(0,d.jsxs)(c.Stack,{gap:"$2",children:[(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:r})]}):null,(0,d.jsxs)(c.Stack,{gap:"$2",children:[(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(c.Stack,{children:u?.map((function(e,t){return(0,d.jsxs)(c.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(c.Stack,{flexDirection:"column",children:[(0,d.jsx)(c.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(c.Stack,{paddingTop:1,children:(0,d.jsxs)(c.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(c.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,d.jsx)(c.Stack,{children:g?(0,d.jsx)(c.Stack,{gap:"$3",children:g}):null})]})]})})})}}}]);