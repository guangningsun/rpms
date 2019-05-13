var domainObjs;
var permissionArray = [];
// var userPermission;

function onGetChecked() {
    permissionArray = [];
    obj = document.getElementsByName("add_user_permission");
    var k;
    for (k in obj) {
        if (obj[k].checked)
            permissionArray.push(obj[k].value);
    }
    if (permissionArray.length === 0) {
        permissionArray.push('-1');
    } else {
        var hiddenAddUserPermission = $('#ip_add_user_permission');
        hiddenAddUserPermission[0].value = permissionArray.toString();
        var hiddenModifyUserPermission = $('#ip_modify_user_permission');
        hiddenModifyUserPermission[0].value = permissionArray.toString();
    }
}

function generateCheckbox(parentNode, domainObjs) {
    console.log(domainObjs);
    for (var i = 0; i < domainObjs.length; i++) {
        var checkboxLabelNode = $('<label onclick="onGetChecked()" class="checkbox-inline col-lg-3" id=code_"' + domainObjs[i].domain_code + '"></label>');
        var inputNode = $('<input name="add_user_permission" type="checkbox" id="inlineCheckbox1" value="' + domainObjs[i].domain_code + '">');
        inputNode.appendTo(checkboxLabelNode);
        checkboxLabelNode.append(domainObjs[i].domain_name);
        checkboxLabelNode.appendTo(parentNode);
    }
}

function onAddUser() {
    $('#add_user_name')[0].value = "";
    $('#add_user_pass')[0].value = "";
    var checkboxParent = $('#add_user_permission_div');
    checkboxParent.html("");
    generateCheckbox(checkboxParent, domainObjs);
    $('#addUserModal').modal();

}

// <label class="checkbox-inline col-lg-3">
//     <input type="checkbox" id="inlineCheckbox1" value="option1"> 选项 1
// </label>

$(document).ready(function() {

    var userName = $.cookie('user_name');
    console.log(userName);
    if (userName === undefined) {
        window.location.href = "./login.html";
    }
    var permission = $.cookie('user_permission');
    if (permission === '0') {
        $('#user_menu_item').show();
        $('#domain_menu_item').show();
    } else {
        alert("您无权限进入该页面！请使用超级用户登录。");
        window.location.href = "./login.html";
    }
    $('#navi_user_name').html(userName);
    var domainName = $.cookie('domain_name');
    $('#navi_domain').html(domainName);

    var $table = $('#table'),
        $remove = $('#remove'),
        selections = [];

    function operateFormatter(value, row, index) {
        console.log(row.user_permission);
        if (row.user_permission !== '超级管理员') {
            return [
                '<a class="like" href="javascript:void(0)" title="修改">',
                '<i class="icon-pencil text-primary"></i>',
                '</a>  ',
                '<a class="remove" href="javascript:void(0)" title="删除">',
                '<i class="icon-remove text-danger"></i>',
                '</a>'
            ].join('');
        } else {
            return ['<span>-</span>'].join('');
        }


    }

    function getIdSelections() {
        return $.map($table.bootstrapTable('getSelections'), function(row) {
            return row.user_id;
        });
    }

    // function getHeight() {
    //     return $(window).height() - $('h1').outerHeight(true);
    // }

    $('#modifyUserPass').togglePassword({
        el: '#btn_show_pass'
    });

    window.operateEvents = {
        'click .like': function(e, value, row, index) {
            var userOjb = row;
            var userPermissionOld = userOjb.user_permission;
            console.log(userPermissionOld);
            $('#modifyUserName').val(userOjb.user_name);
            $('#modifyUserPass').val('');
            // var selectPermission = $('#modifyUserPermission');
            // selectPermission.get(0).selectedIndex = (userPermissionOld - 1);
            var parentNode = $('#modify_user_permission_div');
            generateCheckbox(parentNode, domainObjs);
            $('#modifyId').val(userOjb.id);
            $('#modifyUserId').val(userOjb.user_id);
            $('#modifyUser').modal();
        },
        'click .remove': function(e, value, row, index) {
            console.log(row.user_id);

            var userId = row.user_id;
            if (userId !== 10000) {

                $('#deleteUser').modal();
                $('#deleteUserMsg').html(row.user_name + ' ?');

                $('#deleteUserOk').click(function() {

                    $.ajax({
                        url: "deleteSystemUserByUserId.action",
                        dataType: "json",
                        data: { "user_id": row.user_id }
                    });
                    $table.bootstrapTable('remove', {
                        field: 'id',
                        values: [row.id]
                    });
                    $('#deleteUser').modal('hide');
                });

            } else {
                alert("不允许删除超级管理员！");
            }





        }
    };

    $remove.click(function() {
        var ids = getIdSelections();
        ids_str = ids.toString().trim();
        console.log(ids_str);
        $.ajax({
            url: "deleteUserByIds.action",
            dataType: "json",
            data: { userids: ids_str },
            success: function() {
                $table.bootstrapTable('remove', {
                    field: 'user_id',
                    values: ids
                });
            },
            error: function() {
                $table.bootstrapTable('remove', {
                    field: 'user_id',
                    values: ids
                });
            }
        });

        $remove.prop('disabled', false);
    });
    $(window).resize(function() {
        $table.bootstrapTable('resetView', {
            // height: getHeight()
        });
    });



    function responseHandler(res) {
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
        field: 'user_name',
        title: '用户名',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'user_pass',
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
        field: 'operate',
        title: '操作',
        align: 'center',
        events: operateEvents,
        formatter: operateFormatter
    });

    $('#table').bootstrapTable('destroy').bootstrapTable({
        columns: columns
    });

    $.ajax({
        type: "POST",
        url: "getAllDomain.action",
        success: function(data) {
            domainObjs = eval(data);
        }
    });
});
