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
            close_modal('modal_edit');
        }
    });
}
function fill_gr_settings(){
    $("#modal_gr_settings").addClass('loading');
    ajax('dash/group/settings/'+groups_group_id, {}, function(data){
        $("#form_gr_settings").find('input[name=color]').val(data.color);
        $("#form_gr_settings").find('.colorbox div').removeClass('selected');
        $("#form_gr_settings").find('.colorbox div[class='+data.color+']').addClass('selected');
        $("#form_gr_settings").find('input[name=title]').val(data.name);
        $("#form_gr_settings").find('textarea[name=description]').val(data.description);
        $("#form_gr_settings input[name=title]+label").addClass('active');
        $("#form_gr_settings textarea[name=description]+label").addClass('active');
        $("#modal_gr_settings").removeClass('loading');
    });
}
function fill_gr_members(){
    $("#modal_gr_members").addClass('loading');
    ajax('dash/group/members/'+groups_group_id, {}, function(data){
        $("#modal_gr_members .memberlist .collection").html('');
        $.each(data, function(i, el){
            $("#modal_gr_members .memberlist .collection").append('<li class="collection-item"><div>'+el.email+'<a href="#!" data-memberid="'+el.id+'" class="del_user secondary-content"><i class="material-icons">delete</i></a></div></li>');
        })

        $("#modal_gr_members").removeClass('loading');
    });

}
function add_gr_member(){
    var email = $("#grmbr_add_item").val();
    ajax('dash/group/addmember/'+groups_group_id,{email:email}, function(data){
        Materialize.toast(data.text, 3000);
        if(data.type != 'error'){
            fill_gr_members();
            $("#grmbr_add_item").val('');
        }

    })
}
function del_gr_member(e){
    e.preventDefault();
    var uid = $(this).data('memberid');
    ajax('dash/group/delmember/'+groups_group_id,{uid:uid}, function(data){
        Materialize.toast(data.text, 3000);
        if(data.type != 'error') fill_gr_members();

    })
}
