"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[542],{5542:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=function(){var e=this,t=e._self._c;return t("div",[t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{autocomplete:"username",name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.formData.uname,callback:function(t){e.$set(e.formData,"uname",t)},expression:"formData.uname"}}),e._v(" "),t("van-field",{attrs:{type:"password",autocomplete:"current-password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.formData.upswd,callback:function(t){e.$set(e.formData,"upswd",t)},expression:"formData.upswd"}}),e._v(" "),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info",size:"small","native-type":"submit"}},[e._v("登录")])],1)],1)],1)};s._withStripped=!0;var o=a(3308),r=a(8017),n=a(1241),u=a(1406);const l={data:()=>({formData:{uname:"",upswd:""}}),methods:{onSubmit(){let e={...this.formData};e.upswd=(0,u.MD5)(e.upswd).toString(),(0,n.QP)(),o.Z.userLogin((0,n.mG)(e)).then((e=>{(0,r.o4)(e.token,!0),this.$store.commit("updateUserInfo",e.user),(0,n.Zk)(),this.$toast.success({message:"登录成功",onClose:()=>this.$router.push("/home")})}),(()=>(0,n.Zk)()))}}},m=(0,a(1900).Z)(l,s,[],!1,null,null,null).exports}}]);