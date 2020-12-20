//Declare Variables
const container = document.getElementById('container');
const clear = document.getElementById('clear');
const gridInput = document.querySelector('input');
const createGrid = document.querySelector('#createGrid');

//Functions
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    cell.id = `grid${i}`;
    container.appendChild(cell).className = 'grid-item';
  };
};

function changeColor(e) {
    //Grab child divs with 'grid-item class'
    if (e.target.className === 'grid-item') {
        //Create random fill color
        const randNum1 = Math.floor(Math.random() * 255);
        const randNum2 = Math.floor(Math.random() * 255);
        const randNum3 = Math.floor(Math.random() * 255);
        const randColor = `rgb(${randNum1}, ${randNum2}, ${randNum3})`;
        document.getElementById(e.target.id).style.backgroundColor = randColor;
    }
}

function clearGrid() {
    //Grab child divs from container div
    const childDivs = container.children;
   for (let i = 0; i < childDivs.length; i++) {
       childDivs[i].style.backgroundColor = 'white';
   }  
}

function createGridLayout() {
  //clear grid colors before making new grid
  clearGrid();
  //grab input for grid dimensions
  let gridDim = gridInput.value;
  //if grid dimensions are greater than 50, it defaults to 50
  if (gridDim > 50) {
    gridDim = 50;
    gridInput.value = 50;
  }
  makeRows(gridDim, gridDim);
}

//Event Listeners
container.addEventListener('mouseover', changeColor)
clear.addEventListener('click', clearGrid);
createGrid.addEventListener('click', createGridLayout)
