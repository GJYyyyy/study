(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[492],{2111:(e,t,s)=>{"use strict";s.d(t,{Z:()=>x});var a=s(6161),i=s(6278),l=s(5680),o=s(8017),n=s(8159),r=s(1406),d=s(1241);let c=0;function u(e){let t=(0,r.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let m=0;const h=()=>{m&&clearTimeout(m),m=setTimeout((()=>{n.Z.commit("hidePageLoading")}),200)},g=h;let p="";p="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const w=a.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});w.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,o.LP)();return e.headers.Authorization="Bearer "+t,n.Z.commit("showPageLoading"),(e=>{c||(c=setTimeout((()=>{n.Z.commit("clearCache"),c=0}),18e5));let t=u(e),s=new Map([["knowledgeCollection",new Set(["knowledgeCollection","knowledge"])]]);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/")[0];s.has(e)?s.get(e).forEach((e=>n.Z.commit("removeCache",e))):n.Z.commit("removeCache",e)}let a=n.Z.state.cache[t];return a?Promise.reject(a):e})(e)}),(e=>(l.Z.fail({message:e.message}),Promise.reject(e)))),w.interceptors.response.use((e=>(h(),(e=>{let t={...e},s=(0,d.aJ)(t),a=u(s.config);n.Z.commit("addCache",{[a]:s})})(e),e.data.data)),(e=>{if(g(),e instanceof Error){let t=e.response;return t?401===t.status?l.Z.fail({message:t.statusText,onClose:()=>i.Z.push("/mobile/login")}):t.data.message?l.Z.fail({message:t.data.message}):l.Z.fail({message:t.statusText}):l.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const f=w,P=function(e,t={}){let s="/"+e,a=e.replace(/^\w/,e[0].toUpperCase()),i={["add"+a]:e=>f.post(s+"/add",e),["delete"+a]:e=>f.post(s+"/delete",{ids:e}),["update"+a]:(e,t)=>f.post(s+"/update/"+e,t),["detail"+a]:(e,t)=>f.post(s+"/detail/"+e,t),["list"+a]:e=>f.post(s+"/list",e)};return Object.assign({},i,t)},k="user",C=(k.replace(/^\w/,k[0].toUpperCase()),P(k,{userRegister:e=>f.post("/user/register",e),getUserInfo:e=>f.get("/user/getUserInfo/"+e),userLogin:e=>f.post("/user/login",e)})),b="major",y=b.replace(/^\w/,b[0].toUpperCase()),v=P(b,{["listNoPage"+y]:e=>f.post("/major/listNoPage",e)}),L="subject",Z=L.replace(/^\w/,L[0].toUpperCase()),T=P(L,{["listNoPage"+Z]:e=>f.post("/subject/listNoPage",e)}),U="knowledgeCatalog",_=U.replace(/^\w/,U[0].toUpperCase()),N=P(U,{["deleteTree"+_]:e=>f.post("/knowledgeCatalog/deleteTree",{ids:e}),["listNoPage"+_]:e=>f.post("/knowledgeCatalog/listNoPage",e),["listTree"+_]:e=>f.post("/knowledgeCatalog/listTree",e)}),j="knowledge",S=j.replace(/^\w/,j[0].toUpperCase()),I=P(j,{["listNoPage"+S]:e=>f.post("/knowledge/listNoPage",e),["listRandom"+S]:e=>f.post("/knowledge/listRandom",e)}),K="knowledgeCollection",R=K.replace(/^\w/,K[0].toUpperCase()),x={...C,...v,...T,...N,...I,...P(K,{["list"+R]:e=>f.post("/knowledgeCollection/list",e),["listNoPage"+R]:e=>f.post("/knowledgeCollection/listNoPage",e)})}},9353:(e,t,s)=>{"use strict";s.d(t,{k:()=>i});var a=s(2202);const i={components:{"add-button":a.HS,"custom-list":a.SP,"custom-search":a.Ny},data:()=>({list:[],finished:!1}),async mounted(){this.init()},methods:{async setList(){let e=await this.getList(),{listParams:t}=this;t.last=e.last,this.listParams={...t},this.list=this.formatterList(e.list),e.last||(this.finished=!0),0===e.list?.length&&e.last&&this.setList()},onPullRefresh(){let{listParams:e}=this;e.last=null,this.listParams={...e},this.finished=!1,this.list=[],this.setList()},onSearch(e){let{listParams:t}=this;t.last=null,t.key=e,this.listParams={...t},this.finished=!1,this.list=[],this.setList()},async onListLoad(){let e=await this.getList(),{listParams:t}=this;t.last=e.last,this.listParams={...t},this.list=this.list.concat(this.formatterList(e.list)),e.last||(this.finished=!0)}}}},8017:(e,t,s)=>{"use strict";function a(e=!1){e=Boolean(e);let t=window.localStorage,s=window.sessionStorage,a=e?t:s;return{get:e=>a.getItem(e),set:(e,i)=>{t.removeItem(e),s.removeItem(e),a.setItem(e,i)},remove:e=>{t.removeItem(e),s.removeItem(e)},clear:()=>{t.clear(),s.clear()}}}function i(e,t=!1){a(!0).set("rememberMe",t),a(t).set("token",e)}function l(){let e="true"===a(!0).get("rememberMe");return a(e).get("token")}function o(){let e="true"===a(!0).get("rememberMe");a(e).remove("token")}s.d(t,{LP:()=>l,gy:()=>o,o4:()=>i})},9880:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var a=function(){var e=this,t=e._self._c;return t("div",[t("add-button",{attrs:{path:"/mobile/addKnowledge",query:e.addtionQuery}}),e._v(" "),t("custom-list-head",{attrs:{title:"知识点目录",value:e.cateTitle}}),e._v(" "),t("custom-list",{attrs:{list:e.list,finished:e.finished,"detail-path":"/mobile/detailKnowledge","update-path":"/mobile/updateKnowledge","collection-key":"knowledge_collection_id"},on:{delete:e.onDelete,refresh:e.onPullRefresh,load:e.onListLoad,collection:e.onCollection,uncollection:e.onUnCollection}}),e._v(" "),t("custom-search",{on:{search:e.onSearch}})],1)};a._withStripped=!0;var i=s(9353),l=s(2202),o=s(2111);const n="knowledge_catalog_id",r={mixins:[i.k],components:{"custom-list-head":l.K4},computed:{[n](){return this.$route.query.cate_id||this.$store.state.userInfo[n]},addtionQuery(){return{cate_id:this[n]}}},data:()=>({cateTitle:"",listParams:{key:"",pageSize:20,last:null,filter:{[n]:""}}}),methods:{async getList(){return await o.Z.listKnowledge(this.listParams)},async init(){let e=await o.Z.detailKnowledgeCatalog(this[n],{fields:["title"]});this.cateTitle=e.data.title;let{listParams:t}=this;t.filter[n]=this[n],t.key="",t.last=null,this.listParams={...t},this.setList()},formatterList:e=>e?.map((e=>({...e,id:e.knowledge_id}))),onDelete(e){o.Z.deleteKnowledge([e]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.init()})}))},async onCollection(e){await o.Z.addKnowledgeCollection({knowledge_id:e}),this.$toast.success("收藏成功"),this.init()},async onUnCollection(e){await o.Z.deleteKnowledgeCollection([e]),this.$toast.success("取消收藏成功"),this.init()}}},d=(0,s(1900).Z)(r,a,[],!1,null,null,null).exports},2480:()=>{}}]);