<?php

namespace connection;

class Database { 
    private $pdo;

    function __construct(DatabaseType $dbtype,string $hostName,string $dbName, string $username = "",string $password = "" ) {
        $connectionString = null;
        switch ($dbtype) {
            case DatabaseType::MYSQL:
                $connectionString = 'mysql:host=' . hostName . ';dbname=' . $dbName;
                $pdo = new PDO($connectionString, $user, $pass);
                break;
            case DatabaseType::SQLITE:
                $connectionString = 'sqlite:' . hostName;
                $pdo = new PDO($connectionString);
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                break;
            default:
                throw new Exception('Database type is not selected !!!!!!!');
                return ;
        }
       
        if ($connectionString)
        {
            $pdo = new PDO($connectionString, $user, $pass);
        }
    }
    
    function select(string $sql, array $params) { 
        $stmt = $pdo->query(sql)->execute($params);
        return $stmt;
    } 
    function update(string $sql, array $params){
        $pdo->prepare($sql)->execute($params);
    }

    function delete(int $id ,string $table ){
        $stmt = $pdo->prepare("DELETE FROM ".$table." WHERE id = ?");
        $stmt->execute([$id]);
    }

    function insert(Type $var = null){
    }

    private function execute(string $sql, array $params) {
       
    }
} 


?>