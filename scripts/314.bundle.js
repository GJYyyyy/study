"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[314],{314:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var s=function(){var t=this,e=t._self._c;return e("div",[e("van-tabs",{attrs:{color:"var(--blue)",background:"var(--primary-color)"},on:{change:t.onTabChange},model:{value:t.currentTabIndex,callback:function(e){t.currentTabIndex=e},expression:"currentTabIndex"}},t._l(t.tabs,(function(t,i){return e("van-tab",{key:i,attrs:{title:t.title}})})),1),t._v(" "),e("custom-list",{attrs:{"child-list-path":t.currentTab.childListPath,"detail-path":t.currentTab.detailPath,"update-path":t.currentTab.updatePath,list:t.list,finished:t.finished,"pull-refreshing":t.pullRefreshing,"load-loading":t.loadLoading},on:{refresh:t.onPullRefresh,load:t.onListLoad,delete:t.onDelete}}),t._v(" "),e("custom-search",{on:{search:t.onSearch}})],1)};s._withStripped=!0;var a=i(3308),l=i(1241),n=i(7632);const d={components:{"custom-search":n.Ny,"custom-list":n.SP},data:()=>({list:[],listParams:{keyword:void 0,pageSize:20,last:void 0},finished:!1,pullRefreshing:!1,loadLoading:!1,currentTabIndex:0,tabs:[{title:"专业",value:"major",listApi:"listMajor",deleteApi:"deleteMajor",childListPath:"/listSubject",updatePath:"/updateMajor",PRIMARY_KEY:"major_id"},{title:"科目",value:"subject",listApi:"listSubject",deleteApi:"deleteSubject",childListPath:"/listKnowledgeCatalog",updatePath:"/updateSubject",PRIMARY_KEY:"subject_id"},{title:"知识点目录",value:"knowledge_catalog",listApi:"listKnowledgeCatalog",deleteApi:"deleteTreeKnowledgeCatalog",childListPath:"/listKnowledge",updatePath:"/updateKnowledgeCatalog",PRIMARY_KEY:"knowledge_catalog_id"},{title:"知识点",value:"knowledge",listApi:"listKnowledge",deleteApi:"deleteKnowledge",detailPath:"/detailKnowledge",updatePath:"/updateKnowledge",PRIMARY_KEY:"knowledge_id"}]}),computed:{currentTab(){return this.tabs[this.currentTabIndex]}},async mounted(){this.init()},methods:{async getList(){this.pullRefreshing=!0,this.loadLoading=!0;let t,e=a.Z[this.currentTab.listApi];(0,l.QP)();try{t=await e(this.listParams)}catch(t){(0,l.Zk)()}return(0,l.Zk)(),t},async setList(){let t=await this.getList(),{listParams:e}=this;e.last=t.last,this.listParams={...e},this.list=this.formatterList(t.list),this.pullRefreshing=!1,this.loadLoading=!1,t.last?this.finished=!1:this.finished=!0},init(){let{listParams:t}=this;t.keyword=void 0,t.last=void 0,this.listParams={...t},this.list=[],this.setList()},formatterList(t){return t.sort(((t,e)=>e.create_date-t.create_date)).map((t=>t.code?{...t,_title:t.title,_code:t.code,title:t.code?`${t.title}(${t.code})`:t.title,id:t[this.currentTab.PRIMARY_KEY]}:{...t,id:t[this.currentTab.PRIMARY_KEY]}))},onTabChange(){this.init()},onPullRefresh(){let{listParams:t}=this;t.last=void 0,this.listParams={...t},this.setList()},onSearch(t){let{listParams:e}=this;e.last=void 0,e.keyword=""===t?void 0:t,this.listParams={...e},this.setList()},async onListLoad(){this.pullRefreshing=!0,this.loadLoading=!0;let t=await this.getList(),{listParams:e}=this;e.last=t.last,this.listParams={...e},this.list=this.list.concat(this.formatterList(t.list)),this.pullRefreshing=!1,this.loadLoading=!1,t.last?this.finished=!1:this.finished=!0},async onDelete(t){let e=a.Z[this.currentTab.deleteApi];await e([t]),this.$toast.success({message:"删除成功",onClose:()=>this.init()})}}},r=(0,i(1900).Z)(d,s,[],!1,null,null,null).exports}}]);