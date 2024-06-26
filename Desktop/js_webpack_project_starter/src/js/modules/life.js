const menu = document.querySelector('#gl-menu');
const sizeSelect = document.querySelector('.gl-size-select');
const speedSelect = document.querySelector('.gl-speed-select');
const randomBtns = document.querySelectorAll('.gl-random-btn');
const selfSelectBtn = document.querySelector('.gl-self-select-btn');
const canvasContainer = document.querySelector('.gl-canvas-container');
const pattern = document.querySelector('.gl-pattern');
const controller = document.querySelector('.gl-controller');
const backToMenu = document.querySelector('.gl-back-to-menu');
const ctx = canvas.getContext('2d');

let size = sizeSelect.value;
let speed = speedSelect.value;
let runningState = false;
let grid;
let numOfCols;
let numOfRows;
const RESUME_COLOR = '#0aa';
const PAUSE_COLOR = '#f55';
const ALIVE_COLOR = '#0f7';
const DEAD_COLOR = '#000';
sizeSelect.addEventListener('change', () => {
  size = sizeSelect.value;
});

speedSelect.addEventListener('change', () => {
  speed = speedSelect.value;
});

randomBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    menu.classList.add('hide');
    canvasContainer.classList.add('active');
    runningState = true;
    controller.textContent = 'Pause';
    controller.style.backgroundColor = PAUSE_COLOR;
    grid = createRandomGrid(btn.dataset.value);
    drawAliveCells(grid);
  });
});

selfSelectBtn.addEventListener('click', () => {
  menu.classList.add('hide');
  canvasContainer.classList.add('active');
  pattern.classList.add('active');
  controller.textContent = 'Generate';
  controller.style.backgroundColor = RESUME_COLOR;
});

backToMenu.addEventListener('click', () => {
  menu.classList.remove('hide');
  canvasContainer.classList.remove('active');
  pattern.classList.remove('active');
  runningState = false;
});

controller.addEventListener('click', () => {
  runningState = runningState ? false : true;
  if (!runningState) {
    controller.textContent = 'Resume';
    controller.style.backgroundColor = RESUME_COLOR;
  } else {
    controller.textContent = 'Pause';
    controller.style.backgroundColor = PAUSE_COLOR;
  }
});

function generateEmptyGrid() {
  numOfCols = canvas.width / size;
  numOfRows = canvas.height / size;
  let emptyGrid = new Array(numOfCols);
  for (let i = 0; i < emptyGrid.length; i++) {
    emptyGrid[i] = new Array(numOfRows);
  }
  return emptyGrid;
}

function createRandomGrid(num) {
  grid = generateEmptyGrid();
  for (let i = 0; i < numOfCols; i++) {
    for (let j = 0; j < numOfRows; j++) {
      grid[i][j] = Math.floor(Math.random() * num);
    }
  }
  return grid;
}

function drawAliveCells(grid) {
  for (let i = 0; i < numOfCols; i++) {
    for (let j = 0; j < numOfRows; j++) {
      let x = i * size;
      let y = j * size;
      if (grid[i][j] === 1) {
        ctx.fillStyle = ALIVE_COLOR;
        ctx.fillRect(x, y, size, size);
      } else {
        ctx.fillStyle = DEAD_COLOR;
        ctx.fillRect(x, y, size, size);
      }
    }
  }
}
