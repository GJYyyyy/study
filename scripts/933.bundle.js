(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[933],{2111:(e,t,s)=>{"use strict";s.d(t,{Z:()=>M});var a=s(6161),i=s(6278),l=s(5680),o=s(8017),r=s(8159),n=s(1406),d=s(1241);let c=0;function m(e){let t=(0,n.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let g=0;const u=()=>{g&&clearTimeout(g),g=setTimeout((()=>{r.Z.commit("hidePageLoading")}),200)},h=u;let p="";p="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const f=a.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});f.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,o.LP)();return e.headers.Authorization="Bearer "+t,r.Z.commit("showPageLoading"),(e=>{c||(c=setTimeout((()=>{r.Z.commit("clearCache"),c=0}),18e5));let t=m(e),s=new Map([["knowledgeCollection",new Set(["knowledgeCollection","knowledge"])]]);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/")[0];s.has(e)?s.get(e).forEach((e=>r.Z.commit("removeCache",e))):r.Z.commit("removeCache",e)}let a=r.Z.state.cache[t];return a?Promise.reject(a):e})(e)}),(e=>(l.Z.fail({message:e.message}),Promise.reject(e)))),f.interceptors.response.use((e=>(u(),(e=>{let t={...e},s=(0,d.aJ)(t),a=m(s.config);r.Z.commit("addCache",{[a]:s})})(e),e.data.data)),(e=>{if(h(),e instanceof Error){let t=e.response;return t?401===t.status?l.Z.fail({message:t.statusText,onClose:()=>i.Z.push("/mobile/login")}):t.data.message?l.Z.fail({message:t.data.message}):l.Z.fail({message:t.statusText}):l.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const w=f,P=function(e,t={}){let s="/"+e,a=e.replace(/^\w/,e[0].toUpperCase()),i={["add"+a]:e=>w.post(s+"/add",e),["delete"+a]:e=>w.post(s+"/delete",{ids:e}),["update"+a]:(e,t)=>w.post(s+"/update/"+e,t),["detail"+a]:(e,t)=>w.post(s+"/detail/"+e,t),["list"+a]:e=>w.post(s+"/list",e)};return Object.assign({},i,t)},k="user",C=(k.replace(/^\w/,k[0].toUpperCase()),P(k,{userRegister:e=>w.post("/user/register",e),getUserInfo:e=>w.get("/user/getUserInfo/"+e),userLogin:e=>w.post("/user/login",e)})),L="major",b=L.replace(/^\w/,L[0].toUpperCase()),v=P(L,{["listNoPage"+b]:e=>w.post("/major/listNoPage",e)}),Z="subject",y=Z.replace(/^\w/,Z[0].toUpperCase()),j=P(Z,{["listNoPage"+y]:e=>w.post("/subject/listNoPage",e)}),N="knowledgeCatalog",U=N.replace(/^\w/,N[0].toUpperCase()),T=P(N,{["deleteTree"+U]:e=>w.post("/knowledgeCatalog/deleteTree",{ids:e}),["listNoPage"+U]:e=>w.post("/knowledgeCatalog/listNoPage",e),["listTree"+U]:e=>w.post("/knowledgeCatalog/listTree",e)}),S="knowledge",I=S.replace(/^\w/,S[0].toUpperCase()),R=P(S,{["listNoPage"+I]:e=>w.post("/knowledge/listNoPage",e),["listRandom"+I]:e=>w.post("/knowledge/listRandom",e)}),x="knowledgeCollection",_=x.replace(/^\w/,x[0].toUpperCase()),M={...C,...v,...j,...T,...R,...P(x,{["list"+_]:e=>w.post("/knowledgeCollection/list",e),["listNoPage"+_]:e=>w.post("/knowledgeCollection/listNoPage",e)})}},8017:(e,t,s)=>{"use strict";function a(e=!1){e=Boolean(e);let t=window.localStorage,s=window.sessionStorage,a=e?t:s;return{get:e=>a.getItem(e),set:(e,i)=>{t.removeItem(e),s.removeItem(e),a.setItem(e,i)},remove:e=>{t.removeItem(e),s.removeItem(e)},clear:()=>{t.clear(),s.clear()}}}function i(e,t=!1){a(!0).set("rememberMe",t),a(t).set("token",e)}function l(){let e="true"===a(!0).get("rememberMe");return a(e).get("token")}function o(){let e="true"===a(!0).get("rememberMe");a(e).remove("token")}s.d(t,{LP:()=>l,gy:()=>o,o4:()=>i})},4737:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=function(){var e=this,t=e._self._c;return t("div",[t("custom-list",{attrs:{list:e.list,finished:e.finished,"detail-path":"/mobile/detailKnowledge"},on:{delete:e.onDelete,refresh:e.onPullRefresh,load:e.onListLoad}})],1)};a._withStripped=!0;var i=s(2202),l=s(2111);const o={components:{"custom-list":i.SP},data:()=>({list:[],listParams:{key:"",pageSize:15,last:null},finished:!1}),async mounted(){this.init()},methods:{async getList(){return await l.Z.listKnowledgeCollection(this.listParams)},async setList(){let e=await this.getList(),{listParams:t}=this;t.last=e.last,this.listParams={...t},this.list=this.formatterList(e.list),e.last||(this.finished=!0),0===e.list?.length&&e.last&&this.setList()},init(){let{listParams:e}=this;e.key="",e.last=null,this.listParams={...e},this.setList()},formatterList:e=>e?.map((e=>({...e,title:e.knowledge_title,id:e.knowledge_collection_id}))),onPullRefresh(){let{listParams:e}=this;e.last=null,this.listParams={...e},this.finished=!1,this.list=[],this.setList()},onSearch(e){let{listParams:t}=this;t.last=null,t.key=e,this.listParams={...t},this.finished=!1,this.list=[],this.setList()},async onListLoad(){let e=await this.getList(),{listParams:t}=this;t.last=e.last,this.listParams={...t},this.list=this.list.concat(this.formatterList(e.list)),e.last||(this.finished=!0)},async onDelete(e){await l.Z.deleteKnowledgeCollection([e]),this.$toast.success("取消收藏成功"),this.init()}}},r=(0,s(1900).Z)(o,a,[],!1,null,null,null).exports},2480:()=>{}}]);