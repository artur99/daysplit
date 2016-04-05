var checkbox_focuser=[];
$('input[type=checkbox]').bind('focus', function(){
    var $lb = $(this).parent().find('label');
    checkbox_focuser['color'] = $lb.css('color');
    $lb.css('color', '#3084FF');
    // $lb.css('border-color', '#3084FF');
});

$('input[type=checkbox]').bind('blur', function(){
    var $lb = $(this).parent().find('label');
    $lb.css('color', checkbox_focuser['color']);

});


// Login/Signup interface switcher
var form_width, form_active;
function form_hide_initial(form){
    $(form).css({
        "display": "none",
        "opacity": "0",
        "width": "200px"
    });
}
function form_switch(toshow){
    $(form_active).animate({
        "width": "200px",
        "opacity": 0
    }, 400).hide(0, function(){
        var inps = $(form_active).find('input');
        for(var i=0;i<inps.length;i++)
            $(inps[i]).removeClass('invalid');
        form_active = toshow;
        $(toshow).show(0).animate({
            "width": form_width,
            "opacity": 1
        }, 400, function(){
            $(toshow).attr("style", "");
            $(toshow).find("input")[0].focus();
        });
    });
}
$(document).ready(function(){
    form_active = "#form-login";
    form_hide_initial("#form-signup");
    form_hide_initial("#form-reset");
    setTimeout(function(){
        form_width = $("#form-login").css("width");
    },200);
});
$(document).on('click', '#btn-signup', function(){form_switch("#form-signup")});
$(document).on('click', '#btn-reset', function(){form_switch("#form-reset")});
$(document).on('click', '.btn-login', function(){form_switch("#form-login")});

//Forms module
$(document).on('blur', 'input', function(){
    if(!$(this).val().length)$(this).find('+label').attr('data-error', '');
})
$(document).on('submit', "#form-login", function(e){
    e.preventDefault();
    var fid = "#form-login";

    if(typeof(login_status) == "undefined") login_status = 1;
    else if(login_status == 1) return;

    markloading(fid);
    ajax('account/login', _.object(_.map($(fid).serializeArray(), _.values)), function(data){
        if(data.type=='success'){
            window.location.href = '/dashboard';
        }else{
            if(data.type=='error'){
                $(fid+" input+label").attr('data-error', '');
                $(fid+" input").addClass('invalid');
                $.each(data.text, function(i,val){
                    if(val.length){
                        $(fid+" input[name="+i+"]").addClass('invalid');
                    }
                });
            }
            setTimeout(function(data){
                login_status = 0;
                unmarkloading(fid);
            },100);
        }
    });
});
$(document).on('submit', "#form-signup", function(e){
    e.preventDefault();
    var fid = "#form-signup";

    if(typeof(login_status) == "undefined") login_status = 1;
    else if(login_status == 1) return;

    markloading(fid);
    ajax('account/signup', _.object(_.map($(fid).serializeArray(), _.values)), function(data){
        if(data.type=='success'){
            window.location.href = '/dashboard';
        }else{
            if(data.type=='error'){
                $(fid+" input+label").attr('data-error', '');
                $(fid+" input").addClass('invalid');
                $.each(data.text, function(i,val){
                    if(val){
                        $(fid+" input[name="+i+"]+label").attr('data-error', val);
                    }
                });
            }
            setTimeout(function(data){
                login_status = 0;
                unmarkloading(fid);
            },100);
        }
    });
});


//Ajax module

function ajax(node, data, cb){
    $.post('/ajax/'+node, data).done(cb).error(cb);
}


//Others module

function markloading(btn){
    var btn = $(btn).find('.btn[type=submit]');
    $(btn).addClass('disabled');
    // $(btn).find("i").html('<div class="preloader-wrapper small active"> <div class="spinner-layer spinner-blue-only"> <div class="circle-clipper left"><div class="circle"></div></div> <div class="gap-patch"><div class="circle"></div></div> <div class="circle-clipper right"><div class="circle"></div></div> </div> </div>');
}
function unmarkloading(btn){
    var btn = $(btn).find('.btn[type=submit]');
    $(btn).removeClass('disabled');
    // $(btn).find("i").html('<div class="preloader-wrapper small active"> <div class="spinner-layer spinner-blue-only"> <div class="circle-clipper left"><div class="circle"></div></div> <div class="gap-patch"><div class="circle"></div></div> <div class="circle-clipper right"><div class="circle"></div></div> </div> </div>');
}
