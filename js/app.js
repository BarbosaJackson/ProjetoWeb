$(document).foundation()

window.onload = function() {
	document.getElementById('msg').visibility = "hidden";
}

function verificaVazios(campo){
	return campo != "" && campo != null;
}

function verificarCampos(){
	var nome = document.getElementById('nomeEmpresa').value;
	var desc = document.getElementById('desc').value;
	var cnpj = document.getElementById('cnpj').value;
	var senha = document.getElementById('pass').value;
	if(verificaVazios(nome) && verificaVazios(desc) && verificaVazios(cnpj) && verificaVazios(senha)) {
		return true;
	} else {
		document.getElementById('msg').visibility = "hidden";
		document.getElementById('msg').innerHTML = "Erro, preencha todos os campos, por favor!";
		return false;
	}
}

function valida_pt2(){
	var rua = document.getElementById('rua').value;
	var bairro = document.getElementById('bairro').value;
	var num = document.getElementById('num').value;
	var cep = document.getElementById('cep').value;

	return verificaVazios(rua) && verificaVazios(bairro) && verificaVazios(num) && verificaVazios(cep);
}