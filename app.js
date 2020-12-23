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

//removes existing child divs
function removeAllChildNodes(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function createGridLayout() {
  //removes existing child elements
  removeAllChildNodes(container);
  //grab input for grid dimensions
  let gridDim = gridInput.value;
  //if grid dimensions are greater than 100, it defaults to 100
  if (gridDim > 100) {
    gridDim = 100;
    gridInput.value = 100;
  }
  //Grid padding is determined by grid dimensions
  if (gridDim > 50 && gridDim <= 100) {
    container.style.setProperty('--grid-item-padding', '5px');
  } else if (gridDim <= 50 && gridDim > 16) {
    container.style.setProperty('--grid-item-padding', '7px');
  }
  //Run Function to Generate Grid Layout
  makeRows(gridDim, gridDim);
}

//Event Listeners
container.addEventListener('mouseover', changeColor);
container.addEventListener('touchstart', changeColor);
clear.addEventListener('click', clearGrid);
createGrid.addEventListener('click', createGridLayout);
