"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[827],{4827:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});var a=function(){var e=this,t=e._self._c;return t("div",[t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{value:e.knowledgeCatalogList[e.knowledgeCatalogListIndex]?.title,readonly:"","is-link":"",label:"知识点目录",placeholder:"请选择知识点目录",rules:[{required:!0,message:"请选择知识点目录"}]},on:{click:e.onMajorPopupShow}}),e._v(" "),t("van-field",{attrs:{name:"标题",label:"标题",placeholder:"标题",rules:[{required:!0,message:"请填写标题"}]},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}}),e._v(" "),t("van-field",{attrs:{label:"内容",readonly:""}}),e._v(" "),e.defaultContent?t("custome-markdown-editor",{attrs:{value:e.defaultContent},on:{change:e.onMarkdownChange}}):e._e(),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info",size:"small","native-type":"submit"}},[e._v("提交")])],1)],1),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"danger",size:"small"},on:{click:e.onDeleteKnowledge}},[e._v("删除")])],1),e._v(" "),t("van-popup",{attrs:{position:"bottom"},model:{value:e.knowledgeCatalogPopupVisible,callback:function(t){e.knowledgeCatalogPopupVisible=t},expression:"knowledgeCatalogPopupVisible"}},[t("van-picker",{attrs:{title:"选择知识点目录","show-toolbar":"","value-key":"title","default-index":e.knowledgeCatalogListIndex,columns:e.knowledgeCatalogList},on:{confirm:e.onMajorConfirm,cancel:function(t){e.knowledgeCatalogPopupVisible=!1}}})],1)],1)};a._withStripped=!0;var n=o(2996),l=o(1241),i=o(8118);const s="knowledge_catalog_id",d={components:{"custome-markdown-editor":i.NW},data:()=>({formData:{title:"",content:"",[s]:""},defaultContent:"",knowledgeCatalogPopupVisible:!1,knowledgeCatalogList:[],knowledgeCatalogListIndex:-1}),computed:{knowledge_id(){return this.$route.query.id}},async mounted(){let e=(await n.Z.listNoPageKnowledgeCatalog()).list;this.knowledgeCatalogList=e;let t=await n.Z.detailKnowledge(this.knowledge_id),o=decodeURIComponent(t.data.content)||" ",{formData:a}=this;a.title=t.data.title,a.content=o,a[s]=t.data[s],this.formData={...a},this.defaultContent=o;let l=e.findIndex((e=>e[s]===t.data[s]));this.knowledgeCatalogListIndex=l},methods:{onSubmit(){let e={...this.formData};e[s]=this.knowledgeCatalogList[this.knowledgeCatalogListIndex]?.[s],e.content=encodeURIComponent(e.content),n.Z.updateKnowledge(this.knowledge_id,(0,l.mG)(e)).then((()=>{this.$toast.success({message:"更新成功",onClose:()=>this.$router.back()})}))},onDeleteKnowledge(){this.$dialog.confirm({message:"确认删除"}).then((()=>{n.Z.deleteKnowledge([this.knowledge_id]).then((()=>{this.$toast.success({message:"删除成功",onClose:()=>this.$router.back()})}))}))},onMajorPopupShow(){this.formData[s]&&-1!==this.knowledgeCatalogListIndex?this.$toast({message:"已指定父级，不能修改"}):this.knowledgeCatalogPopupVisible=!0},onMajorConfirm(e,t){this.knowledgeCatalogListIndex=t,this.knowledgeCatalogPopupVisible=!1},onMarkdownChange(e){let{formData:t}=this;t.content=e}}},r=(0,o(1900).Z)(d,a,[],!1,null,null,null).exports}}]);