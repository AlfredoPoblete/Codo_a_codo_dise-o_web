// Mostrar por Consola
console.log("Holaaaa Mundirijillo");
console.log(20+45);
console.log("La suma de esta operacion es:", 23+40);

console.warn("Cuidado nene!");
console.error("Nene ha ocurrido un error manso");

//Variables

var numeroA = 25;
var numeroB = 40;
console.log("La suma de",numeroA , "+", numeroB, "es = ", numeroA + numeroB)

// Saber que tipo de variable es

var a = "Hola alfredo";
var b = 777;
var c = 3.14;
var d = true;
var e;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

// Pedir al usuario el valor que tomara esa variable (similar a imput)

var nombre = prompt("Ingresar su Nombre por favor: ","")
console.log("Bienvenido su majestad, ",nombre)

// Inyectar texto

document.write("Hola "+ nombre)