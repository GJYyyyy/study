"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[532],{9353:(t,s,i)=>{i.d(s,{f:()=>l});var e=i(6537),a=i(2996);const l=(t,s)=>({components:{"add-button":e.HS,"custom-list":e.SP,"custom-search":e.Ny},data:()=>({list:[],finished:!1,pullRefreshing:!1,loadLoading:!1}),async mounted(){this.init()},methods:{async getList(){return this.pullRefreshing=!0,this.loadLoading=!0,await a.Z[t](this.listParams)},async setList(){let t=await this.getList(),{listParams:s}=this;s.last=t.last,this.listParams={...s},this.list=this.formatterList(t.list),this.pullRefreshing=!1,this.loadLoading=!1,t.last?this.finished=!1:this.finished=!0},onPullRefresh(){let{listParams:t}=this;t.last=void 0,this.listParams={...t},this.setList()},onSearch(t){let{listParams:s}=this;s.last=void 0,s.keyword=""===t?void 0:t,this.listParams={...s},this.setList()},async onListLoad(){this.pullRefreshing=!0,this.loadLoading=!0;let t=await this.getList(),{listParams:s}=this;s.last=t.last,this.listParams={...s},this.list=this.list.concat(this.formatterList(t.list)),this.pullRefreshing=!1,this.loadLoading=!1,t.last?this.finished=!1:this.finished=!0},onDelete(t){a.Z[s]([t]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.init()})}))}}})},6532:(t,s,i)=>{i.r(s),i.d(s,{default:()=>r});var e=function(){var t=this,s=t._self._c;return s("div",[s("add-button",{attrs:{path:"/addKnowledge",query:t.addtionQuery}}),t._v(" "),s("custom-list-head",{attrs:{title:"知识点目录",value:t.cateTitle}}),t._v(" "),s("custom-list",{attrs:{"detail-path":"/detailKnowledge","update-path":"/updateKnowledge","collection-key":"knowledge_collection_id",list:t.list,finished:t.finished,"pull-refreshing":t.pullRefreshing,"load-loading":t.loadLoading},on:{refresh:t.onPullRefresh,load:t.onListLoad,delete:t.onDelete,collection:t.onCollection,uncollection:t.onUnCollection}}),t._v(" "),s("custom-search",{on:{search:t.onSearch}})],1)};e._withStripped=!0;var a=i(9353),l=i(6537),o=i(2996);const n=(0,a.f)("listKnowledge","deleteKnowledge"),d="knowledge_catalog_id",h={mixins:[n],components:{"custom-list-head":l.K4},computed:{[d](){return this.$route.query.cate_id||this.$store.state.userInfo[d]},addtionQuery(){return{cate_id:this[d]}}},data:()=>({listParams:{keyword:void 0,pageSize:20,last:void 0,equalFields:{[d]:""}},cateTitle:""}),methods:{async init(){let t=await o.Z.detailKnowledgeCatalog(this[d],{fields:["title"]});this.cateTitle=t.data.title;let{listParams:s}=this;s.equalFields[d]=this[d],s.keyword=void 0,s.last=void 0,this.listParams={...s},this.setList()},formatterList:t=>t.sort(((t,s)=>s.create_date-t.create_date)).map((t=>({...t,id:t.knowledge_id}))),async onCollection(t){await o.Z.addKnowledgeCollection({knowledge_id:t}),this.$toast.success("收藏成功"),this.init()},async onUnCollection(t){await o.Z.deleteKnowledgeCollection([t]),this.$toast.success("取消收藏成功"),this.init()}}},r=(0,i(1900).Z)(h,e,[],!1,null,null,null).exports}}]);