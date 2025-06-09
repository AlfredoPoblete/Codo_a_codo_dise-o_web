console.log(document); //Esto es el dom muestra el documento en nodos
console.dir(document); //Esto es la representacion del objeto document

console.log(document.getElementById('divPrueba')); //muestro el nodo en cuestion

let div = document.getElementById('divPrueba');
div.innerHTML = `<p> Hola estoy inyectando un parrafo a travez de JS </p>`; //inyecta en un id

let divClass = document.getElementsByClassName('prueba'); //modifica el color delh1
for(let i=0; i < divClass.length; i++)
    {
        if( i == 2)
            {
                divClass[i].style.color = "blue";
            }
    };

let data = document.querySelector('#elemento');
//Accediendo al nodo elemento
console.log(data);

//Accediendo al nodo de texto contenido en data
console.log(elemento.innerText);

//Accediendo al nodo inner
console.log(elemento.innerHTML);

//data.innerText = "Cambia solamente a texto"
//data.innerHTML = `<a href="#"> cambio con la la etiqueta en html</a>`

/*--------------------------------------------------------*/

//crear elementos con el dom
/*
document.write() //escribe un elemento en el documento
createElement('div') // crea un div en html
createTextNode // crea un nodo de texto
padre.AppendChild(hijo) // Agrega un hijo a un objeto padre
*/

let superheroes = [
    {
        alias: "thor",
        universo: "marvel"
    },
    {
        alias: "punisher",
        universo: "marvel"
    },
    {
        alias: "spiderman",
        universo: "marvel"
    },
    {
        alias: "batman",
        universo: "dc"
    },
    {
        alias: "supermanr",
        universo: "dc"
    },
    {
        alias: "greenlantern",
        universo: "dc"
    }
];

let sectionMarvel = document.getElementById('marvel');
let sectionDC = document.getElementById('dc')

//Por cada heroe que encuentres en el array hacer:
superheroes.forEach(heroe =>{ 
    let contenedor = document.createElement('article');
    
    let dato = `<h3> ${heroe.alias} </h3>
                <p> ${heroe.universo} </p>`;
    contenedor.innerHTML = dato;

    if(heroe.universo == 'marvel')
        {
            sectionMarvel.appendChild(contenedor);
        }else{
            sectionDC.appendChild(contenedor);
        }
});
