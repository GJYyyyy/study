"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[353],{9353:(t,s,i)=>{i.d(s,{f:()=>l});var e=i(9818),a=i(2996);const l=(t,s)=>({components:{"add-button":e.HS,"custom-list":e.SP,"custom-search":e.Ny},data:()=>({list:[],finished:!1,pullRefreshing:!1,loadLoading:!1}),async mounted(){this.init()},methods:{async getList(){return this.pullRefreshing=!0,this.loadLoading=!0,await a.Z[t](this.listParams)},async setList(){let t=await this.getList(),{listParams:s}=this;s.last=t.last,this.listParams={...s},this.list=this.formatterList(t.list),this.pullRefreshing=!1,this.loadLoading=!1,t.last?this.finished=!1:this.finished=!0},onPullRefresh(){let{listParams:t}=this;t.last=void 0,this.listParams={...t},this.setList()},onSearch(t){let{listParams:s}=this;s.last=void 0,s.keyword=t,this.listParams={...s},this.setList()},async onListLoad(){this.pullRefreshing=!0,this.loadLoading=!0;let t=await this.getList(),{listParams:s}=this;s.last=t.last,this.listParams={...s},this.list=this.list.concat(this.formatterList(t.list)),this.pullRefreshing=!1,this.loadLoading=!1,t.last?this.finished=!1:this.finished=!0},onDelete(t){a.Z[s]([t]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.init()})}))}}})},6353:(t,s,i)=>{i.r(s),i.d(s,{default:()=>l});var e=function(){var t=this,s=t._self._c;return s("div",[s("add-button",{attrs:{path:"/addMajor"}}),t._v(" "),s("custom-list",{attrs:{"child-list-path":"/listSubject","update-path":"/updateMajor",list:t.list,finished:t.finished,"pull-refreshing":t.pullRefreshing,"load-loading":t.loadLoading},on:{refresh:t.onPullRefresh,load:t.onListLoad,delete:t.onDelete}}),t._v(" "),s("custom-search",{on:{search:t.onSearch}})],1)};e._withStripped=!0;const a={mixins:[(0,i(9353).f)("listMajor","deleteMajor")],data:()=>({listParams:{keyword:"",pageSize:20,last:void 0}}),methods:{init(){let{listParams:t}=this;t.keyword="",t.last=void 0,this.listParams={...t},this.setList()},formatterList:t=>t.sort(((t,s)=>s.create_date-t.create_date)).map((t=>({...t,_title:t.title,_code:t.code,title:t.code?`${t.title}(${t.code})`:t.title,id:t.major_id})))}},l=(0,i(1900).Z)(a,e,[],!1,null,null,null).exports}}]);