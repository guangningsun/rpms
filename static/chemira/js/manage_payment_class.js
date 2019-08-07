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
            return row.payment_class_name;
        });
    }

    function getIdSelections() {
        return $.map($table.bootstrapTable('getSelections'), function(row) {
            return row.payment_class_id;
        });
    }


    $('#modifyUserPass').togglePassword({
        el: '#btn_show_pass'
    });

    // window.operateEvents = {
    //     'click .remove': function(e, value, row, index) {
    //         $('#deleteSingleRoom').modal();
    //         $('#deleteSingleRoomMsg').html(row.payment_class_name + ' ?');
    //         $('#deleteSingleRoomOk').click(function() {
    //             $.ajax({
    //                 url: "/remove_p_class/",
    //                 dataType: "json",
    //                 data: { "payment_class_ids": row.payment_class_id },
    //                 success: function(msg) {                     
    //                         $table.bootstrapTable('remove', {
    //                             field: 'payment_class_id',
    //                             values: [row.payment_class_id]
    //                         });
    //                         $('#deleteSingleRoom').modal('hide');
    //                 }
    //             });
    //         });



    //     }
    // };
    window.operateEvents = {
        'click .remove': function(e, value, row, index) {
            $('#deleteSingleRoom').modal();
            $('#deleteSingleRoomMsg').html(row.payment_class_name + ' ?');
            $('#deleteSingleRoomOk').click(function() {
                $.ajax({
                    url: "/remove_p_class",
                    dataType: "json",
                    data: { "payment_class_ids": row.payment_class_id },
                    success: function(msg) {
                        $table.bootstrapTable('remove', {
                            field: 'payment_class_id',
                            values: [row.payment_class_id]
                        });
                        $('#deleteSingleRoom').modal('hide'); 
                    }
                });
            });
        }
    };
    // $remove.click(function() {
    //     var ids = getIdSelections();
    //     if (ids.length > 0) {
    //         $('#deleteMultiRoom').modal();
    //         ids_str = ids.toString().trim();
    //         var payment_class_name = getApartNameSelections().toString().trim();
    //         $('#deleteMultiRoomMsg').html(payment_class_name + ' ?'+ ids_str);
    //         $('#deleteMultiRoomOk').click(function() {
    //             $.ajax({
    //                 url: "/remove_p_class/",
    //                 dataType: "json",
    //                 data: { payment_class_ids: ids_str },
    //                 type: "POST",
    //                 success: function(msg) {
    //                     window.location.reload();
    //                 }
    //             });
    //             $remove.prop('disabled', false);
    //             $('#deleteMultiRoom').modal('hide');
    //         });

    //     }
    $remove.click(function() {
        var ids = getIdSelections();
        console.log("===1=====")
        if (ids.length > 0) {
            console.log("===2=====")
            $('#deleteMultiRoom').modal();
            console.log("===3=====")
            ids_str = ids.toString().trim();
            console.log("===4=====")
            $('#deleteMultiRoomMsg').html(ids_str+ '?');
            console.log("===5=====")
            $('#deleteMultiRoomOk').click(function() {
                $.ajax({
                    url: "/remove_p_class/",
                    dataType: "json",
                    data: { payment_class_ids: ids_str },
                    type: "POST",
                    success: function(msg) {
                        location.reload();
                        $table.bootstrapTable('remove', {
                            field: 'payment_class_id',
                            values: [row.payment_class_id]
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
        field: 'payment_class_id',
        title: '缴费类别ID',
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
        field: 'payment_class_desc',
        title: '缴费类别备注',
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
        url: '/get_all_p_class_info',
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
