<?php

$host = "localhost";
$db_name = "matrice";
$DB_DSN = "mysql:host=".$host;
$DB_USER = 'root';
$DB_PASSWORD = 'root';
$DB_DSN = "mysql:host=".$host.';dbname='.$db_name;

try{
	$dbh = new PDO($DB_DSN , $DB_USER, $DB_PASSWORD);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}catch (PDOException $e) {
    echo 'Echec de la connexion : ' . $e->getMessage();
    exit;
}
?>