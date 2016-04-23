function clean_form(fid){
    var $f = $(fid);
    if(fid=='#form_add_event'){
        $f.find('input[name=title]').val('');
        $f.find('input[name=start_date]').val('');
        $f.find('input[name=end_date]').val('');
        $f.find('input[name=start_time]').val('');
        $f.find('input[name=end_time]').val('');
        $f.find('textarea[name=description]').val('');
    }
}
$(document).on('click', '#btn_submit_delform', function(e){e.preventDefault();if(window.confirm("Sigur ștergeți?")) submit_form_event('del');});
$(document).on('submit', '#form_edit_event', function(e){e.preventDefault();submit_form_event('edit');});
$(document).on('click', '#btn_submit_editform', function(e){e.preventDefault();submit_form_event('edit');});
$(document).on('submit', '#form_add_event', function(e){e.preventDefault();submit_form_event('add');});
$(document).on('click', '#btn_submit_addform', function(e){
    e.preventDefault();
    var hr = $("#tabs_addforms").find('a.active').attr('href');
    if(hr=='#tab_add_event')submit_form_event('add');
});

function submit_form_event(type){
    var data = {};
    if(type=='edit') $f = $("#form_edit_event");
    else if(type=='add') $f = $("#form_add_event");
    else if(type=='del') $f = $("#form_edit_event");
    data.data = getformdata($f);
    data.data.type = 'event';

    if(type=="del"){
        data.data.period_delete_id = data.data.period_update_id;
        data.data.period_update_id = undefined;
    }

    ajax('dash/event', data, function(data){
        if(data.type == 'success'){
            Materialize.toast(data.msg, 2000);
            if(type=='add'){
                close_modal('modal_add');
                clean_form('#form_add_event');
            } close_modal('modal_edit');
            interfaces[current_interface].load();
        }
    });
}
