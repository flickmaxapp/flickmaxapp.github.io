"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[2399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Export",sidebar_position:3,slug:"/export"},l=void 0,i={unversionedId:"Build/export",id:"Build/export",title:"Export",description:"After designing your app, sometimes you would like to export the change to save on your local. To do that, you can use the Export feature.",source:"@site/docs/Build/export.md",sourceDirName:"Build",slug:"/export",permalink:"/fr/export",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Export",sidebar_position:3,slug:"/export"},sidebar:"tutorialSidebar",previous:{title:"Build Your App",permalink:"/fr/build-your-app"},next:{title:"Import",permalink:"/fr/import"}},p={},s=[{value:"1. View the app in your language",id:"1b5fa6f4242544eb8270bfdd43254e80",level:2},{value:"2. Export config json files",id:"ee478a59644c4a9b87c71571a6ac6b4c",level:2},{value:"3. Export env.dart file",id:"12bf837936f04fcd86458b0eeca52781",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After designing your app, sometimes you would like to export the change to save on your local. To do that, you can use the ",(0,r.kt)("strong",{parentName:"p"},"Export")," feature. "),(0,r.kt)("p",null,"It is also useful for ",(0,r.kt)("strong",{parentName:"p"},"[Problem Internal Link]")," to App Stores."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To save the Design to your local, let\u2019s export the ",(0,r.kt)("inlineCode",{parentName:"li"},".json")," files:")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1742).Z,width:"1180",height:"481"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To save the Features Configuration to your local, export the env.dart file:")),(0,r.kt)("h2",{id:"1b5fa6f4242544eb8270bfdd43254e80"},"1. View the app in your language"),(0,r.kt)("p",null,"If you want to view the design in Arabic (or other languages), please go to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Features"),"\xa0",">","\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Languages"),"\xa0(in General) ",">"," set the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Default Language"),"\xa0",">","\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),"\xa0",">"," back to the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Design"),"\xa0to see the result."),(0,r.kt)("h2",{id:"ee478a59644c4a9b87c71571a6ac6b4c"},"2. Export config json files"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Config json files")," are the Design/UI of your App (",(0,r.kt)("em",{parentName:"p"},"e.g."),"\xa0",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"config_en.json")),"\xa0",(0,r.kt)("em",{parentName:"p"},"is App Design in English"),"), that you configured on the Design tab below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\u0110\u1ed4I IMAGE SAU\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5286).Z,width:"2092",height:"1282"})),(0,r.kt)("p",null,"To export config json files, follow these steps:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1"),": Select\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Features"),"\xa0",">","\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Export Data"),"\xa0",">"," input name to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Config DESIGN"),"\xa0textbox as below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Config DESIGN textbox"),(0,r.kt)("th",{parentName:"tr",align:null},"Language"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"config_"),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"en")),(0,r.kt)("inlineCode",{parentName:"td"},".json"),"\xa0string"),(0,r.kt)("td",{parentName:"tr",align:null},"to export English design")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"config_"),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"ar")),(0,r.kt)("inlineCode",{parentName:"td"},".json"),"\xa0string"),(0,r.kt)("td",{parentName:"tr",align:null},"to export Arabic design")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Follow\xa0",(0,r.kt)("a",{parentName:"td",href:"https://api.flutter.dev/flutter/flutter_localizations/GlobalMaterialLocalizations-class.html"},"this guide")),(0,r.kt)("td",{parentName:"tr",align:null},"to export other languages")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),": Click\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"EXPORT"),"\xa0to save the config json file on your local. That's all!"),(0,r.kt)("p",null,":::\ud83d\udccc"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Make sure you also:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to update the App Design without re-publishing App Stores, make sure to configure following\xa0",(0,r.kt)("a",{parentName:"p",href:"https://support.inspireui.com/help-center/articles/15/79/95/update-design-without-re-publishing"},"this guide"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In case your app is multi-languages, please export ",(0,r.kt)("inlineCode",{parentName:"p"},"config_xx.json")," for each corresponding language available on your app.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remember to export the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"env.dart"),"\xa0file as below part."))),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"12bf837936f04fcd86458b0eeca52781"},"3. Export env.dart file"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"env.dart")," file is the App Features, that you configured on the Features tab below:"),(0,r.kt)("p",null,"To export the configured App Features, click ",(0,r.kt)("strong",{parentName:"p"},"Features")," ",">"," Tools ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Export Data")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"EXPORT")," in ",(0,r.kt)("strong",{parentName:"p"},"Config ENV")," part and save it on your local."))}c.isMDXComponent=!0},5286:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1387946701-4d7960d983655d0d38b78796089f13d4.png"},1742:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2136036018-77aaaffab38db7d9503b5b7a6847f703.png"}}]);