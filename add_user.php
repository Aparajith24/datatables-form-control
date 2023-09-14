<?php 
include('connection.php');
$username = $_POST['username'];
$email = $_POST['email'];
$department = $_POST['department'];
$city = $_POST['city'];

$sql = "INSERT INTO `users` (`username`,`email`,`department`,`city`) values ('$username', '$email', '$department', '$city' )";
$query= mysqli_query($con,$sql);
$lastId = mysqli_insert_id($con);
if($query ==true)
{
   
    $data = array(
        'status'=>'true',
       
    );

    echo json_encode($data);
}
else
{
     $data = array(
        'status'=>'false',
      
    );

    echo json_encode($data);
} 

?>