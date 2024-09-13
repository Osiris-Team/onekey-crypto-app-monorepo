"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[76400],{981065:(e,t,r)=>{r.d(t,{j:()=>PureChainSelector});var n=r(908867),s=r(490343),o=r(254491),a=r(514041),i=r(791088),l=r(880590),c=r(723110),u=r(831085),ListEmptyComponent=function(){var e=(0,n.A)();return(0,u.jsx)(s.Empty,{icon:"SearchOutline",title:e.formatMessage({id:o.ETranslations.global_no_results})})},ChainSelectorListViewContent=function({networks:e,onPressItem:t,networkId:r}){var{bottom:a}=(0,s.useSafeAreaInsets)(),c=(0,n.A)();return(0,u.jsx)(s.ListView,{ListEmptyComponent,ListFooterComponent:(0,u.jsx)(s.Stack,{h:a||"$2"}),estimatedItemSize:48,data:e,keyExtractor:function(e){return e.id},renderItem:function({item:e}){return(0,u.jsx)(i.c,{h:48,renderAvatar:(0,u.jsx)(l.vD,{logoURI:e.logoURI,size:"$8"}),title:e.isAllNetworks?c.formatMessage({id:o.ETranslations.global_all_networks}):e.name,titleMatch:e.titleMatch,onPress:function(){return t?.(e)},testID:`select-item-${e.id}`,children:r===e.id?(0,u.jsx)(i.c.CheckMark,{},"checkmark"):null})}})},ChainSelectorListView=function({networks:e,networkId:t,onPressItem:r}){var[i,l]=(0,a.useState)(""),d=(0,n.A)(),m=(0,a.useCallback)((function(e){l(e.trim())}),[]),f=(0,c.j)(e),h=(0,a.useMemo)((function(){return i?f(i):e}),[f,i,e]);return(0,u.jsxs)(s.Stack,{flex:1,children:[(0,u.jsx)(s.Stack,{px:"$5",pb:"$4",children:(0,u.jsx)(s.SearchBar,{placeholder:d.formatMessage({id:o.ETranslations.global_search}),value:i,onChangeText:m})}),(0,u.jsx)(ChainSelectorListViewContent,{networkId:t,networks:h,onPressItem:r})]})},ChainSelectorSectionList_ListEmptyComponent=function(){var e=(0,n.A)();return(0,u.jsx)(s.Empty,{icon:"SearchOutline",title:e.formatMessage({id:o.ETranslations.global_no_results})})},ChainSelectorSectionListContent=function({sections:e,onPressItem:t,networkId:r}){var{bottom:c}=(0,s.useSafeAreaInsets)(),d=(0,n.A)(),m=(0,a.useCallback)((function(e){return e.section.title?(0,u.jsx)(s.SectionList.SectionHeader,{title:e.section.title}):(0,u.jsx)(s.Stack,{})}),[]);return(0,u.jsx)(s.SectionList,{ListEmptyComponent:ChainSelectorSectionList_ListEmptyComponent,ListFooterComponent:(0,u.jsx)(s.Stack,{h:c||"$2"}),estimatedItemSize:48,sections:e,keyExtractor:function(e){return e.id},renderSectionHeader:m,renderItem:function({item:e,section:n}){return(0,u.jsx)(i.c,{h:48,renderAvatar:(0,u.jsx)(l.vD,{logoURI:e.logoURI,size:"$8"}),title:e.isAllNetworks?d.formatMessage({id:o.ETranslations.global_all_networks}):e.name,opacity:n.isUnavailable?.7:1,titleMatch:e.titleMatch,onPress:n.isUnavailable?void 0:function(){return t?.(e)},testID:`select-item-${e.id}`,children:r===e.id?(0,u.jsx)(i.c.CheckMark,{},"checkmark"):null})}})},ChainSelectorSectionList=function({networks:e,networkId:t,unavailable:r,onPressItem:i}){var[l,d]=(0,a.useState)(""),m=(0,n.A)(),f=(0,a.useCallback)((function(e){d(e.trim())}),[]),h=(0,c.j)(e),k=(0,a.useMemo)((function(){if(l){var t=h(l);return 0===t.length?[]:[{data:t}]}for(var n=[],s=[],a=0;a<e.length;a+=1){var i=e[a];i.isTestnet?n.push(i):s.push(i)}var c=s.reduce((function(e,t){var r=t.name[0].toUpperCase();return e[r]||(e[r]=[]),e[r].push(t),e}),{}),u=[...Object.entries(c).map((function([e,t]){return{title:e,data:t}})).sort((function(e,t){return e.title.charCodeAt(0)-t.title.charCodeAt(0)}))];return n.length>0&&u.push({title:m.formatMessage({id:o.ETranslations.global_testnet}),data:n}),r&&r.length>0&&u.push({title:m.formatMessage({id:o.ETranslations.network_selector_unavailable_networks}),data:r,isUnavailable:!0}),u}),[h,l,e,m,r]);return(0,u.jsxs)(s.Stack,{flex:1,children:[(0,u.jsx)(s.Stack,{px:"$5",pb:"$4",children:(0,u.jsx)(s.SearchBar,{testID:"chain-selector",placeholder:m.formatMessage({id:o.ETranslations.global_search}),value:l,onChangeText:f})}),(0,u.jsx)(ChainSelectorSectionListContent,{sections:k,networkId:t,onPressItem:i})]})},PureChainSelector=function({networks:e,title:t,networkId:r,onPressItem:a,unavailable:i,grouped:l=!0}){var c=(0,n.A)();return(0,u.jsxs)(s.Page,{safeAreaEnabled:!1,children:[(0,u.jsx)(s.Page.Header,{title:t||c.formatMessage({id:o.ETranslations.global_networks})}),(0,u.jsx)(s.Page.Body,{children:l?(0,u.jsx)(ChainSelectorSectionList,{networkId:r,networks:e,onPressItem:a,unavailable:i}):(0,u.jsx)(ChainSelectorListView,{networkId:r,networks:e,onPressItem:a})})]})}},723110:(e,t,r)=>{r.d(t,{j:()=>useFuseSearch});var n=r(324586),s=r(514041),o=r(22937);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a=["evm","dot","cosmos"],useFuseSearch=function(e){var t=(0,s.useMemo)((function(){return{fuse:(0,o.pl)(e,{keys:["name","impl","symbol","shortname"]}),symbolSet:new Set(e.map((function(e){return e.symbol.toLowerCase()}))),shortnameSet:new Set(e.map((function(e){return e.shortname.toLowerCase()})))}}),[e]);return(0,s.useCallback)((function(e){var r=e.toLowerCase(),{fuse:n,symbolSet:s,shortnameSet:o}=t,i={$or:[{name:`^${e}`},{name:`'${e}`}]};return a.includes(r)&&i.$or?.push({impl:`=${r}`}),s.has(r)&&i.$or?.push({symbol:`=${r}`}),o.has(r)&&i.$or?.push({shortname:`=${r}`}),n.search(i).map((function(e){return _objectSpread(_objectSpread({},e.item),{},{titleMatch:e.matches?.find((function(e){return"name"===e.key}))})}))}),[t])}},876400:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ChainSelectorPage});var n=r(586330),s=r(908867),o=r(911998),a=r(254491),i=r(610421),l=r(981065),c=r(831085);function ChainSelectorPage({route:e,navigation:t}){var r,u,d=(0,s.A)(),{onSelect:m,defaultNetworkId:f,networkIds:h,disableNetworkIds:k,grouped:p,title:b=d.formatMessage({id:a.ETranslations.global_networks})}=null!=(r=e.params)?r:{},{result:w}=(0,o.yk)((0,n.A)((function*(){var e,t=(yield i.A.serviceNetwork.getAllNetworks({excludeAllNetworkItem:!0})).networks;if(k&&k.length>0&&(e=t.filter((function(e){return k.includes(e.id)}))),h&&h.length>0){var r=h.reduce((function(e,t,r){return e[t]=r,e}),{});(t=t.filter((function(e){var t=h.includes(e.id);return k&&k?.length>0&&(t=t&&!k.includes(e.id)),t}))).sort((function(e,t){return r[e.id]-r[t.id]}))}return{networks:t,disableNetwork:e}})),[h,k]);return(0,c.jsx)(l.j,{title:b,networkId:f,networks:null!=(u=w?.networks)?u:[],unavailable:w?.disableNetwork,grouped:p,onPressItem:function(e){m?.(e),t.goBack()}})}}}]);