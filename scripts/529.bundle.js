(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[529],{9529:(t,e,i)=>{"use strict";i.d(e,{HS:()=>s,SP:()=>d,K4:()=>S,NW:()=>k,Ny:()=>g,Uh:()=>h,he:()=>K});var n=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"fixed full-center",attrs:{to:{path:t.path,query:t.query}}},[e("div",{on:{click:function(e){return t.$emit("click")}}},[e("van-icon",{attrs:{name:"plus",size:"30",color:"white"}})],1)])};n._withStripped=!0;const a={props:{path:String,query:Object}};i(388);var o=i(1900);const s=(0,o.Z)(a,n,[],!1,null,"dd8e0c38",null).exports;var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-list"},[t.list.length?e("van-pull-refresh",{on:{refresh:t.onPullRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[e("van-list",{key:t.list.length,attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(i,n){return e("van-cell",{key:n},[e("div",{staticClass:"row-between col-center list-unit"},[t.childListPath?e("div",{staticClass:"ellipsis title",on:{click:function(e){return t.onRouterTo("childList",i.id)}}},[t._v(t._s(i.title))]):t.detailPath?e("div",{staticClass:"ellipsis title",on:{click:function(e){return t.onRouterTo("detail",i.id)}}},[t._v(t._s(i.title))]):e("div",{staticClass:"ellipsis title"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"actions col-center direction-right"},[e("van-icon",{attrs:{name:"delete-o",color:"var(--red)"},on:{click:function(e){return t.onDelete(i.id)}}}),t._v(" "),t.collectionKey?e("van-icon",{attrs:{name:"label",color:i[t.collectionKey]?"var(--green)":"var(--gray-3)"},on:{click:function(e){return t.onCollection(i)}}}):t._e(),t._v(" "),t.updatePath?e("van-icon",{attrs:{name:"edit",color:"var(--blue)"},on:{click:function(e){return t.onRouterTo("update",i.id)}}}):t._e()],1)])])})),1)],1):e("van-empty",{attrs:{description:"没有内容"}})],1)};l._withStripped=!0;const r={data:()=>({refreshing:!1,loading:!1}),props:{list:{type:Array,default:()=>[]},childListPath:String,detailPath:String,updatePath:String,collectionKey:String,finished:Boolean,pullRefreshing:Boolean,loadLoading:Boolean},watch:{pullRefreshing(t){this.refreshing=t},loadLoading(t){this.loading=t}},methods:{onPullRefresh(t){this.$emit("refresh",t)},onLoad(t){this.$emit("load",t)},onRouterTo(t,e){let i="",n={};switch(t){case"childList":i=this.childListPath,n.cate_id=e,this.setCateKey(this.childListPath,e);break;case"detail":i=this.detailPath,n.id=e;break;case"update":i=this.updatePath,n.id=e}this.$router.push({path:i,query:n})},setCateKey(t,e){/Subject$/.test(t)?this.$store.commit("updateSubjectCate",e):/KnowledgeCatalog$/.test(t)?this.$store.commit("updateKnowledgeCatalogCate",e):/Knowledge$/.test(t)&&this.$store.commit("updateKnowledgeCate",e)},onDelete(t){this.$dialog.confirm({message:"确认删除"}).then((()=>{this.$emit("delete",t)}))},onCollection(t){t[this.collectionKey]?this.$emit("uncollection",t[this.collectionKey]):this.$emit("collection",t.id)}}};i(8868);const d=(0,o.Z)(r,l,[],!1,null,"441cb4eb",null).exports;var c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-tree"},[t.listLength?e("tree-list",{key:t.list.length,attrs:{data:t.list,options:t.options},scopedSlots:t._u([{key:"default",fn:function({node:i}){return e("div",{staticClass:"row-between col-center list-unit"},[t.childListPath?e("div",{staticClass:"ellipsis title",on:{click:function(e){return t.onRouterTo("childList",i.data.id)}}},[t._v(t._s(i.text))]):t.detailPath?e("div",{staticClass:"ellipsis title",on:{click:function(e){return t.onRouterTo("detail",i.data.id)}}},[t._v(t._s(i.text))]):e("div",{staticClass:"ellipsis title"},[t._v(t._s(i.text))]),t._v(" "),e("div",{staticClass:"actions col-center direction-right"},[e("van-icon",{attrs:{name:"delete-o",color:"var(--red)"},on:{click:function(e){return t.onDelete(i.data.id)}}}),t._v(" "),t.addPath?e("van-icon",{attrs:{name:"plus",color:"var(--cyan)"},on:{click:function(e){return t.onRouterTo("add",i.data.id)}}}):t._e(),t._v(" "),t.updatePath?e("van-icon",{attrs:{name:"edit",color:"var(--blue)"},on:{click:function(e){return t.onRouterTo("update",i.data.id)}}}):t._e()],1)])}}])}):e("van-empty",{attrs:{description:"没有内容"}})],1)};c._withStripped=!0;const u={components:{"tree-list":i(5488).Z},props:{list:{type:Array,default:()=>[]},childListPath:String,detailPath:String,updatePath:String,addPath:String},computed:{listLength(){return this.list.length}},data:()=>({options:{propertyNames:{text:"title"}}}),methods:{onRouterTo(t,e){let i="",n={};switch(t){case"childList":i=this.childListPath,this.setCateKey(this.childListPath,e),n.cate_id=e;break;case"detail":i=this.detailPath,n.id=e;break;case"update":i=this.updatePath,n.id=e;break;case"add":i=this.addPath,n.parent_id=e,n.cate_id=this.getCateKey(this.addPath)}this.$router.push({path:i,query:n})},setCateKey(t,e){/Subject$/.test(t)?this.$store.commit("updateSubjectCate",e):/KnowledgeCatalog$/.test(t)?this.$store.commit("updateKnowledgeCatalogCate",e):/Knowledge$/.test(t)&&this.$store.commit("updateKnowledgeCate",e)},getCateKey(t){return/Subject$/.test(t)?this.$store.state.subjectCate:/KnowledgeCatalog$/.test(t)?this.$store.state.knowledgeCatalogCate:/Knowledge$/.test(t)?this.$store.state.knowledgeCate:void 0},onDelete(t){this.$dialog.confirm({message:"确认删除"}).then((()=>{this.$emit("delete",t)}))}}};i(1399);const h=(0,o.Z)(u,c,[],!1,null,"ef4900a4",null).exports;var p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-search"},[e("van-search",{on:{input:t.onSearch,search:t.onSearch},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)};p._withStripped=!0;let f=0;const v={data:()=>({searchValue:""}),methods:{onSearch(t){f&&clearTimeout(f),f=setTimeout((()=>{this.$emit("search",t.toString().trim())}),500)}}};i(9568);const g=(0,o.Z)(v,p,[],!1,null,"05d98266",null).exports;var m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-markdown-editor",class:{readonly:t.readonly}},[e("mavon-editor",{ref:"md",attrs:{value:t.value,boxShadow:!1,html:!1,xssOptions:!1,toolbars:t.toolbars,subfield:t.subfield,defaultOpen:t.defaultOpen,toolbarsBackground:"var(--primary-color)",previewBackground:"var(--primary-color)",imageFilter:t.imgFilter,externalLink:t.externalLink},on:{fullScreen:t.onEditorFullScreen,save:t.onContentSave,change:t.onContentChange,imgAdd:t.onEditorImgAdd}})],1)};m._withStripped=!0;var _=i(1241),b=i(966);i(1226);let y=0;b.mavonEditor.getMarkdownIt();const x={components:{"mavon-editor":b.mavonEditor},props:{value:{type:String,default:""},readonly:{type:Boolean,default:!1}},data:()=>({toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,fullscreen:!0,readmodel:!0,htmlcode:!0,help:!0,undo:!0,redo:!0,trash:!0,save:!0,navigation:!0,alignleft:!0,aligncenter:!0,alignright:!0,subfield:!0,preview:!0},externalLink:{markdown_css:function(){return"/mavoneditor/markdown/github-markdown.min.css"},hljs_js:function(){return"/mavoneditor/highlightjs/highlight.min.js"},hljs_css:function(t){return"/mavoneditor/highlightjs/styles/"+t+".min.css"},hljs_lang:function(t){return"/mavoneditor/highlightjs/languages/"+t+".min.js"},katex_css:function(){return"/mavoneditor/katex/katex.min.css"},katex_js:function(){return"/mavoneditor/katex/katex.min.js"}},subfield:!0,defaultOpen:"preview"}),mounted(){this.toolbars.imagelink=!1,this.toolbars.trash=!1,(0,_.tq)()&&(this.toolbars.readmodel=!1,this.toolbars.subfield=!1,this.subfield=!1,this.defaultOpen="edit"),this.readonly&&(this.subfield=!1,this.defaultOpen="preview")},methods:{onContentChange(t,e){y&&clearTimeout(y),y=setTimeout((()=>{this.$emit("change",t)}),200)},onEditorFullScreen(t){document.querySelector(".v-note-wrapper").style.zIndex=t?1500:"initial"},downloadFile(t,e){let i=document.createElement("a");i.href="data:text/plain;charset=utf-8,"+e,i.download=t,document.body.appendChild(i),i.click(),document.body.removeChild(i)},onContentSave(t,e){this.downloadFile("source.html",e)},imgFilter(t){return!!/^image/.test(t.type)||(this.$toast.fail("请选择图片文件"),!1)},async onEditorImgAdd(t,e){let i=await(0,_._n)(e);this.$refs.md.$img2Url(t,i)}}};i(1713);const k=(0,o.Z)(x,m,[],!1,null,"76ef0b3f",null).exports;var w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-list-head"},[e("b",{staticClass:"col-center"},[e("span",{staticClass:"no-wrap"},[t._v(t._s(t.title)+"：")]),t._v(" "),e("span",[t._v(t._s(t.value))])]),t._v(" "),e("van-divider")],1)};w._withStripped=!0;const C={props:{title:String,value:String}};i(135);const S=(0,o.Z)(C,w,[],!1,null,"9078f158",null).exports;var $=function(){return(0,this._self._c)("div")};$._withStripped=!0;const P={props:{loading:Boolean},data:()=>({toastIns:null}),watch:{loading(t){t?this.toastIns=this.$toast.loading({message:"加载中",forbidClick:!0,duration:0}):(this.toastIns.clear(),this.toastIns=null)}},unmounted(){this.toastIns.clear(),this.toastIns=null}},K=(0,o.Z)(P,$,[],!1,null,"6e9903e7",null).exports},1397:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var n=i(6738),a=i.n(n),o=i(7705),s=i.n(o)()(a());s.push([t.id,"\n.fixed[data-v-dd8e0c38] {\n    position: fixed;\n    right: 20px;\n    bottom: 110px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-color: var(--cyan);\n    opacity: .5;\n    z-index: 1999;\n}\n",""]);const l=s},3409:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var n=i(6738),a=i.n(n),o=i(7705),s=i.n(o)()(a());s.push([t.id,"\n.list-unit > .title[data-v-441cb4eb] {\n    width: calc(100% - 76px);\n    color: var(--gray-2);\n}\n.list-unit > .actions[data-v-441cb4eb] {\n    width: 76px;\n}\n.list-unit > .actions[data-v-441cb4eb] .van-icon {\n    margin-left: 11px;\n}\n",""]);const l=s},1723:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var n=i(6738),a=i.n(n),o=i(7705),s=i.n(o)()(a());s.push([t.id,"\n.custom-list-head[data-v-9078f158] {\n    padding: 16px 16px 0;\n}\n.custom-list-head > b > span[data-v-9078f158]:first-child {\n    color: var(--gray-3);\n}\n",""]);const l=s},37:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var n=i(6738),a=i.n(n),o=i(7705),s=i.n(o)()(a());s.push([t.id,"\n.custom-markdown-editor[data-v-76ef0b3f] .v-note-wrapper {\n    z-index: initial;\n}\n.custom-markdown-editor.readonly[data-v-76ef0b3f] .v-note-op {\n    display: none;\n}\n",""]);const l=s},2660:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var n=i(6738),a=i.n(n),o=i(7705),s=i.n(o)()(a());s.push([t.id,"\n.custom-search[data-v-05d98266] {\n    height: 54px;\n}\n.custom-search[data-v-05d98266] .van-search {\n    position: fixed;\n    bottom: 50px;\n    left: 0;\n    right: 0;\n    z-index: 999;\n    box-shadow: 0 -1px 1px 1px rgba(0,0,0,.04);\n    background-color: var(--primary-color);\n}\n",""]);const l=s},9109:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var n=i(6738),a=i.n(n),o=i(7705),s=i.n(o)()(a());s.push([t.id,"\n.list-unit[data-v-ef4900a4] {\n    width: 100%;\n    border-bottom: 1px solid #ebedf0;\n    padding: 3px 0 4px;\n}\n.list-unit > .title[data-v-ef4900a4] {\n    width: calc(100% - 76px);\n    font-size: 14px;\n    color: var(--gray-2);\n}\n.list-unit > .actions[data-v-ef4900a4] {\n    width: 76px;\n}\n.list-unit > .actions[data-v-ef4900a4] .van-icon {\n    margin-left: 11px;\n}\n",""]);const l=s},388:(t,e,i)=>{var n=i(1397);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=(0,i(4023).Z)("c6b237ec",n,!1,{});n.locals||t.hot.accept(1397,(function(){var e=i(1397);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},8868:(t,e,i)=>{var n=i(3409);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=(0,i(4023).Z)("96e3ad40",n,!1,{});n.locals||t.hot.accept(3409,(function(){var e=i(3409);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},135:(t,e,i)=>{var n=i(1723);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=(0,i(4023).Z)("b60e0e4a",n,!1,{});n.locals||t.hot.accept(1723,(function(){var e=i(1723);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},1713:(t,e,i)=>{var n=i(37);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=(0,i(4023).Z)("5dc56bd8",n,!1,{});n.locals||t.hot.accept(37,(function(){var e=i(37);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},9568:(t,e,i)=>{var n=i(2660);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=(0,i(4023).Z)("07e87efe",n,!1,{});n.locals||t.hot.accept(2660,(function(){var e=i(2660);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},1399:(t,e,i)=>{var n=i(9109);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=(0,i(4023).Z)("5d1c4888",n,!1,{});n.locals||t.hot.accept(9109,(function(){var e=i(9109);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))}}]);