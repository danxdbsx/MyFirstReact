(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{11:function(e,t,c){},30:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),l=c(20),s=c.n(l),r=(c(30),c(11),c(0)),o=function(){return Object(r.jsxs)("div",{className:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top",children:[Object(r.jsx)("nav",{children:Object(r.jsx)("div",{class:"container-fluid",children:Object(r.jsx)("a",{class:"navbar-brand",href:"/",children:"Web Programming"})})}),Object(r.jsx)("nav",{children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(r.jsxs)("div",{className:"navbar-nav",children:[Object(r.jsx)("a",{className:"nav-link active",href:"/",children:"Home"}),Object(r.jsx)("a",{className:"nav-link",href:"/employees",children:"Employees"}),Object(r.jsx)("a",{className:"nav-link",href:"/add",children:"Add Employees"}),Object(r.jsx)("a",{className:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})})})]})},i=c(8),d=c(2),j=c(3),b=c(21),h=c.n(b).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),u=function(){return h.get("/employee/employees")},m=function(e){return h.post("/employee/employees",e)},p=function(e){return h.get("/employee/employees/".concat(e))},O=function(e){return h.post("/employee/employees",e)},x=function(e){return h.delete("/employee/employees/".concat(e))},f=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],l=Object(n.useState)([]),s=Object(j.a)(l,2),o=s[0],i=s[1],b=Object(n.useState)([]),h=Object(j.a)(b,2),u=h[0],x=h[1],f=Object(d.f)(),v=Object(d.g)().employeeId;Object(n.useEffect)((function(){v&&p(v).then((function(e){a(e.data.name),i(e.data.department),x(e.data.location),alert("Form will be populated badi edit mo na")})).catch((function(e){console.log("Ayaya check mo line 35 AddEmployee.js")}))}),[]);return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Add New Employee"}),Object(r.jsx)("br",{}),Object(r.jsxs)("form",{class:"row g-3",noValidate:!0,children:[Object(r.jsxs)("div",{class:"col-md-4",children:[Object(r.jsx)("label",{for:"name",class:"form-label",children:"Name"}),Object(r.jsx)("input",{type:"text",class:"form-control",id:"name",value:c,placeholder:"Input employee location here",onChange:function(e){return a(e.target.value)},required:!0})]}),Object(r.jsxs)("div",{class:"col-md-4",children:[Object(r.jsx)("label",{for:"department",class:"form-label",children:"Department"}),Object(r.jsx)("input",{type:"text",class:"form-control",id:"department",value:o,placeholder:"Input employee location here",onChange:function(e){return i(e.target.value)},required:!0})]}),Object(r.jsxs)("div",{class:"col-md-4",children:[Object(r.jsx)("label",{for:"location",class:"form-label",children:"Location"}),Object(r.jsx)("input",{type:"text",class:"form-control",id:"location",value:u,placeholder:"Input employee location here",onChange:function(e){return x(e.target.value)},required:!0})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault();var t={employeeId:v,name:c,department:o,location:u};v?O(t).then((function(e){console.log("gg updated",e.data),f("/employees"),alert("updated na badidap")})).catch((function(e){console.log("may error lods")})):m(t).then((function(e){console.log("gg",e.data),f("/employees"),alert("added new badi!")})).catch((function(e){console.log("may error lods")}))}(e)},children:"Save"})]})]})},v=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){l()}));var l=function(){u().then((function(e){a(e.data)})).catch((function(e){console.log("yo may mali sa code")}))};return Object(r.jsxs)("div",{children:[Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"List of Employees"}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("table",{className:"table table-hover table-dark align-middle",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"table-info",children:[Object(r.jsx)("td",{children:" Name "}),Object(r.jsx)("td",{children:" Department "}),Object(r.jsx)("td",{children:" Location "}),Object(r.jsx)("td",{children:" Actions "})]})}),Object(r.jsx)("tbody",{children:c.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.department}),Object(r.jsx)("td",{children:e.location}),Object(r.jsx)("td",{children:Object(r.jsxs)("div",{class:"d-grid gap-2 d-md-flex ",children:[Object(r.jsx)(i.b,{className:"btn btn-primary",to:"edit/".concat(e.employeeId),children:"Update"}),Object(r.jsx)("button",{className:"btn btn-danger",onClick:function(t){return c=e.employeeId,void(window.confirm("This employee will be deleted. G?")?x(c).then((function(e){console.log("rekt yung entry"),l()})).catch((function(e){console.error("rekt yung code mo line 39 Employee.js")})):alert("di na deleted"));var c},children:"Delete"})]})})]},e.employeeId)}))})]})})]})},y=c.p+"static/media/w_2313.797fe698.png",g=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h1",{children:["Hello ",e.name,", a.k.a. ",e.heroName,"!"]}),e.children,Object(r.jsx)("br",{})]})},N=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"This is a props childe"})})},k=c(22),C=c(23),S=c(25),w=c(24),E=function(e){Object(S.a)(c,e);var t=Object(w.a)(c);function c(){var e;return Object(k.a)(this,c),(e=t.call(this)).addCount=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(C.a)(c,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:this.addCount,children:"Click me!!"}),Object(r.jsxs)("p",{children:["counting = ",this.state.count]})]})}}]),c}(a.a.Component),A=function(){return h.get("/greet/hello")},I=function(){var e=Object(n.useState)(["alaws pang api pri"]),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){A().then((function(e){a(e.data)})).catch((function(e){console.log("yo may mali sa code")}))})),c},D=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("img",{src:y,className:"App-logo",alt:"logo"}),Object(r.jsx)("p",{children:"Exempted daw sa exam pag napublish lezgo!!!"}),Object(r.jsx)("p",{children:I()}),Object(r.jsx)("div",{children:Object(r.jsx)(E,{})}),Object(r.jsx)(g,{name:I(),heroName:"Spiderman",children:Object(r.jsx)(N,{})}),Object(r.jsx)(g,{name:"Stephen",heroName:"Doctor Strange"}),Object(r.jsx)(g,{name:"Wanda",heroName:"Scarlet Witch"})]})})},F=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"PAGE NOT FOUND!"})})},L=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(i.a,{children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/",element:Object(r.jsx)(D,{})}),Object(r.jsx)(d.a,{exact:!0,path:"/employees",element:Object(r.jsx)(v,{})}),Object(r.jsx)(d.a,{exact:!0,path:"/add",element:Object(r.jsx)(f,{})}),Object(r.jsx)(d.a,{exact:!0,path:"/employees/edit/:employeeId",element:Object(r.jsx)(f,{})}),Object(r.jsx)(d.a,{exact:!0,path:"*",element:Object(r.jsx)(F,{})})]})})})};var T=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsx)(L,{})]})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,l=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),l(e),s(e)}))};c(50);s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root")),P()}},[[51,1,2]]]);
//# sourceMappingURL=main.be7bf141.chunk.js.map