(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[187],{2111:(e,t,s)=>{"use strict";s.d(t,{Z:()=>M});var a=s(6161),l=s(6278),i=s(5680),o=s(8017),n=s(8159),r=s(1406),c=s(1241);let d=0;function u(e){let t=(0,r.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let g=0;const h=()=>{g&&clearTimeout(g),g=setTimeout((()=>{n.Z.commit("hidePageLoading")}),200)},m=h;let p="";p="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const b=a.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});b.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,o.LP)();return e.headers.Authorization="Bearer "+t,n.Z.commit("showPageLoading"),(e=>{d||(d=setTimeout((()=>{n.Z.commit("clearCache"),d=0}),18e5));let t=u(e),s=new Map([["knowledgeCollection",new Set(["knowledgeCollection","knowledge"])]]);if(new RegExp(`/(${["add","update","delete"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/")[0];s.has(e)?s.get(e).forEach((e=>n.Z.commit("removeCache",e))):n.Z.commit("removeCache",e)}let a=n.Z.state.cache[t];return a?Promise.reject(a):e})(e)}),(e=>(i.Z.fail({message:e.message}),Promise.reject(e)))),b.interceptors.response.use((e=>(h(),(e=>{let t={...e},s=(0,c.aJ)(t),a=u(s.config);n.Z.commit("addCache",{[a]:s})})(e),e.data.data)),(e=>{if(m(),e instanceof Error){let t=e.response;return t?401===t.status?i.Z.fail({message:t.statusText,onClose:()=>l.Z.push("/mobile/login")}):t.data.message?i.Z.fail({message:t.data.message}):i.Z.fail({message:t.statusText}):i.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const w=b,f=function(e,t={}){let s="/"+e,a=e.replace(/^\w/,e[0].toUpperCase()),l={["add"+a]:e=>w.post(s+"/add",e),["delete"+a]:e=>w.post(s+"/delete",{ids:e}),["update"+a]:(e,t)=>w.post(s+"/update/"+e,t),["detail"+a]:(e,t)=>w.post(s+"/detail/"+e,t),["list"+a]:e=>w.post(s+"/list",e)};return Object.assign({},l,t)},P="user",T=(P.replace(/^\w/,P[0].toUpperCase()),f(P,{userRegister:e=>w.post("/user/register",e),getUserInfo:e=>w.get("/user/getUserInfo/"+e),userLogin:e=>w.post("/user/login",e)})),k="major",C=k.replace(/^\w/,k[0].toUpperCase()),v=f(k,{["listNoPage"+C]:e=>w.post("/major/listNoPage",e)}),y="subject",L=y.replace(/^\w/,y[0].toUpperCase()),j=f(y,{["listNoPage"+L]:e=>w.post("/subject/listNoPage",e)}),_="knowledgeCatalog",I=_.replace(/^\w/,_[0].toUpperCase()),R=f(_,{["deleteTree"+I]:e=>w.post("/knowledgeCatalog/deleteTree",{ids:e}),["listNoPage"+I]:e=>w.post("/knowledgeCatalog/listNoPage",e),["listTree"+I]:e=>w.post("/knowledgeCatalog/listTree",e)}),Z="knowledge",K=Z.replace(/^\w/,Z[0].toUpperCase()),S=f(Z,{["listNoPage"+K]:e=>w.post("/knowledge/listNoPage",e),["listRandom"+K]:e=>w.post("/knowledge/listRandom",e)}),A="knowledgeCollection",U=A.replace(/^\w/,A[0].toUpperCase()),M={...T,...v,...j,...R,...S,...f(A,{["list"+U]:e=>w.post("/knowledgeCollection/list",e),["listNoPage"+U]:e=>w.post("/knowledgeCollection/listNoPage",e)})}},8017:(e,t,s)=>{"use strict";function a(e=!1){e=Boolean(e);let t=window.localStorage,s=window.sessionStorage,a=e?t:s;return{get:e=>a.getItem(e),set:(e,l)=>{t.removeItem(e),s.removeItem(e),a.setItem(e,l)},remove:e=>{t.removeItem(e),s.removeItem(e)},clear:()=>{t.clear(),s.clear()}}}function l(e,t=!1){a(!0).set("rememberMe",t),a(t).set("token",e)}function i(){let e="true"===a(!0).get("rememberMe");return a(e).get("token")}function o(){let e="true"===a(!0).get("rememberMe");a(e).remove("token")}s.d(t,{LP:()=>i,gy:()=>o,o4:()=>l})},1341:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=function(){var e=this,t=e._self._c;return t("div",[t("van-tabs",{attrs:{color:"var(--blue)",background:"var(--primary-color)"},on:{change:e.onTabChange},model:{value:e.currentTabIndex,callback:function(t){e.currentTabIndex=t},expression:"currentTabIndex"}},e._l(e.tabs,(function(e,s){return t("van-tab",{key:s,attrs:{title:e.title}})})),1),e._v(" "),t("custom-list",{key:e.currentTab.list.length,attrs:{list:e.currentTab.list,finished:e.currentTab.finished,"child-list-path":e.currentTab.childListPath,"detail-path":e.currentTab.detailPath,"update-path":e.currentTab.updatePath,"collection-key":e.currentTab.collectionKey},on:{delete:e.onDelete,refresh:e.onPullRefresh,load:e.onListLoad,collection:e.onCollection,uncollection:e.onUnCollection}}),e._v(" "),t("custom-search",{on:{search:e.onSearch}})],1)};a._withStripped=!0;var l=s(2111),i=s(5827);const o={components:{"custom-search":i.Ny,"custom-list":i.SP,"custom-tree":i.Uh},data:()=>({currentTabIndex:0,tabs:[{title:"专业",value:"major",listApi:"listMajor",deleteApi:"deleteMajor",childListPath:"/mobile/listSubject",updatePath:"/mobile/updateMajor",list:[],listParams:{key:"",pageSize:20,last:null},finished:!1,PRIMARY_KEY:"major_id"},{title:"科目",value:"subject",listApi:"listSubject",deleteApi:"deleteSubject",childListPath:"/mobile/listKnowledgeCatalog",updatePath:"/mobile/updateSubject",list:[],listParams:{key:"",pageSize:20,last:null},finished:!1,PRIMARY_KEY:"subject_id"},{title:"知识点目录",value:"knowledge_catalog",listApi:"listKnowledgeCatalog",deleteApi:"deleteTreeKnowledgeCatalog",childListPath:"/mobile/listKnowledge",updatePath:"/mobile/updateKnowledgeCatalog",list:[],listParams:{key:"",pageSize:20,last:null},finished:!1,PRIMARY_KEY:"knowledge_catalog_id"},{title:"知识点",value:"knowledge",listApi:"listKnowledge",deleteApi:"deleteKnowledge",detailPath:"/mobile/detailKnowledge",updatePath:"/mobile/updateKnowledge",collectionKey:"knowledge_collection_id",list:[],listParams:{key:"",pageSize:20,last:null},finished:!1,PRIMARY_KEY:"knowledge_id"}]}),computed:{currentTab:{get:function(){return this.tabs[this.currentTabIndex]},set:function(e){this.tabs[this.currentTabIndex]=e}}},async mounted(){this.init()},methods:{async getList(){let e=l.Z[this.currentTab.listApi];return await e(this.currentTab.listParams)},async setList(){let e=await this.getList(),{currentTab:t}=this;t.listParams.last=e.last,t.list=this.formatterList(e.list),this.currentTab={...t},e.last||(t.finished=!0),0===e.list?.length&&e.last&&this.setList()},init(){let{currentTab:e}=this;e.listParams.key="",e.listParams.last=null,this.currentTab={...e},this.setList()},formatterList(e){return e?.map((e=>e.code?{...e,_title:e.title,_code:e.code,title:e.code?`${e.title}(${e.code})`:e.title,id:e[this.currentTab.PRIMARY_KEY]}:{...e,id:e[this.currentTab.PRIMARY_KEY]}))},onTabChange(){this.init()},onPullRefresh(){let{currentTab:e}=this;e.listParams.last=null,e.finished=!1,e.list=[],this.currentTab={...e},this.setList()},onSearch(e){let{currentTab:t}=this;t.listParams.last=null,t.finished=!1,t.list=[],t.listParams.key=e,this.currentTab={...t},this.setList()},async onListLoad(){let e=await this.getList(),{currentTab:t}=this;t.listParams.last=e.last,t.list=t.list.concat(this.formatterList(e.list)),this.currentTab={...t},e.last||(t.finished=!0)},async onDelete(e){let t=l.Z[this.currentTab.deleteApi];await t([e]),this.$toast.success({message:"删除成功",onClose:()=>this.init()})},async onCollection(e){await l.Z.addKnowledgeCollection({knowledge_id:e}),this.$toast.success("收藏成功"),this.init()},async onUnCollection(e){await l.Z.deleteKnowledgeCollection([e]),this.$toast.success("取消收藏成功"),this.init()}}},n=(0,s(1900).Z)(o,a,[],!1,null,null,null).exports},2480:()=>{}}]);