"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[793],{8793:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});var i=function(){var t=this,e=t._self._c;return e("div",[e("add-button",{attrs:{path:"/addKnowledgeCatalog",query:t.addtionQuery}}),t._v(" "),e("custom-list-head",{attrs:{title:"科目",value:t.cateTitle}}),t._v(" "),e("custom-tree",{attrs:{list:t.list,"child-list-path":"/listKnowledge","update-path":"/updateKnowledgeCatalog","add-path":"/addKnowledgeCatalog"},on:{delete:t.onDelete,expand:t.onExpand}}),t._v(" "),e("custom-search",{on:{search:t.onSearch}})],1)};i._withStripped=!0;var s=a(2996),l=a(6537);const d="subject_id",n={components:{"add-button":l.HS,"custom-tree":l.Uh,"custom-search":l.Ny,"custom-list-head":l.K4},computed:{[d](){return this.$route.query.cate_id||this.$store.state.userInfo[d]},addtionQuery(){return{cate_id:this[d]}}},data:()=>({cateTitle:"",list:[],listParams:{keyword:void 0,equalFields:{[d]:"",parent_id:"null"}}}),async mounted(){this.init()},methods:{async getList(){return await s.Z.listNoPageKnowledgeCatalog(this.listParams)},async setList(){let t=await this.getList();this.list=this.formatterList(t.list)},async init(){let t=await s.Z.detailSubject(this[d],{fields:["title","code"]});this.cateTitle=t.data.code?`${t.data.title}(${t.data.code})`:t.data.title;let{listParams:e}=this;e.equalFields[d]=this[d],e.equalFields.parent_id="null",e.keyword=void 0,this.listParams={...e},this.list=[],this.setList()},formatterList(t){return t.sort(((t,e)=>t.create_date-e.create_date)).map((t=>{let e={text:t.title,data:{id:t.knowledge_catalog_id,cate_id:this[d]},state:{expanded:!1}};return t.child?.list.length&&(e.children=this.formatterList(t.child.list)),e}))},onSearch(t){let{listParams:e}=this;e.keyword=""===t?void 0:t,e.equalFields.parent_id="null",this.listParams={...e},this.list=[],this.setList()},onDelete(t){s.Z.deleteTreeKnowledgeCatalog([t]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.init()})}))},async onExpand(t){if(t.children.length>0&&void 0===t.children[0].data.text){let e={...this.listParams};e.keyword=void 0,e.equalFields.parent_id=t.data.id;let a=await s.Z.listNoPageKnowledgeCatalog(e),i=this.formatterList(a.list);t.children.find((t=>void 0===t.data.title)).remove(),i.forEach((e=>{t.append(e)}))}}}},o=(0,a(1900).Z)(n,i,[],!1,null,null,null).exports}}]);