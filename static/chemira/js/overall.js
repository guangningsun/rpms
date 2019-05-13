var dataObjs;
var userName;
var domainCode;
var smsSwitcherValue;
var smsSwitcherNodeValue;
var waterMode;

function generateOneRoomCard(parentNode, apartmentName, tenantName, tenantTel, freq, apartmentState, otherRemindFlag) {

    var apartmentStateArray = apartmentState.split(",");
    //console.log(apartmentStateArray);

    var collg3Node = $('<div class="col-lg-3 col-sm-3" id="' + apartmentName + '" onmouseenter="onShowBtns(this.id)" onmouseleave="onHideBtns(this.id)"></div>');
    var panelSectionNode = $('<section class="panel"></section>');
    var headerNode = $('<header class="panel-heading"></header>');
    var strongNode = $('<strong style="font-size: 15px;">' + apartmentName + '</strong>');
    var btnDivNode = $('<div class="pull-right" id="btns' + apartmentName + '"></div>');
    var otherBtnNode = $('<button class="btn btn-xs btn-default" name="' + apartmentName + '" id="other' + apartmentName + '" style="background:#7C8C92" onclick="onChargeOtherFee(this.name)">杂费</button>');
    var rentBtnNode = $('<button class="btn btn-xs btn-warning" name="' + apartmentName + '" id="rent' + apartmentName + '" onclick="onChargeRent(this.name)">月租</button>');
    var oweBtnNode = $('<button class="btn btn-xs btn-info" name="' + apartmentName + '" id="own' + apartmentName + '" onclick="onChargeOwe(this.name)">交欠费</button>');
    var checkoutBtnNode = $('<button class="btn btn-danger btn-xs" name="' + apartmentName + '" id="own' + apartmentName + '" onclick="onCheckout(this.name)">退房</button >');
    var panelBodyNode = $('<div class="panel-body clearfix clear" style="font-size: 15px; height:85px;"></div>');
    var nameDivNode = $('<div></div>');
    var nameSpanNode = $('<span>' + tenantName + '</span>');
    var telDivNode = $('<div></div>');
    var telSpanNode = $('<span>' + tenantTel + '</span>');
    var freqDivNode = $('<div></div>');
    var freqSpanNode = $('<span style="font-size: 14px; color: #999;">周期到期：' + freq + '</span>');
    var footerNode = $('<footer class="panel-footer"></footer>');
    var labelVoidNode = $('<label class="label btn-default btn-xs"">未出租</label>');
    var labelNormalNode = $('<label class="label bg-success m-l-xs">正常</label>');
    var labelRentNode = $('<label class="label bg-warning m-l-xs">交租</label>');
    var labelContractNode = $('<label class="label bg-danger m-l-xs">合同</label>');
    var labelOweNode = $('<label class="label bg-danger m-l-xs">欠费</label>');
    var labelOtherNode = $('<label class="label m-l-xs" style="background:#7C8C92">收杂费</label>');

    if (tenantName === "") {
        nameSpanNode.html('<br>');
    }
    if (tenantTel === 0) {
        telSpanNode.html('<br>');
    }

    collg3Node.appendTo(parentNode);
    panelSectionNode.appendTo(collg3Node);
    headerNode.appendTo(panelSectionNode);
    strongNode.appendTo(headerNode);
    // rentBtnNode.appendTo(btnDivNode);
    btnDivNode.hide();
    panelBodyNode.appendTo(panelSectionNode);
    nameDivNode.appendTo(panelBodyNode);
    nameSpanNode.appendTo(nameDivNode);
    telDivNode.appendTo(panelBodyNode);
    telSpanNode.appendTo(telDivNode);
    freqDivNode.appendTo(panelBodyNode);
    freqSpanNode.appendTo(freqDivNode);
    footerNode.appendTo(panelSectionNode);

    // for (var i = 0; i < apartmentStateArray.length; i++) {
    switch (apartmentState) {
        case "700":
            labelVoidNode.appendTo(footerNode);
            panelBodyNode.html("");
            var checkInBtnNode = $('<button class="btn btn-rounded btn-md btn-primary" name="' + apartmentName + '" id="checkin_btn_' + apartmentName + '" onclick="onChecninClick(this.name)"><i class="icon-plus text"></i><span class="text">入住登记</span></button>');
            panelBodyNode.attr("style", "height:70px;");
            checkInBtnNode.appendTo(panelBodyNode);
            break;
        case "800":
            btnDivNode.appendTo(headerNode);
            labelNormalNode.appendTo(footerNode);
            if (otherRemindFlag === 1) {
                otherBtnNode.appendTo(btnDivNode);
                labelOtherNode.appendTo(footerNode);
            }
            checkoutBtnNode.appendTo(btnDivNode);
            break;
        case "801":
            rentBtnNode.appendTo(btnDivNode);
            btnDivNode.appendTo(headerNode);
            labelRentNode.appendTo(footerNode);
            if (otherRemindFlag === 1) {
                otherBtnNode.appendTo(btnDivNode);
                labelOtherNode.appendTo(footerNode);
            }
            checkoutBtnNode.appendTo(btnDivNode);
            break;
        case "802":
            btnDivNode.appendTo(headerNode);
            labelContractNode.appendTo(footerNode);
            if (otherRemindFlag === 1) {
                otherBtnNode.appendTo(btnDivNode);
                labelOtherNode.appendTo(footerNode);
            }
            checkoutBtnNode.appendTo(btnDivNode);
            break;
        case "810":
            btnDivNode.appendTo(headerNode);
            labelOweNode.appendTo(footerNode);
            oweBtnNode.appendTo(btnDivNode);
            if (otherRemindFlag === 1) {
                otherBtnNode.appendTo(btnDivNode);
                labelOtherNode.appendTo(footerNode);
            }
            checkoutBtnNode.appendTo(btnDivNode);
            break;
        default:
            break;
            // }
    }

}

// function onSmsSwitcherClicked() {
//     $.ajax({
//         type: "POST",
//         url: "modifyMessgeSwitchStatus.action"
//     });
// }

function onShowBtns(roomName) {
    $('#btns' + roomName).show();
}

function onHideBtns(roomName) {
    $('#btns' + roomName).hide();
}

function onChecninClick(roomName) {
    $('#checkin_alert_msg').hide();
    $('#checkin_apartment_person_num')[0].value = "1";
    $('#checkin_contract_start')[0].value = "";
    $('#checkin_contract_end')[0].value = "";
    $('#checkin_contract_start_show')[0].value = "";
    $('#checkin_contract_end_show')[0].value = "";
    $('#checkin_contract_frequency_next_show')[0].value = "";
    $('#checkin_contract_month_price')[0].value = "";
    $('#checkin_contract_deposit')[0].value = "";
    $('#checkin_contract_frequency')[0].value = "";
    $('#checkin_contract_current_frequency')[0].value = "";
    $('#checkin_total')[0].value = "";
    $('#checkin_apartment_owe')[0].value = "";
    $('#checkin_month_fee')[0].value = "";
    $('#checkin_tenant_name')[0].value = "";
    $('#checkin_tenant_phonenumber')[0].value = "";
    $('#checkin_tenant_age')[0].value = "";
    $('#checkin_tenant_desc')[0].value = "";
    $('#checkin_contract_end_div').removeClass('has-error has-success');
    $('#checkin_person_num_div').removeClass('has-error has-success');
    $('#checkin_contract_start_div').removeClass('has-error has-success');
    $('#checkin_frequency_next_div').removeClass('has-error has-success');
    $('#checkin_water_div').removeClass('has-error has-success');
    $('#checkin_electric_div').removeClass('has-error has-success');
    $('#checkin_tenant_name_div').removeClass('has-error has-success');
    $('.help-block').hide();

    if (waterMode === '1') {
        $('#checkin_water_div').hide();
    }

    var roomData = findDataByRoomName(dataObjs, roomName);
    // console.log(roomData);

    var roomObj = roomData;
    // console.log(roomObj);
    $('#checkin_apartment_electric_fee')[0].value = roomObj.apartment_electric_fee;
    $('#checkin_apartment_water_meter')[0].value = roomObj.apartment_water_meter;
    $('#checkin_apartment_area')[0].value = domainCode;
    $('#checkin_apartment_floor')[0].value = roomObj.apartment_floor;
    $('#checkin_apartment_name')[0].value = roomObj.apartment_name;
    $('#checkin_apartment_apartment_id')[0].value = roomObj.apartment_id;
    $('#checkin_user_name')[0].value = userName;
    $('#checkin').modal();

}

function onCheckout(apartmentName) {
    $('#checkout_total_other')[0].value = "";

    $('#checkout_electrice_fee')[0].value = "";
    var currentEletrNode = $('#checkout_current_electrice_kwh');
    currentEletrNode[0].value = "";

    $('#checkout_water_fee')[0].value = "";
    var currentWaterNode = $('#checkout_current_water_meter');
    currentWaterNode[0].value = "";

    var roomObj = findDataByRoomName(dataObjs, apartmentName);
    var lastElectric = roomObj.apartment_electric_fee;
    var lastWater = roomObj.apartment_water_meter;
    var apartmentPersonNum = roomObj.apartment_person_num;
    var netFee;
    var waterSingle;
    var waterMulti;
    var waterFee;
    var trashFee;
    var monthEletrFee;
    var everyKwhFee;

    $('#info_checkout_name').html(roomObj.tenant_name);
    $('#info_checkout_next_freq').html(roomObj.apartment_nextcharge_point);
    $('#info_checkout_month_fee').html(roomObj.contract_month_price + '元');
    $('#info_checkout_contract').html(roomObj.contract_endtime);

    $('#checkOutModalRoomName').html(apartmentName);

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
                        netFee = itemPrice;
                        break;
                    case "trash_fee":
                        trashFee = itemPrice;
                        break;
                    case "water_fee_single":
                        waterSingle = itemPrice;
                        break;
                    case "water_fee_multi":
                        waterMulti = itemPrice;
                        break;
                    case "water_meter_fee":
                        waterMeterFee = itemPrice;
                        break;
                    case "electric_fee":
                        everyKwhFee = itemPrice;
                        break;
                    default:
                        break;
                }
            }

            if (waterMode === '1') {
                $('#checkout_water_meter_div').hide();
                if (apartmentPersonNum > 1) {
                    waterFee = parseInt(waterMulti, 10) * parseInt(apartmentPersonNum, 10);
                } else {
                    waterFee = waterSingle;
                }
                $('#checkout_water_fee')[0].value = waterFee;
                $('#checkout_water_fee_hidden')[0].value = waterFee;
            } else if (waterMode === '2') {
                $('#checkout_fixed_water_div').hide();
                // waterFee = parseInt(waterMeterFee,10)*()
            }

            // if (apartmentPersonNum > 1) {
            //     waterFee = parseInt(waterMulti, 10) * parseInt(apartmentPersonNum, 10);
            // } else {
            //     waterFee = waterSingle;
            // }

            $('#checkout_last_electrice_kwh')[0].value = lastElectric;
            $('#checkout_last_water_meter')[0].value = lastWater;

            $('#checkout_network_fee')[0].value = netFee;
            $('#checkout_trash_fee')[0].value = trashFee;

            $('#checkout_apartment_id')[0].value = roomObj.apartment_id;
            $('#checkout_apartment_name')[0].value = roomObj.apartment_name;
            $('#checkout_contract_id')[0].value = roomObj.contract_id;
            $('#checkout_tenant_name')[0].value = roomObj.tenant_name;
            $('#checkout_user_name')[0].value = userName;

            currentEletrNode.change(function() {
                monthEletrFee = Math.round((parseInt(currentEletrNode[0].value, 10) - lastElectric) * everyKwhFee);
                $('#checkout_electrice_fee')[0].value = monthEletrFee;
                $('#checkout_total_other').html(parseInt(monthEletrFee, 10) + parseInt(waterFee, 10) + parseInt(netFee, 10) + parseInt(trashFee, 10));
            });

            currentWaterNode.change(function() {
                waterFee = Math.round((parseInt(currentWaterNode[0].value, 10) - lastWater) * waterMeterFee);
                $('#checkout_water_meter_fee')[0].value = waterFee;
                $('#checkout_water_fee_hidden')[0].value = waterFee;
                $('#checkout_total_other').html(parseInt(monthEletrFee, 10) + parseInt(waterFee, 10) + parseInt(netFee, 10) + parseInt(trashFee, 10));
            });


            $('#radio_month').click(function() {

                $('#checkout_water_fee')[0].value = waterFee;
                $('#checkout_water_fee_hidden')[0].value = waterFee;
                $('#checkout_network_fee')[0].value = netFee;
                $('#checkout_trash_fee')[0].value = trashFee;
                $('#checkout_total_other').html(parseInt(monthEletrFee, 10) + parseInt(waterFee, 10) + parseInt(netFee, 10) + parseInt(trashFee, 10));
            });
            $('#radio_day').click(function() {
                var date = new Date();
                var dayOfMonth = date.getDate();
                var waterFeeDay = Math.round((parseInt(waterFee, 10) / 30) * dayOfMonth);
                var netFeeDay = Math.round((parseInt(netFee, 10) / 30) * dayOfMonth);
                var trashFeeDay = Math.round((parseInt(trashFee, 10) / 30) * dayOfMonth);

                if (waterMode === '2') {
                    $('#checkout_network_fee')[0].value = netFeeDay;
                    $('#checkout_trash_fee')[0].value = trashFeeDay;
                    $('#checkout_water_fee')[0].value = waterFee;
                    $('#checkout_water_fee_hidden')[0].value = waterFee;
                    $('#checkout_total_other').html(waterFee + netFeeDay + trashFeeDay + parseInt(monthEletrFee, 10));

                } else {
                    $('#checkout_network_fee')[0].value = netFeeDay;
                    $('#checkout_trash_fee')[0].value = trashFeeDay;
                    $('#checkout_water_fee')[0].value = waterFeeDay;
                    $('#checkout_water_fee_hidden')[0].value = waterFeeDay;
                    $('#checkout_total_other').html(waterFeeDay + netFeeDay + trashFeeDay + parseInt(monthEletrFee, 10));

                }



            });

        }
    });
    $('#checkout_modal').modal();
}

// function showMonthFee(waterNode, waterFee, netNode, netFee, trashNode, trashFee) {

// }

// function showDaysFee() {

// }

function onChargeRent(apartmentName) {
    var roomObj = findDataByRoomName(dataObjs, apartmentName);
    $('#chargeMonthModalRoomName').html(apartmentName);
    var rentExpected = parseInt(roomObj.contract_deposit, 10) * parseInt(roomObj.contract_frequency, 10);
    var ownFeeNode = $('#charge_month_owe');
    var actualFeeNode = $('#charge_month_actual');
    actualFeeNode.change(function() {
        ownFeeNode[0].value = rentExpected - parseInt(actualFeeNode[0].value, 10);
    });

    $('#info_rent_name').html(roomObj.tenant_name);
    $('#info_rent_next_freq').html(roomObj.apartment_nextcharge_point);
    $('#info_rent_month_fee').html(roomObj.contract_month_price + '元');
    $('#info_rent_contract').html(roomObj.contract_endtime);

    $('#charge_month_expected')[0].value = rentExpected;

    $('#charge_month_apartment_id')[0].value = roomObj.apartment_id;
    $('#charge_month_contract_id')[0].value = roomObj.contract_id;
    $('#charge_month_apartment_name')[0].value = roomObj.apartment_name;
    $('#charge_month_tenant_name')[0].value = roomObj.tenant_name;
    $('#charge_month_user_name')[0].value = userName;

    $('#charge_month_fee_modal').modal();
}

function onChargeOwe(apartmentName) {
    var roomObj = findDataByRoomName(dataObjs, apartmentName);
    var lastOwe = roomObj.apartment_owe;
    var ownFeeNode = $('#charge_owe_current');
    var lastOweNode = $('#charge_owe_indebt');
    lastOweNode[0].value = lastOwe;
    var actualFeeNode = $('#charge_owe_actual');
    actualFeeNode.change(function() {
        ownFeeNode[0].value = parseInt(lastOwe, 10) - parseInt(actualFeeNode[0].value, 10);
    });

    // $('#charge_month_expected')[0].value = rentExpected;

    $('#charge_owe_apartment_id')[0].value = roomObj.apartment_id;
    $('#charge_owe_contract_id')[0].value = roomObj.contract_id;
    $('#charge_owe_apartment_name')[0].value = roomObj.apartment_name;
    $('#charge_owe_tenant_name')[0].value = roomObj.tenant_name;
    $('#charge_owe_user_name')[0].value = userName;

    $('#charge_owe_fee_modal').modal();
}

function onChargeOtherFee(apartmentName) {

    $('#charge_other_fee_electrice_fee')[0].value = "";
    var currentEletrNode = $('#charge_other_current_electrice_kwh');
    currentEletrNode[0].value = "";
    var currentWaterMeterNode = $('#charge_other_current_water_meter');
    currentWaterMeterNode[0].value = "";

    // var selectPermission = $('#modifyUserPermission');
    // selectPermission.get(0).selectedIndex = (userPermissionOld - 1);
    var date = new Date();
    var monthSelect = $('#charge_other_fee_charge_month');
    monthSelect.get(0).selectedIndex = date.getMonth();

    $('#chargeOtherModalRoomName').html(apartmentName);

    var roomObj = findDataByRoomName(dataObjs, apartmentName);
    var lastElectric = roomObj.apartment_electric_fee;
    var lastWaterMeter = roomObj.apartment_water_meter;
    var apartmentPersonNum = roomObj.apartment_person_num;
    var netFee;
    var waterSingle;
    var waterMulti;
    var waterFee;
    var waterMeterFee;
    var trashFee;
    var monthEletrFee;
    var everyKwhFee;

    $('#info_name').html(roomObj.tenant_name);
    $('#info_next_freq').html(roomObj.apartment_nextcharge_point);
    $('#info_month_fee').html(roomObj.contract_month_price + '元');
    $('#info_contract').html(roomObj.contract_endtime);

    $('#already_charged_other_fee_month').html(roomObj.apartment_create_other_month);

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
                        netFee = itemPrice;
                        break;
                    case "trash_fee":
                        trashFee = itemPrice;
                        break;
                    case "water_fee_single":
                        waterSingle = itemPrice;
                        break;
                    case "water_fee_multi":
                        waterMulti = itemPrice;
                        break;
                    case "water_meter_fee":
                        waterMeterFee = itemPrice;
                        break;
                    case "electric_fee":
                        everyKwhFee = itemPrice;
                        break;
                    default:
                        break;
                }
            }

            if (waterMode === '1') {
                $('#charge_water_meter_div').hide();
                if (apartmentPersonNum > 1) {
                    waterFee = parseInt(waterMulti, 10) * parseInt(apartmentPersonNum, 10);
                } else {
                    waterFee = waterSingle;
                }
                $('#charge_other_fee_water_fee')[0].value = waterFee;
                $('#charge_other_water_fee_hidden')[0].value = waterFee;
            } else if (waterMode === '2') {
                $('#charge_other_fee_fixed_water_div').hide();
                // waterFee = parseInt(waterMeterFee,10)*()
            }

            $('#charge_other_last_electrice_kwh')[0].value = lastElectric;
            $('#charge_other_last_water_meter')[0].value = lastWaterMeter;

            $('#charge_other_fee_network_fee')[0].value = netFee;
            $('#charge_other_fee_trash_fee')[0].value = trashFee;

            $('#charge_other_apartment_apartment_id')[0].value = roomObj.apartment_id;
            $('#charge_other_apartment_apartment_name')[0].value = roomObj.apartment_name;
            $('#charge_other_tenant_name')[0].value = roomObj.tenant_name;

            $('#charge_other_user_name')[0].value = userName;

            currentEletrNode.change(function() {
                monthEletrFee = Math.round((parseInt(currentEletrNode[0].value, 10) - lastElectric) * everyKwhFee);
                $('#charge_other_fee_electrice_fee')[0].value = monthEletrFee;
                $('#total_other').html(parseInt(monthEletrFee, 10) + parseInt(waterFee, 10) + parseInt(netFee, 10) + parseInt(trashFee, 10));
            });

            currentWaterMeterNode.change(function() {
                waterFee = Math.round((parseInt(currentWaterMeterNode[0].value, 10) - lastWaterMeter) * waterMeterFee);
                $('#charge_other_fee_water_meter_fee')[0].value = waterFee;
                $('#charge_other_water_fee_hidden')[0].value = waterFee;
                $('#total_other').html(parseInt(monthEletrFee, 10) + parseInt(waterFee, 10) + parseInt(netFee, 10) + parseInt(trashFee, 10));
            });
        }
    });

    $('#charge_other_fee_modal').modal();
}

function findDataByRoomName(allRoomData, roomName) {

    var roomData;
    for (var i = allRoomData.length - 1; i >= 0; i--) {
        if (allRoomData[i].apartment_name === roomName) {
            roomData = allRoomData[i];
            break;
        }
    }
    return roomData;
}

function generateMonthReminderList(monthRemindList, appendNode) {
    for (var i = 0; i < monthRemindList.length; i++) {
        var tenantObjH5Node = $('<h5 style="color:black">' + monthRemindList[i].apartment_name + '  ' + monthRemindList[i].tenant_name + '  ' + monthRemindList[i].tenant_phonenumber + '</h5>');
        tenantObjH5Node.appendTo(appendNode);
    }
}

function generateContractReminderList(contractRemindList, appendNode) {
    for (var i = 0; i < contractRemindList.length; i++) {
        var tenantObjH5Node = $('<h5 style="color:black">' + contractRemindList[i].apartment_name + '  ' + contractRemindList[i].tenant_name + '  ' + contractRemindList[i].tenant_phonenumber + '</h5>');
        tenantObjH5Node.appendTo(appendNode);
    }
}


$(document).ready(function() {

    userName = $.cookie('user_name');
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

    domainCode = $.cookie('domain_code');
    // console.log(domainCode);
    waterMode = $.cookie('domain_desc');

    var monthReminderListNode = $('#month_remind_list');
    $.ajax({
        type: "POST",
        url: "getall_TLT.action?domain_code=" + domainCode,
        success: function(data) {
            console.log(data);
            var objList = eval(data);
            generateMonthReminderList(objList, monthReminderListNode);
        }
    });
    var contractRemindList = $('#contract_remind_list');
    $.ajax({
        type: "POST",
        url: "getAll_CTL.action?domain_code=" + domainCode,
        success: function(data) {
            console.log("++++++++++++++++++++++" + data);
            var objList = eval(data);
            generateContractReminderList(objList, contractRemindList);
        }
    });

    $.ajax({
        type: "POST",
        url: "refesh_other_remind.action"
    });

    $.ajax({
        type: "POST",
        url: "refresh_monthfee_status.action"
    });

    smsSwitcherNodeValue = $('#sms_reminder_switcher').bootstrapSwitch('state');

    $.ajax({
        type: "POST",
        url: "getMessageSwitchStatus.action",
        success: function(data) {
            smsSwitcherValue = data;
            if (smsSwitcherValue === "on") {
                if (smsSwitcherNodeValue === false) {
                    $('#sms_reminder_switcher').bootstrapSwitch('toggleState');
                    $('#sms_reminder_switcher').bootstrapSwitch('setState', true);
                }

            } else {
                if (smsSwitcherNodeValue === true) {
                    $('#sms_reminder_switcher').bootstrapSwitch('toggleState');
                    $('#sms_reminder_switcher').bootstrapSwitch('setState', false);
                }

            }
        }
    });

    // $('#sms_reminder_switcher').on('switch-change', function(e, data) {
    //     // var $el = $(data.el),
    //     //     value = data.value;
    //     // console.log(e, $el, value);
    //     $.ajax({
    //         type: "POST",
    //         url: "modifyMessgeSwitchStatus.action"
    //     });

    // });

    $('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
        console.log(state);
        if (state === false) {
            $.ajax({
                type: "POST",
                url: "modifyMessgeSwitchStatus.action",
                dataType: "json",
                data: { "messageSwitch.start_on": "off" }
            });
        } else if (state === true) {
            $.ajax({
                type: "POST",
                url: "modifyMessgeSwitchStatus.action",
                dataType: "json",
                data: { "messageSwitch.start_on": "on" }
            });
        }

    });

    var allRoomDivNode = document.getElementById('all_room');

    $.ajax({
        type: "POST",
        url: "getAllRoomInfo.action",
        data: { domain_code: domainCode, user_permission: permission },
        success: function(msg) {
            console.log(msg);
            dataObjs = eval(msg);
            for (var i = 0; i < dataObjs.length; i++) {
                generateOneRoomCard(
                    allRoomDivNode,
                    dataObjs[i].apartment_name,
                    dataObjs[i].tenant_name,
                    dataObjs[i].tenant_phonenumber,
                    dataObjs[i].apartment_nextcharge_point,
                    dataObjs[i].apartment_status,
                    dataObjs[i].apartment_other_remind);
            }
        }
    });

    var checkin_month_price = $('#checkin_contract_month_price');
    var checkin_deposit = $('#checkin_contract_deposit');
    var checkin_frequency = $('#checkin_contract_frequency');
    var checkin_total = $('#checkin_total');
    var checkin_owe = $('#checkin_apartment_owe');
    var checkin_month_fee = $('#checkin_month_fee');
    var checkin_end_time = $('#checkin_contract_end');
    var checkin_start_time = $('#checkin_contract_start');
    var checkin_contract_current_frequency = $('#checkin_contract_current_frequency');
    var checkin_month_price_value;

    var checkin_user_name = $('#checkin_user_name');
    checkin_user_name[0].value = userName;

    checkin_month_price.change(function() {
        checkin_month_price_value = checkin_month_price[0].value;
        checkin_deposit[0].value = checkin_month_price_value;
    });

    checkin_frequency.change(function() {
        var monthValue = parseInt(checkin_month_price_value, 10);
        if (monthValue > 0) {
            checkin_total[0].value = parseInt(checkin_frequency[0].value, 10) * monthValue + parseInt(checkin_month_price_value, 10);
        }

    });

    checkin_frequency.blur(function() {
        var checkin_start_time_value = checkin_start_time[0].value;
        var checkin_end_time_value = checkin_end_time[0].value;
        if (checkin_start_time_value !== "" && checkin_end_time_value !== "" && checkin_frequency[0].value !== "") {
            $.ajax({
                type: "POST",
                url: "get_current_cycle.action",
                data: { "start_time": checkin_start_time_value, "end_time": checkin_end_time_value, "fequency": checkin_frequency[0].value },
                success: function(data) {
                    console.log(data);
                    checkin_contract_current_frequency[0].value = data;
                }
            });

        }
    });


    checkin_month_fee.change(function() {
        var oweFee = parseInt(checkin_total[0].value, 10) - parseInt(checkin_month_fee[0].value, 10);
        if (oweFee < 0) {
            checkin_owe[0].value = 0;
        } else {
            checkin_owe[0].value = oweFee;
        }
    });

    setInterval('refreshPage()', 1000 * 60 * 60 * 12);

    $("#checkin_form").validation({
        reqmark: false,
        icon: false
    });

    $("#checkinOK").on('click', function(event) {
        var name = $('#checkin_tenant_name')[0].value;
        var electricKwh = $('#checkin_apartment_electric_fee')[0].value;
        var waterMeter = $('#checkin_apartment_water_meter')[0].value;
        var startDate = $('#checkin_contract_start')[0].value;
        var endDate = $('#checkin_contract_end')[0].value;
        var freq = $('#checkin_contract_frequency_next')[0].value;

        var isCheckPass = false;
        if (waterMode === '1') {
            isCheckPass = (name !== '') && (electricKwh !== '') && (startDate !== '') && (endDate !== '') && (freq !== null);
        } else {
            isCheckPass = (name !== '') && (electricKwh !== '') && (startDate !== '') && (endDate !== '') && (freq !== null) && (waterMeter !== '');
        }

        if (!isCheckPass) {
            $('#checkin_alert_msg').show();
        }


        if ($("#checkin_form").valid('填写信息不完整') === false) {

            return false;
        }
    });



    setInterval('changeTime()', 1000);


});

function changeTime() {

    var dateSpanNode = $('#title_current_date');
    var currentDate = new Date();
    var currentDateStr = currentDate.toLocaleString();
    dateSpanNode.html(currentDateStr);
}

function refreshPage() {
    window.location.reload();
}
