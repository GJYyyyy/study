(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[862],{862:(t,e,i)=>{"use strict";i.d(e,{HS:()=>o,SP:()=>d,K4:()=>w,NW:()=>m.Z,Ny:()=>g,Uh:()=>h,he:()=>C});var n=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"fixed full-center",attrs:{to:{path:t.path,query:t.query}}},[e("div",{on:{click:function(e){return t.$emit("click")}}},[e("van-icon",{attrs:{name:"plus",size:"30",color:"white"}})],1)])};n._withStripped=!0;const a={props:{path:String,query:Object}};i(3050);var s=i(1900);const o=(0,s.Z)(a,n,[],!1,null,"60219a4e",null).exports;var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-list"},[t.listLength?e("van-pull-refresh",{on:{refresh:t.onPullRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[e("van-list",{key:t.listLength,attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(i,n){return e("van-cell",{key:n},[e("div",{staticClass:"row-between col-center list-unit"},[t.childListPath?e("div",{staticClass:"ellipsis title",on:{click:function(e){return t.onRouterTo("childList",i.id)}}},[t._v(t._s(i.title))]):t.detailPath?e("div",{staticClass:"ellipsis title",on:{click:function(e){return t.onRouterTo("detail",i.id)}}},[t._v(t._s(i.title))]):e("div",{staticClass:"ellipsis title"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"actions col-center direction-right"},[e("van-icon",{attrs:{name:"delete-o",color:"var(--red)"},on:{click:function(e){return t.onDelete(i.id)}}}),t._v(" "),t.collectionKey?e("van-icon",{attrs:{name:"label",color:i[t.collectionKey]?"var(--green)":"var(--gray-3)"},on:{click:function(e){return t.onCollection(i)}}}):t._e(),t._v(" "),t.updatePath?e("van-icon",{attrs:{name:"edit",color:"var(--blue)"},on:{click:function(e){return t.onRouterTo("update",i.id)}}}):t._e()],1)])])})),1)],1):e("van-empty",{attrs:{description:"没有内容"}})],1)};l._withStripped=!0;const r={data:()=>({refreshing:!1,loading:!1}),props:{list:{type:Array,default:()=>[]},childListPath:String,detailPath:String,updatePath:String,finished:Boolean,collectionKey:String},computed:{listLength(){return this.list.length}},watch:{list(){this.refreshing=!1,this.loading=!1}},methods:{onPullRefresh(t){this.refreshing=!0,this.$emit("refresh",t)},onLoad(t){this.$emit("load",t)},onRouterTo(t,e){let i="",n={};switch(t){case"childList":i=this.childListPath,n.cate_id=e,this.setCateKey(this.childListPath,e);break;case"detail":i=this.detailPath,n.id=e;break;case"update":i=this.updatePath,n.id=e}this.$router.push({path:i,query:n})},setCateKey(t,e){/Subject$/.test(t)?this.$store.commit("updateSubjectCate",e):/KnowledgeCatalog$/.test(t)?this.$store.commit("updateKnowledgeCatalogCate",e):/Knowledge$/.test(t)&&this.$store.commit("updateKnowledgeCate",e)},onDelete(t){this.$dialog.confirm({message:"确认删除"}).then((()=>{this.$emit("delete",t)}))},onCollection(t){t[this.collectionKey]?this.$emit("uncollection",t[this.collectionKey]):this.$emit("collection",t.id)}}};i(3173);const d=(0,s.Z)(r,l,[],!1,null,"34b28c0b",null).exports;var c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-tree"},[t.listLength?e("tree-list",{key:t.list.length,attrs:{data:t.list,options:t.options},scopedSlots:t._u([{key:"default",fn:function({node:i}){return e("div",{staticClass:"row-between col-center list-unit"},[t.childListPath?e("div",{staticClass:"ellipsis title",on:{click:function(e){return t.onRouterTo("childList",i.data.id)}}},[t._v(t._s(i.text))]):t.detailPath?e("div",{staticClass:"ellipsis title",on:{click:function(e){return t.onRouterTo("detail",i.data.id)}}},[t._v(t._s(i.text))]):e("div",{staticClass:"ellipsis title"},[t._v(t._s(i.text))]),t._v(" "),e("div",{staticClass:"actions col-center direction-right"},[e("van-icon",{attrs:{name:"delete-o",color:"var(--red)"},on:{click:function(e){return t.onDelete(i.data.id)}}}),t._v(" "),t.addPath?e("van-icon",{attrs:{name:"plus",color:"var(--cyan)"},on:{click:function(e){return t.onRouterTo("add",i.data.id)}}}):t._e(),t._v(" "),t.updatePath?e("van-icon",{attrs:{name:"edit",color:"var(--blue)"},on:{click:function(e){return t.onRouterTo("update",i.data.id)}}}):t._e()],1)])}}])}):e("van-empty",{attrs:{description:"没有内容"}})],1)};c._withStripped=!0;const u={components:{"tree-list":i(5488).Z},props:{list:{type:Array,default:()=>[]},childListPath:String,detailPath:String,updatePath:String,addPath:String},computed:{listLength(){return this.list.length}},data:()=>({options:{propertyNames:{text:"title"}}}),methods:{onRouterTo(t,e){let i="",n={};switch(t){case"childList":i=this.childListPath,this.setCateKey(this.childListPath,e),n.cate_id=e;break;case"detail":i=this.detailPath,n.id=e;break;case"update":i=this.updatePath,n.id=e;break;case"add":i=this.addPath,n.parent_id=e,n.cate_id=this.getCateKey(this.addPath)}this.$router.push({path:i,query:n})},setCateKey(t,e){/Subject$/.test(t)?this.$store.commit("updateSubjectCate",e):/KnowledgeCatalog$/.test(t)?this.$store.commit("updateKnowledgeCatalogCate",e):/Knowledge$/.test(t)&&this.$store.commit("updateKnowledgeCate",e)},getCateKey(t){return/Subject$/.test(t)?this.$store.state.subjectCate:/KnowledgeCatalog$/.test(t)?this.$store.state.knowledgeCatalogCate:/Knowledge$/.test(t)?this.$store.state.knowledgeCate:void 0},onDelete(t){this.$dialog.confirm({message:"确认删除"}).then((()=>{this.$emit("delete",t)}))}}};i(6730);const h=(0,s.Z)(u,c,[],!1,null,"d8658b4e",null).exports;var p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-search"},[e("van-search",{on:{input:t.onSearch,search:t.onSearch},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)};p._withStripped=!0;let f=0;const v={data:()=>({searchValue:""}),methods:{onSearch(t){f&&clearTimeout(f),f=setTimeout((()=>{this.$emit("search",t)}),500)}}};i(4060);const g=(0,s.Z)(v,p,[],!1,null,"0bfb25be",null).exports;var m=i(5928),b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-list-head"},[e("b",{staticClass:"col-center"},[e("span",{staticClass:"no-wrap"},[t._v(t._s(t.title)+"：")]),t._v(" "),e("span",[t._v(t._s(t.value))])]),t._v(" "),e("van-divider")],1)};b._withStripped=!0;const _={props:{title:String,value:String}};i(5169);const w=(0,s.Z)(_,b,[],!1,null,"3897d06e",null).exports;var y=function(){return(0,this._self._c)("div")};y._withStripped=!0;const x={props:{loading:Boolean},data:()=>({toastIns:null}),watch:{loading(t){t?this.toastIns=this.$toast.loading({message:"加载中",forbidClick:!0,duration:0}):(this.toastIns.clear(),this.toastIns=null)}},unmounted(){this.toastIns.clear(),this.toastIns=null}},C=(0,s.Z)(x,y,[],!1,null,"37ab0e92",null).exports},1241:(t,e,i)=>{"use strict";function n(t){for(let e in t)t[e]=t[e].toString().trim();return t}function a(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],i=!1,n=0;n<e.length;n++)if(t.indexOf(e[n])>0){i=!0;break}var a=window.screen.width,s=window.screen.height;return a>325&&s<750&&(i=!0),i}function s(t){return`${t.getFullYear()}-${("0"+t.getMonth()).substr(-2)}-${("0"+t.getDate()).substr(-2)} ${("0"+t.getHours()).substr(-2)}:${("0"+t.getMinutes()).substr(-2)}:${("0"+t.getSeconds()).substr(-2)}`}function o(t){let e;if(t instanceof Array)e=t.map((t=>o(t)));else if(t instanceof Set){e=new Set;for(let i of t)e.add(o(i))}else if(t instanceof Map){e=new Map;for(let[i,n]of t)e.set(o(i),o(n))}else if(t instanceof Object){e={};for(let i in t)e[i]=o(t[i])}else e=t;return e}i.d(e,{_n:()=>l,_t:()=>s,aJ:()=>o,mG:()=>n,tq:()=>a});const l=async(t,e=300,i=1,n="base64")=>{let a=new Image;return a.src=URL.createObjectURL(t),new Promise(((t,s)=>{a.onload=function(){let a=this.width,s=this.height,o=a/s,l=0,r=0;a>e||s>e?a>s?(l=e,r=l/o):(r=e,l=r*o):(l=a,r=s);let d=document.createElement("canvas"),c=d.getContext("2d"),u=document.createAttribute("width"),h=document.createAttribute("height");u.nodeValue=l,h.nodeValue=r,d.setAttributeNode(u),d.setAttributeNode(h),c.drawImage(this,0,0,l,r);let p=d.toDataURL("image/jpeg",i);if("base64"===n)t(p);else if("file"===n){let e=((t,e="")=>{for(var i=t.split(","),n=i[0].match(/:(.*?);/)[1],a=atob(i[1]),s=a.length,o=new Uint8Array(s);s--;)o[s]=a.charCodeAt(s);if(n){var l=n.split("/");""===e&&(e="file."+l[1])}return new File([o],e,{type:n})})(p,"img.jpg");t(e)}}}))}},9572:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var n=i(6738),a=i.n(n),s=i(7705),o=i.n(s)()(a());o.push([t.id,"\n.fixed[data-v-60219a4e] {\n    position: fixed;\n    right: 20px;\n    bottom: 110px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-color: var(--cyan);\n    opacity: .5;\n    z-index: 1999;\n}\n",""]);const l=o},1484:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var n=i(6738),a=i.n(n),s=i(7705),o=i.n(s)()(a());o.push([t.id,"\n.list-unit > .title[data-v-34b28c0b] {\n    width: calc(100% - 76px);\n    color: var(--gray-2);\n}\n.list-unit > .actions[data-v-34b28c0b] {\n    width: 76px;\n}\n.list-unit > .actions[data-v-34b28c0b] .van-icon {\n    margin-left: 11px;\n}\n",""]);const l=o},708:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var n=i(6738),a=i.n(n),s=i(7705),o=i.n(s)()(a());o.push([t.id,"\n.custom-list-head[data-v-3897d06e] {\n    padding: 16px 16px 0;\n}\n.custom-list-head > b > span[data-v-3897d06e]:first-child {\n    color: var(--gray-3);\n}\n",""]);const l=o},6548:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var n=i(6738),a=i.n(n),s=i(7705),o=i.n(s)()(a());o.push([t.id,"\n.custom-markdown-editor[data-v-4a472ee0] .v-note-wrapper {\n    z-index: initial;\n}\n",""]);const l=o},4109:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var n=i(6738),a=i.n(n),s=i(7705),o=i.n(s)()(a());o.push([t.id,"\n.custom-search[data-v-0bfb25be] {\n    height: 54px;\n}\n.custom-search[data-v-0bfb25be] .van-search {\n    position: fixed;\n    bottom: 50px;\n    left: 0;\n    right: 0;\n    z-index: 999;\n    box-shadow: 0 -1px 1px 1px rgba(0,0,0,.04);\n    background-color: inherit;\n}\n",""]);const l=o},4589:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var n=i(6738),a=i.n(n),s=i(7705),o=i.n(s)()(a());o.push([t.id,"\n.list-unit[data-v-d8658b4e] {\n    width: 100%;\n    border-bottom: 1px solid #ebedf0;\n    padding: 3px 0 4px;\n}\n.list-unit > .title[data-v-d8658b4e] {\n    width: calc(100% - 76px);\n    font-size: 14px;\n    color: var(--gray-2);\n}\n.list-unit > .actions[data-v-d8658b4e] {\n    width: 76px;\n}\n.list-unit > .actions[data-v-d8658b4e] .van-icon {\n    margin-left: 11px;\n}\n",""]);const l=o},5928:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d,e:()=>l});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-markdown-editor"},[e("mavon-editor",{ref:"md",attrs:{value:t.value,boxShadow:!1,html:!1,xssOptions:!1,toolbars:t.toolbars,subfield:t.subfield,defaultOpen:t.defaultOpen,toolbarsBackground:"var(--primary-color)",previewBackground:"var(--primary-color)",imageFilter:t.imgFilter},on:{fullScreen:t.onEditorFullScreen,save:t.onContentSave,change:t.onContentChange,imgAdd:t.onEditorImgAdd}})],1)};n._withStripped=!0;var a=i(1241),s=i(966);i(1226);let o=0;const l=s.mavonEditor.getMarkdownIt(),r={components:{"mavon-editor":s.mavonEditor},props:{value:{type:String,default:""}},data:()=>({toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,fullscreen:!0,readmodel:!0,htmlcode:!0,help:!0,undo:!0,redo:!0,trash:!0,save:!0,navigation:!0,alignleft:!0,aligncenter:!0,alignright:!0,subfield:!0,preview:!0},subfield:!0,defaultOpen:"preview"}),mounted(){this.toolbars.imagelink=!1,this.toolbars.trash=!1,(0,a.tq)()&&(this.toolbars.readmodel=!1,this.toolbars.subfield=!1,this.subfield=!1,this.defaultOpen="edit")},methods:{onContentChange(t,e){o&&clearTimeout(o),o=setTimeout((()=>{this.$emit("change",t)}),200)},onEditorFullScreen(t){document.querySelector(".v-note-wrapper").style.zIndex=t?1500:"initial"},downloadFile(t,e){let i=document.createElement("a");i.href="data:text/plain;charset=utf-8,"+e,i.download=t,document.body.appendChild(i),i.click(),document.body.removeChild(i)},onContentSave(t,e){this.downloadFile("source.html",e)},imgFilter(t){return!!/^image/.test(t.type)||(this.$toast.fail("请选择图片文件"),!1)},async onEditorImgAdd(t,e){let i=await(0,a._n)(e);this.$refs.md.$img2Url(t,i)}}};i(7757);const d=(0,i(1900).Z)(r,n,[],!1,null,"4a472ee0",null).exports},3050:(t,e,i)=>{var n=i(9572);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=(0,i(4023).Z)("61b653fd",n,!1,{});n.locals||t.hot.accept(9572,(function(){var e=i(9572);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},3173:(t,e,i)=>{var n=i(1484);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=(0,i(4023).Z)("0ae5d0e3",n,!1,{});n.locals||t.hot.accept(1484,(function(){var e=i(1484);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},5169:(t,e,i)=>{var n=i(708);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=(0,i(4023).Z)("2007ba13",n,!1,{});n.locals||t.hot.accept(708,(function(){var e=i(708);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},7757:(t,e,i)=>{var n=i(6548);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=(0,i(4023).Z)("61aadaa3",n,!1,{});n.locals||t.hot.accept(6548,(function(){var e=i(6548);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},4060:(t,e,i)=>{var n=i(4109);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=(0,i(4023).Z)("80ee606e",n,!1,{});n.locals||t.hot.accept(4109,(function(){var e=i(4109);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))},6730:(t,e,i)=>{var n=i(4589);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=(0,i(4023).Z)("9ebce6fa",n,!1,{});n.locals||t.hot.accept(4589,(function(){var e=i(4589);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),a(e)})),t.hot.dispose((function(){a()}))}}]);