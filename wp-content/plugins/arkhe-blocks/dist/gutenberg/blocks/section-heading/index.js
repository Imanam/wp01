(()=>{var e={608:(e,t,n)=>{"use strict";const l=window.wp.element,a=window.wp.i18n,r=window.wp.blocks,o=window.wp.blockEditor,s=window.wp.components,c=JSON.parse('{"u2":"arkhe-blocks/section-heading"}'),i=(0,l.createElement)("svg",{viewBox:"0 0 56 56"},(0,l.createElement)("g",null,(0,l.createElement)("g",{className:"st2"},(0,l.createElement)("path",{d:"M4.8,32.1V21.3H1v-2.2h10.3v2.2H7.5v10.8H4.8z"}),(0,l.createElement)("path",{d:"M14.4,32.1v-13H17v13H14.4z"}),(0,l.createElement)("path",{d:"M23.9,32.1V21.3H20v-2.2h10.3v2.2h-3.8v10.8H23.9z"}),(0,l.createElement)("path",{d:"M33.5,32.1V19.2h2.6v10.7h6.5v2.2H33.5z"}),(0,l.createElement)("path",{d:"M45.1,32.1v-13h9.6v2.2h-7v2.9h6.5v2.2h-6.5v3.5H55v2.2H45.1z"})),(0,l.createElement)("g",null,(0,l.createElement)("path",{d:"M39,38.9H17c-0.6,0-1-0.4-1-1l0,0c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1l0,0C40,38.4,39.6,38.9,39,38.9z"}))));function m(e){let{level:t,isPressed:n=!1}=e;const a={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return a.hasOwnProperty(t)?(0,l.createElement)(s.SVG,{width:"24",height:"24",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",isPressed:n},(0,l.createElement)(s.Path,{d:a[t]})):null}const u=[1,2,3,4,5,6],h={className:"block-library-heading-level-dropdown"};function v(e){let{selectedLevel:t,onChange:n}=e;return(0,l.createElement)(s.ToolbarDropdownMenu,{popoverProps:h,icon:(0,l.createElement)(m,{level:t}),label:(0,a.__)("Change heading level"),controls:u.map((e=>{{const r=e===t;return{icon:(0,l.createElement)(m,{level:e,isPressed:r}),label:(0,a.sprintf)(// translators: %s: heading level e.g: "1", "2", "3"
(0,a.__)("Heading %d"),e),isActive:r,onClick(){n(e)}}}}))})}const p=(0,l.createElement)("svg",{viewBox:"0 0 40 40","aria-hidden":"true",width:"20",height:"20"},(0,l.createElement)("polygon",{points:"38.3,39 36.3,39 36.3,33.5 3.7,33.5 3.7,39 1.7,39 1.7,31.5 38.3,31.5 "}),(0,l.createElement)("g",null,(0,l.createElement)("rect",{x:"19",y:"6",width:"2",height:"18"}),(0,l.createElement)("polygon",{points:"20,1 12,7.1 28,7.1 \t"}),(0,l.createElement)("polygon",{points:"20,28.9 28,22.7 12,22.7 \t"})));var b=n(1991),g=n.n(b);const d=(e,t)=>-1!==e.split(" ").indexOf(t),E=[{icon:(0,l.createElement)("span",{className:"arkb-null-icon"}),size:"0",title:"0",mbClass:"u-mt-0"},{icon:(0,l.createElement)("span",{className:"arkb-null-icon"}),size:"0.5rem",title:"0.5rem",mbClass:"u-mt-5"},{icon:(0,l.createElement)("span",{className:"arkb-null-icon"}),size:"1rem",title:"1rem",mbClass:"u-mt-10"},{icon:(0,l.createElement)("span",{className:"arkb-null-icon"}),size:"1.5rem",title:"1.5rem",mbClass:"u-mt-15"},{icon:(0,l.createElement)("span",{className:"arkb-null-icon"}),size:"2rem",title:"2rem",mbClass:"u-mt-20"},{icon:(0,l.createElement)("span",{className:"arkb-null-icon"}),size:"3rem",title:"3rem",mbClass:"u-mt-30"},{icon:(0,l.createElement)("span",{className:"arkb-null-icon"}),size:"4rem",title:"4rem",mbClass:"u-mt-40"},{icon:(0,l.createElement)("span",{className:"arkb-null-icon"}),size:"6rem",title:"6rem",mbClass:"u-mt-60"},{icon:(0,l.createElement)("span",{className:"arkb-null-icon"}),size:"8rem",title:"8rem",mbClass:"u-mt-80"}],k=E.map((e=>e.mbClass)),f=(0,l.memo)((e=>{let{className:t,setAttributes:n}=e;if(!window.arkbSettings?.isArkhe)return null;const r=t||"";let o;E.forEach((e=>{d(r,e.mbClass)&&(o=e)}));const c=o?o.mbClass:"";return(0,l.createElement)(s.ToolbarGroup,{className:"arkb-toolbar",isCollapsed:!0,icon:o?(0,l.createElement)("span",{className:"arkb-toolbtn--margin"},p,o.size):p,label:(0,a.__)("Margins on the block","arkhe-blocks"),controls:E.map((e=>{const{mbClass:t}=e,l=c===t;return{...e,isActive:l,onClick:()=>{const e=function(e,t,n){let l,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(d(e,t))return e;if(n){const t={};n.map((e=>{t[e]=!1})),a&&(t[a]=!1),l=g()(e,t)}return""!==t&&(l=g()(l,a,t)),l}(r,l?"":t,k);n({className:e})}}}))})}));var C=n(4184),_=n.n(C);const x=[{label:(0,a.__)("Top","arkhe-blocks"),value:"top"},{label:(0,a.__)("Bottom","arkhe-blocks"),value:"bottom"}],w="ark-block-heading";(0,r.registerBlockType)(c.u2,{title:(0,a.__)("Section Heading","arkhe-blocks"),icon:i,transforms:{from:[{type:"block",blocks:["core/paragraph"],transform:e=>(0,r.createBlock)(c.u2,{content:e.content})}]},merge:(e,t)=>({content:(e.content||"")+(t.content||"")}),edit:e=>{let{attributes:t,setAttributes:n,mergeBlocks:i,onReplace:m}=e;const{textAlign:u,content:h,level:p,subContent:b,subPosition:g,color:d,lineColor:E,useLine:k}=t,C="h"+p,H=(0,l.useCallback)(((e,t)=>{n({[e]:t||void 0})}),[n]),y={};d&&(y.color=d);const z=(0,o.useBlockProps)({className:_()(`${w} ark-has-guide`,{[`has-text-align-${u}`]:u&&"center"!==u,"has-text-color":!!d}),"data-sub":g,style:y||null}),N={};E&&(N.color=E);const V={className:_()(`${w}__line`,{"has-text-color":!!E}),style:N||null},M={tagName:"div",className:_()(`${w}__sub`,{"is-empty":o.RichText.isEmpty(b)}),value:b,onChange:e=>n({subContent:e}),placeholder:(0,a.__)("Write sub title…","arkhe-blocks"),textAlign:u};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(o.BlockControls,null,(0,l.createElement)(s.ToolbarGroup,null,(0,l.createElement)(v,{selectedLevel:p,onChange:e=>n({level:e})})),(0,l.createElement)(o.AlignmentToolbar,{value:u||"center",onChange:e=>{n({textAlign:e})}}),(0,l.createElement)(f,{attributes:t,setAttributes:n})),(0,l.createElement)(o.InspectorControls,null,(0,l.createElement)(s.PanelBody,{title:(0,a.__)("Settings","arkhe-blocks"),initialOpen:!0},(0,l.createElement)(s.RadioControl,{label:(0,a.__)("Subtext position","arkhe-blocks"),selected:g,options:x,onChange:e=>{n({subPosition:e})}}),(0,l.createElement)(s.ToggleControl,{label:(0,a.__)("Show line","arkhe-blocks"),checked:k,onChange:e=>{n({useLine:e})}})),(0,l.createElement)(o.PanelColorSettings,{title:(0,a.__)("Color settings","arkhe-blocks"),initialOpen:!0,colorSettings:[{value:d,label:(0,a.__)("Text Color","arkhe-blocks"),onChange:e=>{H("color",e)}},{value:E,label:(0,a.__)("Line Color","arkhe-blocks"),onChange:e=>{H("lineColor",e)}}]})),(0,l.createElement)("div",z,"top"===g&&(0,l.createElement)(o.RichText,M),(0,l.createElement)(o.RichText,{identifier:"content",tagName:C,className:`${w}__main`,value:h,onChange:e=>n({content:e}),onMerge:i,onSplit:e=>e?(0,r.createBlock)(c.u2,{...t,content:e}):(0,r.createBlock)("core/paragraph"),onReplace:m,onRemove:()=>m([]),placeholder:(0,a.__)("Write heading…"),textAlign:u}),k&&(0,l.createElement)("span",V),"bottom"===g&&(0,l.createElement)(o.RichText,M)))},save:e=>{let{attributes:t}=e;const{textAlign:n,content:a,level:r,subContent:s,subPosition:c,useLine:i,color:m,lineColor:u}=t,h="h"+r,v={};m&&(v.color=m);const p=o.useBlockProps.save({className:_()(`${w}`,{[`has-text-align-${n}`]:n&&"center"!==n,"has-text-color":!!m}),"data-sub":c,style:v||null}),b={};return u&&(b.color=u),(0,l.createElement)("div",p,"top"===c&&(0,l.createElement)("div",{className:`${w}__sub`},(0,l.createElement)(o.RichText.Content,{value:s})),(0,l.createElement)(h,{className:`${w}__main`},(0,l.createElement)(o.RichText.Content,{value:a})),i&&(0,l.createElement)("span",{className:_()(`${w}__line`,{"has-text-color":!!u}),style:b||null}),"bottom"===c&&(0,l.createElement)("div",{className:`${w}__sub`},(0,l.createElement)(o.RichText.Content,{value:s})))}})},1991:(e,t)=>{var n;!function(){"use strict";var l=function(){function e(){}function t(e,t){for(var n=t.length,l=0;l<n;++l)a(e,t[l])}e.prototype=Object.create(null);var n={}.hasOwnProperty,l=/\s+/;function a(e,a){if(a){var r=typeof a;"string"===r?function(e,t){for(var n=t.split(l),a=n.length,r=0;r<a;++r)e[n[r]]=!0}(e,a):Array.isArray(a)?t(e,a):"object"===r?function(e,t){if(t.toString===Object.prototype.toString)for(var l in t)n.call(t,l)&&(e[l]=!!t[l]);else e[t.toString()]=!0}(e,a):"number"===r&&function(e,t){e[t]=!0}(e,a)}}return function(){for(var n=arguments.length,l=Array(n),a=0;a<n;a++)l[a]=arguments[a];var r=new e;t(r,l);var o=[];for(var s in r)r[s]&&o.push(s);return o.join(" ")}}();e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},4184:(e,t)=>{var n;!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var s in n)l.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}},t={};function n(l){var a=t[l];if(void 0!==a)return a.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(608)})();