import{a as j,b as z}from"./chunk-35VWPVDP.js";import{c as $,d as I,f as y,g as P,h}from"./chunk-GOV7BL6D.js";import{a as V,b as A}from"./chunk-C4HV7MPV.js";import{l as M,m as U}from"./chunk-A4V3NTII.js";import{a as k}from"./chunk-CAEIOJMX.js";import{Db as i,Eb as l,Fb as d,Fc as F,Gc as R,Jb as _,Kc as T,Lb as g,Mb as m,Wb as o,Xa as E,Xb as x,Yb as c,a as C,ab as n,b,bc as O,ea as w,ia as S,qb as s,ra as u,sa as v,ub as r}from"./chunk-42NXFOHY.js";function B(t,a){if(t&1){let e=_();i(0,"div",3)(1,"div",4),g("click",function(){let f=u(e).$implicit,N=m();return v(N.openPlanItem(f))}),i(2,"div",5)(3,"p",6),o(4),l(),i(5,"p",7),o(6),l()(),d(7,"div",8),i(8,"div",9),d(9,"img",10),l()()()}if(t&2){let e=a.$implicit,p=m();n(),r("@itemAnimation",void 0)("matRippleColor",p.rippleColor)("matRippleCentered",p.centered)("matRippleRadius",p.radius),n(3),x(e.name),n(2),c(" ",e.description," "),n(3),r("src",e.imgUrl,E)}}function H(t,a){if(t&1&&(i(0,"div",23)(1,"mat-icon",24),o(2),l(),i(3,"p",25),o(4),l()()),t&2){let e=a.$implicit;n(2),x(e.name),n(2),c(" ",e.description," ")}}function q(t,a){if(t&1&&(i(0,"div",21),s(1,H,5,2,"div",22),l()),t&2){let e=m(2);n(),r("ngForOf",e.selectedPlanItem.icons)}}function G(t,a){if(t&1&&(i(0,"li",28)(1,"mat-icon",29),o(2,"task_alt"),l(),i(3,"p",30),o(4),l()()),t&2){let e=a.$implicit;n(4),x(e)}}function J(t,a){if(t&1&&(i(0,"ul",26),s(1,G,5,1,"li",27),l()),t&2){let e=m(2);n(),r("ngForOf",e.selectedPlanItem.features)}}function K(t,a){if(t&1){let e=_();i(0,"div"),d(1,"div",11),i(2,"div",12)(3,"mat-icon",13),g("click",function(){u(e);let f=m();return v(f.closePlanItem())}),o(4,"close"),l(),i(5,"div",14)(6,"div",15)(7,"h2",16),o(8),l(),i(9,"p",17),o(10),l()(),i(11,"p",18),o(12),l(),s(13,q,2,1,"div",19)(14,J,2,1,"ul",20),l()()()}if(t&2){let e=m();r("@viewPlanItemAnimation",void 0),n(8),c(" ",e.selectedPlanItem==null?null:e.selectedPlanItem.name," "),n(2),c(" ",e.selectedPlanItem==null?null:e.selectedPlanItem.price," "),n(2),c(" ",e.selectedPlanItem==null?null:e.selectedPlanItem.description," "),n(),r("ngIf",e.selectedPlanItem),n(),r("ngIf",e.selectedPlanItem)}}var D=class t{httpClient=w(k);plans=[];ngOnInit(){this.httpClient.get("monitor/json/plans.json").subscribe(a=>{this.plans=a.PlanItems.map(e=>b(C({},e),{imgUrl:`monitor/${e.imgUrl}`})),console.log(this.plans)})}dynamicTitle="Plan";rippleColor="rgba(255, 255, 255, 0.3)";centered=!0;radius=600;isOpen=!1;selectedPlanItem=null;openPlanItem(a){this.isOpen=!0,this.selectedPlanItem=a}closePlanItem(){this.isOpen=!1}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-plan"]],standalone:!0,features:[O],decls:3,vars:2,consts:[[1,"flex","flex-col","sm:flex-row","gap-1"],["class","plans",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"plans"],["matRipple","",1,"plan","w-fit","relative","rounded-sm","overflow-hidden","cursor-pointer",3,"click","matRippleColor","matRippleCentered","matRippleRadius"],[1,"text","text-center","drop-shadow-xl","absolute","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","z-20"],[1,"text-3xl","text-white","font-bold","w-full"],[1,"text-white","mx-auto","text-lg","pt-5","w-full"],[1,"absolute","inset-0","bg-slate-950","bg-opacity-30","z-10"],[1,"imgbox","rounded-sm"],["alt","",1,"w-[100vw]","sm:h-[100vh]","h-[33.33333333333333vh]","object-cover",3,"src"],[1,"absolute","top-0","left-0","bg-alpha","bg-black/50","h-[100vh]","w-[100vw]"],[1,"absolute","py-10","rounded-xl","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","p-10","bg-white","z-20"],[1,"closeBtn","text-[20px]","text-secondary/30","absolute","top-[20px]","right-[20px]","cursor-pointer",2,"width","20px","height","20px",3,"click"],[1,"planContent","flex","flex-col","space-y-5","w-fit"],[1,"title","flex","items-end","space-x-5"],[1,"border-b-[5px]","pb-2","border-primary"],[1,"text-base","sm:text-xl","text-secondary/50","pb-[13px]","sm:block","hidden"],[1,"text-base","sm:text-xl","text-secondary/80"],["class","icons flex space-x-1 px-2 py-5",4,"ngIf"],["class","space-y-1",4,"ngIf"],[1,"icons","flex","space-x-1","px-2","py-5"],["class","frame flex flex-col flex-1 space-y-1 items-center border border-primary p-5 rounded-xl",4,"ngFor","ngForOf"],[1,"frame","flex","flex-col","flex-1","space-y-1","items-center","border","border-primary","p-5","rounded-xl"],[1,"text-primary","text-[50px]",2,"width","50px","height","50px"],[1,"text-secondary/50","text-[16px]","text-center"],[1,"space-y-1"],["class","flex space-x-1 items-center",4,"ngFor","ngForOf"],[1,"flex","space-x-1","items-center"],[1,"text-primary","text-[14px]","min-w-[14px]",2,"width","14px","height","14px"],[1,"text-base","text-secondary/70"]],template:function(e,p){e&1&&(i(0,"div",0),s(1,B,10,7,"div",1),l(),s(2,K,15,6,"div",2)),e&2&&(n(),r("ngForOf",p.plans),n(),r("ngIf",p.isOpen))},dependencies:[U,M,T,F,R,A,V],encapsulation:2,data:{animation:[$("viewPlanItemAnimation",[P("void",y({opacity:0})),P("*",y({opacity:1})),h(":enter",[I("300ms ease-in")]),h(":leave",[I("300ms ease-in")])]),j,z]}})};export{D as PlanComponent};