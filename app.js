// Declarando variables
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
console.log(numeroSecreto);
let numeroUsuario = parseInt(prompt("Ingresa número: "));
console.log(numeroUsuario);
let intentos = 1;
let maximosintentos = 3;

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
        numeroUsuario = parseInt(prompt("Ingresa número: "));
        console.log(numeroUsuario);
        intentos++;
    }
}