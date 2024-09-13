"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8814,74247,86576],{5679:(e,o,n)=>{n.d(o,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var t=n(324586),a=n(514041);function ownKeys(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}var i="undefined"!=typeof window&&"undefined"!=typeof document;var setCookie=function(e,o,n){if(i){var a=function _objectSpread(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?ownKeys(Object(n),!0).forEach((function(o){(0,t.A)(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}({days:7,path:"/"},n),r=new Date(Date.now()+864e5*a.days).toUTCString();document.cookie=`${e}=${encodeURIComponent(o)}; expires=${r}${function stringifyOptions(e){return Object.keys(e).reduce((function(o,n){return"days"===n||!1===e[n]?o:!0===e[n]?`${o}; ${n}`:`${o}; ${n}=${String(e[n])}`}),"")}(a)}`}},getCookie=function(e,o=""){return i&&document.cookie.split("; ").reduce((function(o,n){var t=n.split("=");return t[0]===e?decodeURIComponent(t[1]):o}),"")||o};function __WEBPACK_DEFAULT_EXPORT__(e,o){var[n,t]=(0,a.useState)((function(){return getCookie(e,o)}));return[n,function(o,n){t(o),setCookie(e,o,n)}]}},474247:(e,o,n)=>{n.r(o),n.d(o,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var t=n(490343),a=n(790810),i=n(654004),r=n(831085),s=Object.keys(a.A);const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,r.jsx)(i.P,{description:"图标是一种视觉符号，用于表示对象或概念",suggestions:["图标的设计应该简洁、易于理解、易于识别"],boundaryConditions:[],elements:[{title:"colorful icon",element:(0,r.jsxs)(t.XStack,{gap:10,children:[(0,r.jsx)(t.Icon,{name:"AirpodsSolid",color:"$icon"}),(0,r.jsx)(t.Icon,{name:"AirpodsSolid",color:"$iconHover"}),(0,r.jsx)(t.Icon,{name:"AirpodsSolid",color:"$iconInverse"}),(0,r.jsx)(t.Icon,{name:"AirpodsSolid",color:"$iconActive"})]})},{title:"sized icon",element:(0,r.jsxs)(t.XStack,{gap:10,children:[(0,r.jsx)(t.Icon,{name:"AirpodsSolid",color:"$icon",size:"$4"}),(0,r.jsx)(t.Icon,{name:"AirpodsSolid",color:"$iconInverse",size:"$8"}),(0,r.jsx)(t.Icon,{name:"AirpodsSolid",color:"$icon",size:"$12"}),(0,r.jsx)(t.Icon,{name:"AirpodsSolid",color:"$iconInverse",size:"$16"})]})},{title:"icons",element:(0,r.jsx)(t.ListView,{estimatedItemSize:"$20",removeClippedSubviews:!0,width:"100%",height:"$75",numColumns:4,data:s,renderItem:function({item:e}){return(0,r.jsxs)(t.Stack,{height:"$28",children:[(0,r.jsx)(t.SizableText,{children:e}),(0,r.jsx)(t.Stack,{position:"absolute",bottom:"$10",children:(0,r.jsx)(t.Icon,{name:e})})]},e)}})}]})}},708814:(e,o,n)=>{n.r(o),n.d(o,{default:()=>NavigatorRoute});var t=n(505026),a=n(514041),i=n(490343),r=n(654004),s=n(153763),l=n(831085);function NavigationFocusTools({componentName:e}){var o=(0,s.E)();return(0,a.useEffect)((function(){}),[e,o]),(0,l.jsxs)(i.SizableText,{children:[e," isFocused: ",o?"true":"false"]})}function FreezeProbe({componentName:e}){var o=function useFreezeProbe(e,o){var[n,t]=(0,a.useState)(0);return(0,a.useEffect)((function(){var e=setInterval((function(){o?.pause||t((function(e){return e+1}))}),5e3);return function(){clearInterval(e)}}),[o?.pause]),(0,a.useEffect)((function(){}),[e,n]),n}(e);return(0,l.jsxs)(i.SizableText,{children:[e," Rerender Count: ",o]})}var c=n(654266),d=function(e){return e.Main="main",e.Modal="modal",e}({});!function(e){e.Tab="tab"}({});const u=function useDemoAppNavigation(){var e=(0,c.cq)(),popStack=function(){e.getParent()?.goBack?.()},o=i.Page.Header.usePageHeaderReloadOptions();return{navigation:e,reset:e.reset,dispatch:e.dispatch,push:e.navigate,switchTab:function(o,n){e.navigate(d.Main,{screen:o,params:n})},pushModal:function(o,n){e.navigate(d.Modal,{screen:o,params:n})},pop:function(){e.canGoBack?.()?e.goBack?.():popStack()},popStack,setOptions:function setOptions(n){var t=o.reload(n);e.setOptions(t)}}};var m=function(e){return e.DemoCreateModal="DemoCreateModalStack",e.DemoLockedModal="DemoLockedModalStack",e.DemoCoverageModal="DemoCoverageModalStack",e}({}),p=function(e){return e.DemoCreateModal="DemoCreateModal",e.DemoCreateSearchModal="DemoCreateSearchModal",e.DemoCreateOptionsModal="DemoCreateOptionsModal",e.DemoBigListModal="DemoBigListModal",e}({}),h=function(e){return e.DemoLockedModal="DemoLockedModal",e.DemoConfigLockedModal="DemoConfigLockedModal",e.DemoManualLockedViewModal="DemoManualLockedViewModal",e.DemoRepeatManualLockedViewModal="DemoRepeatManualLockedViewModal",e.DemoShouldPopOnClickBackdropViewModal="DemoShouldPopOnClickBackdropViewModal",e}({}),g=function(e){return e.DemoCoverageModal="DemoCoverageModal",e.DemoCoverageDialogModal="DemoCoverageDialogModal",e.DemoCoverageModalModal="DemoCoverageModalModal",e}({});var ControlledPopoverByButton=function(){var[e,o]=(0,a.useState)(!1);return(0,l.jsx)(i.Popover,{title:"Popover Demo",open:e,onOpenChange:o,renderTrigger:(0,l.jsx)(i.Button,{onPress:function(){return o(!0)},children:"Open"}),renderContent:(0,l.jsxs)(i.Stack,{gap:"$4",p:"$5",children:[(0,l.jsx)(i.SizableText,{children:"Non exercitation ea laborum cupidatat sunt amet aute exercitation occaecat minim incididunt non est est voluptate."}),(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){return o(!1)},children:"Button"})]})})},ControlledActionListByButton=function(){return(0,l.jsx)(i.ActionList,{title:"Action List",renderTrigger:(0,l.jsx)(i.Button,{children:"Action List"}),items:[{label:"Action1",icon:"PlaceholderOutline",onPress:function(){}},{label:"Action2",icon:"PlaceholderOutline",onPress:function(){}},{label:"Action3",icon:"PlaceholderOutline",onPress:function(){},disabled:!0}]})};var x=[{name:g.DemoCoverageModal,component:function DemoCoverageModal(){var e=u();return(0,l.jsx)(r.P,{description:"这是一个测试 Modal 覆盖的演示",suggestions:["测试 Toast 覆盖","测试 Modal 覆盖 Modal","测试 Dialog 覆盖 Modal"],boundaryConditions:[],elements:[{title:"开始 Demo",element:(0,l.jsx)(i.Button,{onPress:function(){e.pushModal(m.DemoCoverageModal,{screen:g.DemoCoverageDialogModal})},children:"开始 Demo"})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoCoverageModal"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoCoverageModal"})]})}]})},translationId:"Coverage Modal Demo"},{name:g.DemoCoverageDialogModal,component:function DemoCoverageDialogModal(){var e=u();return(0,l.jsx)(r.P,{description:"这是一个测试 Dialog 覆盖 Modal 的测试",suggestions:[],boundaryConditions:[],elements:[{title:"下一个例子",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.pushModal(m.DemoCoverageModal,{screen:g.DemoCoverageModalModal})},children:"下一个例子"})},{title:"测试 Toast 覆盖",element:(0,l.jsx)(i.Button,{onPress:function(){var toastMessage=function(e=0){i.Toast.message({title:`我覆盖在 Modal 上面: ${e}`}),e<10&&setTimeout((function(){toastMessage(e+1)}),1e3)};toastMessage()},children:"弹出 Toast"})},{title:"Open Popover by Button",element:(0,l.jsx)(ControlledPopoverByButton,{})},{title:"Open ActionList by Button",element:(0,l.jsx)(ControlledActionListByButton,{})},{title:"Open Modal by Api",element:(0,l.jsx)(i.Button,{onPress:function(){return i.Dialog.show({title:"我站在 Modal 上面",description:"通过 Api 打开的, 点击确定按钮会关闭 Dialog 打开一个 Modal",onConfirm(){e.pushModal(m.DemoLockedModal)}})},children:"Open Dialog"})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoCoverageDialogModal"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoCoverageDialogModal"})]})}]})},translationId:"Coverage Dialog Modal"},{name:g.DemoCoverageModalModal,component:function DemoCoverageModalModal(){var e=u();return(0,l.jsx)(r.P,{description:"这是一个测试 Modal 覆盖的演示",suggestions:["直接通过 navigation.pushModal(ERootModalRoutes.DemoLockedModal) 跳转即可"],boundaryConditions:[],elements:[{title:"跳转到其他 Stack 的 Modal",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.pushModal(m.DemoLockedModal)},children:"跳转"})},{title:"关闭",element:(0,l.jsx)(i.Button,{onPress:function(){e.popStack(),i.Toast.message({title:"Close Modal"})},children:"关闭并弹出 Toast"})},{title:"关闭",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){i.Toast.message({title:"Close Modal"}),e.popStack()},children:"弹出 Toast 然后关闭"})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoCoverageModalModal"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoCoverageModalModal"})]})}]})},translationId:"Coverage Modal Modal"}],f=n(740540),v=n(697346),j=n(474247);var M=[{name:p.DemoCreateModal,component:function DemoCreateViewModal({navigation:e}){var o=u();return(0,a.useEffect)((function(){o.setOptions({headerSearchBarOptions:{placeholder:"搜索",inputType:"text",hideNavigationBar:!0,hideWhenScrolling:!0,autoFocus:!0,onChangeText:function(e){}},headerRight:function(){return(0,l.jsx)(v.A,{icon:"AnonymousHidden2Outline"})}})}),[o]),(0,l.jsx)(r.P,{description:"这是一个普通的 Modal 测试",skipLoading:!0,suggestions:["Modal 可以通过点击空白处关闭或返回上一级","Modal 可以通过按 ESC 键关闭或返回上一级","Android 平台 Modal 可以通过点击返回键关闭或返回上一级","iOS 平台 Modal 可以通过向下滑动直接关闭整个 Modal Stack"],boundaryConditions:["打开 Modal 推荐使用 useDemoAppNavigation() hook 的 pushModal 方法"],contentInsetAdjustmentBehavior:"automatic",elements:[{title:"开始 Demo",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.navigate(p.DemoCreateSearchModal,{question:"你好"})},children:"开始 Demo"})},{title:"测试输入法",element:(0,l.jsx)(i.Input,{})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoCreateViewModal"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoCreateViewModal"})]})}]})},translationId:"Modal Demo"},{name:p.DemoCreateSearchModal,component:function DemoCreateSearchModal({navigation:e}){var o=u();return(0,a.useEffect)((function(){o.setOptions({headerSearchBarOptions:{placeholder:"搜索",inputType:"text",hideNavigationBar:!0,hideWhenScrolling:!0,autoFocus:!1,onChangeText:function(e){}}})}),[o]),(0,l.jsx)(r.P,{skipLoading:!0,contentInsetAdjustmentBehavior:"automatic",description:"这是一个带搜索框的 Modal",suggestions:["使用方式与 @react-navigation/native-stack 相同"],boundaryConditions:["BackButton 已经处理好了相关内容，所以不支持自定义 headerLeft 组件"],elements:[{title:"输入文字测试冻结",element:(0,l.jsx)(i.Input,{})},{title:"下一个例子",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.navigate(p.DemoCreateOptionsModal,{question:"你好"})},children:"下一个例子"})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoCreateSearchModal"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoCreateSearchModal"})]})}]})},translationId:"Search Modal"},{name:p.DemoCreateOptionsModal,component:function DemoCreateOptionsModal({navigation:e}){var o=u();return(0,a.useEffect)((function(){o.setOptions({headerSearchBarOptions:{placeholder:"搜索",inputType:"text",hideNavigationBar:!1,hideWhenScrolling:!0,autoFocus:!0,onChangeText:function(e){}},headerRight:function(){return(0,l.jsxs)(f.A,{children:[(0,l.jsx)(v.A,{icon:"AnonymousHidden2Outline"}),(0,l.jsx)(v.A,{icon:"ArchiveOutline"}),(0,l.jsx)(v.A,{icon:"AlignmentJustifyOutline"})]})}})}),[o]),(0,l.jsx)(r.P,{skipLoading:!0,contentInsetAdjustmentBehavior:"automatic",description:"这是一个带有搜索框和 RightButton 的 Demo",suggestions:["使用方式与 @react-navigation/native-stack 相同"],boundaryConditions:["BackButton 已经处理好了相关内容，所以不支持自定义 headerLeft 组件"],elements:[{title:"跳转到其他 Stack 的 Modal",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.navigate(d.Modal,{screen:m.DemoLockedModal})},children:"跳转"})},{title:"关闭",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){i.Toast.message({title:"Close Modal"}),e.getParent()?.goBack?.()},children:"关闭并弹出 Toast"})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoCreateOptionsModal"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoCreateOptionsModal"})]})}]})},translationId:"Options Demo Modal"},{name:p.DemoBigListModal,component:j.default,translationId:"Big List Demo Modal"}],D=[{name:h.DemoLockedModal,component:function(){var e=u();return(0,l.jsx)(r.P,{description:"这是 Locked Modal 的演示",suggestions:["Locked 的 Modal 无法通过点击空白处关闭","Locked 的 Modal 无法通过点击返回键关闭","Locked 的 Modal 左上角关闭按钮会隐藏","Locked 的 Modal 在 iOS 平台无法向下滑动关闭 Modal","Locked 的 Modal 在 iOS 平台显示的 Modal 回事堆叠样式","Locked 的 Modal 可以通过代码取消锁定或者关闭"],boundaryConditions:["可以 Locked 的屏幕一定要在配置里写清楚 allowDisableClose: true，否则 disableClose 属性无效","Locked 的 Modal 没有办法保持屏幕常亮，如果有需求需要单独处理","如果前面有被 Locked 的 Modal，跳转到同级别 Stack 的其他 Modal，返回键会消失，除非将前面 Locked 的 Modal 取消锁定"],elements:[{title:"开始 Demo",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.pushModal(m.DemoLockedModal,{screen:h.DemoConfigLockedModal})},children:"开始 Demo"})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoLockedViewModal"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoLockedViewModal"})]})}]})},translationId:"Locked Modal Demo"},{name:h.DemoConfigLockedModal,component:function(){var e=u(),o=(0,a.useCallback)((function(){return(0,l.jsx)(v.A,{icon:"AnonymousHidden2Outline"})}),[]);return(0,a.useLayoutEffect)((function(){e.setOptions({headerRight:o})}),[e,o]),(0,l.jsx)(r.P,{description:"这是通过配置锁定 Modal 的例子",suggestions:["可以 Locked 的屏幕一定要在配置里写清楚 allowDisableClose: true，否则 disableClose 属性无效","配置 IModalFlowNavigatorConfig 的时候，在相关页面下配置 disableClose: true 即可","同样可以手动取消锁定"],boundaryConditions:["取消锁定: navigation.setOptions({\n                  disableClose: false,\n                });"],elements:[{title:"下一个例子",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.pushModal(m.DemoLockedModal,{screen:h.DemoManualLockedViewModal})},children:"下一个例子"})},{title:"取消锁定",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.setOptions({disableClose:!1})},children:"取消锁定"})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoConfigLockedViewModal"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoConfigLockedViewModal"})]})}]})},translationId:"Config Locked Modal",allowDisableClose:!0,disableClose:!0},{name:h.DemoManualLockedViewModal,component:function(){var e=u(),o=(0,a.useCallback)((function(){return(0,l.jsx)(v.A,{icon:"AnonymousHidden2Outline"})}),[]);return(0,a.useLayoutEffect)((function(){e.setOptions({headerRight:o})}),[e,o]),(0,l.jsx)(r.P,{description:"这是手动锁定和解锁 Modal 的例子",suggestions:["使用方式设置 navigation.setOptions disableClose 属性"],boundaryConditions:["可以 Locked 的屏幕一定要在配置里写清楚 allowDisableClose: true，否则 disableClose 属性无效","锁定: navigation.setOptions({\n                  disableClose: true,\n                });","取消锁定: navigation.setOptions({\n                  disableClose: false,\n                });"],elements:[{title:"下一个例子",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.pushModal(m.DemoLockedModal,{screen:h.DemoRepeatManualLockedViewModal})},children:"下一个例子"})},{title:"锁定",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.setOptions({disableClose:!0})},children:"锁定"})},{title:"取消锁定",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.setOptions({disableClose:!1})},children:"取消锁定"})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoManualLockedViewModal"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoManualLockedViewModal"})]})}]})},translationId:"Manual Locked Modal",allowDisableClose:!0},{name:h.DemoRepeatManualLockedViewModal,component:function(){var e=u(),[o,n]=(0,a.useState)(!0),t=(0,a.useCallback)((function(){return(0,l.jsx)(v.A,{icon:"AnonymousHidden2Outline"})}),[]);return(0,a.useLayoutEffect)((function(){e.setOptions({headerRight:t,disableClose:o})}),[e,t,o]),(0,l.jsx)(r.P,{description:"这是手动锁定和解锁 Modal 的例子",suggestions:["使用方式设置 navigation.setOptions disableClose 属性"],boundaryConditions:["锁定: navigation.setOptions({\n                  disableClose: true,\n                });","取消锁定: navigation.setOptions({\n                  disableClose: false,\n                });"],elements:[{title:"下一个例子",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.pushModal(m.DemoLockedModal,{screen:h.DemoShouldPopOnClickBackdropViewModal})},children:"下一个例子"})},{title:"切换锁定",element:(0,l.jsx)(i.Button,{onPress:function(){n((function(e){return!e}))},children:"切换锁定"})},{title:"关闭",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:e.popStack,children:"关闭"})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoRepeatManualLockedViewModal"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoRepeatManualLockedViewModal"})]})}]})},translationId:"Repeat Manual Locked Modal",allowDisableClose:!0},{name:h.DemoShouldPopOnClickBackdropViewModal,component:function(){var e=u(),[o,n]=(0,a.useState)(!0);return(0,a.useLayoutEffect)((function(){e.setOptions({shouldPopOnClickBackdrop:o})}),[e,o]),(0,l.jsx)(r.P,{description:"这是 shouldPopOnClickBackdrop 的使用例子",suggestions:["设置 navigation.setOptions shouldPopOnClickBackdrop属性, 然后点击 Modal 的背景测试不同的效果"],boundaryConditions:["点击 Modal 背景时返回上一页: navigation.setOptions({\n                  shouldPopOnClickBackdrop: true,\n                });","点击 Modal 背景时退出整个 Modal: navigation.setOptions({\n                  shouldPopOnClickBackdrop: false,\n                });"],elements:[{title:"当前为: 点击 Modal 背景时"+(o?"返回上一页":"退出整个 Modal"),element:(0,l.jsxs)(i.Button,{variant:"primary",onPress:function(){n(!o)},children:["切换为点击 Modal 背景时"," ",o?"退出整个 Modal":"返回上一页"]})}]})},translationId:"Should Pop On Click Backdrop Of Modal",shouldPopOnClickBackdrop:!0}],S=[{name:m.DemoCreateModal,children:M},{name:m.DemoLockedModal,children:D},{name:m.DemoCoverageModal,children:x}];var b=n(254491),k=function(e){return e.Home="home",e.Me="me",e.Tabs="tabs",e.Developer="developer",e}({}),C=function(e){return e.DemoRootHome="DemoRootHome",e.DemoRootHomeSearch="DemoRootHomeSearch",e.DemoRootHomeOptions="DemoRootHomeOptions",e}({}),y=function(e){return e.DemoRootDeveloper="DemoRootDeveloper",e.DemoRootDeveloperOptions="DemoRootDeveloperOptions",e}({}),P=function(e){return e.DemoRootMe="DemoRootMe",e}({}),O=function(e){return e.DemoRootTabs="DemoRootTabs",e}({});const View_DemoRootDeveloper=function(){var e=u();return(0,l.jsx)(r.P,{description:"这是一个关于路由 Modal 的相关演示",suggestions:[],boundaryConditions:[],elements:[{title:"输入文字测试冻结",element:(0,l.jsx)(i.Input,{})},{title:"打开 Developer 下一个页面",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.push(y.DemoRootDeveloperOptions,{from:"来自 Developer Tab 页面的跳转"})},children:"下一个页面"})},{title:"这是一个 Modal 的演示",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.pushModal(m.DemoCreateModal,{screen:p.DemoCreateModal,params:{question:"你好"}})},children:"打开 Modal Demo"})},{title:"这是一个可以锁定的 Modal 的演示",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.pushModal(m.DemoLockedModal)},children:"打开 Modal Demo"})},{title:"打开 Modal (Big List Demo)",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.pushModal(m.DemoCreateModal,{screen:p.DemoBigListModal})},children:"打开 Modal Demo"})},{title:"Modal 覆盖测试",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.pushModal(m.DemoCoverageModal)},children:"打开 Modal Demo"})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoRootDeveloper"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoRootDeveloper"})]})}]})};const View_DemoRootDeveloperOptions=function(){var e,o=u(),n=(0,c.lq)();return(0,l.jsx)(r.P,{description:"我是 Dev Tab 下面的 Options 页面",suggestions:[`携带的参数：${null!=(e=n?.params?.from)?e:"null"}`],boundaryConditions:[],elements:[{title:"打开 Dev 页面",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){o.push(y.DemoRootDeveloper)},children:"打开 Dev 页面"})},{title:"Reset 到 Dev 页面",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){o.reset({index:0,routes:[{key:y.DemoRootDeveloper,name:y.DemoRootDeveloper}]})},children:"Reset Dev 页面"})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoRootDeveloperOptions"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoRootDeveloperOptions"})]})}]})};var T=n(5679),B=n(663522),L=n(524690),R=(n(586908),T.A);const View_DemoRootHome=function(){var e=u(),[o,n]=R(L.YH.rrt),t=(0,a.useCallback)((function(){return(0,l.jsx)(i.Stack,{flex:1,justifyContent:"center",children:(0,l.jsxs)(i.Stack,{alignSelf:"flex-start",focusable:!0,flexDirection:"row",p:"$1.5",m:"$-1.5",hoverStyle:{bg:"$bgHover"},pressStyle:{bg:"$bgActive"},focusVisibleStyle:{outlineWidth:2,outlineStyle:"solid",outlineColor:"$focusRing"},borderRadius:"$2",onPress:function(){},children:[(0,l.jsx)(i.Stack,{w:"$6",h:"$6",borderRadius:"$1",bg:"skyblue",justifyContent:"center",alignItems:"center",children:(0,l.jsx)(i.SizableText,{size:"$bodyLgMedium",children:"🦄"})}),(0,l.jsx)(i.SizableText,{ml:"$2",size:"$bodyLgMedium",userSelect:"none",children:"Wallet Name"})]})})}),[]),s=(0,a.useCallback)((function(){return(0,l.jsx)(v.A,{icon:"SettingsOutline"})}),[]);return(0,a.useLayoutEffect)((function(){e.setOptions({headerTitle:t,headerRight:s})}),[e,s,t]),(0,l.jsx)(r.P,{description:"这是一个路由 Header",suggestions:["使用方式与 @react-navigation/native-stack 相同"],boundaryConditions:["BackButton 已经处理好了相关内容，所以不支持自定义 headerLeft 组件","为了不破坏 Navigation 默认行为，只有一个 headerRight 图标可以根据官方 API 写，推荐使用 <HeaderIconButton> 组件，与 Icon 组件用法相同","为了不破坏 Navigation 默认行为，如果是一个 headerRight 图标组需要使用 <HeaderButtonGroup> 组件，里面处理好了各种边距问题"],elements:[{title:"HeaderIconButton 演示",element:(0,l.jsxs)(i.YStack,{children:[(0,l.jsx)(v.A,{icon:"CrossedLargeOutline",color:"$borderColorHover",onPress:function(){alert("clicked")}}),(0,l.jsx)(v.A,{icon:"ChevronLeftOutline",onPress:function(){alert("clicked")}})]})},{title:"下一个例子",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.push(C.DemoRootHomeSearch)},children:"跳转搜索 Demo"})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoRootHome"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoRootHome"})]})},{title:"开启 ReactRenderTracker",element:(0,l.jsx)(i.Button,{onPress:function(){var e="1"===o?"0":"1";n(e),B.Ay.isRuntimeBrowser&&("0"===e?localStorage.removeItem("$$OnekeyReactRenderTrackerEnabled"):localStorage.setItem("$$OnekeyReactRenderTrackerEnabled","true")),window.location.reload()},children:"开关 ReactRenderTracker"})}]})};var I=n(908867);const View_DemoRootHomeOptions=function(){var e=(0,I.A)(),o=u();return(0,a.useEffect)((function(){o.setOptions({headerRight:function(){return(0,l.jsxs)(f.A,{children:[(0,l.jsx)(v.A,{icon:"StarOutline"}),(0,l.jsx)(v.A,{icon:"ScanOutline"})]})},headerSearchBarOptions:{hideNavigationBar:!0,hideWhenScrolling:!0,placeholder:e.formatMessage({id:b.ETranslations.explore_search_dapps}),inputType:"text",onChangeText:function(e){}}})}),[o,e]),(0,l.jsx)(r.P,{skipLoading:B.Ay.isNativeIOS,contentInsetAdjustmentBehavior:"automatic",description:"这是一个路由 Header 演示自定义 headerRight 的用法",suggestions:["使用方式与 @react-navigation/native-stack 相同","同时可以正常使用 headerSearchBarOptions"],boundaryConditions:["为了不破坏 Navigation 默认行为，只有一个 headerRight 图标可以根据官方 API 写，推荐使用 <HeaderIconButton> 组件，与 Icon 组件用法相同","为了不破坏 Navigation 默认行为，如果是一个 headerRight 图标组需要使用 <HeaderButtonGroup> 组件，里面处理好了各种边距问题"],elements:[{title:"HeaderIconButton 演示",element:(0,l.jsxs)(i.YStack,{children:[(0,l.jsx)(v.A,{icon:"CrossedLargeOutline",color:"$borderColorHover",onPress:function(){alert("clicked")}}),(0,l.jsx)(v.A,{icon:"ChevronLeftOutline",onPress:function(){alert("clicked")}})]})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoRootHomeOptions"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoRootHomeOptions"})]})}]})};const View_DemoRootHomeSearch=function(){var e=(0,I.A)(),o=u();return(0,a.useEffect)((function(){o.setOptions({headerSearchBarOptions:{placeholder:e.formatMessage({id:b.ETranslations.explore_search_dapps}),inputType:"text",onChangeText:function(e){},onSearchButtonPress:function(e){}}})}),[o,e]),(0,l.jsx)(r.P,{skipLoading:B.Ay.isNativeIOS,description:"这是一个带搜索的路由 Header",suggestions:["使用方式与 @react-navigation/native-stack 相同"],boundaryConditions:["无"],elements:[{title:"使用说明",element:(0,l.jsx)(i.SizableText,{size:"$bodyLg",children:"这是一个简单的使用场景\n            1. 需要给 Screen 或者 Layout 设置一个 skipLoading={platformEnv.isNativeIOS} 以确保 iOS controller.headerSearch 动画正常\n\n            2. useEffect(() => {\n                navigation.setOptions({\n                  headerSearchBarOptions: {\n                    placeholder: '搜索',\n                    inputType: 'text',\n                    onChangeText: (event: NativeSyntheticEvent<TextInputChangeEventData>) =>\n                      console.log(event.nativeEvent.text),\n                  },\n                });\n            }, []);\n          "})},{title:"弹出 Modal",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){o.pushModal(d.Modal,{screen:m.DemoLockedModal})},children:"弹出 Modal"})},{title:"下一个例子",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){o.push(C.DemoRootHomeOptions)},children:"跳转自定义 headerRight Demo"})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoRootHomeSearch"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoRootHomeSearch"})]})}]})};const View_DemoRootMe=function(){var e=u();return(0,l.jsx)(r.P,{description:"这是一个 Tab 切换演示",suggestions:["需要使用 useDemoAppNavigation hook 的 switchTab 方法"],boundaryConditions:[],elements:[{title:"切换到首页",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.switchTab(k.Home)},children:"跳转 Home"})},{title:"切换到 Developer Tab 的第二个页面",element:(0,l.jsx)(i.Button,{variant:"primary",onPress:function(){e.switchTab(k.Developer,{screen:y.DemoRootDeveloperOptions,params:{from:"来自 Me Tab 页面的跳转"}})},children:"跳转 Developer"})},{title:"渲染测试",element:(0,l.jsxs)(i.Stack,{children:[(0,l.jsx)(FreezeProbe,{componentName:"DemoRootMe"}),(0,l.jsx)(NavigationFocusTools,{componentName:"DemoRootMe"})]})},{title:"BottomTab 渲染卡顿测试",element:(0,l.jsx)(i.Stack,{children:new Array(1e3).fill({}).map((function(e,o){return(0,l.jsxs)(i.SizableText,{children:["这是有1000个 View 的 BottomTab 卡顿测试",o]},o)}))})}]})};var $=n(786576);const View_DemoRootTabs=function(){return(0,l.jsx)($.default,{})};var w=[{name:k.Home,tabBarIcon:function(e){return e?"CreditCardSolid":"CreditCardOutline"},translationId:b.ETranslations.global_wallet,freezeOnBlur:!0,children:[{name:C.DemoRootHome,component:View_DemoRootHome,translationId:b.ETranslations.global_homescreen},{name:C.DemoRootHomeSearch,component:View_DemoRootHomeSearch,translationId:"RootHomeSearch"},{name:C.DemoRootHomeOptions,component:View_DemoRootHomeOptions,translationId:"RootHomeOptions"}]},{name:k.Me,tabBarIcon:function(e){return e?"EmailSolid":"EmailOutline"},translationId:"msg__mine",freezeOnBlur:!0,children:[{name:P.DemoRootMe,component:View_DemoRootMe,translationId:"msg__mine"}]},{name:k.Tabs,tabBarIcon:function(e){return e?"ChatGptSolid":"ChatGptOutline"},translationId:"title__str_tabs",freezeOnBlur:!0,children:[{name:O.DemoRootTabs,component:View_DemoRootTabs,translationId:"title__str_tabs"}]},{name:k.Developer,tabBarIcon:function(e){return e?"CodeBracketsSolid":"CodeBracketsOutline"},translationId:"form__dev_mode",freezeOnBlur:!0,children:[{name:y.DemoRootDeveloper,component:View_DemoRootDeveloper,translationId:"Developer"},{name:y.DemoRootDeveloperOptions,component:View_DemoRootDeveloperOptions,translationId:"RootDeveloperOptions"}]}];const A=function DemoTabNavigator(){return(0,l.jsx)(t.TabStackNavigator,{config:w})};var N=[{name:d.Main,component:A,initialRoute:!0},{name:d.Modal,component:function DemoModalStackScreen(){return(0,l.jsx)(t.RootModalNavigator,{config:S})},type:"modal"}];const NavigatorRoute=function(){return(0,l.jsx)(t.RootStackNavigator,{config:N})}},786576:(e,o,n)=>{n.r(o),n.d(o,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var t=n(514041),a=n(490343),i=n(663522),r=n(654004),s=n(831085),FirstRoute=function(){return(0,s.jsx)(a.ListView,{data:new Array(20).fill({}),estimatedItemSize:"$10",scrollEnabled:i.Ay.isWebTouchable,disableScrollViewPanResponder:!0,renderItem:function({index:e}){return(0,s.jsx)(a.Stack,{style:{padding:10},children:(0,s.jsxs)(a.SizableText,{children:["Page 1 Row: ",e]})})}})},SecondRoute=function(){return(0,s.jsx)(a.ListView,{data:new Array(50).fill({}),estimatedItemSize:"$10",scrollEnabled:i.Ay.isWebTouchable,disableScrollViewPanResponder:!0,renderItem:function({index:e}){return(0,s.jsx)(a.Stack,{style:{padding:20},children:(0,s.jsxs)(a.SizableText,{children:["Page 2 Row: ",e]})})}})},TabViewScrollStickyDemo=function(){var e=(0,t.useMemo)((function(){return[{title:"吸顶标签1",page:FirstRoute},{title:"吸顶标签2",page:SecondRoute}]}),[]);return(0,s.jsx)(a.Tab,{data:e,initialScrollIndex:1,ListHeaderComponent:(0,s.jsx)(a.Stack,{bg:"$bgInfoStrong",h:100}),style:{height:400},headerProps:{itemContainerStyle:{flex:1},cursorStyle:{width:"70%",h:"$0.5",bg:"$text"}},onSelectedPageIndex:function(e){}})},ThirdRoute=function(){return(0,s.jsx)(a.ListView,{data:new Array(20).fill({}),estimatedItemSize:"$10",renderItem:function({index:e}){return(0,s.jsx)(a.Stack,{style:{padding:10},children:(0,s.jsxs)(a.SizableText,{children:["Page 1 Row: ",e]})})}})},FourthRoute=function(){return(0,s.jsx)(a.ListView,{data:new Array(50).fill({}),estimatedItemSize:"$10",renderItem:function({index:e}){return(0,s.jsx)(a.Stack,{style:{padding:20},children:(0,s.jsxs)(a.SizableText,{children:["Page 2 Row: ",e]})})}})},TabViewScrollPageDemo=function(){var e=(0,t.useMemo)((function(){return[{title:"不吸顶标签1",page:ThirdRoute},{title:"禁止选中标签2",page:FourthRoute},{title:"不吸顶标签3",page:FourthRoute}]}),[]);return(0,s.jsx)(a.Tab.Page,{data:e,initialScrollIndex:2,ListHeaderComponent:(0,s.jsx)(a.Stack,{bg:"$bgInfoStrong",h:100}),ListFooterComponent:(0,s.jsx)(a.Stack,{bg:"$bgInfoStrong",h:100}),headerProps:{cursorStyle:{width:"70%",h:"$0.5",bg:"$text"}},shouldSelectedPageIndex:function(e){var o=1!==e;return o||a.Toast.error({title:"未登录"}),o},onSelectedPageIndex:function(e){}})};const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,s.jsx)(r.P,{description:"",suggestions:["吸顶用 Tab","不需要吸顶用 Tab.Page, 它继承自 Fragment, 尽量不要把 Tab.Page 放到 ScrollView 里面"],boundaryConditions:[],elements:[{title:"Header 自定义1",element:(0,s.jsx)(a.Tab.Header,{data:[{title:"标签1"},{title:"标签2"},{title:"标签标签3"},{title:"标签4"}],onSelectedPageIndex:function(e){}})},{title:"Header 自定义2",element:(0,s.jsx)(a.Tab.Header,{data:[{title:"标签1"},{title:"标签2"},{title:"标签标签3"},{title:"标签4"}],itemContainerStyle:{flex:1},itemTitleNormalStyle:{color:"$text",fontSize:13},itemTitleSelectedStyle:{color:"$textInverse",fontSize:15},cursorStyle:{width:88,height:34,borderRadius:17,top:5,bg:"$bgInfoStrong"},onSelectedPageIndex:function(e){}})},{title:"Tab 需要吸顶使用",element:(0,s.jsx)(TabViewScrollStickyDemo,{})},{title:"Tab.Page 不需要吸顶使用",element:(0,s.jsx)(a.Stack,{h:700,children:(0,s.jsx)(TabViewScrollPageDemo,{})})}]})}},654004:(e,o,n)=>{n.d(o,{P:()=>Layout});var t=n(586330),a=n(654266),i=n(490343),r=n(989375),s=n(610421),l=n(498356),c=n(392097),d=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(i.Stack,{children:(0,d.jsxs)(i.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.Stack,{gap:"$1",children:e.map((function(o,n){return(0,d.jsx)(i.Stack,{children:(0,d.jsxs)(i.SizableText,{children:[n+1,". ",o,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:o=[],boundaryConditions:n=[],elements:u=[],scrollEnabled:m=!0,contentInsetAdjustmentBehavior:p="never",skipLoading:h=!1,children:g}){var x=(0,r.U6)(),f=(0,l.A)();return(0,d.jsx)(i.Page,{skipLoading:h,children:(0,d.jsx)(i.ScrollView,{maxWidth:"100%",scrollEnabled:m,flex:1,marginBottom:x,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:p,children:(0,d.jsxs)(i.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6",children:[(0,d.jsxs)(i.XStack,{children:[(0,d.jsx)(i.IconButton,{icon:"HomeLineOutline",onPress:function(){f.dispatch(a.y9.replace(c.WP.Main,{screen:c.V4.Developer,params:{screen:c.f$.TabDeveloper}}))}}),(0,d.jsx)(i.Button,{ml:"$4",onPress:(0,t.A)((function*(){yield s.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(i.Button,{ml:"$4",variant:"primary",onPress:(0,t.A)((function*(){yield s.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(i.Stack,{gap:"$2",children:[(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(i.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,o?(0,d.jsxs)(i.Stack,{gap:"$2",children:[(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:o})]}):null,n?.length>0?(0,d.jsxs)(i.Stack,{gap:"$2",children:[(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,(0,d.jsxs)(i.Stack,{gap:"$2",children:[(0,d.jsx)(i.Stack,{children:(0,d.jsx)(i.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(i.Stack,{children:u?.map((function(e,o){return(0,d.jsxs)(i.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(i.Stack,{flexDirection:"column",children:[(0,d.jsx)(i.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(i.Stack,{paddingTop:1,children:(0,d.jsxs)(i.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(i.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${o}`)}))}),(0,d.jsx)(i.Stack,{children:g?(0,d.jsx)(i.Stack,{gap:"$3",children:g}):null})]})]})})})}}}]);