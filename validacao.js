function validateForm(plano) {
    let x = document.forms["formDiskMais"]["origem"].value;
    let y = document.forms["formDiskMais"]["destino"].value;
    let z = document.forms["formDiskMais"]["minutos"].value;
    
    if (x == "" || y == "") {
        alert("Por favor, insira os códigos de área.");
        fClick(plano);
        return document.getElementById('codArea').scrollIntoView();
    }

    if (z < 1) {
        alert("Por favor, insira minutos maiores que zero.");
        fClick(plano);
        return document.getElementById('minLigacao').scrollIntoView();
    }
    
    if(x != "" && y != "" && z > 0){
        fClick(plano);
        return document.getElementById('planoSelecionado').scrollIntoView();
    }
}