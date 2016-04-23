function clean_form(fid){
    var $f = $(fid);
    if(fid=='#form_add_event'){
        $f.find('input[name=title]').val('');
        $f.find('input[name=start_date]').val('');
        $f.find('input[name=end_date]').val('');
        $f.find('input[name=start_time]').val('');
        $f.find('input[name=end_time]').val('');
        $f.find('input[name=location]').val('');
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
$(document).on('click', "a[href='#modal_list']", function(){
    setTimeout(function(){
        $("#todo_add_item").focus();
    },20);
});
var added_td = 0;
$(document).on('change', '.todolist input[type=checkbox]', function(){
    var tmp_this = this;
    setTimeout(function(){
        var tmp_el = $(tmp_this).parent().detach();
        if($(tmp_this).is(':checked')){
            $('.doned').prepend(tmp_el);
            form_todo('on', $(tmp_this).data('tdid'));
        }else{
            $('.waited').append(tmp_el);
            form_todo('off', $(tmp_this).data('tdid'));
        }
    }, 200);

});
$(document).on('submit', '#todo_add_form', function(e){
    e.preventDefault();
    var itm = $("#todo_add_item").val();
    $("#todo_add_item").val('');
    $(".todolist .waited").prepend('<div class="item"><input type="checkbox" id="element_'+(added_td).toString()+'" /><label for="element_'+(added_td).toString()+'">'+htmlentities(itm)+'</label></div>');
    form_todo('add', itm, '#element_'+(added_td).toString());
    added_td++;
})

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
function form_todo(dot, elem, domel){
    var data = {};
    data.elem = elem;
    data.do = dot;
    ajax('dash/todo', data, function(res){
        if(data.do == 'add'){
            console.log(domel, res.tid);
            $(domel).data('tdid', res.tdid);
        }
    });
}
