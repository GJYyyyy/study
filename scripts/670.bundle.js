"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[670],{9353:(t,s,i)=>{i.d(s,{f:()=>h});var e=i(7632),a=i(3308),l=i(1241);const h=(t,s)=>({components:{"add-button":e.HS,"custom-list":e.SP,"custom-search":e.Ny},data:()=>({list:[],finished:!1,pullRefreshing:!1,loadLoading:!1}),async mounted(){this.init()},methods:{async getList(){let s;this.pullRefreshing=!0,this.loadLoading=!0,(0,l.QP)();try{s=await a.Z[t](this.listParams)}catch(t){(0,l.Zk)()}return(0,l.Zk)(),s},async setList(){let t=await this.getList(),{listParams:s}=this;s.last=t.last,this.listParams={...s},this.list=this.formatterList(t.list),this.pullRefreshing=!1,this.loadLoading=!1,t.last?this.finished=!1:this.finished=!0},onPullRefresh(){let{listParams:t}=this;t.last=void 0,this.listParams={...t},this.setList()},onSearch(t){let{listParams:s}=this;s.last=void 0,s.keyword=""===t?void 0:t,this.listParams={...s},this.setList()},async onListLoad(){this.pullRefreshing=!0,this.loadLoading=!0;let t=await this.getList(),{listParams:s}=this;s.last=t.last,this.listParams={...s},this.list=this.list.concat(this.formatterList(t.list)),this.pullRefreshing=!1,this.loadLoading=!1,t.last?this.finished=!1:this.finished=!0},onDelete(t){(0,l.QP)(),a.Z[s]([t]).then((()=>{(0,l.Zk)(),this.$toast.success({message:"删除成功",onClose:()=>this.init()})}),(()=>(0,l.Zk)()))}}})},2670:(t,s,i)=>{i.r(s),i.d(s,{default:()=>l});var e=function(){var t=this,s=t._self._c;return s("div",[s("add-button",{attrs:{path:"/addMajor"}}),t._v(" "),s("custom-list",{attrs:{"child-list-path":"/listSubject","update-path":"/updateMajor",list:t.list,finished:t.finished,"pull-refreshing":t.pullRefreshing,"load-loading":t.loadLoading},on:{refresh:t.onPullRefresh,load:t.onListLoad,delete:t.onDelete}}),t._v(" "),s("custom-search",{on:{search:t.onSearch}})],1)};e._withStripped=!0;const a={mixins:[(0,i(9353).f)("listMajor","deleteMajor")],data:()=>({listParams:{keyword:void 0,pageSize:20,last:void 0}}),methods:{init(){let{listParams:t}=this;t.keyword=void 0,t.last=void 0,this.listParams={...t},this.setList()},formatterList:t=>t.sort(((t,s)=>s.create_date-t.create_date)).map((t=>({...t,_title:t.title,_code:t.code,title:t.code?`${t.title}(${t.code})`:t.title,id:t.major_id})))}},l=(0,i(1900).Z)(a,e,[],!1,null,null,null).exports}}]);