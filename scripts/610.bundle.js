(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[610],{2996:(e,t,o)=>{"use strict";o.d(t,{Z:()=>J});var a=o(6161),s=o(6278),r=o(5680),n=o(8017),l=o(8159),i=o(1406),d=o(1241);let c=0;function g(e){let t=(0,i.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let u=0;const p=()=>{u&&clearTimeout(u),u=setTimeout((()=>{l.Z.commit("hidePageLoading")}),200)},m=p;let w="";w="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const f=a.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});f.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,n.LP)();return e.headers.Authorization="Bearer "+t,l.Z.commit("showPageLoading"),(e=>{c||(c=setTimeout((()=>{l.Z.commit("clearCache"),c=0}),108e5));let t=g(e),o=new Map([["knowledgeCollection",new Set(["knowledgeCollection","knowledge"])]]);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/")[0];o.has(e)?o.get(e).forEach((e=>l.Z.commit("removeCache",e))):l.Z.commit("removeCache",e)}let a=l.Z.state.cache[t];return a?Promise.reject(a):e})(e)}),(e=>(r.Z.fail({message:e.message}),Promise.reject(e)))),f.interceptors.response.use((e=>(p(),(e=>{let t={...e},o=(0,d.aJ)(t),a=g(o.config);l.Z.commit("addCache",{[a]:o})})(e),e.data.data)),(e=>{if(m(),e instanceof Error){let t=e.response;return t?401===t.status?r.Z.fail({message:t.statusText,onClose:()=>s.Z.push("/login")}):t.data.message?r.Z.fail({message:t.data.message}):r.Z.fail({message:t.statusText}):r.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const h=f,b=function(e,t={}){let o="/"+e,a=e.replace(/^\w/,e[0].toUpperCase()),s={["add"+a]:e=>h.post(o+"/add",e),["delete"+a]:e=>h.post(o+"/delete",{ids:e}),["update"+a]:(e,t)=>h.post(o+"/update/"+e,t),["detail"+a]:(e,t)=>h.post(o+"/detail/"+e,t),["list"+a]:e=>h.post(o+"/list",e)};return Object.assign({},s,t)},k="user",C=(k.replace(/^\w/,k[0].toUpperCase()),b(k,{userRegister:e=>h.post("/user/register",e),getUserInfo:e=>h.get("/user/getUserInfo/"+e),userLogin:e=>h.post("/user/login",e)})),P="major",v=P.replace(/^\w/,P[0].toUpperCase()),j=b(P,{["listNoPage"+v]:e=>h.post("/major/listNoPage",e),["addBatch"+v]:e=>h.post("/major/addBatch",e)}),N="subject",U=N.replace(/^\w/,N[0].toUpperCase()),A=b(N,{["listNoPage"+U]:e=>h.post("/subject/listNoPage",e),["addBatch"+U]:e=>h.post("/subject/addBatch",e)}),y="knowledgeCatalog",Z=y.replace(/^\w/,y[0].toUpperCase()),R=b(y,{["deleteTree"+Z]:e=>h.post("/knowledgeCatalog/deleteTree",{ids:e}),["listNoPage"+Z]:e=>h.post("/knowledgeCatalog/listNoPage",e),["listTree"+Z]:e=>h.post("/knowledgeCatalog/listTree",e),["addBatch"+Z]:e=>h.post("/knowledgeCatalog/addBatch",e)}),S="knowledge",T=S.replace(/^\w/,S[0].toUpperCase()),I=b(S,{["listNoPage"+T]:e=>h.post("/knowledge/listNoPage",e),["listRandom"+T]:e=>h.post("/knowledge/listRandom",e)}),L="knowledgeCollection",M=L.replace(/^\w/,L[0].toUpperCase()),B=b(L,{["list"+M]:e=>h.post("/knowledgeCollection/list",e),["listNoPage"+M]:e=>h.post("/knowledgeCollection/listNoPage",e)}),$="knowledgeRandomQA",x=$.replace(/^\w/,$[0].toUpperCase()),O=b($,{["listNoPage"+x]:e=>h.post("/knowledgeRandomQA/listNoPage",e),["detailAnswerAccuracy"+x]:()=>h.get("/knowledgeRandomQA/detailAnswerAccuracy")}),q="knowledgeWrong",E=q.replace(/^\w/,q[0].toUpperCase()),J={...C,...j,...A,...R,...I,...B,...O,...b(q,{["listNoPage"+E]:e=>h.post("/knowledgeWrong/listNoPage",e)})}},8017:(e,t,o)=>{"use strict";function a(e=!1){e=Boolean(e);let t=window.localStorage,o=window.sessionStorage,a=e?t:o;return{get:e=>a.getItem(e),set:(e,s)=>{t.removeItem(e),o.removeItem(e),a.setItem(e,s)},remove:e=>{t.removeItem(e),o.removeItem(e)},clear:()=>{t.clear(),o.clear()}}}function s(e,t=!1){a(!0).set("rememberMe",t),a(t).set("token",e)}function r(){let e="true"===a(!0).get("rememberMe");return a(e).get("token")}function n(){let e="true"===a(!0).get("rememberMe");a(e).remove("token")}o.d(t,{LP:()=>r,gy:()=>n,o4:()=>s})},1241:(e,t,o)=>{"use strict";function a(e){for(let t in e)e[t]=e[t].toString().trim();return e}function s(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],o=!1,a=0;a<t.length;a++)if(e.indexOf(t[a])>0){o=!0;break}var s=window.screen.width,r=window.screen.height;return s>325&&r<750&&(o=!0),o}function r(e){return`${e.getFullYear()}-${("0"+e.getMonth()).substr(-2)}-${("0"+e.getDate()).substr(-2)} ${("0"+e.getHours()).substr(-2)}:${("0"+e.getMinutes()).substr(-2)}:${("0"+e.getSeconds()).substr(-2)}`}function n(e){let t;if(e instanceof Array)t=e.map((e=>n(e)));else if(e instanceof Set){t=new Set;for(let o of e)t.add(n(o))}else if(e instanceof Map){t=new Map;for(let[o,a]of e)t.set(n(o),n(a))}else if(e instanceof Object){t={};for(let o in e)t[o]=n(e[o])}else t=e;return t}o.d(t,{_n:()=>l,_t:()=>r,aJ:()=>n,mG:()=>a,tq:()=>s});const l=async(e,t=300,o=1,a="base64")=>{let s=new Image;return s.src=URL.createObjectURL(e),new Promise(((e,r)=>{s.onload=function(){let s=this.width,r=this.height,n=s/r,l=0,i=0;s>t||r>t?s>r?(l=t,i=l/n):(i=t,l=i*n):(l=s,i=r);let d=document.createElement("canvas"),c=d.getContext("2d"),g=document.createAttribute("width"),u=document.createAttribute("height");g.nodeValue=l,u.nodeValue=i,d.setAttributeNode(g),d.setAttributeNode(u),c.drawImage(this,0,0,l,i);let p=d.toDataURL("image/jpeg",o);if("base64"===a)e(p);else if("file"===a){let t=((e,t="")=>{for(var o=e.split(","),a=o[0].match(/:(.*?);/)[1],s=atob(o[1]),r=s.length,n=new Uint8Array(r);r--;)n[r]=s.charCodeAt(r);if(a){var l=a.split("/");""===t&&(t="file."+l[1])}return new File([n],t,{type:a})})(p,"img.jpg");e(t)}}}))}},2480:()=>{}}]);