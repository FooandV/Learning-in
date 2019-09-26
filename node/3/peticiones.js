/* Ests js permitira realizar algo con la ruta que fue capturada, cuando el enrutador enrute, realmente
enrutara a las peticiones que voy a recibir en este archivo de propiedades */

function inicio(){
    console.log("Has entrado en la página de inicio");
    return "inicio"; 
}
function pagina1(){
    console.log("Has entrado en la página número 1");
    return "Página 1"; 
}
function pagina2(){
    console.log("Has entrado en la página número 2");
    return "Página 2"; 
}

function favicon() {
    console.log("se ha pedido el favicon");
    return "";
}

exports.inicio= inicio;
exports.pagina1= pagina1;
exports.pagina2= pagina2;
exports.favicon = favicon;