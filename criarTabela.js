function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        key = key.replace(/\w/, firstLetter => firstLetter.toUpperCase());
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector(".tOpcoes");
let data = Object.keys(conexoes[0]);
generateTableHead(table, data);
generateTable(table, conexoes);