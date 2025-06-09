// Ejercicio Division
console.log("Division de dos numeros");
function Dividir(numUno,numDos)
{
    return numUno/numDos;
}
var numUno = prompt("Ingresa un numero: ");
var numDos = prompt("Ingresa otro numero: ");
resultado = Dividir(numUno,numDos);
console.log("El resultado de "+numUno+"/"+numDos+" es: "+resultado);


//Ejercicio Saludar
function Saludar(nombre)
{
    console.log("Bienvenido a la actividad 3 "+nombre);
}

let nombre = prompt("Ingresa tu nombre: ","");
Saludar(nombre)