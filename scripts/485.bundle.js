(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[485],{6149:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(6738),i=a.n(s),n=a(7705),o=a.n(n)()(i());o.push([t.id,"\n.subject .field-left[data-v-78e2ff6a] {\n    width: calc(100% - 30px);\n}\n.subject .field-right[data-v-78e2ff6a] {\n    width: 30px;\n    border-left: 1px solid #ebedf0;\n}\n.subject .btn-set[data-v-78e2ff6a] {\n    margin: 16px;\n}\n.subject .btn-set[data-v-78e2ff6a] .van-button {\n    width: 44%;\n}\n",""]);const l=o},5485:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"subject"},[e("van-form",{on:{submit:t.onSubmit}},[e("van-field",{attrs:{label:"专业",readonly:"",value:t.currentMajorTitle}}),t._v(" "),t._l(t.formData,(function(a,s){return e("div",{key:s,staticClass:"row-between"},[e("div",{staticClass:"field-left"},[e("van-field",{attrs:{name:"科目",label:"科目",placeholder:"科目",rules:[{required:!0,message:"请填写科目"}]},model:{value:a.title,callback:function(e){t.$set(a,"title",e)},expression:"v.title"}}),t._v(" "),e("van-field",{attrs:{name:"科目代号",label:"科目代号",placeholder:"科目代号"},model:{value:a.code,callback:function(e){t.$set(a,"code",e)},expression:"v.code"}})],1),t._v(" "),e("div",{staticClass:"full-center field-right"},[s>0?e("van-icon",{attrs:{name:"cross",color:"var(--red)"},on:{click:function(e){return t.onRemoveFieldSet(s)}}}):t._e()],1)])})),t._v(" "),e("div",{staticClass:"row-between btn-set"},[e("van-button",{attrs:{round:"",type:"primary",size:"small","native-type":"button"},on:{click:t.onAddFieldSet}},[t._v("新增")]),t._v(" "),e("van-button",{attrs:{round:"",type:"info",size:"small","native-type":"submit"}},[t._v("提交")])],1)],2)],1)};s._withStripped=!0;var i=a(3308),n=a(1241);const o="major_id",l={data:()=>({formData:[{title:"",code:"",[o]:""}],currentMajorTitle:""}),computed:{[o](){return this.$route.query.cate_id||this.$store.state.userInfo.major_id}},async mounted(){let t;this.formData[0].major_id=this.major_id,(0,n.QP)();try{t=await i.Z.detailMajor(this.major_id,{fields:["title","code"]})}catch(t){(0,n.Zk)()}this.currentMajorTitle=t.data.code?`${t.data.title}(${t.data.code})`:t.data.title,(0,n.Zk)()},methods:{onSubmit(){let t=[...this.formData];(0,n.QP)(),1===t.length?i.Z.addSubject((0,n.mG)(t[0])).then((()=>{(0,n.Zk)(),this.$toast.success({message:"添加成功",onClose:()=>this.$router.back()})}),(()=>(0,n.Zk)())):(t=t.map((t=>(0,n.mG)(t))),i.Z.addBatchSubject(t).then((()=>{(0,n.Zk)(),this.$toast.success({message:"添加成功",onClose:()=>this.$router.back()})}),(()=>(0,n.Zk)())))},onAddFieldSet(){this.formData.push({title:"",code:"",[o]:this.major_id})},onRemoveFieldSet(t){this.formData.splice(t,1)}}};a(5935);const r=(0,a(1900).Z)(l,s,[],!1,null,"78e2ff6a",null).exports},5935:(t,e,a)=>{var s=a(6149);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var i=(0,a(4023).Z)("a09a21fc",s,!1,{});s.locals||t.hot.accept(6149,(function(){var e=a(6149);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),i(e)})),t.hot.dispose((function(){i()}))}}]);