function calcularPeso(){
    // cria referência aos elementos da página
    var inNome = document.getElementById("inNome");
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminino = document.getElementById("rbFeminino");
    var inAltura = document.getElementById("inAltura");
    var outResultado = document.getElementById("outResultado");
    

    //obtém o conteúdo dos campos de edição da página
    var nome = inNome.value;
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;
    var altura = Number(inAltura.value);

    // verifica se nome foi preenchido e sexo selecionado
    if(nome == "" || (masculino == false && feminino == false)){
        alert("Por favor, informe o nome e selecione o sexo..");
        inNome.focus(); //posiciona (joga o foco) no campo de edição inNome
        return;        
    }

    //se altura vazio (0) ou NaN: Not-a-Number (um texto for informado, por exemplo)
    if(altura == 0 || isNaN(altura)){
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;
    }

    
    
    // se masculino (significa se masculino == true)
    if(masculino){
        var peso = 22 * Math.pow(altura, 2);
    }else{
        var peso = 21 * Math.pow(altura, 2);
    }

    // apresenta a resposta (altera o conteúdo da linha outResposta)
    outResultado.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + "kg";
}

// cria referência ao elemento btCalcular e registra evento associado a calcularPeso
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);

function limparCampos(){
    // Limpa os conteúdos dos elementos
    document.getElementById("inNome").value = "";
    document.getElementById("rbMasculino").checked = false;
    document.getElementById("rbFeminino").checked = false;
    document.getElementById("inAltura").value = "";
    document.getElementById("outResposta").textContent = "";

    

    // posiciona (joga o foco) no elemento inNome
    document.getElementById("inNome").focus();
}

var btLimparCampo = document.getElementById("btLimparCampo");
btLimparCampo.addEventListener("click", limparCampos);
