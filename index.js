
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
function addRow(){
  let table = document.getElementById('table');
   let row = table.insertRow(-1);
   row.insertCell(-1);
  // for(let i = 0; i<= table.rows.length; i++){
    
    
  // }
}
function removeRow(){
  
  let table =document.getElementById('table');

    //for(let i = 0; i <= table.rows.length; i++) {

        table.deleteRow(-1);
    //}
    
    //table.rows.deleteCell(-1);
  

}