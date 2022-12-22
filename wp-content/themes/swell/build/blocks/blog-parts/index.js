!function(){"use strict";var e={n:function(t){var l=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(l,{a:l}),l},d:function(t,l){for(var r in l)e.o(l,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:l[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}};!function(e,t,l){var r=window.wp.i18n,a=window.wp.blocks,c=window.wp.element,n=window.wp.components,s=window.wp.blockEditor,o=window.wp.serverSideRender,i=l.n(o);function u(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function p(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}var d=function(e){var t=e.icon,l=e.size,r=void 0===l?24:l,a=function(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)l=c[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)l=c[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}(e,["icon","size"]);return(0,c.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?p(Object(l),!0).forEach((function(t){u(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):p(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({width:r,height:r},a))},m=window.wp.primitives,w=(0,c.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(m.Path,{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"})),b=window.wp.url,v=JSON.parse('{"u2":"loos/blog-parts"}'),h=[{attributes:{partsTitle:{type:"string",default:""},partsID:{type:"string",default:""}},save:({attributes:e})=>React.createElement("div",null,'[blog_parts id="'+e.partsID+'"]')}],f=React.createElement("svg",{viewBox:"0 0 56 56"},React.createElement("g",null,React.createElement("path",{d:"M15.4,41.9c0,0.6,0.4,1,1,1h9.2c0.6,0,1-0.4,1-1v-0.8c0-0.6-0.4-1-1-1h-9.2c-0.6,0-1,0.4-1,1V41.9z"}),React.createElement("path",{d:"M11.2,42.9c0.8,0,1.4-0.6,1.4-1.4s-0.6-1.4-1.4-1.4s-1.4,0.6-1.4,1.4S10.4,42.9,11.2,42.9z"}),React.createElement("path",{d:"M45.2,42.9c0.6,0,1-0.4,1-1v-12c0-0.6-0.4-1-1-1h-12c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1H45.2z"}),React.createElement("path",{d:"M15.4,36.3c0,0.6,0.4,1,1,1h9.2c0.6,0,1-0.4,1-1v-0.8c0-0.6-0.4-1-1-1h-9.2c-0.6,0-1,0.4-1,1V36.3z"}),React.createElement("path",{d:"M16.4,31.7h9.2c0.6,0,1-0.4,1-1v-0.8c0-0.6-0.4-1-1-1h-9.2c-0.6,0-1,0.4-1,1v0.8C15.4,31.3,15.8,31.7,16.4,31.7z"}),React.createElement("path",{d:"M11.2,37.3c0.8,0,1.4-0.6,1.4-1.4c0-0.8-0.6-1.4-1.4-1.4s-1.4,0.6-1.4,1.4C9.8,36.7,10.4,37.3,11.2,37.3z"}),React.createElement("path",{d:"M45.2,13.1H10.8c-0.6,0-1,0.4-1,1v9.2c0,0.6,0.4,1,1,1h34.4c0.6,0,1-0.4,1-1v-9.2C46.2,13.5,45.8,13.1,45.2,13.1z M21,21.6 h-8.4v-5.9H21V21.6z M32.2,21.6h-8.4v-5.9h8.4V21.6z M43.4,21.6H35v-5.9h8.4V21.6z"}),React.createElement("path",{d:"M11.2,31.7c0.8,0,1.4-0.6,1.4-1.4s-0.6-1.4-1.4-1.4s-1.4,0.6-1.4,1.4S10.4,31.7,11.2,31.7z"})),React.createElement("path",{d:"M50.5,46.8h-45c-0.3,0-0.5-0.2-0.5-0.5V9.7c0-0.3,0.2-0.5,0.5-0.5h45c0.3,0,0.5,0.2,0.5,0.5v36.7 C51,46.6,50.8,46.8,50.5,46.8z M53,6.2H3c-0.6,0-1,0.4-1,1v41.7c0,0.6,0.4,1,1,1h50c0.6,0,1-0.4,1-1V7.2C54,6.6,53.6,6.2,53,6.2 L53,6.2z"}));const E=window.swellBlogParts||{},R=window.swellPartsUses||{},g=[{value:"all",label:"--- "+(0,r.__)("用途で絞り込む","swell")+" ---"}];g.push({value:"id-0",label:(0,r.__)("通常パーツ（用途の設定なし）","swell")});const O={"id-0":[],all:[]};Object.keys(R).forEach((e=>{const t=R[e];g.push({value:"id-"+e,label:t}),O["id-"+e]=[]})),Object.keys(E).forEach((e=>{const t=E[e],l=t.term_id||"0";O["id-"+l].push({value:e,label:t.title||""}),O.all.push({value:e,label:t.title||""})}));const y=(0,c.memo)((({partsID:e,setAttributes:t,selectedTerm:l,setSelectedTerm:a})=>React.createElement("div",{className:"swl-block-selectArea"},React.createElement(n.SelectControl,{value:e,className:"-partlist",options:[{value:"",label:(0,r.__)("-- ブログパーツを選択 --","swell")},...O[l]],onChange:e=>{t({partsID:e})}}),React.createElement(n.SelectControl,{value:l,options:g,onChange:e=>{a(e),t({partsID:""})}})))),_=({isSelected:e,attributes:t,setAttributes:l,setSelectedTerm:a})=>{const[s,o]=(0,c.useState)(""),[i,u]=(0,c.useState)(O.all),p=(0,c.useRef)(),d=(0,c.useRef)(),m=s&&s.length>=2&&i.length>0;return(0,c.useEffect)((()=>{u(O.all),o("")}),[t,e]),React.createElement("div",{className:"swl-block-searchArea"},React.createElement(n.TextControl,{placeholder:(0,r.__)("タイトルで検索…","swell"),value:s,onChange:e=>{o(e),u(O.all.filter((({label:t})=>t.toLowerCase().includes(e))))},onKeyDown:e=>{m&&null!=p&&p.current&&"Tab"===e.key&&(e.preventDefault(),p.current.querySelector("button").focus())},ref:d}),m&&React.createElement(n.Popover,{ref:p,className:"swl-pop--search",position:"bottom",focusOnMount:!1,onClose:()=>d.current.focus()},React.createElement("div",{className:"swl-pop--search__content"},React.createElement("ul",{className:"swl-pop--search__results"},i.map((({value:e,label:t})=>React.createElement("li",{key:e},React.createElement(n.Button,{className:"block-editor-url-input__suggestion",isLink:!0,onClick:()=>{u(O.all),o(""),l({partsID:e}),a("all")}},t))))))))};(0,a.registerBlockType)(v.u2,{title:(0,r.__)("ブログパーツ","swell"),description:(0,r.__)("登録済みのブログパーツを呼び出すことができます。","swell"),icon:f,edit:({attributes:e,setAttributes:t,isSelected:l})=>{const{partsID:a}=e,n=E[a]||null,o=n?"id-"+(n.term_id||0):"all",[u,p]=(0,c.useState)(o),m=(0,s.useBlockProps)({className:"swell-block-blog-parts swl-block-hasPreview"});return React.createElement("div",m,React.createElement(y,{partsID:a,setAttributes:t,selectedTerm:u,setSelectedTerm:p}),React.createElement(_,{isSelected:l,attributes:e,setAttributes:t,setSelectedTerm:p}),React.createElement("div",{className:"swl-block-previewLabel"},React.createElement("span",null,"Preview"),a&&React.createElement("a",{href:(0,b.addQueryArgs)("post.php",{post:a,action:"edit"}),className:"__editLink",target:"_blank",rel:"noopener noreferrer"},React.createElement(d,{icon:w}),React.createElement("span",null,(0,r.__)("このブログパーツを編集する","swell")))),React.createElement("div",{className:"swl-block-previewArea"},a?React.createElement(i(),{block:"loos/blog-parts",attributes:e}):React.createElement("p",null,(0,r.__)("ブログパーツを選択してください。","swell"))))},save:()=>null,deprecated:h})}(0,0,e)}();