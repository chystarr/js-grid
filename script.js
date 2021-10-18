let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
  let row = document.createElement("tr"); // create a new tr (table row) element in the grid
  if (numRows === 0) { // if the grid is empty
    numCols++; // one new column has to be created
  }
  numRows++; // one row is always added no matter what
  for (let i = 0; i < numCols; i++) { // for each column, one td element needs to be added to the row
    let cell = document.createElement("td"); // create one table date cell
    row.appendChild(cell); // append the cell to the row
  }
  document.getElementById("grid").appendChild(row); // add the created row to the grid
}
//Add a column
function addC() {
  alert("Clicked Add Col")
}

//Remove a row
function removeR() {
  alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
  alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
  colorSelected = document.getElementById("selectedID").value;
  console.log(colorSelected);
}

function fill(){
  alert("Clicked Fill All")
}

function clearAll(){
  alert("Clicked Clear All")
}

function fillU(){
  alert("Clicked Fill All Uncolored")
}