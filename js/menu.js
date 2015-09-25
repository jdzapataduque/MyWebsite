	$(document).ready(main);
var contador = 0;
	function main () {

		$('#iconmenu').click(efecto);
		$('#login').click(mostarFormulario);
	}
	function efecto()
	{
		//$('nav').slideToggle();
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
	}
}
	function mostarFormulario()
	{
		$('#formulario').slideToggle();
	}
