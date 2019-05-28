<?php

const DB_MYSQL = 1;
const DB_SQLITE = 2;

class Database { 
    protected $pdo = null;

    protected function __construct(int $dbtype,string $hostName,string $dbName = null, string $username = null,string $password =null ) {
        $connectionString = null;
        
        if (!$dbtype){
            throw new Exception('The Database type is not selected!!!!!!!');
            return ;
        }

        if (!$hostName){
            throw new Exception('The Host name is empty!!!!!!!');
            return ;
        }
       
        switch ($dbtype) {
            case DB_MYSQL:
                if (!$dbName){
                    throw new Exception('The Database name is empty!!!!!!!');
                    return ;
                }
                if (!$username){
                    throw new Exception('The username is empty!!!!!!!');
                    return ;
                }
                if (!$password){
                    throw new Exception('The password is empty!!!!!!!');
                    return ;
                }
                
                if ($this->pdo == null) {
                    $connectionString = 'mysql:host=' .$hostName . ';dbname=' . $dbName;
                    $this->pdo = new PDO($connectionString, $user, $pass);
                }

                return;
            case DB_SQLITE:
                if ($this->pdo == null) {
                    $this->pdo = new PDO('sqlite:' . $hostName);
                    $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                }
                return;
            default:
                throw new Exception('Database type is not selected !!!!!!!');
                return;
        }
    }
} 


?>