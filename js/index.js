/* 

  ** CRIAR CHAVE PÚBLICA **
  openssl genrsa -out chave_privada.pem 1024

  ** CRIAR CHAVE PRIVADA **
  openssl rsa -pubout -in chave_privada.pem -out chave_publica.pem

*/

$(document).ready(function(){

	$("#bEnviar").click(function(){
		fLocalReqChaveAssimetrica();
		return false;
	});

});

function fLocalReqChaveAssimetrica(){

    var data = {"nome": $("#nome").val(), "senha": CryptoJS.SHA256($("#senha").val()).toString()};
    var valores = JSON.stringify(data);
    console.log("dados: " + valores);

    // cria um objeto da classe JSEncrypt
    var criptografia = new JSEncrypt();
    // adiciona a chave pública ao objeto
    criptografia.setKey($('#chavePublica').val());

    // Realiza a criptografia
    var mensagem_criptografada = criptografia.encrypt(valores);
    console.log(mensagem_criptografada);

    $.ajax({
        url: "/assimetrico/php/descriptografar.php", 
        type: 'post', 
        data: {dados: mensagem_criptografada}, 
        dataType: "json"
    });
}








