(this["webpackJsonpvictorias-jeans"]=this["webpackJsonpvictorias-jeans"]||[]).push([[0],{187:function(e,t,c){},188:function(e,t,c){},189:function(e,t,c){},191:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(73),o=c.n(r),s=(c(83),c(5)),i=c(2),l=c(10),d=c(14),j=c(0);function b(e){return Object(j.jsx)("button",{type:e.type,className:e.className,disabled:e.disabled,onClick:e.onClick,children:e.children})}function m(e){return Object(j.jsx)("div",{className:"text-danger",children:e.mensaje})}function u(e){return Object(j.jsxs)("div",{className:"form-group",children:[e.label?Object(j.jsx)("label",{htmlFor:e.campo,children:e.label}):null,Object(j.jsx)(l.b,{name:e.campo,className:"form-control",placeholder:e.placeholder}),Object(j.jsx)(l.a,{name:e.campo,children:function(e){return Object(j.jsx)(m,{mensaje:e})}})]})}function h(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(l.d,{initialValues:e.modelo,onSubmit:e.onSubmit,ValidationSchema:d.c({id:d.b().required("Este campo es requerido"),nombre:d.d().required("Este campo es requerido"),apellido:d.d().required("Este campo es requerido"),telefono:d.b().required("Este campo es requerido")}),children:function(e){return Object(j.jsxs)(l.c,{children:[Object(j.jsx)(u,{campo:"nombre",label:"Nombre",placeholder:"Primer nombre"}),Object(j.jsx)(u,{campo:"apellido",label:"Apeliido",placeholder:"Primer apellido"}),Object(j.jsx)(u,{campo:"id",label:"No. de documento",placeholder:"Documento de identidad"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"correo",children:"Correo electr\xf3nico"}),Object(j.jsx)("input",{type:"email",name:"correo",placeholder:"Correo"})]}),Object(j.jsx)(u,{campo:"telefono",label:"Numero de tel\xe9fono",placeholder:"Whatsapp/Telegram"}),Object(j.jsx)(b,{disabled:e.isSubmitting,type:"submit",children:"Guardar"}),Object(j.jsx)(s.b,{className:"btn btn-secondary",to:"/",children:" Cancelar "})]})}})})})}b.defaultProps={type:"button",disabled:!1,className:"btn btn-primary"};c(187);function p(e){return Object(j.jsxs)("div",{className:"card border-none",style:{width:"350px"},children:[Object(j.jsx)("img",{className:"card-img-top ",src:e.urlFoto,alt:"Card",style:{width:"100%",height:"250px"}}),Object(j.jsxs)("div",{className:"card-body border-secondary",children:[Object(j.jsx)("h4",{className:"card-title",children:e.titulo}),Object(j.jsx)("p",{className:"card-text",children:e.descripcion})]}),Object(j.jsx)("div",{className:"card-footer border-secondary",children:e.stockTallas?e.stockTallas.length>0?Object(j.jsx)("h4",{className:"card-title",children:"Tallas disponibles:"})&&e.stockTallas.map((function(e){return Object(j.jsx)("button",{className:"talla",children:e},e)})):Object(j.jsx)("div",{className:"alert alert-danger",children:"Producto no disponible"}):Object(j.jsx)("div",{className:"alert alert-danger",children:"Tallas no encontradas"})})]})}var x=c(17);function O(e){var t={marginTop:"10px"},c={width:"450px"},n=Object(a.useState)(""),r=Object(x.a)(n,2),o=r[0],s=r[1],i=Object(a.useState)(e.imagenURL),d=Object(x.a)(i,2),b=d[0],m=d[1],u=Object(l.e)().values;return Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"",children:e.label}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"file",accept:".jpg, .jpeg, .png",onChange:function(t){if(t.currentTarget.files){var c=t.currentTarget.files[0];(a=c,new Promise((function(e,t){var c=new FileReader;c.readAsDataURL(a),c.onload=function(){return e(c.result)},c.onerror=function(e){return t(e)}}))).then((function(e){return s(e)})).catch((function(e){return console.log(e)})),u[e.campo]=c,m("")}var a}})}),o?Object(j.jsx)("div",{children:Object(j.jsx)("div",{style:t,children:Object(j.jsx)("img",{style:c,src:o,alt:"imagen seleccionada"})})}):null,b?Object(j.jsx)("div",{children:Object(j.jsx)("div",{style:t,children:Object(j.jsx)("img",{style:c,src:b,alt:"imagen seleccionada"})})}):null]})}function g(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(l.d,{initialValues:e.modelo,onSubmit:e.onSubmit,children:function(t){return Object(j.jsxs)(l.c,{children:[Object(j.jsx)(u,{campo:"referencia",label:"Referencia"}),Object(j.jsx)(O,{label:"Foto",campo:"foto",imagenURL:e.modelo.urlFoto}),console.log("Foto:"+e.modelo.urlFoto),Object(j.jsx)(b,{type:"submit",children:"Guardar"}),Object(j.jsx)(s.b,{className:"btn btn-secondary",to:"/",children:"Cancelar"})]})}})})}O.defaultProps={imagenURL:""};var f=[{path:"/usuario/crear",componente:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(h,{modelo:{nombre:"",apellido:"",id:0,telefono:0,correo:""},onSubmit:function(e){return console.log(e)}})})}},{path:"/usuario/editar",componente:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"Editar usuario"}),Object(j.jsx)(h,{modelo:{nombre:"Cristian",apellido:"Quiroga",id:1000627733,telefono:3157425150,correo:"cristiancquiroga380@gmail.com"},onSubmit:function(e){return console.log(e)}})]})}},{path:"/catalogo/editar",componente:function(e){return Object(j.jsx)(j.Fragment,{})}},{path:"/modelo/crear",componente:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"Crear modelo"}),Object(j.jsx)(g,{modelo:{id:0,referencia:"",descripcion:"",stockTallas:[]},onSubmit:function(e){return console.log(e)}})]})}},{path:"/modelo/editar",componente:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(g,{modelo:{id:1,referencia:"Industrial pretina ancha",descripcion:"",stockTallas:[4,6,8,10,12],urlFoto:"https://usamedia.frenchconnection.com/ms/fcus/74naf-womens-fu-midvintage-reem-denim-high-waisted-culottes-3.jpg?404=fcus/74naf.jpg&width=425&height=637"},onSubmit:function(e){return console.log(e)}})})}},{path:"/catalogo",componente:function(e){return Object(j.jsx)("div",{className:"container d-flex justify-content-center align-items-center h-100 mt-5",children:[{id:1,referencia:"ochentero",descripcion:"Pantalon estilo ochentero con bota ancha y pretina alta",stockTallas:[6,8,10,12],urlFoto:"https://http2.mlstatic.com/D_NQ_NP_620203-MCO46251813296_062021-O.jpg"},{id:2,referencia:"mom jean",descripcion:"C\xf3modo para usar todos los dias",stockTallas:[6,10,12,14],urlFoto:"https://images-na.ssl-images-amazon.com/images/I/41b8RCcjyJL._SX500_SY500_CR,0,0,500,500_.jpg"},{id:3,referencia:"clasico",descripcion:"cl\xe1sico jeje",stockTallas:[],urlFoto:"https://http2.mlstatic.com/D_NQ_NP_758534-MCO42807507402_072020-O.jpg"}].map((function(e){return Object(j.jsx)("div",{className:"col md-4",children:Object(j.jsx)(p,{titulo:e.referencia,descripcion:e.descripcion,stockTallas:e.stockTallas,urlFoto:e.urlFoto})},e.id)}))})},exact:!0},{path:"/mensaje/enviar",componente:function(){return Object(j.jsx)("div",{children:"ENVIAR MENSAJE"})}},{path:"/mensaje/mostrar",componente:function(){return Object(j.jsx)("div",{children:"MOSTRAR MENSAJE"})}},{path:"/",componente:function(){return Object(j.jsx)(j.Fragment,{})},exact:!0},{path:"*",componente:function(){return Object(j.jsx)(i.a,{to:{pathname:"/"}})}}],v=(c(188),c.p+"static/media/logo-dark.544ab34a.png");function N(){var e="active";return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark",style:{backgroundColor:"rgb(10, 33, 74)"},children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",children:Object(j.jsx)("img",{src:v,alt:"logo",style:{width:"40%"}})}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(j.jsxs)("div",{className:"navbar-nav",children:[Object(j.jsx)(s.c,{className:"nav-link",activeClassName:e,to:"/catalogo",children:"Cat\xe1logo"}),"   ",Object(j.jsx)(s.c,{className:"nav-link",activeClassName:e,to:"/usuario/crear",children:"Usuarios"})]})})]})})}c(189);var y=c.p+"static/media/logoInsta.a082d3a4.svg",F=c.p+"static/media/logoFacebook.5faf0312.svg";function C(){return Object(j.jsx)("footer",{className:"main-footer ",children:Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("h5",{className:"col",children:"Cont\xe1cto: contacto@victoriasjeans.com   "})}),Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("h5",{children:["  ",Object(j.jsx)(s.c,{className:"btn btn-outline-light",to:"/PreguntasFrecuentes",children:" Preguntas frecuentes "})]})}),Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("a",{href:"",children:Object(j.jsx)("img",{src:y,alt:"Logo instagram",style:{width:"50px"}})})}),Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("a",{href:"",children:Object(j.jsx)("img",{src:F,alt:"Logo instagram",style:{width:"50px"}})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("p",{className:"col-sm",children:["\xa9",(new Date).getFullYear()," Victoria\xb4s jeans | Todos los derechos reservados | ",Object(j.jsx)(s.c,{to:"/TYC",children:" terminos y condiciones"})]})})]})})})}var k=function(){return d.a(d.d,"primeraLetraMayuscula",(function(){return this.test("primera-letra-mayuscula","La primera letra debe ser may\xfascula",(function(e){if(e&&e.length>0){var t=e.substring(0,1);return t===t.toUpperCase()}return!0}))})),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"page-container ",children:Object(j.jsxs)(s.a,{children:[Object(j.jsxs)("div",{className:"content-wrap",children:[Object(j.jsx)(N,{}),Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)(i.d,{children:f.map((function(e){return Object(j.jsx)(i.b,{path:e.path,exact:e.exact,children:Object(j.jsx)(e.componente,{})},e.path)}))})})]}),Object(j.jsx)(C,{})]})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,192)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),a(e),n(e),r(e),o(e)}))};c(190);o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),T()},83:function(e,t,c){}},[[191,1,2]]]);
//# sourceMappingURL=main.93cf60d0.chunk.js.map