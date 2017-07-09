<?php 

header('Access-Control-Allow-Origin: *');  
header('Content-Type: application/json');

if(isset($_GET['likes'])){
    
    echo 14;
    
    die();
} 


if(!isset($_GET['id'])){

    echo json_encode(json_decode(file_get_contents('./products.json')));
    
    die();
}


if(isset($_GET['id'])){

   $pages = json_decode(file_get_contents('./products.json'));

   foreach($pages as $page){
       if($page->id == $_GET['id']) echo json_encode($page);
   }

   die();
}





