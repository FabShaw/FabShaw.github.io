(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0a314a"],{"013f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex flex-center"},[s("q-card",{staticStyle:{width:"400px",padding:"50px"}},[s("q-card-section",{staticClass:"column q-gutter-sm items-center"},[s("div",{staticClass:"col text-h6"},[t._v("Anmeldung")]),s("div",{staticClass:"col"},[s("img",{attrs:{src:"statics/Condates_Logo.png"}})])]),s("q-card-section",[s("q-input",{attrs:{id:"user",label:"Benutzername",required:"",autofocus:""},model:{value:t.data.body.user,callback:function(e){t.$set(t.data.body,"user","string"===typeof e?e.trim():e)},expression:"data.body.user"}}),s("q-input",{attrs:{type:t.isPwd?"password":"text",label:"Passwort",required:""},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.data.body.password,callback:function(e){t.$set(t.data.body,"password",e)},expression:"data.body.password"}}),s("br"),s("q-checkbox",{attrs:{id:"rememberMe",label:"Angemeldet bleiben"},model:{value:t.data.rememberMe,callback:function(e){t.$set(t.data,"rememberMe",e)},expression:"data.rememberMe"}})],1),s("q-card-actions",[s("q-btn",{attrs:{color:"primary",loading:t.loading},on:{click:t.login}},[t._v("Anmelden")])],1),s("q-card-actions",{staticClass:"q-gutter-xl"},[s("router-link",{attrs:{to:"/password/forgot"}},[s("a",[t._v("Passwort vergessen?")])])],1)],1)],1)},r=[],o={name:"Login",computed:{leftDrawerOpen:{get:function(){return this.$store.state.showcase.leftDrawerOpen},set:function(t){this.$store.commit("showcase/updateLeftDrawerOpen",t)}},showNotification:{get:function(){return this.$store.state.showcase.drawerState},set:function(t){this.$store.commit("showcase/updateDrawerState",t)}}},mounted:function(){this.showNotification=!1,this.leftDrawerOpen=!1},data:function(){return{isPwd:!0,data:{body:{user:"",password:""},rememberMe:!1},loading:!1}},methods:{login:function(){this.$router.push("Dashboard")}}},n=o,i=s("2877"),c=Object(i["a"])(n,a,r,!1,null,null,null);e["default"]=c.exports}}]);