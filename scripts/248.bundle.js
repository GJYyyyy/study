(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[248],{248:(t,e,n)=>{"use strict";n.d(e,{HS:()=>s,SP:()=>d,K4:()=>C,NW:()=>b,Ny:()=>g,Uh:()=>h,he:()=>$});var i=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"fixed full-center",attrs:{to:{path:t.path,query:t.query}}},[e("div",{on:{click:function(e){return t.$emit("click")}}},[e("van-icon",{attrs:{name:"plus",size:"30",color:"white"}})],1)])};i._withStripped=!0;const a={props:{path:String,query:Object}};n(388);var o=n(1900);const s=(0,o.Z)(a,i,[],!1,null,"dd8e0c38",null).exports;var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-list"},[t.list.length?e("van-pull-refresh",{on:{refresh:t.onPullRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[e("van-list",{key:t.list.length,attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(n,i){return e("van-cell",{key:i},[e("div",{staticClass:"row-between col-center list-unit"},[t.childListPath?e("div",{staticClass:"ellipsis title",on:{click:function(e){return t.onRouterTo("childList",n.id)}}},[t._v(t._s(n.title))]):t.detailPath?e("div",{staticClass:"ellipsis title",on:{click:function(e){return t.onRouterTo("detail",n.id)}}},[t._v(t._s(n.title))]):e("div",{staticClass:"ellipsis title"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"actions col-center direction-right"},[e("van-icon",{attrs:{name:"delete-o",color:"var(--red)"},on:{click:function(e){return t.onDelete(n.id)}}}),t._v(" "),t.collectionKey?e("van-icon",{attrs:{name:"label",color:n[t.collectionKey]?"var(--green)":"var(--gray-3)"},on:{click:function(e){return t.onCollection(n)}}}):t._e(),t._v(" "),t.updatePath?e("van-icon",{attrs:{name:"edit",color:"var(--blue)"},on:{click:function(e){return t.onRouterTo("update",n.id)}}}):t._e()],1)])])})),1)],1):e("van-empty",{attrs:{description:"没有内容"}})],1)};l._withStripped=!0;const r={data:()=>({refreshing:!1,loading:!1}),props:{list:{type:Array,default:()=>[]},childListPath:String,detailPath:String,updatePath:String,collectionKey:String,finished:Boolean,pullRefreshing:Boolean,loadLoading:Boolean},watch:{pullRefreshing(t){this.refreshing=t},loadLoading(t){this.loading=t}},methods:{onPullRefresh(t){this.$emit("refresh",t)},onLoad(t){this.$emit("load",t)},onRouterTo(t,e){let n="",i={};switch(t){case"childList":n=this.childListPath,i.cate_id=e;break;case"detail":n=this.detailPath,i.id=e;break;case"update":n=this.updatePath,i.id=e}this.$router.push({path:n,query:i})},onDelete(t){this.$dialog.confirm({message:"确认删除"}).then((()=>{this.$emit("delete",t)}))},onCollection(t){t[this.collectionKey]?this.$emit("uncollection",t[this.collectionKey]):this.$emit("collection",t.id)}}};n(9653);const d=(0,o.Z)(r,l,[],!1,null,"5887b62f",null).exports;var c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-tree"},[t.listLength?e("tree-list",{key:t.list.length,attrs:{data:t.list,options:t.options},on:{"node:expanded":t.onNodeExpand},scopedSlots:t._u([{key:"default",fn:function({node:n}){return e("div",{staticClass:"row-between col-center list-unit"},[t.childListPath?e("div",{staticClass:"ellipsis title",class:{"have-knowledge":n.data.have_knowledge},on:{click:function(e){return t.onRouterTo("childList",n.data.id)}}},[t._v(t._s(n.text))]):t.detailPath?e("div",{staticClass:"ellipsis title",class:{"have-knowledge":n.data.have_knowledge},on:{click:function(e){return t.onRouterTo("detail",n.data.id)}}},[t._v(t._s(n.text))]):e("div",{staticClass:"ellipsis title",class:{"have-knowledge":n.data.have_knowledge}},[t._v(t._s(n.text))]),t._v(" "),e("div",{staticClass:"actions col-center direction-right"},[e("van-icon",{attrs:{name:"delete-o",color:"var(--red)"},on:{click:function(e){return t.onDelete(n.data.id)}}}),t._v(" "),t.addPath?e("van-icon",{attrs:{name:"plus",color:"var(--cyan)"},on:{click:function(e){return t.onRouterTo("add",n.data.id,n.data.cate_id)}}}):t._e(),t._v(" "),t.updatePath?e("van-icon",{attrs:{name:"edit",color:"var(--blue)"},on:{click:function(e){return t.onRouterTo("update",n.data.id)}}}):t._e()],1)])}}])}):e("van-empty",{attrs:{description:"没有内容"}})],1)};c._withStripped=!0;const u={components:{"tree-list":n(5488).Z},props:{list:{type:Array,default:()=>[]},childListPath:String,detailPath:String,updatePath:String,addPath:String},computed:{listLength(){return this.list.length}},data:()=>({options:{}}),methods:{onRouterTo(t,e,n){let i="",a={};switch(t){case"childList":i=this.childListPath,a.cate_id=e;break;case"detail":i=this.detailPath,a.id=e;break;case"update":i=this.updatePath,a.id=e;break;case"add":i=this.addPath,a.parent_id=e,a.cate_id=n}this.$router.push({path:i,query:a})},onNodeExpand(t){this.$emit("expand",t)},onDelete(t){this.$dialog.confirm({message:"确认删除"}).then((()=>{this.$emit("delete",t)}))}}};n(984);const h=(0,o.Z)(u,c,[],!1,null,"139a3166",null).exports;var p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-search"},[e("van-search",{on:{input:t.onSearch,search:t.onSearch},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)};p._withStripped=!0;let v=0;const f={data:()=>({searchValue:""}),methods:{onSearch(t){v&&clearTimeout(v),v=setTimeout((()=>{this.$emit("search",t.toString().trim())}),500)}}};n(9568);const g=(0,o.Z)(f,p,[],!1,null,"05d98266",null).exports;var m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-markdown-editor",class:{readonly:t.readonly}},[e("mavon-editor",{ref:"md",attrs:{value:t.value,boxShadow:!1,html:!1,xssOptions:!1,toolbars:t.toolbars,subfield:t.subfield,defaultOpen:t.defaultOpen,toolbarsBackground:"var(--primary-color)",previewBackground:"var(--primary-color)",imageFilter:t.imgFilter,externalLink:t.externalLink},on:{fullScreen:t.onEditorFullScreen,save:t.onContentSave,change:t.onContentChange,imgAdd:t.onEditorImgAdd}})],1)};m._withStripped=!0;var _=n(1241),k=n(966);n(1226);let x=0;k.mavonEditor.getMarkdownIt();const y={components:{"mavon-editor":k.mavonEditor},props:{value:{type:String,default:""},readonly:{type:Boolean,default:!1}},data:()=>({toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,fullscreen:!0,readmodel:!0,htmlcode:!0,help:!0,undo:!0,redo:!0,trash:!0,save:!0,navigation:!0,alignleft:!0,aligncenter:!0,alignright:!0,subfield:!0,preview:!0},externalLink:{},subfield:!0,defaultOpen:"preview"}),created(){this.initExternalLink()},mounted(){this.toolbars.imagelink=!1,this.toolbars.trash=!1,(0,_.tq)()&&(this.toolbars.readmodel=!1,this.toolbars.subfield=!1,this.subfield=!1,this.defaultOpen="edit"),this.readonly&&(this.subfield=!1,this.defaultOpen="preview")},methods:{initExternalLink(){let t="";"belly-belly.gitee.io"===location.host&&(t="/study"),this.externalLink={markdown_css:function(){return t+"/mavon-editor/markdown/github-markdown.min.css"},hljs_js:function(){return t+"/mavon-editor/highlightjs/highlight.min.js"},hljs_css:function(e){return t+"/mavon-editor/highlightjs/styles/"+e+".min.css"},hljs_lang:function(e){return t+"/mavon-editor/highlightjs/languages/"+e+".min.js"},katex_css:function(){return t+"/mavon-editor/katex/katex.min.css"},katex_js:function(){return t+"/mavon-editor/katex/katex.min.js"}}},onContentChange(t,e){x&&clearTimeout(x),x=setTimeout((()=>{this.$emit("change",t)}),200)},onEditorFullScreen(t){document.querySelector(".v-note-wrapper").style.zIndex=t?1500:"initial"},downloadFile(t,e){let n=document.createElement("a");n.href="data:text/plain;charset=utf-8,"+e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)},onContentSave(t,e){this.downloadFile("source.html",e)},imgFilter(t){return!!/^image/.test(t.type)||(this.$toast.fail("请选择图片文件"),!1)},async onEditorImgAdd(t,e){let n=await(0,_._n)(e);this.$refs.md.$img2Url(t,n)}}};n(3456);const b=(0,o.Z)(y,m,[],!1,null,"19292d7c",null).exports;var w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-list-head"},[e("b",{staticClass:"col-center"},[e("span",{staticClass:"no-wrap"},[t._v(t._s(t.title)+"：")]),t._v(" "),e("span",[t._v(t._s(t.value))])]),t._v(" "),e("van-divider")],1)};w._withStripped=!0;const S={props:{title:String,value:String}};n(135);const C=(0,o.Z)(S,w,[],!1,null,"9078f158",null).exports;var P=function(){return(0,this._self._c)("div")};P._withStripped=!0;const L={props:{loading:Boolean},data:()=>({toastIns:null}),watch:{loading(t){t?this.toastIns=this.$toast.loading({message:"加载中",forbidClick:!0,duration:0}):(this.toastIns.clear(),this.toastIns=null)}},unmounted(){this.toastIns.clear(),this.toastIns=null}},$=(0,o.Z)(L,P,[],!1,null,"6e9903e7",null).exports},1397:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var i=n(6738),a=n.n(i),o=n(7705),s=n.n(o)()(a());s.push([t.id,"\n.fixed[data-v-dd8e0c38] {\n    position: fixed;\n    right: 20px;\n    bottom: 110px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-color: var(--cyan);\n    opacity: .5;\n    z-index: 1999;\n}\n",""]);const l=s},9829:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var i=n(6738),a=n.n(i),o=n(7705),s=n.n(o)()(a());s.push([t.id,"\n.list-unit > .title[data-v-5887b62f] {\n    width: calc(100% - 76px);\n    color: var(--gray-2);\n}\n.list-unit > .actions[data-v-5887b62f] {\n    width: 76px;\n}\n.list-unit > .actions[data-v-5887b62f] .van-icon {\n    margin-left: 11px;\n}\n",""]);const l=s},1723:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var i=n(6738),a=n.n(i),o=n(7705),s=n.n(o)()(a());s.push([t.id,"\n.custom-list-head[data-v-9078f158] {\n    padding: 16px 16px 0;\n}\n.custom-list-head > b > span[data-v-9078f158]:first-child {\n    color: var(--gray-3);\n}\n",""]);const l=s},5521:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var i=n(6738),a=n.n(i),o=n(7705),s=n.n(o)()(a());s.push([t.id,"\n.custom-markdown-editor[data-v-19292d7c] .markdown-body ol,\n.custom-markdown-editor[data-v-19292d7c] .markdown-body ul {\n    list-style: revert;\n}\n.custom-markdown-editor[data-v-19292d7c] .v-note-wrapper {\n    z-index: initial;\n}\n.custom-markdown-editor.readonly[data-v-19292d7c] .v-note-op {\n    display: none;\n}\n",""]);const l=s},2660:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var i=n(6738),a=n.n(i),o=n(7705),s=n.n(o)()(a());s.push([t.id,"\n.custom-search[data-v-05d98266] {\n    height: 54px;\n}\n.custom-search[data-v-05d98266] .van-search {\n    position: fixed;\n    bottom: 50px;\n    left: 0;\n    right: 0;\n    z-index: 999;\n    box-shadow: 0 -1px 1px 1px rgba(0,0,0,.04);\n    background-color: var(--primary-color);\n}\n",""]);const l=s},2844:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var i=n(6738),a=n.n(i),o=n(7705),s=n.n(o)()(a());s.push([t.id,"\n.list-unit[data-v-139a3166] {\n    width: 100%;\n    border-bottom: 1px solid #ebedf0;\n    padding: 3px 0 4px;\n}\n.list-unit > .title[data-v-139a3166] {\n    width: calc(100% - 76px);\n    font-size: 14px;\n    color: var(--gray-2);\n}\n.list-unit > .title.have-knowledge[data-v-139a3166] {\n    color: var(--blue);\n}\n.list-unit > .actions[data-v-139a3166] {\n    width: 76px;\n}\n.list-unit > .actions[data-v-139a3166] .van-icon {\n    margin-left: 11px;\n}\n",""]);const l=s},388:(t,e,n)=>{var i=n(1397);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var a=(0,n(4023).Z)("c6b237ec",i,!1,{});i.locals||t.hot.accept(1397,(function(){var e=n(1397);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},9653:(t,e,n)=>{var i=n(9829);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var a=(0,n(4023).Z)("4273ed97",i,!1,{});i.locals||t.hot.accept(9829,(function(){var e=n(9829);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},135:(t,e,n)=>{var i=n(1723);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var a=(0,n(4023).Z)("b60e0e4a",i,!1,{});i.locals||t.hot.accept(1723,(function(){var e=n(1723);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},3456:(t,e,n)=>{var i=n(5521);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var a=(0,n(4023).Z)("4031da20",i,!1,{});i.locals||t.hot.accept(5521,(function(){var e=n(5521);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},9568:(t,e,n)=>{var i=n(2660);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var a=(0,n(4023).Z)("07e87efe",i,!1,{});i.locals||t.hot.accept(2660,(function(){var e=n(2660);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},984:(t,e,n)=>{var i=n(2844);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var a=(0,n(4023).Z)("4d725e39",i,!1,{});i.locals||t.hot.accept(2844,(function(){var e=n(2844);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))}}]);