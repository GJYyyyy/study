(self.webpackChunkfront=self.webpackChunkfront||[]).push([[367],{4148:(e,t,o)=>{"use strict";o.d(t,{Z:()=>h});var s=o(6161),a=o(7608),l=o(3133),r=o(8017),n=o(8159),d=o(1406);let i=0;const u=e=>{let t=g({...e}),o=c(t.config);n.Z.commit("addCache",{[o]:t})};function g(e){let t;if(e instanceof Array)t=e.map((e=>g(e)));else if(e instanceof Set){t=new Set;for(let o of e)t.add(g(o))}else if(e instanceof Map){t=new Map;for(let[o,s]of e)t.set(g(o),g(s))}else if(e instanceof Object){t={};for(let o in e)t[o]=g(e[o])}else t=e;return t}function c(e){return(0,d.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString()}let p=0;const m=()=>{p&&clearTimeout(p),p=setTimeout((()=>{n.Z.commit("hidePageLoading")}),500)},w=m;let f="";f="https://kmcuxdinotk5fxcb64hevtvedq0ensrn.lambda-url.us-east-1.on.aws";const j=s.Z.create({baseURL:"https://kmcuxdinotk5fxcb64hevtvedq0ensrn.lambda-url.us-east-1.on.aws/api",timeout:1e4});j.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,r.LP)();return e.headers.Authorization="Bearer "+t,n.Z.commit("showPageLoading"),(e=>{i||(i=setTimeout((()=>{n.Z.commit("clearCache"),i=0}),3e5)),new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)&&n.Z.commit("clearCache");let t=c(e),o=n.Z.state.cache[t];return o?Promise.reject(o):e})(e)}),(e=>((0,l.t5)(e.message,"warning"),Promise.reject(e)))),j.interceptors.response.use((e=>(m(),u(e),e.data.data)),(e=>{if(w(),e instanceof Error){let t=e.response;return 401===t.status?(0,l.t5)(t.statusText,"warning",(()=>a.Z.push("/mobile/login"))):t.data.message?(0,l.t5)(t.data.message,"warning"):(0,l.t5)(t.statusText,"warning"),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const b=j,h={userRegister:e=>b.post("/user/register",e),deleteUser:e=>b.post("/user/delete",{ids:e}),updateUser:(e,t)=>b.post("/user/update/"+e,t),detailUser:(e,t)=>b.post("/user/detail/"+e,t),listUser:e=>b.post("/user/list",e),listNoPageUser:e=>b.post("/user/listNoPage",e),userLogin:e=>b.post("/user/login",e),addMajor:e=>b.post("/major/add",e),deleteMajor:e=>b.post("/major/delete",{ids:e}),updateMajor:(e,t)=>b.post("/major/update/"+e,t),detailMajor:(e,t)=>b.post("/major/detail/"+e,t),listMajor:e=>b.post("/major/list",e),listNoPageMajor:e=>b.post("/major/listNoPage",e),addSubject:e=>b.post("/subject/add",e),deleteSubject:e=>b.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>b.post("/subject/update/"+e,t),detailSubject:(e,t)=>b.post("/subject/detail/"+e,t),listSubject:e=>b.post("/subject/list",e),listNoPageSubject:e=>b.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>b.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>b.post("/knowledgeCatalog/delete",{ids:e}),updateKnowledgeCatalog:(e,t)=>b.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>b.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>b.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>b.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>b.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>b.post("/knowledge/add",e),deleteKnowledge:e=>b.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>b.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>b.post("/knowledge/detail/"+e,t),listKnowledge:e=>b.post("/knowledge/list",e),listNoPageKnowledge:e=>b.post("/knowledge/listNoPage",e)}},8017:(e,t,o)=>{"use strict";function s(e=!1){e=Boolean(e);let t=window.localStorage,o=window.sessionStorage,s=e?t:o;return{get:e=>s.getItem(e),set:(e,a)=>{t.removeItem(e),o.removeItem(e),s.setItem(e,a)},remove:e=>{t.removeItem(e),o.removeItem(e)},clear:()=>{t.clear(),o.clear()}}}function a(e,t=!1){s(!0).set("rememberMe",t),s(t).set("token",e)}function l(){let e="true"===s(!0).get("rememberMe");return s(e).get("token")}function r(){let e="true"===s(!0).get("rememberMe");s(e).remove("token")}o.d(t,{LP:()=>l,gy:()=>r,o4:()=>a})},8630:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});var s=function(){return this._self._c,this._m(0)};s._withStripped=!0;var a=o(4148);const l={mounted(){a.Z.listUser().then((e=>{console.debug(e)}))}},r=(0,o(1900).Z)(l,s,[function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v("首页")]),e._v(" "),t("p",[e._v("错题、易忘点快捷方式")])])}],!1,null,null,null).exports},2480:()=>{}}]);