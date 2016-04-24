$(document).ready(function(){
    if(currenturl == 'dashboard'){
        if(is_mobile()) render_interface('interface_1');
        else render_interface('interface_1');
    }
});

function render_interface(interface_id){
    if(interface_id=='interface_1') interfaces.interface_1.load();
}

interfaces = {};
current_interface = '';
current_day = 0;
