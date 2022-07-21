function calcularMedia() {
    // cria referência aos elementos da página
    var inNomeAluno = document.getElementById("inNomeAluno");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao");

    // obtém conteúdo dos campos de entrada
    var nomeAluno = inNomeAluno.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);

    //calcula a média do aluno
    var media = (nota1 + nota2) / 2;

    // Condição para validar situação do aluno e alterar o conteúdo da linha de resposta
    if(media >= 7.0){
        outMedia.textContent = "Média das Notas: " + media.toFixed(1);
        outSituacao.textContent = "Parabéns " + nomeAluno + "! Você foi aprovado(a)";
        outSituacao.style.color = "blue";
    }else{
        outMedia.textContent = "Média das Notas: " + media;
        outSituacao.textContent = "Ops " + nomeAluno + "! Você foi reprovado(a)";
        outSituacao.style.color = "red";
    }
    
}
// cria referência ao elemento btResultado
var btResultado = document.getElementById("btResultado");
// registra um evento associado ao botão, para carregar uma função
btResultado.addEventListener("click", calcularMedia);