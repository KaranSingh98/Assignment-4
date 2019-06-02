function addRow() {

    let table = document.getElementById('table');

    let newRow = table.insertRow(-1);

    for(let i = 0; i < table.rows[0].cells.length; i++) {

        newRow.insertCell(i);
    }
}

function removeRow() {

    let table = document.getElementById('table');

    if(table.rows.length > 1)
        table.deleteRow(-1);
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

        if(i === 0 && table.rows[0].cells.length === 1)
            return;
        else
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

function fillAll() {

    let table = document.getElementById('table');

    for(let i = 0; i < table.rows.length; i++) {

        for(let j = 0; j < table.rows[i].cells.length; j++) {

            table.rows[i].cells[j].style.backgroundColor = colorSet();
        }
    }
}
