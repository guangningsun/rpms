(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-my_info"],{"116b":function(s,t,i){"use strict";i.r(t);var e=i("288d"),a=i("4450");for(var n in a)"default"!==n&&function(s){i.d(t,s,function(){return a[s]})}(n);var u=i("2877"),r=Object(u["a"])(a["default"],e["a"],e["b"],!1,null,null,null);t["default"]=r.exports},"208a":function(s,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{id_number:0,name:"",student_number:"",student_class:"",student_teacher:"",payed_fee:"",unpayed_fee:""}},methods:{tabSelect:function(s){this.TabCur=s.currentTarget.dataset.id,this.scrollLeft=60*(s.currentTarget.dataset.id-1)}},onShow:function(){this.id_number=uni.getStorageSync("key_id_number"),console.log(this.id_number),uni.request({url:"http://114.116.64.103:9000/get_student_info_summary_api/",method:"POST",dataType:"json",data:{stu_num_id:this.id_number},success:function(s){console.log(result)},fail:function(s){console.log("request fail",s)},complete:function(){}})}};t.default=e},"288d":function(s,t,i){"use strict";var e=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-green",isBack:!1}},[i("template",{attrs:{slot:"content"},slot:"content"},[s._v("主页")])],2),[i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[i("v-uni-view",{staticClass:"action text-green"},[s._v("基本信息")])],1),i("v-uni-view",{staticClass:"padding bg-white"},[i("v-uni-view",{staticClass:"flex solid-bottom p-xs margin-bottom-sm mb-sm"},[i("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius text-grey"},[s._v("姓名")]),i("v-uni-view",{staticClass:"flex-twice padding-sm margin-xs radius"},[s._v(s._s(s.name))])],1),i("v-uni-view",{staticClass:"flex solid-bottom p-xs margin-bottom-sm mb-sm"},[i("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius text-grey"},[s._v("学号")]),i("v-uni-view",{staticClass:"flex-twice padding-sm margin-xs radius"},[s._v(s._s(s.student_number))])],1),i("v-uni-view",{staticClass:"flex solid-bottom p-xs margin-bottom-sm mb-sm"},[i("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius text-grey"},[s._v("身份证号")]),i("v-uni-view",{staticClass:"flex-twice padding-sm margin-xs radius"},[s._v(s._s(s.id_number))])],1),i("v-uni-view",{staticClass:"flex solid-bottom p-xs margin-bottom-sm mb-sm"},[i("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius text-grey"},[s._v("班级")]),i("v-uni-view",{staticClass:"flex-twice padding-sm margin-xs radius"},[s._v(s._s(s.student_class))])],1),i("v-uni-view",{staticClass:"flex solid-bottom p-xs margin-bottom-sm mb-sm"},[i("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius text-grey"},[s._v("班主任")]),i("v-uni-view",{staticClass:"flex-twice padding-sm margin-xs radius"},[s._v(s._s(s.student_teacher))])],1),i("v-uni-view",{staticClass:"flex solid-bottom p-xs margin-bottom-sm mb-sm"},[i("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius text-grey"},[s._v("已缴费(元)")]),i("v-uni-view",{staticClass:"flex-twice padding-sm margin-xs radius"},[s._v(s._s(s.payed_fee))])],1),i("v-uni-view",{staticClass:"flex solid-bottom p-xs margin-bottom-sm mb-sm"},[i("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius text-grey"},[s._v("需缴费(元)")]),i("v-uni-view",{staticClass:"flex-twice padding-sm margin-xs radius"},[s._v(s._s(s.unpayed_fee))])],1)],1)]],2)},a=[];i.d(t,"a",function(){return e}),i.d(t,"b",function(){return a})},4450:function(s,t,i){"use strict";i.r(t);var e=i("208a"),a=i.n(e);for(var n in e)"default"!==n&&function(s){i.d(t,s,function(){return e[s]})}(n);t["default"]=a.a}}]);