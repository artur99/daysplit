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
    if(toshow == form_active){
        $(toshow).removeClass('hide').find("input")[0].focus();
        return;
    }
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
    if($("#form-login").length==0)return 0;
    $("form").removeClass("hide");
    if(window.location.hash.length){
        if(window.location.hash=='#signup'){
            form_active = "#form-signup";
            form_hide_initial("#form-login");
            form_hide_initial("#form-reset");
        }
        else if(window.location.hash=='#reset'){
            form_active = "#form-reset";
            form_hide_initial("#form-login");
            form_hide_initial("#form-signup");
        }else{
            form_active = "#form-login";
            form_hide_initial("#form-signup");
            form_hide_initial("#form-reset");
        }
    }else{
        form_active = "#form-login";
        form_hide_initial("#form-signup");
        form_hide_initial("#form-reset");
    }
    setTimeout(function(){
        form_width = $(form_active).css("width");
        $(form_active).find("input")[0].focus();
    }, 200);
});
$( window ).resize(function() {
    setTimeout(function(){
        form_width = $(form_active).css("width");
    }, 200);
});
$(document).on('click', '#btn-signup', function(){form_switch("#form-signup")});
$(document).on('click', '#btn-reset', function(){form_switch("#form-reset")});
$(document).on('click', '.btn-login', function(){form_switch("#form-login")});
$(document).on('click', '#btn-relogin', function(){
    markloading_btn('#btn-relogin');
    preloader.on();
    ajax('account/relogin', {}, function(){
        setTimeout(function(){
            window.location.href = '/dashboard';
        }, 400);
    })
});
$(document).on('click', '#btn-logout', function(){
    markloading_btn('#btn-logout');
    preloader.on();
    ajax('account/logout', {}, function(){
        setTimeout(function(){
            window.location.href = '/account';
        }, 400);
    })
});




$(document).on('submit', "#form-login", function(e){
    e.preventDefault();
    var fid = "#form-login";

    if(markerloading(fid)) return;

    markloading(fid);
    ajax('account/login', getformdata(fid), function(data){
        data = form_validate_response_data(data);
        if(data.type == 'error'){
            setTimeout(function(data){
                unmarkloading(fid);
            },100);
        }else{
            form_redirect('/dashboard', 500, true);
        }
        form_response_fill(fid, data, 'password');
    });
});
$(document).on('submit', "#form-signup", function(e){
    e.preventDefault();
    var fid = "#form-signup";

    if(markerloading(fid)) return;

    markloading(fid);
    ajax('account/signup', getformdata(fid), function(data){
        data = form_validate_response_data(data);
        if(data.type == 'error'){
            setTimeout(function(data){
                unmarkloading(fid);
            },100);
        }else{
            form_redirect('/dashboard', 500, true);
        }
        form_response_fill(fid, data, 'cpassword');
    });
});
$(document).on('submit', "#form-reset", function(e){
    e.preventDefault();
    var fid = "#form-reset";

    if(markerloading(fid)) return;

    markloading(fid);
    ajax('account/reset', getformdata(fid), function(data){
        data = form_validate_response_data(data);
        form_response_fill(fid, data, 'email');
        if(data.type == 'error'){
            setTimeout(function(data){
                unmarkloading(fid);
            },100);
        }
    });
});
$(document).on('submit', "#form-reset-new", function(e){
    e.preventDefault();
    var fid = "#form-reset-new";

    if(markerloading(fid)) return;

    markloading(fid);
    ajax('account/reset-new', getformdata(fid), function(data){
        data = form_validate_response_data(data);
        form_response_fill(fid, data, 'cpassword');

        if(data.type == 'error'){
            setTimeout(function(data){
                unmarkloading(fid);
            },100);
        }else{
            form_redirect('/dashboard', 500, true);
        }
    });
});
