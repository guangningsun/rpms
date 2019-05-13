function createSelectNode (itemArray,parentNode) {
     var selectNode = $('<select></select>');
     selectNode.addClass('input-sm');
     selectNode.addClass('form-control');
     selectNode.addClass('input-s-sm');
     selectNode.addClass('inline');
     var length=itemArray.length;
     for (var i = 0; i < length; i++) {
         var optionNode = $('<option></option>');
         optionNode.attr('value', i);
         optionNode.html(itemArray[i]);
         optionNode.appendTo(selectNode);
     };
     selectNode.appendTo(parentNode);
}

$(document).ready(function() {
    var tablePanelDivNode = document.getElementById('table_temp_panel');
    
    var tableTitle="Table Title"

    var drop_down_item_arr = new Array('item0','item1','item2','item3');
    var drop_down_item_html = '';
    var drop_down_item_html_arr_lenght = drop_down_item_arr.length;

    var table_header = '<header class="panel-heading h4">' + tableTitle + '</header>';
    $(tablePanelDivNode).append(table_header);

    //Table top bar div
    var tableTopDivNode = $('<div></div>');
    tableTopDivNode.addClass('row');
    tableTopDivNode.addClass('text-sm');
    tableTopDivNode.addClass('wrapper');
    tableTopDivNode.appendTo(tablePanelDivNode);

    //table select item div node
    var selectDivNode = $('<div></div>');
    selectDivNode.addClass('col-sm-5');
    selectDivNode.addClass('m-b-xs');
    selectDivNode.appendTo(tableTopDivNode);
    //generate select node
    createSelectNode(drop_down_item_arr,selectDivNode);
    //Apply button 
    var applyBtnNode = $('<button></button>');
    applyBtnNode.addClass('btn');
    applyBtnNode.addClass('btn-sm');
    applyBtnNode.addClass('btn-white');
    applyBtnNode.html('Apply');
    applyBtnNode.appendTo(selectDivNode);

    //catagory in the middle
    var cataOptionGroupParentDivNode = $('<div class="col-sm-4 m-b-xs" ></div>');
    var cataOptionGroupDivNode = $('<div class="btn-group" data-toggle="buttons"></div>');
    var cataLabel1 = $('<label class="btn btn-sm btn-white active"></label>');
    var cataLabel1Input = $('<input type="radio" name="options" id="option1"></input>');
    var cata1 = 'Cata1';
    var cataLabel2 = $('<label class="btn btn-sm btn-white"></label>');
    var cataLabel2Input = $('<input type="radio" name="options" id="option2"></input>');
    var cata2 = 'Cata2';
    var cataLabel3 = $('<label class="btn btn-sm btn-white"></label>');
    var cataLabel3Input = $('<input type="radio" name="options" id="option3"></input>');
    var cata3 = 'Cata3';
    //assemble nodes
    cataLabel1.html(cata1);
    cataLabel1Input.appendTo(cataLabel1);
    cataLabel2.html(cata2);
    cataLabel2Input.appendTo(cataLabel2);
    cataLabel3.html(cata3);
    cataLabel3Input.appendTo(cataLabel3);
    cataLabel1.appendTo(cataOptionGroupDivNode);
    cataLabel2.appendTo(cataOptionGroupDivNode);
    cataLabel3.appendTo(cataOptionGroupDivNode);
    cataOptionGroupDivNode.appendTo(cataOptionGroupParentDivNode);
    cataOptionGroupParentDivNode.appendTo(tableTopDivNode);

    // var cataOptionHtml ='<div class="col-sm-4 m-b-xs">\
    //                         <div class="btn-group" data-toggle="buttons">\
    //                             <label class="btn btn-sm btn-white active">\
    //                                 <input type="radio" name="options" id="option1">Cata1</label>\
    //                             <label class="btn btn-sm btn-white">\
    //                                 <input type="radio" name="options" id="option2">Cata2</label>\
    //                             <label class="btn btn-sm btn-white">\
    //                                 <input type="radio" name="options" id="option2">Cata3</label>\
    //                         </div>\
    //                     </div>'
    

    //search feature nodes
    var searchPanelParentDivNode = $('<div class="col-sm-3"></div>');
    var searchPanelDiv = $('<div class="input-group"></div>');
    var searchPanelInputPlaceHolder = 'Search';
    var searchPanelInputNode = $('<input type="text" class="input-sm form-control"></input>');
    searchPanelInputNode.attr('placeholder', searchPanelInputPlaceHolder);
    var searchPanelSpanNode = $('<span class="input-group-btn"></span>');
    var searchPanelBtnNode = $('<button class="btn btn-sm btn-white" type="button"></button>');
    var searchPanelBtnStr = 'Go';
    searchPanelBtnNode.html(searchPanelBtnStr);
    //assemble nodes
    searchPanelInputNode.appendTo(searchPanelDiv)
    searchPanelBtnNode.appendTo(searchPanelSpanNode);
    searchPanelSpanNode.appendTo(searchPanelDiv);
    searchPanelDiv.appendTo(searchPanelParentDivNode);
    searchPanelParentDivNode.appendTo(tableTopDivNode);

    // var searchPanel = '<div class="col-sm-3">\
    //                         <div class="input-group">\
    //                             <input type="text" class="input-sm form-control" placeholder="Search">\
    //                             <span class="input-group-btn">\
    //                                 <button class="btn btn-sm btn-white" type="button">Go</button>\
    //                             </span>\
    //                         </div>\
    //                     </div>'


    // $(tableTopDivNode).append(cataOptionHtml);
    // $(tableTopDivNode).append(searchPanel);

    //table content nodes (column names)
    var tableColumnNameArray = new Array('Col1','Col2','Col3','Col4');
    var tableContainerDivNode = $('<div class="table-responsive"></div>');
    var tableNode = $('<table></table>');
    tableNode.addClass('table');
    tableNode.addClass('table-hover');
    tableNode.addClass('b-t');
    tableNode.addClass('text-sm');
    var tableColumnThreadNode = $('<thead></thead>');
    var tableColumnTrNode = $('<tr></tr>');
    // var tableColumnCheckboxThNode = $ ('<th width="20"><input type="checkbox"></th>');
    // var tableColumnNameThNodeArray = new Array();
    for (var i = 0; i < tableColumnNameArray.length; i++) {
        var tableColumnNameThNode = $('<th ></th>');
        tableColumnNameThNode.html(tableColumnNameArray[i]);
        tableColumnNameThNode.appendTo(tableColumnTrNode);
    };
    var tableColumnOptionThNode = $('<th width="30"></th>');
    tableColumnOptionThNode.appendTo(tableColumnTrNode);
    tableColumnTrNode.appendTo(tableColumnThreadNode);
    tableColumnThreadNode.appendTo(tableNode);
    tableNode.appendTo(tableContainerDivNode);
    tableContainerDivNode.appendTo(tablePanelDivNode);

    //create table content nodes
    var tableDataArr


  //   for (var i = 0; i < drop_down_item_html_arr_lenght; i++) {
		// drop_down_item_html += '<option value="' + i + '">' + drop_down_item_arr[i] + '</option>';
  //   };
  //   alert(drop_down_item_html);
  //   drop_down_item_arr = '<select class="input-sm form-control input-s-sm inline">' + drop_down_item_html + '</select>';
  //   alert(drop_down_item_arr);
  //   var table_temp_html = '';

  // 	table_temp_html = '<header class="panel-heading"> Table Title</header> \
  //   <div class="row text-sm wrapper">\
  //       <div class="col-sm-5 m-b-xs">'
		// + drop_down_item_html
		// + '<button class="btn btn-sm btn-white">Apply</button>\
  //       </div>\
  //       <div class="col-sm-4 m-b-xs">\
  //           <div class="btn-group" data-toggle="buttons">\
  //               <label class="btn btn-sm btn-white active">\
  //                   <input type="radio" name="options" id="option1">Cata1</label>\
  //               <label class="btn btn-sm btn-white">\
  //                   <input type="radio" name="options" id="option2">Cata2</label>\
  //               <label class="btn btn-sm btn-white">\
  //                   <input type="radio" name="options" id="option2">Cata3</label>\
  //           </div>\
  //       </div>\
  //       <div class="col-sm-3">\
  //           <div class="input-group">\
  //               <input type="text" class="input-sm form-control" placeholder="Search">\
  //               <span class="input-group-btn">\
  //                   <button class="btn btn-sm btn-white" type="button">Go</button>\
  //               </span>\
  //           </div>\
  //       </div>\
  //   </div>'
    // <div class=\"table-responsive\">
    //     <table class=\"table table-striped b-t text-sm\">
    //         <thead>  
    //             <tr>
    //                 <th width=\"20\">
    //                     <input type=\"checkbox\">
    //                 </th>
    //                 <th class=\"th-sortable\" data-toggle=\"class\">col1
    //                     <span class=\"th-sort\">
    //                         <i class=\"icon-sort-down text\"></i> 
    //                         <i class=\"icon-sort-up text-active\"></i> 
    //                         <i class=\"icon-sort\"></i> 
    //                     </span>
    //                 </th>
    //                 <th>col2</th>
    //                 <th>col3</th>
    //                 <th width=\"30\"></th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             <tr>
    //                 <td>
    //                     <input type=\"checkbox\" name=\"post[]\" value=\"2\">
    //                 </td>
    //                 <td>Idrawfast</td>
    //                 <td>4c</td>
    //                 <td>Jul 25, 2013</td>
    //                 <td><a href=\"#\" class=\"active\" data-toggle=\"class\"><i
    //                         class=\"icon-ok text-success text-active\"></i><i
    //                         class=\"icon-remove text-danger text\"></i></a></td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <input type=\"checkbox\" name=\"post[]\" value=\"3\">
    //                 </td>
    //                 <td>Formasa</td>
    //                 <td>8c</td>
    //                 <td>Jul 22, 2013</td>
    //                 <td><a href=\"#\" data-toggle=\"class\"><i
    //                         class=\"icon-ok text-success text-active\"></i><i
    //                         class=\"icon-remove text-danger text\"></i></a></td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <input type=\"checkbox\" name=\"post[]\" value=\"4\">
    //                 </td>
    //                 <td>Avatar system</td>
    //                 <td>15c</td>
    //                 <td>Jul 15, 2013</td>
    //                 <td><a href=\"#\" class=\"active\" data-toggle=\"class\"><i
    //                         class=\"icon-ok text-success text-active\"></i><i
    //                         class=\"icon-remove text-danger text\"></i></a></td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <input type=\"checkbox\" name=\"post[]\" value=\"4\">
    //                 </td>
    //                 <td>Throwdown</td>
    //                 <td>4c</td>
    //                 <td>Jul 11, 2013</td>
    //                 <td><a href=\"#\" class=\"active\" data-toggle=\"class\"><i
    //                         class=\"icon-ok text-success text-active\"></i><i
    //                         class=\"icon-remove text-danger text\"></i></a></td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <input type=\"checkbox\" name=\"post[]\" value=\"5\">
    //                 </td>
    //                 <td>Idrawfast</td>
    //                 <td>4c</td>
    //                 <td>Jul 7, 2013</td>
    //                 <td><a href=\"#\" class=\"active\" data-toggle=\"class\"><i
    //                         class=\"icon-ok text-success text-active\"></i><i
    //                         class=\"icon-remove text-danger text\"></i></a></td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <input type=\"checkbox\" name=\"post[]\" value=\"6\">
    //                 </td>
    //                 <td>Formasa</td>
    //                 <td>8c</td>
    //                 <td>Jul 3, 2013</td>
    //                 <td><a href=\"#\" class=\"active\" data-toggle=\"class\"><i
    //                         class=\"icon-ok text-success text-active\"></i><i
    //                         class=\"icon-remove text-danger text\"></i></a></td>
    //             </tr>

    //         </tbody>
    //     </table>
    // </div>
    // <footer class=\"panel-footer\">
    //     <div class=\"row\">
    //         <div class=\"col-sm-4 hidden-xs\">
    //             <select class=\"input-sm form-control input-s-sm inline\">
    //                 <option value=\"0\">Bulk action</option>
    //                 <option value=\"1\">Delete selected</option>
    //                 <option value=\"2\">Bulk edit</option>
    //                 <option value=\"3\">Export</option>
    //             </select>
    //             <button class=\"btn btn-sm btn-white\">Apply</button>
    //         </div>
    //         <div class=\"col-sm-4 text-center\">
    //             <small class=\"text-muted inline m-t-sm m-b-sm\">showing 20-30
    //                 of 50 items
    //             </small>
    //         </div>
    //         <div class=\"col-sm-4 text-right text-center-xs\">
    //             <ul class=\"pagination pagination-sm m-t-none m-b-none\">
    //                 <li><a href=\"#\"><i class=\"icon-chevron-left\"></i></a>
    //                 </li>
    //                 <li><a href=\"#\">1</a></li>
    //                 <li><a href=\"#\">2</a></li>
    //                 <li><a href=\"#\">3</a></li>
    //                 <li><a href=\"#\">4</a></li>
    //                 <li><a href=\"#\">5</a></li>
    //                 <li><a href=\"#\"><i class=\"icon-chevron-right\"></i></a>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // </footer>"


    // alert(table_temp_html);

    // tablePanelDivNode.innerHTML = table_temp_html;
});