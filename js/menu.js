	$(document).ready(main);
	var cont=0;
	function main () {

		$('.menu_bar').click(efecto);
		$('#login').click(mostarFormulario);
	}
	function efecto()
	{

			$('nav').slideToggle();

	}
	function mostarFormulario()
	{
		$('#formulario').slideToggle();
	}
