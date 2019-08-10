
function mostrar()
{
	var ladoUno;
	var ladoDos;
	var ladoTres;
	var anuncio;

	ladoUno=prompt("Indique medida del lado uno");
	
	ladoDos=prompt("Indique medida del lado dos");
	
	ladoTres=prompt("Inidque medida del lado tres");
	

	if(ladoUno!=ladoDos && ladoTres!=ladoDos && ladoUno!=ladoTres)
	{
		anuncio=ladoUno+ladoDos+ladoTres;
	}
	else if(ladoUno==ladoDos && ladoDos==ladoTres && ladoUno==ladoTres)
	{
		ladoUno=parseInt(ladoUno);
		ladoDos=parseInt(ladoDos);
		ladoTres=parseInt(ladoTres);

		anuncio=ladoUno+ladoTres+ladoDos;

	}
	else if(ladoUno!=ladoDos && ladoDos==ladoTres)	
	{
		anuncio="No es ni escalneo ni equilatero";
	}

	else if (ladoUno=ladoDos && ladoDos!=ladoTres)
	{
		anuncio="No es ni escalneo ni equilatero";
	}	

	
	

	alert(anuncio);
}
