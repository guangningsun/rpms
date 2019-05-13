function generateRadio(parentNode, domainName, domainCode, isCheck) {
    var checkBoxLabelNode = $('<label class="checkbox-inline"></label>');
    var inputNode;
    if (isCheck) {
        inputNode = $('<input type="radio" style="marginLeft:5px;" name="user.user_permission" checked id="radio_' + domainName + '" value="' + domainCode + '"></input>');
    } else {
        inputNode = $('<input type="radio" style="marginLeft:5px;" name="user.user_permission" id="radio_' + domainName + '" value="' + domainCode + '"></input>');
    }
    checkBoxLabelNode.appendTo(parentNode);
    inputNode.appendTo(checkBoxLabelNode);
    checkBoxLabelNode.append(domainName);
}

$(document).ready(function() {
    var radioDomainParentNode = $('#radio_domain');

    $.ajax({
        type: "POST",
        url: "getAllDomain.action",
        success: function(data) {
            console.log(data);
            var domainObjs = eval(data);
            for (var i = 0; i < domainObjs.length; i++) {
                if (i === 0) {
                    generateRadio(radioDomainParentNode, domainObjs[i].domain_name, domainObjs[i].domain_code, true);
                }else {
                    generateRadio(radioDomainParentNode, domainObjs[i].domain_name, domainObjs[i].domain_code, false);
                }
            }
        }
    });
});

// <label class="checkbox-inline">
//    <input type="radio" name="optionsRadios" id="radio_month" value="byMonth" checked>按月
// </label>
// 
// <label class="checkbox-inline">
//     <input type="radio" name="optionsRadios" id="radio_day" value="byDay"> 按天
// </label>
