import{a as v}from"./chunk-MNSI57QS.js";import{a as w,b as S}from"./chunk-NYMVWE3L.js";import"./chunk-52M63U3D.js";import{a as h,d as g,e as C}from"./chunk-3MIIRO2X.js";import"./chunk-YDL44UJC.js";import{l as x,s as b}from"./chunk-W7CAD7VL.js";import{Fb as o,Gb as n,Hb as d,Yb as i,cb as u,db as f,dc as a,ja as m,sb as c,wb as l}from"./chunk-D2OXTAEC.js";var p=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-submenu"]],standalone:!0,features:[a],decls:5,vars:0,consts:[[1,"fixed","bottom-0","sm:top-0","sm:right-10","flex","flex-col","sm:flex-row","justify-center","gap-2","w-full","sm:w-[300px]","h-fit","p-10"],["routerLink","/template/monitor/space",1,"bg-white/90","text-center","hover:bg-white/80","transition-all","duration-300","text-dark","font-semibold","text-lg","px-10","py-2","rounded-full","w-full"],["routerLink","/template/monitor/plan",1,"bg-white/90","text-center","hover:bg-white/80","transition-all","duration-300","text-dark","font-semibold","text-lg","px-10","py-2","rounded-full","w-full"]],template:function(e,s){e&1&&(o(0,"div",0)(1,"p",1),i(2," SPACE "),n(),o(3,"p",2),i(4," PLAN "),n()())},dependencies:[C],encapsulation:2})};function I(t,r){t&1&&d(0,"app-submenu")}var y=class t{constructor(r){this.router=r;this.router.events.subscribe(e=>{e instanceof h&&this.checkUrl()})}showSubmenu=!1;checkUrl(){this.showSubmenu=!this.router.url.includes("/home-menu")}static \u0275fac=function(e){return new(e||t)(f(g))};static \u0275cmp=m({type:t,selectors:[["app-monitor"]],standalone:!0,features:[a],decls:6,vars:2,consts:[[3,"templateStyle"],[1,"text-2xl"],[1,"text-2xl","pl-2","font-medium"],[4,"ngIf"]],template:function(e,s){e&1&&(o(0,"app-template",0)(1,"mat-icon",1),i(2,"arrow_back"),n(),o(3,"p",2),i(4,"Back to platform"),n()(),c(5,I,1,0,"app-submenu",3)),e&2&&(l("templateStyle","text-white"),u(5),l("ngIf",s.showSubmenu))},dependencies:[v,S,w,p,b,x],encapsulation:2})};export{y as MonitorComponent};