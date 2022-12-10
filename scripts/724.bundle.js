(self.webpackChunkfront=self.webpackChunkfront||[]).push([[724],{4148:(e,t,s)=>{"use strict";s.d(t,{Z:()=>b});var a=s(6161),o=s(7608),i=s(5680),l=s(8017),n=s(8159),r=s(1406);let d=0;const g=e=>{let t=u({...e}),s=c(t.config);n.Z.commit("addCache",{[s]:t})};function u(e){let t;if(e instanceof Array)t=e.map((e=>u(e)));else if(e instanceof Set){t=new Set;for(let s of e)t.add(u(s))}else if(e instanceof Map){t=new Map;for(let[s,a]of e)t.set(u(s),u(a))}else if(e instanceof Object){t={};for(let s in e)t[s]=u(e[s])}else t=e;return t}function c(e){let t=(0,r.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let p=0;const h=()=>{p&&clearTimeout(p),p=setTimeout((()=>{n.Z.commit("hidePageLoading")}),500)},m=h;let f="";f="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const w=a.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});w.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,l.LP)();return e.headers.Authorization="Bearer "+t,n.Z.commit("showPageLoading"),(e=>{d||(d=setTimeout((()=>{n.Z.commit("clearCache"),d=0}),18e5));let t=c(e);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/");n.Z.commit("removeCache",e[0])}let s=n.Z.state.cache[t];return s?Promise.reject(s):e})(e)}),(e=>(i.Z.fail({message:e.message}),Promise.reject(e)))),w.interceptors.response.use((e=>(h(),g(e),e.data.data)),(e=>{if(m(),e instanceof Error){let t=e.response;return t?401===t.status?i.Z.fail({message:t.statusText,onClose:()=>o.Z.push("/mobile/login")}):t.data.message?i.Z.fail({message:t.data.message}):i.Z.fail({message:t.statusText}):i.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const j=w,b={userRegister:e=>j.post("/user/register",e),getUserInfo:e=>j.get("/user/getUserInfo/"+e),userLogin:e=>j.post("/user/login",e),addMajor:e=>j.post("/major/add",e),deleteMajor:e=>j.post("/major/delete",{ids:e}),updateMajor:(e,t)=>j.post("/major/update/"+e,t),detailMajor:(e,t)=>j.post("/major/detail/"+e,t),listMajor:e=>j.post("/major/list",e),listNoPageMajor:e=>j.post("/major/listNoPage",e),addSubject:e=>j.post("/subject/add",e),deleteSubject:e=>j.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>j.post("/subject/update/"+e,t),detailSubject:(e,t)=>j.post("/subject/detail/"+e,t),listSubject:e=>j.post("/subject/list",e),listNoPageSubject:e=>j.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>j.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>j.post("/knowledgeCatalog/delete",{ids:e}),deleteTreeKnowledgeCatalog:e=>j.post("/knowledgeCatalog/deleteTree",{ids:e}),updateKnowledgeCatalog:(e,t)=>j.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>j.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>j.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>j.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>j.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>j.post("/knowledge/add",e),deleteKnowledge:e=>j.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>j.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>j.post("/knowledge/detail/"+e,t),listKnowledge:e=>j.post("/knowledge/list",e),listNoPageKnowledge:e=>j.post("/knowledge/listNoPage",e)}},8017:(e,t,s)=>{"use strict";function a(e=!1){e=Boolean(e);let t=window.localStorage,s=window.sessionStorage,a=e?t:s;return{get:e=>a.getItem(e),set:(e,o)=>{t.removeItem(e),s.removeItem(e),a.setItem(e,o)},remove:e=>{t.removeItem(e),s.removeItem(e)},clear:()=>{t.clear(),s.clear()}}}function o(e,t=!1){a(!0).set("rememberMe",t),a(t).set("token",e)}function i(){let e="true"===a(!0).get("rememberMe");return a(e).get("token")}function l(){let e="true"===a(!0).get("rememberMe");a(e).remove("token")}s.d(t,{LP:()=>i,gy:()=>l,o4:()=>o})},1624:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=function(){var e=this,t=e._self._c;return t("div",[t("add-button",{attrs:{path:"/mobile/addSubject",query:e.addtionQuery}}),e._v(" "),t("custom-list",{attrs:{list:e.list,finished:e.finished,"child-list-path":"/mobile/listKnowledgeCatalog","update-path":"/mobile/updateSubject"},on:{delete:e.onDelete,refresh:e.onPullRefresh,load:e.onListLoad}}),e._v(" "),t("custom-search",{on:{search:e.onSearch}})],1)};a._withStripped=!0;var o=s(6986),i=s(4148);const l={components:{"add-button":o.HS,"custom-list":o.SP,"custom-search":o.Ny},computed:{major_id(){return this.$route.query.cate_id||this.$store.state.userInfo.major_id},addtionQuery(){return{cate_id:this.major_id}}},data:()=>({list:[],filterOptions:{key:"",cate_id:""},pageOptions:{pageSize:15,last:null},total:0,finished:!1}),async mounted(){this.init()},methods:{async getList(){return await i.Z.listSubject({filterOptions:this.filterOptions,pageOptions:this.pageOptions})},async setList(){let e=await this.getList(),{pageOptions:t}=this;t.last=e.last,this.pageOptions={...t},this.total=e.total,this.list=this.formatterList(e.list),e.last||(this.finished=!0),0===e.list?.length&&e.last&&this.setList()},init(){let{filterOptions:e}=this;e.cate_id=this.major_id,e.key="",this.filterOptions={...e},this.setList()},formatterList:e=>e?.map((e=>({...e,_title:e.title,_code:e.code,title:e.code?`${e.title}(${e.code})`:e.title,id:e.subject_id}))),onPullRefresh(){let{pageOptions:e}=this;e.last=null,this.pageOptions={...e},this.finished=!1,this.list=[],this.setList()},onSearch(e){let{pageOptions:t,filterOptions:s}=this;t.last=null,s.key=e,this.pageOptions={...t},this.filterOptions={...s},this.finished=!1,this.list=[],this.setList()},async onListLoad(){let e=await this.getList(),{pageOptions:t}=this;t.last=e.last,this.pageOptions={...t},this.total=e.total,this.list=this.list.concat(this.formatterList(e.list)),e.last||(this.finished=!0)},onDelete(e){i.Z.deleteSubject([e]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.init()})}))}}},n=(0,s(1900).Z)(l,a,[],!1,null,null,null).exports},2480:()=>{}}]);