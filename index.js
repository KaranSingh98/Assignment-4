
function myFunction() {
  var row = document.getElementById("myRow");
  var x = row.insertCell(0);
  x.innerHTML = "";
}

function addColumn() {

    let table = document.getElementById('table');

    for(let i = 0; i < table.rows.length; i++) {

        table.rows[i].insertCell(-1);
    }
}

function removeColumn() {

    let table = document.getElementById('table');

    for(let i = 0; i < table.rows.length; i++) {

        table.rows[i].deleteCell(-1);
    }
}


function colorSet(){

    let menu = document.getElementById('colors');

    return menu.options[menu.selectedIndex].value;
}

function colorCell() {

    let cell = event.target;

    cell.style.backgroundColor = colorSet();
}
