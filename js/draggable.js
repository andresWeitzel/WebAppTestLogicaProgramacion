/*Si se arrastra algun elemento se van a llamr a los siguientes metodos
 dependiendo en donde se los llame
*/
function onDragStart(event) {
    event
        .dataTransfer
        .setData('text/plain', event.target.id);

    event
        .currentTarget
        .style
        .backgroundColor = '#D8D8D8';
}

//----------------------------------------------------------------------------------

//Si no se esta arrastrnado  algun elemento
function onDragOver(event) {
    event.preventDefault();
}

//----------------------------------------------------------------------------------
//Array para los elementos 
const elements = [];

//Funcion real para borrar el elemento que ya se movio draggable
function onDrop(event) {
    //Almacenamos el id del elemento que se movio
    const id = event
        .dataTransfer
        .getData('text');


    elements.push(id);

    //primer elemento que se tranfirio al dataTransfer
    document.getElementById("resultado").innerHTML = elements[0];


    //Seleccione nuestro elemento draggable con el id que recuperamos
    const draggableElement = document.getElementById(id);

    //Seleccione nuestro elemento dropzone:
    const dropzone = event.target;

    //Añada nuestro elemento draggable al dropzone:
    dropzone.appendChild(draggableElement);

    //info
    elemento = dropzone;


    //Restablezca nuestro objeto dataTransfer:
    /*  event
         .dataTransfer
         .clearData(); */
}

//----------------------------------------------------------------------------------

function comprobacion(event) {


    var id = event
        .dataTransfer
        .getData('text');

    if (elements[0] == 'html') {

        document.getElementById("resultado").innerHTML = id;

    } else if (id == 'css') {

        document.getElementById("resultado").innerHTML = id;

    } else {

        document.getElementById("resultado").innerHTML = "Nada";

    }

}