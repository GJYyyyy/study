(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[826],{6418:(e,t,s)=>{"use strict";s.d(t,{Z:()=>$});var a=s(6161),o=s(6278),l=s(5680),i=s(8017),r=s(8159),n=s(1406),d=s(1241);let c=0;function u(e){let t=(0,n.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let g=0;const m=()=>{g&&clearTimeout(g),g=setTimeout((()=>{r.Z.commit("hidePageLoading")}),200)},p=m;let h="";h="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const w=a.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});w.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,i.LP)();return e.headers.Authorization="Bearer "+t,r.Z.commit("showPageLoading"),(e=>{c||(c=setTimeout((()=>{r.Z.commit("clearCache"),c=0}),18e5));let t=u(e),s=new Map([["knowledgeCollection",new Set(["knowledgeCollection","knowledge"])]]);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/")[0];s.has(e)?s.get(e).forEach((e=>r.Z.commit("removeCache",e))):r.Z.commit("removeCache",e)}let a=r.Z.state.cache[t];return a?Promise.reject(a):e})(e)}),(e=>(l.Z.fail({message:e.message}),Promise.reject(e)))),w.interceptors.response.use((e=>(m(),(e=>{let t={...e},s=(0,d.aJ)(t),a=u(s.config);r.Z.commit("addCache",{[a]:s})})(e),e.data.data)),(e=>{if(p(),e instanceof Error){let t=e.response;return t?401===t.status?l.Z.fail({message:t.statusText,onClose:()=>o.Z.push("/login")}):t.data.message?l.Z.fail({message:t.data.message}):l.Z.fail({message:t.statusText}):l.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const f=w,C=function(e,t={}){let s="/"+e,a=e.replace(/^\w/,e[0].toUpperCase()),o={["add"+a]:e=>f.post(s+"/add",e),["delete"+a]:e=>f.post(s+"/delete",{ids:e}),["update"+a]:(e,t)=>f.post(s+"/update/"+e,t),["detail"+a]:(e,t)=>f.post(s+"/detail/"+e,t),["list"+a]:e=>f.post(s+"/list",e)};return Object.assign({},o,t)},k="user",P=(k.replace(/^\w/,k[0].toUpperCase()),C(k,{userRegister:e=>f.post("/user/register",e),getUserInfo:e=>f.get("/user/getUserInfo/"+e),userLogin:e=>f.post("/user/login",e)})),b="major",v=b.replace(/^\w/,b[0].toUpperCase()),y=C(b,{["listNoPage"+v]:e=>f.post("/major/listNoPage",e)}),Z="subject",T=Z.replace(/^\w/,Z[0].toUpperCase()),L=C(Z,{["listNoPage"+T]:e=>f.post("/subject/listNoPage",e)}),N="knowledgeCatalog",j=N.replace(/^\w/,N[0].toUpperCase()),U=C(N,{["deleteTree"+j]:e=>f.post("/knowledgeCatalog/deleteTree",{ids:e}),["listNoPage"+j]:e=>f.post("/knowledgeCatalog/listNoPage",e),["listTree"+j]:e=>f.post("/knowledgeCatalog/listTree",e)}),S="knowledge",_=S.replace(/^\w/,S[0].toUpperCase()),I=C(S,{["listNoPage"+_]:e=>f.post("/knowledge/listNoPage",e),["listRandom"+_]:e=>f.post("/knowledge/listRandom",e)}),R="knowledgeCollection",A=R.replace(/^\w/,R[0].toUpperCase()),q=C(R,{["list"+A]:e=>f.post("/knowledgeCollection/list",e),["listNoPage"+A]:e=>f.post("/knowledgeCollection/listNoPage",e)}),x="knowledgeRandomQA",K=x.replace(/^\w/,x[0].toUpperCase()),$={...P,...y,...L,...U,...I,...q,...C(x,{["listNoPage"+K]:e=>f.post("/knowledgeRandomQA/listNoPage",e),["detailAnswerAccuracy"+K]:()=>f.get("/knowledgeRandomQA/detailAnswerAccuracy")})}},8017:(e,t,s)=>{"use strict";function a(e=!1){e=Boolean(e);let t=window.localStorage,s=window.sessionStorage,a=e?t:s;return{get:e=>a.getItem(e),set:(e,o)=>{t.removeItem(e),s.removeItem(e),a.setItem(e,o)},remove:e=>{t.removeItem(e),s.removeItem(e)},clear:()=>{t.clear(),s.clear()}}}function o(e,t=!1){a(!0).set("rememberMe",t),a(t).set("token",e)}function l(){let e="true"===a(!0).get("rememberMe");return a(e).get("token")}function i(){let e="true"===a(!0).get("rememberMe");a(e).remove("token")}s.d(t,{LP:()=>l,gy:()=>i,o4:()=>o})},5401:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=function(){var e=this,t=e._self._c;return t("div",[t("add-button",{attrs:{path:"/addKnowledgeCatalog",query:e.addtionQuery}}),e._v(" "),t("custom-list-head",{attrs:{title:"科目",value:e.cateTitle}}),e._v(" "),t("custom-tree",{attrs:{list:e.list,"child-list-path":"/listKnowledge","update-path":"/updateKnowledgeCatalog","add-path":"/addKnowledgeCatalog"},on:{delete:e.onDelete}}),e._v(" "),t("custom-search",{on:{search:e.onSearch}})],1)};a._withStripped=!0;var o=s(6418),l=s(3671);const i="subject_id",r={components:{"add-button":l.HS,"custom-tree":l.Uh,"custom-search":l.Ny,"custom-list-head":l.K4},computed:{[i](){return this.$route.query.cate_id||this.$store.state.userInfo[i]},addtionQuery(){return{cate_id:this[i]}}},data:()=>({cateTitle:"",list:[],listParams:{keyword:"",equalFields:{[i]:""}}}),async mounted(){this.init()},methods:{async getList(){return await o.Z.listTreeKnowledgeCatalog(this.listParams)},async setList(){let e=await this.getList();this.list=this.formatterList(e.list)},async init(){let e=await o.Z.detailSubject(this[i],{needFields:["title","code"]});this.cateTitle=e.data.code?`${e.data.title}(${e.data.code})`:e.data.title;let{listParams:t}=this;t.equalFields[i]=this[i],t.keyword="",this.listParams={...t},this.list=[],this.setList()},formatterList(e){return e?.map((e=>{let t={...e,data:{id:e.knowledge_catalog_id},state:{expanded:!0}};return e.child?.list.length&&(t.children=this.formatterList(e.child.list)),t}))},onSearch(e){let{listParams:t}=this;t.keyword=e,this.listParams={...t},this.list=[],this.setList()},onDelete(e){o.Z.deleteTreeKnowledgeCatalog([e]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.init()})}))}}},n=(0,s(1900).Z)(r,a,[],!1,null,null,null).exports},2480:()=>{}}]);