(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{11:function(e,t,c){},30:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(20),r=c.n(s),l=(c(30),c(11),c(0)),o=function(){return Object(l.jsxs)("div",{className:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top",children:[Object(l.jsx)("nav",{children:Object(l.jsx)("div",{class:"container-fluid",children:Object(l.jsx)("a",{class:"navbar-brand",href:"/",children:"Web Programming"})})}),Object(l.jsx)("nav",{children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{className:"navbar-nav",children:[Object(l.jsx)("a",{className:"nav-link active",href:"/",children:"Home"}),Object(l.jsx)("a",{className:"nav-link",href:"/employees",children:"Employees"}),Object(l.jsx)("a",{className:"nav-link",href:"/add",children:"Add Employees"}),Object(l.jsx)("a",{className:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})})})]})},i=c(8),j=c(2),d=c(3),b=c(21),h=c.n(b).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),m=function(){return h.get("/employee/employees")},u=function(e){return h.post("/employee/employees",e)},O=function(e){return h.get("/employee/employees/".concat(e))},p=function(e){return h.post("/employee/employees",e)},x=function(e){return h.delete("/employee/employees/".concat(e))},f=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(d.a)(s,2),o=r[0],i=r[1],b=Object(n.useState)(""),h=Object(d.a)(b,2),m=h[0],x=h[1],f=Object(j.f)(),v=Object(j.g)().employeeId;Object(n.useEffect)((function(){v&&O(v).then((function(e){a(e.data.name),i(e.data.department),x(e.data.location)})).catch((function(e){console.log("Ayaya check mo AddEmployee.js")}))}),[]);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:"Add New Employee"}),Object(l.jsx)("br",{}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"name",class:"form-label",children:"Name"}),Object(l.jsx)("input",{type:"text",class:"form-control",id:"name",placeholder:"Input employee name here",onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"department",class:"form-label",children:"Department"}),Object(l.jsx)("input",{type:"text",class:"form-control",id:"department",placeholder:"Input employee department here",onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"location",class:"form-label",children:"Location"}),Object(l.jsx)("input",{type:"text",class:"form-control",id:"location",placeholder:"Input employee location here",onChange:function(e){return x(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault();var t={employeeId:v,name:c,department:o,location:m};v?p(t).then((function(e){console.log("gg updated",e.data),f("/employees")})).catch((function(e){console.log("may error lods")})):u(t).then((function(e){console.log("gg",e.data),f("/employees")})).catch((function(e){console.log("may error lods")}))}(e)},children:"Save"})]})]})},v=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){s()}));var s=function(){m().then((function(e){a(e.data)})).catch((function(e){console.log("yo may mali sa code")}))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:"List of Employees"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("table",{className:"table table-hover table-dark align-middle",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"table-info",children:[Object(l.jsx)("td",{children:" ID "}),Object(l.jsx)("td",{children:" Name "}),Object(l.jsx)("td",{children:" Department "}),Object(l.jsx)("td",{children:" Location "}),Object(l.jsx)("td",{children:" Actions "})]})}),Object(l.jsx)("tbody",{children:c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.employeeId}),Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.department}),Object(l.jsx)("td",{children:e.location}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{class:"d-grid gap-2 d-md-flex ",children:[Object(l.jsx)(i.b,{className:"btn btn-primary",to:"edit/".concat(e.employeeId),children:"Update"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(t){return c=e.employeeId,void x(c).then((function(e){console.log("rekt yung entry"),s()})).catch((function(e){console.error("rekt yung code mo line 39 Employee.js")}));var c},children:"Delete"})]})})]},e.employeeId)}))})]})})]})},y=c.p+"static/media/w_2313.797fe698.png",g=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Hello ",e.name,", a.k.a. ",e.heroName,"!"]}),e.children,Object(l.jsx)("br",{})]})},N=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"This is a props childe"})})},k=c(22),C=c(23),A=c(25),I=c(24),S=function(e){Object(A.a)(c,e);var t=Object(I.a)(c);function c(){var e;return Object(k.a)(this,c),(e=t.call(this)).addCount=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(C.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:this.addCount,children:"Click me!!"}),Object(l.jsxs)("p",{children:["counting = ",this.state.count]})]})}}]),c}(a.a.Component),E=function(){return h.get("/greet/hello")},D=function(){var e=Object(n.useState)(["alaws pang api pri"]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){E().then((function(e){a(e.data)})).catch((function(e){console.log("yo may mali sa code")}))})),c},L=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:y,className:"App-logo",alt:"logo"}),Object(l.jsxs)("p",{children:["Edit ",Object(l.jsx)("code",{children:"src/App.js"})," and save to reload. gusto ko na mag-genshin."]}),Object(l.jsx)("p",{children:D()}),Object(l.jsx)("div",{children:Object(l.jsx)(S,{})}),Object(l.jsx)(g,{name:D(),heroName:"Spiderman",children:Object(l.jsx)(N,{})}),Object(l.jsx)(g,{name:"Stephen",heroName:"Doctor Strange"}),Object(l.jsx)(g,{name:"Wanda",heroName:"Scarlet Witch"}),Object(l.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},w=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"PAGE NOT FOUND!"})})},F=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",element:Object(l.jsx)(L,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/employees",element:Object(l.jsx)(v,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/add",element:Object(l.jsx)(f,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/employees/edit/:employeeId",element:Object(l.jsx)(f,{})}),Object(l.jsx)(j.a,{exact:!0,path:"*",element:Object(l.jsx)(w,{})})]})})})};var T=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(F,{})]})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};c(50);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root")),P()}},[[51,1,2]]]);
//# sourceMappingURL=main.2cad2e44.chunk.js.map