import{a as B,b as V,c as T,d as j}from"./chunk-QWWMGEXL.js";import{a as b,b as M}from"./chunk-VH5263UI.js";import{$a as o,Ab as r,Bb as i,Dc as S,Gb as E,Hc as I,Ib as y,Jb as A,Sb as F,Tb as n,Vb as p,Wb as W,Xb as _,Yb as x,Z as d,_b as D,ab as C,ca as f,cc as N,ha as g,ob as v,qa as u,ra as h,rb as w}from"./chunk-OD3KXKIL.js";var c=class a{constructor(t){this.http=t}apiUrl="environment.apiUrl";apiKey="environment.apiKey";getWeatherForecast(t){let e=new b().set("Authorization",this.apiKey).set("locationName",t);return this.http.get(`${this.apiUrl}/F-C0032-001`,{params:e})}static \u0275fac=function(e){return new(e||a)(f(M))};static \u0275prov=d({token:a,factory:a.\u0275fac,providedIn:"root"})};function O(a,t){if(a&1&&(r(0,"div")(1,"p"),n(2),i(),r(3,"p"),n(4),i(),r(5,"p"),n(6),i(),r(7,"p"),n(8),i()()),a&2){let e=A();o(2),p(" \u5929\u6C23\u73FE\u8C61\uFF1A ",e.weatherData.weatherElement[0].time[0].parameter.parameterName," "),o(2),p(" \u6700\u9AD8\u6EAB\u5EA6\uFF1A ",e.weatherData.weatherElement[4].time[0].parameter.parameterName,"\xB0C "),o(2),p(" \u6700\u4F4E\u6EAB\u5EA6\uFF1A ",e.weatherData.weatherElement[2].time[0].parameter.parameterName,"\xB0C "),o(2),p(" \u964D\u96E8\u6A5F\u7387\uFF1A ",e.weatherData.weatherElement[1].time[0].parameter.parameterName,"% ")}}function P(a,t){a&1&&(r(0,"p"),n(1,"\u8F09\u5165\u4E2D..."),i())}var k=class a{constructor(t){this.weatherService=t}cityName="";weatherData;getWeather(){this.cityName.trim()?this.weatherService.getWeatherForecast(this.cityName.trim()).subscribe({next:t=>{this.weatherData=t.records.location[0],console.log("Weather Data:",this.weatherData)},error:t=>{console.error("Error fetching weather data:",t)}}):alert("\u8ACB\u8F38\u5165\u6709\u6548\u7684\u57CE\u5E02\u540D\u7A31")}static \u0275fac=function(e){return new(e||a)(C(c))};static \u0275cmp=g({type:a,selectors:[["app-weather-api"]],standalone:!0,features:[D],decls:9,vars:4,consts:[["loading",""],["type","text","placeholder","\u8ACB\u8F38\u5165\u57CE\u5E02\u540D\u7A31",3,"ngModelChange","ngModel"],[3,"click"],[1,"weather-container"],[4,"ngIf","ngIfElse"]],template:function(e,m){if(e&1){let l=E();r(0,"input",1),x("ngModelChange",function(s){return u(l),_(m.cityName,s)||(m.cityName=s),h(s)}),i(),r(1,"button",2),y("click",function(){return u(l),h(m.getWeather())}),n(2,"\u67E5\u8A62\u5929\u6C23"),i(),r(3,"div",3)(4,"h1"),n(5),i(),v(6,O,9,4,"div",4)(7,P,2,0,"ng-template",null,0,N),i()}if(e&2){let l=F(8);W("ngModel",m.cityName),o(5),p("",m.cityName," \u5929\u6C23\u9810\u5831"),o(),w("ngIf",m.weatherData)("ngIfElse",l)}},dependencies:[I,S,j,B,V,T],encapsulation:2})};export{k as WeatherApiComponent};
