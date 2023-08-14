alert("Vamos a jugar un juego");
//Declaración de variables
let Jugador1 = prompt("Ingrese nombre Jugador1:");
let Jugador2 = prompt("Ingrese nombre Jugador2:");
let seleccionJugador1 = prompt("Selecciona una opción: \n1. Piedra \n2. Papel \n3. Tijera");
let seleccionJugador2 = prompt("Selecciona una opción: \n1. Piedra \n2. Papel \n3. Tijera");



// Logica para indicar que piedra le gana a tijera, papel a piedra y tijera a papel.
function determinarGanador(seleccionJugador1, seleccionJugador2){
    if (seleccionJugador1 === seleccionJugador2){
        return "Es un empate.";
    } else if (
        (seleccionJugador1 === "1" && seleccionJugador2 === "3") ||
        (seleccionJugador1 === "2" && seleccionJugador2 === "1") ||
        (seleccionJugador1 === "3" && seleccionJugador2 === "2")
    ){
        return "¡" + Jugador1 + " gana!";
    }else {
        return "¡" + Jugador2 + " gana!";
    }
}

let ganador = determinarGanador(seleccionJugador1, seleccionJugador2);



// Cambio de la selección de un numero a la palabra elegida
if(seleccionJugador1 == 1){
    seleccionJugador1 = "Piedra";
}else{
    if(seleccionJugador1 == 2){
        seleccionJugador1 = "Papel";
    }else{
        if(seleccionJugador1 == 3){
            seleccionJugador1 = "Tijera";
        }else {alert("Elegiste mal");
        }
    }
}

if(seleccionJugador2 == 1){
    seleccionJugador2 = "Piedra";
}else{
    if(seleccionJugador2 == 2){
        seleccionJugador2 = "Papel";
    }else{
        if(seleccionJugador2 == 3){
            seleccionJugador2 = "Tijera";
        }else {alert("Elegiste mal");
        }
    }
}

alert("Resultado:\n" + Jugador1 + " eligió " + seleccionJugador1 + "\n" + Jugador2 + " eligió " + seleccionJugador2 + "\n" + ganador)


