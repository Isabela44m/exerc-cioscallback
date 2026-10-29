function verificarNota(nota, callback) {
    callback(nota);
}

function mostrarSituacao(nota) {
    if (nota >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Recuperação");
    }
}

verificarNota(9, mostrarSituacao);
verificarNota(3, mostrarSituacao);