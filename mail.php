<?php

$recepient = "ivan375447132510@yande.by";
header('Location: http://zt');

$name = trim($_POST["text"]);
$phone = trim($_POST["tel"]);
$message = "Имя: $name \nТелефон: $phone";
$pagetitle = "Новая заявка с сайта ";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
