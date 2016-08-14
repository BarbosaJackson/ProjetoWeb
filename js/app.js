$(document).foundation()

// 57309-010
// "##.###.###/####-##"

function validaCampos(el, er) {
	var e = $(el).val().replace(er, '');
	$(el).val(e);
}

function maskNumber(el){
	validaCampos(el, /[^0-9]/g)
}

function maskTelefone(el) {
	validaCampos(el, /[^0-9\-\(\)]/g);
	var e = $(el).val();
	if (e.length == 1) {
		$(el).val('('+e);
	}
	if(e.length == 3){
		$(el).val(e+')');	
	}
	if(e.length == 9){
		$(el).val(e+'-');
	}
}

function maskCNPJ(el){
	validaCampos(el, /[^0-9-\.\\\-]/g);
	var e = $(el).val();
	if(e.length == 2 || e.length == 6) {
		$(el).val(e + ".");
	} else if(e.length == 10) {
		$(el).val(e + "\\");
	} else if(e.length == 15) {
		$(el).val(e + "-");
	}
}

function maskHora(el){
	validaCampos(el, /[^0-9-\:\-]/g)
	var e = $(el).val();
	if(e.length == 2 || e.length == 8){
		$(el).val(e + ":");
	} else if(e.length == 5){
		$(el).val(e + "-");
	}
}

function maskCep(el){
	validaCampos(el, /[^0-9\-]/g)
	var e = $(el).val();
	if(e.length == 5){
		$(el).val(e + '-');
	}
}

function validaPg1(){
	return verificaSenhas() && document.getElementById('cnpj').value.length === 18 && document.getElementById('horario').value.length == 11;
}
function validaPg2(){
	return document.getElementById('cep').value.length == 9 && document.getElementById('tel').value.length == 14;
}

function verificaSenhas(){
	var a, b;
	a = document.getElementById("pass").value;
	b = document.getElementById("pass_confirm").value;
	console.log(a, b);
	return a == b;	
}