// function onClickMultiDelete () {

//      $('#deleteMultiRoom').modal();
// }
var userName;
var domainCode;
var waterMode;

function onClickAddMultiRoom() {
    var floorNum = $('#floorNum')[0].value;
    var startNum = $('#startNum')[0].value;
    var endNum = $('#endNum')[0].value;
    var alphabet = $('#alphabet')[0].value;
    console.log(floorNum + ' ' + startNum + ' ' + endNum + ' ' + alphabet);
    $.ajax({
        type: "POST",
        url: "init_apartment.action",
        data: { "floor": floorNum, "start_num": startNum, "end_num": endNum, "domain_code": domainCode, "orderby": alphabet },
        success: function(msg) {
            console.log(msg);
            $('#addMultiRoom').modal('hide');
            location.reload();
        }
    });

}

function onDepositChange() {
    console.log($('#contract_month_price')[0].value);
    ($('#contract_deposit')[0].value) = $('#contract_month_price')[0].value;
}



$(document).ready(function() {


    var $table = $('#table'),
        $remove = $('#remove'),
        selections = [];

    function operateFormatter(value, row, index) {
        if (row.dev_status === "空闲") {
            return [
                '<a class="checkin" href="javascript:void(0)" title="登记">',
                '<i class="icon-plus-sign-alt text-primary"></i>',
                '</a>  ',
                '<a class="remove" href="javascript:void(0)" title="删除">',
                '<i class="icon-remove text-danger"></i>',
                '</a>'
            ].join('');
        } else {
            return [
                '<a class="modify" href="javascript:void(0)" title="修改">',
                '<i class="icon-pencil text-primary"></i>',
                '</a>  ',
                '<a class="remove" href="javascript:void(0)" title="删除">',
                '<i class="icon-remove text-danger"></i>',
                '</a>'
            ].join('');
        }

    }


    function getApartNameSelections() {
        return $.map($table.bootstrapTable('getSelections'), function(row) {
            return row.username;
        });
    }

    function getIdSelections() {
        return $.map($table.bootstrapTable('getSelections'), function(row) {
            return row.user_id;
        });
    }


    $('#modifyUserPass').togglePassword({
        el: '#btn_show_pass'
    });

    window.operateEvents = {
        'click .modify': function(e, value, row, index) {
            var user_obj = row;
            console.log(user_obj);
            var username = user_obj.username;
            var login_name = user_obj.login_name;
            var description = user_obj.description;
            var class_id= user_obj.class_id;
            var is_deleted = user_obj.is_deleted;
            var create_time = user_obj.create_time;
            var user_id = user_obj.user_id;
            console.log(login_name)
            $('#m_username')[0].value = username;
            $('#m_login_name')[0].value = login_name;
            $('#m_description')[0].value = description;
            $('#m_class_id')[0].value = class_id;
            $('#password')[0].value = "";
            $('#m_is_deleted')[0].value = is_deleted;
            $('#m_create_time')[0].value = create_time;
            $('#m_user_id')[0].value = user_id;
            
            
            
            delete $('#user_permission_admin').checked;
            delete $('#user_permission_teacher').checked;
            if (user_obj.user_permission === '0'){
                $('#user_permission_admin').attr("checked", "checked");
            } else {
                $('#user_permission_teacher').attr("checked", "checked");
            }
            //if (waterMode === '1') {
             //   $('#modify_water_div').hide();
            //}

            $('#modifySingleUser').modal();
        },
        'click .remove': function(e, value, row, index) {
            console.log(row.user_id);
            $('#deleteSingleRoom').modal();
            $('#deleteSingleRoomMsg').html(row.username + ' ?');
            $('#deleteSingleRoomOk').click(function() {
                $.ajax({
                    url: "/remove_user/",
                    dataType: "json",
                    data: { "user_ids": row.user_id },
                    type: "POST",
                    success: function(msg) {
                            $table.bootstrapTable('remove', {
                                field: 'user_id',
                                values: [row.user_id]
                            });
                            $('#deleteSingleRoom').modal('hide');
                    }
                });
            });



        }
    };

    $remove.click(function() {
        var ids = getIdSelections();
        if (ids.length > 0) {
            $('#deleteMultiRoom').modal();
            ids_str = ids.toString().trim();
            var user_name = getApartNameSelections().toString().trim();
            $('#deleteMultiRoomMsg').html(user_name + ' ?'+ ids_str);
            $('#deleteMultiRoomOk').click(function() {
                $.ajax({
                    url: "/remove_user/",
                    dataType: "json",
                    data: { user_ids: ids_str },
                    type: "POST",
                    success: function(msg) {
                        window.location.reload();
                    }
                });
                $remove.prop('disabled', false);
                $('#deleteMultiRoom').modal('hide');
            });

        }

    });

    $(window).resize(function() {
        $table.bootstrapTable('resetView', {
            // height: getHeight()
        });
    });

    function responseHandler(res) {
        console.log(res);
        $.each(res.rows, function(i, row) {
            row.state = $.inArray(row.id, selections) !== -1;
        });
        return res;
    }


    var columns = [];

    columns.push({
        field: 'state',
        checkbox: true
    });
    columns.push({
        field: 'user_id',
        title: '用户ID',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'login_name',
        title: '登录名',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'username',
        title: '用户名',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'password',
        title: '密码',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'user_permission',
        title: '权限',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'create_time',
        title: '创建时间',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'description',
        title: '备注',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'class_id',
        title: '班级号',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'operate',
        title: '操作',
        align: 'center',
        events: operateEvents,
        formatter: operateFormatter
    });

    $("#checkin_form").validation({
        reqmark: false,
        icon: false
    });




    $.ajax({
        type: "GET",
        url: '/get_all_user_info',
        success: function(data) {
            var allRoomDataObjs = eval(data);
            console.log(allRoomDataObjs);
            $('#table').bootstrapTable('destroy').bootstrapTable({
                data: allRoomDataObjs,
                columns: columns
            });
        }
    });

    $('#datetimepicker1').datetimepicker({
        language: 'zh-CN'
    });
});
