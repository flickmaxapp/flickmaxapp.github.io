"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,k=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Firebase Push Notifications (FCM)",sidebar_position:1,slug:"/feature-firebase"},s=void 0,o={unversionedId:"Features/feature-firebase",id:"Features/feature-firebase",title:"Firebase Push Notifications (FCM)",description:"Push Notifications is a useful Flutter plugin. With this plugin, your Flutter app can receive and process push notifications on Android and iOS.",source:"@site/docs/Features/feature-firebase.md",sourceDirName:"Features",slug:"/feature-firebase",permalink:"/fr/feature-firebase",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Firebase Push Notifications (FCM)",sidebar_position:1,slug:"/feature-firebase"},sidebar:"tutorialSidebar",previous:{title:"Firebase Settings",permalink:"/fr/feature-firebase-setting"},next:{title:"Dynamic Link (Deep Link)",permalink:"/fr/feature-dynamic-link"}},l={},p=[{value:"1. Push Notifications in iOSundefined",id:"7926eae7dc854610b082aa3993adf251",level:2},{value:"2. Push Notifications on Androidundefined",id:"23437a0774d34da0a730a2fbf8ea4d30",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Push Notifications is a useful Flutter plugin. With this plugin, your Flutter app can receive and process push notifications on Android and iOS."),(0,i.kt)("p",null,"This guide shows you the way to setup Firebase Cloud Messaging(FCM) to push notifications."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Remember to\xa0disable ",(0,i.kt)("a",{parentName:"p",href:"/feature-onesignal"},"OneSignal Push Notifications"),"\xa0if you push notifications using Firebase, by: ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- open the app on AppBuilder\n- go to **Features** > **General** > **OneSignal** >\n- turn of **Enable OneSignal** and click **Update**.\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To ask for ",(0,i.kt)("strong",{parentName:"p"},"User")," ",(0,i.kt)("strong",{parentName:"p"},"Notification Permission")," at the first time opening:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. Open your app on AppBuilder \u2192 **Features** \u2192 **General** \u2192 **Miscellaneous**\n2. Enable **Request Notification Permission** \u2192 **Apply** and **Save**\n")),(0,i.kt)("h2",{id:"7926eae7dc854610b082aa3993adf251"},"1. Push Notifications in iOS",(0,i.kt)("a",{parentName:"h2",href:"https://docs.shopbuilder.app/Features/firebase-push-notification/#1-push-notifications-in-ios"},"undefined")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Precondition:")," Follow\xa0",(0,i.kt)("a",{parentName:"p",href:"/feature-firebase-setting"},"Firebase Settings"),"\xa0to create an IOS application on Firebase."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1"),": Install ",(0,i.kt)("strong",{parentName:"p"},"Cloud Messaging")," to enable push notifications on iOS. Click ",(0,i.kt)("strong",{parentName:"p"},"Cloud Messaging")," as shown:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6497).Z,width:"3072",height:"1762"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Installing ",(0,i.kt)("strong",{parentName:"li"},"Cloud Messaging")," requires you to upload the ",(0,i.kt)("strong",{parentName:"li"},"auth key APNs")," here")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(672).Z,width:"3030",height:"914"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To get this key, you must have an apple developer account. Visit page\xa0",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/"},"https://developer.apple.com"),"\xa0select\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Account")),"\xa0as shown:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9524).Z,width:"3042",height:"1762"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in section",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Certificates, identifiers & Profiles"))),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Keys")," on the left menu, then click the ",(0,i.kt)("strong",{parentName:"li"},"plus icon")," to add a new key:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9014).Z,width:"3042",height:"1762"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: 1 developer apple account can only create 2 keys, please consider before creating. But you can still delete them if needed.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8150).Z,width:"3042",height:"1762"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter the ",(0,i.kt)("strong",{parentName:"li"},"Key Name")," and select ",(0,i.kt)("strong",{parentName:"li"},"Apple Push Notification service (APNs)")," then click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"continue")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5567).Z,width:"3042",height:"1762"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Register")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6621).Z,width:"3042",height:"1762"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Download")),"\xa0to download the ",(0,i.kt)("strong",{parentName:"li"},"APNs key file"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5689).Z,width:"3042",height:"1762"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Return to the ",(0,i.kt)("strong",{parentName:"li"},"firebase console")," to update the ",(0,i.kt)("strong",{parentName:"li"},"APNs auth key"),". Click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Upload")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4898).Z,width:"3072",height:"1648"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Browse")," button then select the downloaded key:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7448).Z,width:"3072",height:"1648"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7553).Z,width:"1444",height:"668"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7317).Z,width:"1846",height:"1016"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"key ID")," is the back part of the downloaded key file name:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6667).Z,width:"3062",height:"1406"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter ",(0,i.kt)("strong",{parentName:"li"},"Team I"),"D, if you do not know where Team ID is coming from, please click on the question mark as shown in the picture, then click on the\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"membership tab")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5503).Z,width:"3072",height:"1920"})),(0,i.kt)("p",null,"This is ",(0,i.kt)("strong",{parentName:"p"},"Team ID"),", copy it and enter the form in firebase:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6366).Z,width:"2302",height:"954"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Upload")),":")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3911).Z,width:"3072",height:"1648"})),(0,i.kt)("p",null,"In some cases, this error will be displayed (in some cases it will not be). If this is the case, please click\xa0",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Upload")),"\xa0again:"),(0,i.kt)("p",null,"If the following screen appears, congratulations, you have successfully configured:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6564).Z,width:"3072",height:"1648"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2"),": Get Server Key"),(0,i.kt)("p",null,"Go to the following path\xa0",(0,i.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/project/_/settings/cloudmessaging"},(0,i.kt)("inlineCode",{parentName:"a"},"Cloud Messaging")),"\xa0and select your Firebase Console project to get\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Server Key")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click Three Dot in Left Side Firebase Cloud Messaging API Section.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1153).Z,width:"2042",height:"804"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click Manage API in Google Cloud Console Link")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4464).Z,width:"3072",height:"1762"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Then Open new tab, Enable Firebase Cloud Messaging API")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(751).Z,width:"3072",height:"1762"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Then go back to Firebase and follow same step for ",(0,i.kt)("strong",{parentName:"li"},"Cloud Messaging API (Legacy)"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6218).Z,width:"2872",height:"1078"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click Enable")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(622).Z,width:"1652",height:"866"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go Back To Firebase Cloud Messaging Tab and Refresh current page , Now You See The Server Key in Google Firebase Console")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1716).Z,width:"3072",height:"1762"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Input your ",(0,i.kt)("strong",{parentName:"li"},"Server Key"),":")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5015).Z,width:"1528",height:"1185"})),(0,i.kt)("p",null,"Then ",(0,i.kt)("strong",{parentName:"p"},"SEND")," a message to push notification."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Server Key taken must be the Server Key of that project."),(0,i.kt)("li",{parentName:"ul"},"Absolutely do not share Server Key.")),(0,i.kt)("h2",{id:"23437a0774d34da0a730a2fbf8ea4d30"},"2. Push Notifications on Android",(0,i.kt)("a",{parentName:"h2",href:"https://docs.shopbuilder.app/Features/firebase-push-notification/#2-push-notifications-on-android"},"undefined")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Precondition:")," Follow\xa0",(0,i.kt)("a",{parentName:"p",href:"/feature-firebase-setting"},"Firebase Settings"),"\xa0to create an Android application on Firebase."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Steps"),": Go to the following path\xa0",(0,i.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/project/_/settings/cloudmessaging"},(0,i.kt)("inlineCode",{parentName:"a"},"Cloud Messaging")),"\xa0and select your Firebase Console project to get\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Server Key")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1411).Z,width:"3072",height:"1762"})),(0,i.kt)("p",null,"Input your ",(0,i.kt)("strong",{parentName:"p"},"Server Key"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5015).Z,width:"1528",height:"1185"})),(0,i.kt)("p",null,"Then ",(0,i.kt)("strong",{parentName:"p"},"SEND")," a message to push notification."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Server Key taken must be the Server Key of that project."),(0,i.kt)("li",{parentName:"ul"},"Absolutely do not share Server Key.")))}u.isMDXComponent=!0},6497:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1056542835-e2fbfb0d5d3e0769b972788ff819cdd2.png"},5503:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1077733917-92a10e7c0d65c5d8e5288ca9e80d6442.png"},8150:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1175599471-9674b2a5cc0de7373df809880a76737d.png"},3911:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1290745145-f555423c7763eccecfd7033b89ef07ad.png"},5689:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1326624116-8269406ad4be4f7c60f6c421beb1a23d.png"},7317:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1498367574-dec5f9ae37a3c12613752717f9f07f4c.png"},7448:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1558809288-44182d9c5cb012473fe54ac3a3c39509.png"},5015:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1601509898-bd845cc57c11f72c651cff4c89c84371.png"},6564:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1632227047-154d6c0101be1df9084a85471d89e524.png"},751:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1644625728-2616b8fe22e4681b64179160ca97f339.png"},9014:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/188105958-7111fb230092e94f6d7df32685b081fd.png"},9524:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1918726254-18eff6931a4a98f533b6e4e76de504d6.png"},4464:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1966743065-cc8685dd151eeee972a7b62f60256d56.png"},4898:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2019901002-85f9cded5a17a2893804b54a66a210e3.png"},1411:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/390931442-c3c1bb8d18e1b4443b6d39256980dfcb.png"},5567:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/397044586-42affef780b3abcc82c67133b001d0f1.png"},6366:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/404079331-2b34a2973f691c927f1f10754756aabf.png"},622:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/478424508-3475ad138ab8dbf54900d8ecd7ac5e51.png"},6218:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/527207158-ec6796748128517600ed8bcb3542796e.png"},6621:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/599696615-45921c7b8488d4dfb15d97f37eee3058.png"},1716:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/670120110-7bb26d8886ca05c48bf3ed522db0e7cb.png"},672:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/74980512-66f372f01f44d1d1837ef014083da783.png"},7553:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/752022191-24f34e85979d9b06cd678af328a5f494.png"},1153:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/778578965-c74da9906c372ab6505cfe5faa6d4f80.png"},6667:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/93657380-6e267eb9596fdb40dcc4dff3cf9b42ae.png"}}]);