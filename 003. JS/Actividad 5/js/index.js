/*

//Ejemplo Objetos 
let auto =
{
    marca: "Peugeot",
    modelo: "504",
    kilometro: 35000,
    anio: 1995,
    patente: "kfct43k5",
    encender: function()
    {
        return("Se enciende el auto: "+auto.marca+auto.modelo+" tiene "+auto.kilometro+" Kilometros")
    }
}

let mostrar = auto.encender();
console.log(mostrar);

let entrada = prompt("Ingresar contenido a mostrar: ");
console.log(auto[entrada]);

//agregarle propiedades y mostrar
auto.motor = "1.5"
console.log(auto.marca + auto.modelo+" motor: "+auto.motor)

*/

/*
//otro ejemplo con funciones
let auto =
{
    marca: "Peugeot",
    modelo: "504",
    kilometro: 35000,
    anio: 1995,
    patente: "kfct43k5",
    cambiarMarca: function(nuevaMarca)
    {
        this.marca = nuevaMarca;
    },
    cambiarModelo: function(nuevaModelo)
    {
        this.modelo = nuevaModelo;
    },
    cambiarAnio: function(nuevaAnio)
    {
        this.anio = nuevaAnio;
        if (nuevaAnio < 2000)
            {
                console.log("Es un auto viejo");
            }else{
                console.log("Es un auto Nuevo")
            }
    },
    mostrarAuto: function()
    {
        return auto.marca+" "+auto.modelo+" "+auto.anio
    }
}

auto.cambiarMarca("citroen");
auto.cambiarModelo("c3");
auto.cambiarAnio(2001);

let nuevoAuto = auto.mostrarAuto();
console.log(nuevoAuto)

*/

//ejemplo Clases
class Animal
{
    constructor(nombre,tipo,edad,color)
    {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
        this.color = color;
    }
    PuedeCorrer()
    {
        if(this.edad > 10)
            {
                console.log(this.nombre+" no puede correr porque es viejo");
            }else
            {
                console.log(this.nombre+" si puede correr, es joven")
            }
    }

    MostrarInfoDelAnimal()
    {
        console.log("Este animal es "+this.nombre+" de tipo "+this.tipo+" de color: "+this.color);
    }
}

let AnimalUno = new Animal("Samus","Golden",12,"dorado")
AnimalUno.MostrarInfoDelAnimal()

let AnimalDos = new Animal("coco","callejero",2,"negro")
AnimalDos.PuedeCorrer()

