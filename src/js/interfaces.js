$(document).ready(function(){
    if(currenturl == 'dashboard'){
        if(is_mobile()) render_interface('interface_1');
        else render_interface('interface_1');
    }else if(currenturl == 'dashboard_group_gid'){
        render_interface('interface_1');
        setInterval(function(){
            render_interface('interface_1', 1);
        }, 5000);
    }
});

function render_interface(interface_id, silent){
    if(typeof silent != 'number')silent=0;
    if(interface_id=='interface_1') interfaces.interface_1.load(silent);
}

interfaces = {};
current_interface = '';
current_day = 0;
