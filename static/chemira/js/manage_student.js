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
                '</a>  '
            ].join('');
        }

    }


    function getApartNameSelections() {
        return $.map($table.bootstrapTable('getSelections'), function(row) {
            return row.stu_name;
        });
    }

    function getIdSelections() {
        return $.map($table.bootstrapTable('getSelections'), function(row) {
            return row.stu_id;
        });
    }


    $('#modifyUserPass').togglePassword({
        el: '#btn_show_pass'
    });

    window.operateEvents = {
        'click .remove': function(e, value, row, index) {
            console.log(row.stu_id);

            $('#deleteSingleRoom').modal();
            $('#deleteSingleRoomMsg').html(row.stu_name + ' ?');
            $('#deleteSingleRoomOk').click(function() {
                $.ajax({
                    url: "/remove_student/",
                    dataType: "json",
                    data: { "stu_num_ids": row.stu_num_ids },
                    success: function(msg) {
                        var msg_val = eval(msg);
                        if (msg_val.message === '200denied') {
                            alert("不允许删除！");
                        } else if (msg_val.message === '200success') {
                            $table.bootstrapTable('remove', {
                                field: 'stu_num_id',
                                values: [row.stu_num_id]
                            });
                            $('#deleteSingleRoom').modal('hide');
                        }

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
            var stu_name = getApartNameSelections().toString().trim();
            $('#deleteMultiRoomMsg').html(stu_name + ' ?'+ ids_str);
            $('#deleteMultiRoomOk').click(function() {
                $.ajax({
                    url: "/remove_student/",
                    dataType: "json",
                    data: { stu_num_ids: ids_str },
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
        field: 'stu_id',
        title: '学生ID',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'stu_num_id',
        title: '学号',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'stu_name',
        title: '用户名',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'stu_id_card',
        title: '身份证号',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'stu_sexy',
        title: '性别',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'stu_phone_num',
        title: '手机号',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'stu_desc',
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
        url: '/get_all_student_info',
        success: function(data) {
            var allRoomDataObjs = eval(data);
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
