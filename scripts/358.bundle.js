(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[358],{4148:(e,t,s)=>{"use strict";s.d(t,{Z:()=>b});var a=s(6161),o=s(7608),i=s(5680),l=s(8017),d=s(8159),n=s(1406),r=s(1241);let g=0;function u(e){let t=(0,n.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let p=0;const c=()=>{p&&clearTimeout(p),p=setTimeout((()=>{d.Z.commit("hidePageLoading")}),200)},h=c;let m="";m="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const f=a.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});f.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,l.LP)();return e.headers.Authorization="Bearer "+t,d.Z.commit("showPageLoading"),(e=>{g||(g=setTimeout((()=>{d.Z.commit("clearCache"),g=0}),18e5));let t=u(e);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/");d.Z.commit("removeCache",e[0])}let s=d.Z.state.cache[t];return s?Promise.reject(s):e})(e)}),(e=>(i.Z.fail({message:e.message}),Promise.reject(e)))),f.interceptors.response.use((e=>(c(),(e=>{let t={...e},s=(0,r.aJ)(t),a=u(s.config);d.Z.commit("addCache",{[a]:s})})(e),e.data.data)),(e=>{if(h(),e instanceof Error){let t=e.response;return t?401===t.status?i.Z.fail({message:t.statusText,onClose:()=>o.Z.push("/mobile/login")}):t.data.message?i.Z.fail({message:t.data.message}):i.Z.fail({message:t.statusText}):i.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const w=f,b={userRegister:e=>w.post("/user/register",e),updateUser:(e,t)=>w.post("/user/update/"+e,t),getUserInfo:e=>w.get("/user/getUserInfo/"+e),userLogin:e=>w.post("/user/login",e),addMajor:e=>w.post("/major/add",e),deleteMajor:e=>w.post("/major/delete",{ids:e}),updateMajor:(e,t)=>w.post("/major/update/"+e,t),detailMajor:(e,t)=>w.post("/major/detail/"+e,t),listMajor:e=>w.post("/major/list",e),listNoPageMajor:e=>w.post("/major/listNoPage",e),addSubject:e=>w.post("/subject/add",e),deleteSubject:e=>w.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>w.post("/subject/update/"+e,t),detailSubject:(e,t)=>w.post("/subject/detail/"+e,t),listSubject:e=>w.post("/subject/list",e),listNoPageSubject:e=>w.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>w.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>w.post("/knowledgeCatalog/delete",{ids:e}),deleteTreeKnowledgeCatalog:e=>w.post("/knowledgeCatalog/deleteTree",{ids:e}),updateKnowledgeCatalog:(e,t)=>w.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>w.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>w.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>w.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>w.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>w.post("/knowledge/add",e),deleteKnowledge:e=>w.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>w.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>w.post("/knowledge/detail/"+e,t),listKnowledge:e=>w.post("/knowledge/list",e),listNoPageKnowledge:e=>w.post("/knowledge/listNoPage",e)}},8017:(e,t,s)=>{"use strict";function a(e=!1){e=Boolean(e);let t=window.localStorage,s=window.sessionStorage,a=e?t:s;return{get:e=>a.getItem(e),set:(e,o)=>{t.removeItem(e),s.removeItem(e),a.setItem(e,o)},remove:e=>{t.removeItem(e),s.removeItem(e)},clear:()=>{t.clear(),s.clear()}}}function o(e,t=!1){a(!0).set("rememberMe",t),a(t).set("token",e)}function i(){let e="true"===a(!0).get("rememberMe");return a(e).get("token")}function l(){let e="true"===a(!0).get("rememberMe");a(e).remove("token")}s.d(t,{LP:()=>i,gy:()=>l,o4:()=>o})},7981:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=function(){var e=this,t=e._self._c;return t("div",[t("add-button",{attrs:{path:"/mobile/addKnowledge",query:e.addtionQuery}}),e._v(" "),t("custom-list-head",{attrs:{title:"知识点目录",value:e.cateTitle}}),e._v(" "),t("custom-list",{attrs:{list:e.list,finished:e.finished,"detail-path":"/mobile/detailKnowledge","update-path":"/mobile/updateKnowledge"},on:{delete:e.onDelete,refresh:e.onPullRefresh,load:e.onListLoad}}),e._v(" "),t("custom-search",{on:{search:e.onSearch}})],1)};a._withStripped=!0;var o=s(83),i=s(4148);const l="knowledge_catalog_id",d={components:{"add-button":o.HS,"custom-list":o.SP,"custom-search":o.Ny,"custom-list-head":o.K4},computed:{[l](){return this.$route.query.cate_id||this.$store.state.userInfo[l]},addtionQuery(){return{cate_id:this[l]}}},data:()=>({cateTitle:"",list:[],filterOptions:{key:"",cate_id:""},pageOptions:{pageSize:15,last:null},total:0,finished:!1}),async mounted(){this.init()},methods:{async getList(){return await i.Z.listKnowledge({filterOptions:this.filterOptions,pageOptions:this.pageOptions})},async setList(){let e=await this.getList(),{pageOptions:t}=this;t.last=e.last,this.pageOptions={...t},this.total=e.total,this.list=this.formatterList(e.list),e.last||(this.finished=!0),0===e.list?.length&&e.last&&this.setList()},async init(){let e=await i.Z.detailKnowledgeCatalog(this[l],{filterOptions:{fields:"title"}});this.cateTitle=e.data.title;let{filterOptions:t}=this;t.cate_id=this[l],t.key="",this.filterOptions={...t},this.setList()},formatterList:e=>e?.map((e=>({...e,_title:e.title,_code:e.code,title:e.code?`${e.title}(${e.code})`:e.title,id:e.knowledge_id}))),onPullRefresh(){let{pageOptions:e}=this;e.last=null,this.pageOptions={...e},this.finished=!1,this.list=[],this.setList()},onSearch(e){let{pageOptions:t,filterOptions:s}=this;t.last=null,s.key=e,this.pageOptions={...t},this.filterOptions={...s},this.finished=!1,this.list=[],this.setList()},async onListLoad(){let e=await this.getList(),{pageOptions:t}=this;t.last=e.last,this.pageOptions={...t},this.total=e.total,this.list=this.list.concat(this.formatterList(e.list)),e.last||(this.finished=!0)},onDelete(e){i.Z.deleteKnowledge([e]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.init()})}))}}},n=(0,s(1900).Z)(d,a,[],!1,null,null,null).exports},2480:()=>{}}]);