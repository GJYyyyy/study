"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[272],{1272:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});var s=function(){var t=this,e=t._self._c;return e("div",[e("van-tabs",{attrs:{color:"var(--blue)",background:"var(--primary-color)"},on:{change:t.onTabChange},model:{value:t.currentTabIndex,callback:function(e){t.currentTabIndex=e},expression:"currentTabIndex"}},t._l(t.tabs,(function(t,i){return e("van-tab",{key:i,attrs:{title:t.title}})})),1),t._v(" "),e("custom-list",{attrs:{"child-list-path":t.currentTab.childListPath,"detail-path":t.currentTab.detailPath,"update-path":t.currentTab.updatePath,"collection-key":t.currentTab.collectionKey,list:t.list,finished:t.finished,"pull-refreshing":t.pullRefreshing,"load-loading":t.loadLoading},on:{refresh:t.onPullRefresh,load:t.onListLoad,delete:t.onDelete,collection:t.onCollection,uncollection:t.onUnCollection}}),t._v(" "),e("custom-search",{on:{search:t.onSearch}})],1)};s._withStripped=!0;var l=i(2996),a=i(9818);const n={components:{"custom-search":a.Ny,"custom-list":a.SP},data:()=>({list:[],listParams:{keyword:"",pageSize:20,last:void 0},finished:!1,pullRefreshing:!1,loadLoading:!1,currentTabIndex:0,tabs:[{title:"专业",value:"major",listApi:"listMajor",deleteApi:"deleteMajor",childListPath:"/listSubject",updatePath:"/updateMajor",PRIMARY_KEY:"major_id"},{title:"科目",value:"subject",listApi:"listSubject",deleteApi:"deleteSubject",childListPath:"/listKnowledgeCatalog",updatePath:"/updateSubject",PRIMARY_KEY:"subject_id"},{title:"知识点目录",value:"knowledge_catalog",listApi:"listKnowledgeCatalog",deleteApi:"deleteTreeKnowledgeCatalog",childListPath:"/listKnowledge",updatePath:"/updateKnowledgeCatalog",PRIMARY_KEY:"knowledge_catalog_id"},{title:"知识点",value:"knowledge",listApi:"listKnowledge",deleteApi:"deleteKnowledge",detailPath:"/detailKnowledge",updatePath:"/updateKnowledge",collectionKey:"knowledge_collection_id",PRIMARY_KEY:"knowledge_id"}]}),computed:{currentTab(){return this.tabs[this.currentTabIndex]}},async mounted(){this.init()},methods:{async getList(){this.pullRefreshing=!0,this.loadLoading=!0;let t=l.Z[this.currentTab.listApi];return await t(this.listParams)},async setList(){let t=await this.getList(),{listParams:e}=this;e.last=t.last,this.listParams={...e},this.list=this.formatterList(t.list),this.pullRefreshing=!1,this.loadLoading=!1,t.last?this.finished=!1:this.finished=!0},init(){let{listParams:t}=this;t.keyword="",t.last=void 0,this.listParams={...t},this.setList()},formatterList(t){return t?.map((t=>t.code?{...t,_title:t.title,_code:t.code,title:t.code?`${t.title}(${t.code})`:t.title,id:t[this.currentTab.PRIMARY_KEY]}:{...t,id:t[this.currentTab.PRIMARY_KEY]}))},onTabChange(){this.init()},onPullRefresh(){let{listParams:t}=this;t.last=void 0,this.listParams={...t},this.setList()},onSearch(t){let{listParams:e}=this;e.last=void 0,e.keyword=t,this.listParams={...e},this.setList()},async onListLoad(){this.pullRefreshing=!0,this.loadLoading=!0;let t=await this.getList(),{listParams:e}=this;e.last=t.last,this.listParams={...e},this.list=this.list.concat(this.formatterList(t.list)),this.pullRefreshing=!1,this.loadLoading=!1,t.last?this.finished=!1:this.finished=!0},async onDelete(t){let e=l.Z[this.currentTab.deleteApi];await e([t]),this.$toast.success({message:"删除成功",onClose:()=>this.init()})},async onCollection(t){await l.Z.addKnowledgeCollection({knowledge_id:t}),this.$toast.success("收藏成功"),this.init()},async onUnCollection(t){await l.Z.deleteKnowledgeCollection([t]),this.$toast.success("取消收藏成功"),this.init()}}},o=(0,i(1900).Z)(n,s,[],!1,null,null,null).exports}}]);