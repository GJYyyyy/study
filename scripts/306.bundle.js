(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[306],{1241:(e,t,n)=>{"use strict";function a(e){for(let t in e)e[t]=e[t].toString().trim();return e}function r(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!1,a=0;a<t.length;a++)if(e.indexOf(t[a])>0){n=!0;break}var r=window.screen.width,i=window.screen.height;return r>325&&i<750&&(n=!0),n}function i(e){return`${e.getFullYear()}-${("0"+e.getMonth()).substr(-2)}-${("0"+e.getDate()).substr(-2)} ${("0"+e.getHours()).substr(-2)}:${("0"+e.getMinutes()).substr(-2)}:${("0"+e.getSeconds()).substr(-2)}`}function o(e){let t;if(e instanceof Array)t=e.map((e=>o(e)));else if(e instanceof Set){t=new Set;for(let n of e)t.add(o(n))}else if(e instanceof Map){t=new Map;for(let[n,a]of e)t.set(o(n),o(a))}else if(e instanceof Object){t={};for(let n in e)t[n]=o(e[n])}else t=e;return t}n.d(t,{_n:()=>s,_t:()=>i,aJ:()=>o,mG:()=>a,tq:()=>r});const s=async(e,t=300,n=1,a="base64")=>{let r=new Image;return r.src=URL.createObjectURL(e),new Promise(((e,i)=>{r.onload=function(){let r=this.width,i=this.height,o=r/i,s=0,c=0;r>t||i>t?r>i?(s=t,c=s/o):(c=t,s=c*o):(s=r,c=i);let l=document.createElement("canvas"),d=l.getContext("2d"),u=document.createAttribute("width"),v=document.createAttribute("height");u.nodeValue=s,v.nodeValue=c,l.setAttributeNode(u),l.setAttributeNode(v),d.drawImage(this,0,0,s,c);let g=l.toDataURL("image/jpeg",n);if("base64"===a)e(g);else if("file"===a){let t=((e,t="")=>{for(var n=e.split(","),a=n[0].match(/:(.*?);/)[1],r=atob(n[1]),i=r.length,o=new Uint8Array(i);i--;)o[i]=r.charCodeAt(i);if(a){var s=a.split("/");""===t&&(t="file."+s[1])}return new File([o],t,{type:a})})(g,"img.jpg");e(t)}}}))}},2407:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var a=n(6738),r=n.n(a),i=n(7705),o=n.n(i)()(r());o.push([e.id,"\n.framework[data-v-4b6dad78] {\n    padding: 46px 0 50px;\n}\n.framework[data-v-4b6dad78] .van-nav-bar {\n    z-index: 2;\n    background-color: var(--primary-color);\n    box-shadow: 0 1px 1px 1px rgba(0,0,0,.04);\n}\n.framework[data-v-4b6dad78] .van-nav-bar .van-nav-bar__title .van-icon {\n    margin-right: 4px;\n}\n.framework[data-v-4b6dad78] .van-tabbar {\n    background-color: var(--primary-color);\n    box-shadow: 0 -1px 1px 1px rgba(0,0,0,.04);\n    z-index: 998;\n}\n.framework[data-v-4b6dad78] .van-tabbar-item--active {\n    background-color: var(--primary-color);\n}\n.framework .side-menu[data-v-4b6dad78] {\n    box-sizing: border-box;\n    width: 44%;\n    height: 100%;\n    padding: 18px 12px;\n    background-color: var(--primary-color);\n}\n.framework .side-menu .van-icon[data-v-4b6dad78] {\n    margin-right: 2px;\n}\n.framework .side-menu-item[data-v-4b6dad78] {\n    box-sizing: border-box;\n    padding: 12px 0;\n}\n",""]);const s=o},8436:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"framework"},[t("van-nav-bar",{attrs:{fixed:"","left-arrow":""},on:{"click-left":e.onNavBarLeftClick,"click-right":e.onNavBarRightClick},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticClass:"col-center"},[e.currentNav.icon?t("van-icon",{attrs:{name:e.currentNav.icon,color:e.currentNav.iconColor,size:"18"}}):e._e(),e._v(" "),t("span",[e._v(e._s(e.currentNav.title))])],1)]},proxy:!0},{key:"right",fn:function(){return[t("van-icon",{attrs:{name:"bars",size:"18"}})]},proxy:!0}])}),e._v(" "),t("van-popup",{staticClass:"side-menu",attrs:{position:"right",round:"","close-on-popstate":!0},model:{value:e.rightMenuVisible,callback:function(t){e.rightMenuVisible=t},expression:"rightMenuVisible"}},e._l(e.rightMenuList,(function(n,a){return t("div",{key:a,on:{click:()=>e.onRightMenuClick(n.value)}},["divider"===n.type?t("van-divider"):t("div",{staticClass:"side-menu-item row-between col-center"},[t("span",{staticClass:"col-center"},[n.icon?t("van-icon",{attrs:{name:n.icon}}):e._e(),e._v(" "),t("span",[e._v(e._s(n.text))])],1),e._v(" "),t("van-icon",{attrs:{name:"arrow"}})],1)],1)})),0),e._v(" "),t("keep-alive",[e.$route.meta.keepAlive?t("router-view"):e._e()],1),e._v(" "),e.$route.meta.keepAlive?e._e():t("router-view"),e._v(" "),t("van-tabbar",{attrs:{fixed:"",route:""},model:{value:e.currentMenuIndex,callback:function(t){e.currentMenuIndex=t},expression:"currentMenuIndex"}},e._l(e.bottomMenuList,(function(n,a){return t("van-tabbar-item",{key:a,attrs:{to:n.value,icon:n.icon}},[e._v(e._s(n.text))])})),1),e._v(" "),t("my-loading",{attrs:{loading:e.pageLoading}})],1)};a._withStripped=!0;const r={components:{"my-loading":n(7866).he},data:()=>({currentMenuIndex:0,bottomMenuList:[{text:"首页",icon:"wap-home-o",value:"/home"},{text:"搜索",icon:"search",value:"/search"},{text:"用户信息",icon:"user-circle-o",value:"/userInfo"}],rightMenuList:[{text:"搜索",icon:"search",value:"/search"},{type:"divider"},{text:"随机问答",icon:"play-circle",value:"/knowledgeRandomQA"},{text:"错题本",icon:"cross",value:"/listKnowledgeWrong"},{text:"我的收藏",icon:"label",value:"/listKnowledgeCollection"},{type:"divider"},{text:"专业列表",value:"/listMajor"},{text:"科目列表",value:"/listSubject"},{text:"知识点目录列表",value:"/listKnowledgeCatalog"}],rightMenuVisible:!1}),computed:{currentNav(){return this.$store.state.currentNav},pageLoading(){return this.$store.state.pageLoading}},methods:{onRightMenuClick(e){this.$router.push({path:e}),this.rightMenuVisible=!1},onNavBarLeftClick(){this.$router.back()},onNavBarRightClick(){this.rightMenuVisible=!0}}};n(7478);const i=(0,n(1900).Z)(r,a,[],!1,null,"4b6dad78",null).exports},7478:(e,t,n)=>{var a=n(2407);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var r=(0,n(4023).Z)("ae97d62e",a,!1,{});a.locals||e.hot.accept(2407,(function(){var t=n(2407);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),r(t)})),e.hot.dispose((function(){r()}))}}]);