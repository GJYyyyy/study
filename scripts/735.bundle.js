"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[735],{6873:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});var s=function(){var t=this,e=t._self._c;return e("div",[e("add-button",{attrs:{path:"/mobile/addKnowledgeCatalog",query:t.addtionQuery}}),t._v(" "),e("custom-tree",{attrs:{list:t.list,"update-path":"/mobile/updateKnowledgeCatalog","child-list-path":"/mobile/listKnowledge","add-path":"/mobile/addKnowledgeCatalog","delete-path":"deleteTreeKnowledgeCatalog"}}),t._v(" "),e("custom-search",{on:{search:t.onSearch}})],1)};s._withStripped=!0;var a=i(4148),l=i(63);const o="subject_id",r={components:{"add-button":l.HS,"custom-tree":l.Uh,"custom-search":l.Ny},computed:{[o](){return this.$route.query.cate_id||this.$store.state[o]},addtionQuery(){return{cate_id:this[o]}}},data:()=>({list:[],filterOptions:{key:"",cate_id:""}}),async mounted(){let{filterOptions:t}=this;t.cate_id=this[o],this.filterOptions={...t},this.setList()},methods:{async getList(){return await a.Z.listTreeKnowledgeCatalog({filterOptions:this.filterOptions})},async setList(){let t=await this.getList();this.list=this.formatterList(t.list)},formatterList(t){return t?.map((t=>({...t,data:{id:t.knowledge_catalog_id},state:{expanded:!0},children:t.child?this.formatterList(t.child.list):[]})))},onSearch(t){let{filterOptions:e}=this;e.key=t,this.filterOptions={...e},this.list=[],this.setList()}}},d=(0,i(1900).Z)(r,s,[],!1,null,null,null).exports}}]);