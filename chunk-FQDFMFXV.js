import{c as F,d,f as p,g as c,h as u}from"./chunk-GOV7BL6D.js";import{l as T,m as U}from"./chunk-A4V3NTII.js";import{e as k,g as S}from"./chunk-4TUOEWIE.js";import"./chunk-CAEIOJMX.js";import{Db as a,Eb as r,Fb as s,Fc as R,Jc as x,Kc as I,Mb as h,Wb as w,Xa as l,Yb as C,ab as n,bc as b,dc as y,ec as M,ia as g,qb as f,ub as o,xb as v}from"./chunk-42NXFOHY.js";function O(i,m){if(i&1&&(a(0,"a",6)(1,"div",7)(2,"h4",8),w(3),y(4,"uppercase"),r()()()),i&2){let e=m.$implicit,t=h();v(e.colSpan+" min-h-[100px] border-2 border-white cursor-pointer rounded-sm overflow-hidden bg-white/30"),o("matRippleColor",t.rippleColor)("matRippleRadius",t.radius)("routerLink",e.linkTo),n(3),C(" ",M(4,6,e.name)," ")}}var z=class i{dynamicTitle="Welcome to <br />Premiere New <br />Coworking Space.";rippleColor="rgba(255, 255, 255, 0.2)";radius=500;logImg="/monitor/logo.png";videoImg="/monitor/T3Co-For-Web-30sec-720p.mp4";isOpened=!1;showMenu(){this.isOpened=!0}menuItems=[{name:"space",imgUrl:"",linkTo:"/template/monitor/space",colSpan:"col-span-4"},{name:"plan",imgUrl:"",linkTo:"/template/monitor/plan",colSpan:"col-span-4"}];static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["app-home-menu"]],standalone:!0,features:[b],decls:6,vars:4,consts:[["autoplay","","muted","","loop","",1,"absolute","top-0","left-0","w-full","h-[100vh]","object-cover","-z-10","overflow-hidden",3,"src"],[1,"relative","w-[100vw]","h-[100vh]"],[1,"menu","grid","grid-cols-4","gap-2","w-full","px-5","absolute","translate-x-1/2","bottom-20","z-10"],["matRipple","",3,"matRippleColor","matRippleRadius","routerLink","class",4,"ngFor","ngForOf"],[1,"logo","absolute","top-0","right-0","p-10"],["alt","",1,"sm:w-[150px]","w-[0px]",3,"src"],["matRipple","",3,"matRippleColor","matRippleRadius","routerLink"],[1,"title"],[1,"text-white","opacity-90","drop-shadow-md","absolute","p-10","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","z-20"]],template:function(e,t){e&1&&(s(0,"video",0),a(1,"div",1)(2,"div",2),f(3,O,5,8,"a",3),r()(),a(4,"div",4),s(5,"img",5),r()),e&2&&(o("src",t.videoImg,l),n(2),o("@showUpAnimation",void 0),n(),o("ngForOf",t.menuItems),n(2),o("src",t.logImg,l))},dependencies:[I,R,x,U,T,S,k],encapsulation:2,data:{animation:[F("showUpAnimation",[c("void",p({opacity:0,transform:"translateY(50px)"})),c("*",p({opacity:1,transform:"translateY(0)"})),u(":enter",[d("150ms ease-out")]),u(":leave",[d("150ms ease-in",p({opacity:0}))])])]}})};export{z as HomeMenuComponent};