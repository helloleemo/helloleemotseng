import{a as T,b as O}from"./chunk-35VWPVDP.js";import"./chunk-GOV7BL6D.js";import{b as _}from"./chunk-NYMVWE3L.js";import{l as M,m as A}from"./chunk-52M63U3D.js";import{a as w,b as I,d as k,e as x,g as y}from"./chunk-3MIIRO2X.js";import"./chunk-YDL44UJC.js";import{k as b,l as h,s as C}from"./chunk-W7CAD7VL.js";import{A as c,Fb as r,Gb as p,Hb as g,Ob as s,Yb as v,Za as u,_b as R,cb as n,db as m,dc as S,ja as d,sb as l,wb as o,zb as f}from"./chunk-D2OXTAEC.js";function F(t,i){if(t&1&&(r(0,"a",3)(1,"div",4)(2,"h1",5),v(3),p(),r(4,"div",6),g(5,"img",7)(6,"div",8),p()()()),t&2){let e=i.$implicit,a=s(2);f(e.colSpan+e.rowSpan+" pressing-effect cursor-pointer rounded-sm relative overflow-hidden"),o("@itemAnimation",void 0)("matRippleColor",a.rippleColor)("matRippleRadius",a.radius)("routerLink",e.linkTo),n(3),R(" ",e.name," "),n(2),o("src",e.imgUrl,u)}}function D(t,i){if(t&1&&(r(0,"div")(1,"div",1),l(2,F,7,8,"a",2),p()()),t&2){let e=s();n(),o("@showUpAnimation",void 0),n(),o("ngForOf",e.spaceItems)}}var U=class t{constructor(i,e){this.router=i;this.route=e}dynamicTitle="Space";dynamicFooter="Back to Home";subIsHomeMenu=!1;rippleColor="rgba(255, 255, 255, 0.3)";radius=500;isChildRouteActive=!1;spaceItems=[{name:"Private Office",linkTo:"/template/monitor/private-office",imgUrl:"/monitor/space/Private-office-thumbnail.webp",colSpan:"",rowSpan:"row-span-2"},{name:"Hot Desk",linkTo:"/template/monitor/hot-desk",colSpan:"col-span-1",rowSpan:"",imgUrl:"/monitor/space/Hot-Desk-thunbnail.webp"},{name:"Open Area",linkTo:"/template/monitor/open-area",colSpan:"col-span-1",rowSpan:"",imgUrl:"/monitor/space/Open-Area-thumbnail.webp"},{name:"Meeting Room",linkTo:"/template/monitor/meeting-room",colSpan:"col-span-2",rowSpan:"",imgUrl:"/monitor/space/Meeting-Room-thumbnail.webp"}];isHovered=!1;ngOnInit(){this.router.events.pipe(c(i=>i instanceof w)).subscribe(()=>{this.isChildRouteActive=!!this.route.firstChild})}static \u0275fac=function(e){return new(e||t)(m(k),m(I))};static \u0275cmp=d({type:t,selectors:[["app-space"]],standalone:!0,features:[S],decls:1,vars:1,consts:[[4,"ngIf"],[1,"menu","fixed","overflow-hidden","grid","grid-cols-2","grid-rows-3","gap-1","h-[100vh]","w-full"],["matRipple","",3,"matRippleColor","matRippleRadius","routerLink","class",4,"ngFor","ngForOf"],["matRipple","",3,"matRippleColor","matRippleRadius","routerLink"],[1,"title"],[1,"text-white","opacity-90","absolute","p-10","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","z-20"],[1,"img","absolute","inset-0"],["alt","",1,"w-full","h-full","object-cover","transform","transition","active:scale-150",3,"src"],[1,"absolute","inset-0","bg-slate-950","bg-opacity-30","z-10"]],template:function(e,a){e&1&&l(0,D,3,2,"div",0),e&2&&o("ngIf",!a.isChildRouteActive)},dependencies:[C,b,h,y,x,A,M,_],encapsulation:2,data:{animation:[T,O]}})};export{U as SpaceComponent};
