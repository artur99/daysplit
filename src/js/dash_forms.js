$(document).on('click', '#btn_submit_delform', function(e){e.preventDefault();if(window.confirm("Sigur ștergeți?")) submit_form_event('del');});
$(document).on('submit', '#form_edit_event', function(e){e.preventDefault();submit_form_event('edit');});
$(document).on('click', '#btn_submit_editform', function(e){e.preventDefault();submit_form_event('edit');});
$(document).on('submit', '#form_add_event', function(e){e.preventDefault();submit_form_event('add');});
$(document).on('click', '#btn_submit_addform', function(e){
    e.preventDefault();
    /*var hr = $("#tabs_addforms").find('a.active').attr('href');
    if(hr=='#tab_add_event')*/
    submit_form_event('add');
});
var added_td = 0;
$(document).on('click', "a[href='#modal_list']", function(){
    $("#modal_list").addClass('loading');
    ajax('dash/get/todo',{},function(data, resptype){
        if(resptype=='error'){
            Materialize.toast("A apărut o eroare, te rugăm să încerci din nou", 3000);
            $("#modal_list").removeClass('loading');
            close_modal('modal_list');
            return;
        }
        $('.waited').html('');
        $('.doned').html('');
        $.each(data, function(i,el){
            if(el.status == 0){
                //nebifat
                var el_cont = ('<div class="item"><input type="checkbox" data-tdid="'+el.id+'" id="tdelement_'+added_td.toString()+'"><label for="tdelement_'+added_td.toString()+'">'+htmlentities(el.text)+'</label></div>');
                $('.waited').append(el_cont);
            }else{
                var el_cont = ('<div class="item"><input type="checkbox" data-tdid="'+el.id+'" id="tdelement_'+added_td.toString()+'" checked><label for="tdelement_'+added_td.toString()+'">'+htmlentities(el.text)+'</label></div>');
                $('.doned').append(el_cont);
            }
            added_td++;
        });
        $("#modal_list").removeClass('loading');
    });
    setTimeout(function(){
        $("#todo_add_item").focus();
    },20);
});
$(document).on('click', "a[href='#modal_settings']", function(){
    $("#modal_settings").addClass('loading');
    ajax('dash/get/settings',{},function(data, resptype){
        if(resptype=='error'){
            Materialize.toast("A apărut o eroare, te rugăm să încerci din nou", 3000);
            $("#modal_settings").removeClass('loading');
            close_modal('modal_settings');
            return;
        }
        $("#form_settings #settings_name").val(data.name);
        $("#form_settings #settings_email").val(data.email);
        if(data.name.length) $("#form_settings label[for=settings_name]").addClass('active');
        if(data.email.length) $("#form_settings label[for=settings_email]").addClass('active');
        $("#modal_settings").removeClass('loading');
    });
    setTimeout(function(){
        $("#todo_add_item").focus();
    },20);
});
$(document).on('change', '.todolist input[type=checkbox]', function(){
    var tmp_this = this;
    var elid = $(tmp_this).data('tdid');
    setTimeout(function(){
        var tmp_el;
        $(tmp_this).parent().slideUp(100);
        setTimeout(function(){
            tmp_el = $(tmp_this).parent().detach();
        },100)
        setTimeout(function(){
            if($(tmp_this).is(':checked')){
                $('.doned').prepend(tmp_el);
                form_todo('on', $(tmp_this).data('tdid'));
            }else{
                $('.waited').append(tmp_el);
                form_todo('off', $(tmp_this).data('tdid'));
            }
            $(tmp_el).slideDown(100);
        },100);
    }, 200);

});
$(document).on('submit', '#todo_add_form', function(e){
    e.preventDefault();
    var itm = $("#todo_add_item").val().trim();
    if(itm.length==0) return;
    form_todo('add', itm, 'tdelement_'+(added_td).toString());

    added_td++;
})

function submit_form_event(type){
    var data = {};
    if(type=='edit') $f = $("#form_edit_event");
    else if(type=='add') $f = $("#form_add_event");
    else if(type=='del') $f = $("#form_edit_event");
    data = getformdata($f);
    data.type = 'event';

    if(type=="del"){
        data.period_delete_id = data.period_update_id;
        data.period_update_id = undefined;
    }
    if(type=='add') $("#modal_add").addClass('loading');
    else $("#modal_edit_event").addClass('loading');
    ajax('dash/event', data, function(data, resptype){
        if(resptype=='error'){
            Materialize.toast("A apărut o eroare, te rugăm să încerci din nou", 3000);
            if(type=='add') $("#modal_add").removeClass('loading');
            else $("#modal_edit_event").removeClass('loading');
            return;
        }
        if(data.type == 'success'){
            Materialize.toast(data.msg, 2000);
            if(type=='add'){
                $("#modal_add").removeClass('loading');
                close_modal('modal_add');
                clean_form('#form_add_event');
            }else{
                $("#modal_add").removeClass('loading');
                close_modal('modal_edit_event');
            }
            interfaces[current_interface].load();
        }
    });
}
function form_todo(dot, elem, domel){
    //dot - action
    //elem - id or Text to add
    //domel - the id of the element on add
    var data = {};
    data.elem = elem;
    data.do = dot;
    ajax('dash/todo', data, function(res, resptype){
        if(resptype=='error'){
            Materialize.toast("A apărut o eroare, te rugăm să încerci din nou", 3000);
            return;
        }
        if(data.do == 'add'){
            $("#todo_add_item").val('');
            $(".todolist .waited").prepend('<div class="item"><input type="checkbox" id="'+domel+'" /><label for="'+domel+'">'+htmlentities(elem)+'</label></div>');
            $('#'+domel).data('tdid', res.tdid);
        }
    });
}
