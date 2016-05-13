<?php

function doer($str){
    $st = microtime(true);
    $max = -1;
    $maxes = [];
    foreach(range('a','z') as $i){
        $k = explode($i, $str);
        if(sizeof($k)>2){
            $k2 = $i.implode(array_slice($k, 1, sizeof($k)-2), '').$i;

            $l = strlen($k2);
            if($l>$max){
                $maxes = [$k2];
                $max = $l;
            }else if($l==$max){
                $maxes[]=$k2;
            }
        }
    }
    $dt = microtime(true)-$st;
    echo 'Time: '.$dt.'<br>';
    return $maxes;
}
// $els = (doer(file_get_contents('http://31.5.80.114:82/test.txt')));
$els = doer('nebuchadnezzar');
foreach($els as $el){
    if(strlen($el)>40)
        echo substr($el, 0, 20).'..(na, nanana, na, nanana, too much text here)..'.substr($el, -20);
    else echo $el;
    echo ' ('.strlen($el).')<br>';
}


var_dump("b" or "z");
