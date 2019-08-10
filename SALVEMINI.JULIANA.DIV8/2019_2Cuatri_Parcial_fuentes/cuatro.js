function mostrar()
{
	var letra;
	var numero;
	var respuesta;
	var cantNumPares=0;
	var cantNumImpares=0;
	var cantCeros=0;
	var promedioNumPos;
	var acumuladorNumPos=0;
	var sumaNeg=0;
	var numeroMax;
	var numeroMin;
	var letraMax;
	var letraMin;
	var contador=0;
	var contadorNumPos=0;

	do
	{
		letra=prompt("Indique una letra");
		while(isNaN(letra)==false)
		{
			letra=prompt("No es una letra. Reingrese");
		}

		numero=prompt("Indique un numero");
		numero=parseInt(numero);

		while(isNaN(numero)==true || numero<-100 || numero>100)
		{
			numero=prompt("No es un numero valido. Reingrese numero entre -100 y 100");
			numero=parseInt(numero);
		}

		if(numero%2==0 && numero!=0)
		{
			cantNumPares++
		}

		else if(numero%2!=0)
		{
			cantNumImpares++;
		}
		else 
		{
			cantCeros++;
		}

		if(numero>0)
		{
			acumuladorNumPos=acumuladorNumPos+numero;
			contadorNumPos++;
		}
		else
		{
			sumaNeg=sumaNeg+numero;
		}

		if(contador==0 || numero>numeroMax)
		{
			numeroMax=numero;
			letraMax=letra;
		}

		if(contador==0  || numero<numeroMin)
		{
			numeroMin=numero;
			letraMin=letra;
		}



		contador++;
		respuesta=prompt("¿Quiere seguir cargando mas datos?");

	}
	while(respuesta=="si")

	promedioNumPos=acumuladorNumPos/contadorNumPos;
	if(contadorNumPos==0)
	{
		promedioNumPos="No hay numeros positivos";
	}

	if(sumaNeg==0)
	{
		sumaNeg="No hay numeros negativos";
	}

	document.write("A) La cantidad de numeros pares es: "+cantNumPares+"<br>");
	document.write("B) La cantidad de numeros impares es: "+cantNumImpares+"<br>" );
	document.write("C) La cantidad de ceros es: "+cantCeros+"<br>");
	document.write("D) El promedio de todos los numeros positivos ingresados es: "+promedioNumPos+"<br>");
	document.write("E) La suma de todos los numeros negativos es: "+sumaNeg+"<br>");
	document.write("F) El numero maximo es "+numeroMax+" y su letra es la "+letraMax+". El numero minimo es "+numeroMin+" y su letra es la "+letraMin)
}
