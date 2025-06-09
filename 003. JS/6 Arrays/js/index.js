//Diferentes Arrays

let arrayPrueba = [33,2,4,35,43];
let arrayDos = ["Manzana","Bananans","Naranjas"];
let arrayTres = [false,20,"hola"];

console.log(arrayPrueba);
console.log(arrayDos[1]);

for (let i = 0;i<3;i++)
    {
        console.log(arrayTres[i])
    };

//Cuenta los elementos del array
console.log("cantidad de elementos: "+arrayPrueba.length);

//agregar elementos en la ultima posicion del array
arrayDos.push("Pera");
arrayDos.push("Arandanos");
console.log(arrayDos);

//eliminar un elemento y guardarlo como variable
let elementoBorrado = arrayDos.pop();
console.log(elementoBorrado)

//concatenar dos aarays
let arrayConcatenados = arrayDos.concat(arrayPrueba);
console.log(arrayConcatenados);

//Ingresa tres frutas y las recorre, las imprime
for(let i = 0;i<3;i++)
    {
        let frutaNueva = prompt("Ingresar tres frutas: ");
        arrayDos.push(frutaNueva);
    }
for(let i = 0;i<arrayDos.length;i++)
    {
        console.log(arrayDos[i]);
    }

//for in recorre elementos
for(let item in arrayDos)
    {
        console.log(arrayDos[item]);
    }

//otro ejemplo de recorrer for con objetos
let persona = {
    nombre : "Alfredo",
    apellido : "Poblete",
    edad : 18,
    fuerza : "Unlimited"
}

for(let item in persona){
    console.log(item+" : "+persona[item])
}