(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-my_info"],{"0aff":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-green",isBack:!1}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("主页")])],2),[e("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[e("v-uni-view",{staticClass:"action text-green"},[t._v("基本信息")])],1),e("v-uni-view",{staticClass:"padding bg-white"},[e("v-uni-view",{staticClass:"flex solid-bottom p-xs margin-bottom-sm mb-sm"},[e("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius text-grey"},[t._v("姓名")]),e("v-uni-view",{staticClass:"flex-twice padding-sm margin-xs radius"},[t._v(t._s(t.name))])],1),e("v-uni-view",{staticClass:"flex solid-bottom p-xs margin-bottom-sm mb-sm"},[e("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius text-grey"},[t._v("学号")]),e("v-uni-view",{staticClass:"flex-twice padding-sm margin-xs radius"},[t._v(t._s(t.student_number))])],1),e("v-uni-view",{staticClass:"flex solid-bottom p-xs margin-bottom-sm mb-sm"},[e("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius text-grey"},[t._v("手机号")]),e("v-uni-view",{staticClass:"flex-twice padding-sm margin-xs radius"},[t._v(t._s(t.stu_phone_num))])],1),e("v-uni-view",{staticClass:"flex solid-bottom p-xs margin-bottom-sm mb-sm"},[e("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius text-grey"},[t._v("班级")]),e("v-uni-view",{staticClass:"flex-twice padding-sm margin-xs radius"},[t._v(t._s(t.student_class))])],1),e("v-uni-view",{staticClass:"flex solid-bottom p-xs margin-bottom-sm mb-sm"},[e("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius text-grey"},[t._v("已缴费(元)")]),e("v-uni-view",{staticClass:"flex-twice padding-sm margin-xs radius"},[t._v(t._s(t.payed_fee))])],1),e("v-uni-view",{staticClass:"flex solid-bottom p-xs margin-bottom-sm mb-sm"},[e("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius text-grey"},[t._v("需缴费(元)")]),e("v-uni-view",{staticClass:"flex-twice padding-sm margin-xs radius"},[t._v(t._s(t.unpayed_fee))])],1)],1)]],2)},i=[];e.d(s,"a",function(){return a}),e.d(s,"b",function(){return i})},"116b":function(t,s,e){"use strict";e.r(s);var a=e("0aff"),i=e("4450");for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);var u=e("2877"),r=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);s["default"]=r.exports},"208a":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{stu_phone_num:"",name:"",student_number:"",student_class:"",payed_fee:"",unpayed_fee:""}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}},onShow:function(){var t=this;this.student_number=uni.getStorageSync("key_id_number"),console.log(this.student_number),uni.request({url:"http://114.116.64.103:9000/get_student_info_summary_api",method:"POST",dataType:"json",header:{"Content-Type":"application/x-www-form-urlencoded"},data:{stu_num_id:this.student_number},success:function(s){console.log(s),t.name=s.data.stu_name,t.stu_phone_num=s.data.stu_phone_num,t.unpayed_fee=s.data.total_amount,t.payed_fee=s.data.already_payed_amount,t.student_class=s.data.class_id},fail:function(t){console.log("request fail",t)},complete:function(){}})}};s.default=a},4450:function(t,s,e){"use strict";e.r(s);var a=e("208a"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);s["default"]=i.a}}]);