(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[559],{4148:(e,t,s)=>{"use strict";s.d(t,{Z:()=>f});var a=s(6161),i=s(7608),l=s(5680),o=s(8017),n=s(8159),r=s(1406),d=s(1241);let c=0;function u(e){let t=(0,r.MD5)(e.baseURL+e.url+e.method+JSON.stringify(e.params)+("object"==typeof e.data?JSON.stringify(e.data):e.data)).toString();return e.url+"/"+t}let g=0;const p=()=>{g&&clearTimeout(g),g=setTimeout((()=>{n.Z.commit("hidePageLoading")}),200)},h=p;let b="";b="https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws";const m=a.Z.create({baseURL:"https://cdc6cwbft6ld3qffubzgvckasy0ysvbj.lambda-url.us-east-1.on.aws/api",timeout:1e4});m.interceptors.request.use((e=>{e.headers.setContentType("text/plain;charset=UTF-8");let t=(0,o.LP)();return e.headers.Authorization="Bearer "+t,n.Z.commit("showPageLoading"),(e=>{c||(c=setTimeout((()=>{n.Z.commit("clearCache"),c=0}),18e5));let t=u(e);if(new RegExp(`/(${["add","update","delete","collection","unCollection"].join("|")})`).test(e.url)){let e=/\/\w+\/\w+\//.exec(t)[0].replace(/(^\/|\/$)/g,"").split("/");n.Z.commit("removeCache",e[0])}let s=n.Z.state.cache[t];return s?Promise.reject(s):e})(e)}),(e=>(l.Z.fail({message:e.message}),Promise.reject(e)))),m.interceptors.response.use((e=>(p(),(e=>{let t={...e},s=(0,d.aJ)(t),a=u(s.config);n.Z.commit("addCache",{[a]:s})})(e),e.data.data)),(e=>{if(h(),e instanceof Error){let t=e.response;return t?401===t.status?l.Z.fail({message:t.statusText,onClose:()=>i.Z.push("/mobile/login")}):t.data.message?l.Z.fail({message:t.data.message}):l.Z.fail({message:t.statusText}):l.Z.fail({message:e.message}),Promise.reject(e)}return t=e,Promise.resolve(t.data.data);var t}));const w=m,f={userRegister:e=>w.post("/user/register",e),updateUser:(e,t)=>w.post("/user/update/"+e,t),getUserInfo:e=>w.get("/user/getUserInfo/"+e),userLogin:e=>w.post("/user/login",e),addMajor:e=>w.post("/major/add",e),deleteMajor:e=>w.post("/major/delete",{ids:e}),updateMajor:(e,t)=>w.post("/major/update/"+e,t),detailMajor:(e,t)=>w.post("/major/detail/"+e,t),listMajor:e=>w.post("/major/list",e),listNoPageMajor:e=>w.post("/major/listNoPage",e),addSubject:e=>w.post("/subject/add",e),deleteSubject:e=>w.post("/subject/delete",{ids:e}),updateSubject:(e,t)=>w.post("/subject/update/"+e,t),detailSubject:(e,t)=>w.post("/subject/detail/"+e,t),listSubject:e=>w.post("/subject/list",e),listNoPageSubject:e=>w.post("/subject/listNoPage",e),addKnowledgeCatalog:e=>w.post("/knowledgeCatalog/add",e),deleteKnowledgeCatalog:e=>w.post("/knowledgeCatalog/delete",{ids:e}),deleteTreeKnowledgeCatalog:e=>w.post("/knowledgeCatalog/deleteTree",{ids:e}),updateKnowledgeCatalog:(e,t)=>w.post("/knowledgeCatalog/update/"+e,t),detailKnowledgeCatalog:(e,t)=>w.post("/knowledgeCatalog/detail/"+e,t),listKnowledgeCatalog:e=>w.post("/knowledgeCatalog/list",e),listNoPageKnowledgeCatalog:e=>w.post("/knowledgeCatalog/listNoPage",e),listTreeKnowledgeCatalog:e=>w.post("/knowledgeCatalog/listTree",e),addKnowledge:e=>w.post("/knowledge/add",e),deleteKnowledge:e=>w.post("/knowledge/delete",{ids:e}),updateKnowledge:(e,t)=>w.post("/knowledge/update/"+e,t),detailKnowledge:(e,t)=>w.post("/knowledge/detail/"+e,t),listKnowledge:e=>w.post("/knowledge/list",e),listNoPageKnowledge:e=>w.post("/knowledge/listNoPage",e),collectionKnowledge:e=>w.post("/knowledge/collection",e),unCollectionKnowledge:e=>w.post("/knowledge/unCollection",e)}},8017:(e,t,s)=>{"use strict";function a(e=!1){e=Boolean(e);let t=window.localStorage,s=window.sessionStorage,a=e?t:s;return{get:e=>a.getItem(e),set:(e,i)=>{t.removeItem(e),s.removeItem(e),a.setItem(e,i)},remove:e=>{t.removeItem(e),s.removeItem(e)},clear:()=>{t.clear(),s.clear()}}}function i(e,t=!1){a(!0).set("rememberMe",t),a(t).set("token",e)}function l(){let e="true"===a(!0).get("rememberMe");return a(e).get("token")}function o(){let e="true"===a(!0).get("rememberMe");a(e).remove("token")}s.d(t,{LP:()=>l,gy:()=>o,o4:()=>i})},4539:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=function(){var e=this,t=e._self._c;return t("div",[t("van-tabs",{attrs:{color:"var(--blue)",background:"var(--primary-color)"},on:{change:e.onTabChange},model:{value:e.currentTabIndex,callback:function(t){e.currentTabIndex=t},expression:"currentTabIndex"}},e._l(e.tabs,(function(e,s){return t("van-tab",{key:s,attrs:{title:e.title}})})),1),e._v(" "),t("custom-list",{attrs:{list:e.currentTab.list,finished:e.currentTab.finished,"child-list-path":e.currentTab.childListPath,"detail-path":e.currentTab.detailPath,"update-path":e.currentTab.updatePath,"collection-key":e.currentTab.collectionKey},on:{delete:e.onDelete,refresh:e.onPullRefresh,load:e.onListLoad,collection:e.onCollection,uncollection:e.onUnCollection}}),e._v(" "),t("custom-search",{on:{search:e.onSearch}})],1)};a._withStripped=!0;var i=s(4148),l=s(862);const o={components:{"custom-search":l.Ny,"custom-list":l.SP,"custom-tree":l.Uh},data:()=>({currentTabIndex:0,tabs:[{title:"专业",value:"major",listApi:"listMajor",deleteApi:"deleteMajor",childListPath:"/mobile/listSubject",updatePath:"/mobile/updateMajor",list:[],filterOptions:{key:""},pageOptions:{pageSize:15,last:null},total:0,finished:!1,PRIMARY_KEY:"major_id"},{title:"科目",value:"subject",listApi:"listSubject",deleteApi:"deleteSubject",childListPath:"/mobile/listKnowledgeCatalog",updatePath:"/mobile/updateSubject",list:[],filterOptions:{key:""},pageOptions:{pageSize:15,last:null},total:0,finished:!1,PRIMARY_KEY:"subject_id"},{title:"知识点目录",value:"knowledge_catalog",listApi:"listKnowledgeCatalog",deleteApi:"deleteTreeKnowledgeCatalog",childListPath:"/mobile/listKnowledge",updatePath:"/mobile/updateKnowledgeCatalog",list:[],filterOptions:{key:""},pageOptions:{pageSize:15,last:null},total:0,finished:!1,PRIMARY_KEY:"knowledge_catalog_id"},{title:"知识点",value:"knowledge",listApi:"listKnowledge",deleteApi:"deleteKnowledge",detailPath:"/mobile/detailKnowledge",updatePath:"/mobile/updateKnowledge",collectionKey:"knowledge_collection_id",list:[],filterOptions:{key:""},pageOptions:{pageSize:15,last:null},total:0,finished:!1,PRIMARY_KEY:"knowledge_id"}]}),computed:{userInfo(){return this.$store.state.userInfo},currentTab:{get:function(){return this.tabs[this.currentTabIndex]},set:function(e){this.tabs[this.currentTabIndex]=e}}},async mounted(){this.init()},methods:{async getList(){let e=i.Z[this.currentTab.listApi];return await e({filterOptions:this.currentTab.filterOptions,pageOptions:this.currentTab.pageOptions})},async setList(){let e=await this.getList(),{pageOptions:t}=this.currentTab;this.currentTab.pageOptions={...t},t.last=e.last,this.currentTab.total=e.total,this.currentTab.list=this.formatterList(e.list),e.last||(this.currentTab.finished=!0),0===e.list?.length&&e.last&&this.setList(),this.currentTab={...this.currentTab}},init(){let{filterOptions:e}=this.currentTab;e.key="",this.currentTab.filterOptions={...e},this.currentTab={...this.currentTab},this.setList()},formatterList(e){return e?.map((e=>e.code?{...e,_title:e.title,_code:e.code,title:e.code?`${e.title}(${e.code})`:e.title,id:e[this.currentTab.PRIMARY_KEY]}:{...e,id:e[this.currentTab.PRIMARY_KEY]}))},onTabChange(e){this.init()},onPullRefresh(){let{pageOptions:e}=this.currentTab;e.last=null,this.currentTab.pageOptions={...e},this.currentTab.finished=!1,this.currentTab.list=[],this.currentTab={...this.currentTab},this.setList()},onSearch(e){let{pageOptions:t,filterOptions:s}=this.currentTab;t.last=null,s.key=e,this.currentTab.pageOptions={...t},this.currentTab.filterOptions={...s},this.currentTab.finished=!1,this.currentTab.list=[],this.currentTab={...this.currentTab},this.setList()},async onListLoad(){let e=await this.getList(),{pageOptions:t}=this.currentTab;t.last=e.last,this.currentTab.pageOptions={...t},this.currentTab.total=e.total,this.currentTab.list=this.currentTab.list.concat(this.formatterList(e.list)),e.last||(this.currentTab.finished=!0)},async onDelete(e){let t=i.Z[this.currentTab.deleteApi];await t([e]),this.$toast.success({message:"删除成功",onClose:()=>this.init()})},async onCollection(e){await i.Z.collectionKnowledge({knowledge_id:e}),this.$toast.success("收藏成功"),this.init()},async onUnCollection(e){await i.Z.unCollectionKnowledge({[this.currentTab.collectionKey]:e}),this.$toast.success("取消收藏成功"),this.init()}}},n=(0,s(1900).Z)(o,a,[],!1,null,null,null).exports},2480:()=>{}}]);