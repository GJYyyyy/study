"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[195],{9353:(t,s,i)=>{i.d(s,{f:()=>n});var e=i(7632),a=i(3308),l=i(1241);const n=(t,s)=>({components:{"add-button":e.HS,"custom-list":e.SP,"custom-search":e.Ny},data:()=>({list:[],finished:!1,pullRefreshing:!1,loadLoading:!1}),async mounted(){this.init()},methods:{async getList(){let s;this.pullRefreshing=!0,this.loadLoading=!0,(0,l.QP)();try{s=await a.Z[t](this.listParams)}catch(t){(0,l.Zk)()}return(0,l.Zk)(),s},async setList(){let t=await this.getList(),{listParams:s}=this;s.last=t.last,this.listParams={...s},this.list=this.formatterList(t.list),this.pullRefreshing=!1,this.loadLoading=!1,t.last?this.finished=!1:this.finished=!0},onPullRefresh(){let{listParams:t}=this;t.last=void 0,this.listParams={...t},this.setList()},onSearch(t){let{listParams:s}=this;s.last=void 0,s.keyword=""===t?void 0:t,this.listParams={...s},this.setList()},async onListLoad(){this.pullRefreshing=!0,this.loadLoading=!0;let t=await this.getList(),{listParams:s}=this;s.last=t.last,this.listParams={...s},this.list=this.list.concat(this.formatterList(t.list)),this.pullRefreshing=!1,this.loadLoading=!1,t.last?this.finished=!1:this.finished=!0},onDelete(t){(0,l.QP)(),a.Z[s]([t]).then((()=>{(0,l.Zk)(),this.$toast.success({message:"删除成功",onClose:()=>this.init()})}),(()=>(0,l.Zk)()))}}})},5195:(t,s,i)=>{i.r(s),i.d(s,{default:()=>h});var e=function(){var t=this,s=t._self._c;return s("div",[s("custom-list",{attrs:{"detail-path":"/detailKnowledge",list:t.list,finished:t.finished,"pull-refreshing":t.pullRefreshing,"load-loading":t.loadLoading},on:{refresh:t.onPullRefresh,load:t.onListLoad,delete:t.onDelete}})],1)};e._withStripped=!0;var a=i(9353),l=i(3308),n=i(1241);const o={mixins:[(0,a.f)("listKnowledgeWrong","deleteKnowledgeWrong")],data:()=>({listParams:{keyword:void 0,pageSize:20,last:void 0}}),methods:{init(){let{listParams:t}=this;t.keyword=void 0,t.last=void 0,this.listParams={...t},this.setList()},formatterList:t=>t.sort(((t,s)=>s.create_date-t.create_date)).map((t=>({...t,title:`${t.knowledge_title}(${t.count})`,id:t.knowledge_id}))),async onDelete(t){let s=this.list.find((s=>s.knowledge_id===t))?.knowledge_wrong_id;(0,n.QP)();try{await l.Z.deleteKnowledgeWrong([s])}catch(t){(0,n.Zk)()}(0,n.Zk)(),this.$toast.success("删除错题成功"),this.init()}}},h=(0,i(1900).Z)(o,e,[],!1,null,null,null).exports}}]);