import{w as cr}from"./index.80453e5b.js";function dr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function St(e){if(e.__esModule)return e;var r=e.default;if(typeof r=="function"){var t=function i(){if(this instanceof i){var n=[null];n.push.apply(n,arguments);var a=Function.bind.apply(r,n);return new a}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}),t}var ue={exports:{}},Je=function(r,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return r.apply(t,n)}},hr=Je,fe=Object.prototype.toString,le=function(e){return function(r){var t=fe.call(r);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function O(e){return e=e.toLowerCase(),function(t){return le(t)===e}}function ce(e){return Array.isArray(e)}function F(e){return typeof e>"u"}function pr(e){return e!==null&&!F(e)&&e.constructor!==null&&!F(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var Ve=O("ArrayBuffer");function vr(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&Ve(e.buffer),r}function mr(e){return typeof e=="string"}function Er(e){return typeof e=="number"}function We(e){return e!==null&&typeof e=="object"}function B(e){if(le(e)!=="object")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}var yr=O("Date"),Rr=O("File"),br=O("Blob"),wr=O("FileList");function de(e){return fe.call(e)==="[object Function]"}function Or(e){return We(e)&&de(e.pipe)}function Ar(e){var r="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||fe.call(e)===r||de(e.toString)&&e.toString()===r)}var Sr=O("URLSearchParams");function Cr(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Tr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function he(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ce(e))for(var t=0,i=e.length;t<i;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function oe(){var e={};function r(n,a){B(e[a])&&B(n)?e[a]=oe(e[a],n):B(n)?e[a]=oe({},n):ce(n)?e[a]=n.slice():e[a]=n}for(var t=0,i=arguments.length;t<i;t++)he(arguments[t],r);return e}function xr(e,r,t){return he(r,function(n,a){t&&typeof n=="function"?e[a]=hr(n,t):e[a]=n}),e}function Pr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function _r(e,r,t,i){e.prototype=Object.create(r.prototype,i),e.prototype.constructor=e,t&&Object.assign(e.prototype,t)}function gr(e,r,t){var i,n,a,o={};r=r||{};do{for(i=Object.getOwnPropertyNames(e),n=i.length;n-- >0;)a=i[n],o[a]||(r[a]=e[a],o[a]=!0);e=Object.getPrototypeOf(e)}while(e&&(!t||t(e,r))&&e!==Object.prototype);return r}function Nr(e,r,t){e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=r.length;var i=e.indexOf(r,t);return i!==-1&&i===t}function Dr(e){if(!e)return null;var r=e.length;if(F(r))return null;for(var t=new Array(r);r-- >0;)t[r]=e[r];return t}var Ur=function(e){return function(r){return e&&r instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),v={isArray:ce,isArrayBuffer:Ve,isBuffer:pr,isFormData:Ar,isArrayBufferView:vr,isString:mr,isNumber:Er,isObject:We,isPlainObject:B,isUndefined:F,isDate:yr,isFile:Rr,isBlob:br,isFunction:de,isStream:Or,isURLSearchParams:Sr,isStandardBrowserEnv:Tr,forEach:he,merge:oe,extend:xr,trim:Cr,stripBOM:Pr,inherits:_r,toFlatObject:gr,kindOf:le,kindOfTest:O,endsWith:Nr,toArray:Dr,isTypedArray:Ur,isFileList:wr},T=v;function Re(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ze=function(r,t,i){if(!t)return r;var n;if(i)n=i(t);else if(T.isURLSearchParams(t))n=t.toString();else{var a=[];T.forEach(t,function(f,h){f===null||typeof f>"u"||(T.isArray(f)?h=h+"[]":f=[f],T.forEach(f,function(d){T.isDate(d)?d=d.toISOString():T.isObject(d)&&(d=JSON.stringify(d)),a.push(Re(h)+"="+Re(d))}))}),n=a.join("&")}if(n){var o=r.indexOf("#");o!==-1&&(r=r.slice(0,o)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},qr=v;function j(){this.handlers=[]}j.prototype.use=function(r,t,i){return this.handlers.push({fulfilled:r,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};j.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};j.prototype.forEach=function(r){qr.forEach(this.handlers,function(i){i!==null&&r(i)})};var Br=j,Lr=v,Fr=function(r,t){Lr.forEach(r,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[a])})},Xe=v;function P(e,r,t,i,n){Error.call(this),this.message=e,this.name="AxiosError",r&&(this.code=r),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}Xe.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ke=P.prototype,Qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Qe[e]={value:e}});Object.defineProperties(P,Qe);Object.defineProperty(Ke,"isAxiosError",{value:!0});P.from=function(e,r,t,i,n,a){var o=Object.create(Ke);return Xe.toFlatObject(e,o,function(f){return f!==Error.prototype}),P.call(o,e.message,r,t,i,n),o.name=e.name,a&&Object.assign(o,a),o};var g=P,Ye={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},V,be;function Ge(){if(be)return V;be=1;var e=v;function r(t,i){i=i||new FormData;var n=[];function a(s){return s===null?"":e.isDate(s)?s.toISOString():e.isArrayBuffer(s)||e.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function o(s,f){if(e.isPlainObject(s)||e.isArray(s)){if(n.indexOf(s)!==-1)throw Error("Circular reference detected in "+f);n.push(s),e.forEach(s,function(c,d){if(!e.isUndefined(c)){var u=f?f+"."+d:d,m;if(c&&!f&&typeof c=="object"){if(e.endsWith(d,"{}"))c=JSON.stringify(c);else if(e.endsWith(d,"[]")&&(m=e.toArray(c))){m.forEach(function(q){!e.isUndefined(q)&&i.append(u,a(q))});return}}o(c,u)}}),n.pop()}else i.append(f,a(s))}return o(t),i}return V=r,V}var W,we;function jr(){if(we)return W;we=1;var e=g;return W=function(t,i,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?t(n):i(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},W}var z,Oe;function Ir(){if(Oe)return z;Oe=1;var e=v;return z=e.isStandardBrowserEnv()?function(){return{write:function(i,n,a,o,s,f){var h=[];h.push(i+"="+encodeURIComponent(n)),e.isNumber(a)&&h.push("expires="+new Date(a).toGMTString()),e.isString(o)&&h.push("path="+o),e.isString(s)&&h.push("domain="+s),f===!0&&h.push("secure"),document.cookie=h.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),z}var $r=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},Mr=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r},kr=$r,Hr=Mr,Ze=function(r,t){return r&&!kr(t)?Hr(r,t):t},X,Ae;function Jr(){if(Ae)return X;Ae=1;var e=v,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return X=function(i){var n={},a,o,s;return i&&e.forEach(i.split(`
`),function(h){if(s=h.indexOf(":"),a=e.trim(h.substr(0,s)).toLowerCase(),o=e.trim(h.substr(s+1)),a){if(n[a]&&r.indexOf(a)>=0)return;a==="set-cookie"?n[a]=(n[a]?n[a]:[]).concat([o]):n[a]=n[a]?n[a]+", "+o:o}}),n},X}var K,Se;function Vr(){if(Se)return K;Se=1;var e=v;return K=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function a(o){var s=o;return t&&(i.setAttribute("href",s),s=i.href),i.setAttribute("href",s),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=a(window.location.href),function(s){var f=e.isString(s)?a(s):s;return f.protocol===n.protocol&&f.host===n.host}}():function(){return function(){return!0}}(),K}var Q,Ce;function I(){if(Ce)return Q;Ce=1;var e=g,r=v;function t(i){e.call(this,i??"canceled",e.ERR_CANCELED),this.name="CanceledError"}return r.inherits(t,e,{__CANCEL__:!0}),Q=t,Q}var Y,Te;function Wr(){return Te||(Te=1,Y=function(r){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return t&&t[1]||""}),Y}var G,xe;function Pe(){if(xe)return G;xe=1;var e=v,r=jr(),t=Ir(),i=ze,n=Ze,a=Jr(),o=Vr(),s=Ye,f=g,h=I(),c=Wr();return G=function(u){return new Promise(function(q,A){var N=u.data,D=u.headers,U=u.responseType,S;function me(){u.cancelToken&&u.cancelToken.unsubscribe(S),u.signal&&u.signal.removeEventListener("abort",S)}e.isFormData(N)&&e.isStandardBrowserEnv()&&delete D["Content-Type"];var l=new XMLHttpRequest;if(u.auth){var ur=u.auth.username||"",fr=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";D.Authorization="Basic "+btoa(ur+":"+fr)}var k=n(u.baseURL,u.url);l.open(u.method.toUpperCase(),i(k,u.params,u.paramsSerializer),!0),l.timeout=u.timeout;function Ee(){if(l){var R="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,C=!U||U==="text"||U==="json"?l.responseText:l.response,w={data:C,status:l.status,statusText:l.statusText,headers:R,config:u,request:l};r(function(J){q(J),me()},function(J){A(J),me()},w),l=null}}if("onloadend"in l?l.onloadend=Ee:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(Ee)},l.onabort=function(){l&&(A(new f("Request aborted",f.ECONNABORTED,u,l)),l=null)},l.onerror=function(){A(new f("Network Error",f.ERR_NETWORK,u,l,l)),l=null},l.ontimeout=function(){var C=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",w=u.transitional||s;u.timeoutErrorMessage&&(C=u.timeoutErrorMessage),A(new f(C,w.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,u,l)),l=null},e.isStandardBrowserEnv()){var ye=(u.withCredentials||o(k))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;ye&&(D[u.xsrfHeaderName]=ye)}"setRequestHeader"in l&&e.forEach(D,function(C,w){typeof N>"u"&&w.toLowerCase()==="content-type"?delete D[w]:l.setRequestHeader(w,C)}),e.isUndefined(u.withCredentials)||(l.withCredentials=!!u.withCredentials),U&&U!=="json"&&(l.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&l.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(S=function(R){l&&(A(!R||R&&R.type?new h:R),l.abort(),l=null)},u.cancelToken&&u.cancelToken.subscribe(S),u.signal&&(u.signal.aborted?S():u.signal.addEventListener("abort",S))),N||(N=null);var H=c(k);if(H&&["http","https","file"].indexOf(H)===-1){A(new f("Unsupported protocol "+H+":",f.ERR_BAD_REQUEST,u));return}l.send(N)})},G}var Z,_e;function zr(){return _e||(_e=1,Z=null),Z}var p=v,ge=Fr,Ne=g,Xr=Ye,Kr=Ge(),Qr={"Content-Type":"application/x-www-form-urlencoded"};function De(e,r){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function Yr(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Pe()),e}function Gr(e,r,t){if(p.isString(e))try{return(r||JSON.parse)(e),p.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(e)}var $={transitional:Xr,adapter:Yr(),transformRequest:[function(r,t){if(ge(t,"Accept"),ge(t,"Content-Type"),p.isFormData(r)||p.isArrayBuffer(r)||p.isBuffer(r)||p.isStream(r)||p.isFile(r)||p.isBlob(r))return r;if(p.isArrayBufferView(r))return r.buffer;if(p.isURLSearchParams(r))return De(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString();var i=p.isObject(r),n=t&&t["Content-Type"],a;if((a=p.isFileList(r))||i&&n==="multipart/form-data"){var o=this.env&&this.env.FormData;return Kr(a?{"files[]":r}:r,o&&new o)}else if(i||n==="application/json")return De(t,"application/json"),Gr(r);return r}],transformResponse:[function(r){var t=this.transitional||$.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&p.isString(r)&&r.length)try{return JSON.parse(r)}catch(o){if(a)throw o.name==="SyntaxError"?Ne.from(o,Ne.ERR_BAD_RESPONSE,this,null,this.response):o}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:zr()},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(r){$.headers[r]={}});p.forEach(["post","put","patch"],function(r){$.headers[r]=p.merge(Qr)});var pe=$,Zr=v,et=pe,rt=function(r,t,i){var n=this||et;return Zr.forEach(i,function(o){r=o.call(n,r,t)}),r},ee,Ue;function er(){return Ue||(Ue=1,ee=function(r){return!!(r&&r.__CANCEL__)}),ee}var qe=v,re=rt,tt=er(),nt=pe,it=I();function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new it}var at=function(r){te(r),r.headers=r.headers||{},r.data=re.call(r,r.data,r.headers,r.transformRequest),r.headers=qe.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),qe.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||nt.adapter;return t(r).then(function(n){return te(r),n.data=re.call(r,n.data,n.headers,r.transformResponse),n},function(n){return tt(n)||(te(r),n&&n.response&&(n.response.data=re.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},y=v,rr=function(r,t){t=t||{};var i={};function n(c,d){return y.isPlainObject(c)&&y.isPlainObject(d)?y.merge(c,d):y.isPlainObject(d)?y.merge({},d):y.isArray(d)?d.slice():d}function a(c){if(y.isUndefined(t[c])){if(!y.isUndefined(r[c]))return n(void 0,r[c])}else return n(r[c],t[c])}function o(c){if(!y.isUndefined(t[c]))return n(void 0,t[c])}function s(c){if(y.isUndefined(t[c])){if(!y.isUndefined(r[c]))return n(void 0,r[c])}else return n(void 0,t[c])}function f(c){if(c in t)return n(r[c],t[c]);if(c in r)return n(void 0,r[c])}var h={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:f};return y.forEach(Object.keys(r).concat(Object.keys(t)),function(d){var u=h[d]||a,m=u(d);y.isUndefined(m)&&u!==f||(i[d]=m)}),i},ne,Be;function tr(){return Be||(Be=1,ne={version:"0.27.2"}),ne}var st=tr().version,b=g,ve={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){ve[e]=function(i){return typeof i===e||"a"+(r<1?"n ":" ")+e}});var Le={};ve.transitional=function(r,t,i){function n(a,o){return"[Axios v"+st+"] Transitional option '"+a+"'"+o+(i?". "+i:"")}return function(a,o,s){if(r===!1)throw new b(n(o," has been removed"+(t?" in "+t:"")),b.ERR_DEPRECATED);return t&&!Le[o]&&(Le[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(a,o,s):!0}};function ot(e,r,t){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),n=i.length;n-- >0;){var a=i[n],o=r[a];if(o){var s=e[a],f=s===void 0||o(s,a,e);if(f!==!0)throw new b("option "+a+" must be "+f,b.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new b("Unknown option "+a,b.ERR_BAD_OPTION)}}var ut={assertOptions:ot,validators:ve},nr=v,ft=ze,Fe=Br,je=at,M=rr,lt=Ze,ir=ut,x=ir.validators;function _(e){this.defaults=e,this.interceptors={request:new Fe,response:new Fe}}_.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=M(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&ir.assertOptions(i,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(t)===!1||(a=a&&m.synchronous,n.unshift(m.fulfilled,m.rejected))});var o=[];this.interceptors.response.forEach(function(m){o.push(m.fulfilled,m.rejected)});var s;if(!a){var f=[je,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(o),s=Promise.resolve(t);f.length;)s=s.then(f.shift(),f.shift());return s}for(var h=t;n.length;){var c=n.shift(),d=n.shift();try{h=c(h)}catch(u){d(u);break}}try{s=je(h)}catch(u){return Promise.reject(u)}for(;o.length;)s=s.then(o.shift(),o.shift());return s};_.prototype.getUri=function(r){r=M(this.defaults,r);var t=lt(r.baseURL,r.url);return ft(t,r.params,r.paramsSerializer)};nr.forEach(["delete","get","head","options"],function(r){_.prototype[r]=function(t,i){return this.request(M(i||{},{method:r,url:t,data:(i||{}).data}))}});nr.forEach(["post","put","patch"],function(r){function t(i){return function(a,o,s){return this.request(M(s||{},{method:r,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}_.prototype[r]=t(),_.prototype[r+"Form"]=t(!0)});var ct=_,ie,Ie;function dt(){if(Ie)return ie;Ie=1;var e=I();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(o){i=o});var n=this;this.promise.then(function(a){if(n._listeners){var o,s=n._listeners.length;for(o=0;o<s;o++)n._listeners[o](a);n._listeners=null}}),this.promise.then=function(a){var o,s=new Promise(function(f){n.subscribe(f),o=f}).then(a);return s.cancel=function(){n.unsubscribe(o)},s},t(function(o){n.reason||(n.reason=new e(o),i(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},r.prototype.unsubscribe=function(i){if(this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var i,n=new r(function(o){i=o});return{token:n,cancel:i}},ie=r,ie}var ae,$e;function ht(){return $e||($e=1,ae=function(r){return function(i){return r.apply(null,i)}}),ae}var se,Me;function pt(){if(Me)return se;Me=1;var e=v;return se=function(t){return e.isObject(t)&&t.isAxiosError===!0},se}var ke=v,vt=Je,L=ct,mt=rr,Et=pe;function ar(e){var r=new L(e),t=vt(L.prototype.request,r);return ke.extend(t,L.prototype,r),ke.extend(t,r),t.create=function(n){return ar(mt(e,n))},t}var E=ar(Et);E.Axios=L;E.CanceledError=I();E.CancelToken=dt();E.isCancel=er();E.VERSION=tr().version;E.toFormData=Ge();E.AxiosError=g;E.Cancel=E.CanceledError;E.all=function(r){return Promise.all(r)};E.spread=ht();E.isAxiosError=pt();ue.exports=E;ue.exports.default=E;var yt=ue.exports,Rt=yt;const sr=dr(Rt),bt={errors:[]},or=cr(bt),wt=e=>{or.update(r=>({errors:[...r.errors,e]}))},Ct=()=>{or.set({errors:[]})},Ot=sr.create({baseURL:"/api"});Ot.interceptors.response.use(e=>e,e=>{if(e.response&&e.response.status>=500){const{response:r}=e;He(e)&&wt({contentType:r.headers["Content-Type"]||r.headers["content-type"],message:He(e)})}return Promise.reject(e)});const He=e=>{var r;if(sr.isAxiosError(e)){const t=(r=e.response)==null?void 0:r.data;return typeof t=="string"&&t.length>0?t:(t==null?void 0:t.message)||(t==null?void 0:t.error)||e.message}return e instanceof Error||e&&typeof e=="object"&&"message"in e&&typeof e.message=="string"?e.message:"Something went wrong"};export{Ot as a,St as b,wt as c,dr as d,or as e,He as g,Ct as r};