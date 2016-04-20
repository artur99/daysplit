interfaces.interface_1 = {
    load : function(){
        day1 = '20160420';
        ajax('dash/get/3days', {}, function(pers){
            $(".col_innte_1").html('');
            $.each(pers, function(i, el){
                var start_locs = 0;
                var dur_locs = 0;
                if(el.sdate==day1){
                    if(el.sdate==day1){
                        start_locs = (el.stime / 100)-5;
                        dur_locs = el.etime /100 - el.stime / 100;
                        $(".col_innte_1").append('<div class="period '+el.color+'" style="margin-top:'+(start_locs*30)+'px;height:'+(dur_locs*30)+'px"></div>');
                    }
                }
            })
        });
    },
};
