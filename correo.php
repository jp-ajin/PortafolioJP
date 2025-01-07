//Función para enviar correo desde formulario

<?php
$destino = "pabloajin16@gmail.com";
if(isset($_POST['enviar'])) {
    if(!empty($_POST['name']) && !empty($_POST['asunto']) && !empty($_POST['msg'])) {
        $name = $_POST['name'];
        $asunto = $_POST['asunto'];
        $msg = $_POST['msg'];
        $msg_c = $msg . "\nAtte: " . $name;
        $header = "From: Josué P.A.<programador@junior.com>" . "\r\n";
        $header.= "Replay-To: noreply@example.com" . "\r\n";
        $header.= "X-Mailer: PHP/". phpversion();
        $mail = @mail($destino,$asunto,$msg_c,$header);
        if($mail) {
            echo "<h4>Mail enviado Exitosamente</h4>";
        }
    }
}
