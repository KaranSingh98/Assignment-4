
function myFunction() {
  var row = document.getElementById("myRow");
  var x = row.insertCell(0);
  x.innerHTML = "";
}

function addColumn() {

    let table = document.getElementById('table');

    for(let i = 0; i <= table.rows.length; i++) {

        table.rows[i].insertCell(-1);
    }
}

function removeColumn() {

    let table = document.getElementById('table');

    for(let i = 0; i <= table.rows.length; i++) {

        table.rows[i].deleteCell(-1);
    }
}

function colorSet(color) {

    newColor = color;

    return newColor;
}
