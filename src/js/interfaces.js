$(document).ready(function(){
    if(is_mobile()) render_interface('interface_m1');
    else render_interface('interface_1');
});

function render_interface(interface_id){
    if(interface_id=='interface_1') interfaces.interface_1.load();
}

interfaces = {};
