(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[181],{1768:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var a=n(6738),i=n.n(a),o=n(7705),d=n.n(o)()(i());d.push([t.id,"\n.container[data-v-db5ba63e] {\n    padding: 16px;\n}\n.container > .title[data-v-db5ba63e] {\n    text-align: center;\n}\n.container > .describ[data-v-db5ba63e] {\n    font-size: 12px;\n    color: var(--gray-3);\n}\n.container > .describ > span[data-v-db5ba63e] {\n    max-width: 50%;\n}\n.container .cate-title[data-v-db5ba63e] {\n    text-decoration: underline;\n    cursor: pointer;\n}\n.container .actions[data-v-db5ba63e] {\n    margin-top: 8px;\n}\n.container > .actions[data-v-db5ba63e] .van-icon {\n    margin-left: 11px;\n}\n",""]);const l=d},4181:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var a=function(){var t=this,e=t._self._c;return e("div",[t.knowledge.title?e("div",{staticClass:"container"},[e("h4",{staticClass:"title"},[t._v(t._s(t.knowledge.title))]),t._v(" "),e("div",{staticClass:"describ row-between rol-center"},[e("span",{staticClass:"cate-title",on:{click:function(e){return t.onCateKeyClick(t.knowledge_catalog_id)}}},[t._v(t._s(t.cateTitle))]),t._v(" "),e("span",[t._v(t._s(t.knowledge.update_date_str))])]),t._v(" "),e("div",{staticClass:"direction-right col-center actions"},[e("van-icon",{attrs:{name:"label",color:t.collectionColor},on:{click:t.onCollection}}),t._v(" "),e("van-icon",{attrs:{name:"edit",color:"var(--blue)"},on:{click:t.onEdit}})],1),t._v(" "),e("van-divider"),t._v(" "),e("custome-markdown-editor",{attrs:{readonly:!0,value:t.knowledge.content}})],1):e("van-empty",{attrs:{description:"没有内容"}})],1)};a._withStripped=!0;var i=n(3308),o=n(1241),d=n(7632);const l="knowledge_catalog_id",s="knowledge_collection_id",c={components:{"custome-markdown-editor":d.NW},data:()=>({knowledge:{},cateTitle:"",[l]:""}),computed:{id(){return this.$route.query.id},collectionColor(){return this.knowledge[s]?"var(--green)":"var(--gray-3)"}},async mounted(){this.init()},methods:{async init(){let t;(0,o.QP)();try{t=await i.Z.detailKnowledge(this.id)}catch(t){(0,o.Zk)()}if(t.data){let e,n={...t.data};n.content=decodeURIComponent(n.content),n.update_date_str=(0,o.Bv)(n.update_date).format("YYYY-MM-DD HH:mm:ss"),this.knowledge=n;try{e=await i.Z.detailKnowledgeCatalog(n[l],{fields:["title",l]})}catch(t){(0,o.Zk)()}this.cateTitle=e.data.title,this[l]=e.data[l]}(0,o.Zk)()},onCateKeyClick(t){this.$router.push({path:"/listKnowledgeCatalog",query:{expand_cate_id:t}})},async onCollection(){(0,o.QP)(),this.knowledge[s]?(await i.Z.deleteKnowledgeCollection([this.knowledge[s]]),this.$toast.success("取消收藏成功"),this.init()):(await i.Z.addKnowledgeCollection({knowledge_id:this.knowledge.knowledge_id}),this.$toast.success("收藏成功"),this.init()),(0,o.Zk)()},onEdit(){this.$router.push({path:"/updateKnowledge",query:{id:this.knowledge.knowledge_id}})}}};n(775);const r=(0,n(1900).Z)(c,a,[],!1,null,"db5ba63e",null).exports},775:(t,e,n)=>{var a=n(1768);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var i=(0,n(4023).Z)("51427109",a,!1,{});a.locals||t.hot.accept(1768,(function(){var e=n(1768);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),i(e)})),t.hot.dispose((function(){i()}))}}]);