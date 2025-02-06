// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    // Capturamos el valor del campo de entrada
    const nombreAmigo = document.getElementById("amigo").value;

    // Validación para asegurarnos de que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        // Agregamos el nombre al array de amigos
        amigos.push(nombreAmigo);

        // Limpiamos el campo de entrada
        document.getElementById("amigo").value = "";

        // Actualizamos la lista de amigos en el HTML
        actualizarListaAmigos();
    }
}

// Función para mostrar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Iteramos sobre el array de amigos y agregamos cada uno a la lista HTML
    for (let amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un amigo secreto de forma aleatoria
function sortearAmigo() {
    // Validamos que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("Por favor, añada al menos un amigo para realizar el sorteo.");
    } else {
        // Generamos un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Obtenemos el nombre sorteado
        const amigoSorteado = amigos[indiceAleatorio];

        // Mostramos el nombre sorteado en la página
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    }
}

