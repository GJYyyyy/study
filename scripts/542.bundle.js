(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[542],{4148:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var o=a(6161),s=a(7608),i=a(5680),r=a(8017),l=a(8159),n=a(1406),d=a(1241);let u=0;function c(e){let t=(0,n.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let m=0;const g=()=>{m&&clearTimeout(m),m=setTimeout((()=>{l.Z.commit("hidePageLoading")}),500)},p=g;let f="";f="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const b=o.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});b.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,r.LP)();return e.headers.Authorization="Bearer "+t,l.Z.commit("showPageLoading"),(e=>{u||(u=setTimeout((()=>{l.Z.commit("clearCache"),u=0}),18e5));let t=c(e);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/");l.Z.commit("removeCache",e[0])}let a=l.Z.state.cache[t];return a?Promise.reject(a):e})(e)}),(e=>(i.Z.fail({message:e.message}),Promise.reject(e)))),b.interceptors.response.use((e=>(g(),(e=>{let t={...e},a=(0,d.aJ)(t),o=c(a.config);l.Z.commit("addCache",{[o]:a})})(e),e.data.data)),(e=>{if(p(),e instanceof Error){let t=e.response;return t?401===t.status?i.Z.fail({message:t.statusText,onClose:()=>s.Z.push("/mobile/login")}):t.data.message?i.Z.fail({message:t.data.message}):i.Z.fail({message:t.statusText}):i.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const j=b,h={userRegister:e=>j.post("/user/register",e),updateUser:(e,t)=>j.post("/user/update/"+e,t),getUserInfo:e=>j.get("/user/getUserInfo/"+e),userLogin:e=>j.post("/user/login",e),addMajor:e=>j.post("/major/add",e),deleteMajor:e=>j.post("/major/delete",{ids:e}),updateMajor:(e,t)=>j.post("/major/update/"+e,t),detailMajor:(e,t)=>j.post("/major/detail/"+e,t),listMajor:e=>j.post("/major/list",e),listNoPageMajor:e=>j.post("/major/listNoPage",e),addSubject:e=>j.post("/subject/add",e),deleteSubject:e=>j.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>j.post("/subject/update/"+e,t),detailSubject:(e,t)=>j.post("/subject/detail/"+e,t),listSubject:e=>j.post("/subject/list",e),listNoPageSubject:e=>j.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>j.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>j.post("/knowledgeCatalog/delete",{ids:e}),deleteTreeKnowledgeCatalog:e=>j.post("/knowledgeCatalog/deleteTree",{ids:e}),updateKnowledgeCatalog:(e,t)=>j.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>j.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>j.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>j.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>j.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>j.post("/knowledge/add",e),deleteKnowledge:e=>j.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>j.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>j.post("/knowledge/detail/"+e,t),listKnowledge:e=>j.post("/knowledge/list",e),listNoPageKnowledge:e=>j.post("/knowledge/listNoPage",e)}},8017:(e,t,a)=>{"use strict";function o(e=!1){e=Boolean(e);let t=window.localStorage,a=window.sessionStorage,o=e?t:a;return{get:e=>o.getItem(e),set:(e,s)=>{t.removeItem(e),a.removeItem(e),o.setItem(e,s)},remove:e=>{t.removeItem(e),a.removeItem(e)},clear:()=>{t.clear(),a.clear()}}}function s(e,t=!1){o(!0).set("rememberMe",t),o(t).set("token",e)}function i(){let e="true"===o(!0).get("rememberMe");return o(e).get("token")}function r(){let e="true"===o(!0).get("rememberMe");o(e).remove("token")}a.d(t,{LP:()=>i,gy:()=>r,o4:()=>s})},1241:(e,t,a)=>{"use strict";function o(e){for(let t in e)e[t]=e[t].toString().trim();return e}function s(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!1,o=0;o<t.length;o++)if(e.indexOf(t[o])>0){a=!0;break}var s=window.screen.width,i=window.screen.height;return s>325&&i<750&&(a=!0),a}function i(e){return`${e.getFullYear()}-${("0"+e.getMonth()).substr(-2)}-${("0"+e.getDate()).substr(-2)} ${("0"+e.getHours()).substr(-2)}:${("0"+e.getMinutes()).substr(-2)}:${("0"+e.getSeconds()).substr(-2)}`}function r(e){let t;if(e instanceof Array)t=e.map((e=>r(e)));else if(e instanceof Set){t=new Set;for(let a of e)t.add(r(a))}else if(e instanceof Map){t=new Map;for(let[a,o]of e)t.set(r(a),r(o))}else if(e instanceof Object){t={};for(let a in e)t[a]=r(e[a])}else t=e;return t}a.d(t,{_n:()=>l,_t:()=>i,aJ:()=>r,mG:()=>o,tq:()=>s});const l=async(e,t=300,a=1,o="base64")=>{let s=new Image;return s.src=URL.createObjectURL(e),new Promise(((e,i)=>{s.onload=function(){let s=this.width,i=this.height,r=s/i,l=0,n=0;s>t||i>t?s>i?(l=t,n=l/r):(n=t,l=n*r):(l=s,n=i);let d=document.createElement("canvas"),u=d.getContext("2d"),c=document.createAttribute("width"),m=document.createAttribute("height");c.nodeValue=l,m.nodeValue=n,d.setAttributeNode(c),d.setAttributeNode(m),u.drawImage(this,0,0,l,n);let g=d.toDataURL("image/jpeg",a);if("base64"===o)e(g);else if("file"===o){let t=((e,t="")=>{for(var a=e.split(","),o=a[0].match(/:(.*?);/)[1],s=atob(a[1]),i=s.length,r=new Uint8Array(i);i--;)r[i]=s.charCodeAt(i);if(o){var l=o.split("/");""===t&&(t="file."+l[1])}return new File([r],t,{type:o})})(g,"img.jpg");e(t)}}}))}},101:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var o=function(){var e=this,t=e._self._c;return t("div",[t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{value:e.majorList[e.majorListIndex]?.title,readonly:"","is-link":"",label:"专业",placeholder:"请选择专业",rules:[{required:!0,message:"请选择专业"}]},on:{click:e.onMajorPopupShow}}),e._v(" "),t("van-field",{attrs:{name:"科目",label:"科目",placeholder:"科目",rules:[{required:!0,message:"请填写科目"}]},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}}),e._v(" "),t("van-field",{attrs:{name:"科目代号",label:"科目代号",placeholder:"科目代号"},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}}),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"danger"},on:{click:e.onDeleteSubject}},[e._v("删除")])],1),e._v(" "),t("van-popup",{attrs:{position:"bottom"},model:{value:e.majorPopupVisible,callback:function(t){e.majorPopupVisible=t},expression:"majorPopupVisible"}},[t("van-picker",{attrs:{title:"选择专业","show-toolbar":"","value-key":"title","default-index":e.majorListIndex,columns:e.majorList},on:{confirm:e.onMajorConfirm,cancel:function(t){e.majorPopupVisible=!1}}})],1)],1)};o._withStripped=!0;var s=a(4148),i=a(1241);const r={data:()=>({formData:{title:"",code:"",major_id:""},majorPopupVisible:!1,majorList:[],majorListIndex:-1}),computed:{subject_id(){return this.$route.query.id}},async mounted(){let e=(await s.Z.listNoPageMajor()).list?.map((e=>({...e,_title:e.title,_code:e.code,title:e.code?`${e.title}(${e.code})`:e.title})));this.majorList=e;let t=await s.Z.detailSubject(this.subject_id),{formData:a}=this;a.title=t.data.title,a.code=t.data.code,a.major_id=t.data.major_id,this.formData={...a};let o=e.findIndex((e=>e.major_id===t.data.major_id));this.majorListIndex=o},methods:{onSubmit(){let e={...this.formData};e.major_id=this.majorList[this.majorListIndex]?.major_id,s.Z.updateSubject(this.subject_id,(0,i.mG)(e)).then((()=>{this.$toast.success({message:"更新成功",onClose:()=>this.$router.back()})}))},onDeleteSubject(){this.$dialog.confirm({message:"确认删除"}).then((()=>{s.Z.deleteSubject([this.subject_id]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.$router.back()})}))}))},onMajorPopupShow(){this.formData.major_id?this.$toast({message:"已指定父级，不能修改"}):this.majorPopupVisible=!0},onMajorConfirm(e,t){this.majorListIndex=t,this.majorPopupVisible=!1}}},l=(0,a(1900).Z)(r,o,[],!1,null,null,null).exports},2480:()=>{}}]);