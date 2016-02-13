<?php

//session_start();

require("mysql_connect.php");

$query = "SELECT * FROM `test` WHERE 1";

$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0) {
    $i = 0;
    while($row = mysqli_fetch_assoc($result)) {
        $userOutput[$i]['sweet'] = $row;
        $i++;
    }
} else {
    $userOutput['error'] = "Could not access";
}


//$userOutput = "yay";

$userOutput = json_encode($userOutput);

print($userOutput);

?>
