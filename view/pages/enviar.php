<?php
extract($_POST);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
   $mail->isMail();                       //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`;
   $mail->CharSet = 'UTF-8';

    //Recipients
    $mail->setFrom($correo, ucfirst($nombre));
    $mail->addAddress('web@ignilytic.com', 'WebIngilytic');     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Solicitud de informacion';
    $mail->Body    = '<b>Hola mi nombre es:</b> '.ucwords($nombre).'
                      <br><b>Mi correo es:</b> '.$correo.'
                      <br><b>Mi teléfono para contacto:</b> '.$telefono.'
                      <br><b>Solicito el servicio:</b> '.$servicio.'
                      <br><b>Tengo un mensaje:</b> '.ucfirst($mensaje);

    $mail->send();
    header('Location: mensaje');
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
