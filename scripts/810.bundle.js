(self.webpackChunkfront=self.webpackChunkfront||[]).push([[810],{4148:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var o=a(6161),s=a(7608),i=a(5680),l=a(8017),r=a(8159),n=a(1406);let d=0;const u=e=>{let t=c({...e}),a=m(t.config);r.Z.commit("addCache",{[a]:t})};function c(e){let t;if(e instanceof Array)t=e.map((e=>c(e)));else if(e instanceof Set){t=new Set;for(let a of e)t.add(c(a))}else if(e instanceof Map){t=new Map;for(let[a,o]of e)t.set(c(a),c(o))}else if(e instanceof Object){t={};for(let a in e)t[a]=c(e[a])}else t=e;return t}function m(e){let t=(0,n.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let g=0;const p=()=>{g&&clearTimeout(g),g=setTimeout((()=>{r.Z.commit("hidePageLoading")}),500)},f=p;let j="";j="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const b=o.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});b.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,l.LP)();return e.headers.Authorization="Bearer "+t,r.Z.commit("showPageLoading"),(e=>{d||(d=setTimeout((()=>{r.Z.commit("clearCache"),d=0}),18e5));let t=m(e);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/");r.Z.commit("removeCache",e[0])}let a=r.Z.state.cache[t];return a?Promise.reject(a):e})(e)}),(e=>(i.Z.fail({message:e.message}),Promise.reject(e)))),b.interceptors.response.use((e=>(p(),u(e),e.data.data)),(e=>{if(f(),e instanceof Error){let t=e.response;return t?401===t.status?i.Z.fail({message:t.statusText,onClose:()=>s.Z.push("/mobile/login")}):t.data.message?i.Z.fail({message:t.data.message}):i.Z.fail({message:t.statusText}):i.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const w=b,h={userRegister:e=>w.post("/user/register",e),updateUser:(e,t)=>w.post("/user/update/"+e,t),getUserInfo:e=>w.get("/user/getUserInfo/"+e),userLogin:e=>w.post("/user/login",e),addMajor:e=>w.post("/major/add",e),deleteMajor:e=>w.post("/major/delete",{ids:e}),updateMajor:(e,t)=>w.post("/major/update/"+e,t),detailMajor:(e,t)=>w.post("/major/detail/"+e,t),listMajor:e=>w.post("/major/list",e),listNoPageMajor:e=>w.post("/major/listNoPage",e),addSubject:e=>w.post("/subject/add",e),deleteSubject:e=>w.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>w.post("/subject/update/"+e,t),detailSubject:(e,t)=>w.post("/subject/detail/"+e,t),listSubject:e=>w.post("/subject/list",e),listNoPageSubject:e=>w.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>w.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>w.post("/knowledgeCatalog/delete",{ids:e}),deleteTreeKnowledgeCatalog:e=>w.post("/knowledgeCatalog/deleteTree",{ids:e}),updateKnowledgeCatalog:(e,t)=>w.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>w.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>w.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>w.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>w.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>w.post("/knowledge/add",e),deleteKnowledge:e=>w.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>w.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>w.post("/knowledge/detail/"+e,t),listKnowledge:e=>w.post("/knowledge/list",e),listNoPageKnowledge:e=>w.post("/knowledge/listNoPage",e)}},8017:(e,t,a)=>{"use strict";function o(e=!1){e=Boolean(e);let t=window.localStorage,a=window.sessionStorage,o=e?t:a;return{get:e=>o.getItem(e),set:(e,s)=>{t.removeItem(e),a.removeItem(e),o.setItem(e,s)},remove:e=>{t.removeItem(e),a.removeItem(e)},clear:()=>{t.clear(),a.clear()}}}function s(e,t=!1){o(!0).set("rememberMe",t),o(t).set("token",e)}function i(){let e="true"===o(!0).get("rememberMe");return o(e).get("token")}function l(){let e="true"===o(!0).get("rememberMe");o(e).remove("token")}a.d(t,{LP:()=>i,gy:()=>l,o4:()=>s})},1241:(e,t,a)=>{"use strict";function o(e){for(let t in e)e[t]=e[t].toString().trim();return e}a.d(t,{mG:()=>o})},7885:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var o=function(){var e=this,t=e._self._c;return t("div",[t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{value:e.majorList[e.majorListIndex]?.title,readonly:"","is-link":"",label:"专业",placeholder:"请选择专业"},on:{click:function(t){e.majorPopupVisible=!0}}}),e._v(" "),t("van-field",{attrs:{name:"科目",label:"科目",placeholder:"科目",rules:[{required:!0,message:"请填写科目"}]},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}}),e._v(" "),t("van-field",{attrs:{name:"科目代号",label:"科目代号",placeholder:"科目代号",rules:[{required:!0,message:"请填写科目代号"}]},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}}),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"danger"},on:{click:e.onDeleteSubject}},[e._v("删除")])],1),e._v(" "),t("van-popup",{attrs:{position:"bottom"},model:{value:e.majorPopupVisible,callback:function(t){e.majorPopupVisible=t},expression:"majorPopupVisible"}},[t("van-picker",{attrs:{title:"选择专业","show-toolbar":"","value-key":"title","default-index":e.majorListIndex,columns:e.majorList},on:{confirm:e.onMajorConfirm,cancel:function(t){e.majorPopupVisible=!1}}})],1)],1)};o._withStripped=!0;var s=a(4148),i=a(1241);const l={data:()=>({formData:{title:"",code:"",major_id:""},majorPopupVisible:!1,majorList:[],majorListIndex:-1}),computed:{subject_id(){return this.$route.query.id}},async mounted(){let e=(await s.Z.listNoPageMajor()).list?.map((e=>({...e,_title:e.title,_code:e.code,title:e.code?`${e.title}(${e.code})`:e.title})));this.majorList=e;let t=await s.Z.detailSubject(this.subject_id),{formData:a}=this;a.title=t.data.title,a.code=t.data.code,a.major_id=t.data.major_id,this.formData={...a};let o=e.findIndex((e=>e.major_id===t.data.major_id));this.majorListIndex=o},methods:{onSubmit(){this.formData.major_id=this.majorList[this.majorListIndex]?.major_id,s.Z.updateSubject(this.subject_id,(0,i.mG)(this.formData)).then((()=>{this.$toast.success({message:"更新成功",onClose:()=>this.$router.back()})}))},onDeleteSubject(){this.$dialog.confirm({message:"确认删除"}).then((()=>{s.Z.deleteSubject([this.subject_id]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.$router.back()})}))}))},onMajorConfirm(e,t){this.majorListIndex=t,this.majorPopupVisible=!1}}},r=(0,a(1900).Z)(l,o,[],!1,null,null,null).exports},2480:()=>{}}]);