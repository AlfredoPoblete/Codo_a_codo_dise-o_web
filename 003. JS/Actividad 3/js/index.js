// Ejemplo Funcion
function saludar(miNombre)
{
    console.log("Hola "+miNombre+" ,como te va!");
}
var miNombre = prompt("Ingresa tu nombre: ","");
saludar(miNombre)


//Ejemplo sumar
var resultado = 0;
function suma(numUno, numDos)
{
    resultado = numUno + numDos;
    console.log("La suma de "+numUno+" + "+numDos+" es: "+resultado)
}
var numUno = parseInt(prompt("Ingresa un numero: "));
var numDos = parseInt(prompt("Ingresa otro numero: "))
suma(numUno, numDos)
