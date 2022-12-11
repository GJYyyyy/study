(self.webpackChunkfront=self.webpackChunkfront||[]).push([[14],{4148:(e,t,s)=>{"use strict";s.d(t,{Z:()=>j});var o=s(6161),a=s(7608),i=s(5680),l=s(8017),n=s(8159),d=s(1406);let r=0;const g=e=>{let t=u({...e}),s=p(t.config);n.Z.commit("addCache",{[s]:t})};function u(e){let t;if(e instanceof Array)t=e.map((e=>u(e)));else if(e instanceof Set){t=new Set;for(let s of e)t.add(u(s))}else if(e instanceof Map){t=new Map;for(let[s,o]of e)t.set(u(s),u(o))}else if(e instanceof Object){t={};for(let s in e)t[s]=u(e[s])}else t=e;return t}function p(e){let t=(0,d.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let c=0;const h=()=>{c&&clearTimeout(c),c=setTimeout((()=>{n.Z.commit("hidePageLoading")}),500)},m=h;let f="";f="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const w=o.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});w.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,l.LP)();return e.headers.Authorization="Bearer "+t,n.Z.commit("showPageLoading"),(e=>{r||(r=setTimeout((()=>{n.Z.commit("clearCache"),r=0}),18e5));let t=p(e);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/");n.Z.commit("removeCache",e[0])}let s=n.Z.state.cache[t];return s?Promise.reject(s):e})(e)}),(e=>(i.Z.fail({message:e.message}),Promise.reject(e)))),w.interceptors.response.use((e=>(h(),g(e),e.data.data)),(e=>{if(m(),e instanceof Error){let t=e.response;return t?401===t.status?i.Z.fail({message:t.statusText,onClose:()=>a.Z.push("/mobile/login")}):t.data.message?i.Z.fail({message:t.data.message}):i.Z.fail({message:t.statusText}):i.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const b=w,j={userRegister:e=>b.post("/user/register",e),updateUser:(e,t)=>b.post("/user/update/"+e,t),getUserInfo:e=>b.get("/user/getUserInfo/"+e),userLogin:e=>b.post("/user/login",e),addMajor:e=>b.post("/major/add",e),deleteMajor:e=>b.post("/major/delete",{ids:e}),updateMajor:(e,t)=>b.post("/major/update/"+e,t),detailMajor:(e,t)=>b.post("/major/detail/"+e,t),listMajor:e=>b.post("/major/list",e),listNoPageMajor:e=>b.post("/major/listNoPage",e),addSubject:e=>b.post("/subject/add",e),deleteSubject:e=>b.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>b.post("/subject/update/"+e,t),detailSubject:(e,t)=>b.post("/subject/detail/"+e,t),listSubject:e=>b.post("/subject/list",e),listNoPageSubject:e=>b.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>b.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>b.post("/knowledgeCatalog/delete",{ids:e}),deleteTreeKnowledgeCatalog:e=>b.post("/knowledgeCatalog/deleteTree",{ids:e}),updateKnowledgeCatalog:(e,t)=>b.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>b.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>b.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>b.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>b.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>b.post("/knowledge/add",e),deleteKnowledge:e=>b.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>b.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>b.post("/knowledge/detail/"+e,t),listKnowledge:e=>b.post("/knowledge/list",e),listNoPageKnowledge:e=>b.post("/knowledge/listNoPage",e)}},8017:(e,t,s)=>{"use strict";function o(e=!1){e=Boolean(e);let t=window.localStorage,s=window.sessionStorage,o=e?t:s;return{get:e=>o.getItem(e),set:(e,a)=>{t.removeItem(e),s.removeItem(e),o.setItem(e,a)},remove:e=>{t.removeItem(e),s.removeItem(e)},clear:()=>{t.clear(),s.clear()}}}function a(e,t=!1){o(!0).set("rememberMe",t),o(t).set("token",e)}function i(){let e="true"===o(!0).get("rememberMe");return o(e).get("token")}function l(){let e="true"===o(!0).get("rememberMe");o(e).remove("token")}s.d(t,{LP:()=>i,gy:()=>l,o4:()=>a})},515:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var o=function(){var e=this,t=e._self._c;return t("div",[t("add-button",{attrs:{path:"/mobile/addKnowledge",query:e.addtionQuery}}),e._v(" "),t("custom-list",{attrs:{list:e.list,finished:e.finished,"detail-path":"/mobile/detailKnowledge","update-path":"/mobile/updateKnowledge"},on:{delete:e.onDelete,refresh:e.onPullRefresh,load:e.onListLoad}}),e._v(" "),t("custom-search",{on:{search:e.onSearch}})],1)};o._withStripped=!0;var a=s(6768),i=s(4148);const l="knowledge_catalog_id",n={components:{"add-button":a.HS,"custom-list":a.SP,"custom-search":a.Ny},computed:{[l](){return this.$route.query.cate_id||this.$store.state.userInfo[l]},addtionQuery(){return{cate_id:this[l]}}},data:()=>({list:[],filterOptions:{key:"",cate_id:""},pageOptions:{pageSize:15,last:null},total:0,finished:!1}),async mounted(){this.init()},methods:{async getList(){return await i.Z.listKnowledge({filterOptions:this.filterOptions,pageOptions:this.pageOptions})},async setList(){let e=await this.getList(),{pageOptions:t}=this;t.last=e.last,this.pageOptions={...t},this.total=e.total,this.list=this.formatterList(e.list),e.last||(this.finished=!0),0===e.list?.length&&e.last&&this.setList()},init(){let{filterOptions:e}=this;e.cate_id=this[l],e.key="",this.filterOptions={...e},this.setList()},formatterList:e=>e?.map((e=>({...e,_title:e.title,_code:e.code,title:e.code?`${e.title}(${e.code})`:e.title,id:e.knowledge_id}))),onPullRefresh(){let{pageOptions:e}=this;e.last=null,this.pageOptions={...e},this.finished=!1,this.list=[],this.setList()},onSearch(e){let{pageOptions:t,filterOptions:s}=this;t.last=null,s.key=e,this.pageOptions={...t},this.filterOptions={...s},this.finished=!1,this.list=[],this.setList()},async onListLoad(){let e=await this.getList(),{pageOptions:t}=this;t.last=e.last,this.pageOptions={...t},this.total=e.total,this.list=this.list.concat(this.formatterList(e.list)),e.last||(this.finished=!0)},onDelete(e){i.Z.deleteKnowledge([e]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.init()})}))}}},d=(0,s(1900).Z)(n,o,[],!1,null,null,null).exports},2480:()=>{}}]);