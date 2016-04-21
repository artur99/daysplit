
function getformdata(form){
    var data = _.object(_.map($(form).serializeArray(), _.values));
    return data;
}
//Ajax module

function ajax(node, data, cb){
    data.csrftoken = csrftoken;
    $.post('/ajax/'+node, data).done(cb).error(cb);
}

//Others module

function markloading(btn){
    var btn = $(btn).find('.btn[type=submit]');
    $(btn).addClass('disabled');
}
function unmarkloading(btn){
    var btn = $(btn).find('.btn[type=submit]');
    $(btn).removeClass('disabled');
}
function markloading_btn(btn){
    $(btn).addClass('disabled');
}
function unmarkloading_btn(btn){
    $(btn).removeClass('disabled');
}
function is_mobile(){
    return $( window ).width() < 600 ? true : false;
}
function pad(width, string, padding) {
  return (width <= string.length) ? string : pad(width, padding + string, padding)
}
function jsdate2date(str){
    return pad(4, str.getFullYear().toString(), '0')+pad(2, (str.getMonth()+1).toString(), '0')+pad(2, str.getDate().toString(), '0');
}
function jsday2datestr(ttday){
    var yr = '';
    var ddate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * ttday);
    if(ddate.getFullYear() != new Date().getFullYear()) yr = ' '+ddate.getFullYear();
    return ddate.getDate()+" "+monthofyear(ddate.getMonth()+1)+yr;
}
function jsday2fulldatestr(ttday, sy){
    if(typeof sy=='undefined')sy=0;
    var yr = '';
    var ddate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * ttday);
    if(sy || ddate.getFullYear() != new Date().getFullYear()) yr = ' '+ddate.getFullYear();
    return dayofweek(ddate.getDay())+', '+ddate.getDate()+" "+monthofyear(ddate.getMonth()+1)+yr;
}
function dayofweek(i){
    if(i==1)return 'Luni';
    if(i==2)return 'Marți';
    if(i==3)return 'Miercuri';
    if(i==4)return 'Joi';
    if(i==5)return 'Vineri';
    if(i==6)return 'Sâmbătă';
    if(i==7 || i==0)return 'Duminică';
}
function monthofyear(i){
    var months = 'Ianuarie,Februarie,Martie,Aprilie,Mai,Iunie,Iulie,August,Septembrie,Octombrie,Noiembrie,Decembrie';
    var mth = months.split(',');
    return mth[i-1];
}


$(document).on('click', '#btn-logout', function(){
    markloading_btn('#btn-logout');
    preloader.on();
    ajax('account/logout', {}, function(){
        setTimeout(function(){
            window.location.href = '/account';
        }, 400);
    })
});
