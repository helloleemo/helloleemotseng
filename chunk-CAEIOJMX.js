import{$a as z,A as Oe,Ba as N,Ca as ce,D as Ie,Ec as K,Ga as ke,Ha as le,Ia as xe,J as Ne,Ja as P,La as de,Lc as Ze,Ma as C,Na as L,Nc as Y,Oa as je,Pa as Fe,Pc as q,Qa as Ue,Ra as Be,Sa as ze,Ta as Ve,U as Pe,Ua as $e,Va as S,Y as b,_ as g,a as F,b as Ae,ba as E,d as se,da as d,ea as T,fb as Xe,g as oe,ha as B,la as ae,m as De,ma as Se,n as ie,na as _e,oa as Ce,oc as Ge,r as U,vc as ue,wc as Je,xc as We,yc as v,za as Le}from"./chunk-42NXFOHY.js";var $=class{},H=class{},w=class r{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let s=e.slice(0,n),o=s.toLowerCase(),i=e.slice(n+1).trim();this.maybeSetNormalizedName(s,o),this.headers.has(o)?this.headers.get(o).push(i):this.headers.set(o,[i])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.setHeaderEntries(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new r;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let s=(t.op==="a"?this.headers.get(e):void 0)||[];s.push(...n),this.headers.set(e,s);break;case"d":let o=t.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let i=this.headers.get(e);if(!i)return;i=i.filter(c=>o.indexOf(c)===-1),i.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,i)}break}}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),s=t.toLowerCase();this.headers.set(s,n),this.maybeSetNormalizedName(t,s)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var fe=class{encodeKey(t){return Ke(t)}encodeValue(t){return Ke(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function gt(r,t){let e=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(s=>{let o=s.indexOf("="),[i,c]=o==-1?[t.decodeKey(s),""]:[t.decodeKey(s.slice(0,o)),t.decodeValue(s.slice(o+1))],a=e.get(i)||[];a.push(c),e.set(i,a)}),e}var vt=/%(\d[a-f0-9])/gi,Tt={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ke(r){return encodeURIComponent(r).replace(vt,(t,e)=>Tt[e]??t)}function Q(r){return`${r}`}var A=class r{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new fe,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=gt(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],s=Array.isArray(n)?n.map(Q):[Q(n)];this.map.set(e,s)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let s=t[n];Array.isArray(s)?s.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:s,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new r({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(Q(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],s=n.indexOf(Q(t.value));s!==-1&&n.splice(s,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var pe=class{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function Et(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ye(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function qe(r){return typeof Blob<"u"&&r instanceof Blob}function Qe(r){return typeof FormData<"u"&&r instanceof FormData}function wt(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var V=class r{constructor(t,e,n,s){this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase();let o;if(Et(this.method)||s?(this.body=n!==void 0?n:null,o=s):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new w,this.context??=new pe,!this.params)this.params=new A,this.urlWithParams=e;else{let i=this.params.toString();if(i.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),a=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+a+i}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ye(this.body)||qe(this.body)||Qe(this.body)||wt(this.body)?this.body:this.body instanceof A?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Qe(this.body)?null:qe(this.body)?this.body.type||null:Ye(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof A?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,s=t.responseType||this.responseType,o=t.transferCache??this.transferCache,i=t.body!==void 0?t.body:this.body,c=t.withCredentials??this.withCredentials,a=t.reportProgress??this.reportProgress,l=t.headers||this.headers,f=t.params||this.params,p=t.context??this.context;return t.setHeaders!==void 0&&(l=Object.keys(t.setHeaders).reduce((O,y)=>O.set(y,t.setHeaders[y]),l)),t.setParams&&(f=Object.keys(t.setParams).reduce((O,y)=>O.set(y,t.setParams[y]),f)),new r(e,n,i,{params:f,headers:l,context:p,reportProgress:a,responseType:s,withCredentials:c,transferCache:o})}},D=function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r}(D||{}),X=class{constructor(t,e=200,n="OK"){this.headers=t.headers||new w,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},ee=class r extends X{constructor(t={}){super(t),this.type=D.ResponseHeader}clone(t={}){return new r({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},G=class r extends X{constructor(t={}){super(t),this.type=D.Response,this.body=t.body!==void 0?t.body:null}clone(t={}){return new r({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},M=class extends X{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},nt=200,Rt=204;function he(r,t){return{body:t,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,transferCache:r.transferCache}}var bt=(()=>{class r{constructor(e){this.handler=e}request(e,n,s={}){let o;if(e instanceof V)o=e;else{let a;s.headers instanceof w?a=s.headers:a=new w(s.headers);let l;s.params&&(s.params instanceof A?l=s.params:l=new A({fromObject:s.params})),o=new V(e,n,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:l,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let i=ie(o).pipe(Ie(a=>this.handler.handle(a)));if(e instanceof V||s.observe==="events")return i;let c=i.pipe(Oe(a=>a instanceof G));switch(s.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(U(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return c.pipe(U(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return c.pipe(U(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return c.pipe(U(a=>a.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new A().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,s={}){return this.request("PATCH",e,he(s,n))}post(e,n,s={}){return this.request("POST",e,he(s,n))}put(e,n,s={}){return this.request("PUT",e,he(s,n))}static{this.\u0275fac=function(n){return new(n||r)(d($))}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac})}}return r})(),Mt=/^\)\]\}',?\n/,At="X-Request-URL";function He(r){if(r.url)return r.url;let t=At.toLocaleLowerCase();return r.headers.get(t)}var Dt=(()=>{class r{constructor(){this.fetchImpl=T(ye,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e)),this.ngZone=T(N)}handle(e){return new oe(n=>{let s=new AbortController;return this.doRequest(e,s.signal,n).then(me,o=>n.error(new M({error:o}))),()=>s.abort()})}doRequest(e,n,s){return se(this,null,function*(){let o=this.createRequestInit(e),i;try{let y=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,F({signal:n},o)));Ot(y),s.next({type:D.Sent}),i=yield y}catch(y){s.error(new M({error:y,status:y.status??0,statusText:y.statusText,url:e.urlWithParams,headers:y.headers}));return}let c=new w(i.headers),a=i.statusText,l=He(i)??e.urlWithParams,f=i.status,p=null;if(e.reportProgress&&s.next(new ee({headers:c,status:f,statusText:a,url:l})),i.body){let y=i.headers.get("content-length"),k=[],u=i.body.getReader(),h=0,R,_,m=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>se(this,null,function*(){for(;;){let{done:I,value:j}=yield u.read();if(I)break;if(k.push(j),h+=j.length,e.reportProgress){_=e.responseType==="text"?(_??"")+(R??=new TextDecoder).decode(j,{stream:!0}):void 0;let Me=()=>s.next({type:D.DownloadProgress,total:y?+y:void 0,loaded:h,partialText:_});m?m.run(Me):Me()}}}));let x=this.concatChunks(k,h);try{let I=i.headers.get("Content-Type")??"";p=this.parseBody(e,x,I)}catch(I){s.error(new M({error:I,headers:new w(i.headers),status:i.status,statusText:i.statusText,url:He(i)??e.urlWithParams}));return}}f===0&&(f=p?nt:0),f>=200&&f<300?(s.next(new G({body:p,headers:c,status:f,statusText:a,url:l})),s.complete()):s.error(new M({error:p,headers:c,status:f,statusText:a,url:l}))})}parseBody(e,n,s){switch(e.responseType){case"json":let o=new TextDecoder().decode(n).replace(Mt,"");return o===""?null:JSON.parse(o);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:s});case"arraybuffer":return n.buffer}}createRequestInit(e){let n={},s=e.withCredentials?"include":void 0;if(e.headers.forEach((o,i)=>n[o]=i.join(",")),e.headers.has("Accept")||(n.Accept="application/json, text/plain, */*"),!e.headers.has("Content-Type")){let o=e.detectContentTypeHeader();o!==null&&(n["Content-Type"]=o)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:s}}concatChunks(e,n){let s=new Uint8Array(n),o=0;for(let i of e)s.set(i,o),o+=i.length;return s}static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac})}}return r})(),ye=class{};function me(){}function Ot(r){r.then(me,me)}function It(r,t){return t(r)}function Nt(r,t,e){return(n,s)=>Ce(e,()=>t(n,o=>r(o,s)))}var rt=new E(""),Pt=new E(""),St=new E("",{providedIn:"root",factory:()=>!0});var et=(()=>{class r extends ${constructor(e,n){super(),this.backend=e,this.injector=n,this.chain=null,this.pendingTasks=T(Le),this.contributeToStability=T(St)}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(rt),...this.injector.get(Pt,[])]));this.chain=n.reduceRight((s,o)=>Nt(s,o,this.injector),It)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,s=>this.backend.handle(s)).pipe(Ne(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static{this.\u0275fac=function(n){return new(n||r)(d(H),d(_e))}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac})}}return r})();var _t=/^\)\]\}',?\n/;function Ct(r){return"responseURL"in r&&r.responseURL?r.responseURL:/^X-Request-URL:/m.test(r.getAllResponseHeaders())?r.getResponseHeader("X-Request-URL"):null}var tt=(()=>{class r{constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new b(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?De(n.\u0275loadImpl()):ie(null)).pipe(Pe(()=>new oe(o=>{let i=n.build();if(i.open(e.method,e.urlWithParams),e.withCredentials&&(i.withCredentials=!0),e.headers.forEach((u,h)=>i.setRequestHeader(u,h.join(","))),e.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){let u=e.detectContentTypeHeader();u!==null&&i.setRequestHeader("Content-Type",u)}if(e.responseType){let u=e.responseType.toLowerCase();i.responseType=u!=="json"?u:"text"}let c=e.serializeBody(),a=null,l=()=>{if(a!==null)return a;let u=i.statusText||"OK",h=new w(i.getAllResponseHeaders()),R=Ct(i)||e.url;return a=new ee({headers:h,status:i.status,statusText:u,url:R}),a},f=()=>{let{headers:u,status:h,statusText:R,url:_}=l(),m=null;h!==Rt&&(m=typeof i.response>"u"?i.responseText:i.response),h===0&&(h=m?nt:0);let x=h>=200&&h<300;if(e.responseType==="json"&&typeof m=="string"){let I=m;m=m.replace(_t,"");try{m=m!==""?JSON.parse(m):null}catch(j){m=I,x&&(x=!1,m={error:j,text:m})}}x?(o.next(new G({body:m,headers:u,status:h,statusText:R,url:_||void 0})),o.complete()):o.error(new M({error:m,headers:u,status:h,statusText:R,url:_||void 0}))},p=u=>{let{url:h}=l(),R=new M({error:u,status:i.status||0,statusText:i.statusText||"Unknown Error",url:h||void 0});o.error(R)},O=!1,y=u=>{O||(o.next(l()),O=!0);let h={type:D.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(h.total=u.total),e.responseType==="text"&&i.responseText&&(h.partialText=i.responseText),o.next(h)},k=u=>{let h={type:D.UploadProgress,loaded:u.loaded};u.lengthComputable&&(h.total=u.total),o.next(h)};return i.addEventListener("load",f),i.addEventListener("error",p),i.addEventListener("timeout",p),i.addEventListener("abort",p),e.reportProgress&&(i.addEventListener("progress",y),c!==null&&i.upload&&i.upload.addEventListener("progress",k)),i.send(c),o.next({type:D.Sent}),()=>{i.removeEventListener("error",p),i.removeEventListener("abort",p),i.removeEventListener("load",f),i.removeEventListener("timeout",p),e.reportProgress&&(i.removeEventListener("progress",y),c!==null&&i.upload&&i.upload.removeEventListener("progress",k)),i.readyState!==i.DONE&&i.abort()}})))}static{this.\u0275fac=function(n){return new(n||r)(d(q))}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac})}}return r})(),st=new E(""),Lt="XSRF-TOKEN",kt=new E("",{providedIn:"root",factory:()=>Lt}),xt="X-XSRF-TOKEN",jt=new E("",{providedIn:"root",factory:()=>xt}),te=class{},Ft=(()=>{class r{constructor(e,n,s){this.doc=e,this.platform=n,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=K(e,this.cookieName),this.lastCookieString=e),this.lastToken}static{this.\u0275fac=function(n){return new(n||r)(d(v),d(P),d(kt))}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac})}}return r})();function Ut(r,t){let e=r.url.toLowerCase();if(!T(st)||r.method==="GET"||r.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return t(r);let n=T(te).getToken(),s=T(jt);return n!=null&&!r.headers.has(s)&&(r=r.clone({headers:r.headers.set(s,n)})),t(r)}function Dn(...r){let t=[bt,tt,et,{provide:$,useExisting:et},{provide:H,useFactory:()=>T(Dt,{optional:!0})??T(tt)},{provide:rt,useValue:Ut,multi:!0},{provide:st,useValue:!0},{provide:te,useClass:Ft}];for(let e of r)t.push(...e.\u0275providers);return ae(t)}var Te=class extends We{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Ee=class r extends Te{static makeCurrent(){Je(new r)}onAndCancel(t,e,n){return t.addEventListener(e,n),()=>{t.removeEventListener(e,n)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=zt();return e==null?null:Vt(e)}resetBaseElement(){J=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return K(document.cookie,t)}},J=null;function zt(){return J=J||document.querySelector("base"),J?J.getAttribute("href"):null}function Vt(r){return new URL(r,document.baseURI).pathname}var $t=(()=>{class r{build(){return new XMLHttpRequest}static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac})}}return r})(),we=new E(""),ct=(()=>{class r{constructor(e,n){this._zone=n,this._eventNameToPlugin=new Map,e.forEach(s=>{s.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,s){return this._findPluginFor(n).addEventListener(e,n,s)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new b(5101,!1);return this._eventNameToPlugin.set(e,n),n}static{this.\u0275fac=function(n){return new(n||r)(d(we),d(N))}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac})}}return r})(),ne=class{constructor(t){this._doc=t}},ge="ng-app-id",lt=(()=>{class r{constructor(e,n,s,o={}){this.doc=e,this.appId=n,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Y(o),this.resetHostNodes()}addStyles(e){for(let n of e)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(e){for(let n of e)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let e=this.styleNodesInDOM;e&&(e.forEach(n=>n.remove()),e.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(let n of this.getAllStyles())this.addStyleToHost(e,n)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(let n of this.hostNodes)this.addStyleToHost(n,e)}onStyleRemoved(e){let n=this.styleRef;n.get(e)?.elements?.forEach(s=>s.remove()),n.delete(e)}collectServerRenderedStyles(){let e=this.doc.head?.querySelectorAll(`style[${ge}="${this.appId}"]`);if(e?.length){let n=new Map;return e.forEach(s=>{s.textContent!=null&&n.set(s.textContent,s)}),n}return null}changeUsageCount(e,n){let s=this.styleRef;if(s.has(e)){let o=s.get(e);return o.usage+=n,o.usage}return s.set(e,{usage:n,elements:[]}),n}getStyleElement(e,n){let s=this.styleNodesInDOM,o=s?.get(n);if(o?.parentNode===e)return s.delete(n),o.removeAttribute(ge),o;{let i=this.doc.createElement("style");return this.nonce&&i.setAttribute("nonce",this.nonce),i.textContent=n,this.platformIsServer&&i.setAttribute(ge,this.appId),e.appendChild(i),i}}addStyleToHost(e,n){let s=this.getStyleElement(e,n),o=this.styleRef,i=o.get(n)?.elements;i?i.push(s):o.set(n,{elements:[s],usage:1})}resetHostNodes(){let e=this.hostNodes;e.clear(),e.add(this.doc.head)}static{this.\u0275fac=function(n){return new(n||r)(d(v),d(le),d(de,8),d(P))}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac})}}return r})(),ve={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},be=/%COMP%/g,dt="%COMP%",Xt=`_nghost-${dt}`,Gt=`_ngcontent-${dt}`,Jt=!0,Wt=new E("",{providedIn:"root",factory:()=>Jt});function Zt(r){return Gt.replace(be,r)}function Kt(r){return Xt.replace(be,r)}function ut(r,t){return t.map(e=>e.replace(be,r))}var ot=(()=>{class r{constructor(e,n,s,o,i,c,a,l=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=i,this.platformId=c,this.ngZone=a,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=Y(c),this.defaultRenderer=new W(e,i,a,this.platformIsServer)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===B.ShadowDom&&(n=Ae(F({},n),{encapsulation:B.Emulated}));let s=this.getOrCreateRenderer(e,n);return s instanceof re?s.applyToHost(e):s instanceof Z&&s.applyStyles(),s}getOrCreateRenderer(e,n){let s=this.rendererByCompId,o=s.get(n.id);if(!o){let i=this.doc,c=this.ngZone,a=this.eventManager,l=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,p=this.platformIsServer;switch(n.encapsulation){case B.Emulated:o=new re(a,l,n,this.appId,f,i,c,p);break;case B.ShadowDom:return new Re(a,l,e,n,i,c,this.nonce,p);default:o=new Z(a,l,n,f,i,c,p);break}s.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(n){return new(n||r)(d(ct),d(lt),d(le),d(Wt),d(v),d(P),d(N),d(de))}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac})}}return r})(),W=class{constructor(t,e,n,s){this.eventManager=t,this.doc=e,this.ngZone=n,this.platformIsServer=s,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(t,e){return e?this.doc.createElementNS(ve[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(it(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(it(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new b(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,s){if(s){e=s+":"+e;let o=ve[s];o?t.setAttributeNS(o,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let s=ve[n];s?t.removeAttributeNS(s,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,s){s&(z.DashCase|z.Important)?t.style.setProperty(e,n,s&z.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&z.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n){if(typeof t=="string"&&(t=ue().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${e}`);return this.eventManager.addEventListener(t,e,this.decoratePreventDefault(n))}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(e)):t(e))===!1&&e.preventDefault()}}};function it(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var Re=class extends W{constructor(t,e,n,s,o,i,c,a){super(t,o,i,a),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=ut(s.id,s.styles);for(let f of l){let p=document.createElement("style");c&&p.setAttribute("nonce",c),p.textContent=f,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Z=class extends W{constructor(t,e,n,s,o,i,c,a){super(t,o,i,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=s,this.styles=a?ut(a,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},re=class extends Z{constructor(t,e,n,s,o,i,c,a){let l=s+"-"+n.id;super(t,e,n,o,i,c,a,l),this.contentAttr=Zt(l),this.hostAttr=Kt(l)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}},Yt=(()=>{class r extends ne{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,s){return e.addEventListener(n,s,!1),()=>this.removeEventListener(e,n,s)}removeEventListener(e,n,s){return e.removeEventListener(n,s)}static{this.\u0275fac=function(n){return new(n||r)(d(v))}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac})}}return r})(),at=["alt","control","meta","shift"],qt={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Qt={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},Ht=(()=>{class r extends ne{constructor(e){super(e)}supports(e){return r.parseEventName(e)!=null}addEventListener(e,n,s){let o=r.parseEventName(n),i=r.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ue().onAndCancel(e,o.domEventName,i))}static parseEventName(e){let n=e.toLowerCase().split("."),s=n.shift();if(n.length===0||!(s==="keydown"||s==="keyup"))return null;let o=r._normalizeKey(n.pop()),i="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),i="code."),at.forEach(l=>{let f=n.indexOf(l);f>-1&&(n.splice(f,1),i+=l+".")}),i+=o,n.length!=0||o.length===0)return null;let a={};return a.domEventName=s,a.fullKey=i,a}static matchEventFullKeyCode(e,n){let s=qt[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(s=e.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),at.forEach(i=>{if(i!==s){let c=Qt[i];c(e)&&(o+=i+".")}}),o+=s,o===n)}static eventCallback(e,n,s){return o=>{r.matchEventFullKeyCode(o,e)&&s.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static{this.\u0275fac=function(n){return new(n||r)(d(v))}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac})}}return r})();function Hn(r,t){return Ge(F({rootComponent:r},en(t)))}function en(r){return{appProviders:[...on,...r?.providers??[]],platformProviders:sn}}function tn(){Ee.makeCurrent()}function nn(){return new ce}function rn(){return ke(document),document}var sn=[{provide:P,useValue:Ze},{provide:xe,useValue:tn,multi:!0},{provide:v,useFactory:rn,deps:[]}];var on=[{provide:Se,useValue:"root"},{provide:ce,useFactory:nn,deps:[]},{provide:we,useClass:Yt,multi:!0,deps:[v,N,P]},{provide:we,useClass:Ht,multi:!0,deps:[v]},ot,lt,ct,{provide:Xe,useExisting:ot},{provide:q,useClass:$t,deps:[]},[]];var er=(()=>{class r{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static{this.\u0275fac=function(n){return new(n||r)(d(v))}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();var an=(()=>{class r{static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275prov=g({token:r,factory:function(n){let s=null;return n?s=new(n||r):s=d(cn),s},providedIn:"root"})}}return r})(),cn=(()=>{class r extends an{constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case S.NONE:return n;case S.HTML:return L(n,"HTML")?C(n):$e(this._doc,String(n)).toString();case S.STYLE:return L(n,"Style")?C(n):n;case S.SCRIPT:if(L(n,"Script"))return C(n);throw new b(5200,!1);case S.URL:return L(n,"URL")?C(n):Ve(String(n));case S.RESOURCE_URL:if(L(n,"ResourceURL"))return C(n);throw new b(5201,!1);default:throw new b(5202,!1)}}bypassSecurityTrustHtml(e){return je(e)}bypassSecurityTrustStyle(e){return Fe(e)}bypassSecurityTrustScript(e){return Ue(e)}bypassSecurityTrustUrl(e){return Be(e)}bypassSecurityTrustResourceUrl(e){return ze(e)}static{this.\u0275fac=function(n){return new(n||r)(d(v))}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{bt as a,Dn as b,ot as c,Hn as d,er as e,an as f};
