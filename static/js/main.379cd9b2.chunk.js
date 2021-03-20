(this["webpackJsonpreact-hw-06-phonebook"]=this["webpackJsonpreact-hw-06-phonebook"]||[]).push([[0],{27:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(8),i=n.n(o),s=(n(27),n(3)),u=n(11),l=n(4),b=n(7),j="@user/Add",d="@user/ChangeFilter",h="@user/Delete",p=n(2),f=Object(l.c)([],(c={},Object(b.a)(c,j,(function(t,e){var n=e.payload;return[].concat(Object(u.a)(t),[n])})),Object(b.a)(c,h,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),O=Object(l.c)("",Object(b.a)({},d,(function(t,e){return e.payload}))),m=Object(p.c)({items:f,filter:O}),v=n(20),x=n.n(v),g=n(6),y=n(21),k=n.n(y),C=[].concat(Object(u.a)(Object(l.d)({serializableCheck:{ignoredActions:[g.a,g.f,g.b,g.c,g.d,g.e]}})),[x.a]),S={key:"contacts",storage:k.a},_=Object(l.a)({reducer:{contacts:Object(g.g)(S,m)},middleware:C,devTools:!1}),w={store:_,persistor:Object(g.h)(_)},D=n(22),N=n(9),B=n(10),A=n(13),F=n(12),H=n(40),P=Object(l.b)(j,(function(t){return{payload:{name:t.name,phone:t.phone,id:Object(H.a)()}}})),E=Object(l.b)(h),J=Object(l.b)(d),I=n(5),G=n.n(I),L=n(1),M=function(t){Object(A.a)(n,t);var e=Object(F.a)(n);function n(){var t;Object(N.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",phone:""},t.inputHandler=function(e){var n=e.target,c=n.value,a=n.name;t.setState(Object(b.a)({},a,c))},t.submitHandler=function(e){e.preventDefault();var n=t.state.name;if(t.props.contacts.find((function(t){return t.name===n})))return alert("".concat(n," is alredy contact!")),void t.reset();t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",phone:""})},t}return Object(B.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(L.jsxs)("form",{className:G.a.form,onSubmit:this.submitHandler,autoComplete:"off",children:[Object(L.jsx)("input",{onChange:this.inputHandler,placeholder:"Enter name",type:"text",name:"name",value:e}),Object(L.jsx)("input",{onChange:this.inputHandler,placeholder:"Enter phone",type:"text",name:"phone",value:n}),Object(L.jsx)("button",{className:G.a.btn,type:"submit",children:"Add contacts"})]})}}]),n}(a.Component),z=Object(s.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e){return t(P(e))}}}))(M),T=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},U=Object(s.b)((function(t){var e=t.contacts,n=e.items,c=e.filter;return{contacts:T(n,c)}}),(function(t){return{deleteContact:function(e){return t(E(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact;return Object(L.jsx)("div",{children:Object(L.jsx)("ul",{children:e.map((function(t){return Object(L.jsxs)("li",{children:[Object(L.jsxs)("span",{children:[t.name," : ",t.phone]}),Object(L.jsx)("button",{className:G.a.btnDelete,onClick:function(){return n(t.id)},type:"button",children:"delete"})]},t.id)}))})})})),q=Object(s.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(J(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(L.jsxs)("div",{className:G.a.form,children:[Object(L.jsx)("p",{children:"Find contact by name"}),Object(L.jsx)("input",{type:"text",placeholder:"Find",value:e,onChange:n})]})})),K=function(t){Object(A.a)(n,t);var e=Object(F.a)(n);function n(){var t;Object(N.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={contacts:[]},t}return Object(B.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contact",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("contact"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"render",value:function(){var t=this.props;return console.log(t),Object(L.jsxs)("div",{className:G.a.container,children:[Object(L.jsx)("h1",{children:"PhoneBook"}),Object(L.jsx)(z,{}),t.contact.length>2?Object(L.jsx)(q,{}):"",Object(L.jsx)(U,{})]})}}]),n}(a.Component),Q=Object(s.b)((function(t){return{contact:t.contacts.items}}))(K),R=function(){return Object(L.jsx)("div",{children:Object(L.jsx)(Q,{})})};i.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(s.a,{store:w.store,children:Object(L.jsx)(D.a,{loading:"loading...",persistor:w.persistor,children:Object(L.jsx)(R,{})})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={container:"PhoneBook_container__3SDuF",form:"PhoneBook_form__2FrpE",btn:"PhoneBook_btn__lGfGp",btnDelete:"PhoneBook_btnDelete__1xO3e"}}},[[38,1,2]]]);
//# sourceMappingURL=main.379cd9b2.chunk.js.map