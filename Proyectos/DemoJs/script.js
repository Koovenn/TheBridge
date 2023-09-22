console.log("hola mundo");
/*
function cruzarCalle(){
    // Semáforo
    let color = prompt("Introduzca color");

    if (color == "green") {
        console.log("Pasar");

    } else if(color == "yellow"){
        console.log("Pasar rápido");
    }
    else if(color == "blue"){
        console.log("Pasar saltando");
    }
    else { // Valor por defecto ---> ROJO
        console.log("No pasar");
    }

}

function cruzarCalle2(color){
    // Semáforo
    let color = prompt("Introduzca color");

    if (color == "green") {
        console.log("Pasar");

    } else if(color == "yellow"){
        console.log("Pasar rápido");
    }
    else if(color == "blue"){
        console.log("Pasar saltando");
    }
    else { // Valor por defecto ---> ROJO
        console.log("No pasar");
    }
}

function cruzarCalleSwitch(){
    // Semáforo
    let color = prompt("Introduzca color");

    switch (color) {
        case "green":
            console.log("Pasar");
            break;

        case "yellow":
            console.log("Pasar rápido");
            break;

        case "blue":
            console.log("Pasar saltando");
            break;
    
        default:
            console.log("No pasar");
            break;
    }
}
*/
function printYears() {
    for (let i = 1996; i <= 2022; i++) {

        if (i % 2 == 0) { //Pares
            continue;// como un "break" solo para la iteración actual
        }

        if (i > 2011) {//Imprimiría hasta 2011, después el "break" lo detiene
            break;
        }
        console.log("Año " + i);
    }
}

function ejemploWhile() {

    let i = 1996; //variable de bucle
    while (i <= 2022) { //condición de parada

        if (i % 2 == 0) {
            i++;
            continue;
        }

        if (i > 2011) {
            break;
        }

        console.log("Año " + i);
        i++; //incremento variable de bucle. Si lo comentas = bucle infinito
    }
}

// Bucle infinito
while(true){
    console.log("hola");
    let mensaje = prompt("introduce algo");
    if(mensaje.length > 0){ // para ver si el mensaje tiene algo
        console.log("Gracias. has enviado: "+mensaje);
        break; // rompe bucle
    }else{
        console.log("No enviaste nada");
    }
}

//comprobación con N de intentos máximo
function comprobarNombre() {
    let intentos = 0;
    while (intentos < 3) {
        let nombre = prompt("introduce nombre");
        if (nombre != "") {
            console.log("Nombre: " + nombre);
            break;
        }

        intentos++;
    }
}

//entre 1 y N veces
function ejemploDoWhile() {
    i = 0;
    let text = "";
    do {
        text += "The number is " + i + "\n"; // += --> concatena texto (une o enlaza)
        console.log(text);
        i++;
    }
    while (i < 10);
}

/* Llamada a las funciones/ejecución de funciones*/ 
//cruzarCalle();
//console.log("Ejecuta cruzarCalle2:");
//cruzarCalle2("yellow");
//cruzarCalleSwitch();
//printYears();
//ejemploWhile();
//comprobarNombre();
ejemploDoWhile();