<?php

  require('Mail.php');
  $response;
  $mail = new Mail(trim(strval($_POST['subject'])), trim(strval($_POST['msg'])), trim(strval($_POST['nom'])), trim(strval($_POST['mail'])));
  if ($mail->verifyEMail()) {
    $mail->sendEMail();
    $response = array('code' => 1, 'msgFR' => 'Votre message à bien été envoyé !', 'msgEN' => 'Your e-mail was succesfully sent');
  } else {
    $response = array('code' => 0, 'msgFR' => 'Oups ! Il y a quelques erreurs dans votre saisie !', 'msgEN' => 'Some errors appear in what you sent');
  }
  echo json_encode($response);
?>
