function calcValor(plano, minutos, tarifa, acrescimo){

    let valor = -1;

    if(plano >= minutos){
        valor = 0;
    }else{
        valor = (minutos-plano) * tarifa;
        valor += valor * acrescimo;
    }

    return valor;
}

function definirTarifa(origem, destino) {
    
    let tar = 0;

    const obj = conexoes.filter(conexao => (conexao.origem == origem && conexao.destino == destino));
    
    if (obj.length == 1){
        tar = obj[0].taxa;
    }

    return tar;
}

function solucao (codCidadeOrigem, codCidadeDestino, minutosDeLigacao, planoDiskMais) {
    
    let tarifaFixa = definirTarifa(codCidadeOrigem, codCidadeDestino);

    let resultados = {
        comPlano: 'Opção não disponível',
        semPlano: 'Opção não disponível'
    }
    
    if(tarifaFixa != 0 
        && planos.hasOwnProperty(planoDiskMais) 
        && !isNaN(minutosDeLigacao) 
        && minutosDeLigacao >= 0 
        && typeof codCidadeOrigem === 'string'
        && typeof codCidadeDestino === 'string'){
            resultados.comPlano = calcValor(planos[planoDiskMais], minutosDeLigacao, tarifaFixa, acrescimoMinExcedente);
            resultados.semPlano = minutosDeLigacao * tarifaFixa;
    }

    return resultados;
}

function fClick(planoEscolhido){
    let origem = document.getElementById("origem").value;
    let destino = document.getElementById("destino").value;
    let minutos = document.getElementById("minutos").value;
    let plano = planoEscolhido;
    r = solucao(origem, destino, minutos, plano);
    document.getElementById("planoSelecionado").innerHTML = plano.replace(/\w/, firstLetter => firstLetter.toUpperCase());
    
    if(r.comPlano != 'Opção não disponível') {
        document.getElementById("comPlano").innerHTML = "R$ " + r.comPlano.toFixed(2);
        document.getElementById("semPlano").innerHTML = "R$ " + r.semPlano.toFixed(2);
    }else{
        document.getElementById("comPlano").innerHTML = r.comPlano;
        document.getElementById("semPlano").innerHTML = r.semPlano;
    }
}