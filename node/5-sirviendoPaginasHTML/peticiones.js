/* Ests js permitira realizar algo con la ruta que fue capturada, cuando el enrutador enrute, realmente
enrutara a las peticiones que voy a recibir en este archivo de propiedades */

function inicio(respuesta){ //cuando se utiliza el parametro respuesta funciona como callback donde 
    //puede servir la funcion de manera independiente a las demas no generando un código NO bloqueante

    console.log("Has entrado en la página de inicio");
    /* código bloqueante: la función inicio al ser llamada
    genera un retardo en tiempo y debe ser procesada
    primero para que las otras funciones sean servidas
    o ejecutadas */
    // var ahora= new Date().getTime()
    // while(new Date().getTime() < ahora + 10000){
    // }
    /* ******************************** */
    respuesta.writeHead(200,{"Content-Type":"text/html"})
    respuesta.write("Esta es la página de inicio")
    respuesta.end();
    // return "inicio"; 
}
function pagina1(respuesta){
    console.log("Has entrado en la página número 1");
    respuesta.writeHead(200,{"Content-Type":"text/html"})
    respuesta.write("Esta es la página numero 1")
    respuesta.end();
    // return "Página 1"; 
}
function pagina2(respuesta){
    console.log("Has entrado en la página número 2");
    respuesta.writeHead(200,{"Content-Type":"text/html"})
    respuesta.write("Esta es la página numero 2")
    respuesta.end();
    // return "Página 2"; 
}

function favicon(respuesta) {
    console.log("se ha pedido el favicon");
    respuesta.writeHead(200,{"Content-Type":"text/html"})
    respuesta.write("")
    respuesta.end();
}

exports.inicio= inicio;
exports.pagina1= pagina1;
exports.pagina2= pagina2;
exports.favicon = favicon;