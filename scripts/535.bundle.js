"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[535],{535:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var n=function(){var t=this,e=t._self._c;return e("div",[e("van-form",{on:{submit:t.onSubmit}},[e("van-field",{attrs:{label:"知识点目录",readonly:"",value:t.currentKnowledgeCatalogTitle}}),t._v(" "),e("van-field",{attrs:{name:"标题",label:"标题",placeholder:"标题",rules:[{required:!0,message:"请填写标题"}]},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}}),t._v(" "),e("van-field",{attrs:{label:"内容",readonly:""}}),t._v(" "),e("custome-markdown-editor",{on:{change:t.onMarkdownChange,save:t.onMarkdownSave}}),t._v(" "),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info",size:"small","native-type":"submit"}},[t._v("提交")])],1)],1)],1)};n._withStripped=!0;var o=a(3308),l=a(1241),s=a(7424);const r="knowledge_catalog_id",i={components:{"custome-markdown-editor":s.NW},data:()=>({formData:{title:"",content:"",[r]:""},currentKnowledgeCatalogTitle:""}),computed:{[r](){return this.$route.query.cate_id||this.$store.state.userInfo[r]}},async mounted(){let t;this.formData[r]=this[r],(0,l.QP)();try{t=await o.Z.detailKnowledgeCatalog(this[r],{fields:["title"]})}catch(t){(0,l.Zk)()}this.currentKnowledgeCatalogTitle=t.data.title,(0,l.Zk)()},methods:{onSubmit(){let t={...this.formData};t.content=encodeURIComponent(t.content),(0,l.QP)(),o.Z.addKnowledge((0,l.mG)(t)).then((()=>{(0,l.Zk)(),this.$toast.success({message:"添加成功",onClose:()=>this.$router.back()})}),(t=>(0,l.Zk)()))},onMarkdownChange(t){let{formData:e}=this;e.content=t},onMarkdownSave(t){let e={...this.formData};e.content=encodeURIComponent(t),(0,l.QP)(),o.Z.addKnowledge((0,l.mG)(e)).then((t=>{(0,l.Zk)(),this.$toast.success({message:"添加成功",onClose:()=>{this.$router.push({path:"/updateKnowledge",query:{id:t.primaryKey}})}})}),(t=>(0,l.Zk)()))}}},d=(0,a(1900).Z)(i,n,[],!1,null,null,null).exports}}]);