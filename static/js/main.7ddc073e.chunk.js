(this["webpackJsonpsee-my-employees"]=this["webpackJsonpsee-my-employees"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(0),c=a.n(r),i=a(10),s=a.n(i),o=(a(76),a(77),a(105)),j=a(144),l=a(145),d=a(137),u=a(141),b=a(142),m=a(44),h=a.n(m),O=a(46),x=a(57),f=a(21),g=a(45),p=a.n(g),v=a(58),y=a.n(v),S=function(){return y.a.get("https://randomuser.me/api/?results=100")},L=c.a.createContext(),C=function(e){var t=e.children,a=Object(r.useState)([]),c=Object(f.a)(a,2),i=c[0],s=c[1],o=Object(r.useState)([]),j=Object(f.a)(o,2),l=j[0],d=j[1],u=Object(r.useState)(!0),b=Object(f.a)(u,2),m=b[0],g=b[1],v=Object(r.useState)(""),y=Object(f.a)(v,2),C=y[0],w=y[1],N=Object(r.useState)([]),k=Object(f.a)(N,2),I=k[0],R=k[1];function E(){return(E=Object(x.a)(h.a.mark((function e(){var t,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,a=t.data.results,n=a.map((function(e){return{id:e.login.uuid,firstname:e.name.first,lastname:e.name.last,email:e.email,age:e.dob.age,city:e.location.city,country:e.location.country,image:e.picture.thumbnail}})),s(n),R(n),g(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){!function(){E.apply(this,arguments)}(),d([{name:"Image",isSorted:!1},{name:"First Name",isSorted:!1},{name:"Last Name",isSorted:!1},{name:"Age",isSorted:!1},{name:"City",isSorted:!1},{name:"Country",isSorted:!1},{name:"Email",isSorted:!1}])}),[]);return Object(n.jsx)(L.Provider,{value:{people:i,categories:l,isLoading:m,sortColumn:function(e,t){R(t?p.a.orderBy(I,e.split(" ").join("").toLowerCase(),["desc"]):p.a.orderBy(I,e.split(" ").join("").toLowerCase(),["asc"])),d(l.map((function(t){return t.name===e?Object(O.a)(Object(O.a)({},t),{},{isSorted:!t.isSorted}):t})))},search:C,setSearch:w,searchResults:I,setSearchResults:R},children:t})},w=function(){return Object(r.useContext)(L)};a(98);function N(){var e=w(),t=e.isLoading,a=e.categories,r=e.sortColumn;return Object(n.jsx)(d.a,{children:Object(n.jsx)(u.a,{children:t||a.map((function(e){var t=e.name,a=e.isSorted;return"Image"===t?Object(n.jsx)(b.a,{children:t},t):Object(n.jsx)(b.a,{className:"clickable",onClick:function(){return r(t,a)},children:t},t)}))})})}var k=a(143);a(102);function I(){var e=w(),t=e.searchResults,a=e.isLoading;return Object(n.jsx)(k.a,{children:a?Object(n.jsxs)(u.a,{children:[Object(n.jsx)(b.a,{children:"Loading..."}),Object(n.jsx)(b.a,{children:"Loading..."}),Object(n.jsx)(b.a,{children:"Loading..."}),Object(n.jsx)(b.a,{children:"Loading..."}),Object(n.jsx)(b.a,{children:"Loading..."}),Object(n.jsx)(b.a,{children:"Loading..."}),Object(n.jsx)(b.a,{children:"Loading..."})]}):t.map((function(e){return Object(n.jsxs)(u.a,{className:"styledRow",children:[Object(n.jsx)(b.a,{children:Object(n.jsx)("img",{src:e.image,alt:e.firstname})}),Object(n.jsx)(b.a,{children:e.firstname}),Object(n.jsx)(b.a,{children:e.lastname}),Object(n.jsx)(b.a,{children:e.age}),Object(n.jsx)(b.a,{children:e.city}),Object(n.jsx)(b.a,{children:e.country}),Object(n.jsx)(b.a,{children:e.email})]},e.id)}))})}a(103);function R(){return Object(n.jsx)(o.a,{className:"root",children:Object(n.jsx)(j.a,{className:"container",children:Object(n.jsxs)(l.a,{stickyHeader:!0,children:[Object(n.jsx)(N,{}),Object(n.jsx)(I,{})]})})})}var E=a(147),A=a(148),B=a(106),J=a(149),W=a(146),F=Object(W.a)({root:{backgroundColor:"#fafafa",padding:0,margin:0,textAlign:"center"},appbar:{alignItems:"flex-start",background:"linear-gradient(to right, #0040ff, #809fff)"}});var H=function(){var e=F();return Object(n.jsx)(o.a,{elevation:0,className:e.root,children:Object(n.jsx)(E.a,{position:"relative",className:e.appbar,children:Object(n.jsx)(A.a,{children:Object(n.jsx)(B.a,{color:"inherit",variant:"h6",children:Object(n.jsx)(J.a,{href:"/employee-directory",color:"inherit",children:"Employee Search"})})})})})},M=a(150),P=a(156),T=a(153),q=a(158),z=a(154),D=a(155),G=Object(W.a)({root:{margin:"1rem 8rem",padding:16},grid:{paddingRight:16},dropdown:{minWidth:120,marginTop:"1rem"}});var K=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],i=w(),s=i.people,j=i.setSearchResults,l=i.categories,d=i.isLoading,u=i.search,b=i.setSearch,m=G();return Object(n.jsx)(o.a,{className:m.root,children:Object(n.jsx)(M.a,{container:!0,children:Object(n.jsxs)(M.a,{item:!0,xs:12,md:12,className:m.grid,children:[Object(n.jsx)(P.a,{value:u,onChange:function(e){var t,n=e.target.value;b(n),t=""===a?s.filter((function(e){return e.firstname.toLowerCase().includes(n.toLowerCase())})):s.filter((function(e){return e[a.split(" ").join("").toLowerCase()].toLowerCase().includes(n.toLowerCase())})),j(t)},placeholder:"Search...",fullWidth:!0}),Object(n.jsxs)(T.a,{className:m.dropdown,children:[Object(n.jsx)(q.a,{id:"dropdown",children:"Category"}),Object(n.jsx)(z.a,{labelId:"dropdown",id:"demo-simple-select",value:a,onChange:function(e){return c(e.target.value)},children:d||l.map((function(e){var t=e.name;if("Image"!==t&&"Age"!==t)return Object(n.jsx)(D.a,{value:t,children:t},t)}))})]})]})})})};function Q(){return Object(n.jsxs)(C,{children:[Object(n.jsx)(H,{}),Object(n.jsx)(K,{}),Object(n.jsx)(R,{})]})}var U=function(){return Object(n.jsx)(Q,{})};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root"))},76:function(e,t,a){},77:function(e,t,a){},98:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.7ddc073e.chunk.js.map