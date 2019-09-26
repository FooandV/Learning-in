var servidor = require("./servidor");
var enrutador = require("./enrutador");
var peticiones = require("./peticiones");

var manejador = {} /* manejador de posibilidades o peticiones, y permite elegir que petición voy a ejecutar */
manejador['/'] = peticiones.inicio;
manejador['/pagina1'] = peticiones.pagina1;
manejador['/pagina2'] = peticiones.pagina2;
manejador['/favicon.ico'] = peticiones.favicon;


servidor.iniciar(enrutador.enrutar, manejador); //esto es como una instancia de la funcion iniciar() del archivo servidor.js

