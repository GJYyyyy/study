"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[713],{7713:(t,e,i)=>{i.r(e),i.d(e,{default:()=>u});var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"col-center",staticStyle:{padding:"16px"}},[e("van-icon",{attrs:{name:"user-circle-o",color:"var(--blue)",size:"60"}}),t._v(" "),e("b",{staticStyle:{"margin-left":"16px","font-size":"18px"}},[t._v(t._s(t.userInfo.uname))])],1),t._v(" "),e("van-form",{on:{submit:t.onUpdateUser}},[e("van-field",{attrs:{readonly:"","is-link":"",value:t.majorList[t.majorListIndex]?.title,label:"当前选中专业",placeholder:"请选择",rules:[{required:!0,message:"请选择专业"}]},on:{click:function(e){t.majorPopupVisible=!0}}}),t._v(" "),e("van-field",{attrs:{readonly:"","is-link":"",value:t.subjectList[t.subjectListIndex]?.title,label:"当前选中科目",placeholder:"请选择",rules:[{required:!0,message:"请选择科目"}]},on:{click:function(e){t.subjectPopupVisible=!0}}}),t._v(" "),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info",size:"small","native-type":"submit"}},[t._v("修改")])],1),t._v(" "),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"danger",size:"small"},on:{click:t.onLogout}},[t._v("退出登录")])],1)],1),t._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:t.majorPopupVisible,callback:function(e){t.majorPopupVisible=e},expression:"majorPopupVisible"}},[e("van-picker",{attrs:{title:"选择专业","show-toolbar":"","value-key":"title","default-index":t.majorListIndex,columns:t.majorList},on:{confirm:t.onMajorConfirm,cancel:function(e){t.majorPopupVisible=!1}}})],1),t._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:t.subjectPopupVisible,callback:function(e){t.subjectPopupVisible=e},expression:"subjectPopupVisible"}},[e("van-picker",{attrs:{title:"选择科目","show-toolbar":"","value-key":"title","default-index":t.subjectListIndex,columns:t.subjectList},on:{confirm:t.onSubjectConfirm,cancel:function(e){t.subjectPopupVisible=!1}}})],1)],1)};s._withStripped=!0;var o=i(2996),a=i(8017),n=i(1241);const r={data:()=>({formData:{major_id:"",subject_id:""},majorPopupVisible:!1,majorList:[],majorListIndex:-1,subjectPopupVisible:!1,subjectList:[],subjectListIndex:-1}),computed:{userInfo(){return this.$store.state.userInfo}},watch:{async majorListIndex(t){let e=t,i=this.majorList[e].major_id;await this.getSubjectList(i)}},beforeMount(){let{formData:t,userInfo:e}=this;t.major_id=e.major_id,t.subject_id=e.subject_id,this.formData={...t}},async mounted(){this.init()},methods:{async init(){await this.getMajorList(),this.userInfo.major_id&&await this.getSubjectList(this.userInfo.major_id)},async getMajorList(){let t=(await o.Z.listNoPageMajor()).list?.map((t=>({...t,_title:t.title,_code:t.code,title:t.code?`${t.title}(${t.code})`:t.title}))),e=t.findIndex((t=>t.major_id===this.userInfo.major_id));this.majorList=t,this.majorListIndex=e},async getSubjectList(t){let e=(await o.Z.listNoPageSubject({equalFields:{major_id:t}})).list?.map((t=>({...t,_title:t.title,_code:t.code,title:t.code?`${t.title}(${t.code})`:t.title}))),i=e.findIndex((t=>t.subject_id===this.userInfo.subject_id));this.subjectList=e,this.subjectListIndex=i},async getUserInfo(){let t=await o.Z.getUserInfo(this.userInfo.user_id);(0,a.o4)(t.token,!0),this.$store.commit("updateUserInfo",t.user)},onLogout(){(0,a.gy)(),this.$store.commit("clearUserInfo"),this.$store.commit("clearCache"),this.$router.push("/login")},async onUpdateUser(){let t={...this.formData};t.major_id=this.majorList[this.majorListIndex].major_id,t.subject_id=this.subjectList[this.subjectListIndex].subject_id,await o.Z.updateUser(this.userInfo.user_id,(0,n.mG)(t)),this.$toast.success({message:"更新成功",onClose:()=>{this.getUserInfo(),this.$router.push("/home")}})},onMajorConfirm(t,e){this.majorListIndex=e,this.majorPopupVisible=!1},onSubjectConfirm(t,e){this.subjectListIndex=e,this.subjectPopupVisible=!1}}},u=(0,i(1900).Z)(r,s,[],!1,null,null,null).exports}}]);