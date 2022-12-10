(self.webpackChunkfront=self.webpackChunkfront||[]).push([[995],{4148:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var o=a(6161),s=a(7608),l=a(5680),r=a(8017),n=a(8159),d=a(1406);let i=0;const u=e=>{let t=g({...e}),a=m(t.config);n.Z.commit("addCache",{[a]:t})};function g(e){let t;if(e instanceof Array)t=e.map((e=>g(e)));else if(e instanceof Set){t=new Set;for(let a of e)t.add(g(a))}else if(e instanceof Map){t=new Map;for(let[a,o]of e)t.set(g(a),g(o))}else if(e instanceof Object){t={};for(let a in e)t[a]=g(e[a])}else t=e;return t}function m(e){let t=(0,d.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let c=0;const p=()=>{c&&clearTimeout(c),c=setTimeout((()=>{n.Z.commit("hidePageLoading")}),500)},f=p;let w="";w="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const b=o.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});b.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,r.LP)();return e.headers.Authorization="Bearer "+t,n.Z.commit("showPageLoading"),(e=>{i||(i=setTimeout((()=>{n.Z.commit("clearCache"),i=0}),18e5));let t=m(e);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/");n.Z.commit("removeCache",e[0])}let a=n.Z.state.cache[t];return a?Promise.reject(a):e})(e)}),(e=>(l.Z.fail({message:e.message}),Promise.reject(e)))),b.interceptors.response.use((e=>(p(),u(e),e.data.data)),(e=>{if(f(),e instanceof Error){let t=e.response;return t?401===t.status?l.Z.fail({message:t.statusText,onClose:()=>s.Z.push("/mobile/login")}):t.data.message?l.Z.fail({message:t.data.message}):l.Z.fail({message:t.statusText}):l.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const j=b,h={userRegister:e=>j.post("/user/register",e),getUserInfo:e=>j.get("/user/getUserInfo/"+e),userLogin:e=>j.post("/user/login",e),addMajor:e=>j.post("/major/add",e),deleteMajor:e=>j.post("/major/delete",{ids:e}),updateMajor:(e,t)=>j.post("/major/update/"+e,t),detailMajor:(e,t)=>j.post("/major/detail/"+e,t),listMajor:e=>j.post("/major/list",e),listNoPageMajor:e=>j.post("/major/listNoPage",e),addSubject:e=>j.post("/subject/add",e),deleteSubject:e=>j.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>j.post("/subject/update/"+e,t),detailSubject:(e,t)=>j.post("/subject/detail/"+e,t),listSubject:e=>j.post("/subject/list",e),listNoPageSubject:e=>j.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>j.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>j.post("/knowledgeCatalog/delete",{ids:e}),deleteTreeKnowledgeCatalog:e=>j.post("/knowledgeCatalog/deleteTree",{ids:e}),updateKnowledgeCatalog:(e,t)=>j.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>j.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>j.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>j.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>j.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>j.post("/knowledge/add",e),deleteKnowledge:e=>j.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>j.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>j.post("/knowledge/detail/"+e,t),listKnowledge:e=>j.post("/knowledge/list",e),listNoPageKnowledge:e=>j.post("/knowledge/listNoPage",e)}},8017:(e,t,a)=>{"use strict";function o(e=!1){e=Boolean(e);let t=window.localStorage,a=window.sessionStorage,o=e?t:a;return{get:e=>o.getItem(e),set:(e,s)=>{t.removeItem(e),a.removeItem(e),o.setItem(e,s)},remove:e=>{t.removeItem(e),a.removeItem(e)},clear:()=>{t.clear(),a.clear()}}}function s(e,t=!1){o(!0).set("rememberMe",t),o(t).set("token",e)}function l(){let e="true"===o(!0).get("rememberMe");return o(e).get("token")}function r(){let e="true"===o(!0).get("rememberMe");o(e).remove("token")}a.d(t,{LP:()=>l,gy:()=>r,o4:()=>s})},3141:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var o=function(){var e=this,t=e._self._c;return t("div",[t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{autocomplete:"username",name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.formData.uname,callback:function(t){e.$set(e.formData,"uname",t)},expression:"formData.uname"}}),e._v(" "),t("van-field",{attrs:{type:"password",autocomplete:"current-password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.formData.upswd,callback:function(t){e.$set(e.formData,"upswd",t)},expression:"formData.upswd"}}),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("登录")])],1)],1)],1)};o._withStripped=!0;var s=a(4148),l=a(8017),r=a(1406);const n={data:()=>({formData:{uname:"",upswd:""}}),methods:{onSubmit(){this.formData.upswd=(0,r.MD5)(this.formData.upswd).toString(),s.Z.userLogin(this.formData).then((e=>{(0,l.o4)(e.token,!0),this.$store.commit("updateUserInfo",e.user),this.$toast.success({message:"登录成功",onClose:()=>this.$router.push("/mobile/home")})}))}}},d=(0,a(1900).Z)(n,o,[],!1,null,null,null).exports},2480:()=>{}}]);