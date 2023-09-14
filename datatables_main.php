<?php
 /*
  * Plugin Name: DataTables
  * Plugin URI:  
  * Description: Plugin to show employee database with CRUD operations
  * Version:     1.0
  * Author:      Aparajith L
  * Author URI:  
*/
function include_datatable(){
  include_once("view.php");
}

function get_datatable() {
  ob_start();
  include_datatable();
  return ob_get_clean();
}

add_shortcode("datatable-retrieval","get_datatable");
?>
