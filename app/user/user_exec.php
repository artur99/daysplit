<?php
namespace DaySplit\Executers;

class UserExecuter{
    protected $db;
    function __construct($db){
        $this->db = $db;
    }

    public function insert($insertData){
        $queryBuilder = $this->db->createQueryBuilder();
        $queryBuilder->insert('users');
        var_dump($queryBuilder);
        $i = 0;
        foreach($insertData as $k => $el){
            $queryBuilder->setValue($k, '?');
            $queryBuilder->setParameter($i++, $el);
        }
        $act = $queryBuilder->execute();
        return $act ? 1 : 0;

    }
}
