!function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e){e.exports=JSON.parse('{"name":"ayoub-bccb/code-block","title":"Highlighing Code Block","category":"formatting","keywords":["hcb","code"],"supports":{"className":false},"attributes":{"code":{"type":"string","source":"text","selector":"code"},"className":{"type":"string","default":""},"langType":{"type":"string","default":""},"langName":{"type":"string","default":""},"fileName":{"type":"string","default":""},"dataLineNum":{"type":"string","default":""},"isLineShow":{"type":"string","default":"undefined"},"isShowLang":{"type":"string","default":""}},"textdomain":"ayoub-bccb","editorScript":"file:../../build/js/code-block/index.js","editorStyle":"file:../../build/css/hcb_editor.css"}')},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=l.apply(null,a);c&&e.push(c)}else if("object"===o)for(var r in a)n.call(a,r)&&a[r]&&e.push(r)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},,function(e,t,n){"use strict";n.r(t);var a=n(7),l=n.n(a),o=n(0),c=n(1),r=n(6),i=n(2),s=n(4),u=Object(o.createElement)("svg",{x:"0px",y:"0px",viewBox:"0 0 512 512"},Object(o.createElement)("path",{d:"M48,346.8h34.6v51h31.2v-51h34.6v135.8h-34.6V428H82.6v54.5H48V346.8z"}),Object(o.createElement)("path",{d:"M268.1,344.3c17.5,0,31.6,8.3,41,17.3l-19,21.6c-6.2-5.6-12.8-9.2-22-9.2c-17.3,0-30.5,15.2-30.5,40.4 c0,26.1,13.2,40.6,32,40.6c9,0,16.4-4.5,22.4-11.1l19,21.1c-11.5,13.4-26.7,19.9-43.4,19.9c-35.3,0-65.4-23.1-65.4-69.4 C202.1,370.3,231.5,344.3,268.1,344.3z"}),Object(o.createElement)("path",{d:"M363,346.8h44.4c28.2,0,50.6,7.1,50.6,33.7c0,11.8-7.1,25.4-22.9,29.5v0.8c19.2,3.6,29,13.7,29,31.8 c0,28-23.1,40-52.6,40H363V346.8z M406.3,400.6c12.6,0,17.7-6,17.7-14.9c0-8.6-5.3-12.2-17.7-12.2h-8.5v27.1H406.3z M408.9,455.8 c14.7,0,21.1-5.5,21.1-16.2c0-10.5-6.4-14.9-21.1-14.9h-11.1v31H408.9z"}),Object(o.createElement)("polygon",{points:"209.8,56.9 184,31 39.3,175.7 39.3,175.7 39.3,175.7 184,320.4 209.8,294.6 91,175.7"}),Object(o.createElement)("polygon",{points:"302.2,56.9 328,31 472.7,175.7 472.7,175.7 472.7,175.7 328,320.4 302.2,294.6 421,175.7"})),p=Object(o.memo)((function(e){var t=e.attributes,n=e.setAttributes,a=t.isLineShow,l=t.isShowLang;return Object(o.createElement)(i.InspectorControls,null,Object(o.createElement)(s.PanelBody,{title:Object(c.__)("HCB settings","ayoub-bccb"),initialOpen:!0},Object(o.createElement)(s.RadioControl,{label:Object(c.__)("Settings for displaying the number of lines","ayoub-bccb"),selected:a,options:[{label:Object(c.__)("Do not set individually","ayoub-bccb"),value:"undefined"},{label:Object(c.__)("Display row count","ayoub-bccb"),value:"on"},{label:Object(c.__)("Do not display row count","ayoub-bccb"),value:"off"}],onChange:function(e){n({isLineShow:e})}}),Object(o.createElement)(s.RadioControl,{label:Object(c.__)("Settings for displaying language name","ayoub-bccb"),selected:l,options:[{label:Object(c.__)("Do not set individually","ayoub-bccb"),value:""},{label:Object(c.__)("Display language","ayoub-bccb"),value:"1"},{label:Object(c.__)("Do not display language","ayoub-bccb"),value:"0"}],onChange:function(e){n({isShowLang:e})}})))}));function d(e){var t,n=e.value.match(/\r\n|\n/g);t=null!==n?n.length+1:1,e.style.height=1.8*t+1.6+2+"em"}function b(e){return e?e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):e}var f=n(5),m=n.n(f),g=[{supports:{className:!1},attributes:{code:{type:"string",source:"text",selector:"code"},className:{type:"string",default:""},langType:{type:"string",default:""},langName:{type:"string",default:""},fileName:{type:"string",default:""},dataLineNum:{type:"string",default:""},isLineShow:{type:"string",default:"undefined"},isShowLang:{type:"string",default:""}},save:function(e){var t=e.attributes,n=t.code,a=t.fileName,l=t.langName,c=t.dataLineNum,r=t.isLineShow,s=t.isShowLang,u=t.langType||"plain",p=m()("prism","lang-".concat(u));return"undefined"!==r&&(p=m()(p,"".concat(r,"-numbers"))),Object(o.createElement)("div",{className:"bccb_wrap"},Object(o.createElement)("pre",{className:p,"data-file":a||null,"data-lang":l||null,"data-line":c||null,"data-show-lang":s||null},Object(o.createElement)(i.RichText.Content,{tagName:"code",value:b(n)})))}},{supports:{className:!1},attributes:{code:{type:"string",source:"text",selector:"code"},className:{type:"string",default:""},langType:{type:"string",default:"plane"},langName:{type:"string",default:""},fileName:{type:"string",default:""},dataLineNum:{type:"string",default:""},isLineShow:{type:"string",default:"undefined"},isShowLang:{type:"string",default:""}},migrate:function(e){return"plane"===e.langType&&(e.langType=""),e},save:function(e){var t=e.attributes,n=t.code,a=t.langType,l=t.fileName,c=t.langName,r=t.dataLineNum,s=t.isLineShow,u=t.isShowLang,p="prism "+s+"-numbers lang-"+a;return Object(o.createElement)("div",{className:"bccb_wrap"},Object(o.createElement)("pre",{className:p,"data-file":l||null,"data-lang":c||null,"data-line":r||null,"data-show-lang":u||null},Object(o.createElement)(i.RichText.Content,{tagName:"code",value:b(n)})))}}],h=n(3),y=window.hcbLangs;"object"!==l()(y)&&(y={html:"HTML",css:"CSS",scss:"SCSS",js:"JavaScript",ts:"TypeScript",php:"PHP",ruby:"Ruby",python:"Python",swift:"Swift",c:"C",csharp:"C#",cpp:"C++",objectivec:"Objective-C",sql:"SQL",json:"JSON",bash:"Bash",git:"Git"});var v=[{value:"",label:"- Lang Select -"}];Object.keys(y).forEach((function(e){v.push({value:e,label:y[e]})})),Object(r.registerBlockType)(h.name,{icon:u,title:h.title,category:h.category,keywords:h.keywords,supports:h.supports,attributes:h.attributes,transforms:{from:[{type:"block",blocks:["core/code"],transform:function(e){return Object(r.createBlock)("ayoub-bccb/code-block",{code:e.content})}}],to:[{type:"block",blocks:["core/code"],transform:function(e){return Object(r.createBlock)("core/code",{content:e.code})}}]},edit:function(e){var t,n,a=e.attributes,l=e.setAttributes,r=e.clientId,i=e.className,u=a.code,b=a.fileName,f=a.langName,g=a.dataLineNum,h=a.isShowLang,j=a.isLineShow,O=m()("bccb_wrap","hcb-block",i);Object(o.useEffect)((function(){setTimeout((function(){d(document.getElementById("block-"+r).querySelector(".hcb_textarea"))}),10)}),[r,u]);var w=null===(t=window.hcbVars)||void 0===t?void 0:t.showLang,N=null===(n=window.hcbVars)||void 0===n?void 0:n.showLinenum,S="0";("1"===h||""===h&&"on"===w)&&(S="1");var _=null;return("on"===j||"undefined"===j&&"on"===N)&&(_="1"),Object(o.createElement)(o.Fragment,null,Object(o.createElement)(p,{attributes:a,setAttributes:l}),Object(o.createElement)("div",{className:O,"data-file":b||null,"data-lang":f||null,"data-show-lang":S,"data-show-linenum":_},Object(o.createElement)("div",{className:"hcb_codewrap"},Object(o.createElement)("div",{className:"hcb_linenum"}),Object(o.createElement)("textarea",{className:"hcb_textarea",placeholder:"Your Code...",value:u,onChange:function(e){l({code:e.target.value}),d(e.target)}})),Object(o.createElement)("div",{className:"hcb_controls"},Object(o.createElement)(s.SelectControl,{value:a.langType,options:v,onChange:function(e){l(""===e?{langType:"",langName:""}:{langType:e,langName:y[e]})}}),Object(o.createElement)("input",{type:"text",className:"filename_input",value:b,placeholder:Object(c.__)("file name","ayoub-bccb"),onChange:function(e){l({fileName:e.target.value})}}),Object(o.createElement)("input",{type:"text",className:"num_input",value:g,placeholder:Object(c.__)('"data-line" value',"ayoub-bccb"),onChange:function(e){l({dataLineNum:e.target.value})}}))))},save:function(e){var t=e.attributes,n=t.code,a=t.fileName,l=t.langName,c=t.dataLineNum,r=t.isLineShow,s=t.isShowLang,u=t.langType||"plain",p=m()("prism","".concat(r,"-numbers"),"lang-".concat(u));return Object(o.createElement)("div",{className:"bccb_wrap"},Object(o.createElement)("pre",{className:p,"data-file":a||null,"data-lang":l||null,"data-line":c||null,"data-show-lang":s||null},Object(o.createElement)(i.RichText.Content,{tagName:"code",value:b(n)})))},deprecated:g})}]);
