<?php
 ob_start();
if(isset($_POST['email'])) {
    $email_to = "support@clickup.se";
    $email_subject = "ClickUp Meddelande";
 
     
 
    // validation expected data exists
 
    if(!isset($_POST['first_name']) ||
 
        !isset($_POST['email']) ||
 
        !isset($_POST['telephone']) ||
 
        !isset($_POST['comments'])) {       
 
    }
 
     
 
    $first_name = $_POST['first_name']; // required
 
    $email_from = $_POST['email']; // required
 
    $telephone = $_POST['telephone']; // not required
 
    $comments = $_POST['comments']; // required
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
 
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
 
  }
 
  if(strlen($comments) < 2) {
 
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
 
  }
 
  if(strlen($error_message) > 0) {
 
    Header("Location: kontakt-fail.html");
    Die();
 
  }else{

    Header("Location: kontakt-success.html");

  }
 
    $email_message = "Meddelande från kund:\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "Hela namnet:" . "\n" . clean_string($first_name)."\n ---------------------------------- \n";
 
    $email_message .= "Email:"  . "\n" . clean_string($email_from)."\n ---------------------------------- \n";
 
    $email_message .= "Telefon nr:" . "\n" . clean_string($telephone)."\n ---------------------------------- \n";
 
    $email_message .= "Meddelande:" . "\n" . clean_string($comments)."\n ---------------------------------- \n";
 
     
 
     
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  




}
 
?>