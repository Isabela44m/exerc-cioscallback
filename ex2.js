function mostraBoasVindas(){
    console.log("Ola!Boas Vindas");
}
function mostrarDespedida(){
    console.log("Até mais");
}
function executarmensagem(acao) {
    acao();


}
executarmensagem(mostraBoasVindas);
executarmensagem(mostrarDespedida);
