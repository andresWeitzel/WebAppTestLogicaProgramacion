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
//Funcion real para borrar el elemento que ya se movio draggable
function onDrop(event) {
    const id = event
        .dataTransfer
        .getData('text');

    //Seleccione nuestro elemento draggable con el id que recuperamos
    const draggableElement = document.getElementById(id);

    //Seleccione nuestro elemento dropzone:
    const dropzone = event.target;

    //Añada nuestro elemento draggable al dropzone:
    dropzone.appendChild(draggableElement);

    //info
    elemento = dropzone;


    //Restablezca nuestro objeto dataTransfer:
    event
        .dataTransfer
        .clearData();
}


//----------------------------------------------------------------------------------

function comprobacion() {

    document.getElementById(a).innerHTML = elemento;
    /*     if (data == 'html') {
            alert('Respuesta Incorrecta');
        }
        if (data == 'css') {
            alert('Respuesta Correcta');
        } else {
            alert('agsdavdy');
        } */
}