(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[210],{2111:(e,t,o)=>{"use strict";o.d(t,{Z:()=>D});var a=o(6161),s=o(7608),r=o(5680),i=o(8017),n=o(8159),l=o(1406),d=o(1241);let c=0;function m(e){let t=(0,l.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let u=0;const p=()=>{u&&clearTimeout(u),u=setTimeout((()=>{n.Z.commit("hidePageLoading")}),200)},g=p;let f="";f="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const h=a.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});h.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,i.LP)();return e.headers.Authorization="Bearer "+t,n.Z.commit("showPageLoading"),(e=>{c||(c=setTimeout((()=>{n.Z.commit("clearCache"),c=0}),18e5));let t=m(e),o=new Map([["knowledgeCollection",new Set(["knowledgeCollection","knowledge"])]]);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/")[0];o.has(e)?o.get(e).forEach((e=>n.Z.commit("removeCache",e))):n.Z.commit("removeCache",e)}let a=n.Z.state.cache[t];return a?Promise.reject(a):e})(e)}),(e=>(r.Z.fail({message:e.message}),Promise.reject(e)))),h.interceptors.response.use((e=>(p(),(e=>{let t={...e},o=(0,d.aJ)(t),a=m(o.config);n.Z.commit("addCache",{[a]:o})})(e),e.data.data)),(e=>{if(g(),e instanceof Error){let t=e.response;return t?401===t.status?r.Z.fail({message:t.statusText,onClose:()=>s.Z.push("/mobile/login")}):t.data.message?r.Z.fail({message:t.data.message}):r.Z.fail({message:t.statusText}):r.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const b=h,w=function(e,t={}){let o="/"+e,a=e.replace(/^\w/,e[0].toUpperCase()),s={["add"+a]:e=>b.post(o+"/add",e),["delete"+a]:e=>b.post(o+"/delete",{ids:e}),["update"+a]:(e,t)=>b.post(o+"/update/"+e,t),["detail"+a]:(e,t)=>b.post(o+"/detail/"+e,t),["list"+a]:e=>b.post(o+"/list",e)};return Object.assign({},s,t)},j="user",v=(j.replace(/^\w/,j[0].toUpperCase()),w(j,{userRegister:e=>b.post("/user/register",e),getUserInfo:e=>b.get("/user/getUserInfo/"+e),userLogin:e=>b.post("/user/login",e)})),P="major",k=P.replace(/^\w/,P[0].toUpperCase()),C=w(P,{["listNoPage"+k]:e=>b.post("/major/listNoPage",e)}),L="subject",_=L.replace(/^\w/,L[0].toUpperCase()),x=w(L,{["listNoPage"+_]:e=>b.post("/subject/listNoPage",e)}),y="knowledgeCatalog",I=y.replace(/^\w/,y[0].toUpperCase()),S=w(y,{["deleteTree"+I]:e=>b.post("/knowledgeCatalog/deleteTree",{ids:e}),["listNoPage"+I]:e=>b.post("/knowledgeCatalog/listNoPage",e),["listTree"+I]:e=>b.post("/knowledgeCatalog/listTree",e)}),Z="knowledge",$=Z.replace(/^\w/,Z[0].toUpperCase()),U=w(Z,{["listNoPage"+$]:e=>b.post("/knowledge/listNoPage",e)}),M="knowledgeCollection",N=M.replace(/^\w/,M[0].toUpperCase()),D={...v,...C,...x,...S,...U,...w(M,{["list"+N]:e=>b.post("/knowledgeCollection/list",e),["listNoPage"+N]:e=>b.post("/knowledgeCollection/listNoPage",e)})}},8017:(e,t,o)=>{"use strict";function a(e=!1){e=Boolean(e);let t=window.localStorage,o=window.sessionStorage,a=e?t:o;return{get:e=>a.getItem(e),set:(e,s)=>{t.removeItem(e),o.removeItem(e),a.setItem(e,s)},remove:e=>{t.removeItem(e),o.removeItem(e)},clear:()=>{t.clear(),o.clear()}}}function s(e,t=!1){a(!0).set("rememberMe",t),a(t).set("token",e)}function r(){let e="true"===a(!0).get("rememberMe");return a(e).get("token")}function i(){let e="true"===a(!0).get("rememberMe");a(e).remove("token")}o.d(t,{LP:()=>r,gy:()=>i,o4:()=>s})},1241:(e,t,o)=>{"use strict";function a(e){for(let t in e)e[t]=e[t].toString().trim();return e}function s(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],o=!1,a=0;a<t.length;a++)if(e.indexOf(t[a])>0){o=!0;break}var s=window.screen.width,r=window.screen.height;return s>325&&r<750&&(o=!0),o}function r(e){return`${e.getFullYear()}-${("0"+e.getMonth()).substr(-2)}-${("0"+e.getDate()).substr(-2)} ${("0"+e.getHours()).substr(-2)}:${("0"+e.getMinutes()).substr(-2)}:${("0"+e.getSeconds()).substr(-2)}`}function i(e){let t;if(e instanceof Array)t=e.map((e=>i(e)));else if(e instanceof Set){t=new Set;for(let o of e)t.add(i(o))}else if(e instanceof Map){t=new Map;for(let[o,a]of e)t.set(i(o),i(a))}else if(e instanceof Object){t={};for(let o in e)t[o]=i(e[o])}else t=e;return t}o.d(t,{_n:()=>n,_t:()=>r,aJ:()=>i,mG:()=>a,tq:()=>s});const n=async(e,t=300,o=1,a="base64")=>{let s=new Image;return s.src=URL.createObjectURL(e),new Promise(((e,r)=>{s.onload=function(){let s=this.width,r=this.height,i=s/r,n=0,l=0;s>t||r>t?s>r?(n=t,l=n/i):(l=t,n=l*i):(n=s,l=r);let d=document.createElement("canvas"),c=d.getContext("2d"),m=document.createAttribute("width"),u=document.createAttribute("height");m.nodeValue=n,u.nodeValue=l,d.setAttributeNode(m),d.setAttributeNode(u),c.drawImage(this,0,0,n,l);let p=d.toDataURL("image/jpeg",o);if("base64"===a)e(p);else if("file"===a){let t=((e,t="")=>{for(var o=e.split(","),a=o[0].match(/:(.*?);/)[1],s=atob(o[1]),r=s.length,i=new Uint8Array(r);r--;)i[r]=s.charCodeAt(r);if(a){var n=a.split("/");""===t&&(t="file."+n[1])}return new File([i],t,{type:a})})(p,"img.jpg");e(t)}}}))}},9263:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});var a=function(){var e=this,t=e._self._c;return t("div",[t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{value:e.majorList[e.majorListIndex]?.title,readonly:"","is-link":"",label:"专业",placeholder:"请选择专业",rules:[{required:!0,message:"请选择专业"}]},on:{click:e.onMajorPopupShow}}),e._v(" "),t("van-field",{attrs:{name:"科目",label:"科目",placeholder:"科目",rules:[{required:!0,message:"请填写科目"}]},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}}),e._v(" "),t("van-field",{attrs:{name:"科目代号",label:"科目代号",placeholder:"科目代号"},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}}),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info",size:"small","native-type":"submit"}},[e._v("提交")])],1)],1),e._v(" "),t("van-popup",{attrs:{position:"bottom"},model:{value:e.majorPopupVisible,callback:function(t){e.majorPopupVisible=t},expression:"majorPopupVisible"}},[t("van-picker",{attrs:{title:"选择专业","show-toolbar":"","value-key":"title","default-index":e.majorListIndex,columns:e.majorList},on:{confirm:e.onMajorConfirm,cancel:function(t){e.majorPopupVisible=!1}}})],1)],1)};a._withStripped=!0;var s=o(2111),r=o(1241);const i="major_id",n={data:()=>({formData:{title:"",code:"",[i]:""},majorPopupVisible:!1,majorList:[],majorListIndex:-1}),computed:{[i](){return this.$route.query.cate_id||this.$store.state.userInfo.major_id}},beforeMount(){let{formData:e}=this;e.major_id=this.major_id,this.formData={...e}},async mounted(){let e=(await s.Z.listNoPageMajor()).list?.map((e=>({...e,_title:e.title,_code:e.code,title:e.code?`${e.title}(${e.code})`:e.title}))),t=e.findIndex((e=>e.major_id===this.major_id));this.majorList=e,this.majorListIndex=t},methods:{onSubmit(){let e={...this.formData};e.major_id=this.majorList[this.majorListIndex]?.major_id,s.Z.addSubject((0,r.mG)(e)).then((()=>{this.$toast.success({message:"添加成功",onClose:()=>this.$router.back()})}))},onMajorPopupShow(){this.major_id&&-1!==this.majorListIndex?this.$toast({message:"已指定父级，不能修改"}):this.majorPopupVisible=!0},onMajorConfirm(e,t){this.majorListIndex=t,this.majorPopupVisible=!1}}},l=(0,o(1900).Z)(n,a,[],!1,null,null,null).exports},2480:()=>{}}]);