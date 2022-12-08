(self.webpackChunkfront=self.webpackChunkfront||[]).push([[167],{4148:(e,t,o)=>{"use strict";o.d(t,{Z:()=>v});var s=o(6161),a=o(7608),i=o(3133),r=o(8017),n=o(8159),l=o(1406);let d=0;const u=e=>{let t=c({...e}),o=p(t.config);n.Z.commit("addCache",{[o]:t})};function c(e){let t;if(e instanceof Array)t=e.map((e=>c(e)));else if(e instanceof Set){t=new Set;for(let o of e)t.add(c(o))}else if(e instanceof Map){t=new Map;for(let[o,s]of e)t.set(c(o),c(s))}else if(e instanceof Object){t={};for(let o in e)t[o]=c(e[o])}else t=e;return t}function p(e){return(0,l.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString()}let m=0;const g=()=>{m&&clearTimeout(m),m=setTimeout((()=>{n.Z.commit("hidePageLoading")}),500)},j=g;let b="";b="https://kmcuxdinotk5fxcb64hevtvedq0ensrn.lambda-url.us-east-1.on.aws";const f=s.Z.create({baseURL:"https://kmcuxdinotk5fxcb64hevtvedq0ensrn.lambda-url.us-east-1.on.aws/api",timeout:1e4});f.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,r.LP)();return e.headers.Authorization="Bearer "+t,n.Z.commit("showPageLoading"),(e=>{d||(d=setTimeout((()=>{n.Z.commit("clearCache"),d=0}),3e5)),new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)&&n.Z.commit("clearCache");let t=p(e),o=n.Z.state.cache[t];return o?Promise.reject(o):e})(e)}),(e=>((0,i.t5)(e.message,"warning"),Promise.reject(e)))),f.interceptors.response.use((e=>(g(),u(e),e.data.data)),(e=>{if(j(),e instanceof Error){let t=e.response;return 401===t.status?(0,i.t5)(t.statusText,"warning",(()=>a.Z.push("/mobile/login"))):t.data.message?(0,i.t5)(t.data.message,"warning"):(0,i.t5)(t.statusText,"warning"),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const h=f,v={userRegister:e=>h.post("/user/register",e),deleteUser:e=>h.post("/user/delete",{ids:e}),updateUser:(e,t)=>h.post("/user/update/"+e,t),detailUser:(e,t)=>h.post("/user/detail/"+e,t),listUser:e=>h.post("/user/list",e),listNoPageUser:e=>h.post("/user/listNoPage",e),userLogin:e=>h.post("/user/login",e),addMajor:e=>h.post("/major/add",e),deleteMajor:e=>h.post("/major/delete",{ids:e}),updateMajor:(e,t)=>h.post("/major/update/"+e,t),detailMajor:(e,t)=>h.post("/major/detail/"+e,t),listMajor:e=>h.post("/major/list",e),listNoPageMajor:e=>h.post("/major/listNoPage",e),addSubject:e=>h.post("/subject/add",e),deleteSubject:e=>h.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>h.post("/subject/update/"+e,t),detailSubject:(e,t)=>h.post("/subject/detail/"+e,t),listSubject:e=>h.post("/subject/list",e),listNoPageSubject:e=>h.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>h.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>h.post("/knowledgeCatalog/delete",{ids:e}),updateKnowledgeCatalog:(e,t)=>h.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>h.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>h.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>h.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>h.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>h.post("/knowledge/add",e),deleteKnowledge:e=>h.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>h.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>h.post("/knowledge/detail/"+e,t),listKnowledge:e=>h.post("/knowledge/list",e),listNoPageKnowledge:e=>h.post("/knowledge/listNoPage",e)}},8017:(e,t,o)=>{"use strict";function s(e=!1){e=Boolean(e);let t=window.localStorage,o=window.sessionStorage,s=e?t:o;return{get:e=>s.getItem(e),set:(e,a)=>{t.removeItem(e),o.removeItem(e),s.setItem(e,a)},remove:e=>{t.removeItem(e),o.removeItem(e)},clear:()=>{t.clear(),o.clear()}}}function a(e,t=!1){s(!0).set("rememberMe",t),s(t).set("token",e)}function i(){let e="true"===s(!0).get("rememberMe");return s(e).get("token")}function r(){let e="true"===s(!0).get("rememberMe");s(e).remove("token")}o.d(t,{LP:()=>i,gy:()=>r,o4:()=>a})},6645:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n});var s=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"col-center",staticStyle:{padding:"16px"}},[t("van-icon",{attrs:{name:"manager-o",size:"60"}}),e._v(" "),t("b",{staticStyle:{"margin-left":"16px","font-size":"18px"}},[e._v(e._s(e.userInfo.uname))])],1),e._v(" "),t("van-form",{on:{submit:e.onUpdateUser}},[t("van-field",{attrs:{readonly:"","is-link":"",value:e.majorList[e.majorListIndex]?.title,label:"当前选中专业",placeholder:"请选择",rules:[{required:!0,message:"请选择专业"}]},on:{click:function(t){e.majorPopupVisible=!0}}}),e._v(" "),t("van-field",{attrs:{readonly:"","is-link":"",value:e.subjectList[e.subjectListIndex]?.title,label:"当前选中科目",placeholder:"请选择",rules:[{required:!0,message:"请选择科目"}]},on:{click:function(t){e.subjectPopupVisible=!0}}}),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("修改")])],1),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"danger"},on:{click:e.onLogout}},[e._v("退出登录")])],1)],1),e._v(" "),t("van-popup",{attrs:{position:"bottom"},model:{value:e.majorPopupVisible,callback:function(t){e.majorPopupVisible=t},expression:"majorPopupVisible"}},[t("van-picker",{attrs:{title:"选择专业","show-toolbar":"","value-key":"title","default-index":e.majorListIndex,columns:e.majorList},on:{confirm:e.onMajorConfirm,cancel:function(t){e.majorPopupVisible=!1}}})],1),e._v(" "),t("van-popup",{attrs:{position:"bottom"},model:{value:e.subjectPopupVisible,callback:function(t){e.subjectPopupVisible=t},expression:"subjectPopupVisible"}},[t("van-picker",{attrs:{title:"选择科目","show-toolbar":"","value-key":"title","default-index":e.subjectListIndex,columns:e.subjectList},on:{confirm:e.onSubjectConfirm,cancel:function(t){e.subjectPopupVisible=!1}}})],1)],1)};s._withStripped=!0;var a=o(4148),i=o(8017);const r={data:()=>({formData:{major_id:"",subject_id:""},majorPopupVisible:!1,majorList:[],majorListIndex:-1,subjectPopupVisible:!1,subjectList:[],subjectListIndex:-1}),computed:{userInfo(){return this.$store.state.userInfo}},beforeMount(){let{formData:e,userInfo:t}=this;e.major_id=t.major_id,e.subject_id=t.subject_id,this.formData={...e}},mounted(){a.Z.listMajor().then((e=>{let t=e.list?.map((e=>({...e,_title:e.title,_code:e.code,title:e.code?`${e.title}(${e.code})`:e.title}))),o=t.findIndex((e=>e.major_id===this.userInfo.major_id));this.majorList=t,this.majorListIndex=o}))},methods:{onLogout(){(0,i.gy)(),this.$store.commit("clearUserInfo"),this.$store.commit("clearCache"),this.$router.push("/mobile/login")},onUpdateUser(){this.formData.major_id=this.majorList[this.majorListIndex].major_id,this.formData.subject_id=this.subjectList[this.subjectListIndex].subject_id,a.Z.updateUser(this.userInfo.user_id,this.formData).then((e=>{this.$notify("更新成功","success",(()=>this.$router.go(0)))}))},onMajorConfirm(e,t){this.majorListIndex=t,this.majorPopupVisible=!1},onSubjectConfirm(e,t){this.subjectListIndex=t,this.subjectPopupVisible=!1}}},n=(0,o(1900).Z)(r,s,[],!1,null,null,null).exports},2480:()=>{}}]);