(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports={wrapper:"ListItem_wrapper__LynXG",appear:"ListItem_appear__dVHAP",image:"ListItem_image__30qiu",imageNone:"ListItem_imageNone__uch7e",description:"ListItem_description__31iyX"}},17:function(e,t,a){e.exports={wrapper:"form_wrapper__1ljiw",form:"form_form__1x2mH"}},18:function(e,t,a){e.exports={button:"Button_button__38Dmx",secondary:"Button_secondary__IkNb-"}},19:function(e,t,a){e.exports={wrapper:"List_wrapper__2J4Js",noItems:"List_noItems__3N9WS"}},21:function(e,t,a){e.exports={wrapper:"Header_wrapper__2J5aC",logo:"Header_logo__1R5cO"}},22:function(e,t,a){e.exports={wrapper:"Modal_wrapper__2dNye",closeButton:"Modal_closeButton__3SZ-Y"}},23:function(e,t,a){e.exports={radio:"FormRadio_radio__FOCpf",radioButton:"FormRadio_radioButton__3PzmP"}},27:function(e,t,a){e.exports={title:"Title_title__qMT90"}},30:function(e,t,a){e.exports=a.p+"static/media/logo.a87d0f35.svg"},33:function(e,t,a){e.exports=a(56)},38:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),i=a(7),o=a(31),m=a(5),u=a(12),s=(a(38),r.a.createContext()),p=a(10),d=a(1),_=a(13),f=a.n(_),E=a(18),v=a.n(E),g=function(e){var t=e.children,a=e.href,n=e.secondary,l=e.openModalFn,c=n?v.a.secondary:v.a.button;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("a",{href:a,target:"_blank",className:c,rel:"noopener noreferrer"},t):r.a.createElement("button",{onClick:function(){n&&l()},className:c},t))},b=a(27),N=a.n(b),I=function(e){var t=e.children;return r.a.createElement("h2",{className:N.a.title},t)},h=function(e){var t=e.title,a=e.image,n=e.description,l=e.link,c=e.type,i=a?"img":"div";return r.a.createElement("li",{className:f.a.wrapper},"twitter"===c&&r.a.createElement(i,{src:a,alt:t,className:a?f.a.image:f.a.imageNone}),r.a.createElement("div",null,r.a.createElement(I,null,t),r.a.createElement("p",{className:f.a.description},n),l&&r.a.createElement(g,{href:l},"visit ",c," page")))};h.defaultProps={image:null,link:null};var w=h,x=a(19),k=a.n(x),y=function(e){var t=e.items;return r.a.createElement(r.a.Fragment,null,t.length?r.a.createElement("ul",{className:k.a.wrapper},t.map(function(e){return r.a.createElement(w,Object.assign({key:e.title},e))})):r.a.createElement("h1",{className:k.a.noItems},"There's nothing here yet, please add some items! ",r.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f")))},O=function(){return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(y,{items:e.twitter})})},L=function(){return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(y,{items:e.note})})},j=function(){return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(y,{items:e.article})})},F=a(6),C=a.n(F),B=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:C.a.wrapper},r.a.createElement("li",{className:C.a.navItem},r.a.createElement(p.b,{exact:!0,activeClassName:C.a.navItemLinkActive,className:C.a.navItemLink,to:"/"},"Twitters")),r.a.createElement("li",{className:C.a.navItem},r.a.createElement(p.b,{activeClassName:C.a.navItemLinkActive,className:C.a.navItemLink,to:"/articles"},"Articles")),r.a.createElement("li",{className:C.a.navItem},r.a.createElement(p.b,{activeClassName:C.a.navItemLinkActive,className:C.a.navItemLink,to:"/notes"},"Notes"))))},A=a(21),M=a.n(A),T=a(30),q=a.n(T),H=function(e){var t=e.openModalFn;return r.a.createElement("header",{className:M.a.wrapper},r.a.createElement("img",{src:q.a,className:M.a.logo,alt:"FavNote. logo"}),r.a.createElement(B,null),r.a.createElement(g,{openModalFn:t,secondary:!0},"new item"))},P=a(22),S=a.n(P),J=a(17),G=a.n(J),R=a(32),D=a(9),Z=a.n(D),X=function(e){var t=e.tag,a=e.name,n=e.label,l=e.maxLength,c=e.required,i=Object(R.a)(e,["tag","name","label","maxLength","required"]);return r.a.createElement("div",{className:Z.a.formItem},r.a.createElement(t,Object.assign({className:"textarea"===t?Z.a.textarea:Z.a.input,type:"text",name:a,id:a,required:c,maxLength:l,placeholder:" "},i)),r.a.createElement("label",{className:"textarea"===t?Z.a.textareaLabel:Z.a.label,htmlFor:a},n),r.a.createElement("div",{className:Z.a.formItemBar}))};X.defaultProps={tag:"input",maxLength:200,required:!0};var Y=X,z=a(23),K=a.n(z),Q=function(e){var t=e.id,a=e.checked,n=e.changeFn,l=e.children;return r.a.createElement("label",{className:K.a.radio},r.a.createElement("input",{id:t,type:"radio",checked:a,onChange:n}),r.a.createElement("div",{className:K.a.radioButton}),l)},U="twitter",V="article",W="note",$={twitter:"favourite Twitter account",article:"Article",note:"Note"},ee=function(){var e=Object(n.useState)({type:U,title:"",link:"",image:"",description:""}),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement("div",{className:G.a.wrapper},r.a.createElement(I,null,"Add new ",$[a.type]),r.a.createElement("form",{autoComplete:"off",className:G.a.form,onSubmit:function(t){return e.addItem(t,a)}},r.a.createElement("div",{className:G.a.formOptions},r.a.createElement(Q,{id:U,checked:a.type===U,changeFn:function(){return l(Object(m.a)({},a,{type:U}))}},"Twitter"),r.a.createElement(Q,{id:V,checked:a.type===V,changeFn:function(){return l(Object(m.a)({},a,{type:V}))}},"Article"),r.a.createElement(Q,{id:W,checked:a.type===W,changeFn:function(){return l(Object(m.a)({},a,{type:W}))}}," Note ")),r.a.createElement(Y,{name:"title",onChange:function(e){return l(Object(m.a)({},a,Object(i.a)({},e.target.name,e.target.value)))},label:a.type===U?"Twitter Name":"Title",value:a.title}),a.type!==W?r.a.createElement(Y,{name:"link",onChange:function(e){return l(Object(m.a)({},a,Object(i.a)({},e.target.name,e.target.value)))},label:a.type===U?"Twitter Link":"Link",value:a.link}):null,a.type===U?r.a.createElement(Y,{name:"image",onChange:function(e){return l(Object(m.a)({},a,Object(i.a)({},e.target.name,e.target.value)))},label:"Image",required:!1,value:a.image}):null,r.a.createElement(Y,{tag:"textarea",name:"description",onChange:function(e){return l(Object(m.a)({},a,Object(i.a)({},e.target.name,e.target.value)))},label:"Description",value:a.description}),r.a.createElement(g,null,"add new item")))})},te=function(e){var t=e.closeModalFn;return r.a.createElement("div",{className:S.a.wrapper},r.a.createElement("button",{className:S.a.closeButton,onClick:t}),r.a.createElement(ee,null))},ae=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({twitter:[],article:[],note:[]}),_=Object(u.a)(c,2),f=_[0],E=_[1],v=function(){l(a=!1)},g=Object(m.a)({},f,{addItem:function(e,t){e.preventDefault(),E(Object(m.a)({},f,Object(i.a)({},t.type,[].concat(Object(o.a)(f[t.type]),[t])))),v()}});return r.a.createElement(p.a,null,r.a.createElement(s.Provider,{value:g},r.a.createElement(H,{openModalFn:function(){l(a=!0)}}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:O}),r.a.createElement(d.a,{path:"/articles",component:j}),r.a.createElement(d.a,{path:"/notes",component:L})),a&&r.a.createElement(te,{closeModalFn:v})))};c.a.render(r.a.createElement(ae,null),document.querySelector("#root"))},6:function(e,t,a){e.exports={wrapper:"HeaderNavigation_wrapper__2NGZT",navItem:"HeaderNavigation_navItem__iOFF4",navItemLink:"HeaderNavigation_navItemLink__PUbrp",navItemLinkActive:"HeaderNavigation_navItemLinkActive__10nGM"}},9:function(e,t,a){e.exports={formItem:"Input_formItem__3kYBI",formItemBar:"Input_formItemBar__1RNQx",label:"Input_label__35INK",textareaLabel:"Input_textareaLabel__13uax",input:"Input_input__3xwGq",textarea:"Input_textarea__1o7Zn"}}},[[33,2,1]]]);
//# sourceMappingURL=main.affff4c0.chunk.js.map