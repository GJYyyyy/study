"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[239],{9353:(t,s,i)=>{i.d(s,{f:()=>a});var e=i(7866),l=i(2996);const a=(t,s)=>({components:{"add-button":e.HS,"custom-list":e.SP,"custom-search":e.Ny},data:()=>({list:[],finished:!1,pullRefreshing:!1,loadLoading:!1}),async mounted(){this.init()},methods:{async getList(){return this.pullRefreshing=!0,this.loadLoading=!0,await l.Z[t](this.listParams)},async setList(){let t=await this.getList(),{listParams:s}=this;s.last=t.last,this.listParams={...s},this.list=this.formatterList(t.list),this.pullRefreshing=!1,this.loadLoading=!1,t.last?this.finished=!1:this.finished=!0},onPullRefresh(){let{listParams:t}=this;t.last=void 0,this.listParams={...t},this.setList()},onSearch(t){let{listParams:s}=this;s.last=void 0,s.keyword=t,this.listParams={...s},this.setList()},async onListLoad(){this.pullRefreshing=!0,this.loadLoading=!0;let t=await this.getList(),{listParams:s}=this;s.last=t.last,this.listParams={...s},this.list=this.list.concat(this.formatterList(t.list)),this.pullRefreshing=!1,this.loadLoading=!1,t.last?this.finished=!1:this.finished=!0},onDelete(t){l.Z[s]([t]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.init()})}))}}})},6239:(t,s,i)=>{i.r(s),i.d(s,{default:()=>o});var e=function(){var t=this,s=t._self._c;return s("div",[s("custom-list",{attrs:{"detail-path":"/detailKnowledge",list:t.list,finished:t.finished,"pull-refreshing":t.pullRefreshing,"load-loading":t.loadLoading},on:{refresh:t.onPullRefresh,load:t.onListLoad,delete:t.onDelete}})],1)};e._withStripped=!0;var l=i(9353),a=i(2996);const n={mixins:[(0,l.f)("listKnowledgeCollection","deleteKnowledgeCollection")],data:()=>({listParams:{keyword:"",pageSize:20,last:void 0}}),methods:{init(){let{listParams:t}=this;t.keyword="",t.last=void 0,this.listParams={...t},this.setList()},formatterList:t=>t.sort(((t,s)=>s.create_date-t.create_date)).map((t=>({...t,title:t.knowledge_title,id:t.knowledge_id}))),async onDelete(t){let s=this.list.find((s=>s.knowledge_id===t))?.knowledge_collection_id;await a.Z.deleteKnowledgeCollection([s]),this.$toast.success("取消收藏成功"),this.init()}}},o=(0,i(1900).Z)(n,e,[],!1,null,null,null).exports}}]);