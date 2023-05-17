"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[8540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(n),k=r,d=c["".concat(l,".").concat(k)]||c[k]||u[k]||o;return n?a.createElement(d,p(p({ref:t},s),{},{components:n})):a.createElement(d,p({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<o;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={title:"Cloud Config",sidebar_position:8,slug:"/feature-cloud-config"},p=void 0,i={unversionedId:"Features/feature-cloud-config",id:"Features/feature-cloud-config",title:"Cloud Config",description:"If you would like to change the Design**_ _of your app without re-publishing to_ Apple Store _and_ _**Google Play, follow this guide:",source:"@site/docs/Features/feature-cloud-config.md",sourceDirName:"Features",slug:"/feature-cloud-config",permalink:"/fr/feature-cloud-config",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Cloud Config",sidebar_position:8,slug:"/feature-cloud-config"},sidebar:"tutorialSidebar",previous:{title:"Smart Chat (ChatGPT)",permalink:"/fr/feature-smart-chat"},next:{title:"Sign In & Sign Up",permalink:"/fr/feature-sign-in"}},l={},m=[],s={toc:m};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you would like to ",(0,r.kt)("em",{parentName:"p"},"change the")," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Design"))," ",(0,r.kt)("em",{parentName:"p"},"of your app without re-publishing to")," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Apple Store"))," ",(0,r.kt)("em",{parentName:"p"},"and")," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Google Play")),", follow this guide:"),(0,r.kt)("p",null,"\u26a1\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Before publishing your Apps")," to App Stores, use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Cloud Config")," feature with the\xa0",(0,r.kt)("strong",{parentName:"p"},"steps")," below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Upload ",(0,r.kt)("inlineCode",{parentName:"li"},".json"),"\xa0files to any ",(0,r.kt)("strong",{parentName:"li"},"Cloud Server")," ",(0,r.kt)("em",{parentName:"li"},"(refer to the")," ",(0,r.kt)("strong",{parentName:"li"},"[Problem Internal Link]")," ",(0,r.kt)("em",{parentName:"li"},"guide)")),(0,r.kt)("li",{parentName:"ol"},"Then copy the link that you have uploaded\xa0(",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"the link must end with a .json file")),", ",(0,r.kt)("em",{parentName:"li"},"e.g.")," ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"https://example.com/config_en.json"))," ",(0,r.kt)("em",{parentName:"li"},").")),(0,r.kt)("li",{parentName:"ol"},"Paste that link to\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"App Config URL"),"\xa0textbox in the image below."),(0,r.kt)("li",{parentName:"ol"},"Turn on ",(0,r.kt)("inlineCode",{parentName:"li"},"Config on Cloud"),". Click ",(0,r.kt)("inlineCode",{parentName:"li"},"UPDATE"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9262).Z,width:"1036",height:"563"})),(0,r.kt)("p",null,"\u26a1\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"After publishing your apps")," to ",(0,r.kt)("strong",{parentName:"p"},"App Stores"),", if you need to update the design of apps, do the similar steps to upgrade your App\u2019s Design."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": ",(0,r.kt)("em",{parentName:"p"},"your app has 3 languages: English, Arabic, and Japanese. You will follow steps below:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Y",(0,r.kt)("em",{parentName:"p"},"ou")," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"need to upload 3 .json files"),"__:")," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"config_en.json"),"__,")," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"config_ar.json"),"__, and")," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"config_ja.json"))," ",(0,r.kt)("em",{parentName:"p"},"to any cloud server."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Copy the link that you have uploaded (",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("strong",{parentName:"strong"},"the link must end with a .json file")),", e.g")," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"https://example.com/config_en.json"),"__). Paste that link to"),"\xa0",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"App Config URL")),"\xa0",(0,r.kt)("em",{parentName:"p"},"textbox")," ",(0,r.kt)("a",{parentName:"p",href:"https://tppr.me/o4QfY"},"https://tppr.me/o4QfY"),(0,r.kt)("em",{parentName:"p"},".")," Turn on ",(0,r.kt)("inlineCode",{parentName:"p"},"Config on Cloud"),". ",(0,r.kt)("em",{parentName:"p"},"Click")," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"UPDATE"))," ",(0,r.kt)("em",{parentName:"p"},".")),(0,r.kt)("p",{parentName:"li"},"Done! You have updated the Design and multiple languages successfully."))),(0,r.kt)("p",null,"\u2705\xa0There are some free services (servers) recommended from us:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Github Page:\xa0",(0,r.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"https://pages.github.com")),(0,r.kt)("li",{parentName:"ul"},"Vercel:\xa0",(0,r.kt)("a",{parentName:"li",href:"https://vercel.com/"},"https://vercel.com")),(0,r.kt)("li",{parentName:"ul"},"Surge:\xa0",(0,r.kt)("a",{parentName:"li",href:"https://surge.sh/"},"https://surge.sh")),(0,r.kt)("li",{parentName:"ul"},"FireStore:\xa0",(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/"},"https://firebase.google.com"))),(0,r.kt)("p",null,"\u2705\xa0To update the Design with vercel.com, follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new Free account on\xa0",(0,r.kt)("a",{parentName:"p",href:"https://now.sh/"},"https://now.sh"),", and go to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," ",">"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Tokens")," ",">"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Create Token")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(5521).Z,width:"1099",height:"609"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the created token and paste it to ",(0,r.kt)("inlineCode",{parentName:"p"},"Token Key")," on the builder as image below.\nThen click ",(0,r.kt)("inlineCode",{parentName:"p"},"UPLOAD")," , copy the displayed link and paste to ",(0,r.kt)("inlineCode",{parentName:"p"},"App Config URL")," textbox , and click ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"![](/notion_imgs/121874742.png)\n")))))}u.isMDXComponent=!0},9262:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1734945782-47577ca3836a524cdc4f4ab8198b45bd.png"},5521:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/960948620-849a29af3d6998f03877d2cd4d8be677.png"}}]);