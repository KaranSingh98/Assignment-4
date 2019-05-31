function addColumn() {

    let table = document.getElementById('table');

    for (let i = 0; i <= table.rows.length; i++) {
        let x = table.rows[i].insertCell(-1);
        x.innerHTML = "new";
    }
}

function removeColumn() {



}
