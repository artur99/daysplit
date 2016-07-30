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
    }else if(fid=='#form_edit_event'){
        $f.find('input[name=period_update_id]').val('');
        $f.find('input[name=title]').val('');
        $f.find('input[name=start_date]').val('');
        $f.find('input[name=end_date]').val('');
        $f.find('input[name=start_time]').val('');
        $f.find('input[name=end_time]').val('');
        $f.find('input[name=location]').val('');
        $f.find('textarea[name=description]').val('');
    }
}
function close_modal(mid){
    // if(mid=='modal_add'){
    //     $('#modal_add').closeModal();
    // }else if(mid=='modal_edit_event'){
    //     $('#modal_edit_event').closeModal();
    // }else{
        $("#"+mid).closeModal();
    // }
}
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
