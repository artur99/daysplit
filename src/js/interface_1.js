interfaces.interface_1 = {
    current_day: 0,
    load : function(){
        current_interface = 'interface_1';
        if(typeof day == 'undefined') day = [];
        interfaces.interface_1.markload('on');
        var cdate = [];
        cdate[1] = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * (current_day));
        cdate[2] = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * (current_day+1));
        cdate[3] = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * (current_day+2));
        for(var i=1;i<=3;i++){
            day[i] = jsdate2date(cdate[i]);
            $(".col_main_"+i+" .col_header").html(jsday2fulldatestr(current_day+i-1));
        }

        ajax('dash/get/3days', {day:current_day}, function(pers){
            pers.sort(function(e1,e2){
                if(e1.sdate==e2.sdate)return e1.stime > e2.stime ? 1 : e1.stime == e2.stime ? 0 : -1;
                else return e1.sdate > e2.sdate ? 1 : e1.sdate == e2.sdate ? 0 : -1;
            });
            $(".col_innte_1").html('');
            $(".col_innte_2").html('');
            $(".col_innte_3").html('');
            $.each(pers, function(i, el){
                var start_locs = 0;
                var dur_locs = 0;
                {
                    var tmp = '';
                    tmp += '<div class="period cfx '+el.color+' waves-effect" data-eid="'+el.event_id+'">';
                    tmp += '<div class="evtime">';
                    tmp += el.stime.substr(0,2)+':'+el.stime.substr(2,2);
                    if(el.edate == el.sdate && el.etime != el.stime){
                        tmp += ' <i class="material-icons">&#xE5C8;</i>'+el.etime.substr(0,2)+':'+el.etime.substr(2,2);
                    }
                    tmp += '</div>';
                    tmp += '<div class="evtitle">'+el.title.charAt(0).toUpperCase() + el.title.slice(1)+'</div>';
                    tmp += '</div>';
                }
                console.log(day);
                if(el.sdate==day[1]) $(".col_innte_1").append(tmp);
                else if(el.sdate==day[2]) $(".col_innte_2").append(tmp);
                else if(el.sdate==day[3]) $(".col_innte_3").append(tmp);
            })
            $(".col_innte_1").prepend('<div class="periodadd" data-addate="'+jsday2datestr(current_day)+'"><i class="material-icons">&#xE146;</i></div>');
            $(".col_innte_2").prepend('<div class="periodadd" data-addate="'+jsday2datestr(current_day+1)+'"><i class="material-icons">&#xE146;</i></div>');
            $(".col_innte_3").prepend('<div class="periodadd" data-addate="'+jsday2datestr(current_day+2)+'"><i class="material-icons">&#xE146;</i></div>');
            $(".periodadd").click(interfaces.interface_1.open_add_form);
            interfaces.interface_1.markload('off');
        });
    },
    open_add_form : function(e){
        e.preventDefault();
        var addt = $(this).data('addate');
        $("#form_add_event [name=start_date]").val(addt);
        $("#form_add_event [name=end_date]").val(addt);
        open_add_modal('modal_add');
    },
    markload : function(sw){
        var $el = $(".interface_1");
        var clname = 'loading';
        if(typeof sw == 'undefined') $el.toggleClass(clname);
        else{
            if(sw == 'off') $el.removeClass(clname);
            else $el.addClass(clname);
        }
    },
    gentopdate: function(ttday){
        var yr = '';
        var ddate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * ttday);
        if(ddate.getFullYear() != new Date().getFullYear()) yr = ' '+ddate.getFullYear();
        return dayofweek(ddate.getDay())+", "+ddate.getDate()+" "+monthofyear(ddate.getMonth()+1)+yr;
    }
};
$(document).on('click', '.interface_1 .navbtn', function(){
    if($(this).attr('data-nav') == 'left')
        current_day--;
    else
        current_day++;
    interfaces.interface_1.load();
});
