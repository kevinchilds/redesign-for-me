(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{158:function(n,e,t){"use strict";t.d(e,"c",(function(){return s})),t.d(e,"e",(function(){return m})),t.d(e,"d",(function(){return x})),t.d(e,"a",(function(){return b})),t.d(e,"b",(function(){return g}));var r=t(45),a=t.n(r),o=t(46);function i(){var n=a()(["\n    display: flex;\n    justify-content: center;\n\n    @media (max-width: 600px) {\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        width: 90%;\n  }\n"]);return i=function(){return n},n}function u(){var n=a()(["\n    margin: 20px;\n    border: none;\n    padding: 5px;\n    background-color: rgb(44, 114, 211);\n    color: white;\n    width: 150px;\n    height: 50px;\n    border-radius: 8px;\n    font-size: 18px;\n    box-shadow: 0px 0px 8px #333;\n    transition: 400ms;\n\n    :hover{\n        background-color: rgb(44, 114, 250);\n        transition: 400ms;\n    }\n\n    :focus{\n        outline: none;\n    }\n\n    @media (max-width: 600px) {\n        width: 100%;\n  }\n    \n"]);return u=function(){return n},n}function c(){var n=a()(["\n    font-family: 'Viga', sans-serif;\n    text-transform: uppercase;\n    text-align: center;\n    color: white;\n    letter-spacing: 10px;\n"]);return c=function(){return n},n}function l(){var n=a()(["\n    font-family: 'Viga', sans-serif;\n    font-size: 72px;\n    text-transform: uppercase;\n    text-align: center;\n    color: white;\n    letter-spacing: 10px;\n    animation: "," 10s linear infinite;   \n\n    @media (max-width: 600px) {\n    font-size: 48px;\n    letter-spacing: 5px;\n  }\n\n\n"]);return l=function(){return n},n}function f(){var n=a()(["\n     0% {color: #39f;}\n     15% {color: #8bc5d1;}\n     30% {color: #f8cb4a;}\n     45% {color: #95b850;}\n     60% {color: #944893;}\n     75% {color: #c71f00;}\n     90% {color: #bdb280;}\n    100% {color: #39f;}\n"]);return f=function(){return n},n}function d(){var n=a()(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items:center;\n    padding: 20px;\n    height: 100vh;\n"]);return d=function(){return n},n}var s=o.a.div(d()),p=Object(o.b)(f()),m=o.a.h2(l(),p),x=o.a.h4(c()),b=o.a.button(u()),g=o.a.div(i())},81:function(n,e,t){"use strict";t.r(e);var r=t(45),a=t.n(r),o=t(10),i=t.n(o),u=t(0),c=t.n(u),l=(t(158),t(159)),f=t(46);function d(){var n=a()(["\n    width: 100%;\n    border: none;\n    background-color: #f4f4f4;\n    height: 150px;\n    padding: 5px;\n    border-radius: 4px;\n\n    :focus{\n        outline: none;\n    }\n"]);return d=function(){return n},n}function s(){var n=a()(["\n    width: 100%;\n    border: none;\n    background-color: #f4f4f4;\n    padding: 5px;\n    border-radius: 4px;\n\n    :focus{\n        outline: none;\n    }\n"]);return s=function(){return n},n}function p(){var n=a()(["\n    width: 100%;\n    border: none;\n    background-color: #108db8;\n    color: white;\n    padding: 5px;\n    border-radius: 4px;\n\n    :focus{\n        outline: none;\n    }\n"]);return p=function(){return n},n}function m(){var n=a()(["\n    max-width: 1000px;\n    margin: auto;\n    font-size: 18px;\n    padding: 20px;\n"]);return m=function(){return n},n}function x(){var n=a()(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n"]);return x=function(){return n},n}var b=f.a.div(x()),g=f.a.div(m()),h=f.a.button(p()),v=f.a.input(s()),w=f.a.textarea(d());e.default=function(){var n=Object(u.useState)(""),e=i()(n,2),t=e[0],r=e[1],a=Object(u.useState)(""),o=i()(a,2),f=o[0],d=o[1],s=Object(u.useState)(""),p=i()(s,2),m=p[0],x=p[1],y=Object(u.useState)(""),E=i()(y,2),j=E[0],k=E[1];return c.a.createElement(g,null,c.a.createElement(b,null,c.a.createElement("h2",null,c.a.createElement(l.c,{size:40})," Contact ")),c.a.createElement("form",{name:"contact",method:"post","data-netlify":"true","data-netlify-honeypot":"bot-field"},c.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),c.a.createElement("label",null,"Name"),c.a.createElement(v,{type:"text",value:t,onChange:function(n){r(n.target.value)},name:"name"}),c.a.createElement("label",null,"Email Address"),c.a.createElement(v,{type:"email",value:f,onChange:function(n){d(n.target.value)},name:"email"}),c.a.createElement("label",null,"Phone Number"),c.a.createElement(v,{type:"phone",value:m,onChange:function(n){x(n.target.value)},name:"number"}),c.a.createElement("label",null,"Message"),c.a.createElement(w,{value:j,onChange:function(n){return k(n.target.value)},name:"message",required:!0}),c.a.createElement(h,null,"Submit")))}}}]);