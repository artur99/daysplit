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
