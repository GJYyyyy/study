(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[171],{4148:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var o=a(6161),n=a(7608),s=a(5680),i=a(8017),l=a(8159),r=a(1406),d=a(1241);let c=0;function u(e){let t=(0,r.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let g=0;const p=()=>{g&&clearTimeout(g),g=setTimeout((()=>{l.Z.commit("hidePageLoading")}),200)},m=p;let f="";f="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const w=o.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});w.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,i.LP)();return e.headers.Authorization="Bearer "+t,l.Z.commit("showPageLoading"),(e=>{c||(c=setTimeout((()=>{l.Z.commit("clearCache"),c=0}),18e5));let t=u(e);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/");l.Z.commit("removeCache",e[0])}let a=l.Z.state.cache[t];return a?Promise.reject(a):e})(e)}),(e=>(s.Z.fail({message:e.message}),Promise.reject(e)))),w.interceptors.response.use((e=>(p(),(e=>{let t={...e},a=(0,d.aJ)(t),o=u(a.config);l.Z.commit("addCache",{[o]:a})})(e),e.data.data)),(e=>{if(m(),e instanceof Error){let t=e.response;return t?401===t.status?s.Z.fail({message:t.statusText,onClose:()=>n.Z.push("/mobile/login")}):t.data.message?s.Z.fail({message:t.data.message}):s.Z.fail({message:t.statusText}):s.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const h=w,v={userRegister:e=>h.post("/user/register",e),updateUser:(e,t)=>h.post("/user/update/"+e,t),getUserInfo:e=>h.get("/user/getUserInfo/"+e),userLogin:e=>h.post("/user/login",e),addMajor:e=>h.post("/major/add",e),deleteMajor:e=>h.post("/major/delete",{ids:e}),updateMajor:(e,t)=>h.post("/major/update/"+e,t),detailMajor:(e,t)=>h.post("/major/detail/"+e,t),listMajor:e=>h.post("/major/list",e),listNoPageMajor:e=>h.post("/major/listNoPage",e),addSubject:e=>h.post("/subject/add",e),deleteSubject:e=>h.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>h.post("/subject/update/"+e,t),detailSubject:(e,t)=>h.post("/subject/detail/"+e,t),listSubject:e=>h.post("/subject/list",e),listNoPageSubject:e=>h.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>h.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>h.post("/knowledgeCatalog/delete",{ids:e}),deleteTreeKnowledgeCatalog:e=>h.post("/knowledgeCatalog/deleteTree",{ids:e}),updateKnowledgeCatalog:(e,t)=>h.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>h.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>h.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>h.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>h.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>h.post("/knowledge/add",e),deleteKnowledge:e=>h.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>h.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>h.post("/knowledge/detail/"+e,t),listKnowledge:e=>h.post("/knowledge/list",e),listNoPageKnowledge:e=>h.post("/knowledge/listNoPage",e)}},8017:(e,t,a)=>{"use strict";function o(e=!1){e=Boolean(e);let t=window.localStorage,a=window.sessionStorage,o=e?t:a;return{get:e=>o.getItem(e),set:(e,n)=>{t.removeItem(e),a.removeItem(e),o.setItem(e,n)},remove:e=>{t.removeItem(e),a.removeItem(e)},clear:()=>{t.clear(),a.clear()}}}function n(e,t=!1){o(!0).set("rememberMe",t),o(t).set("token",e)}function s(){let e="true"===o(!0).get("rememberMe");return o(e).get("token")}function i(){let e="true"===o(!0).get("rememberMe");o(e).remove("token")}a.d(t,{LP:()=>s,gy:()=>i,o4:()=>n})},1241:(e,t,a)=>{"use strict";function o(e){for(let t in e)e[t]=e[t].toString().trim();return e}function n(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!1,o=0;o<t.length;o++)if(e.indexOf(t[o])>0){a=!0;break}var n=window.screen.width,s=window.screen.height;return n>325&&s<750&&(a=!0),a}function s(e){return`${e.getFullYear()}-${("0"+e.getMonth()).substr(-2)}-${("0"+e.getDate()).substr(-2)} ${("0"+e.getHours()).substr(-2)}:${("0"+e.getMinutes()).substr(-2)}:${("0"+e.getSeconds()).substr(-2)}`}function i(e){let t;if(e instanceof Array)t=e.map((e=>i(e)));else if(e instanceof Set){t=new Set;for(let a of e)t.add(i(a))}else if(e instanceof Map){t=new Map;for(let[a,o]of e)t.set(i(a),i(o))}else if(e instanceof Object){t={};for(let a in e)t[a]=i(e[a])}else t=e;return t}a.d(t,{_n:()=>l,_t:()=>s,aJ:()=>i,mG:()=>o,tq:()=>n});const l=async(e,t=300,a=1,o="base64")=>{let n=new Image;return n.src=URL.createObjectURL(e),new Promise(((e,s)=>{n.onload=function(){let n=this.width,s=this.height,i=n/s,l=0,r=0;n>t||s>t?n>s?(l=t,r=l/i):(r=t,l=r*i):(l=n,r=s);let d=document.createElement("canvas"),c=d.getContext("2d"),u=document.createAttribute("width"),g=document.createAttribute("height");u.nodeValue=l,g.nodeValue=r,d.setAttributeNode(u),d.setAttributeNode(g),c.drawImage(this,0,0,l,r);let p=d.toDataURL("image/jpeg",a);if("base64"===o)e(p);else if("file"===o){let t=((e,t="")=>{for(var a=e.split(","),o=a[0].match(/:(.*?);/)[1],n=atob(a[1]),s=n.length,i=new Uint8Array(s);s--;)i[s]=n.charCodeAt(s);if(o){var l=o.split("/");""===t&&(t="file."+l[1])}return new File([i],t,{type:o})})(p,"img.jpg");e(t)}}}))}},1259:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var o=a(6738),n=a.n(o),s=a(7705),i=a.n(s)()(n());i.push([e.id,"\n.custom-markdown-editor[data-v-333dbd37] .v-note-wrapper {\n    z-index: initial;\n}\n",""]);const l=i},6905:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var o=a(6738),n=a.n(o),s=a(7705),i=a.n(s)()(n());i.push([e.id,"\n.container[data-v-079ad91e] {\n    padding: 16px;\n}\n.container > .title[data-v-079ad91e] {\n    text-align: center;\n}\n.container > .describ[data-v-079ad91e] {\n    font-size: 12px;\n    color: var(--gray-3);\n}\n.container > .describ > span[data-v-079ad91e] {\n    max-width: 50%;\n}\n",""]);const l=i},7873:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d,e:()=>l});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-markdown-editor"},[t("mavon-editor",{key:e.value,ref:"md",attrs:{value:e.value,boxShadow:!1,html:!1,xssOptions:!1,toolbars:e.toolbars,imageFilter:e.imgFilter},on:{fullScreen:e.onEditorFullScreen,save:e.onContentSave,change:e.onContentChange,imgAdd:e.onEditorImgAdd}})],1)};o._withStripped=!0;var n=a(1241),s=a(966);a(1226);let i=0;const l=s.mavonEditor.getMarkdownIt(),r={components:{"mavon-editor":s.mavonEditor},props:{value:{type:String,default:""}},data:()=>({toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,fullscreen:!0,readmodel:!0,htmlcode:!0,help:!0,undo:!0,redo:!0,trash:!0,save:!0,navigation:!0,alignleft:!0,aligncenter:!0,alignright:!0,subfield:!0,preview:!0}}),mounted(){this.toolbars.imagelink=!1,this.toolbars.trash=!1,(0,n.tq)()&&(this.toolbars.readmodel=!1)},methods:{onContentChange(e,t){i&&clearTimeout(i),i=setTimeout((()=>{this.$emit("change",e)}),200)},onEditorFullScreen(e){document.querySelector(".v-note-wrapper").style.zIndex=e?1500:"initial"},downloadFile(e,t){let a=document.createElement("a");a.href="data:text/plain;charset=utf-8,"+t,a.download=e,document.body.appendChild(a),a.click(),document.body.removeChild(a)},onContentSave(e,t){this.downloadFile("source.html",t)},imgFilter(e){return!!/^image/.test(e.type)||(this.$toast.fail("请选择图片文件"),!1)},async onEditorImgAdd(e,t){let a=await(0,n._n)(t);this.$refs.md.$img2Url(e,a)}}};a(1355);const d=(0,a(1900).Z)(r,o,[],!1,null,"333dbd37",null).exports},5445:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var o=function(){var e=this,t=e._self._c;return t("div",[e.knowledge.title?t("div",{staticClass:"container"},[t("h4",{staticClass:"title"},[e._v(e._s(e.knowledge.title))]),e._v(" "),t("div",{staticClass:"describ row-between rol-center"},[t("span",[e._v(e._s(e.cateTitle))]),e._v(" "),t("span",[e._v(e._s(e.knowledge.update_date))])]),e._v(" "),t("van-divider"),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.knowledge.content)}})],1):t("van-empty",{attrs:{description:"没有内容"}})],1)};o._withStripped=!0;var n=a(4148),s=a(1241),i=a(7873);const l={data:()=>({knowledge:{},cateTitle:""}),computed:{id(){return this.$route.query.id}},async mounted(){let e=await n.Z.detailKnowledge(this.id);if(e.data){let t={...e.data};t.content=i.e.render(decodeURIComponent(t.content)),t.update_date=(0,s._t)(new Date(t.update_date)),this.knowledge=t;let a=await n.Z.detailKnowledgeCatalog(t.knowledge_catalog_id,{filterOptions:{fields:"title"}});this.cateTitle=a.data.title}}};a(2611);const r=(0,a(1900).Z)(l,o,[],!1,null,"079ad91e",null).exports},1355:(e,t,a)=>{var o=a(1259);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var n=(0,a(4023).Z)("f1085728",o,!1,{});o.locals||e.hot.accept(1259,(function(){var t=a(1259);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),n(t)})),e.hot.dispose((function(){n()}))},2611:(e,t,a)=>{var o=a(6905);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var n=(0,a(4023).Z)("06816775",o,!1,{});o.locals||e.hot.accept(6905,(function(){var t=a(6905);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),n(t)})),e.hot.dispose((function(){n()}))},2480:()=>{}}]);