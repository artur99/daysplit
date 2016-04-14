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
        alert(data);
    });
}
