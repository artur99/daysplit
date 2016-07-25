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
    if($("#form-login").length==0)return 0;
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




$(document).on('submit', "#form-login", function(e){
    e.preventDefault();
    var fid = "#form-login";

    if(typeof(login_status) == "undefined") login_status = 1;
    else if(login_status == 1) return;

    markloading(fid);
    ajax('account/login', getformdata(fid), function(data){
        $(fid+" input+label").attr('data-error', '');
        if(data.type=='success'){
            $(fid+" input").removeClass('invalid').addClass('valid');
            preloader.on();
            setTimeout(function(){
                window.location.href = '/dashboard';
            },500);
        }else{
            if(data.type=='error'){
                $(fid+" input").addClass('invalid');
                if(typeof data.text == 'string') $(fid+" input[name=password]+label").attr('data-error', data.text);
                else $.each(data.text, function(i,val){
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
$(document).on('submit', "#form-signup", function(e){
    e.preventDefault();
    var fid = "#form-signup";

    if(typeof(login_status) == "undefined") login_status = 1;
    else if(login_status == 1) return;

    markloading(fid);
    ajax('account/signup', getformdata(fid), function(data){
        $(fid+" input+label").attr('data-error', '');
        if(data.type=='success'){
            $(fid+" input").removeClass('invalid').addClass('valid');
            preloader.on();
            setTimeout(function(){
                window.location.href = '/dashboard';
            },500);
        }else{
            if(data.type=='error'){
                $(fid+" input").addClass('invalid');
                if(typeof data.text == 'string') $(fid+" input[name=cpassword]+label").attr('data-error', data.text);
                else $.each(data.text, function(i,val){
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
$(document).on('submit', "#form-reset", function(e){
    e.preventDefault();
    var fid = "#form-reset";

    if(typeof(login_status) == "undefined") login_status = 1;
    else if(login_status == 1) return;

    markloading(fid);
    ajax('account/reset', getformdata(fid), function(data){
        $(fid+" input+label").attr('data-error', '');
        if(data.type=='success'){
            $(fid+" input").removeClass('invalid').addClass('valid');
        }else{
            data.type = 'error'
            $(fid+" input").addClass('invalid');
            setTimeout(function(data){
                login_status = 0;
                unmarkloading(fid);
            },100);
        }
        if(typeof data.text == 'string') $(fid+" input[name=email]+label").attr('data-'+data.type, data.text);
        else $.each(data.text, function(i,val){
            if(val){
                $(fid+" input[name="+i+"]+label").attr('data-error', val);
            }
        });
    });
});
