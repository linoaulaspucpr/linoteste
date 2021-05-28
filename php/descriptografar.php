<?php 

	// executa comandos shell via PHP
	// shell_exec("comando");

	$dados = $_POST["dados"];

	$chave_privada = file_get_contents("../chave/chave_privada.pem");

	openssl_private_decrypt(base64_decode($dados), $mensagem_descriptografada, $chave_privada, OPENSSL_ZERO_PADDING);

	echo $mensagem_descriptografada;

?>