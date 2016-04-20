function clean_form(fid){
    var $f = $(fid);
    if(fid=='#form_add_event'){
        $f.find('input[name=title]').val('');
        $f.find('input[name=start_date]').val('');
        $f.find('input[name=end_date]').val('');
        $f.find('input[name=start_time]').val('');
        $f.find('input[name=end_time]').val('');
        $f.find('input[name=description]').val('');
    }
}
$(document).on('submit', '#form_add_event', function(e){
    e.preventDefault();
    submit_form_add_event();
});
$(document).on('click', '#btn_submit_addform', function(e){
    e.preventDefault();
    var hr = $("#tabs_addforms").find('a.active').attr('href');
    if(hr=='#tab_add_event')submit_form_add_event();
});

function submit_form_add_event(){
    var data = {};
    $f = $("#form_add_event");
    data.data = getformdata($f);
    data.data.type = 'event';
    ajax('dash/add', data, function(data){
        if(data.type == 'success'){
            Materialize.toast(data.msg, 2000);
            close_add_modal('modal_add');
            clean_form('#form_add_event');
            interfaces[current_interface].load();
        }
    });
}
