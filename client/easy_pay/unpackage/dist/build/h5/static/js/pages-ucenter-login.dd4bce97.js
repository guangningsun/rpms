(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-login"],{"20cd":function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-green",isBack:!1}},[a("template",{attrs:{slot:"content"},slot:"content"},[t._v("登录")])],2),a("v-uni-view",{staticClass:"login-bg"},[a("v-uni-view",{staticClass:"login-card"},[a("v-uni-view",{staticClass:"login-head"},[t._v("输入学号验证登录")]),a("v-uni-view",{staticClass:"login-input login-margin-b"},[a("v-uni-input",{attrs:{type:"text",placeholder:"请输入学号"},model:{value:t.id_number,callback:function(n){t.id_number=n},expression:"id_number"}})],1),a("v-uni-text",{staticClass:"text-style text-red"},[t._v(t._s(t.verify_failed?"验证未通过，请重新验证":""))])],1)],1),a("v-uni-view",{staticClass:"login-btn"},[a("v-uni-button",{staticClass:"landing",attrs:{type:"primary"},on:{click:function(n){n=t.$handleEvent(n),t.verifyId(n)}}},[t._v("验证")])],1)],1)},e=[];a.d(n,"a",function(){return i}),a.d(n,"b",function(){return e})},"3dc5":function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,".landing[data-v-09bb3fad]{height:%?84?%;line-height:%?84?%;border-radius:%?44?%;font-size:%?32?%;background:-webkit-gradient(linear,left top,right top,from(#39b54a),to(#8dc63f));background:-o-linear-gradient(left,#39b54a,#8dc63f);background:linear-gradient(90deg,#39b54a,#8dc63f)}.login-btn[data-v-09bb3fad]{padding:%?10?% %?20?%;margin-top:%?350?%}.login-function[data-v-09bb3fad]{overflow:auto;padding:%?20?% %?20?% %?30?% %?20?%}.login-forget[data-v-09bb3fad]{float:left;font-size:%?26?%;color:#999}.login-register[data-v-09bb3fad]{color:#666;float:right;font-size:%?26?%}.login-input uni-input[data-v-09bb3fad]{background:#f2f5f6;font-size:%?28?%;padding:%?10?% %?25?%;height:%?62?%;line-height:%?62?%;border-radius:%?8?%}.login-margin-b[data-v-09bb3fad]{margin-bottom:%?25?%}.login-input[data-v-09bb3fad]{padding:%?10?% %?20?%}.login-head[data-v-09bb3fad]{font-size:%?34?%;text-align:center;padding:%?25?% %?10?% %?55?% %?10?%}.login-card[data-v-09bb3fad]{background:#fff;border-radius:%?12?%;padding:%?10?% %?25?%;-webkit-box-shadow:0 %?6?% %?18?% rgba(0,0,0,.12);box-shadow:0 %?6?% %?18?% rgba(0,0,0,.12);position:relative;margin-top:%?120?%}.login-bg[data-v-09bb3fad]{height:%?300?%;padding:%?25?%;margin-top:%?-94?%;background:-webkit-gradient(linear,left top,right top,from(#39b54a),to(#8dc63f));background:-o-linear-gradient(left,#39b54a,#8dc63f);background:linear-gradient(90deg,#39b54a,#8dc63f)}.text-style[data-v-09bb3fad]{padding:%?20?%;margin-bottom:%?20?%}",""])},"600a":function(t,n,a){"use strict";var i=a("7cea"),e=a.n(i);e.a},"7cea":function(t,n,a){var i=a("3dc5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("0dad89fc",i,!0,{sourceMap:!1,shadowMode:!1})},b6cf:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{id_number:"",verify_failed:!1}},onLoad:function(){},methods:{go_forget:function(){uni.navigateTo({url:"../../pages/ucenter/forget"})},go_register:function(){uni.navigateTo({url:"../../pages/ucenter/register"})},goToMyInfo:function(){uni.switchTab({url:"my_info"})},verifyId:function(){var t=this;console.log(this.id_number),uni.setStorage({key:"key_id_number",data:this.id_number}),uni.request({url:"http://114.116.64.103:9000/student_login_api",method:"POST",dataType:"json",header:{"Content-Type":"application/x-www-form-urlencoded"},data:{stu_num_id:this.id_number},success:function(t){console.log(t.data.error),0===t.data.error&&(this.verify_failed=!1,uni.switchTab({url:"my_info"}))},fail:function(n){console.log("request fail",n),t.verify_failed=!0},complete:function(){t.loading=!1}})}}};n.default=i},bc4d:function(t,n,a){"use strict";a.r(n);var i=a("20cd"),e=a("dcd5");for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);a("600a");var r=a("2877"),d=Object(r["a"])(e["default"],i["a"],i["b"],!1,null,"09bb3fad",null);n["default"]=d.exports},dcd5:function(t,n,a){"use strict";a.r(n);var i=a("b6cf"),e=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(n,t,function(){return i[t]})}(o);n["default"]=e.a}}]);