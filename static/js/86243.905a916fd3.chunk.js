"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[86243],{686243:(e,t,n)=>{n.r(t),n.d(t,{default:()=>TokenSelectorModal});var r=n(324586),o=n(586330),c=n(514041),a=n(654266),l=n(908867),i=n(578104),d=n(490343),s=n(610421),u=n(106049),k=n(498356),p=n(384013),w=n(227428),f=n(254491),I=n(491180),h=n(714191),A=n(325809),b=n(353203),y=n(298254),g=n(208257),S=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=0;function TokenSelector(){var e,t,n=(0,l.A)(),{updateTokenSelectorSearchKey:r,updateTokenSelectorSearchTokenState:h,refreshTokenSelectorSearchTokenList:A,updateCreateAccountState:g}=(0,p.WE)().current,v=(0,a.lq)(),T=(0,k.A)(),{createAddress:j}=(0,b.m)(),{title:m,networkId:O,accountId:N,closeAfterSelect:x=!0,onSelect:P,searchAll:_,isAllNetworks:C,searchPlaceholder:E,footerTipText:D}=v.params,{network:M,account:K}=(0,y.b)({networkId:O,accountId:N}),[B]=(0,p._N)(),V=(0,c.useCallback)((e=(0,o.A)((function*(e){if(M?.isAllNetworks){var t;e.networkId&&(t=yield s.A.serviceNetwork.getVaultSettings({networkId:e.networkId}));var n=[];try{if((e.accountId||K?.id)&&(e.networkId||M?.id)){var r,o,c,a,l,i=e.accountId?{accountId:null!=(r=e.accountId)?r:"",networkId:null!=(o=e.networkId)?o:""}:{accountId:null!=(c=K?.id)?c:"",networkId:null!=(a=M?.id)?a:""};if(e.accountId&&e.networkId){var d,u,k=yield s.A.serviceAccount.getAccount({accountId:null!=(d=e.accountId)?d:"",networkId:null!=(u=e.networkId)?u:""});l=(yield s.A.serviceNetwork.getDeriveTypeByTemplate({networkId:e.networkId,template:k.template})).deriveType}var{accountsInfo:p}=yield s.A.serviceAllNetwork.getAllNetworkAccounts(_objectSpread(_objectSpread({},i),{},{includingNonExistingAccount:!0,deriveType:l}));n=p}}catch{}var w=n.find((function(t){return e.accountId?t.accountId===e.accountId:t.networkId===e.networkId}));if(t?.mergeDeriveAssetsEnabled||w?.accountId)P?.(w?.accountId?_objectSpread(_objectSpread({},e),{},{accountId:w.accountId}):e);else if(K){g({isCreating:!0,token:e});var f=I.A.getWalletIdFromAccountId({accountId:K.id});try{var h=yield j({num:0,account:{walletId:f,networkId:e.networkId,indexedAccountId:K.indexedAccountId,deriveType:"default"}});g({isCreatingAccount:!1,token:null}),h&&P?.(_objectSpread(_objectSpread({},e),{},{accountId:h.accounts[0]?.id}))}catch(e){g({isCreatingAccount:!1,token:null})}}}else P?.(e);x&&T.pop()})),function(t){return e.apply(this,arguments)}),[K,x,j,T,M?.id,M?.isAllNetworks,P,g]),W=(0,i.YQ)(r,_?1e3:200),Z=(0,c.useMemo)((function(){return{placeholder:null!=E?E:n.formatMessage({id:f.ETranslations.send_token_selector_search_placeholder}),onChangeText:function({nativeEvent:e}){W(e.text)}}}),[W,n,E]),q=(0,c.useCallback)((t=(0,o.A)((function*(e){h({isSearching:!0}),yield s.A.serviceToken.abortSearchTokens();try{var t=yield s.A.serviceToken.searchTokens({accountId:N,networkId:O,keywords:e});A({tokens:t})}catch(e){}h({isSearching:!1})})),function(e){return t.apply(this,arguments)}),[N,O,A,h]);return(0,c.useEffect)((function(){_&&B&&B.length>=w.NZ?q(B):(h({isSearching:!1}),A({tokens:[]}),s.A.serviceToken.abortSearchTokens())}),[A,_,B,q,h]),(0,S.jsxs)(d.Page,{safeAreaEnabled:!1,onClose:function(){return r("")},onUnmounted:function(){return r("")},children:[(0,S.jsx)(d.Page.Header,{title:null!=m?m:n.formatMessage({id:f.ETranslations.global_select_crypto}),headerSearchBarOptions:Z}),(0,S.jsx)(d.Page.Body,{children:(0,S.jsx)(u.x,{withPresetVerticalPadding:!1,onPressToken:V,isAllNetworks:null!=C?C:M?.isAllNetworks,withNetwork:null!=C?C:M?.isAllNetworks,searchAll:_,isTokenSelector:!0,footerTipText:D})})]})}function TokenSelectorModal(){return(0,S.jsx)(A.b8,{config:{sceneName:h.Zs.home},enabledNum:[v],children:(0,S.jsx)(g.p,{children:(0,S.jsx)(TokenSelector,{})})})}}}]);