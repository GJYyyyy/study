(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[295],{941:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var a=n(6738),d=n.n(a),i=n(7705),o=n.n(i)()(d());o.push([t.id,"\n.container[data-v-42ec58cb] {\n    padding: 16px;\n}\n.container > .title[data-v-42ec58cb] {\n    text-align: center;\n}\n.container > .describ[data-v-42ec58cb] {\n    font-size: 12px;\n    color: var(--gray-3);\n}\n.container > .describ > span[data-v-42ec58cb] {\n    max-width: 50%;\n}\n",""]);const s=o},9295:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var a=function(){var t=this,e=t._self._c;return e("div",[t.knowledge.title?e("div",{staticClass:"container"},[e("h4",{staticClass:"title"},[t._v(t._s(t.knowledge.title))]),t._v(" "),e("div",{staticClass:"describ row-between rol-center"},[e("span",[t._v(t._s(t.cateTitle))]),t._v(" "),e("span",[t._v(t._s(t.knowledge.update_date))])]),t._v(" "),e("van-divider"),t._v(" "),e("div",[t._v("这里是markdown")]),t._v(" "),e("custome-markdown-editor",{attrs:{readonly:!0,value:t.knowledge.content}}),t._v(" "),e("div",[t._v("这里是markdown")])],1):e("van-empty",{attrs:{description:"没有内容"}})],1)};a._withStripped=!0;var d=n(2996),i=n(1241);const o={components:{"custome-markdown-editor":n(7866).NW},data:()=>({knowledge:{},cateTitle:""}),computed:{id(){return this.$route.query.id}},async mounted(){let t=await d.Z.detailKnowledge(this.id);if(t.data){let e={...t.data};e.content=decodeURIComponent(e.content),e.update_date=(0,i._t)(new Date(e.update_date)),this.knowledge=e;let n=await d.Z.detailKnowledgeCatalog(e.knowledge_catalog_id,{fields:["title"]});this.cateTitle=n.data.title}}};n(5074);const s=(0,n(1900).Z)(o,a,[],!1,null,"42ec58cb",null).exports},5074:(t,e,n)=>{var a=n(941);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var d=(0,n(4023).Z)("60deab86",a,!1,{});a.locals||t.hot.accept(941,(function(){var e=n(941);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),d(e)})),t.hot.dispose((function(){d()}))}}]);