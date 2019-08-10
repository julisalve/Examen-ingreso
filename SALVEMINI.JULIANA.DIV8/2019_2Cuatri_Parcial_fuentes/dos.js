function mostrar()
{
  var mascota;
  var edad;
  var peso;
  var nombre;
  var contador;
  var promedioPeso;
  var acumuladorPeso=0;
  var mayorEdad;
  var nombreMasViejo;
  var cantMascMenosDiezKilos=0;


  for(contador=0; contador<4; contador++)
  {
    mascota=prompt("Indique una mascota");

    while(isNaN(mascota)==false || (mascota!="gato" && mascota!="perro"))
    {
      mascota=prompt("Indique mascota nuevamente. Debe ser perro o gato");
    }

    edad=prompt("Indique edad de la mascota");
    edad=parseInt(edad);

    while(isNaN(edad)==true || edad<1 || edad>25)
    {
      edad=prompt("No es una edad valida. Reingrese edad entre 1 y 25");
      edad=parseInt(edad);

    }
    

    peso=prompt("Indique peso de la mascota");
    peso=parseInt(peso);

    while(isNaN(peso)==true || peso<1 || peso>100)
    {
      peso=prompt("No es un peso valido. Reingrese entre 1 y 100 ");
      peso=parseInt(peso);
    }

    nombre=prompt("Indique nombre de la mascota");

    if( contador==0 || edad>mayorEdad && mascota=="perro")
    {
      mayorEdad=edad;
      nombreMasViejo=nombre;
    }
   
    if(peso<10 && edad>10)
    {
      cantMascMenosDiezKilos++;
    }
    acumuladorPeso=acumuladorPeso+peso;
  }

  promedioPeso=acumuladorPeso/contador;

  document.write("A) El promedio de los pesos totales es: "+promedioPeso+"<br>");
  document.write("B) El nombre del perro mas viejo es: "+nombreMasViejo+"<br>");
  document.write("C) La cantidad de animales menores a 10 kilos de mas de 10 años es: "+cantMascMenosDiezKilos);

}
