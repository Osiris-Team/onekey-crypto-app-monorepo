(self.webpackChunkweb=self.webpackChunkweb||[]).push([[68655],{940916:(e,t,r)=>{"use strict";r.d(t,{G:()=>b});var n=r(482451),i=r.n(n),a=r(324586),s=r(586330),o=r(230414),u=r(507140),c=r(606777),p=r(554902),f=r(404727),l=r(180556),d=r(929296),y=r(195309),h=r(972715),v=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,h.A)(e);if(t){var i=(0,h.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,y.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var g=function(e){(0,d.A)(ChainSigner,e);var t=_createSuper(ChainSigner);function ChainSigner(e,r,n){var i,a=(0,p.N)(n,{key:e,chainCode:v.alloc(32)},r).key.toString("hex");return(i=t.call(this,a,n)).encryptedPrivateKey=e,i.password=r,i.curve=n,i}var r,n=ChainSigner.prototype;return n.getPrvkey=function getPrvkey(){return Promise.resolve((0,p.Yc)(this.password,this.encryptedPrivateKey))},n.getPrvkeyHex=(r=(0,s.A)((function*(){return c.A.bytesToHex(yield this.getPrvkey())})),function getPrvkeyHex(){return r.apply(this,arguments)}),n.sign=function sign(e){var t=(0,p._S)(this.curve,this.encryptedPrivateKey,e,this.password);return"secp256k1"===this.curve?Promise.resolve([t.slice(0,-1),t[t.length-1]]):Promise.resolve([t,0])},(0,o.A)(ChainSigner)}(function(){function Verifier(e,t){this.curve=t,this.compressedPublicKey=v.from(e,"hex"),this.uncompressedPublicKey=(0,p.sA)(t,this.compressedPublicKey)}var e,t=Verifier.prototype;return t.getPubkey=function getPubkey(e){return Promise.resolve(e?this.compressedPublicKey:this.uncompressedPublicKey)},t.getPubkeyHex=(e=(0,s.A)((function*(e){return c.A.bytesToHex(yield this.getPubkey(e))})),function getPubkeyHex(t){return e.apply(this,arguments)}),t.verify=function verify(){return Promise.resolve(v.from([]))},t.verifySignature=function verifySignature({publicKey:e,digest:t,signature:r}){var n=c.A.toBuffer(e),i=c.A.toBuffer(t),a=c.A.toBuffer(r),{curve:s}=this,o=(0,p.MX)(s,n,i,a);return Promise.resolve(o)},(0,o.A)(Verifier)}());function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(){function CoreChainApiBase(){}var e,t,r,n,a,d,y,h,v=CoreChainApiBase.prototype;return v.baseGetCurve=function baseGetCurve(e){switch(e){case"ed25519":return p.ev;case"secp256k1":return p.bI;case"nistp256":return p.OX;default:throw new u.He("Unsupported curve")}},v.baseCreateSigner=(e=(0,s.A)((function*({curve:e,privateKey:t,password:r}){if(void 0===r)throw new u.He("Software signing requires a password.");var n=c.A.toBuffer(t);return Promise.resolve(new g(n,r,e))})),function baseCreateSigner(t){return e.apply(this,arguments)}),v.baseGetSingleSigner=(t=(0,s.A)((function*({payload:e,curve:t}){var r=yield this.getPrivateKeys(e),n=e.account.path,i=r[n],a=e?.relPaths?.[0];if(!i&&a&&(i=r[[n,a].join("/")]),!i)throw new Error(`No private key found: ${n}`);return this.baseCreateSigner({curve:t,privateKey:i,password:e.password})})),function baseGetSingleSigner(e){return t.apply(this,arguments)}),v.baseGetPrivateKeys=(r=(0,s.A)((function*({payload:e,curve:t}){var{credentials:r,account:n,password:i,relPaths:a}=e,s={};if(r.hd&&r.imported)throw new u.He("getPrivateKeys ERROR: hd and imported credentials can NOT both set.");if(r.hd&&(s=yield this.baseGetPrivateKeysHd({curve:t,account:n,hdCredential:r.hd,password:i,relPaths:a})),r.imported){var{privateKey:o}=(0,p.VV)({password:i,credential:r.imported}),f=c.A.bytesToHex((0,p.w)(i,o));s[n.path]=f,s[""]=f}if(!Object.keys(s).length)throw new Error("No private keys found");return s})),function baseGetPrivateKeys(e){return r.apply(this,arguments)}),v.baseGetPrivateKeysHd=(n=(0,s.A)((function*({curve:e,password:t,account:r,relPaths:n,hdCredential:i}){var{path:a}=r,s=a.split("/"),o=n||[s.pop()],f=s.join("/");if(0===o.length)throw new u.He("getPrivateKeysHd ERROR: relPaths is empty.");return(0,p.Wu)(e,i,t,f,o).reduce((function(e,t){return _objectSpread(_objectSpread({},e),{},{[t.path]:c.A.bytesToHex(t.extendedKey.key)})}),{})})),function baseGetPrivateKeysHd(e){return n.apply(this,arguments)}),v.baseGetAddressesFromHd=(a=(0,s.A)((function*(e,t){var r=this,{curve:n,generateFrom:a}=t,{template:o,hdCredential:f,password:d,indexes:y}=e,{pathPrefix:h,pathSuffix:v}=(0,l.Ah)(o),g=y.map((function(e){return v.replace("{index}",e.toString())})),b="privateKey"===a,w=[],A=[];b?A=(0,p.Wu)(n,f,d,h,g):w=yield(0,p.MJ)({curveName:n,hdCredential:f,password:d,prefix:h,relPaths:g});var P=b?A:w;if(P.length!==y.length)throw new u.He("Unable to get publick key.");var m,S=yield Promise.all(P.map((m=(0,s.A)((function*(t){var n,a,{path:s,extendedKey:{key:o}}=t;if(b){var u=c.A.bytesToHex((0,p.Yc)(d,o));a=yield r.getAddressFromPrivate({networkInfo:e.networkInfo,privateKeyRaw:u,privateKeyInfo:t})}else n=o.toString("hex"),a=yield r.getAddressFromPublic({networkInfo:e.networkInfo,publicKey:n,publicKeyInfo:t});return i()({publicKey:n,path:s},a)})),function(e){return m.apply(this,arguments)})));return{addresses:S}})),function baseGetAddressesFromHd(e,t){return a.apply(this,arguments)}),v.baseGetCredentialsType=function baseGetCredentialsType({credentials:e}){if(e.hd&&e.imported)throw new u.He("getCredentialsType ERROR: hd and imported credentials can NOT both set.");if(e.hd)return f.ECoreCredentialType.hd;if(e.imported)return f.ECoreCredentialType.imported;throw new u.He("getCredentialsType ERROR: no credentials found")},v.baseGetDefaultPrivateKey=(d=(0,s.A)((function*(e){var t=yield this.getPrivateKeys(e),[r]=Object.values(t);return{privateKeyRaw:r}})),function baseGetDefaultPrivateKey(e){return d.apply(this,arguments)}),v.validateXpub=(y=(0,s.A)((function*(e){throw new u.MS})),function validateXpub(e){return y.apply(this,arguments)}),v.validateXprvt=(h=(0,s.A)((function*(e){throw new u.MS})),function validateXprvt(e){return h.apply(this,arguments)}),(0,o.A)(CoreChainApiBase)}()},968655:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(230414),i=r(929296),a=r(195309),s=r(972715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,s.A)(e);if(t){var i=(0,s.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var o=function(e){(0,i.A)(CoreChainImported,e);var t=_createSuper(CoreChainImported);function CoreChainImported(){return t.apply(this,arguments)}return(0,n.A)(CoreChainImported)}(r(267658).A)},267658:(e,t,r)=>{"use strict";r.d(t,{A:()=>b});var n=r(230414),i=r(929296),a=r(195309),s=r(972715),o=r(586330),u=r(776148),c=r(930671),p=r(554902),f=r(507140),l=r(606777),d=r(424754),y=r(940916),h=r(404727),v=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,s.A)(e);if(t){var i=(0,s.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var g="ed25519";function _deserializeTransactionAptos(){return(_deserializeTransactionAptos=(0,o.A)((function*(e){var t=l.A.toBuffer(e),r=new u.r8.Deserializer(t),n=u.DT.RawTransaction.deserialize(r);return Promise.resolve(n)}))).apply(this,arguments)}function _buildSignedTx(){return(_buildSignedTx=(0,o.A)((function*(e,t,r,n){var i=new u.DT.Ed25519Signature(l.A.hexToBytes(r)),a=new u.DT.TransactionAuthenticatorEd25519(new u.DT.Ed25519PublicKey(l.A.hexToBytes(d.A.stripHexPrefix(t))),i),s=u.r8.bcsToBytes(new u.DT.SignedTransaction(e,a));return Promise.resolve({txid:"",rawTx:l.A.bytesToHex(s),encodedTx:n})}))).apply(this,arguments)}var b=function(e){(0,i.A)(CoreChainSoftware,e);var t=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return t.apply(this,arguments)}var r,a,s,y,b,w,A,P=CoreChainSoftware.prototype;return P.getExportedSecretKey=(r=(0,o.A)((function*(e){var{password:t,keyType:r,credentials:n}=e,{privateKeyRaw:i}=yield this.baseGetDefaultPrivateKey(e);if(!i)throw new Error("privateKeyRaw is required");if(r===h.ECoreApiExportedSecretKeyType.privateKey)return`0x${(0,p.Yc)(t,i).toString("hex")}`;throw new Error(`SecretKey type not support: ${r}`)})),function getExportedSecretKey(e){return r.apply(this,arguments)}),P.getPrivateKeys=(a=(0,o.A)((function*(e){return this.baseGetPrivateKeys({payload:e,curve:g})})),function getPrivateKeys(e){return a.apply(this,arguments)}),P.signTransaction=(s=(0,o.A)((function*(e){var{unsignedTx:t,account:r}=e,n=yield this.baseGetSingleSigner({payload:e,curve:g}),{rawTxUnsigned:i,encodedTx:a}=t;if(!i)throw new Error("rawTxUnsigned is undefined");var s=r.pub;if(!s)throw new f.He("Unable to get sender public key.");var o=yield function deserializeTransactionAptos(e){return _deserializeTransactionAptos.apply(this,arguments)}(i),c=u.Qc.getSigningMessage(o),[p]=yield n.sign(l.A.toBuffer(c));return function buildSignedTx(e,t,r,n){return _buildSignedTx.apply(this,arguments)}(o,s,d.A.hexlify(p,{noPrefix:!0}),a)})),function signTransaction(e){return s.apply(this,arguments)}),P.signMessage=(y=(0,o.A)((function*(e){var t=e.unsignedMsg,r=yield this.baseGetSingleSigner({payload:e,curve:g}),[n]=yield r.sign(v.from(t.message));return d.A.addHexPrefix(n.toString("hex"))})),function signMessage(e){return y.apply(this,arguments)}),P.getAddressFromPublic=(b=(0,o.A)((function*(e){var{publicKey:t}=e,r=l.A.toBuffer(t),n=c.sha3_256.create();n.update(r),n.update("\0");var i=d.A.addHexPrefix(n.hex());return Promise.resolve({address:i,publicKey:t})})),function getAddressFromPublic(e){return b.apply(this,arguments)}),P.getAddressFromPrivate=(w=(0,o.A)((function*(e){var{privateKeyRaw:t}=e,r=l.A.toBuffer(t);if(32!==r.length)throw new f.He("Invalid private key.");var n=p.ev.publicFromPrivate(r);return this.getAddressFromPublic({publicKey:l.A.bytesToHex(n),networkInfo:e.networkInfo})})),function getAddressFromPrivate(e){return w.apply(this,arguments)}),P.getAddressesFromHd=(A=(0,o.A)((function*(e){return this.baseGetAddressesFromHd(e,{curve:g})})),function getAddressesFromHd(e){return A.apply(this,arguments)}),(0,n.A)(CoreChainSoftware)}(y.G)},180556:(e,t,r)=>{"use strict";r.d(t,{Ac:()=>estimateTxSize,Ah:()=>slicePathTemplate,vN:()=>getUtxoAccountPrefixPath,zf:()=>getBIP44Path});var n=r(90366),i=r.n(n),a=r(928557);function slicePathTemplate(e){var[t,r]=e.split(a.h2);return{pathPrefix:t.slice(0,-1),pathSuffix:`{index}${r}`}}function getUtxoAccountPrefixPath({fullPath:e}){var t=e.split("/");return t.pop(),t.pop(),t.join("/")}function getBIP44Path(e,t){var r="";for(var[n,i]of Object.entries(e.addresses))if(i===t){r=n;break}return`${e.path}/${r}`}function estimateTxSize(e,t){return i().transactionBytes(e,t)}},90366:e=>{var t=10,r=41,n=107,i=9,a=25,s=10;function inputBytes(e){return r+(e.script?e.script.length:n)}function outputBytes(e){return e.script?s+e.script.length+(e.script.length>=74?2:1):i+(e.script?e.script.length:a)}function dustThreshold(e,t){return 3*inputBytes({})}function transactionBytes(e,r){return t+e.reduce((function(e,t){return e+inputBytes(t)}),0)+r.reduce((function(e,t){return e+outputBytes(t)}),0)}function uintOrNaN(e){return"number"!=typeof e?NaN:isFinite(e)?Math.floor(e)!==e||e<0?NaN:e:NaN}function sumOrNaN(e){return e.reduce((function(e,t){return e+uintOrNaN(t.value)}),0)}var o=outputBytes({});e.exports={dustThreshold,finalize:function finalize(e,t,r){var n=transactionBytes(e,t),i=r*(n+o),a=sumOrNaN(e)-(sumOrNaN(t)+i);a>dustThreshold()&&(t=t.concat({value:a}));var s=sumOrNaN(e)-sumOrNaN(t);return isFinite(s)?{inputs:e,outputs:t,fee:s}:{fee:r*n}},inputBytes,outputBytes,sumOrNaN,sumForgiving:function sumForgiving(e){return e.reduce((function(e,t){return e+(isFinite(t.value)?t.value:0)}),0)},transactionBytes,uintOrNaN}}}]);