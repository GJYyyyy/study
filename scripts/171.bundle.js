(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[171],{4148:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var o=a(6161),s=a(7608),n=a(5680),l=a(8017),d=a(8159),r=a(1406),i=a(1241);let c=0;function u(e){let t=(0,r.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let g=0;const p=()=>{g&&clearTimeout(g),g=setTimeout((()=>{d.Z.commit("hidePageLoading")}),500)},m=p;let f="";f="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const w=o.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});w.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,l.LP)();return e.headers.Authorization="Bearer "+t,d.Z.commit("showPageLoading"),(e=>{c||(c=setTimeout((()=>{d.Z.commit("clearCache"),c=0}),18e5));let t=u(e);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/");d.Z.commit("removeCache",e[0])}let a=d.Z.state.cache[t];return a?Promise.reject(a):e})(e)}),(e=>(n.Z.fail({message:e.message}),Promise.reject(e)))),w.interceptors.response.use((e=>(p(),(e=>{let t={...e},a=(0,i.aJ)(t),o=u(a.config);d.Z.commit("addCache",{[o]:a})})(e),e.data.data)),(e=>{if(m(),e instanceof Error){let t=e.response;return t?401===t.status?n.Z.fail({message:t.statusText,onClose:()=>s.Z.push("/mobile/login")}):t.data.message?n.Z.fail({message:t.data.message}):n.Z.fail({message:t.statusText}):n.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const v=w,h={userRegister:e=>v.post("/user/register",e),updateUser:(e,t)=>v.post("/user/update/"+e,t),getUserInfo:e=>v.get("/user/getUserInfo/"+e),userLogin:e=>v.post("/user/login",e),addMajor:e=>v.post("/major/add",e),deleteMajor:e=>v.post("/major/delete",{ids:e}),updateMajor:(e,t)=>v.post("/major/update/"+e,t),detailMajor:(e,t)=>v.post("/major/detail/"+e,t),listMajor:e=>v.post("/major/list",e),listNoPageMajor:e=>v.post("/major/listNoPage",e),addSubject:e=>v.post("/subject/add",e),deleteSubject:e=>v.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>v.post("/subject/update/"+e,t),detailSubject:(e,t)=>v.post("/subject/detail/"+e,t),listSubject:e=>v.post("/subject/list",e),listNoPageSubject:e=>v.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>v.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>v.post("/knowledgeCatalog/delete",{ids:e}),deleteTreeKnowledgeCatalog:e=>v.post("/knowledgeCatalog/deleteTree",{ids:e}),updateKnowledgeCatalog:(e,t)=>v.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>v.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>v.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>v.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>v.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>v.post("/knowledge/add",e),deleteKnowledge:e=>v.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>v.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>v.post("/knowledge/detail/"+e,t),listKnowledge:e=>v.post("/knowledge/list",e),listNoPageKnowledge:e=>v.post("/knowledge/listNoPage",e)}},8017:(e,t,a)=>{"use strict";function o(e=!1){e=Boolean(e);let t=window.localStorage,a=window.sessionStorage,o=e?t:a;return{get:e=>o.getItem(e),set:(e,s)=>{t.removeItem(e),a.removeItem(e),o.setItem(e,s)},remove:e=>{t.removeItem(e),a.removeItem(e)},clear:()=>{t.clear(),a.clear()}}}function s(e,t=!1){o(!0).set("rememberMe",t),o(t).set("token",e)}function n(){let e="true"===o(!0).get("rememberMe");return o(e).get("token")}function l(){let e="true"===o(!0).get("rememberMe");o(e).remove("token")}a.d(t,{LP:()=>n,gy:()=>l,o4:()=>s})},1241:(e,t,a)=>{"use strict";function o(e){for(let t in e)e[t]=e[t].toString().trim();return e}function s(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!1,o=0;o<t.length;o++)if(e.indexOf(t[o])>0){a=!0;break}var s=window.screen.width,n=window.screen.height;return s>325&&n<750&&(a=!0),a}function n(e){return`${e.getFullYear()}-${("0"+e.getMonth()).substr(-2)}-${("0"+e.getDate()).substr(-2)} ${("0"+e.getHours()).substr(-2)}:${("0"+e.getMinutes()).substr(-2)}:${("0"+e.getSeconds()).substr(-2)}`}function l(e){let t;if(e instanceof Array)t=e.map((e=>l(e)));else if(e instanceof Set){t=new Set;for(let a of e)t.add(l(a))}else if(e instanceof Map){t=new Map;for(let[a,o]of e)t.set(l(a),l(o))}else if(e instanceof Object){t={};for(let a in e)t[a]=l(e[a])}else t=e;return t}a.d(t,{_t:()=>n,aJ:()=>l,mG:()=>o,tq:()=>s})},5053:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var o=a(6738),s=a.n(o),n=a(7705),l=a.n(n)()(s());l.push([e.id,"\n.custom-markdown-editor[data-v-0dc74437] .v-note-wrapper {\n    z-index: initial;\n}\n",""]);const d=l},6905:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var o=a(6738),s=a.n(o),n=a(7705),l=a.n(n)()(s());l.push([e.id,"\n.container[data-v-079ad91e] {\n    padding: 16px;\n}\n.container > .title[data-v-079ad91e] {\n    text-align: center;\n}\n.container > .describ[data-v-079ad91e] {\n    font-size: 12px;\n    color: var(--gray-3);\n}\n.container > .describ > span[data-v-079ad91e] {\n    max-width: 50%;\n}\n",""]);const d=l},6025:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i,e:()=>d});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-markdown-editor"},[t("mavon-editor",{key:e.value,attrs:{value:e.value,boxShadow:!1,html:!1,xssOptions:!1,toolbars:e.toolbars},on:{fullScreen:e.onEditorFullScreen,save:e.onContentSave,change:e.onContentChange}})],1)};o._withStripped=!0;var s=a(1241),n=a(966);a(1226);let l=0;const d=n.mavonEditor.getMarkdownIt(),r={components:{"mavon-editor":n.mavonEditor},props:{value:{type:String,default:""}},data:()=>({toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,fullscreen:!0,readmodel:!0,htmlcode:!0,help:!0,undo:!0,redo:!0,trash:!0,save:!0,navigation:!0,alignleft:!0,aligncenter:!0,alignright:!0,subfield:!0,preview:!0}}),mounted(){this.toolbars.imagelink=!1,this.toolbars.trash=!1,(0,s.tq)()&&(this.toolbars.readmodel=!1)},methods:{onContentChange(e,t){l&&clearTimeout(l),l=setTimeout((()=>{this.$emit("change",e)}),200)},onEditorFullScreen(e){document.querySelector(".v-note-wrapper").style.zIndex=e?1500:"initial"},downloadFile(e,t){let a=document.createElement("a");a.href="data:text/plain;charset=utf-8,"+t,a.download=e,document.body.appendChild(a),a.click(),document.body.removeChild(a)},onContentSave(e,t){this.downloadFile("source.html",t)}}};a(7317);const i=(0,a(1900).Z)(r,o,[],!1,null,"0dc74437",null).exports},5445:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var o=function(){var e=this,t=e._self._c;return t("div",[e.knowledge.title?t("div",{staticClass:"container"},[t("h4",{staticClass:"title"},[e._v(e._s(e.knowledge.title))]),e._v(" "),t("div",{staticClass:"describ row-between rol-center"},[t("span",[e._v(e._s(e.cateTitle))]),e._v(" "),t("span",[e._v(e._s(e.knowledge.update_date))])]),e._v(" "),t("van-divider"),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.knowledge.content)}})],1):t("van-empty",{attrs:{description:"没有内容"}})],1)};o._withStripped=!0;var s=a(4148),n=a(1241),l=a(6025);const d={data:()=>({knowledge:{},cateTitle:""}),computed:{id(){return this.$route.query.id}},async mounted(){let e=await s.Z.detailKnowledge(this.id);if(e.data){let t={...e.data};t.content=l.e.render(decodeURIComponent(t.content)),t.update_date=(0,n._t)(new Date(t.update_date)),this.knowledge=t;let a=await s.Z.detailKnowledgeCatalog(t.knowledge_catalog_id,{filterOptions:{fields:"title"}});this.cateTitle=a.data.title}}};a(2611);const r=(0,a(1900).Z)(d,o,[],!1,null,"079ad91e",null).exports},7317:(e,t,a)=>{var o=a(5053);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var s=(0,a(4023).Z)("510c7661",o,!1,{});o.locals||e.hot.accept(5053,(function(){var t=a(5053);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),s(t)})),e.hot.dispose((function(){s()}))},2611:(e,t,a)=>{var o=a(6905);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var s=(0,a(4023).Z)("06816775",o,!1,{});o.locals||e.hot.accept(6905,(function(){var t=a(6905);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),s(t)})),e.hot.dispose((function(){s()}))},2480:()=>{}}]);