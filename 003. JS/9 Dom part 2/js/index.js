//Crea un boton y se muestra en la pagina
let boton = document.createElement('button');
boton.innerHTML = "Soy un boton";
document.body.appendChild(boton);

//crea una imagen e inyecta una
let imagen = document.createElement('img');
imagen.src = "img/titulo.jpg";
document.body.appendChild(imagen);

//Guardar un contenedores de imagenes
let imagenSource = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpeg',
    'img/4.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMMdTmq3mLq7RQCPpDL6hVNewDSb2W_OdsVaoztkIHw&s',
];

function createImage(src)
{
    let img = document.createElement('img');
    img.src = src;

    document.getElementById('contenedorImg').appendChild(img);
};

imagenSource.forEach(function(src){
    createImage(src);
});

/*--------------- insertar una lista de links ------------------------*/
let links = 
[
    {text: "Ir a google", url: "http://www.google.com"},
    {text: "Ir a youtube", url: "http://www.youtube.com"},
    {text: "Ir a wikipedia", url: "http://www.wikipedia.org"},
];

let ul = document.createElement('ul');
links.forEach(function(link){
    let li = document.createElement('li');
    let a = document.createElement('a');
    
    a.textContent = link.text;
    a.href = link.url;

    li.appendChild(a);
    ul.appendChild(li);

});

document.getElementById('link').appendChild(ul);
/*-----------------------------------------------------------------------*/

//eventos con un boton
function botonApretado()
{
    alert("hola alfredo");
};

/*----------------------------*/
function hola()
{
    alert("Haz hecho click aqui");
};

// event listener tiene dos parametros (tipo de evento, callback)
document.getElementById("myBoton").addEventListener('click',hola);

//otra forma de realizar lo mismo
let btn = document.getElementById("myBoton");
btn.onclick = () => {
    alert("Muy bien, muy agradecido")
};

//crea el boton en cuestion desde js
let bton = document.createElement('button');
bton.id = "hola";
bton.textContent = "otro boton creado desde js";
document.body.appendChild(bton);

let botonCreado = document.getElementById("myBoton");
botonCreado.onclick = () =>
    {
        console.log("muy bien, muy agradecido por dos");
    }

//crea un boton para cambiar a modo noche
let buton = document.createElement('button');
buton.id = "toggleNoche";
buton.textContent = "Cambiar a modo Noche";
document.body.appendChild(buton);

document.addEventListener('DOMContentLoaded',function(){
    let btnModoNoche = document.getElementById('toggleNoche');
    let body = document.body;
    function ActivarModoNoche()
    {
        body.classList.toggle('modo-noche');
        if(body.classList.contains('modo-noche'))
            {
                btnModoNoche.innerHTML = "Activar modo dia";
            }else{
                btnModoNoche.innerHTML = "Activar modo noche";
            }
    }
    
    btnModoNoche.addEventListener('click',function(){
        ActivarModoNoche();
    })
})

/*muestra por pantalla la posicion donde moves el mousse
window.addEventListener('mousemove',(e) => console.log(e)); */

//cambia el color del texto cuando se posiciona con el mouse
let h1 = document.getElementById("texto");
h1.addEventListener("mouseover", function(){
    h1.style.color = "red";
})

h1.addEventListener("mouseleave", function(){
    h1.style.color = "blue";
})

//validacion de un form
function validateForm(event)
{
    event.preventDefault();

    //obtener los input
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    if(username.trim() === ""){ //si no se escribe un usuario envia un alerta va con triple igual porque es una operacion extricta
        alert("Porfavor inserte un usuario");
        return false; // evita que se envie el formulario
    }
    if(email.trim() === ""){
        alert("porfavor usa un mail");
        return false;
    }
    
    alert("Formulario enviado correctamente");
    return true

    function isValidemail(email)
    {
         let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return emailRegex.test(email)
    }

    if(!isValidemail(email))
        {
            alert("Porfavor ingresa un email valido")
        }

}

document.getElementById("myForm").addEventListener("submit", validateForm);
