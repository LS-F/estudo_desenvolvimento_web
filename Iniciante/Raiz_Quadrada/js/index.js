function calculaRaizQuadrada(){
    //cria referência aos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");
    
    var numero = Number(inNumero.value);

    // avalia se o valor é Not-a-Number
    if( numero == "" || isNaN(numero)){
        alert("Informe um número válido..");
        inNumero.focus();
        return;
    }

    // realiza o cálculo da raiz
    var raiz = Math.sqrt(numero)

    if( raiz == Math.floor(raiz)){
        outResposta.textContent = "Raiz: " + raiz;
    }else{
        outResposta.textContent = "Não há raiz exata para " + numero;
    }

}

var btExibirRaiz = document.getElementById("btExibirRaiz");
btExibirRaiz.addEventListener("click", calculaRaizQuadrada);