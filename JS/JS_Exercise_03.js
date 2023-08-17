function EJ1() {
    const numeroUsuario = parseInt(prompt("Por favor, introduce un número:"));

    for (let i = 1; i <= numeroUsuario; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}

function EJ2() {
    const primerNumero = parseInt(prompt("Introduce el primer número entre 1 y 50:"));
    const segundoNumero = parseInt(prompt("Introduce el segundo número entre 1 y 50:"));

    for (let i = 1; i <= 50; i++) {
        if (i === primerNumero || i === segundoNumero) {
            console.log(i + " ¡Lotería!");
        } else {
            console.log(i);
        }
    }
}

function EJ3() {
    const numeros = [];

    while (true) {
        const numero = parseInt(prompt("Introduce un número (0 para terminar):"));
        if (numero === 0) {
            break;
        }
        numeros.push(numero);
    }
    console.log("Números capturados:", numeros);
}

function EJ4() {
    let palabrasCapturadas = "";

    while (true) {
        const palabra = prompt("Introduce una palabra (deja vacío para terminar):");
        if (palabra === "") {
            break;
        }
        palabrasCapturadas += palabra + " ";
    }
    console.log("Palabras capturadas:", palabrasCapturadas);
}

function EJ5() {
    while (true) {
        const diaSemana = prompt("Introduce un día de la semana:");
        
        if (diaSemana.toLowerCase() === "domingo") {
            alert("Ve a descansar");
            break;
        } else {
            switch (diaSemana.toLowerCase()) {
                case "lunes":
                    alert("¡Ánimo, es lunes!");
                    break;
                case "martes":
                    alert("Es martes, sigue adelante.");
                    break;
                case "miercoles":
                    alert("Mitad de semana, ¡puedes hacerlo!");
                    break;
                case "jueves":
                    alert("Casi llegando al viernes.");
                    break;
                case "viernes":
                    alert("¡Viernes, fin de la semana laboral!");
                    break;
                case "sabado":
                    alert("Disfruta del sábado.");
                    break;
                default:
                    alert("Día no reconocido.");
            }
        }
    }
}