(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[882],{4148:(e,t,o)=>{"use strict";o.d(t,{Z:()=>h});var a=o(6161),s=o(7608),l=o(5680),n=o(8017),i=o(8159),d=o(1406),r=o(1241);let g=0;function u(e){let t=(0,d.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let c=0;const m=()=>{c&&clearTimeout(c),c=setTimeout((()=>{i.Z.commit("hidePageLoading")}),500)},p=m;let w="";w="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const k=a.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});k.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,n.LP)();return e.headers.Authorization="Bearer "+t,i.Z.commit("showPageLoading"),(e=>{g||(g=setTimeout((()=>{i.Z.commit("clearCache"),g=0}),18e5));let t=u(e);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/");i.Z.commit("removeCache",e[0])}let o=i.Z.state.cache[t];return o?Promise.reject(o):e})(e)}),(e=>(l.Z.fail({message:e.message}),Promise.reject(e)))),k.interceptors.response.use((e=>(m(),(e=>{let t={...e},o=(0,r.aJ)(t),a=u(o.config);i.Z.commit("addCache",{[a]:o})})(e),e.data.data)),(e=>{if(p(),e instanceof Error){let t=e.response;return t?401===t.status?l.Z.fail({message:t.statusText,onClose:()=>s.Z.push("/mobile/login")}):t.data.message?l.Z.fail({message:t.data.message}):l.Z.fail({message:t.statusText}):l.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const f=k,h={userRegister:e=>f.post("/user/register",e),updateUser:(e,t)=>f.post("/user/update/"+e,t),getUserInfo:e=>f.get("/user/getUserInfo/"+e),userLogin:e=>f.post("/user/login",e),addMajor:e=>f.post("/major/add",e),deleteMajor:e=>f.post("/major/delete",{ids:e}),updateMajor:(e,t)=>f.post("/major/update/"+e,t),detailMajor:(e,t)=>f.post("/major/detail/"+e,t),listMajor:e=>f.post("/major/list",e),listNoPageMajor:e=>f.post("/major/listNoPage",e),addSubject:e=>f.post("/subject/add",e),deleteSubject:e=>f.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>f.post("/subject/update/"+e,t),detailSubject:(e,t)=>f.post("/subject/detail/"+e,t),listSubject:e=>f.post("/subject/list",e),listNoPageSubject:e=>f.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>f.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>f.post("/knowledgeCatalog/delete",{ids:e}),deleteTreeKnowledgeCatalog:e=>f.post("/knowledgeCatalog/deleteTree",{ids:e}),updateKnowledgeCatalog:(e,t)=>f.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>f.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>f.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>f.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>f.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>f.post("/knowledge/add",e),deleteKnowledge:e=>f.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>f.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>f.post("/knowledge/detail/"+e,t),listKnowledge:e=>f.post("/knowledge/list",e),listNoPageKnowledge:e=>f.post("/knowledge/listNoPage",e)}},8017:(e,t,o)=>{"use strict";function a(e=!1){e=Boolean(e);let t=window.localStorage,o=window.sessionStorage,a=e?t:o;return{get:e=>a.getItem(e),set:(e,s)=>{t.removeItem(e),o.removeItem(e),a.setItem(e,s)},remove:e=>{t.removeItem(e),o.removeItem(e)},clear:()=>{t.clear(),o.clear()}}}function s(e,t=!1){a(!0).set("rememberMe",t),a(t).set("token",e)}function l(){let e="true"===a(!0).get("rememberMe");return a(e).get("token")}function n(){let e="true"===a(!0).get("rememberMe");a(e).remove("token")}o.d(t,{LP:()=>l,gy:()=>n,o4:()=>s})},2421:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});var a=function(){var e=this,t=e._self._c;return t("div",[t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{value:e.knowledgeCatalogList[e.knowledgeCatalogListIndex]?.title,readonly:"","is-link":"",label:"知识点目录",placeholder:"请选择知识点目录",rules:[{required:!0,message:"请选择知识点目录"}]},on:{click:e.onMajorPopupShow}}),e._v(" "),t("van-field",{attrs:{name:"标题",label:"标题",placeholder:"标题",rules:[{required:!0,message:"请填写标题"}]},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}}),e._v(" "),t("van-field",{attrs:{label:"内容",readonly:""}}),e._v(" "),t("custome-markdown-editor",{attrs:{value:e.formData.content},on:{change:e.onMarkdownChange}}),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"danger"},on:{click:e.onDeleteKnowledge}},[e._v("删除")])],1),e._v(" "),t("van-popup",{attrs:{position:"bottom"},model:{value:e.knowledgeCatalogPopupVisible,callback:function(t){e.knowledgeCatalogPopupVisible=t},expression:"knowledgeCatalogPopupVisible"}},[t("van-picker",{attrs:{title:"选择知识点目录","show-toolbar":"","value-key":"title","default-index":e.knowledgeCatalogListIndex,columns:e.knowledgeCatalogList},on:{confirm:e.onMajorConfirm,cancel:function(t){e.knowledgeCatalogPopupVisible=!1}}})],1)],1)};a._withStripped=!0;var s=o(4148),l=o(1241),n=o(83);const i="knowledge_catalog_id",d={components:{"custome-markdown-editor":n.NW},data:()=>({formData:{title:"",content:"null",[i]:""},knowledgeCatalogPopupVisible:!1,knowledgeCatalogList:[],knowledgeCatalogListIndex:-1}),computed:{knowledge_id(){return this.$route.query.id}},async mounted(){let e=(await s.Z.listNoPageKnowledgeCatalog()).list;this.knowledgeCatalogList=e;let t=await s.Z.detailKnowledge(this.knowledge_id),{formData:o}=this;o.title=t.data.title,o.content=decodeURIComponent(t.data.content),o[i]=t.data[i],this.formData={...o};let a=e.findIndex((e=>e[i]===t.data[i]));this.knowledgeCatalogListIndex=a},methods:{onSubmit(){this.formData[i]=this.knowledgeCatalogList[this.knowledgeCatalogListIndex]?.[i],this.formData.content=encodeURIComponent(this.formData.content),s.Z.updateKnowledge(this.knowledge_id,(0,l.mG)(this.formData)).then((()=>{this.$toast.success({message:"更新成功",onClose:()=>this.$router.back()})}))},onDeleteKnowledge(){this.$dialog.confirm({message:"确认删除"}).then((()=>{s.Z.deleteKnowledge([this.knowledge_id]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.$router.back()})}))}))},onMajorPopupShow(){this.formData[i]?this.$toast({message:"已指定父级，不能修改"}):this.knowledgeCatalogPopupVisible=!0},onMajorConfirm(e,t){this.knowledgeCatalogListIndex=t,this.knowledgeCatalogPopupVisible=!1},onMarkdownChange(e){let{formData:t}=this;t.content=e}}},r=(0,o(1900).Z)(d,a,[],!1,null,null,null).exports},2480:()=>{}}]);