"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[29374],{775892:(e,s,a)=>{a.d(s,{z:()=>CreateOrEditContent});var d=a(586330),r=a(514041),t=a(908867),n=a(490343),o=a(610421),i=a(370968),l=a(142097),m=a(254491),_=a(911998),u=a(831085),CreateOrEditContent=function({title:e,item:s,onSubmit:a,onRemove:c}){var f,k,b,g=(0,t.A)(),v=(0,n.useForm)({defaultValues:{id:s.id,networkId:s.networkId,name:s.name,address:{raw:s.address,resolved:""}},mode:"onChange",reValidateMode:"onChange"}),h=(0,r.useCallback)((function(){return c?(0,u.jsx)(n.IconButton,{icon:"DeleteOutline",variant:"tertiary",onPress:function(){return c(s)},testID:"address-form-remove"}):null}),[c,s]),p=v.watch("networkId"),I=v.watch("address.pending"),x=(0,r.useCallback)((f=(0,d.A)((function*(e){var s;yield a?.({id:e.id,name:e.name,networkId:e.networkId,address:null!=(s=e.address.resolved)?s:""})})),function(e){return f.apply(this,arguments)}),[a]),{result:w}=(0,_.yk)((0,d.A)((function*(){return(yield o.A.serviceNetwork.getAddressBookEnabledNetworks()).map((function(e){return e.id}))})),[],{initResult:[]});return(0,u.jsxs)(n.Page,{children:[(0,u.jsx)(n.Page.Header,{title:e,headerRight:h}),(0,u.jsx)(n.Page.Body,{p:"$4",children:(0,u.jsxs)(n.Form,{form:v,children:[(0,u.jsx)(n.Form.Field,{label:g.formatMessage({id:m.ETranslations.address_book_add_address_chain}),name:"networkId",rules:{required:!0},children:(0,u.jsx)(l.P,{networkIds:w})}),(0,u.jsx)(n.Form.Field,{label:g.formatMessage({id:m.ETranslations.address_book_add_address_name}),name:"name",rules:{required:{value:!0,message:g.formatMessage({id:m.ETranslations.address_book_add_address_name_empty_error})},maxLength:{value:24,message:g.formatMessage({id:m.ETranslations.address_book_add_address_name_length_erro},{num:24})},validate:(b=(0,d.A)((function*(e){var a=yield o.A.serviceAddressBook.findItem({name:e});if(a&&s.id!==a.id)return g.formatMessage({id:m.ETranslations.address_book_add_address_name_exists})})),function validate(e){return b.apply(this,arguments)})},testID:"address-form-name-field",children:(0,u.jsx)(n.Input,{placeholder:g.formatMessage({id:m.ETranslations.address_book_add_address_name_required}),testID:"address-form-name"})}),(0,u.jsx)(n.Form.Field,{label:g.formatMessage({id:m.ETranslations.address_book_add_address_address}),name:"address",rules:{validate:(k=(0,d.A)((function*(e){if(!e.pending){var a;if(!e.resolved)return null!=(a=e.validateError?.message)?a:g.formatMessage({id:m.ETranslations.address_book_add_address_address_invalid_error});var d=yield o.A.serviceAddressBook.findItem({address:e.resolved});if(d&&s.id!==d.id)return g.formatMessage({id:m.ETranslations.address_book_add_address_address_exists})}})),function validate(e){return k.apply(this,arguments)})},description:p.startsWith("evm--")?(0,u.jsxs)(n.XStack,{alignItems:"center",mt:"$1",children:[(0,u.jsx)(n.Icon,{size:"$4",name:"CheckRadioSolid"}),(0,u.jsx)(n.SizableText,{size:"$bodyMd",ml:"$1",children:g.formatMessage({id:m.ETranslations.address_book_add_address_add_to_evm_chains})})]}):null,testID:"address-form-address-field",children:(0,u.jsx)(i.N,{networkId:p,placeholder:g.formatMessage({id:m.ETranslations.address_book_add_address_address}),autoError:!1,testID:"address-form-address",enableNameResolve:!0,enableAddressContract:!0})})]})}),(0,u.jsx)(n.Page.Footer,{onConfirmText:g.formatMessage({id:m.ETranslations.address_book_add_address_button_save}),confirmButtonProps:{variant:"primary",loading:v.formState.isSubmitting,disabled:!v.formState.isValid||I,onPress:v.handleSubmit(x),testID:"address-form-save"}})]})}},429374:(e,s,a)=>{a.r(s),a.d(s,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var d=a(586330),r=a(514041),t=a(908867),n=a(490343),o=a(610421),i=a(498356),l=a(625931),m=a(254491),_=a(775892),u=a(831085),c={name:"",address:"",networkId:(0,l.V)().btc};const __WEBPACK_DEFAULT_EXPORT__=function(){var e,s=(0,t.A)(),a=(0,i.A)(),l=(0,r.useCallback)((e=(0,d.A)((function*(e){try{yield o.A.serviceAddressBook.addItem(e),n.Toast.success({title:s.formatMessage({id:m.ETranslations.address_book_add_address_toast_add_success})}),a.pop()}catch(e){n.Toast.error({title:e.message})}})),function(s){return e.apply(this,arguments)}),[a,s]);return(0,u.jsx)(_.z,{title:s.formatMessage({id:m.ETranslations.address_book_add_address_title}),onSubmit:l,item:c})}}}]);