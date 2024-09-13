(self.webpackChunkweb=self.webpackChunkweb||[]).push([[72306],{940916:(e,t,r)=>{"use strict";r.d(t,{G:()=>A});var n=r(482451),i=r.n(n),a=r(324586),s=r(586330),o=r(230414),u=r(507140),c=r(606777),p=r(554902),f=r(404727),l=r(180556),y=r(929296),d=r(195309),h=r(972715),v=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,h.A)(e);if(t){var i=(0,h.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,d.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var g=function(e){(0,y.A)(ChainSigner,e);var t=_createSuper(ChainSigner);function ChainSigner(e,r,n){var i,a=(0,p.N)(n,{key:e,chainCode:v.alloc(32)},r).key.toString("hex");return(i=t.call(this,a,n)).encryptedPrivateKey=e,i.password=r,i.curve=n,i}var r,n=ChainSigner.prototype;return n.getPrvkey=function getPrvkey(){return Promise.resolve((0,p.Yc)(this.password,this.encryptedPrivateKey))},n.getPrvkeyHex=(r=(0,s.A)((function*(){return c.A.bytesToHex(yield this.getPrvkey())})),function getPrvkeyHex(){return r.apply(this,arguments)}),n.sign=function sign(e){var t=(0,p._S)(this.curve,this.encryptedPrivateKey,e,this.password);return"secp256k1"===this.curve?Promise.resolve([t.slice(0,-1),t[t.length-1]]):Promise.resolve([t,0])},(0,o.A)(ChainSigner)}(function(){function Verifier(e,t){this.curve=t,this.compressedPublicKey=v.from(e,"hex"),this.uncompressedPublicKey=(0,p.sA)(t,this.compressedPublicKey)}var e,t=Verifier.prototype;return t.getPubkey=function getPubkey(e){return Promise.resolve(e?this.compressedPublicKey:this.uncompressedPublicKey)},t.getPubkeyHex=(e=(0,s.A)((function*(e){return c.A.bytesToHex(yield this.getPubkey(e))})),function getPubkeyHex(t){return e.apply(this,arguments)}),t.verify=function verify(){return Promise.resolve(v.from([]))},t.verifySignature=function verifySignature({publicKey:e,digest:t,signature:r}){var n=c.A.toBuffer(e),i=c.A.toBuffer(t),a=c.A.toBuffer(r),{curve:s}=this,o=(0,p.MX)(s,n,i,a);return Promise.resolve(o)},(0,o.A)(Verifier)}());function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=function(){function CoreChainApiBase(){}var e,t,r,n,a,y,d,h,v=CoreChainApiBase.prototype;return v.baseGetCurve=function baseGetCurve(e){switch(e){case"ed25519":return p.ev;case"secp256k1":return p.bI;case"nistp256":return p.OX;default:throw new u.He("Unsupported curve")}},v.baseCreateSigner=(e=(0,s.A)((function*({curve:e,privateKey:t,password:r}){if(void 0===r)throw new u.He("Software signing requires a password.");var n=c.A.toBuffer(t);return Promise.resolve(new g(n,r,e))})),function baseCreateSigner(t){return e.apply(this,arguments)}),v.baseGetSingleSigner=(t=(0,s.A)((function*({payload:e,curve:t}){var r=yield this.getPrivateKeys(e),n=e.account.path,i=r[n],a=e?.relPaths?.[0];if(!i&&a&&(i=r[[n,a].join("/")]),!i)throw new Error(`No private key found: ${n}`);return this.baseCreateSigner({curve:t,privateKey:i,password:e.password})})),function baseGetSingleSigner(e){return t.apply(this,arguments)}),v.baseGetPrivateKeys=(r=(0,s.A)((function*({payload:e,curve:t}){var{credentials:r,account:n,password:i,relPaths:a}=e,s={};if(r.hd&&r.imported)throw new u.He("getPrivateKeys ERROR: hd and imported credentials can NOT both set.");if(r.hd&&(s=yield this.baseGetPrivateKeysHd({curve:t,account:n,hdCredential:r.hd,password:i,relPaths:a})),r.imported){var{privateKey:o}=(0,p.VV)({password:i,credential:r.imported}),f=c.A.bytesToHex((0,p.w)(i,o));s[n.path]=f,s[""]=f}if(!Object.keys(s).length)throw new Error("No private keys found");return s})),function baseGetPrivateKeys(e){return r.apply(this,arguments)}),v.baseGetPrivateKeysHd=(n=(0,s.A)((function*({curve:e,password:t,account:r,relPaths:n,hdCredential:i}){var{path:a}=r,s=a.split("/"),o=n||[s.pop()],f=s.join("/");if(0===o.length)throw new u.He("getPrivateKeysHd ERROR: relPaths is empty.");return(0,p.Wu)(e,i,t,f,o).reduce((function(e,t){return _objectSpread(_objectSpread({},e),{},{[t.path]:c.A.bytesToHex(t.extendedKey.key)})}),{})})),function baseGetPrivateKeysHd(e){return n.apply(this,arguments)}),v.baseGetAddressesFromHd=(a=(0,s.A)((function*(e,t){var r=this,{curve:n,generateFrom:a}=t,{template:o,hdCredential:f,password:y,indexes:d}=e,{pathPrefix:h,pathSuffix:v}=(0,l.Ah)(o),g=d.map((function(e){return v.replace("{index}",e.toString())})),A="privateKey"===a,S=[],b=[];A?b=(0,p.Wu)(n,f,y,h,g):S=yield(0,p.MJ)({curveName:n,hdCredential:f,password:y,prefix:h,relPaths:g});var P=A?b:S;if(P.length!==d.length)throw new u.He("Unable to get publick key.");var m,w=yield Promise.all(P.map((m=(0,s.A)((function*(t){var n,a,{path:s,extendedKey:{key:o}}=t;if(A){var u=c.A.bytesToHex((0,p.Yc)(y,o));a=yield r.getAddressFromPrivate({networkInfo:e.networkInfo,privateKeyRaw:u,privateKeyInfo:t})}else n=o.toString("hex"),a=yield r.getAddressFromPublic({networkInfo:e.networkInfo,publicKey:n,publicKeyInfo:t});return i()({publicKey:n,path:s},a)})),function(e){return m.apply(this,arguments)})));return{addresses:w}})),function baseGetAddressesFromHd(e,t){return a.apply(this,arguments)}),v.baseGetCredentialsType=function baseGetCredentialsType({credentials:e}){if(e.hd&&e.imported)throw new u.He("getCredentialsType ERROR: hd and imported credentials can NOT both set.");if(e.hd)return f.ECoreCredentialType.hd;if(e.imported)return f.ECoreCredentialType.imported;throw new u.He("getCredentialsType ERROR: no credentials found")},v.baseGetDefaultPrivateKey=(y=(0,s.A)((function*(e){var t=yield this.getPrivateKeys(e),[r]=Object.values(t);return{privateKeyRaw:r}})),function baseGetDefaultPrivateKey(e){return y.apply(this,arguments)}),v.validateXpub=(d=(0,s.A)((function*(e){throw new u.MS})),function validateXpub(e){return d.apply(this,arguments)}),v.validateXprvt=(h=(0,s.A)((function*(e){throw new u.MS})),function validateXprvt(e){return h.apply(this,arguments)}),(0,o.A)(CoreChainApiBase)}()},287048:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(230414),i=r(929296),a=r(195309),s=r(972715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,s.A)(e);if(t){var i=(0,s.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var o=function(e){(0,i.A)(CoreChainHd,e);var t=_createSuper(CoreChainHd);function CoreChainHd(){return t.apply(this,arguments)}return(0,n.A)(CoreChainHd)}(r(803513).A)},803513:(e,t,r)=>{"use strict";r.d(t,{A:()=>g});var n=r(586330),i=r(230414),a=r(929296),s=r(195309),o=r(972715),u=r(507140),c=r(825145),p=r(606777),f=r(940916),l=r(554902),y=r(404727),d=r(347803),h=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,o.A)(e);if(t){var i=(0,o.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var v="secp256k1",g=function(e){(0,a.A)(CoreChainSoftware,e);var t=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return t.apply(this,arguments)}var r,s,o,f,g,A,S,b=CoreChainSoftware.prototype;return b.getExportedSecretKey=(r=(0,n.A)((function*(e){var{networkInfo:t,password:r,keyType:n,credentials:i}=e,{privateKeyRaw:a}=yield this.baseGetDefaultPrivateKey(e);if(!a)throw new Error("privateKeyRaw is required");if(n===y.ECoreApiExportedSecretKeyType.privateKey){var s=t.chainId;return(0,d.privateKeyFromBuffer)((0,l.Yc)(r,a),s).toWIF()}throw new Error(`SecretKey type not support: ${n}`)})),function getExportedSecretKey(e){return r.apply(this,arguments)}),b.getPrivateKeys=(s=(0,n.A)((function*(e){return this.baseGetPrivateKeys({payload:e,curve:v})})),function getPrivateKeys(e){return s.apply(this,arguments)}),b.signTransaction=(o=(0,n.A)((function*(e){var{unsignedTx:t,account:r,networkInfo:{chainId:i}}=e,a=yield this.baseGetSingleSigner({payload:e,curve:v}),s=t.encodedTx,o=(0,d.toTransaction)(s),u=yield(0,d.signTransaction)(o,{getPublicKey:()=>(0,d.publicKeyFromOriginPubkey)(h.from(p.A.hexToBytes((0,c.wT)(r.pub)))),getPrivateKey:()=>(0,n.A)((function*(){var e=yield a.getPrvkey(),t=yield a.getPubkey(!0);return(0,d.privateKeyFromOriginPrivateKey)(e,t,i)}))()});return{encodedTx:t.encodedTx,txid:"",rawTx:u}})),function signTransaction(e){return o.apply(this,arguments)}),b.signMessage=(f=(0,n.A)((function*(){throw new u.MS})),function signMessage(){return f.apply(this,arguments)}),b.getAddressFromPrivate=(g=(0,n.A)((function*(e){var{privateKeyRaw:t}=e,r=p.A.toBuffer(t),n=this.baseGetCurve(v).publicFromPrivate(r);return this.getAddressFromPublic({publicKey:p.A.bytesToHex(n),networkInfo:e.networkInfo})})),function getAddressFromPrivate(e){return g.apply(this,arguments)}),b.getAddressFromPublic=(A=(0,n.A)((function*(e){var{publicKey:t,networkInfo:{chainId:r}}=e,n=(0,d.publicKeyFromOriginPubkey)(p.A.toBuffer(t)),i=(0,d.addressFromPublicKey)(n,r);return Promise.resolve({address:i,publicKey:t})})),function getAddressFromPublic(e){return A.apply(this,arguments)}),b.getAddressesFromHd=(S=(0,n.A)((function*(e){return this.baseGetAddressesFromHd(e,{curve:v})})),function getAddressesFromHd(e){return S.apply(this,arguments)}),(0,i.A)(CoreChainSoftware)}(f.G)},347803:(e,t,r)=>{"use strict";r.d(t,{CONFIRMATION_COUNT:()=>g,DUST_AMOUNT:()=>A,EKaspaSignType:()=>_,MAX_BLOCK_SIZE:()=>S,MAX_ORPHAN_TX_MASS:()=>b,SignatureType:()=>C,SigningMethodType:()=>x,addressFromPublicKey:()=>addressFromPublicKey,isValidAddress:()=>isValidAddress,privateKeyFromBuffer:()=>privateKeyFromBuffer,privateKeyFromOriginPrivateKey:()=>privateKeyFromOriginPrivateKey,privateKeyFromWIF:()=>privateKeyFromWIF,publicKeyFromOriginPubkey:()=>publicKeyFromOriginPubkey,publicKeyFromX:()=>publicKeyFromX,selectUTXOs:()=>selectUTXOs,signTransaction:()=>signTransaction,toTransaction:()=>toTransaction});var n=r(387473),i=function(e){return e.PayToPublicKey="pubkey",e.PayToScriptHash="scripthash",e}({});function addressFromPublicKey(e,t){return n.Address.fromPublicKey(e,t).toString()}function isValidAddress(e,t,r=i.PayToPublicKey){return n.Address.isValid(e,t,r)}var a=r(646123),s=r.n(a),o=r(586330),u=r(230414),c=r(21756),p=r(507140),f=r(254491),l=r(830036),y=r(332084),d=r(241440),h=r(424754),v=r(209188),g=10,A=2e7,S=1e6,b=1e5,P=0,m=(r(187826),r(929296)),w=r(195309),K=r(972715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,K.A)(e);if(t){var i=(0,K.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,w.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var T=function(e){(0,m.A)(UnspentOutput,e);var t=_createSuper(UnspentOutput);function UnspentOutput(e){var r;return(r=t.call(this,e)).blockDaaScore=e.blockDaaScore,r.scriptPublicKeyVersion=e.scriptPublicKeyVersion,r.id=`${r.txId}${r.outputIndex}`,r.signatureOPCount=r.script.getSignatureOperationsCount(),r.mass=r.signatureOPCount*n.Transaction.MassPerSigOp,r.mass+=151*n.Transaction.MassPerTxByte,r.scriptPubKey=e.scriptPubKey,r}return UnspentOutput.prototype.toJSON=function toJSON(){return{txid:this.txId,address:this.address.toString(),vout:this.outputIndex,scriptPubKey:this.scriptPubKey,satoshis:this.satoshis,blockDaaScore:this.blockDaaScore,scriptPublicKeyVersion:this.scriptPublicKeyVersion}},UnspentOutput.fromJSON=function fromJSON(e){return new UnspentOutput(e)},(0,u.A)(UnspentOutput)}(n.Transaction.UnspentOutput),C=function(e){return e[e.SIGHASH_ALL=1]="SIGHASH_ALL",e[e.SIGHASH_NONE=2]="SIGHASH_NONE",e[e.SIGHASH_SINGLE=3]="SIGHASH_SINGLE",e[e.SIGHASH_FORKID=64]="SIGHASH_FORKID",e[e.SIGHASH_ANYONECANPAY=128]="SIGHASH_ANYONECANPAY",e}({}),x=function(e){return e.ECDSA="ecdsa",e.Schnorr="schnorr",e}({});function toTransaction(e){var{inputs:t,outputs:r,mass:i}=e,{address:a}=t[0]||{},{address:s,value:o}=r[0],u=new d.A(o);if(e.hasMaxSend&&(u=u.minus(i)),u.isLessThan(0))throw new p.He({message:"Insufficient Balance.",key:f.ETranslations.swap_page_button_insufficient_balance});var c=(new n.Transaction).from(t.map((function(e){return new T(e)}))).to(s,u.toFixed()).setVersion(0).fee(i).change(a?.toString());return c.inputs.forEach((function(e){e.sequenceNumber=P})),c}function _sign2(){return(_sign2=(0,o.A)((function*(e,t,r,i,a,s,o,u){var c=n.Transaction.Sighash.sighash(e,r,i,a,s,o);if("schnorr"===u){var p=(yield t.getPrivateKey()).toBuffer(),f=v.A.signSchnorr(c,p),d=(0,l.My)(f),g=n.crypto.Signature.fromString(h.A.stripHexPrefix(d)),A=g.toBuffer("schnorr").toString("hex");if(A.length<128)throw new Error(`Invalid Signature\nsecp256k1 sig:${h.A.hexlify(d)}\nSignature.fromString:${A}`);return g.compressed=!0,g.nhashtype=r,g}if("ecdsa"===u){var S=yield y._S(c,(yield t.getPrivateKey()).toBuffer()),b=h.A.hexlify(S),P=n.crypto.Signature.fromString(h.A.stripHexPrefix(b));return P.compressed=!0,P.nhashtype=r,P}}))).apply(this,arguments)}function getSignaturesWithInput(e,t,r,n){return _getSignaturesWithInput.apply(this,arguments)}function _getSignaturesWithInput(){return _getSignaturesWithInput=(0,o.A)((function*(e,t,r,i,a=C.SIGHASH_ALL|C.SIGHASH_FORKID,s=x.Schnorr){if(t instanceof n.Transaction.Input.PublicKey){var o=i.getPublicKey();if(o.toString()===h.A.hexlify(t?.output?.script?.getPublicKey(),{noPrefix:!0})){var u=yield function sign(e,t,r,n,i,a,s,o){return _sign2.apply(this,arguments)}(e,i,a,r,t.output?.script,t.output?.satoshis,void 0,s);return[new n.Transaction.Signature({publicKey:o,prevTxId:t.prevTxId,outputIndex:t.outputIndex,inputIndex:r,signature:u,sigtype:a})]}return[]}})),_getSignaturesWithInput.apply(this,arguments)}function _getSignatures(){return(_getSignatures=(0,o.A)((function*(e,t,r,n=C.SIGHASH_ALL|C.SIGHASH_FORKID,i=x.Schnorr){var a,s=[];for(var{input:o,index:u}of t)a=(yield getSignaturesWithInput(r,o,u,e,n,i))||[],s.push(...a);return s}))).apply(this,arguments)}function _sign3(){return _sign3=(0,o.A)((function*(e,t,r,n,i=x.ECDSA){var a=(yield function getSignatures(e,t,r){return _getSignatures.apply(this,arguments)}(e,t,r,n,i))||[];for(var s of a)r.inputs[s.inputIndex].addSignature(r,s,i);return r.toBuffer().toString("hex")})),_sign3.apply(this,arguments)}function signTransaction(e,t){for(var r=[],n=0;n<e.inputs.length;n+=1){var i=e.inputs[n];r.push({input:i,index:n})}return function _sign(e,t,r,n){return _sign3.apply(this,arguments)}(t,r,e,C.SIGHASH_ALL,x.Schnorr)}!function(){function RestAPIClient(e){this.axios=c.A.create({baseURL:e,timeout:3e4})}var e,t,r,i,a,l,y,h,v=RestAPIClient.prototype;v.getBlockdag=(e=(0,o.A)((function*(){try{return(yield this.axios.get("/info/blockdag",{headers:{"Content-Type":"application/json"}})).data}catch(e){return{networkName:"",blockCount:"0",headerCount:"0",virtualDaaScore:"0"}}})),function getBlockdag(){return e.apply(this,arguments)}),v.getNetworkInfo=(t=(0,o.A)((function*(){try{return(yield this.axios.get("/info/network",{headers:{"Content-Type":"application/json"}})).data}catch(e){return{networkName:"",blockCount:"0",headerCount:"0",virtualDaaScore:"0"}}})),function getNetworkInfo(){return t.apply(this,arguments)}),v.queryBalance=(r=(0,o.A)((function*(e){try{return(yield this.axios.get(`/addresses/${e}/balance`,{headers:{"Content-Type":"application/json"}})).data.balance}catch(e){return 0n}})),function queryBalance(e){return r.apply(this,arguments)}),v.queryUtxos=(i=(0,o.A)((function*(e){try{return(yield this.axios.get(`/addresses/${e}/utxos`,{headers:{"Content-Type":"application/json"}})).data}catch(e){return[]}})),function queryUtxos(e){return i.apply(this,arguments)}),v.sendRawTransaction=(a=(0,o.A)((function*(e){var t=function submitTransactionFromString(e){var t=new n.Transaction(e),{nLockTime:r,version:i}=t;return{transaction:{version:i,inputs:t.inputs.map((function(e){return{previousOutpoint:{transactionId:e.prevTxId.toString("hex"),index:e.outputIndex},signatureScript:e.script.toBuffer().toString("hex"),sequence:P,sigOpCount:1}})),outputs:t.outputs.map((function(e){return{amount:new d.A(e.satoshis).toFixed(),scriptPublicKey:{scriptPublicKey:e.script.toBuffer().toString("hex"),version:0}}})),lockTime:r,fee:t.fee,subnetworkId:"0000000000000000000000000000000000000000"}}}(e);return this.axios.post("/transactions",t,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data.transactionId})).catch((function(e){var t=s()(e,"response.data.error","");if(t.match(/payment of \d+ is dust/))throw new p.He({message:t,key:f.ETranslations.send_amount_too_small});if(-1!==t.toLowerCase().indexOf("insufficient balance"))throw new p.He({message:t,key:f.ETranslations.earn_insufficient_balance});throw new p.He(t)}))})),function sendRawTransaction(e){return a.apply(this,arguments)}),v.getTransaction=(l=(0,o.A)((function*(e){return(yield this.axios.get(`/transactions/${e}?inputs=true&outputs=true&resolve_previous_outpoints=light`,{headers:{"Content-Type":"application/json"}})).data})),function getTransaction(e){return l.apply(this,arguments)}),v.getTransactions=(y=(0,o.A)((function*(e){return(yield this.axios.post("/transactions/search?resolve_previous_outpoints=light",{transactionIds:[...e]},{headers:{"Content-Type":"application/json"}})).data})),function getTransactions(e){return y.apply(this,arguments)}),v.getTransactionsByAddress=(h=(0,o.A)((function*(e){return(yield this.axios.get(`/addresses/${e}/full-transactions?limit=50&offset=0&resolve_previous_outpoints=light`,{headers:{"Content-Type":"application/json"}})).data})),function getTransactionsByAddress(e){return h.apply(this,arguments)}),(0,u.A)(RestAPIClient)}();var O=r(894191);function privateKeyFromWIF(e){return n.PrivateKey.fromWIF(e)}function privateKeyFromBuffer(e,t){return n.PrivateKey.fromBuffer(e,t)}function privateKeyFromOriginPrivateKey(e,t,r){var i=new Uint8Array(e),a=t;if(3===a[0]&&(i=v.A.privateNegate(i)),!i)throw new Error("Private key is required for tweaking signer!");var s=v.A.privateAdd(i,(0,O.q)(a.slice(1),void 0));return new n.PrivateKey((0,l.My)(s),r)}var I=r(901048).Buffer,_=function(e){return e.Schnorr="schnorr",e.ECDSA="ecdsa",e}({});function publicKeyFromX(e,t){var r=e?`02${t}`:`03${t}`;return n.PublicKey.fromString(r)}function publicKeyFromOriginPubkey(e){var t=(0,O.z)(I.from(e.slice(1)));if(!t)throw new Error("Public key tweak failed");var{parity:r,x:n}=t;return publicKeyFromX(0===r,(0,l.My)(n))}var N=new d.A("18446744073709551615");function selectUTXOs(e,t,r){var n=function sortUXTO(e){return e.sort((function(e,t){return e.blockDaaScore-t.blockDaaScore||new d.g(t.satoshis).minus(e.satoshis).toNumber()||e.txid.localeCompare(t.txid)||e.vout-t.vout}))}(e),i=[],a=[],s=new d.g(0),o=0;for(var u of n){var c=new T(u);if(a.push(c.id),i.push(u),o+=c.mass,(s=s.plus(c.satoshis)).isGreaterThanOrEqualTo(t))break}if(s.isLessThan(t))throw new p.Cm;if(s.isGreaterThan(N))throw new Error("utxo amount is too large");return{utxoIds:a,utxos:i,mass:o}}},187826:()=>{},180556:(e,t,r)=>{"use strict";r.d(t,{Ac:()=>estimateTxSize,Ah:()=>slicePathTemplate,vN:()=>getUtxoAccountPrefixPath,zf:()=>getBIP44Path});var n=r(90366),i=r.n(n),a=r(928557);function slicePathTemplate(e){var[t,r]=e.split(a.h2);return{pathPrefix:t.slice(0,-1),pathSuffix:`{index}${r}`}}function getUtxoAccountPrefixPath({fullPath:e}){var t=e.split("/");return t.pop(),t.pop(),t.join("/")}function getBIP44Path(e,t){var r="";for(var[n,i]of Object.entries(e.addresses))if(i===t){r=n;break}return`${e.path}/${r}`}function estimateTxSize(e,t){return i().transactionBytes(e,t)}},90366:e=>{var t=10,r=41,n=107,i=9,a=25,s=10;function inputBytes(e){return r+(e.script?e.script.length:n)}function outputBytes(e){return e.script?s+e.script.length+(e.script.length>=74?2:1):i+(e.script?e.script.length:a)}function dustThreshold(e,t){return 3*inputBytes({})}function transactionBytes(e,r){return t+e.reduce((function(e,t){return e+inputBytes(t)}),0)+r.reduce((function(e,t){return e+outputBytes(t)}),0)}function uintOrNaN(e){return"number"!=typeof e?NaN:isFinite(e)?Math.floor(e)!==e||e<0?NaN:e:NaN}function sumOrNaN(e){return e.reduce((function(e,t){return e+uintOrNaN(t.value)}),0)}var o=outputBytes({});e.exports={dustThreshold,finalize:function finalize(e,t,r){var n=transactionBytes(e,t),i=r*(n+o),a=sumOrNaN(e)-(sumOrNaN(t)+i);a>dustThreshold()&&(t=t.concat({value:a}));var s=sumOrNaN(e)-sumOrNaN(t);return isFinite(s)?{inputs:e,outputs:t,fee:s}:{fee:r*n}},inputBytes,outputBytes,sumOrNaN,sumForgiving:function sumForgiving(e){return e.reduce((function(e,t){return e+(isFinite(t.value)?t.value:0)}),0)},transactionBytes,uintOrNaN}},937130:()=>{},527852:()=>{}}]);