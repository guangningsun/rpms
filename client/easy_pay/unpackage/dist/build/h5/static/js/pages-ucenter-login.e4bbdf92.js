(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-login"],{"02b8":function(t,n,e){"use strict";var a=e("85c1"),i=e.n(a);i.a},"1dc5":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".landing[data-v-be0a46c8]{height:%?84?%;line-height:%?84?%;border-radius:%?44?%;font-size:%?32?%;background:-webkit-gradient(linear,left top,right top,from(#39b54a),to(#8dc63f));background:-o-linear-gradient(left,#39b54a,#8dc63f);background:linear-gradient(90deg,#39b54a,#8dc63f)}.login-btn[data-v-be0a46c8]{padding:%?10?% %?20?%;margin-top:%?350?%}.login-function[data-v-be0a46c8]{overflow:auto;padding:%?20?% %?20?% %?30?% %?20?%}.login-forget[data-v-be0a46c8]{float:left;font-size:%?26?%;color:#999}.login-register[data-v-be0a46c8]{color:#666;float:right;font-size:%?26?%}.login-input uni-input[data-v-be0a46c8]{background:#f2f5f6;font-size:%?28?%;padding:%?10?% %?25?%;height:%?62?%;line-height:%?62?%;border-radius:%?8?%}.login-margin-b[data-v-be0a46c8]{margin-bottom:%?25?%}.login-input[data-v-be0a46c8]{padding:%?10?% %?20?%}.login-head[data-v-be0a46c8]{font-size:%?34?%;text-align:center;padding:%?25?% %?10?% %?55?% %?10?%}.login-card[data-v-be0a46c8]{background:#fff;border-radius:%?12?%;padding:%?10?% %?25?%;-webkit-box-shadow:0 %?6?% %?18?% rgba(0,0,0,.12);box-shadow:0 %?6?% %?18?% rgba(0,0,0,.12);position:relative;margin-top:%?120?%}.login-bg[data-v-be0a46c8]{height:%?300?%;padding:%?25?%;margin-top:%?-94?%;background:-webkit-gradient(linear,left top,right top,from(#39b54a),to(#8dc63f));background:-o-linear-gradient(left,#39b54a,#8dc63f);background:linear-gradient(90deg,#39b54a,#8dc63f)}.text-style[data-v-be0a46c8]{padding:%?20?%;margin-bottom:%?20?%}",""])},"690d":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-green",isBack:!1}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("登录")])],2),e("v-uni-view",{staticClass:"login-bg"},[e("v-uni-view",{staticClass:"login-card"},[e("v-uni-view",{staticClass:"login-head"},[t._v("输入学号验证登录")]),e("v-uni-view",{staticClass:"login-input login-margin-b"},[e("v-uni-input",{attrs:{type:"text",placeholder:"请输入学号"},model:{value:t.id_number,callback:function(n){t.id_number=n},expression:"id_number"}})],1),e("v-uni-text",{staticClass:"text-style text-red"},[t._v(t._s(t.verify_failed))])],1)],1),e("v-uni-view",{staticClass:"login-btn"},[e("v-uni-button",{staticClass:"landing",attrs:{type:"primary"},on:{click:function(n){n=t.$handleEvent(n),t.verifyId(n)}}},[t._v("验证")])],1)],1)},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},"85c1":function(t,n,e){var a=e("1dc5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("f7ee39e0",a,!0,{sourceMap:!1,shadowMode:!1})},b6cf:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{id_number:"",verify_failed:""}},methods:{go_forget:function(){uni.navigateTo({url:"../../pages/ucenter/forget"})},go_register:function(){uni.navigateTo({url:"../../pages/ucenter/register"})},goToMyInfo:function(){uni.switchTab({url:"my_info"})},verifyId:function(){console.log(this.id_number),uni.setStorage({key:"key_id_number",data:this.id_number}),uni.request({url:"http://114.116.64.103:9000/student_login_api",method:"POST",dataType:"json",header:{"Content-Type":"application/x-www-form-urlencoded"},data:{stu_num_id:this.id_number},success:function(t){0===t.data.error?uni.switchTab({url:"my_info"}):this.verify_failed="验证未通过，请重新验证"}.bind(this)})}}};n.default=a},bc4d:function(t,n,e){"use strict";e.r(n);var a=e("690d"),i=e("dcd5");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("02b8");var r=e("2877"),d=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"be0a46c8",null);n["default"]=d.exports},dcd5:function(t,n,e){"use strict";e.r(n);var a=e("b6cf"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a}}]);