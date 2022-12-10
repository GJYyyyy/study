(self.webpackChunkfront=self.webpackChunkfront||[]).push([[256],{4148:(e,t,s)=>{"use strict";s.d(t,{Z:()=>j});var a=s(6161),o=s(7608),l=s(5680),i=s(8017),r=s(8159),d=s(1406);let n=0;const g=e=>{let t=c({...e}),s=u(t.config);r.Z.commit("addCache",{[s]:t})};function c(e){let t;if(e instanceof Array)t=e.map((e=>c(e)));else if(e instanceof Set){t=new Set;for(let s of e)t.add(c(s))}else if(e instanceof Map){t=new Map;for(let[s,a]of e)t.set(c(s),c(a))}else if(e instanceof Object){t={};for(let s in e)t[s]=c(e[s])}else t=e;return t}function u(e){let t=(0,d.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let p=0;const m=()=>{p&&clearTimeout(p),p=setTimeout((()=>{r.Z.commit("hidePageLoading")}),500)},f=m;let h="";h="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const w=a.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});w.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,i.LP)();return e.headers.Authorization="Bearer "+t,r.Z.commit("showPageLoading"),(e=>{n||(n=setTimeout((()=>{r.Z.commit("clearCache"),n=0}),18e5));let t=u(e);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/");r.Z.commit("removeCache",e[0])}let s=r.Z.state.cache[t];return s?Promise.reject(s):e})(e)}),(e=>(l.Z.fail({message:e.message}),Promise.reject(e)))),w.interceptors.response.use((e=>(m(),g(e),e.data.data)),(e=>{if(f(),e instanceof Error){let t=e.response;return t?401===t.status?l.Z.fail({message:t.statusText,onClose:()=>o.Z.push("/mobile/login")}):t.data.message?l.Z.fail({message:t.data.message}):l.Z.fail({message:t.statusText}):l.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const b=w,j={userRegister:e=>b.post("/user/register",e),updateUser:(e,t)=>b.post("/user/update/"+e,t),getUserInfo:e=>b.get("/user/getUserInfo/"+e),userLogin:e=>b.post("/user/login",e),addMajor:e=>b.post("/major/add",e),deleteMajor:e=>b.post("/major/delete",{ids:e}),updateMajor:(e,t)=>b.post("/major/update/"+e,t),detailMajor:(e,t)=>b.post("/major/detail/"+e,t),listMajor:e=>b.post("/major/list",e),listNoPageMajor:e=>b.post("/major/listNoPage",e),addSubject:e=>b.post("/subject/add",e),deleteSubject:e=>b.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>b.post("/subject/update/"+e,t),detailSubject:(e,t)=>b.post("/subject/detail/"+e,t),listSubject:e=>b.post("/subject/list",e),listNoPageSubject:e=>b.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>b.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>b.post("/knowledgeCatalog/delete",{ids:e}),deleteTreeKnowledgeCatalog:e=>b.post("/knowledgeCatalog/deleteTree",{ids:e}),updateKnowledgeCatalog:(e,t)=>b.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>b.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>b.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>b.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>b.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>b.post("/knowledge/add",e),deleteKnowledge:e=>b.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>b.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>b.post("/knowledge/detail/"+e,t),listKnowledge:e=>b.post("/knowledge/list",e),listNoPageKnowledge:e=>b.post("/knowledge/listNoPage",e)}},8017:(e,t,s)=>{"use strict";function a(e=!1){e=Boolean(e);let t=window.localStorage,s=window.sessionStorage,a=e?t:s;return{get:e=>a.getItem(e),set:(e,o)=>{t.removeItem(e),s.removeItem(e),a.setItem(e,o)},remove:e=>{t.removeItem(e),s.removeItem(e)},clear:()=>{t.clear(),s.clear()}}}function o(e,t=!1){a(!0).set("rememberMe",t),a(t).set("token",e)}function l(){let e="true"===a(!0).get("rememberMe");return a(e).get("token")}function i(){let e="true"===a(!0).get("rememberMe");a(e).remove("token")}s.d(t,{LP:()=>l,gy:()=>i,o4:()=>o})},4695:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var a=function(){var e=this,t=e._self._c;return t("div",[t("add-button",{attrs:{path:"/mobile/addKnowledgeCatalog",query:e.addtionQuery}}),e._v(" "),t("custom-tree",{attrs:{list:e.list,"update-path":"/mobile/updateKnowledgeCatalog","child-list-path":"/mobile/listKnowledge","add-path":"/mobile/addKnowledgeCatalog"},on:{delete:e.onDelete}}),e._v(" "),t("custom-search",{on:{search:e.onSearch}})],1)};a._withStripped=!0;var o=s(4148),l=s(8719);const i="subject_id",r={components:{"add-button":l.HS,"custom-tree":l.Uh,"custom-search":l.Ny},computed:{[i](){return this.$route.query.cate_id||this.$store.state[i]},addtionQuery(){return{cate_id:this[i]}}},data:()=>({list:[],filterOptions:{key:"",cate_id:""}}),async mounted(){this.init()},methods:{async getList(){return await o.Z.listTreeKnowledgeCatalog({filterOptions:this.filterOptions})},async setList(){let e=await this.getList();this.list=this.formatterList(e.list)},init(){let{filterOptions:e}=this;e.cate_id=this[i],e.key="",this.filterOptions={...e},this.setList()},formatterList(e){return e?.map((e=>({...e,data:{id:e.knowledge_catalog_id},state:{expanded:!0},children:e.child?this.formatterList(e.child.list):[]})))},onSearch(e){let{filterOptions:t}=this;t.key=e,this.filterOptions={...t},this.list=[],this.setList()},onDelete(e){o.Z.deleteTreeKnowledgeCatalog([e]).then((()=>{this.$toast.success({message:"删除成功",onclick:()=>this.init()})}))}}},d=(0,s(1900).Z)(r,a,[],!1,null,null,null).exports},2480:()=>{}}]);