var form_add_event_edit_handler = {date:0,time:0};
function render_colors(){
    var material_colors = "#F44336;#9C27B0;#673AB7;#3F51B5;#2196F3;#00BCD4;#009688;#4CAF50;#8BC34A;#FFEB3B;#FF9800;#FF5722;#795548;#9E9E9E".split(';');
    var colrs="";
    $(material_colors).each(function(i,col){
        colrs+='<div class="color_selector" style="background:'+col+'"></div>';
    });
    return colrs;
}
function open_add_modal(mid){
    if(mid=='modal_add'){
        $('#modal_add').openModal();
        $($("#modal_add ul.tabs a")[0]).trigger( "click" );
        form_add_event_edit_handler = {date:0,time:0};
        $('#modal_add input[name=title]').focus();
    }
}
function close_add_modal(mid){
    if(mid=='modal_add'){
        $('#modal_add').closeModal();
    }
}
function updatetoptime(){
    var cd = new Date();
    $("#toptime .time").html(pad(2, cd.getHours().toString(), '0')+':'+pad(2, cd.getMinutes().toString(), '0')+':'+pad(2, cd.getSeconds().toString(), '0'));
    if(cd.getMinutes() == 0)$("#toptime .date").html(jsday2fulldatestr(0));
}
$(document).ready(function(){
    $(".colors_selector_field").html(render_colors());

    $("#toptime .date").html(jsday2fulldatestr(0, 1));
    updatetoptime();
    setInterval(updatetoptime, 1000);
});
$(document).on('click', '.simple_show_anddel', function(e){
    e.preventDefault();
    $(this).hide(0);
    $($(this).attr('data-target')).attr('style', 'display:block!important');
    $($(this).attr('data-target')).slideDown(200);
});
$(document).on('click', '#btn_add', function(e){
    e.preventDefault();
    $("#form_add_event [name=start_date]").val('');
    $("#form_add_event [name=end_date]").val('');
    open_add_modal('modal_add');
});
$(document).on('input', '#form_add_event .gr1 input[name=start_date]', function(){
    var $el = $('#form_add_event .gr2 input[name=end_date]');
    if(!form_add_event_edit_handler.date){
        $el.val($(this).val());
    }
});
$(document).on('input', '#form_add_event .gr1 input[name=start_time]', function(){
    var $el = $('#form_add_event .gr2 input[name=end_time]');
    if(!form_add_event_edit_handler.time){
        $el.val($(this).val());
    }
});
$(document).on('input', '#form_add_event .gr2 input[name=end_date]', function(){form_add_event_edit_handler.date=1;});
$(document).on('input', '#form_add_event .gr2 input[name=end_time]', function(){form_add_event_edit_handler.time=1;});
