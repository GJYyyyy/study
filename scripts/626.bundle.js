(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[626],{2111:(e,t,o)=>{"use strict";o.d(t,{Z:()=>T});var a=o(6161),s=o(6278),l=o(5680),n=o(8017),i=o(8159),r=o(1406),d=o(1241);let g=0;function c(e){let t=(0,r.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let u=0;const m=()=>{u&&clearTimeout(u),u=setTimeout((()=>{i.Z.commit("hidePageLoading")}),200)},p=m;let w="";w="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const f=a.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});f.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,n.LP)();return e.headers.Authorization="Bearer "+t,i.Z.commit("showPageLoading"),(e=>{g||(g=setTimeout((()=>{i.Z.commit("clearCache"),g=0}),18e5));let t=c(e),o=new Map([["knowledgeCollection",new Set(["knowledgeCollection","knowledge"])]]);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/")[0];o.has(e)?o.get(e).forEach((e=>i.Z.commit("removeCache",e))):i.Z.commit("removeCache",e)}let a=i.Z.state.cache[t];return a?Promise.reject(a):e})(e)}),(e=>(l.Z.fail({message:e.message}),Promise.reject(e)))),f.interceptors.response.use((e=>(m(),(e=>{let t={...e},o=(0,d.aJ)(t),a=c(o.config);i.Z.commit("addCache",{[a]:o})})(e),e.data.data)),(e=>{if(p(),e instanceof Error){let t=e.response;return t?401===t.status?l.Z.fail({message:t.statusText,onClose:()=>s.Z.push("/mobile/login")}):t.data.message?l.Z.fail({message:t.data.message}):l.Z.fail({message:t.statusText}):l.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const k=f,h=function(e,t={}){let o="/"+e,a=e.replace(/^\w/,e[0].toUpperCase()),s={["add"+a]:e=>k.post(o+"/add",e),["delete"+a]:e=>k.post(o+"/delete",{ids:e}),["update"+a]:(e,t)=>k.post(o+"/update/"+e,t),["detail"+a]:(e,t)=>k.post(o+"/detail/"+e,t),["list"+a]:e=>k.post(o+"/list",e)};return Object.assign({},s,t)},C="user",b=(C.replace(/^\w/,C[0].toUpperCase()),h(C,{userRegister:e=>k.post("/user/register",e),getUserInfo:e=>k.get("/user/getUserInfo/"+e),userLogin:e=>k.post("/user/login",e)})),v="major",P=v.replace(/^\w/,v[0].toUpperCase()),Z=h(v,{["listNoPage"+P]:e=>k.post("/major/listNoPage",e)}),x="subject",y=x.replace(/^\w/,x[0].toUpperCase()),L=h(x,{["listNoPage"+y]:e=>k.post("/subject/listNoPage",e)}),I="knowledgeCatalog",_=I.replace(/^\w/,I[0].toUpperCase()),j=h(I,{["deleteTree"+_]:e=>k.post("/knowledgeCatalog/deleteTree",{ids:e}),["listNoPage"+_]:e=>k.post("/knowledgeCatalog/listNoPage",e),["listTree"+_]:e=>k.post("/knowledgeCatalog/listTree",e)}),N="knowledge",U=N.replace(/^\w/,N[0].toUpperCase()),S=h(N,{["listNoPage"+U]:e=>k.post("/knowledge/listNoPage",e),["listRandom"+U]:e=>k.post("/knowledge/listRandom",e)}),D="knowledgeCollection",M=D.replace(/^\w/,D[0].toUpperCase()),T={...b,...Z,...L,...j,...S,...h(D,{["list"+M]:e=>k.post("/knowledgeCollection/list",e),["listNoPage"+M]:e=>k.post("/knowledgeCollection/listNoPage",e)})}},8017:(e,t,o)=>{"use strict";function a(e=!1){e=Boolean(e);let t=window.localStorage,o=window.sessionStorage,a=e?t:o;return{get:e=>a.getItem(e),set:(e,s)=>{t.removeItem(e),o.removeItem(e),a.setItem(e,s)},remove:e=>{t.removeItem(e),o.removeItem(e)},clear:()=>{t.clear(),o.clear()}}}function s(e,t=!1){a(!0).set("rememberMe",t),a(t).set("token",e)}function l(){let e="true"===a(!0).get("rememberMe");return a(e).get("token")}function n(){let e="true"===a(!0).get("rememberMe");a(e).remove("token")}o.d(t,{LP:()=>l,gy:()=>n,o4:()=>s})},4827:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var a=function(){var e=this,t=e._self._c;return t("div",[t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{value:e.knowledgeCatalogList[e.knowledgeCatalogListIndex]?.title,readonly:"","is-link":"",label:"知识点目录",placeholder:"请选择知识点目录",rules:[{required:!0,message:"请选择知识点目录"}]},on:{click:e.onMajorPopupShow}}),e._v(" "),t("van-field",{attrs:{name:"标题",label:"标题",placeholder:"标题",rules:[{required:!0,message:"请填写标题"}]},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}}),e._v(" "),t("van-field",{attrs:{label:"内容",readonly:""}}),e._v(" "),e.defaultContent?t("custome-markdown-editor",{attrs:{value:e.defaultContent},on:{change:e.onMarkdownChange}}):e._e(),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info",size:"small","native-type":"submit"}},[e._v("提交")])],1)],1),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"danger",size:"small"},on:{click:e.onDeleteKnowledge}},[e._v("删除")])],1),e._v(" "),t("van-popup",{attrs:{position:"bottom"},model:{value:e.knowledgeCatalogPopupVisible,callback:function(t){e.knowledgeCatalogPopupVisible=t},expression:"knowledgeCatalogPopupVisible"}},[t("van-picker",{attrs:{title:"选择知识点目录","show-toolbar":"","value-key":"title","default-index":e.knowledgeCatalogListIndex,columns:e.knowledgeCatalogList},on:{confirm:e.onMajorConfirm,cancel:function(t){e.knowledgeCatalogPopupVisible=!1}}})],1)],1)};a._withStripped=!0;var s=o(2111),l=o(1241),n=o(2202);const i="knowledge_catalog_id",r={components:{"custome-markdown-editor":n.NW},data:()=>({formData:{title:"",content:"",[i]:""},defaultContent:"",knowledgeCatalogPopupVisible:!1,knowledgeCatalogList:[],knowledgeCatalogListIndex:-1}),computed:{knowledge_id(){return this.$route.query.id}},async mounted(){let e=(await s.Z.listNoPageKnowledgeCatalog()).list;this.knowledgeCatalogList=e;let t=await s.Z.detailKnowledge(this.knowledge_id),o=decodeURIComponent(t.data.content)||" ",{formData:a}=this;a.title=t.data.title,a.content=o,a[i]=t.data[i],this.formData={...a},this.defaultContent=o;let l=e.findIndex((e=>e[i]===t.data[i]));this.knowledgeCatalogListIndex=l},methods:{onSubmit(){let e={...this.formData};e[i]=this.knowledgeCatalogList[this.knowledgeCatalogListIndex]?.[i],e.content=encodeURIComponent(e.content),s.Z.updateKnowledge(this.knowledge_id,(0,l.mG)(e)).then((()=>{this.$toast.success({message:"更新成功",onClose:()=>this.$router.back()})}))},onDeleteKnowledge(){this.$dialog.confirm({message:"确认删除"}).then((()=>{s.Z.deleteKnowledge([this.knowledge_id]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.$router.back()})}))}))},onMajorPopupShow(){this.formData[i]&&-1!==this.knowledgeCatalogListIndex?this.$toast({message:"已指定父级，不能修改"}):this.knowledgeCatalogPopupVisible=!0},onMajorConfirm(e,t){this.knowledgeCatalogListIndex=t,this.knowledgeCatalogPopupVisible=!1},onMarkdownChange(e){let{formData:t}=this;t.content=e}}},d=(0,o(1900).Z)(r,a,[],!1,null,null,null).exports},2480:()=>{}}]);