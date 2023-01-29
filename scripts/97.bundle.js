(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[97],{1454:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>r});var i=e(6738),s=e.n(i),a=e(7705),o=e.n(a)()(s());o.push([t.id,"\n.random-qa[data-v-44a89fd0] {\n    padding: 16px;\n    margin-bottom: 16px;\n}\n.random-qa .rate[data-v-44a89fd0] {\n    margin-bottom: 12px;\n}\n.random-qa .subject > b[data-v-44a89fd0],\n.random-qa .question > b[data-v-44a89fd0],\n.random-qa .answer > b[data-v-44a89fd0] {\n    display: block;\n    margin-bottom: 4px;\n}\n.random-qa .toggle-question[data-v-44a89fd0] {\n    margin-top: 16px;\n}\n.random-qa .submit-question[data-v-44a89fd0] {\n    margin-top: 16px;\n}\n.random-qa .answer > textarea[data-v-44a89fd0] {\n    resize: none;\n    width: 100%;\n    height: 100px;\n    padding: 8px;\n    box-sizing: border-box;\n    border-color: var(--gray-3);\n    border-radius: 4px;\n}\n.random-qa .right-answer[data-v-44a89fd0] {\n    padding: 8px;\n    box-sizing: border-box;\n    max-height: 80vh;\n    overflow-y: auto;\n}\n.random-qa[data-v-44a89fd0] .van-dialog {\n    top: 50%;\n}\n.random-qa[data-v-44a89fd0] .custom-markdown-editor {\n    pointer-events: none;\n}\n",""]);const r=o},2097:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>u});var i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"random-qa"},[t.questionList.length?n("div",[n("div",{staticClass:"subject"},[n("b",[t._v("科目：")]),t._v(" "),n("p",[t._v(t._s(t.subjectTitle))])]),t._v(" "),n("van-divider"),t._v(" "),n("div",[n("div",{staticClass:"question"},[n("b",[t._v("问：")]),t._v(" "),n("p",[t._v(t._s(t.currentQuestion?.title))])]),t._v(" "),n("van-divider"),t._v(" "),n("div",{staticClass:"answer"},[n("b",[t._v("答：")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],domProps:{value:t.answer},on:{input:function(n){n.target.composing||(t.answer=n.target.value)}}})]),t._v(" "),n("van-divider"),t._v(" "),n("div",{staticClass:"show-right-answer-btn row-center"},[n("van-button",{attrs:{size:"small",type:"danger",block:""},on:{click:t.onToggleAnswerShow}},[t._v("显示答案（标记错题）")])],1),t._v(" "),n("van-dialog",{attrs:{width:"90%",title:"答案","lazy-render":!1},on:{opened:t.onDialogOpened},model:{value:t.rightAnswerVisible,callback:function(n){t.rightAnswerVisible=n},expression:"rightAnswerVisible"}},[n("div",{staticClass:"right-answer"},[n("custome-markdown-editor",{attrs:{readonly:!0,value:t.currentQuestion?.content}})],1)])],1),t._v(" "),n("div",{staticClass:"row-between col-center toggle-question"},[n("van-button",{attrs:{size:"small",type:"info"},on:{click:t.onClickPrevBtn}},[t._v("上一题")]),t._v(" "),n("span",[t._v(t._s(t.rate))]),t._v(" "),n("van-button",{attrs:{size:"small",type:"info"},on:{click:t.onClickNextBtn}},[t._v("下一题")])],1),t._v(" "),n("div",{staticClass:"submit-question"},[n("van-button",{attrs:{block:"",size:"small",type:"primary"},on:{click:t.onClickSubmit}},[t._v("提交")])],1)],1):n("van-empty",{attrs:{description:"当前科目下没有知识点"}})],1)};i._withStripped=!0;var s=e(3308),a=e(1241),o=e(3485);const r="knowledge_random_qa_id",d={components:{"custome-markdown-editor":o.NW},data:()=>({[r]:"",questionList:[],currentQuestionListIndex:0,rightAnswerVisible:!1,subjectTitle:"",answer:""}),computed:{userInfo(){return this.$store.state.userInfo},rate(){return 0===this.questionList.length?"0 / 0":`${this.currentQuestionListIndex+1} / ${this.questionList.length}`},currentQuestion:{get:function(){return this.questionList[this.currentQuestionListIndex]},set:function(t){this.questionList[this.currentQuestionListIndex]=t}}},mounted(){this.init()},methods:{async init(){if(!this.userInfo.subject_id)return void this.$toast.fail({message:"请先选择科目",onClose:()=>{this.$router.push("/userInfo")}});let t,n;(0,a.QP)();try{t=await s.Z.detailSubject(this.userInfo.subject_id,{fields:["title","code"]})}catch(t){(0,a.Zk)()}this.subjectTitle=t.data.code?`${t.data.title}(${t.data.code})`:t.data.title;try{n=await s.Z.listRandomKnowledge({randomLimit:15,equalFields:{subject_id:this.userInfo.subject_id}})}catch(t){(0,a.Zk)()}this[r]=n[r],this.questionList=this.formatterList(n.list),(0,a.Zk)()},formatterList:t=>t.map((t=>({...t,content:"",_wrong:!1}))),async onToggleAnswerShow(){await this.$dialog.confirm({message:"确认显示答案？"}),this.rightAnswerVisible=!0,this.currentQuestion._wrong=!0,(0,a.QP)();try{s.Z.addKnowledgeWrong({knowledge_id:this.currentQuestion.knowledge_id})}catch(t){(0,a.Zk)()}(0,a.Zk)()},async onDialogOpened(){let t;(0,a.QP)();try{t=await s.Z.detailKnowledge(this.currentQuestion.knowledge_id,{fields:["content"]})}catch(t){(0,a.Zk)()}this.questionList[this.currentQuestionListIndex].content=decodeURIComponent(t.data.content),(0,a.Zk)()},onClickNextBtn(){this.currentQuestionListIndex>=this.questionList.length-1||this.currentQuestionListIndex++},onClickPrevBtn(){this.currentQuestionListIndex<=0||this.currentQuestionListIndex--},async onClickSubmit(){await this.$dialog.confirm({message:"确认提交今日答题？"}),(0,a.QP)();try{await s.Z.updateKnowledgeRandomQA(this[r],{wrong_knowledge_ids:this.questionList.filter((t=>t._wrong)).map((t=>t.knowledge_id))})}catch(t){(0,a.Zk)()}(0,a.Zk)(),this.$toast.success({message:"提交成功",onClose:()=>{this.$router.push("/home")}})}}};e(4327);const u=(0,e(1900).Z)(d,i,[],!1,null,"44a89fd0",null).exports},4327:(t,n,e)=>{var i=e(1454);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var s=(0,e(4023).Z)("459b2d48",i,!1,{});i.locals||t.hot.accept(1454,(function(){var n=e(1454);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),s(n)})),t.hot.dispose((function(){s()}))}}]);