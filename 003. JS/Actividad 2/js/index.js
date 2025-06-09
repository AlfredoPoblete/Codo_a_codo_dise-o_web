// Ejemplo if else

let numA;
let numB;
var operation;
var resultado;
console.log("Colocar numero y dire si es par o impar");
numA = prompt("Ingrese Numero: ");
if(numA %2==0)
{
    console.log("El numero ingresado es par")
}else{
    console.log("El numero ingresado es impar")
}

console.log("Minicalculadora");
operation = prompt("Ingrese operacion a realizar: \n1 - Suma\n2 - Resta\n3 - Producto\n4 - Division");
numA = parseInt(prompt("Ingrese Primer Numero: "));
numB = parseInt(prompt("Ingrese Segundo Numero: "));
if(operation == 1)
{
    resultado = (numA + numB);
    console.log("El Resultado de "+numA+" + "+numB+" es: "+resultado);
}else{
    if(operation == 2)
    {
        resultado = numA-numB;
        console.log("El Resultado de "+numA+" - "+numB+" es: "+resultado);
    }else{
        if(operation == 3)
        {
            resultado = numA*numB;
            console.log("El Resultado de "+numA+" x "+numB+" es: "+resultado);
        }else{
            if(operation == 4)
            {
                resultado = numA/numB;
                console.log("El Resultado de "+numA+" / "+numB+" es: "+resultado);
            }else
            {
                console.log("La operacion no existe");
            }
        }
    }
}



//Ejemplo and
var edad = parseInt(prompt("Ingresar Edad: "));

var plata = parseFloat(prompt("Ingresa cantidad de plata: "));

if (edad >=18 && plata > 100){
    console.log("Podes entrar al boliche, tenes mucha plata");
}else{
    if (edad < 18 && plata >= 100){
        console.log("Soborno aceptado, podes pasar");
    }else{
        if (edad >= 18 && plata < 100){
            console.log("Pasa al Boliche, tomas agua");
        }else{
            console.log("No podes entrar")
        }
    }
}




//ejemplo con operador ternario
let estado = (edad < 18) ? "podes entrar" : "entra salamin";
console.log(estado);



//ejemplo while
console.log("Tabla del 4");
var contador = 0;
var resultado = 0
while (contador <= 10)
{
    resultado = 4 * contador;
    console.log("4 x "+contador+" = "+resultado)
    contador ++
}
console.log("Fin Tabla de Multiplicar")



//Ejemplo for
var num = parseInt(prompt("Ingrese numero a mostrar su tabla de Multiplicar: "));
var resultado = 0;
for (var i = 0; i<11; i++){
    resultado = num * i
    console.log(num+" x "+i+" = "+resultado)
}

