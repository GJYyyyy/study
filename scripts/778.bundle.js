"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[778],{1778:(t,e,s)=>{s.r(e),s.d(e,{default:()=>o});var a=function(){var t=this,e=t._self._c;return e("div",[e("add-button",{attrs:{path:"/addKnowledgeCatalog",query:t.addtionQuery}}),t._v(" "),e("custom-list-head",{attrs:{title:"科目",value:t.cateTitle}}),t._v(" "),e("custom-tree",{attrs:{list:t.list,"child-list-path":"/listKnowledge","update-path":"/updateKnowledgeCatalog","add-path":"/addKnowledgeCatalog"},on:{delete:t.onDelete}}),t._v(" "),e("custom-search",{on:{search:t.onSearch}})],1)};a._withStripped=!0;var i=s(2996),l=s(917);const d="subject_id",r={components:{"add-button":l.HS,"custom-tree":l.Uh,"custom-search":l.Ny,"custom-list-head":l.K4},computed:{[d](){return this.$route.query.cate_id||this.$store.state.userInfo[d]},addtionQuery(){return{cate_id:this[d]}}},data:()=>({cateTitle:"",list:[],listParams:{keyword:"",equalFields:{[d]:""}}}),async mounted(){this.init()},methods:{async getList(){return await i.Z.listTreeKnowledgeCatalog(this.listParams)},async setList(){let t=await this.getList();this.list=this.formatterList(t.list)},async init(){let t=await i.Z.detailSubject(this[d],{fields:["title","code"]});this.cateTitle=t.data.code?`${t.data.title}(${t.data.code})`:t.data.title;let{listParams:e}=this;e.equalFields[d]=this[d],e.keyword="",this.listParams={...e},this.list=[],this.setList()},formatterList(t){return t.sort(((t,e)=>t.create_date-e.create_date)).map((t=>{let e={...t,data:{id:t.knowledge_catalog_id},state:{expanded:!0}};return t.child?.list.length&&(e.children=this.formatterList(t.child.list)),e}))},onSearch(t){let{listParams:e}=this;e.keyword=t,this.listParams={...e},this.list=[],this.setList()},onDelete(t){i.Z.deleteTreeKnowledgeCatalog([t]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.init()})}))}}},o=(0,s(1900).Z)(r,a,[],!1,null,null,null).exports}}]);