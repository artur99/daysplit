$(document).ready(function(){
    rand_colors("#form_gr_add_group");
})
$(document).on('click', '#btn_gr_add_group', function(e){e.preventDefault();submit_form_group('add');});
$(document).on('submit', '#form_gr_add_group', function(e){e.preventDefault();submit_form_group('add');});

$(document).on('click', '#btn_submit_settingsform2', function(e){e.preventDefault();submit_form_group('edit');});
$(document).on('submit', '#form_gr_settings', function(e){e.preventDefault();submit_form_group('edit');});


$(document).on('click', ".modal-trigger[href='#modal_gr_settings']", function(){fill_gr_settings();});
$(document).on('click', ".modal-trigger[href='#modal_gr_members']", function(){fill_gr_members();});
$(document).on('click', "#modal_gr_members .del_user", del_gr_member);
$(document).on('submit', "#form_gr_members", function(e){e.preventDefault(); add_gr_member();});
// $(document).on('submit', '#form_gr_add_group', function(e){e.preventDefault();submit_form_group('add');});

function submit_form_group(type){
    var data = {};
    if(type=='edit') $f = $("#form_gr_settings");
    else if(type=='add') $f = $("#form_gr_add_group");
    else if(type=='del') $f = $("#form_edit_event");
    data = getformdata($f);
    if(type=='edit')data.do_edit = groups_group_id;
    if(type=="del"){
        data.period_delete_id = data.period_update_id;
        data.period_update_id = undefined;
    }

    ajax('dash/groups', data, function(data){
        if(type=='edit')window.location.href = window.location.href;
        if(data.type == 'success'){
            if(type=='add'){
                close_modal('modal_add');
                if(data.inserted_id){
                    window.location.href = '/dashboard/group/'+data.inserted_id.toString();
                }
            }
            close_modal('modal_edit_event');
        }
    });
}
function fill_gr_settings(){
    $("#modal_gr_settings").addClass('loading');
    ajax('dash/group/settings/'+groups_group_id, {}, function(data, resptype){
        if(resptype=='error'){
            Materialize.toast("A apărut o eroare, te rugăm să încerci din nou", 3000);
            $("#modal_gr_settings").removeClass('loading');
            close_modal('modal_gr_settings');
            return;
        }
        $("#form_gr_settings").find('input[name=color]').val(data.color);
        $("#form_gr_settings").find('.colorbox div').removeClass('selected');
        $("#form_gr_settings").find('.colorbox div[class='+data.color+']').addClass('selected');
        $("#form_gr_settings").find('input[name=title]').val(data.name);
        $("#form_gr_settings").find('textarea[name=description]').val(data.description);
        if(data.name.length) $("#form_gr_settings input[name=title]+label").addClass('active');
        if(data.description.length) $("#form_gr_settings textarea[name=description]+label").addClass('active');
        $("#modal_gr_settings").removeClass('loading');
    });
}
function fill_gr_members(){
    $("#modal_gr_members").addClass('loading');
    ajax('dash/group/members/'+groups_group_id, {}, function(data, resptype){
        if(resptype=='error'){
            Materialize.toast("A apărut o eroare, te rugăm să încerci din nou", 3000);
            $("#modal_gr_members").removeClass('loading');
            close_modal('modal_gr_members');
            return;
        }
        $("#modal_gr_members .memberlist .collection").html('');
        $.each(data, function(i, el){
            $("#modal_gr_members .memberlist .collection").append('<li class="collection-item"><div>'+el.email+'<a href="#!" data-memberid="'+el.id+'" class="del_user secondary-content"><i class="material-icons">delete</i></a></div></li>');
        });
        $("#modal_gr_members").removeClass('loading');
    });

}
function add_gr_member(){
    $("#modal_gr_members").addClass('loading');
    var email = $("#grmbr_add_item").val();
    ajax('dash/group/addmember/'+groups_group_id,{email:email}, function(data, resptype){
        if(resptype=='error'){
            Materialize.toast("A apărut o eroare, te rugăm să încerci din nou", 3000);
            $("#modal_gr_members").removeClass('loading');
            return;
        }
        Materialize.toast(data.text, 3000);
        if(data.type != 'error'){
            fill_gr_members();
            $("#grmbr_add_item").val('');
        }
        $("#modal_gr_members").removeClass('loading');
    })
}
function del_gr_member(e){
    e.preventDefault();
    $("#modal_gr_members").addClass('loading');
    var uid = $(this).data('memberid');
    ajax('dash/group/delmember/'+groups_group_id,{uid:uid}, function(data, resptype){
        if(resptype=='error'){
            Materialize.toast("A apărut o eroare, te rugăm să încerci din nou", 3000);
            $("#modal_gr_members").removeClass('loading');
            return;
        }
        Materialize.toast(data.text, 3000);
        if(data.backtolist == 1){
            window.location.href = '/dashboard/groups';
            return;
        }
        $("#modal_gr_members").removeClass('loading');
        if(data.type != 'error') fill_gr_members();

    })
}
