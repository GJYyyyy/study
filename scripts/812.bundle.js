(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[812],{2111:(e,t,a)=>{"use strict";a.d(t,{Z:()=>A});var o=a(6161),s=a(7608),r=a(5680),i=a(8017),n=a(8159),l=a(1406),c=a(1241);let d=0;function u(e){let t=(0,l.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let m=0;const g=()=>{m&&clearTimeout(m),m=setTimeout((()=>{n.Z.commit("hidePageLoading")}),200)},p=g;let f="";f="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const h=o.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});h.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,i.LP)();return e.headers.Authorization="Bearer "+t,n.Z.commit("showPageLoading"),(e=>{d||(d=setTimeout((()=>{n.Z.commit("clearCache"),d=0}),18e5));let t=u(e),a=new Map([["knowledgeCollection",new Set(["knowledgeCollection","knowledge"])]]);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/")[0];a.has(e)?a.get(e).forEach((e=>n.Z.commit("removeCache",e))):n.Z.commit("removeCache",e)}let o=n.Z.state.cache[t];return o?Promise.reject(o):e})(e)}),(e=>(r.Z.fail({message:e.message}),Promise.reject(e)))),h.interceptors.response.use((e=>(g(),(e=>{let t={...e},a=(0,c.aJ)(t),o=u(a.config);n.Z.commit("addCache",{[o]:a})})(e),e.data.data)),(e=>{if(p(),e instanceof Error){let t=e.response;return t?401===t.status?r.Z.fail({message:t.statusText,onClose:()=>s.Z.push("/mobile/login")}):t.data.message?r.Z.fail({message:t.data.message}):r.Z.fail({message:t.statusText}):r.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const w=h,b=function(e,t={}){let a="/"+e,o=e.replace(/^\w/,e[0].toUpperCase()),s={["add"+o]:e=>w.post(a+"/add",e),["delete"+o]:e=>w.post(a+"/delete",{ids:e}),["update"+o]:(e,t)=>w.post(a+"/update/"+e,t),["detail"+o]:(e,t)=>w.post(a+"/detail/"+e,t),["list"+o]:e=>w.post(a+"/list",e)};return Object.assign({},s,t)},v="user",k=(v.replace(/^\w/,v[0].toUpperCase()),b(v,{userRegister:e=>w.post("/user/register",e),getUserInfo:e=>w.get("/user/getUserInfo/"+e),userLogin:e=>w.post("/user/login",e)})),C="major",j=C.replace(/^\w/,C[0].toUpperCase()),P=b(C,{["listNoPage"+j]:e=>w.post("/major/listNoPage",e)}),y="subject",Z=y.replace(/^\w/,y[0].toUpperCase()),S=b(y,{["listNoPage"+Z]:e=>w.post("/subject/listNoPage",e)}),U="knowledgeCatalog",$=U.replace(/^\w/,U[0].toUpperCase()),D=b(U,{["deleteTree"+$]:e=>w.post("/knowledgeCatalog/deleteTree",{ids:e}),["listNoPage"+$]:e=>w.post("/knowledgeCatalog/listNoPage",e),["listTree"+$]:e=>w.post("/knowledgeCatalog/listTree",e)}),M="knowledge",N=M.replace(/^\w/,M[0].toUpperCase()),_=b(M,{["listNoPage"+N]:e=>w.post("/knowledge/listNoPage",e)}),x="knowledgeCollection",T=x.replace(/^\w/,x[0].toUpperCase()),A={...k,...P,...S,...D,..._,...b(x,{["list"+T]:e=>w.post("/knowledgeCollection/list",e),["listNoPage"+T]:e=>w.post("/knowledgeCollection/listNoPage",e)})}},8017:(e,t,a)=>{"use strict";function o(e=!1){e=Boolean(e);let t=window.localStorage,a=window.sessionStorage,o=e?t:a;return{get:e=>o.getItem(e),set:(e,s)=>{t.removeItem(e),a.removeItem(e),o.setItem(e,s)},remove:e=>{t.removeItem(e),a.removeItem(e)},clear:()=>{t.clear(),a.clear()}}}function s(e,t=!1){o(!0).set("rememberMe",t),o(t).set("token",e)}function r(){let e="true"===o(!0).get("rememberMe");return o(e).get("token")}function i(){let e="true"===o(!0).get("rememberMe");o(e).remove("token")}a.d(t,{LP:()=>r,gy:()=>i,o4:()=>s})},1241:(e,t,a)=>{"use strict";function o(e){for(let t in e)e[t]=e[t].toString().trim();return e}function s(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!1,o=0;o<t.length;o++)if(e.indexOf(t[o])>0){a=!0;break}var s=window.screen.width,r=window.screen.height;return s>325&&r<750&&(a=!0),a}function r(e){return`${e.getFullYear()}-${("0"+e.getMonth()).substr(-2)}-${("0"+e.getDate()).substr(-2)} ${("0"+e.getHours()).substr(-2)}:${("0"+e.getMinutes()).substr(-2)}:${("0"+e.getSeconds()).substr(-2)}`}function i(e){let t;if(e instanceof Array)t=e.map((e=>i(e)));else if(e instanceof Set){t=new Set;for(let a of e)t.add(i(a))}else if(e instanceof Map){t=new Map;for(let[a,o]of e)t.set(i(a),i(o))}else if(e instanceof Object){t={};for(let a in e)t[a]=i(e[a])}else t=e;return t}a.d(t,{_n:()=>n,_t:()=>r,aJ:()=>i,mG:()=>o,tq:()=>s});const n=async(e,t=300,a=1,o="base64")=>{let s=new Image;return s.src=URL.createObjectURL(e),new Promise(((e,r)=>{s.onload=function(){let s=this.width,r=this.height,i=s/r,n=0,l=0;s>t||r>t?s>r?(n=t,l=n/i):(l=t,n=l*i):(n=s,l=r);let c=document.createElement("canvas"),d=c.getContext("2d"),u=document.createAttribute("width"),m=document.createAttribute("height");u.nodeValue=n,m.nodeValue=l,c.setAttributeNode(u),c.setAttributeNode(m),d.drawImage(this,0,0,n,l);let g=c.toDataURL("image/jpeg",a);if("base64"===o)e(g);else if("file"===o){let t=((e,t="")=>{for(var a=e.split(","),o=a[0].match(/:(.*?);/)[1],s=atob(a[1]),r=s.length,i=new Uint8Array(r);r--;)i[r]=s.charCodeAt(r);if(o){var n=o.split("/");""===t&&(t="file."+n[1])}return new File([i],t,{type:o})})(g,"img.jpg");e(t)}}}))}},7712:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var o=function(){var e=this,t=e._self._c;return t("div",[t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{name:"专业",label:"专业",placeholder:"专业",rules:[{required:!0,message:"请填写专业"}]},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}}),e._v(" "),t("van-field",{attrs:{name:"专业代号",label:"专业代号",placeholder:"专业代号"},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}}),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info",size:"small","native-type":"submit"}},[e._v("提交")])],1)],1),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"danger",size:"small"},on:{click:e.onDeleteMajor}},[e._v("删除")])],1)],1)};o._withStripped=!0;var s=a(2111),r=a(1241);const i={data:()=>({formData:{title:"",code:""}}),computed:{major_id(){return this.$route.query.id}},async mounted(){let e=await s.Z.detailMajor(this.major_id),{formData:t}=this;t.title=e.data.title,t.code=e.data.code,this.formData={...t}},methods:{onSubmit(){let e={...this.formData};s.Z.updateMajor(this.major_id,(0,r.mG)(e)).then((()=>{this.$toast.success({message:"更新成功",onClose:()=>this.$router.back()})}))},onDeleteMajor(){this.$dialog.confirm({message:"确认删除"}).then((()=>{s.Z.deleteMajor([this.major_id]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.$router.back()})}))}))}}},n=(0,a(1900).Z)(i,o,[],!1,null,null,null).exports},2480:()=>{}}]);