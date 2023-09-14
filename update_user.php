<?php 
include('connection.php');
$id = $_POST['id'];
$department = $_POST['department'];
$name = $_POST['name'];

$sql = "UPDATE `employees` SET  `id$id`='$id' , `department`= '$department', `name`='$name'";
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
