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
        .backgroundColor = 'yellow';
}

//Si no se esta arrastrnado  algun elemento
function onDragOver(event) {
    event.preventDefault();
}

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

    //Restablezca nuestro objeto dataTransfer:
    event
        .dataTransfer
        .clearData();
}