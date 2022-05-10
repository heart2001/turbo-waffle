<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

$value = $_GET['query'];
$formfield = $_GET['field'];
// Check Valid or Invalid user name when user enters user name in username input field.
if ($formfield == "username") {
    if (strlen($value) < 4) {
        echo "Must be 3+ letters";
    } else {
        echo "<span>Valid</span>";
    }
}
// Check Valid or Invalid password when user enters password in password input field.
if ($formfield == "password") {
    if (strlen($value) < 6) {
        echo "Password too short";
    } else {
        echo "<span>Strong</span>";
    }
}
// Check Valid or Invalid email when user enters email in email input field.
if ($formfield == "email") {
    if (!preg_match("/.*@.*/i", $value)) {
        echo "Invalid email";
    } else {
        echo "<span>Valid</span>";
    }
}
// Check Valid or Invalid website address when user enters website address in website input field.
if ($formfield == "website") {
    if (!preg_match("/https?:\/\/.*[.].*/i", $value)) {
        echo "Invalid website";
    } else {
        echo "<span>Valid</span>";
    }
}
