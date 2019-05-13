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

    var domianCode = $.cookie('domain_code');

    var $table = $('#table'),
        $remove = $('#remove'),
        selections = [];

    $(window).resize(function() {
        $table.bootstrapTable('resetView', {
            // height: getHeight()
        });
    });


    var columns = [];

    columns.push({
        field: 'tenant_name',
        title: '租客',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'apartment_name',
        title: '房间号',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'electric_fee',
        title: '电费',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'water_fee',
        title: '水费',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'net_fee',
        title: '网费',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'trash_fee',
        title: '生活垃圾费',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'month_fee',
        title: '交租金额',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'user_name',
        title: '操作员',
        align: 'center',
        valign: 'middle',
        sortable: true
    });
    columns.push({
        field: 'create_time',
        title: '时间',
        align: 'center',
        valign: 'middle',
        sortable: true
    });


    $('#table').bootstrapTable('destroy').bootstrapTable({
        columns: columns
    });
    ////////////////////////////////////////////////////////////
    var checkinNum, total, blank;
    var config;

    $.ajax({
        url: "get_check_in_ratio.action",
        type: "POST",
        dataType: "json",
        data: { "domain_id": domianCode },
        success: function(data) {
            var checkinRatioObjs = eval(data);
            for (var i = checkinRatioObjs.length - 1; i >= 0; i--) {
                console.log(checkinRatioObjs[i]);
                if (checkinRatioObjs[i].blank_number !== undefined) {
                    blank = checkinRatioObjs[i].blank_number;
                    continue;
                }
                if (checkinRatioObjs[i].check_in_number !== undefined) {
                    checkinNum = checkinRatioObjs[i].check_in_number;
                    continue;
                }
                if (checkinRatioObjs[i].total !== undefined) {
                    total = checkinRatioObjs[i].total;
                    continue;
                }
            }
            var checkinPercentage = Math.round(checkinNum/total * 100);
            var blankPercentage = Math.round(blank/total * 100);
            console.log('percentage'+ checkinPercentage + blankPercentage);
            config = {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [
                            checkinPercentage,
                            blankPercentage
                        ],
                        backgroundColor: [
                            "#70D815",
                            "#D4DCC4"
                        ]
                    }],
                    labels: [
                        "已入住",
                        "未入住"
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'top',
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                }
            };
            var ctx = document.getElementById("myPieChart").getContext("2d");
            window.myDoughnut = new Chart(ctx, config);
        }
    });

    ///////////////////////////////////////////////////////
    var eachMonthTotalArray;
    var config2;
    $.ajax({
        url: "get_charge_statistics.action",
        type: "POST",
        dataType: "json",
        success: function(data) {
            console.log(data);
            eachMonthTotalArray = eval(data);
            config2 = {
                type: 'line',
                data: {
                    labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", ],
                    datasets: [{
                        label: "每月收费总额统计",
                        data: eachMonthTotalArray
                    }]
                },
                options: {
                    responsive: true,
                    tooltips: {
                        mode: 'label'
                    },
                    hover: {
                        mode: 'dataset'
                    },

                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                show: true,
                                labelString: '月份'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                show: true,
                                labelString: '元',
                            },
                            ticks: {
                                suggestedMin: 0
                            }
                        }]
                    }
                }
            };

            $.each(config2.data.datasets, function(i, dataset) {
                dataset.borderColor = 'rgba(35,0,162,0.4)';
                dataset.backgroundColor = 'rgba(7,126,236,0.6)';
                dataset.pointBorderColor = 'rgba(19,171,0,0.6)';
                dataset.pointBackgroundColor = 'rgba(251,249,0,0.4)';
                dataset.pointBorderWidth = 1;
            });

            var ctx = document.getElementById("canvas").getContext("2d");
            window.myLine = new Chart(ctx, config2);
        }
    });




});
