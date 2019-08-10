function mostrar()
{
	var localidad;
	var cantHab;
	var temperatura;
	var respuesta;
	var cantTempPares=0;
	var localidadMenosHab;
	var menosHab;
	var contador=0;
	var localidadMasCuarentaGrados=0;
	var promedioHab;
	var acumuladorHab=0;
	var temperaturaMin;
	var localidadTempMin;

	do
	{
		localidad=prompt("Indique el nombre de una localidad");
		while(isNaN(localidad)==false)
		{
			localidad=prompt("No es una localidad valida. Reingrese");
		}

		cantHab=prompt("Indique cantidad de habitantes en millones entre 1 y 40");
		cantHab=parseInt(cantHab);

		while(isNaN(cantHab)==true || cantHab>40 || cantHab<1)
		{
			cantHab=prompt("Dato invalido. Reingrese cantidad de habitantes entre 1 y 40 millones");
			cantHab=parseInt(cantHab);
		}

		acumuladorHab=acumuladorHab+cantHab;

		temperatura=prompt("Indique temperatura entre -50 y 50");
		temperatura=parseInt(temperatura);

		while(isNaN(temperatura)==true || temperatura>50 || temperatura<-50)
		{
			temperatura=prompt("Temperatura invalida. Reingrese");
			temperatura=parseInt(temperatura);
		}


		if(temperatura%2==0 && temperatura!=0)
		{
			cantTempPares++;
		}

		if(contador==0 || cantHab<menosHab)
		{
			menosHab=cantHab;
			localidadMenosHab=localidad;
		}

		if(temperatura>40)
		{
			localidadMasCuarentaGrados++;
		}
		else
		{
			localidadMasCuarentaGrados="No hay";
		}

		if(contador==0 || temperatura<temperaturaMin)
		{
			temperaturaMin=temperatura;
			localidadTempMin=localidad;
		}
		contador++;

		
		respuesta=prompt("¿Quiere seguir cargando mas datos?");
	}

	while(respuesta=="si")

	promedioHab=acumuladorHab/contador;

	document.write("A) La cantidad de temperaturas pares es : "+cantTempPares+"<br>");
	document.write("B) La localidad con menos habitantes es: "+localidadMenosHab+"<br>");
	document.write("C) La cantidad de localidad que superan los 40 grados de temperatura es: "+localidadMasCuarentaGrados+"<br>");
	document.write("D) El promedio de habitantes entre las localidad ingresadas es de: "+promedioHab+"<br>");
	document.write("F) La temperatura minima es de: "+temperaturaMin+" grados, y la localidad es: "+localidadTempMin);



}
