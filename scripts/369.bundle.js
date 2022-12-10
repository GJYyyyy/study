(self.webpackChunkfront=self.webpackChunkfront||[]).push([[369],{4148:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var o=a(6161),s=a(7608),l=a(5680),r=a(8017),i=a(8159),d=a(1406);let n=0;const u=e=>{let t=c({...e}),a=g(t.config);i.Z.commit("addCache",{[a]:t})};function c(e){let t;if(e instanceof Array)t=e.map((e=>c(e)));else if(e instanceof Set){t=new Set;for(let a of e)t.add(c(a))}else if(e instanceof Map){t=new Map;for(let[a,o]of e)t.set(c(a),c(o))}else if(e instanceof Object){t={};for(let a in e)t[a]=c(e[a])}else t=e;return t}function g(e){let t=(0,d.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let m=0;const p=()=>{m&&clearTimeout(m),m=setTimeout((()=>{i.Z.commit("hidePageLoading")}),500)},f=p;let w="";w="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const b=o.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});b.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,r.LP)();return e.headers.Authorization="Bearer "+t,i.Z.commit("showPageLoading"),(e=>{n||(n=setTimeout((()=>{i.Z.commit("clearCache"),n=0}),18e5));let t=g(e);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/");i.Z.commit("removeCache",e[0])}let a=i.Z.state.cache[t];return a?Promise.reject(a):e})(e)}),(e=>(l.Z.fail({message:e.message}),Promise.reject(e)))),b.interceptors.response.use((e=>(p(),u(e),e.data.data)),(e=>{if(f(),e instanceof Error){let t=e.response;return t?401===t.status?l.Z.fail({message:t.statusText,onClose:()=>s.Z.push("/mobile/login")}):t.data.message?l.Z.fail({message:t.data.message}):l.Z.fail({message:t.statusText}):l.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const j=b,h={userRegister:e=>j.post("/user/register",e),updateUser:(e,t)=>j.post("/user/update/"+e,t),getUserInfo:e=>j.get("/user/getUserInfo/"+e),userLogin:e=>j.post("/user/login",e),addMajor:e=>j.post("/major/add",e),deleteMajor:e=>j.post("/major/delete",{ids:e}),updateMajor:(e,t)=>j.post("/major/update/"+e,t),detailMajor:(e,t)=>j.post("/major/detail/"+e,t),listMajor:e=>j.post("/major/list",e),listNoPageMajor:e=>j.post("/major/listNoPage",e),addSubject:e=>j.post("/subject/add",e),deleteSubject:e=>j.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>j.post("/subject/update/"+e,t),detailSubject:(e,t)=>j.post("/subject/detail/"+e,t),listSubject:e=>j.post("/subject/list",e),listNoPageSubject:e=>j.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>j.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>j.post("/knowledgeCatalog/delete",{ids:e}),deleteTreeKnowledgeCatalog:e=>j.post("/knowledgeCatalog/deleteTree",{ids:e}),updateKnowledgeCatalog:(e,t)=>j.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>j.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>j.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>j.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>j.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>j.post("/knowledge/add",e),deleteKnowledge:e=>j.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>j.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>j.post("/knowledge/detail/"+e,t),listKnowledge:e=>j.post("/knowledge/list",e),listNoPageKnowledge:e=>j.post("/knowledge/listNoPage",e)}},8017:(e,t,a)=>{"use strict";function o(e=!1){e=Boolean(e);let t=window.localStorage,a=window.sessionStorage,o=e?t:a;return{get:e=>o.getItem(e),set:(e,s)=>{t.removeItem(e),a.removeItem(e),o.setItem(e,s)},remove:e=>{t.removeItem(e),a.removeItem(e)},clear:()=>{t.clear(),a.clear()}}}function s(e,t=!1){o(!0).set("rememberMe",t),o(t).set("token",e)}function l(){let e="true"===o(!0).get("rememberMe");return o(e).get("token")}function r(){let e="true"===o(!0).get("rememberMe");o(e).remove("token")}a.d(t,{LP:()=>l,gy:()=>r,o4:()=>s})},1241:(e,t,a)=>{"use strict";function o(e){for(let t in e)e[t]=e[t].toString().trim();return e}a.d(t,{mG:()=>o})},7227:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var o=function(){var e=this,t=e._self._c;return t("div",[t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{name:"专业",label:"专业",placeholder:"专业",rules:[{required:!0,message:"请填写专业"}]},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}}),e._v(" "),t("van-field",{attrs:{name:"专业代号",label:"专业代号",placeholder:"专业代号",rules:[{required:!0,message:"请填写专业代号"}]},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}}),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"danger"},on:{click:e.onDeleteMajor}},[e._v("删除")])],1)],1)};o._withStripped=!0;var s=a(4148),l=a(1241);const r={data:()=>({formData:{title:"",code:""}}),computed:{major_id(){return this.$route.query.id}},async mounted(){let e=await s.Z.detailMajor(this.major_id),{formData:t}=this;t.title=e.data.title,t.code=e.data.code,this.formData={...t}},methods:{onSubmit(){s.Z.updateMajor(this.major_id,(0,l.mG)(this.formData)).then((()=>{this.$toast.success({message:"更新成功",onClose:()=>this.$router.back()})}))},onDeleteMajor(){this.$dialog.confirm({message:"确认删除"}).then((()=>{s.Z.deleteMajor([this.major_id]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.$router.back()})}))}))}}},i=(0,a(1900).Z)(r,o,[],!1,null,null,null).exports},2480:()=>{}}]);