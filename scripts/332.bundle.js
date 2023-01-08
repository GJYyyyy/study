(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[332],{8977:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>r});var i=e(6738),a=e.n(i),s=e(7705),o=e.n(s)()(a());o.push([t.id,"\n.random-qa[data-v-aa5035a6] {\n    padding: 16px;\n    margin-bottom: 16px;\n}\n.random-qa .rate[data-v-aa5035a6] {\n    margin-bottom: 12px;\n}\n.random-qa .subject > b[data-v-aa5035a6],\n.random-qa .question > b[data-v-aa5035a6],\n.random-qa .answer > b[data-v-aa5035a6] {\n    display: block;\n    margin-bottom: 4px;\n}\n.random-qa .toggle-question[data-v-aa5035a6] {\n    margin-top: 16px;\n}\n.random-qa .submit-question[data-v-aa5035a6] {\n    margin-top: 16px;\n}\n.random-qa .answer > textarea[data-v-aa5035a6] {\n    resize: none;\n    width: 100%;\n    height: 100px;\n    padding: 8px;\n    box-sizing: border-box;\n    border-color: var(--gray-3);\n    border-radius: 4px;\n}\n.random-qa .right-answer[data-v-aa5035a6] {\n    padding: 8px;\n    box-sizing: border-box;\n    max-height: 80vh;\n    overflow-y: auto;\n}\n.random-qa[data-v-aa5035a6] .van-dialog {\n    top: 50%;\n}\n.random-qa[data-v-aa5035a6] .custom-markdown-editor {\n    pointer-events: none;\n}\n",""]);const r=o},4332:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>d});var i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"random-qa"},[t.questionList.length?n("div",[n("div",{staticClass:"subject"},[n("b",[t._v("科目：")]),t._v(" "),n("p",[t._v(t._s(t.subjectTitle))])]),t._v(" "),n("van-divider"),t._v(" "),n("div",[n("div",{staticClass:"question"},[n("b",[t._v("问：")]),t._v(" "),n("p",[t._v(t._s(t.currentQuestion?.title))])]),t._v(" "),n("van-divider"),t._v(" "),n("div",{staticClass:"answer"},[n("b",[t._v("答：")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],domProps:{value:t.answer},on:{input:function(n){n.target.composing||(t.answer=n.target.value)}}})]),t._v(" "),n("van-divider"),t._v(" "),n("div",{staticClass:"show-right-answer-btn row-center"},[n("van-button",{attrs:{size:"small",type:"danger",block:""},on:{click:t.onToggleAnswerShow}},[t._v("显示答案（标记错题）")])],1),t._v(" "),n("van-dialog",{attrs:{width:"90%",title:"答案","lazy-render":!1},on:{opened:t.onDialogOpened},model:{value:t.rightAnswerVisible,callback:function(n){t.rightAnswerVisible=n},expression:"rightAnswerVisible"}},[n("div",{staticClass:"right-answer"},[n("custome-markdown-editor",{attrs:{readonly:!0,value:t.currentQuestion?.content}})],1)])],1),t._v(" "),n("div",{staticClass:"row-between col-center toggle-question"},[n("van-button",{attrs:{size:"small",type:"info"},on:{click:t.onClickPrevBtn}},[t._v("上一题")]),t._v(" "),n("span",[t._v(t._s(t.rate))]),t._v(" "),n("van-button",{attrs:{size:"small",type:"info"},on:{click:t.onClickNextBtn}},[t._v("下一题")])],1),t._v(" "),n("div",{staticClass:"submit-question"},[n("van-button",{attrs:{block:"",size:"small",type:"primary"},on:{click:t.onClickSubmit}},[t._v("提交")])],1)],1):n("van-empty",{attrs:{description:"当前科目下没有知识点"}})],1)};i._withStripped=!0;var a=e(2996),s=e(4978);const o="knowledge_random_qa_id",r={components:{"custome-markdown-editor":s.NW},data:()=>({[o]:"",questionList:[],currentQuestionListIndex:0,rightAnswerVisible:!1,subjectTitle:"",answer:""}),computed:{userInfo(){return this.$store.state.userInfo},rate(){return 0===this.questionList.length?"0 / 0":`${this.currentQuestionListIndex+1} / ${this.questionList.length}`},currentQuestion:{get:function(){return this.questionList[this.currentQuestionListIndex]},set:function(t){this.questionList[this.currentQuestionListIndex]=t}}},mounted(){this.init()},methods:{async init(){if(!this.userInfo.subject_id)return void this.$toast.fail({message:"请先选择科目",onClose:()=>{this.$router.push("/userInfo")}});let t=await a.Z.detailSubject(this.userInfo.subject_id,{fields:["title","code"]});this.subjectTitle=t.data.code?`${t.data.title}(${t.data.code})`:t.data.title;let n=await a.Z.listRandomKnowledge({randomLimit:15,equalFields:{subject_id:this.userInfo.subject_id}});this[o]=n[o],this.questionList=this.formatterList(n.list)},formatterList:t=>t.map((t=>({...t,_wrong:!1}))),async onToggleAnswerShow(){await this.$dialog.confirm({message:"确认显示答案？"}),this.rightAnswerVisible=!0,this.currentQuestion._wrong=!0,a.Z.addKnowledgeWrong({knowledge_id:this.currentQuestion.knowledge_id})},async onDialogOpened(){let t=await a.Z.detailKnowledge(this.currentQuestion.knowledge_id,{fields:["content"]});this.questionList[this.currentQuestionListIndex].content=decodeURIComponent(t.data.content)},onClickNextBtn(){this.currentQuestionListIndex>=this.questionList.length-1||this.currentQuestionListIndex++},onClickPrevBtn(){this.currentQuestionListIndex<=0||this.currentQuestionListIndex--},async onClickSubmit(){await this.$dialog.confirm({message:"确认提交今日答题？"}),await a.Z.updateKnowledgeRandomQA(this[o],{wrong_knowledge_ids:this.questionList.filter((t=>t._wrong)).map((t=>t.knowledge_id))}),this.$toast.success({message:"提交成功",onClose:()=>{this.$router.push("/home")}})}}};e(7357);const d=(0,e(1900).Z)(r,i,[],!1,null,"aa5035a6",null).exports},7357:(t,n,e)=>{var i=e(8977);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var a=(0,e(4023).Z)("2bb6fb46",i,!1,{});i.locals||t.hot.accept(8977,(function(){var n=e(8977);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),a(n)})),t.hot.dispose((function(){a()}))}}]);