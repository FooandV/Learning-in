var servidor = require('http');

function arrancaServidor(req, res){
   console.log("Alguien se ha conectado")
   
    /* El metodo WriteHead envia una cabecera al nacegador web, hay que decirle al nacegador que tipo de documento
    voy a enviar */
    res.writeHead(200,{"Content-Type": "text/html"} ); /* 200 es el código que se le envia al navegador */
    res.write("<h1>El servidor funciona correctamente</h1>")
    res.end();
}

servidor.createServer(arrancaServidor).listen(8888);