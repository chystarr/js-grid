let numRows = 0;
let numCols = 0;
let colorSelected;
document.getElementById("grid").addEventListener("click", fillOne);

//Add a row
function addR() {
  let row = document.createElement("tr"); // create a new tr (table row) element in the grid
  if (numRows === 0) { // if the grid is empty
    numCols++; // one new column has to be created
  }
  numRows++; // one row is always added no matter what
  for (let i = 0; i < numCols; i++) { // for each column, one td element needs to be added to the row
    let data = document.createElement("td"); // create one table data cell
    row.appendChild(data); // append the data cell to the row
  }
  document.getElementById("grid").appendChild(row); // add the created row to the grid
}
//Add a column
function addC() {
  if (numCols === 0) { // if the grid is empty
    numRows++; // one new row has to be created
    let row = document.createElement("tr"); // create a new tr element
    document.getElementById("grid").appendChild(row); // add the created row to the grid
  }
  // otherwise, there is already at least one row in the grid
  numCols++; // one column is always added no matter what
  let rows = document.getElementById("grid").querySelectorAll("tr"); // get all of the rows in the table
  for (let i = 0; i < numRows; i++) { // for each row, one td element must be added at the end
    let data = document.createElement("td"); // create a new td element
    rows[i].appendChild(data); // append the new td element to the row
  }

}

//Remove a row
function removeR() {
  if (numRows !== 0) { // if there are 0 rows, then there are none to delete
    numRows--;
    let grid = document.getElementById("grid");
    grid.removeChild(grid.lastElementChild); // remove the last row from the grid
    if (numRows === 0) { // if the grid has been made empty
      numCols = 0; // there are no longer any table data cells, so there should be 0 columns
    }
  }
}
//Remove a column
function removeC() {
  if (numCols !== 0) { // if there are 0 columns, then there are none to delete
    numCols--;
    let rows = document.getElementById("grid").querySelectorAll("tr"); // get all of the rows in the table
    for (let i = 0; i < numRows; i++) { // for each row, one td element must be removed from the end
      rows[i].removeChild(rows[i].lastElementChild); // remove the last data cell from each row
    }
    if (numCols === 0) { // if the grid is now empty
      numRows = 0; // there are no longer any table data cells, so there should be 0 columns
    }
  }
}
//sets global var for selected color
function selected() {
  colorSelected = document.getElementById("selectedID").value;
}

function fillOne() {
  let rows = document.getElementById("grid").querySelectorAll("tr"); // get all of the rows in the table
  for (let i = 0; i < numRows; i++) {
    let data_cells = rows[i].querySelectorAll("td"); // get all of the data cells in the row
    for (let i = 0; i < numCols; i++) {
      let data = data_cells[i]; // data is a single td element
      data.addEventListener("click", function() {
        data.style.background = colorSelected;
      });
    }
  }
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