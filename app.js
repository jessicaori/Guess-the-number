// Declarando variables
let inicio = parseInt(prompt("Ingresa el número inicial: "));
let fin = parseInt(prompt("Ingresa el número final: "));        // caso ideal en el que fin > inicio

let numeroSecreto = Math.floor(Math.random()*(fin-inicio) + inicio) + 1;
// console.log(numeroSecreto);
let numeroUsuario = parseInt(prompt(`Ingresa número entre ${inicio} y ${fin}:`));
// console.log(numeroUsuario);
let intentos = 1;
let maximosintentos = 7;

let bb = 0;
while(bb==0){
    if(numeroUsuario == numeroSecreto) {
        bb=1;
        alert(`¡Adivinaste el número ${numeroSecreto}! con ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}.`);     // Con operador ternario
    } else {
        if(intentos >= maximosintentos) {
            alert(`Número máximo de intentos ${maximosintentos} alcanzado. El número secreto era ${numeroSecreto}.`);
            break;
        }
        if(numeroUsuario > numeroSecreto) {
            mensajeAlerta = "El número secreto es menor.";
        } else {
            mensajeAlerta = "El número secreto es mayor.";
        }
        alert("No adivinaste el número, intenta de nuevo. " + mensajeAlerta);
        numeroUsuario = parseInt(prompt(`Ingresa número entre ${inicio} y ${fin}:`));
        console.log(numeroUsuario);
        intentos++;
    }
}