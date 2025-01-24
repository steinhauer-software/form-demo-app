<?php

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
          echo "Got data: <br><pre>";
          foreach ($_POST as $key => $value) {
                  echo $key . ": " . strip_tags($value) . "<br>";
          }
          echo "</pre>";

          $msg = strip_tags($_POST['message']);

          $mail = "From: " . $_POST['name'] . "\r\n";
          $mail .= "Mail: " . $_POST['email'] . "\r\n";
          $mail .= "Message: " . $msg . "\r\n";
          // You could create a simple mail with PHP's mail() function
          //mail("<my mail address>", "Contact form", $mail);
  } else {
          echo "Go away.";
  }