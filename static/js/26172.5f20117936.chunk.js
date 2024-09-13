"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[26172],{326745:(e,r,t)=>{t.d(r,{u:()=>useAppRoute});var n=t(654266);function useAppRoute(){return(0,n.lq)()}},138584:(e,r,t)=>{t.d(r,{Py:()=>SimpleSpinnerSkeleton,am:()=>isLoadingState,bU:()=>PageFrame,o0:()=>isErrorState});var n=t(908867),a=t(490343),s=t(254491),o=t(831085),PageErrOccurred=function({onPress:e}){var r=(0,n.A)();return(0,o.jsx)(a.Empty,{icon:"ErrorOutline",title:r.formatMessage({id:s.ETranslations.global_an_error_occurred}),description:r.formatMessage({id:s.ETranslations.global_an_error_occurred_desc}),buttonProps:{onPress:e,children:r.formatMessage({id:s.ETranslations.global_refresh})}})},SimpleSpinnerSkeleton=function(){return(0,o.jsx)(a.Stack,{w:"100%",h:"$40",jc:"center",ai:"center",children:(0,o.jsx)(a.Spinner,{size:"large"})})},isLoadingState=function({result:e,isLoading:r}){return Boolean(void 0===e&&(void 0===r||!0===r))},isErrorState=function({result:e,isLoading:r}){return Boolean(void 0===e&&!1===r)},PageFrame=function({children:e,loading:r,LoadingSkeleton:t,error:n,onRefresh:a}){return r?t?(0,o.jsx)(t,{}):null:n?(0,o.jsx)(PageErrOccurred,{onPress:a}):(0,o.jsx)(o.Fragment,{children:e})}},726172:(e,r,t)=>{t.r(r),t.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var n=t(586330),a=t(514041),s=t(908867),o=t(17617),i=t(490343),l=t(610421),d=t(391944),c=t(326745),u=t(911998),m=t(639563),f=t(259227),g=t(254491),h=t(491180),b=t(567807),x=t(138584),p=t(544577),w=t(831085),PortfolioItem=function({item:e,network:r}){var t,l,u,x,j=(0,c.u)(),k=(0,p.B)(),{networkId:v}=j.params,_=(0,a.useCallback)((0,n.A)((function*(){yield(0,m.oV)({networkId:v,txid:e.txId})})),[e,v]),S=Math.floor(Math.max(1,(null!=(t=e.endTime)?t:0)-(null!=(l=e.startTime)?l:0))/864e5),y=(0,b.Yq)(new Date(Number(e.startTime)),{hideTimeForever:!0}),T=(0,b.Yq)(new Date(Number(e.endTime)),{hideTimeForever:!0}),[{currencyInfo:{symbol:I}}]=(0,f.useSettingsPersistAtom)(),E=(0,s.A)();return(0,w.jsx)(i.Stack,{px:20,children:(0,w.jsxs)(i.Stack,{borderWidth:o.A.hairlineWidth,borderColor:"$borderSubdued",borderRadius:"$3",children:[(0,w.jsxs)(i.XStack,{px:14,pt:14,justifyContent:"space-between",children:[(0,w.jsx)(i.Badge,{badgeType:null!=(u={active:"success",withdraw_requested:"warning",overflow:"critical",claimable:"info",claimed:"default"}[(0,p.U)(e)])?u:"default",children:k[(0,p.U)(e)]}),(0,w.jsx)(i.Button,{onPress:_,size:"small",variant:"tertiary",iconAfter:"OpenOutline",children:h.A.shortenAddress({address:e.txId})})]}),(0,w.jsxs)(i.XStack,{p:14,alignItems:"center",children:[(0,w.jsx)(i.Stack,{pr:12,children:(0,w.jsx)(d.o,{tokenImageUri:r?.logoURI})}),(0,w.jsxs)(i.Stack,{children:[(0,w.jsxs)(i.SizableText,{size:"$headingLg",children:[e.amount," ",null!=(x=r?.symbol)?x:""]}),(0,w.jsx)(i.NumberSizeableText,{size:"$bodyMd",color:"$textSubdued",formatter:"value",formatterOptions:{currency:I},children:e.fiatValue})]})]}),(0,w.jsxs)(i.XStack,{p:14,bg:"$bgSubdued",alignItems:"center",children:[(0,w.jsx)(i.Icon,{width:20,height:20,name:"Calendar2Outline",color:"$iconSubdued"}),(0,w.jsx)(i.XStack,{w:"$1.5"}),(0,w.jsx)(i.SizableText,{size:"$bodyMd",children:`${E.formatMessage({id:g.ETranslations.earn_number_day},{number:S})} • ${y} - ${T}`})]})]})})},ItemSeparatorComponent=function(){return(0,w.jsx)(i.Stack,{h:"$4"})};const __WEBPACK_DEFAULT_EXPORT__=function(){var e=(0,c.u)(),{accountId:r,networkId:t,symbol:n,provider:o}=e.params,{result:d,isLoading:m,run:f}=(0,u.yk)((function(){return Promise.all([l.A.serviceStaking.getPortfolioList({accountId:r,networkId:t,symbol:n,provider:o}),l.A.serviceNetwork.getNetworkSafe({networkId:t})])}),[r,t,n,o],{watchLoading:!0}),h=(0,a.useCallback)((function({item:e}){return(0,w.jsx)(PortfolioItem,{item:e,network:d?.[1]})}),[d]),b=(0,s.A)();return(0,w.jsxs)(i.Page,{scrollEnabled:!0,children:[(0,w.jsx)(i.Page.Header,{title:b.formatMessage({id:g.ETranslations.earn_portfolio_details})}),(0,w.jsx)(i.Page.Body,{children:(0,w.jsx)(x.bU,{LoadingSkeleton:x.Py,error:(0,x.o0)({result:d,isLoading:m}),loading:(0,x.am)({result:d,isLoading:m}),onRefresh:f,children:d?(0,w.jsx)(i.ListView,{estimatedItemSize:164,data:d[0],renderItem:h,ListFooterComponent:(0,w.jsx)(i.Stack,{h:"$2"}),ItemSeparatorComponent,ListEmptyComponent:(0,w.jsx)(i.Empty,{icon:"ClockTimeHistoryOutline",title:b.formatMessage({id:g.ETranslations.global_no_transactions_yet}),description:b.formatMessage({id:g.ETranslations.global_no_transactions_yet_desc})})}):null})})]})}},544577:(e,r,t)=>{t.d(r,{B:()=>useBabylonStatusMap,U:()=>getBabylonPortfolioStatus});var n=t(514041),a=t(908867),s=t(254491),getBabylonPortfolioStatus=function(e){return e.isOverflow?"overflow":e.status},useBabylonStatusMap=function(){var e=(0,a.A)();return(0,n.useMemo)((function(){return{active:e.formatMessage({id:s.ETranslations.earn_active}),withdraw_requested:e.formatMessage({id:s.ETranslations.earn_withdrawal_requested}),overflow:e.formatMessage({id:s.ETranslations.earn_overflow}),claimable:e.formatMessage({id:s.ETranslations.earn_claim}),claimed:e.formatMessage({id:s.ETranslations.earn_claimed})}}),[e])}}}]);