//storage (guardado)
//Local storage - almacena de manera indefinida, hasta que borremos el cache o intencional
//Session storage - se guarda la informacions siempre y cuando el navegador no se cierre (almacena 10megas y tipo string)

if(typeof(Storage) != 'undefined')  //para saber si es compatible con el session storage
    {
        alert("Es compatible con el navegador")
    }else{
        alert("no es compatible con el navegador")
    }

console.log(Storage)

//agregar elementos en local storage (solo string ocurre problemas)
/*
let cursos = ["HTML","CSS","Python"];
localStorage.setItem("cursoComprados:",cursos); //se debe colocar una clave luego la coma y despues el valor a que hace referencia. Lo almacena en el local
let preferenciasColor = "BlackAndWhite";
sessionStorage.setItem("color",preferenciasColor); //lo mismo pero lo almacena en la sesion
*/


console.log(localStorage.getItem("cursoComprados:")); //obtengo los datos almacenados en local, pero no me sirve ya que devuelve todo en string
// Para ello debo transformar ese string a json que significa javascript object notation
localStorage.clear() //sessionStorage.clear() borra todas las claves y valores guardados
//localStorage.removeItem() //elimina un elemento en especifico

//Transforma lo guardado en json para recuperarlos en array
let cursos = ["HTML","CSS","Python"];
localStorage.setItem("cursosComprados", JSON.stringify(cursos)); //transforma json a string
let cursosRecuperados = JSON.parse(localStorage.getItem("cursosComprados")); //transforma de string a json para poder reutilizar los array

//Compruebo que puedo reutilizar ese array guardado en local
cursosRecuperados.push("otro curso agregado");
console.log(cursosRecuperados);

