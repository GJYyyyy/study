(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[953],{6455:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});var a=n(6738),i=n.n(a),o=n(7705),c=n.n(o)()(i());c.push([t.id,"\n.container[data-v-a8c6097e] {\n    padding: 16px;\n}\n.container > .title[data-v-a8c6097e] {\n    text-align: center;\n}\n.container > .describ[data-v-a8c6097e] {\n    font-size: 12px;\n    color: var(--gray-3);\n}\n.container > .describ > span[data-v-a8c6097e] {\n    max-width: 50%;\n}\n.container .cate-title[data-v-a8c6097e] {\n    text-decoration: underline;\n    cursor: pointer;\n}\n.container .actions[data-v-a8c6097e] {\n    margin-top: 8px;\n}\n.container > .actions[data-v-a8c6097e] .van-icon {\n    margin-left: 11px;\n}\n",""]);const d=c},953:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var a=function(){var t=this,e=t._self._c;return e("div",[t.knowledge.title?e("div",{staticClass:"container"},[e("h4",{staticClass:"title"},[t._v(t._s(t.knowledge.title))]),t._v(" "),e("div",{staticClass:"describ row-between rol-center"},[e("span",{staticClass:"cate-title",on:{click:t.onCateKeyClick}},[t._v(t._s(t.cateTitle))]),t._v(" "),e("span",[t._v(t._s(t.knowledge.update_date_str))])]),t._v(" "),e("div",{staticClass:"direction-right col-center actions"},[e("van-icon",{attrs:{name:"label",color:t.collectionColor},on:{click:t.onCollection}}),t._v(" "),e("van-icon",{attrs:{name:"edit",color:"var(--blue)"},on:{click:t.onEdit}})],1),t._v(" "),e("van-divider"),t._v(" "),e("custome-markdown-editor",{attrs:{readonly:!0,value:t.knowledge.content}})],1):e("van-empty",{attrs:{description:"没有内容"}})],1)};a._withStripped=!0;var i=n(3308),o=n(1241),c=n(9146);const d="knowledge_catalog_id",l="knowledge_collection_id",s={components:{"custome-markdown-editor":c.NW},data:()=>({knowledge:{},cateTitle:"",[d]:""}),computed:{id(){return this.$route.query.id},collectionColor(){return this.knowledge[l]?"var(--green)":"var(--gray-3)"}},async mounted(){this.init()},methods:{async init(){let t;(0,o.QP)();try{t=await i.Z.detailKnowledge(this.id)}catch(t){(0,o.Zk)()}if(t.data){let e,n={...t.data};n.content=decodeURIComponent(n.content),n.update_date_str=(0,o.Bv)(n.update_date).format("YYYY-MM-DD HH:mm:ss"),this.knowledge=n;try{e=await i.Z.detailKnowledgeCatalog(n[d],{fields:["title",d]})}catch(t){(0,o.Zk)()}this.cateTitle=e.data.title,this[d]=e.data[d]}(0,o.Zk)()},onCateKeyClick(){this.$router.push({path:"/listKnowledgeCatalog",query:{expand_cate_id:this[d]}})},async onCollection(){(0,o.QP)(),this.knowledge[l]?(await i.Z.deleteKnowledgeCollection([this.knowledge[l]]),this.$toast.success("取消收藏成功"),this.init()):(await i.Z.addKnowledgeCollection({knowledge_id:this.knowledge.knowledge_id}),this.$toast.success("收藏成功"),this.init()),(0,o.Zk)()},onEdit(){this.$router.push({path:"/updateKnowledge",query:{id:this.knowledge.knowledge_id}})}}};n(4242);const r=(0,n(1900).Z)(s,a,[],!1,null,"a8c6097e",null).exports},4242:(t,e,n)=>{var a=n(6455);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var i=(0,n(4023).Z)("9f03558c",a,!1,{});a.locals||t.hot.accept(6455,(function(){var e=n(6455);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),i(e)})),t.hot.dispose((function(){i()}))}}]);