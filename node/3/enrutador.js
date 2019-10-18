/* Este js es un enrutador que va detectar lo que hay en la URL,
 va procesar su contenido y va tomar decisiones*/

function enrutar(manejador,ruta){
    console.log("voy a rutear algo para" + ruta);
    
    if (typeof manejador[ruta] === 'function'){
        return manejador[ruta]();
    }else{
        console.log("No existe una función para esa ruta: " + ruta)
    }
}

/* le exportación nos devuelve cierto contenido de un modulo a otro, es una función 
con la que podemos intercambiar información de modulo a modulo */
exports.enrutar=enrutar;