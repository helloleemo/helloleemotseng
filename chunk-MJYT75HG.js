import{c as F,d,f as p,g as u,h as c}from"./chunk-GOV7BL6D.js";import{n as T,o as U}from"./chunk-OIQXJ37N.js";import{g as k,i as S}from"./chunk-ITA72LFZ.js";import"./chunk-MAIQNEM3.js";import{k as M,r as x,s as I}from"./chunk-BLKSSZDW.js";import{Cb as v,Ib as a,Jb as r,Kb as s,Rb as w,ab as l,ac as h,cc as b,fb as o,hc as C,jc as y,kc as R,la as g,vb as f,zb as i}from"./chunk-BNVGZSW7.js";function E(n,m){if(n&1&&(a(0,"a",7)(1,"div",8)(2,"h4",9),h(3),y(4,"uppercase"),r()()()),n&2){let e=m.$implicit,t=w();v(e.colSpan+" min-h-[100px] w-full sm:w-[400px] mx-auto border-2 border-white cursor-pointer rounded-sm overflow-hidden bg-white/30"),i("matRippleColor",t.rippleColor)("matRippleRadius",t.radius)("routerLink",e.linkTo),o(3),b(" ",R(4,6,e.name)," ")}}var z=class n{ngOnInit(){}dynamicTitle="Welcome to <br />Premiere New <br />Coworking Space.";rippleColor="rgba(255, 255, 255, 0.2)";radius=500;logImg="monitor/logo.png";videoImg="monitor/T3Co-For-Web-30sec-720p.mp4";isOpened=!1;showMenu(){this.isOpened=!0}menuItems=[{name:"space",imgUrl:"",linkTo:"/template/monitor/space",colSpan:"col-span-4"},{name:"plan",imgUrl:"",linkTo:"/template/monitor/plan",colSpan:"col-span-4"}];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-home-menu"]],standalone:!0,features:[C],decls:7,vars:4,consts:[[1,"absolute","bg-dark","w-[100vw]","h-[100vh]","-z-50"],["autoplay","","muted","","loop","",1,"absolute","blur-lg","top-0","left-0","w-full","h-[100vh]","object-cover","-z-10","overflow-hidden",3,"src"],[1,"relative","w-[100vw]","h-[100vh]"],[1,"menu","grid","grid-cols-4","gap-2","w-full","px-5","absolute","translate-x-1/2","bottom-20","z-10"],["matRipple","",3,"matRippleColor","matRippleRadius","routerLink","class",4,"ngFor","ngForOf"],[1,"logo","absolute","top-0","right-0","p-10"],["alt","",1,"sm:w-[150px]","w-[0px]",3,"src"],["matRipple","",3,"matRippleColor","matRippleRadius","routerLink"],[1,"title"],[1,"text-white","opacity-90","drop-shadow-md","absolute","p-10","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","z-20"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"video",1),a(2,"div",2)(3,"div",3),f(4,E,5,8,"a",4),r()(),a(5,"div",5),s(6,"img",6),r()),e&2&&(o(),i("src",t.videoImg,l),o(2),i("@showUpAnimation",void 0),o(),i("ngForOf",t.menuItems),o(2),i("src",t.logImg,l))},dependencies:[I,M,x,U,T,S,k],encapsulation:2,data:{animation:[F("showUpAnimation",[u("void",p({opacity:0,transform:"translateY(50px)"})),u("*",p({opacity:1,transform:"translateY(0)"})),c(":enter",[d("150ms ease-out")]),c(":leave",[d("150ms ease-in",p({opacity:0}))])])]}})};export{z as HomeMenuComponent};