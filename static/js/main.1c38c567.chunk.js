(this["webpackJsonpreact-transliterate-example"]=this["webpackJsonpreact-transliterate-example"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(6);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),i=a(1),u=[{label:"Amharic",value:"am"},{label:"Arabic",value:"ar"},{label:"Bangla",value:"bn"},{label:"Belarusian",value:"be"},{label:"Bulgarian",value:"bg"},{label:"Chinese (Hong Kong)",value:"yue-hant"},{label:"Chinese (Simplified)",value:"zh"},{label:"Chinese (Traditional)",value:"zh-hant"},{label:"French",value:"fr"},{label:"German",value:"de"},{label:"Greek",value:"el"},{label:"Gujarati",value:"gu"},{label:"Hebrew",value:"he"},{label:"Hindi",value:"hi"},{label:"Italian",value:"it"},{label:"Japanese",value:"ja"},{label:"Kannada",value:"kn"},{label:"Malayalam",value:"ml"},{label:"Marathi",value:"mr"},{label:"Nepali",value:"ne"},{label:"Odia",value:"or"},{label:"Persian",value:"fa"},{label:"Portuguese (Brazil)",value:"pt"},{label:"Punjabi",value:"pa"},{label:"Russian",value:"ru"},{label:"Sanskrit",value:"sa"},{label:"Serbian",value:"sr"},{label:"Sinhala",value:"si"},{label:"Spanish",value:"es"},{label:"Tamil",value:"ta"},{label:"Telugu",value:"te"},{label:"Tigrinya",value:"ti"},{label:"Ukrainian",value:"uk"},{label:"Urdu",value:"ur"},{label:"Vietnamese",value:"vi"}],s=a(4),c=a.n(s);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var f="_1tkHS",b="_1KtfG",m=function(e){var t=e.Component,a=void 0===t?"input":t,r=e.onBlur,o=void 0===r?function(){}:r,i=e.disabled,u=void 0!==i&&i,s=e.lang,m=void 0===s?"hi":s,d=e.offsetX,h=void 0===d?0:d,p=e.offsetY,g=void 0===p?0:p,y=e.onChange,S=e.value,E=e.onKeyDown,k=void 0===E?function(){}:E,O=e.containerClassName,j=void 0===O?"":O,w=e.containerStyles,C=void 0===w?{}:w,x=e.activeItemStyles,T=void 0===x?{}:x,B=e.maxOptions,P=void 0===B?5:B,R=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["Component","onBlur","disabled","lang","offsetX","offsetY","onChange","value","onKeyDown","containerClassName","containerStyles","activeItemStyles","maxOptions"]),I=Object(n.useState)([]),N=I[0],D=I[1],K=Object(n.useState)(0),z=K[0],G=K[1],H=Object(n.useState)(0),L=H[0],M=H[1],J=Object(n.useState)(0),U=J[0],A=J[1],X=Object(n.useState)(-1),Y=X[0],_=X[1],q=Object(n.useState)(-1),F=q[0],V=q[1],Q=Object(n.useRef)(null),W=function(){},Z=function(e){var t=S,a=t.substr(0,Y)+N[e]+" "+t.substr(F+1,t.length);!function(e,t){if(e)if(e.createTextRange){var a=e.createTextRange();a.move("character",t),a.select()}else e.selectionStart?(e.focus(),e.setSelectionRange(t,t)):e.focus()}(Q.current,Y),y({target:{value:a}}),$()},$=function(){A(0),D([])};return Object(n.useEffect)((function(){return window.addEventListener("resize",W),function(){window.removeEventListener("resize",W)}}),[]),l.a.createElement("div",{style:v({},C,{position:"relative"}),className:j},l.a.createElement(a,v({disabled:u,onBlur:o,onChange:function(e){var t=e.target.value;y(e);var a=function(e){var t=0,a=0;if(!e)return{start:t,end:a};if("number"===typeof e.selectionStart&&"number"===typeof e.selectionEnd)return{start:e.selectionStart,end:e.selectionEnd};if(!document)return{start:t,end:a};var n=document.selection.createRange();if(!n&&n.parentElement()!==e)return{start:t,end:a};var l=e.value.length,r=e.value.replace(/\r\n/g,"\n"),o=e.createTextRange();o.moveToBookmark(n.getBookmark());var i=e.createTextRange();return i.collapse(!1),o.compareEndPoints("StartToEnd",i)>-1?t=a=l:(t=-o.moveStart("character",-l),t+=r.slice(0,t).split("\n").length-1,o.compareEndPoints("EndToEnd",i)>-1?a=l:(a=-o.moveEnd("character",-l),a+=r.slice(0,a).split("\n").length-1)),{start:t,end:a}}(e.target).end,n=Q.current,l=c()(n,a),r=t.lastIndexOf(" ",a-1);_(r+1),V(a-1);var o=t.slice(r+1,a);if(o){!function(t){try{var a="https://inputtools.google.com/request?text="+t+"&itc="+m+"-t-i0-und&num=13&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage",n=function(t,a){try{var n=t()}catch(e){return a(e)}return n&&n.then?n.then(void 0,a):n}((function(){return Promise.resolve(fetch(a)).then((function(e){return Promise.resolve(e.json()).then((function(e){if(e&&"SUCCESS"===e[0]){var t=e[1][0][1];t=t.slice(0,P),D(t)}}))}))}),(function(e){console.error("There was an error with transliteration",e)}));Promise.resolve(n&&n.then?n.then((function(){})):void 0)}catch(e){return Promise.reject(e)}}(o);var i=n.getBoundingClientRect(),u=l.top+n.offsetTop,s=Math.min(l.left+n.offsetLeft-10,n.offsetLeft+i.width-100);M(u),G(s)}else $()},onKeyDown:function(e){if(N.length>0)switch(e.keyCode){case 27:e.preventDefault(),$();break;case 38:e.preventDefault(),A((N.length+U-1)%N.length);break;case 40:e.preventDefault(),A((U+1)%N.length);break;case 14:case 13:case 9:e.preventDefault(),Z(U);break;default:k(e)}else k(e)},ref:Q,value:S},R)),N.length>0&&l.a.createElement("ul",{style:{left:z+h,top:L+g,position:"absolute",width:"auto"},className:f},N.map((function(e,t){return l.a.createElement("li",{className:t===U?b:null,style:t===U&&T||{},onMouseEnter:function(){A(t)},onClick:function(){return Z(t)},key:e},e)}))))},d=(a(11),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("hi"),s=Object(i.a)(o,2),c=s[0],v=s[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"React transliterate"),l.a.createElement("select",{className:"language-dropdown",value:c,onChange:function(e){return v(e.target.value)}},u.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.label)}))),l.a.createElement(m,{value:a,onChange:function(e){return r(e.target.value)},lang:c,placeholder:"Start typing here...",containerStyles:{width:"300px"}}))});o.a.render(l.a.createElement(d,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.1c38c567.chunk.js.map