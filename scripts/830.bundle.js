(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[830],{4148:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var o=s(6161),a=s(7608),i=s(5680),l=s(8017),n=s(8159),r=s(1406),d=s(1241);let u=0;function c(e){let t=(0,r.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let g=0;const p=()=>{g&&clearTimeout(g),g=setTimeout((()=>{n.Z.commit("hidePageLoading")}),200)},m=p;let b="";b="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const f=o.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});f.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,l.LP)();return e.headers.Authorization="Bearer "+t,n.Z.commit("showPageLoading"),(e=>{u||(u=setTimeout((()=>{n.Z.commit("clearCache"),u=0}),18e5));let t=c(e);if(new RegExp(`/(${["add","update","delete","collection","unCollection"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/");n.Z.commit("removeCache",e[0])}let s=n.Z.state.cache[t];return s?Promise.reject(s):e})(e)}),(e=>(i.Z.fail({message:e.message}),Promise.reject(e)))),f.interceptors.response.use((e=>(p(),(e=>{let t={...e},s=(0,d.aJ)(t),o=c(s.config);n.Z.commit("addCache",{[o]:s})})(e),e.data.data)),(e=>{if(m(),e instanceof Error){let t=e.response;return t?401===t.status?i.Z.fail({message:t.statusText,onClose:()=>a.Z.push("/mobile/login")}):t.data.message?i.Z.fail({message:t.data.message}):i.Z.fail({message:t.statusText}):i.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const w=f,h={userRegister:e=>w.post("/user/register",e),updateUser:(e,t)=>w.post("/user/update/"+e,t),getUserInfo:e=>w.get("/user/getUserInfo/"+e),userLogin:e=>w.post("/user/login",e),addMajor:e=>w.post("/major/add",e),deleteMajor:e=>w.post("/major/delete",{ids:e}),updateMajor:(e,t)=>w.post("/major/update/"+e,t),detailMajor:(e,t)=>w.post("/major/detail/"+e,t),listMajor:e=>w.post("/major/list",e),listNoPageMajor:e=>w.post("/major/listNoPage",e),addSubject:e=>w.post("/subject/add",e),deleteSubject:e=>w.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>w.post("/subject/update/"+e,t),detailSubject:(e,t)=>w.post("/subject/detail/"+e,t),listSubject:e=>w.post("/subject/list",e),listNoPageSubject:e=>w.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>w.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>w.post("/knowledgeCatalog/delete",{ids:e}),deleteTreeKnowledgeCatalog:e=>w.post("/knowledgeCatalog/deleteTree",{ids:e}),updateKnowledgeCatalog:(e,t)=>w.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>w.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>w.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>w.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>w.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>w.post("/knowledge/add",e),deleteKnowledge:e=>w.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>w.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>w.post("/knowledge/detail/"+e,t),listKnowledge:e=>w.post("/knowledge/list",e),listNoPageKnowledge:e=>w.post("/knowledge/listNoPage",e),collectionKnowledge:e=>w.post("/knowledge/collection",e),unCollectionKnowledge:e=>w.post("/knowledge/unCollection",e)}},8017:(e,t,s)=>{"use strict";function o(e=!1){e=Boolean(e);let t=window.localStorage,s=window.sessionStorage,o=e?t:s;return{get:e=>o.getItem(e),set:(e,a)=>{t.removeItem(e),s.removeItem(e),o.setItem(e,a)},remove:e=>{t.removeItem(e),s.removeItem(e)},clear:()=>{t.clear(),s.clear()}}}function a(e,t=!1){o(!0).set("rememberMe",t),o(t).set("token",e)}function i(){let e="true"===o(!0).get("rememberMe");return o(e).get("token")}function l(){let e="true"===o(!0).get("rememberMe");o(e).remove("token")}s.d(t,{LP:()=>i,gy:()=>l,o4:()=>a})},1241:(e,t,s)=>{"use strict";function o(e){for(let t in e)e[t]=e[t].toString().trim();return e}function a(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],s=!1,o=0;o<t.length;o++)if(e.indexOf(t[o])>0){s=!0;break}var a=window.screen.width,i=window.screen.height;return a>325&&i<750&&(s=!0),s}function i(e){return`${e.getFullYear()}-${("0"+e.getMonth()).substr(-2)}-${("0"+e.getDate()).substr(-2)} ${("0"+e.getHours()).substr(-2)}:${("0"+e.getMinutes()).substr(-2)}:${("0"+e.getSeconds()).substr(-2)}`}function l(e){let t;if(e instanceof Array)t=e.map((e=>l(e)));else if(e instanceof Set){t=new Set;for(let s of e)t.add(l(s))}else if(e instanceof Map){t=new Map;for(let[s,o]of e)t.set(l(s),l(o))}else if(e instanceof Object){t={};for(let s in e)t[s]=l(e[s])}else t=e;return t}s.d(t,{_n:()=>n,_t:()=>i,aJ:()=>l,mG:()=>o,tq:()=>a});const n=async(e,t=300,s=1,o="base64")=>{let a=new Image;return a.src=URL.createObjectURL(e),new Promise(((e,i)=>{a.onload=function(){let a=this.width,i=this.height,l=a/i,n=0,r=0;a>t||i>t?a>i?(n=t,r=n/l):(r=t,n=r*l):(n=a,r=i);let d=document.createElement("canvas"),u=d.getContext("2d"),c=document.createAttribute("width"),g=document.createAttribute("height");c.nodeValue=n,g.nodeValue=r,d.setAttributeNode(c),d.setAttributeNode(g),u.drawImage(this,0,0,n,r);let p=d.toDataURL("image/jpeg",s);if("base64"===o)e(p);else if("file"===o){let t=((e,t="")=>{for(var s=e.split(","),o=s[0].match(/:(.*?);/)[1],a=atob(s[1]),i=a.length,l=new Uint8Array(i);i--;)l[i]=a.charCodeAt(i);if(o){var n=o.split("/");""===t&&(t="file."+n[1])}return new File([l],t,{type:o})})(p,"img.jpg");e(t)}}}))}},3668:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var o=function(){var e=this,t=e._self._c;return t("div",[t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{value:e.subjectList[e.subjectListIndex]?.title,readonly:"","is-link":"",label:"科目",placeholder:"请选择科目",rules:[{required:!0,message:"请选择科目"}]},on:{click:e.onSubjectPopupShow}}),e._v(" "),t("van-field",{attrs:{label:"父目录",readonly:"",value:e.parent?.title??"无"}}),e._v(" "),t("van-field",{attrs:{name:"目录名",label:"目录名",placeholder:"目录名",rules:[{required:!0,message:"请填写目录名"}]},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}}),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info",size:"small","native-type":"submit"}},[e._v("提交")])],1)],1),e._v(" "),t("van-popup",{attrs:{position:"bottom"},model:{value:e.subjectPopupVisible,callback:function(t){e.subjectPopupVisible=t},expression:"subjectPopupVisible"}},[t("van-picker",{attrs:{title:"选择科目","show-toolbar":"","value-key":"title","default-index":e.subjectListIndex,columns:e.subjectList},on:{confirm:e.onSubjectConfirm,cancel:function(t){e.subjectPopupVisible=!1}}})],1)],1)};o._withStripped=!0;var a=s(4148),i=s(1241);const l="knowledge_catalog_id",n="subject_id",r="parent_id",d={data:()=>({formData:{title:"",[r]:"null",[n]:""},subjectPopupVisible:!1,subjectList:[],subjectListIndex:-1,parent:{}}),computed:{[n](){return this.$route.query.cate_id||this.$store.state.userInfo[n]},[r](){return this.$route.query.parent_id}},beforeMount(){let{formData:e}=this;e[n]=this[n],this.formData={...e}},async mounted(){let e=(await a.Z.listNoPageSubject({filterOptions:{cate_id:this.$store.state.subjectCate}})).list,t=e.findIndex((e=>e[n]===this[n]));this.subjectList=e,this.subjectListIndex=t;let s=await a.Z.detailKnowledgeCatalog(this.parent_id);if(s.data?.[l]){let{formData:e}=this;e.parent_id=s.data[l],this.formData={...e}}this.parent=s.data},methods:{onSubmit(){let e={...this.formData};e[n]=this.subjectList[this.subjectListIndex]?.[n],a.Z.addKnowledgeCatalog((0,i.mG)(e)).then((()=>{this.$toast.success({message:"添加成功",onClose:()=>this.$router.back()})}))},onSubjectPopupShow(){this[n]?this.$toast({message:"已指定父级，不能修改"}):this.subjectPopupVisible=!0},onSubjectConfirm(e,t){this.subjectListIndex=t,this.subjectPopupVisible=!1}}},u=(0,s(1900).Z)(d,o,[],!1,null,null,null).exports},2480:()=>{}}]);