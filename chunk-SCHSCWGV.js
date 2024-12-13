import{a as C,g as x,j as R}from"./chunk-52M63U3D.js";import{d as S}from"./chunk-W7CAD7VL.js";import{$ as p,A as k,B as g,Da as w,aa as m,ca as D,ea as s,g as E,i as y,j as h,ka as v,n as _,y as b}from"./chunk-D2OXTAEC.js";var F={production:!1,weatherApiKey:"CWA-393DA01B-411F-4A80-AB59-6874C13A043B",weatherApiUrl:"https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=",milestoneApiUrl:"tracking-system/json/milestones.json",flightApiUrl:"tracking-system/json/flights.json",fileApiUrl:"tracking-system/json/files.json"};function P(t){return t&&typeof t.connect=="function"&&!(t instanceof y)}var d=function(t){return t[t.REPLACED=0]="REPLACED",t[t.INSERTED=1]="INSERTED",t[t.MOVED=2]="MOVED",t[t.REMOVED=3]="REMOVED",t}(d||{}),N=new D("_ViewRepeater"),V=class{applyChanges(O,e,i,n,r){O.forEachOperation((o,l,u)=>{let a,c;if(o.previousIndex==null){let f=i(o,l,u);a=e.createEmbeddedView(f.templateRef,f.context,f.index),c=d.INSERTED}else u==null?(e.remove(l),c=d.REMOVED):(a=e.get(l),e.move(a,u),c=d.MOVED);r&&r({context:a?.context,operation:c,record:o})})}detach(){}};var I=20,ze=(()=>{class t{constructor(e,i,n){this._ngZone=e,this._platform=i,this._scrolled=new h,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=n}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=I){return this._platform.isBrowser?new E(i=>{this._globalSubscription||this._addGlobalListener();let n=e>0?this._scrolled.pipe(g(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):_()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let n=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(k(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((n,r)=>{this._scrollableContainsElement(r,e)&&i.push(r)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let n=x(i),r=e.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return b(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static{this.\u0275fac=function(i){return new(i||t)(s(w),s(C),s(S,8))}}static{this.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var M=20,Oe=(()=>{class t{constructor(e,i,n){this._platform=e,this._change=new h,this._changeListener=r=>{this._change.next(r)},this._document=n,i.runOutsideAngular(()=>{if(e.isBrowser){let r=this._getWindow();r.addEventListener("resize",this._changeListener),r.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+i,height:n,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),n=e.documentElement,r=n.getBoundingClientRect(),o=-r.top||e.body.scrollTop||i.scrollY||n.scrollTop||0,l=-r.left||e.body.scrollLeft||i.scrollX||n.scrollLeft||0;return{top:o,left:l}}change(e=M){return e>0?this._change.pipe(g(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static{this.\u0275fac=function(i){return new(i||t)(s(C),s(w),s(S,8))}}static{this.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var z=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=v({type:t})}static{this.\u0275inj=m({})}}return t})(),Te=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=v({type:t})}static{this.\u0275inj=m({imports:[R,z,R,z]})}}return t})();export{F as a,P as b,d as c,N as d,V as e,ze as f,Oe as g,z as h,Te as i};