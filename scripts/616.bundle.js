(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[616],{1241:(e,t,n)=>{"use strict";function r(e){for(let t in e)e[t]=e[t].toString().trim();return e}function a(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!1,r=0;r<t.length;r++)if(e.indexOf(t[r])>0){n=!0;break}var a=window.screen.width,i=window.screen.height;return a>325&&i<750&&(n=!0),n}function i(e){return`${e.getFullYear()}-${("0"+e.getMonth()).substr(-2)}-${("0"+e.getDate()).substr(-2)} ${("0"+e.getHours()).substr(-2)}:${("0"+e.getMinutes()).substr(-2)}:${("0"+e.getSeconds()).substr(-2)}`}function o(e){let t;if(e instanceof Array)t=e.map((e=>o(e)));else if(e instanceof Set){t=new Set;for(let n of e)t.add(o(n))}else if(e instanceof Map){t=new Map;for(let[n,r]of e)t.set(o(n),o(r))}else if(e instanceof Object){t={};for(let n in e)t[n]=o(e[n])}else t=e;return t}n.d(t,{_n:()=>c,_t:()=>i,aJ:()=>o,mG:()=>r,tq:()=>a});const c=async(e,t=300,n=1,r="base64")=>{let a=new Image;return a.src=URL.createObjectURL(e),new Promise(((e,i)=>{a.onload=function(){let a=this.width,i=this.height,o=a/i,c=0,s=0;a>t||i>t?a>i?(c=t,s=c/o):(s=t,c=s*o):(c=a,s=i);let l=document.createElement("canvas"),u=l.getContext("2d"),d=document.createAttribute("width"),v=document.createAttribute("height");d.nodeValue=c,v.nodeValue=s,l.setAttributeNode(d),l.setAttributeNode(v),u.drawImage(this,0,0,c,s);let f=l.toDataURL("image/jpeg",n);if("base64"===r)e(f);else if("file"===r){let t=((e,t="")=>{for(var n=e.split(","),r=n[0].match(/:(.*?);/)[1],a=atob(n[1]),i=a.length,o=new Uint8Array(i);i--;)o[i]=a.charCodeAt(i);if(r){var c=r.split("/");""===t&&(t="file."+c[1])}return new File([o],t,{type:r})})(f,"img.jpg");e(t)}}}))}},9788:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(6738),a=n.n(r),i=n(7705),o=n.n(i)()(a());o.push([e.id,"\n.framework[data-v-7487f3cc] {\n    padding: 46px 0 50px;\n}\n.framework[data-v-7487f3cc] .van-nav-bar {\n    z-index: 2;\n    background-color: var(--primary-color);\n    box-shadow: 0 1px 1px 1px rgba(0,0,0,.04);\n}\n.framework[data-v-7487f3cc] .van-nav-bar .van-nav-bar__title .van-icon {\n    margin-right: 4px;\n}\n.framework[data-v-7487f3cc] .van-tabbar {\n    background-color: var(--primary-color);\n    box-shadow: 0 -1px 1px 1px rgba(0,0,0,.04);\n    z-index: 998;\n}\n.framework[data-v-7487f3cc] .van-tabbar-item--active {\n    background-color: var(--primary-color);\n}\n.framework .side-menu[data-v-7487f3cc] {\n    box-sizing: border-box;\n    width: 44%;\n    height: 100%;\n    padding: 18px 12px;\n    background-color: var(--primary-color);\n}\n.framework .side-menu .van-icon[data-v-7487f3cc] {\n    margin-right: 2px;\n}\n.framework .side-menu-item[data-v-7487f3cc] {\n    box-sizing: border-box;\n    padding: 12px 0;\n}\n",""]);const c=o},3054:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"framework"},[t("van-nav-bar",{attrs:{fixed:"","left-arrow":""},on:{"click-left":e.onNavBarLeftClick,"click-right":e.onNavBarRightClick},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticClass:"col-center"},[e.currentNav.icon?t("van-icon",{attrs:{name:e.currentNav.icon,color:e.currentNav.iconColor,size:"18"}}):e._e(),e._v(" "),t("span",[e._v(e._s(e.currentNav.title))])],1)]},proxy:!0},{key:"right",fn:function(){return[t("van-icon",{attrs:{name:"bars",size:"18"}})]},proxy:!0}])}),e._v(" "),t("van-popup",{staticClass:"side-menu",attrs:{position:"right",round:"","close-on-popstate":!0},model:{value:e.rightMenuVisible,callback:function(t){e.rightMenuVisible=t},expression:"rightMenuVisible"}},e._l(e.rightMenuList,(function(n,r){return t("div",{key:r,on:{click:()=>e.onRightMenuClick(n.value)}},["divider"===n.type?t("van-divider"):t("div",{staticClass:"side-menu-item row-between col-center"},[t("span",{staticClass:"col-center"},[n.icon?t("van-icon",{attrs:{name:n.icon}}):e._e(),e._v(" "),t("span",[e._v(e._s(n.text))])],1),e._v(" "),t("van-icon",{attrs:{name:"arrow"}})],1)],1)})),0),e._v(" "),t("van-tabbar",{attrs:{fixed:"",route:""},model:{value:e.currentMenuIndex,callback:function(t){e.currentMenuIndex=t},expression:"currentMenuIndex"}},e._l(e.bottomMenuList,(function(n,r){return t("van-tabbar-item",{key:r,attrs:{to:n.value,icon:n.icon}},[e._v(e._s(n.text))])})),1),e._v(" "),t("my-loading",{attrs:{loading:e.pageLoading}}),e._v(" "),t("keep-alive",[e.$route.meta.keepAlive?t("router-view"):e._e()],1),e._v(" "),e.$route.meta.keepAlive?e._e():t("router-view")],1)};r._withStripped=!0;const a={components:{"my-loading":n(4978).he},data:()=>({currentMenuIndex:0,bottomMenuList:[{text:"首页",icon:"wap-home-o",value:"/home"},{text:"搜索",icon:"search",value:"/search"},{text:"用户信息",icon:"user-circle-o",value:"/userInfo"}],rightMenuList:[{text:"搜索",icon:"search",value:"/search"},{type:"divider"},{text:"随机问答",icon:"play-circle",value:"/knowledgeRandomQA"},{text:"错题本",icon:"cross",value:"/listKnowledgeWrong"},{text:"我的收藏",icon:"label",value:"/listKnowledgeCollection"},{type:"divider"},{text:"专业列表",value:"/listMajor"},{text:"科目列表",value:"/listSubject"},{text:"知识点目录列表",value:"/listKnowledgeCatalog"}],rightMenuVisible:!1}),computed:{currentNav(){return this.$store.state.currentNav},pageLoading(){return this.$store.state.pageLoading}},methods:{onRightMenuClick(e){this.$router.push({path:e}),this.rightMenuVisible=!1},onNavBarLeftClick(){this.$router.back()},onNavBarRightClick(){this.rightMenuVisible=!0}}};n(8882);const i=(0,n(1900).Z)(a,r,[],!1,null,"7487f3cc",null).exports},8882:(e,t,n)=>{var r=n(9788);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);var a=(0,n(4023).Z)("35c149d2",r,!1,{});r.locals||e.hot.accept(9788,(function(){var t=n(9788);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),a(t)})),e.hot.dispose((function(){a()}))}}]);