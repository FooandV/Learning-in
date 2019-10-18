/* El modulo 'http' se encarga de servir web */
var servidor = require('http');
/* este modulo permite realizar acciones en base a cambios en la url, se va encargar de registrar la
url y permitirme especificar un comoportamiento especificado*/
var url = require('url');
/* fs (FileSystem) = Modulo que permite leer y escribir archivos dentro del sistema de archivos del servidor 
donde esta instalado node */
var fs = require('fs');


function iniciar(enrutar, manejador) {
    function arrancaServidor(req, res) {
        /* parse: devolverá un objeto URL con cada parte de la dirección como propiedades,
        lo que se esta haciendo es capturar aquello que se ponga en la 'url' e introducirlo
        dentro de una variable ruta */
        var ruta = url.parse(req.url).pathname;

        console.log("Alguien se ha conectado")

        var contenido = enrutar(manejador, ruta, respuesta);
        /* createWriteStream: metodo que permite crear un flujo de datos en el archivo, se quiere abrir en modo append*/
        var registro = fs.createWriteStream('registro.txt', { 'flags': 'a' });
        registro.write(ruta + '\n');
        /* El metodo WriteHead envia una cabecera al nacegador web, hay que decirle al nacegador que tipo de documento
        voy a enviar */
        // res.writeHead(200, { "Content-Type": "text/html" }); /* 200 es el código que se le envia al navegador */
        // res.write(contenido)
        // res.end();
    }
    servidor.createServer(arrancaServidor).listen(8080);
}
exports.iniciar = iniciar;    
