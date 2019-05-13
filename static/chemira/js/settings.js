var feeItemObjs;

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
    }
    $('#navi_user_name').html(userName);
    var domainName = $.cookie('domain_name');
    $('#navi_domain').html(domainName);

    $.ajax({
        url: "getFeeItemAll.action",
        dataType: "json",
        success: function(feeData) {
            feeItemObjs = eval(feeData);
            console.log(feeItemObjs);
            for (var i = feeItemObjs.length - 1; i >= 0; i--) {
                var itemName = feeItemObjs[i]["feeitem_name"];
                var itemPrice = feeItemObjs[i]["feeitem_price"];
                switch (itemName) {
                    case "net_fee":
                        $("#sp_display_network_fee").html(itemPrice);
                        break;
                    case "trash_fee":
                        $("#sp_display_trash_fee").html(itemPrice);
                        break;
                    case "water_fee_single":
                        $("#sp_display_water_single_fee").html(itemPrice);
                        break;
                    case "water_fee_multi":
                        $("#sp_display_water_multi_fee").html(itemPrice);
                        break;
                    case "water_meter_fee":
                        $("#sp_display_water_cube_fee").html(itemPrice);
                        break;
                    case "electric_fee":
                        $("#sp_display_electric_fee").html(itemPrice);
                        break;
                    case "month_remind":
                        $("#sp_display_remain_month_days").html(itemPrice);
                        break;
                    case "contract_remind":
                        $("#sp_display_remain_contract_days").html(itemPrice);
                        break;
                    default:
                        break;
                };
            };
        }
    });
});

function onClickModify(btn_id, div_et_id, et_id, text_display_id) {
    var oldValue = $("#" + text_display_id).html();
    $("#" + et_id).val(oldValue);
    $("#" + div_et_id).show();
    $("#" + btn_id).hide();
}

function onClickClose(btn_mod, div_et_id) {
    $("#" + btn_mod).show();
    $("#" + div_et_id).hide();
}

function onClickOk(btn_mod, div_et_id, ip_id, text_display_id) {
    $("#" + btn_mod).show();
    $("#" + div_et_id).hide();

    var num = new Number($("#" + ip_id)[0].value);
    var value = num.toFixed(2);
    ($("#" + ip_id)[0].value) = value;

    //Todo
    //write to database

    var itemName;
    switch (ip_id) {
        case "ip_network_fee":
            itemName = "net_fee";
            break;
        case "ip_trash_fee":
            itemName = "trash_fee";
            break;
        case "ip_water_single_fee":
            itemName = "water_fee_single";
            break;
        case "ip_water_multi_fee":
            itemName = "water_fee_multi";
            break;
        case "ip_water_cube_fee":
            itemName = "water_meter_fee";
            break;
        case "ip_electric_fee":
            itemName = "electric_fee";
            break;
        case "ip_remain_month_days":
            itemName = "month_remind";
            value = parseInt(value);
            break;
        case "ip_remain_contract_days":
            itemName = "contract_remind";
            value = parseInt(value);
            break;
        default:
            break;
    }

    $.ajax({
        url: "modifyFeeItem.action",
        dataType: "json",
        data: { "feeitem_price": value, "feeitem_name": itemName },
        success: function(data) {
            console.log(data);
            //todo 
            //add messenger popup
            $("#" + text_display_id).html(value);

        },
        error: function() {
            //todo 
            //add messenger popup
            console.log("shittttt err");
        }
    });

}
