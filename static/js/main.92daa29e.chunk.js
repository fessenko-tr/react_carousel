(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n.n(a),c=n(2),i=n(1),l=(n(9),n(10),n(0)),r=function(e){var t=e.images,n=e.width,a=e.offset,s=e.onOffsetChange,c=e.picCount,i=e.step,r=e.animationDuration,u={transform:"translate(".concat(a,"px)"),transition:"transform ".concat(r,"ms")},p=n*c,o=t.length*n,b=n*i,j=a-p,m=j-b>=-o,g=a+b<=0;return Object(l.jsxs)("div",{className:"Carousel",children:[Object(l.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(p,"px")},children:t.map((function(e,t){return Object(l.jsx)("li",{style:u,children:Object(l.jsx)("img",{src:e,className:"Carousel__img",alt:"pic #".concat(t+1),style:{width:"".concat(n,"px")}})},e)}))}),Object(l.jsxs)("div",{className:"Carousel__btns",children:[Object(l.jsx)("button",{className:"Carousel__btn",type:"button",disabled:0===a,onClick:function(){s(g?a+b:a-a)},"data-cy":"next",children:"\u2190"}),Object(l.jsx)("button",{className:"Carousel__btn",type:"button",disabled:j===-o,onClick:function(){s(m?a-b:a-(a-p+o))},children:"\u2192"})]})]})},u=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],p=function(){var e=Object(i.useState)(130),t=Object(c.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)(0),p=Object(c.a)(s,2),o=p[0],b=p[1],j=Object(i.useState)(3),m=Object(c.a)(j,2),g=m[0],d=m[1],h=Object(i.useState)(3),O=Object(c.a)(h,2),_=O[0],x=O[1],f=Object(i.useState)(1e3),C=Object(c.a)(f,2),N=C[0],v=C[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("h1",{"data-cy":"title",className:"App__title",children:["Carousel with ",u.length," images"]}),Object(l.jsx)(r,{images:u,width:n,offset:o,onOffsetChange:b,picCount:g,step:_,animationDuration:N}),Object(l.jsxs)("fieldset",{className:"App__fieldset",children:[Object(l.jsx)("legend",{children:"Carousel settings"}),Object(l.jsxs)("label",{className:"App__label",children:["Picture width:",Object(l.jsx)("input",{className:"App__input",type:"number",min:"10",step:"10",value:n,onChange:function(e){var t=+e.target.value;b(o/n*t),a(t)}})]}),Object(l.jsxs)("label",{className:"App__label",children:["Frame size:",Object(l.jsx)("input",{className:"App__input",type:"number",min:"1",step:"1",max:u.length,value:g,onChange:function(e){var t=+e.target.value,a=u.length*n,s=t*n;d(t),o-s<-a&&b(o+n)}})]}),Object(l.jsxs)("label",{className:"App__label",children:["Step:",Object(l.jsx)("input",{className:"App__input",type:"number",min:"1",step:"1",max:u.length,value:_,onChange:function(e){return x(+e.target.value)}})]}),Object(l.jsxs)("label",{className:"App__label",children:["Animation duration:",Object(l.jsx)("input",{className:"App__input",type:"number",min:"0",step:"100",value:N,onChange:function(e){return v(+e.target.value)}})]})]})]})};s.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.92daa29e.chunk.js.map