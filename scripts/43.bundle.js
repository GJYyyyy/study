(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[43],{3308:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var o=a(6161),s=a(6278),r=a(5680),n=a(8017),i=a(8159),l=a(1406),d=a(1241);let c,g=0;function p(e){let t=(0,l.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}c="gjy_server"===window.study_env.NODE_ENV_PROD?"http://gjyyyyy.tpddns.cn:65503":"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const u=o.Z.create({baseURL:c+"/api",timeout:3e4});u.interceptors.request.use((e=>{"gjy_server"===window.study_env.NODE_ENV_PROD||e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,n.LP)();return t&&(e.headers.Authorization="Bearer "+t),(e=>{g||(g=setTimeout((()=>{i.Z.commit("clearCache"),g=0}),108e5));let t=p(e),a=new Map([["knowledgeCollection",new Set(["knowledgeCollection","knowledge"])]]);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/")[0];a.has(e)?a.get(e).forEach((e=>i.Z.commit("removeCache",e))):i.Z.commit("removeCache",e)}let o=i.Z.state.cache[t];return o?Promise.reject(o):e})(e)}),(e=>(r.Z.fail({message:e.message}),Promise.reject(e)))),u.interceptors.response.use((e=>((e=>{let t={...e},a=(0,d.aJ)(t),o=p(a.config);i.Z.commit("addCache",{[o]:a})})(e),e.data.data)),(e=>{if(e instanceof Error){let t=e.response;return t?401===t.status?r.Z.fail({message:t.statusText,onClose:()=>s.Z.push("/login")}):t.data.message?r.Z.fail({message:t.data.message}):r.Z.fail({message:t.statusText}):r.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const m=u,w=function(e,t={}){let a="/"+e,o=e.replace(/^\w/,e[0].toUpperCase()),s={["add"+o]:e=>m.post(a+"/add",e),["delete"+o]:e=>m.post(a+"/delete",{ids:e}),["update"+o]:(e,t)=>m.post(a+"/update/"+e,t),["detail"+o]:(e,t)=>m.post(a+"/detail/"+e,t),["list"+o]:e=>m.post(a+"/list",e)};return Object.assign({},s,t)},f="user",h=(f.replace(/^\w/,f[0].toUpperCase()),w(f,{userRegister:e=>m.post("/user/register",e),getUserInfo:e=>m.get("/user/getUserInfo/"+e),userLogin:e=>m.post("/user/login",e)})),P="major",C=P.replace(/^\w/,P[0].toUpperCase()),k=w(P,{["listNoPage"+C]:e=>m.post("/major/listNoPage",e),["addBatch"+C]:e=>m.post("/major/addBatch",e)}),b="subject",v=b.replace(/^\w/,b[0].toUpperCase()),y=w(b,{["listNoPage"+v]:e=>m.post("/subject/listNoPage",e),["addBatch"+v]:e=>m.post("/subject/addBatch",e)}),N="knowledgeCatalog",j=N.replace(/^\w/,N[0].toUpperCase()),U=w(N,{["deleteTree"+j]:e=>m.post("/knowledgeCatalog/deleteTree",{ids:e}),["listNoPage"+j]:e=>m.post("/knowledgeCatalog/listNoPage",e),["listTree"+j]:e=>m.post("/knowledgeCatalog/listTree",e),["addBatch"+j]:e=>m.post("/knowledgeCatalog/addBatch",e)}),Z="knowledge",A=Z.replace(/^\w/,Z[0].toUpperCase()),R=w(Z,{["listNoPage"+A]:e=>m.post("/knowledge/listNoPage",e),["listRandom"+A]:e=>m.post("/knowledge/listRandom",e)}),L="knowledgeCollection",O=L.replace(/^\w/,L[0].toUpperCase()),S=w(L,{["list"+O]:e=>m.post("/knowledgeCollection/list",e),["listNoPage"+O]:e=>m.post("/knowledgeCollection/listNoPage",e)}),I="knowledgeRandomQA",x=I.replace(/^\w/,I[0].toUpperCase()),B=w(I,{["listNoPage"+x]:e=>m.post("/knowledgeRandomQA/listNoPage",e),["detailAnswerAccuracy"+x]:()=>m.get("/knowledgeRandomQA/detailAnswerAccuracy")}),T="knowledgeWrong",_=T.replace(/^\w/,T[0].toUpperCase()),E={...h,...k,...y,...U,...R,...S,...B,...w(T,{["listNoPage"+_]:e=>m.post("/knowledgeWrong/listNoPage",e)})}},8017:(e,t,a)=>{"use strict";function o(e=!1){e=Boolean(e);let t=window.localStorage,a=window.sessionStorage,o=e?t:a;return{get:e=>o.getItem(e),set:(e,s)=>{t.removeItem(e),a.removeItem(e),o.setItem(e,s)},remove:e=>{t.removeItem(e),a.removeItem(e)},clear:()=>{t.clear(),a.clear()}}}function s(e,t=!1){o(!0).set("rememberMe",t),o(t).set("token",e)}function r(){let e="true"===o(!0).get("rememberMe");return o(e).get("token")}function n(){let e="true"===o(!0).get("rememberMe");o(e).remove("token")}a.d(t,{LP:()=>r,gy:()=>n,o4:()=>s})},1241:(e,t,a)=>{"use strict";a.d(t,{Bv:()=>p,QP:()=>w,Zk:()=>f,_n:()=>m,aJ:()=>u,mG:()=>c,tq:()=>g});var o=a(7076),s=a.n(o),r=a(3992),n=a.n(r),i=a(5766),l=a.n(i),d=a(8159);function c(e){for(let t in e)e[t]=e[t].toString().trim();return e}function g(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!1,o=0;o<t.length;o++)if(e.indexOf(t[o])>0){a=!0;break}var s=window.screen.width,r=window.screen.height;return s>325&&r<750&&(a=!0),a}function p(){return s().extend(n()),s().extend(l()),s().tz.setDefault("PRC"),s().tz(...arguments)}function u(e){let t;if(e instanceof Array)t=e.map((e=>u(e)));else if(e instanceof Set){t=new Set;for(let a of e)t.add(u(a))}else if(e instanceof Map){t=new Map;for(let[a,o]of e)t.set(u(a),u(o))}else if(e instanceof Object){t={};for(let a in e)t[a]=u(e[a])}else t=e;return t}const m=async(e,t=300,a=1,o="base64")=>{let s=new Image;return s.src=URL.createObjectURL(e),new Promise(((e,r)=>{s.onload=function(){let s=this.width,r=this.height,n=s/r,i=0,l=0;s>t||r>t?s>r?(i=t,l=i/n):(l=t,i=l*n):(i=s,l=r);let d=document.createElement("canvas"),c=d.getContext("2d"),g=document.createAttribute("width"),p=document.createAttribute("height");g.nodeValue=i,p.nodeValue=l,d.setAttributeNode(g),d.setAttributeNode(p),c.drawImage(this,0,0,i,l);let u=d.toDataURL("image/jpeg",a);if("base64"===o)e(u);else if("file"===o){let t=((e,t="")=>{for(var a=e.split(","),o=a[0].match(/:(.*?);/)[1],s=atob(a[1]),r=s.length,n=new Uint8Array(r);r--;)n[r]=s.charCodeAt(r);if(o){var i=o.split("/");""===t&&(t="file."+i[1])}return new File([n],t,{type:o})})(u,"img.jpg");e(t)}}}))},w=()=>{d.Z.state.pageLoading||d.Z.commit("showPageLoading")},f=()=>{d.Z.state.pageLoading&&d.Z.commit("hidePageLoading")}},2480:()=>{}}]);