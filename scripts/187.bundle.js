(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[187],{4148:(t,e,s)=>{"use strict";s.d(e,{Z:()=>j});var a=s(6161),o=s(7608),i=s(5680),l=s(8017),d=s(8159),r=s(1406),n=s(1241);let u=0;function g(t){let e=(0,r.MD5)(t.baseURL+t.url+t.method+JSON.stringify(t.params)+("object"==typeof t.data?JSON.stringify(t.data):t.data)).toString();return t.url+"/"+e}let c=0;const p=()=>{c&&clearTimeout(c),c=setTimeout((()=>{d.Z.commit("hidePageLoading")}),500)},h=p;let m="";m="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const f=a.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});f.interceptors.request.use((t=>{t.headers.setContentType("text/plain;charset=UTF-8");let e=(0,l.LP)();return t.headers.Authorization="Bearer "+e,d.Z.commit("showPageLoading"),(t=>{u||(u=setTimeout((()=>{d.Z.commit("clearCache"),u=0}),18e5));let e=g(t);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(t.url)){let t=/\/\w+\/\w+\//.exec(e)[0].replace(/(^\/|\/$)/g,"").split("/");d.Z.commit("removeCache",t[0])}let s=d.Z.state.cache[e];return s?Promise.reject(s):t})(t)}),(t=>(i.Z.fail({message:t.message}),Promise.reject(t)))),f.interceptors.response.use((t=>(p(),(t=>{let e={...t},s=(0,n.aJ)(e),a=g(s.config);d.Z.commit("addCache",{[a]:s})})(t),t.data.data)),(t=>{if(h(),t instanceof Error){let e=t.response;return e?401===e.status?i.Z.fail({message:e.statusText,onClose:()=>o.Z.push("/mobile/login")}):e.data.message?i.Z.fail({message:e.data.message}):i.Z.fail({message:e.statusText}):i.Z.fail({message:t.message}),Promise.reject(t)}return e=t,Promise.resolve(e.data.data);var e}));const w=f,j={userRegister:t=>w.post("/user/register",t),updateUser:(t,e)=>w.post("/user/update/"+t,e),getUserInfo:t=>w.get("/user/getUserInfo/"+t),userLogin:t=>w.post("/user/login",t),addMajor:t=>w.post("/major/add",t),deleteMajor:t=>w.post("/major/delete",{ids:t}),updateMajor:(t,e)=>w.post("/major/update/"+t,e),detailMajor:(t,e)=>w.post("/major/detail/"+t,e),listMajor:t=>w.post("/major/list",t),listNoPageMajor:t=>w.post("/major/listNoPage",t),addSubject:t=>w.post("/subject/add",t),deleteSubject:t=>w.post("/subject/delete",{ids:t}),updateSubject:(t,e)=>w.post("/subject/update/"+t,e),detailSubject:(t,e)=>w.post("/subject/detail/"+t,e),listSubject:t=>w.post("/subject/list",t),listNoPageSubject:t=>w.post("/subject/listNoPage",t),addKnowledgeCatalog:t=>w.post("/knowledgeCatalog/add",t),deleteKnowledgeCatalog:t=>w.post("/knowledgeCatalog/delete",{ids:t}),deleteTreeKnowledgeCatalog:t=>w.post("/knowledgeCatalog/deleteTree",{ids:t}),updateKnowledgeCatalog:(t,e)=>w.post("/knowledgeCatalog/update/"+t,e),detailKnowledgeCatalog:(t,e)=>w.post("/knowledgeCatalog/detail/"+t,e),listKnowledgeCatalog:t=>w.post("/knowledgeCatalog/list",t),listNoPageKnowledgeCatalog:t=>w.post("/knowledgeCatalog/listNoPage",t),listTreeKnowledgeCatalog:t=>w.post("/knowledgeCatalog/listTree",t),addKnowledge:t=>w.post("/knowledge/add",t),deleteKnowledge:t=>w.post("/knowledge/delete",{ids:t}),updateKnowledge:(t,e)=>w.post("/knowledge/update/"+t,e),detailKnowledge:(t,e)=>w.post("/knowledge/detail/"+t,e),listKnowledge:t=>w.post("/knowledge/list",t),listNoPageKnowledge:t=>w.post("/knowledge/listNoPage",t)}},8017:(t,e,s)=>{"use strict";function a(t=!1){t=Boolean(t);let e=window.localStorage,s=window.sessionStorage,a=t?e:s;return{get:t=>a.getItem(t),set:(t,o)=>{e.removeItem(t),s.removeItem(t),a.setItem(t,o)},remove:t=>{e.removeItem(t),s.removeItem(t)},clear:()=>{e.clear(),s.clear()}}}function o(t,e=!1){a(!0).set("rememberMe",e),a(e).set("token",t)}function i(){let t="true"===a(!0).get("rememberMe");return a(t).get("token")}function l(){let t="true"===a(!0).get("rememberMe");a(t).remove("token")}s.d(e,{LP:()=>i,gy:()=>l,o4:()=>o})},3502:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var a=function(){var t=this,e=t._self._c;return e("div",[e("add-button",{attrs:{path:"/mobile/addSubject",query:t.addtionQuery}}),t._v(" "),e("custom-list-head",{attrs:{title:"专业",value:t.cateTitle}}),t._v(" "),e("custom-list",{attrs:{list:t.list,finished:t.finished,"child-list-path":"/mobile/listKnowledgeCatalog","update-path":"/mobile/updateSubject"},on:{delete:t.onDelete,refresh:t.onPullRefresh,load:t.onListLoad}}),t._v(" "),e("custom-search",{on:{search:t.onSearch}})],1)};a._withStripped=!0;var o=s(83),i=s(4148);const l={components:{"add-button":o.HS,"custom-list":o.SP,"custom-search":o.Ny,"custom-list-head":o.K4},computed:{major_id(){return this.$route.query.cate_id||this.$store.state.userInfo.major_id},addtionQuery(){return{cate_id:this.major_id}}},data:()=>({cateTitle:"",list:[],filterOptions:{key:"",cate_id:""},pageOptions:{pageSize:15,last:null},total:0,finished:!1}),async mounted(){this.init()},methods:{async getList(){return await i.Z.listSubject({filterOptions:this.filterOptions,pageOptions:this.pageOptions})},async setList(){let t=await this.getList(),{pageOptions:e}=this;e.last=t.last,this.pageOptions={...e},this.total=t.total,this.list=this.formatterList(t.list),t.last||(this.finished=!0),0===t.list?.length&&t.last&&this.setList()},async init(){let t=await i.Z.detailMajor(this.major_id,{filterOptions:{fields:"title, code"}});this.cateTitle=t.data.code?`${t.data.title}(${t.data.code})`:t.data.title;let{filterOptions:e}=this;e.cate_id=this.major_id,e.key="",this.filterOptions={...e},this.setList()},formatterList:t=>t?.map((t=>({...t,_title:t.title,_code:t.code,title:t.code?`${t.title}(${t.code})`:t.title,id:t.subject_id}))),onPullRefresh(){let{pageOptions:t}=this;t.last=null,this.pageOptions={...t},this.finished=!1,this.list=[],this.setList()},onSearch(t){let{pageOptions:e,filterOptions:s}=this;e.last=null,s.key=t,this.pageOptions={...e},this.filterOptions={...s},this.finished=!1,this.list=[],this.setList()},async onListLoad(){let t=await this.getList(),{pageOptions:e}=this;e.last=t.last,this.pageOptions={...e},this.total=t.total,this.list=this.list.concat(this.formatterList(t.list)),t.last||(this.finished=!0)},onDelete(t){i.Z.deleteSubject([t]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.init()})}))}}},d=(0,s(1900).Z)(l,a,[],!1,null,null,null).exports},2480:()=>{}}]);