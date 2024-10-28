(()=>{var e={};e.id=243,e.ids=[243],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9451:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>f,tree:()=>l});var o=t(482),s=t(9108),a=t(2563),n=t.n(a),i=t(8300),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);t.d(r,d);let l=["",{children:["torrent-faq",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,2495)),"X:\\websites\\torbox\\src\\app\\torrent-faq\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,8894)),"X:\\websites\\torbox\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"]}],c=["X:\\websites\\torbox\\src\\app\\torrent-faq\\page.tsx"],u="/torrent-faq/page",p={require:t,loadChunk:()=>Promise.resolve()},f=new o.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/torrent-faq/page",pathname:"/torrent-faq",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},1848:(e,r,t)=>{Promise.resolve().then(t.bind(t,6116))},6116:(e,r,t)=>{"use strict";t.r(r),t.d(r,{FAQ:()=>l});var o=t(5344),s=t(3729),a=t(5390),n=t(1453);let i=[{question:"What makes TorBox stand out among torrenting tools?",answer:"TorBox is more than just a traditional torrent hosting service; it’s a fully integrated download platform. By providing affordability, speed, and ease of use, it eliminates the need for manual configuration of VPNs, clients, and automation tools. The user interface is designed for quick access and control, backed by a dedicated community. Simply upload your torrent and let TorBox handle the rest, delivering files to any device. With continuous updates and integrations, TorBox serves as a complete torrent privacy tool for all your downloading needs."},{question:"Is there any catch to the free plan?",answer:"No catch. The free plan is truly cost-free, with no hidden charges or payment information required. You can use it as long as you like, with a few restrictions compared to our premium plans. The free plan still provides robust features, making it ideal for exploring the platform. Our mission is to encourage the use of peer-to-peer networks and support torrent cloud storage technologies for everyone."},{question:"How does TorBox prioritize privacy and data security?",answer:"At TorBox, we prioritize user privacy with a strict no-logs policy and strong encryption protocols. We don’t store IP addresses, download details, or any personal data, and all connections are securely routed through our servers using SSL and HTTPS. This ensures your torrenting activities remain completely anonymous, even from your ISP. Join our community to learn more about our privacy features, or visit our support resources for additional information on our torrent privacy tool."},{question:"Can TorBox be used for anonymous torrenting?",answer:"Yes, TorBox is designed specifically for anonymous and private downloading. We don’t retain IP addresses, torrent metadata, or any other identifiers after you delete your download. The platform gives you complete control over your data, including the ability to erase your account entirely, leaving no trace behind. This makes TorBox the ideal choice for secure and private torrent cloud storage."},{question:"Is TorBox accessible on mobile and other devices?",answer:"Yes, TorBox is built to be cross-device accessible. It works on any web browser, with a dedicated Android app available and an iOS app in development. We also offer WebDAV support for seamless file access across devices, making it easy to manage and retrieve your downloads from any location. The platform functions as an easy-to-use torrent platform for mobile users and desktop users alike."},{question:"Are frequently downloaded torrents cached for quicker access?",answer:"Yes, popular torrents are cached in our system for near-instant availability. If a torrent is not yet cached, it will be added to our high-speed file access system upon your first download, allowing other users to benefit from rapid download speeds. This approach makes TorBox an efficient alternative to seedbox solutions for users seeking fast download platforms."},{question:"What advantages does TorBox have over traditional seedboxes?",answer:"Unlike traditional seedboxes that require manual configuration and additional costs for add-ons like *Arr apps or media servers, TorBox is a pre-configured service offering optimized settings out-of-the-box. Our plans are competitively priced, with faster speeds and features designed to simplify the torrenting experience. Whether you are a beginner or a seasoned user, TorBox provides an alternative to seedbox services that delivers higher value and greater convenience."}],d=({question:e,answer:r,isOpen:t,onClick:s})=>(0,o.jsxs)("div",{className:"bg-[#0d0f13] rounded-lg border border-[#04bf8a]/10 transition-all duration-300 card-hover-glow overflow-hidden",children:[(0,o.jsxs)("button",{className:"w-full px-6 py-4 flex justify-between items-center text-left hover:bg-[#0d0f13]/80 transition-colors",onClick:s,children:[o.jsx("h3",{className:"text-xl font-share-tech",children:e}),o.jsx(a.Z,{className:(0,n.cn)("w-5 h-5 text-[#04bf8a] transition-transform duration-300",t?"rotate-180":"")})]}),o.jsx("div",{className:(0,n.cn)("grid transition-all duration-300",t?"grid-rows-[1fr]":"grid-rows-[0fr]"),children:o.jsx("div",{className:"overflow-hidden",children:o.jsx("div",{className:"px-6 pb-4",children:o.jsx("p",{className:"text-gray-400 leading-relaxed",children:r})})})})]});function l(){let[e,r]=(0,s.useState)(null);return o.jsx("section",{id:"faq",className:"relative py-24",children:(0,o.jsxs)("div",{className:"relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsx("h2",{className:"text-3xl font-share-tech text-center mb-12 glow-effect",children:"Frequently Asked Questions"}),o.jsx("div",{className:"space-y-4",children:i.map((t,s)=>o.jsx(d,{question:t.question,answer:t.answer,isOpen:e===s,onClick:()=>r(e===s?null:s)},s))})]})})}},1453:(e,r,t)=>{"use strict";t.d(r,{cn:()=>a});var o=t(6815),s=t(9377);function a(...e){return(0,s.m6)((0,o.W)(e))}},2495:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var o=t(5036),s=t(6101);function a(){return o.jsx(s.Z,{})}},6101:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var o=t(6843);let s=(0,o.createProxy)(String.raw`X:\websites\torbox\src\components\FAQ.tsx`),{__esModule:a,$$typeof:n}=s;s.default;let i=(0,o.createProxy)(String.raw`X:\websites\torbox\src\components\FAQ.tsx#FAQ`)}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[908,731,8],()=>t(9451));module.exports=o})();