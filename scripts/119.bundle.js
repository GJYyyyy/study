(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[119],{6450:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var n=a(6738),i=a.n(n),l=a(7705),s=a.n(l)()(i());s.push([t.id,"\n.knowledge-catelog .field-left[data-v-7148ce18] {\n    width: calc(100% - 30px);\n}\n.knowledge-catelog .field-right[data-v-7148ce18] {\n    width: 30px;\n    border-left: 1px solid #ebedf0;\n}\n.knowledge-catelog .btn-set[data-v-7148ce18] {\n    margin: 16px;\n}\n.knowledge-catelog .btn-set[data-v-7148ce18] .van-button {\n    width: 44%;\n}\n",""]);const o=s},7119:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"knowledge-catelog"},[e("van-form",{on:{submit:t.onSubmit}},[e("van-field",{attrs:{label:"科目",readonly:"",value:t.currentSubjectTitle}}),t._v(" "),e("van-field",{attrs:{label:"父目录",readonly:"",value:t.parent?.title??"无"}}),t._v(" "),t._l(t.formData,(function(a,n){return e("div",{key:n,staticClass:"row-between"},[e("div",{staticClass:"field-left"},[e("van-field",{attrs:{name:"目录名",label:"目录名",placeholder:"目录名",rules:[{required:!0,message:"请填写目录名"}]},model:{value:a.title,callback:function(e){t.$set(a,"title",e)},expression:"v.title"}})],1),t._v(" "),e("div",{staticClass:"full-center field-right"},[n>0?e("van-icon",{attrs:{name:"cross",color:"var(--red)"},on:{click:function(e){return t.onRemoveFieldSet(n)}}}):t._e()],1)])})),t._v(" "),e("div",{staticClass:"row-between btn-set"},[e("van-button",{attrs:{round:"",type:"primary",size:"small","native-type":"button"},on:{click:t.onAddFieldSet}},[t._v("新增")]),t._v(" "),e("van-button",{attrs:{round:"",type:"info",size:"small","native-type":"submit"}},[t._v("提交")])],1)],2)],1)};n._withStripped=!0;var i=a(2996),l=a(1241);const s="knowledge_catalog_id",o="subject_id",d="parent_id",r={data:()=>({formData:[{title:"",[d]:"null",[o]:""}],currentSubjectTitle:"",parent:{}}),computed:{[o](){return this.$route.query.cate_id||this.$store.state.userInfo[o]},[d](){return this.$route.query.parent_id}},async mounted(){this.formData[0][o]=this[o];let t=await i.Z.detailSubject(this[o],{fields:["title","code"]});if(this.currentSubjectTitle=t.data.code?`${t.data.title}(${t.data.code})`:t.data.title,this.parent_id){let t=await i.Z.detailKnowledgeCatalog(this.parent_id,{fields:["title",s]});if(t.data?.[s]){let{formData:e}=this;e[0].parent_id=t.data[s],this.formData=[...e]}this.parent=t.data}},methods:{onSubmit(){let t=[...this.formData];1===t.length?i.Z.addKnowledgeCatalog((0,l.mG)(t[0])).then((()=>{this.$toast.success({message:"添加成功",onClose:()=>this.$router.back()})})):(t=t.map((t=>(0,l.mG)(t))),i.Z.addBatchKnowledgeCatalog(t).then((()=>{this.$toast.success({message:"添加成功",onClose:()=>this.$router.back()})})))},onAddFieldSet(){this.formData.push({title:"",[d]:this.formData[0].parent_id,[o]:this[o]})},onRemoveFieldSet(t){this.formData.splice(t,1)}}};a(9707);const c=(0,a(1900).Z)(r,n,[],!1,null,"7148ce18",null).exports},9707:(t,e,a)=>{var n=a(6450);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var i=(0,a(4023).Z)("8f9e649e",n,!1,{});n.locals||t.hot.accept(6450,(function(){var e=a(6450);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),i(e)})),t.hot.dispose((function(){i()}))}}]);