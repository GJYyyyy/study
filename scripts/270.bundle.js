"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[270],{2270:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var o=function(){var t=this,e=t._self._c;return e("div",[e("van-form",{on:{submit:t.onSubmit}},[e("van-field",{attrs:{name:"专业",label:"专业",placeholder:"专业",rules:[{required:!0,message:"请填写专业"}]},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}}),t._v(" "),e("van-field",{attrs:{name:"专业代号",label:"专业代号",placeholder:"专业代号"},model:{value:t.formData.code,callback:function(e){t.$set(t.formData,"code",e)},expression:"formData.code"}}),t._v(" "),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info",size:"small","native-type":"submit"}},[t._v("提交")])],1)],1),t._v(" "),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"danger",size:"small"},on:{click:t.onDeleteMajor}},[t._v("删除")])],1)],1)};o._withStripped=!0;var s=a(3308),i=a(1241);const r={data:()=>({formData:{title:"",code:""}}),computed:{major_id(){return this.$route.query.id}},async mounted(){let t;(0,i.QP)();try{t=await s.Z.detailMajor(this.major_id,{fields:["title","code"]})}catch(t){(0,i.Zk)()}let{formData:e}=this;e.title=t.data.title,e.code=t.data.code,this.formData={...e},(0,i.Zk)()},methods:{onSubmit(){let t={...this.formData};(0,i.QP)(),s.Z.updateMajor(this.major_id,(0,i.mG)(t)).then((()=>{(0,i.Zk)(),this.$toast.success({message:"更新成功",onClose:()=>this.$router.back()})}),(()=>(0,i.Zk)()))},onDeleteMajor(){this.$dialog.confirm({message:"确认删除"}).then((()=>{(0,i.QP)(),s.Z.deleteMajor([this.major_id]).then((()=>{(0,i.Zk)(),this.$toast.success({message:"删除成功",onClose:()=>this.$router.back()})}),(()=>(0,i.Zk)()))}))}}},l=(0,a(1900).Z)(r,o,[],!1,null,null,null).exports}}]);