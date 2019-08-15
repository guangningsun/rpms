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
            return row.username;
        });
    }

    function getIdSelections() {
        return $.map($table.bootstrapTable('getSelections'), function(row) {
            return row.payment_id;
        });
    }


    $('#modifyUserPass').togglePassword({
        el: '#btn_show_pass'
    });

    window.operateEvents = {
        'click .modify': function(e, value, row, index) {
            var obj = row;
            console.log(obj);
       
            var class_id = obj.class_id;
            var class_num = obj.class_num;

            $('#m_class_id')[0].value = class_id;
            $('#m_class_num')[0].value = class_num;
            $('#modifySingleClass').modal();
        },
        'click .remove': function(e, value, row, index) {
            $('#deleteSingleRoom').modal();
            $('#deleteSingleRoomMsg').html(row.payment_id + ' ?');
            $('#deleteSingleRoomOk').click(function() {
                $.ajax({
                    url: "/remove_payment",
                    dataType: "json",
                    data: { "payment_id": row.payment_id },
                    success: function(msg) {
                        $table.bootstrapTable('remove', {
                            field: 'payment_id',
                            values: [row.payment_id]
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
            $('#deleteMultiRoomMsg').html(ids_str+ '?');
            $('#deleteMultiRoomOk').click(function() {
                $.ajax({
                    url: "/remove_payment/",
                    dataType: "json",
                    data: { payment_ids: ids_str },
                    type: "POST",
                    success: function(msg) {
                        location.reload();
                        $table.bootstrapTable('remove', {
                            field: 'payment_id',
                            values: [row.payment_id]
                        });
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
        field: 'payment_id',
        title: '缴费ID',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'payment_class_name',
        title: '缴费项目名称',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'payment_create_time',
        title: '缴费条目创建时间',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'stu_payment_time',
        title: '学生付款时间',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'payment_amount',
        title: '缴费金额',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'payment_status',
        title: '缴费状态',
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
        field: 'create_user_id',
        title: '创建者ID',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'merOrderId',
        title: '订单号',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'payment_res_desc',
        title: '第三方返回信息',
        align: 'center',
        valign: 'middle',
        sortable: true
    });

    $("#checkin_form").validation({
        reqmark: false,
        icon: false
    });




    $.ajax({
        type: "GET",
        url: '/get_all_payment_info',
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
