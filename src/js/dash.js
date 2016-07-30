var form_add_event_edit_handler = {date:0,time:0};

function open_add_modal(mid){
    if(mid=='modal_add'){
        $('#modal_add').openModal();
        $($("#modal_add ul.tabs a")[0]).trigger( "click" );
        form_add_event_edit_handler = {date:0,time:0};
        $('#modal_add input[name=title]').focus();
    }
}

function updatetoptime(){
    var cd = new Date();
    $("#toptime .time").html(pad(2, cd.getHours().toString(), '0')+':'+pad(2, cd.getMinutes().toString(), '0')+':'+pad(2, cd.getSeconds().toString(), '0'));
    if(cd.getMinutes() == 0)$("#toptime .date").html(jsday2fulldatestr(0));
}
function open_edit_event_modal(pid){
    clean_form('#form_edit_event');
    $("#form_edit_event").find('.editor_map').attr('src', 'about:blank');
    $("#modal_edit_event").openModal();
    $("#modal_edit_event").addClass('loading');
    ajax('dash/get/event', {period_id: pid}, function(data, resptype){
        if(resptype=='error'){
            Materialize.toast("A apărut o eroare, te rugăm să încerci din nou", 3000);
            $("#modal_edit_event").removeClass('loading');
            close_modal("modal_edit_event");
            return;
        }
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
        if(data.description.length){
            $("#form_edit_event").find('label[for=inp_edit_event_desc]').addClass('active');
        }
        if(data.location.trim().length){
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
    $("#modal_settings").addClass('loading');
    ajax('dash/settings', {data:dt}, function(res, resptype){
        if(resptype=='error'){
            Materialize.toast("A apărut o eroare, te rugăm să încerci din nou", 3000);
            $("#modal_settings").removeClass('loading');
            return;
        }
        $(fid+" input").removeClass('invalid');
        $(fid+" input+label").attr('data-error', '');
        if(typeof res.err != 'undefined'){
            $.each(res.err, function(i,el){
                $(fid+" input[name="+i+"]").addClass('invalid');
                $(fid+" input[name="+i+"]+label").attr('data-error', el);
            });
        }else{
            close_modal("modal_settings");
            if(typeof res.success != 'undefined') Materialize.toast(res.success.text, 2000);
        }
        $("#modal_settings").removeClass('loading');
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
