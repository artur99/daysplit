var form_add_event_edit_handler = {date:0,time:0};
function render_colors(){
    // var material_colors = "#F44336;#9C27B0;#673AB7;#3F51B5;#2196F3;#00BCD4;#009688;#4CAF50;#8BC34A;#FFEB3B;#FF9800;#FF5722;#795548;#9E9E9E".split(';');
    // var colrs="";
    // $(material_colors).each(function(i,col){
    //     colrs+='<div class="color_selector" style="background:'+col+'"></div>';
    // });
    // return colrs;

}
function rand_colors(form){
    var color_els = $(form+" .colorbox>div");
    var sel = color_els[Math.floor(Math.random()*color_els.length)];
    $(color_els).removeClass('selected');
    $(form+" input[type=hidden][name=color]").val($(sel).attr('class'));
    $(sel).addClass('selected');
}
function init_colors(){
    $color_els = $(".colorbox>div");
    if($color_els.length){
        $color_els.click(function(e){
            e.preventDefault();
            $color_els.removeClass("selected");
            $(this).parent().parent().find("input[type=hidden][name=color]").val($(this).attr('class'));
            $(this).addClass("selected");
        });
    }
}
function open_add_modal(mid){
    if(mid=='modal_add'){
        $('#modal_add').openModal();
        $($("#modal_add ul.tabs a")[0]).trigger( "click" );
        form_add_event_edit_handler = {date:0,time:0};
        $('#modal_add input[name=title]').focus();
    }
}
function close_modal(mid){
    if(mid=='modal_add'){
        $('#modal_add').closeModal();
    }else if(mid=='modal_edit'){
        $('#modal_edit_event').closeModal();
    }
}
function updatetoptime(){
    var cd = new Date();
    $("#toptime .time").html(pad(2, cd.getHours().toString(), '0')+':'+pad(2, cd.getMinutes().toString(), '0')+':'+pad(2, cd.getSeconds().toString(), '0'));
    if(cd.getMinutes() == 0)$("#toptime .date").html(jsday2fulldatestr(0));
}
function open_edit_event_modal(pid){
    $("#form_edit_event").find('.editor_map').attr('src', 'about:blank');
    $("#modal_edit_event").openModal();
    $("#modal_edit_event").addClass('loading');
    ajax('dash/get/event', {period_id: pid}, function(data){
        if(data.name.length==0)data.name = data.title;
        $("#form_edit_event").find('#inp_edit_event_title').val(data.name);
        $("#form_edit_event").find('label[for=inp_edit_event_title]').addClass('active');
        $("#form_edit_event").find('input[name=start_date]').val(jsday2datestr(date2jsday(data.sdate)));
        $("#form_edit_event").find('input[name=end_date]').val(jsday2datestr(date2jsday(data.edate)));
        $("#form_edit_event").find('input[name=start_time]').val(time2timestr(data.stime));
        $("#form_edit_event").find('input[name=end_time]').val(time2timestr(data.etime));
        $("#form_edit_event").find('input[name=location]').val(data.location);
        $("#form_edit_event").find('.colorbox>div').removeClass('selected');
        $("#form_edit_event").find('.colorbox').find('.'+data.color).addClass('selected');
        $("#form_edit_event").find('.colorbox').parent().find('input[type=hidden][name=color]').val(data.color);
        $("#form_edit_event").find('#inp_edit_event_desc').val(data.description);
        $("#form_edit_event").find('#inp_edit_event_desc').trigger('autoresize');
        if(data.description.length>0){
            $("#form_edit_event").find('label[for=inp_edit_event_desc]').addClass('active');
        }
        if(data.location.trim().length>0){
            $("#form_edit_event").find('label[for=inp_edit_event_location]').addClass('active');
            $("#form_edit_event").find('.editor_map').attr('src', 'https://www.google.com/maps/embed/v1/place?key='+googleapikey+'&q='+encodeURI(data.location));
            $("#form_edit_event").find('.editor_map').show();
        }else{
            $("#form_edit_event").find('.editor_map').hide();
        }
        $("#form_edit_event").find('input[name=period_update_id]').val(data.id);
        $("#modal_edit_event").removeClass('loading');
        $("#form_edit_event").find('#inp_edit_event_title').focus();
    });
}
function save_settings(){
    var fid = '#form_settings';
    var dt = getformdata(fid);
    ajax('dash/settings', {data:dt}, function(res){
        $(fid+" input").removeClass('invalid');
        $(fid+" input+label").attr('data-error', '');
        if(typeof res.err != 'undefined'){
            $.each(res.err, function(i,el){
                $(fid+" input[name="+i+"]").addClass('invalid');
                $(fid+" input[name="+i+"]+label").attr('data-error', el);
            });
        }else{
            $("#modal_settings").closeModal();
            if(typeof res.success != 'undefined') Materialize.toast(res.success.text, 2000);
        }
        console.log(res);
    });
}
$(document).ready(function(){
    init_colors();

    $("#toptime .date").html(jsday2fulldatestr(0, 1));
    updatetoptime();
    setInterval(updatetoptime, 1000);
});
$(document).on('click', '.simple_show_anddel', function(e){
    e.preventDefault();
    $(this).hide(0);
    $($(this).attr('data-target')).attr('style', 'display:block!important');
    var iftxa = $($(this).attr('data-target')).find("textarea");
    if(iftxa.length) $(iftxa).focus();
    $($(this).attr('data-target')).slideDown(200);
});
$(document).on('click', '#btn_add', function(e){
    e.preventDefault();
    rand_colors("#form_add_event");
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

document.addEventListener('keyup', function(e){
    if (e.altKey && e.keyCode == "A".charCodeAt(0)) {
        rand_colors("#form_add_event");
        open_add_modal('modal_add');
    }
}, false);

function movetodatefromin(){
    var val = picker1.get('highlight');
    var dt = val.obj;
    var dtnow = new Date();
    dtnow.setHours(0);
    dtnow.setMinutes(0);
    dtnow.setSeconds(0);
    var dif = dt.getTime() - dtnow.getTime();
    var cday = Math.round(dif/1000/60/60/24);
    current_day = cday;
    interfaces[current_interface].load();
}
$(document).on('click', '#btn_calendar', function(e){
    e.preventDefault();
    $("#dateinput_mover").click().click();
});
$(document).on('click', '#btn_submit_settingsform', function(e){e.preventDefault();save_settings();});
$(document).on('submit', '#form_settings', function(e){e.preventDefault();save_settings();});
