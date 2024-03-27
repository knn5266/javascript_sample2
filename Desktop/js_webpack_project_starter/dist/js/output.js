/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todo.js */ \"./src/js/modules/todo.js\");\n/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_todo_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_typing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/typing.js */ \"./src/js/modules/typing.js\");\n/* harmony import */ var _modules_typing_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_typing_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slide.js */ \"./src/js/modules/slide.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_slide_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_memory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/memory.js */ \"./src/js/modules/memory.js\");\n/* harmony import */ var _modules_memory_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_memory_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_life_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/life.js */ \"./src/js/modules/life.js\");\n/* harmony import */ var _modules_life_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_life_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst nav = document.querySelector('#nav');\nconst cover = document.querySelector('#cover');\nconst appNames = ['todo', 'typing', 'slide-puzzle', 'memory-card', 'life'];\n\nappNames.forEach((appName) => {\n  const menu = document.createElement('a');\n  menu.classList.add('nav-menu');\n  menu.textContent = appName.toUpperCase();\n  menu.addEventListener('click', () => {\n    cover.classList.remove('active');\n    const appEls = document.querySelectorAll('.app');\n    appEls.forEach((appEl) => {\n      appEl.classList.remove('active');\n    });\n    const appEl = document.getElementById(appName);\n    appEl.classList.add('active');\n    const navMenus = document.querySelectorAll('.nav-menu');\n    navMenus.forEach((navMenu) => {\n      navMenu.classList.remove('active');\n    });\n    menu.classList.add('active');\n  });\n  nav.appendChild(menu);\n});\n\n\n//# sourceURL=webpack://js_webpack_project_starter/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/life.js":
/*!********************************!*\
  !*** ./src/js/modules/life.js ***!
  \********************************/
/***/ (() => {

eval("const menu = document.querySelector('#gl-menu');\nconst sizeSelect = document.querySelector('.gl-size-select');\nconst speedSelect = document.querySelector('.gl-speed-select');\nconst randomBtns = document.querySelectorAll('.gl-random-btn');\nconst selfSelectBtn = document.querySelector('.gl-self-select-btn');\nconst canvasContainer = document.querySelector('.gl-canvas-container');\nconst pattern = document.querySelector('.gl-pattern');\nconst controller = document.querySelector('.gl-controller');\nconst backToMenu = document.querySelector('.gl-back-to-menu');\nconst ctx = canvas.getContext('2d');\n\nlet size = sizeSelect.value;\nlet speed = speedSelect.value;\nlet runningState = false;\nlet grid;\nlet numOfCols;\nlet numOfRows;\nconst RESUME_COLOR = '#0aa';\nconst PAUSE_COLOR = '#f55';\nconst ALIVE_COLOR = '#0f7';\nconst DEAD_COLOR = '#000';\nsizeSelect.addEventListener('change', () => {\n  size = sizeSelect.value;\n});\n\nspeedSelect.addEventListener('change', () => {\n  speed = speedSelect.value;\n});\n\nrandomBtns.forEach((btn) => {\n  btn.addEventListener('click', () => {\n    menu.classList.add('hide');\n    canvasContainer.classList.add('active');\n    runningState = true;\n    controller.textContent = 'Pause';\n    controller.style.backgroundColor = PAUSE_COLOR;\n    grid = createRandomGrid(btn.dataset.value);\n    drawAliveCells(grid);\n  });\n});\n\nselfSelectBtn.addEventListener('click', () => {\n  menu.classList.add('hide');\n  canvasContainer.classList.add('active');\n  pattern.classList.add('active');\n  controller.textContent = 'Generate';\n  controller.style.backgroundColor = RESUME_COLOR;\n});\n\nbackToMenu.addEventListener('click', () => {\n  menu.classList.remove('hide');\n  canvasContainer.classList.remove('active');\n  pattern.classList.remove('active');\n  runningState = false;\n});\n\ncontroller.addEventListener('click', () => {\n  runningState = runningState ? false : true;\n  if (!runningState) {\n    controller.textContent = 'Resume';\n    controller.style.backgroundColor = RESUME_COLOR;\n  } else {\n    controller.textContent = 'Pause';\n    controller.style.backgroundColor = PAUSE_COLOR;\n  }\n});\n\nfunction generateEmptyGrid() {\n  numOfCols = canvas.width / size;\n  numOfRows = canvas.height / size;\n  let emptyGrid = new Array(numOfCols);\n  for (let i = 0; i < emptyGrid.length; i++) {\n    emptyGrid[i] = new Array(numOfRows);\n  }\n  return emptyGrid;\n}\n\nfunction createRandomGrid(num) {\n  grid = generateEmptyGrid();\n  for (let i = 0; i < numOfCols; i++) {\n    for (let j = 0; j < numOfRows; j++) {\n      grid[i][j] = Math.floor(Math.random() * num);\n    }\n  }\n  return grid;\n}\n\nfunction drawAliveCells(grid) {\n  for (let i = 0; i < numOfCols; i++) {\n    for (let j = 0; j < numOfRows; j++) {\n      let x = i * size;\n      let y = j * size;\n      if (grid[i][j] === 1) {\n        ctx.fillStyle = ALIVE_COLOR;\n        ctx.fillRect(x, y, size, size);\n      } else {\n        ctx.fillStyle = DEAD_COLOR;\n        ctx.fillRect(x, y, size, size);\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://js_webpack_project_starter/./src/js/modules/life.js?");

/***/ }),

/***/ "./src/js/modules/memory.js":
/*!**********************************!*\
  !*** ./src/js/modules/memory.js ***!
  \**********************************/
/***/ (() => {

eval("const deck = document.querySelector('.mc-deck');\nconst congrats = document.querySelector('.mc-congrats');\nconst timer = document.querySelector('.mc-time');\nconst matchedCounter = document.querySelector('.mc-matched');\nconst failedCounter = document.querySelector('.mc-failed');\nconst resetBtn = document.querySelector('.mc-reset-btn');\nconst finishTimeEl = document.querySelector('.mc-congrats >h2>span');\nconst retry = document.querySelector('.mc-retry-btn');\n\nlet cards = [];\nlet openedCards = [];\nlet matchedCount = 0;\nlet time = 0;\nlet failedCount = 0;\nlet playingNow = false;\nlet intervalId;\nlet finishTime;\nconst faces = [\n  'bug',\n  'upload',\n  'configuration',\n  'connection',\n  'database',\n  'www',\n  'mobile',\n  'keyboard',\n];\nconst facesPath = {\n  bug: './images/memory_card/bug.svg',\n  upload: './images/memory_card/upload.svg',\n  configuration: './images/memory_card/configuration.svg',\n  connection: './images/memory_card/connection.svg',\n  database: './images/memory_card/database.svg',\n  www: './images/memory_card/www.svg',\n  mobile: './images/memory_card/mobile.svg',\n  keyboard: './images/memory_card/keyboard.svg',\n};\n\nfunction createDeck() {\n  function createCard() {\n    const cardDiv = document.createElement('div');\n    cardDiv.classList.add('mc-card');\n\n    const frontDiv = document.createElement('div');\n    frontDiv.classList.add('mc-front');\n    const frontImg = document.createElement('img');\n    frontDiv.appendChild(frontImg);\n\n    const backDiv = document.createElement('div');\n    backDiv.classList.add('mc-back');\n    const backImg = document.createElement('img');\n    backImg.setAttribute('src', './images/memory_card/hand.svg');\n    backDiv.appendChild(backImg);\n\n    cardDiv.appendChild(frontDiv);\n    cardDiv.appendChild(backDiv);\n\n    return cardDiv;\n  }\n\n  function generateShuffledArray(arr) {\n    let shuffledArray = arr.slice();\n    for (let i = shuffledArray.length - 1; i > -1; i--) {\n      let randomIndex = Math.floor(Math.random() * shuffledArray.length);\n      let tempValue = shuffledArray[i];\n      shuffledArray[i] = shuffledArray[randomIndex];\n      shuffledArray[randomIndex] = tempValue;\n    }\n    return shuffledArray;\n  }\n\n  const orderedFaces = [...faces, ...faces];\n  const shuffledFaces = generateShuffledArray(orderedFaces);\n\n  shuffledFaces.forEach((face) => {\n    const cardDiv = createCard();\n    const frontImage = cardDiv.querySelector('.mc-front > img');\n    frontImage.setAttribute('src', facesPath[face]);\n    deck.appendChild(cardDiv);\n    cardDiv.addEventListener('click', flip);\n  });\n}\n\nfunction flip() {\n  if (!playingNow) {\n    playingNow = true;\n    intervalId = setInterval(() => {\n      time++;\n      timer.textContent = time;\n    }, 1000);\n  }\n\n  if (openedCards.length === 0) {\n    this.classList.add('rotate');\n    openedCards.push(this);\n  } else if (openedCards.length === 1) {\n    if ((this === openedCards.length) === 1) {\n      return;\n    }\n    this.classList.add('rotate');\n    openedCards.push(this);\n    matchedOrNot(openedCards[0], openedCards[1]);\n  }\n}\nfunction matchedOrNot(card1, card2) {\n  const cardsToCheck = [card1, card2];\n  const cardOneFace = card1.querySelector('.mc-front > img').src;\n  const cardTwoFace = card2.querySelector('.mc-front > img').src;\n  if (cardOneFace === cardTwoFace) {\n    matchedCount++;\n    matchedCounter.textContent = matchedCount;\n    cardsToCheck.forEach((card) => {\n      card.classList.add('matched');\n      card.removeEventListener('click', flip);\n    });\n    if (matchedCount === 8) {\n      clearInterval(intervalId);\n      finishTime = time;\n      finishTimeEl.textContent = finishTime;\n      setTimeout(() => {\n        congrats.classList.add('show');\n      }, 2500);\n    }\n    openedCards = [];\n  } else {\n    failedCount++;\n    failedCounter.textContent = failedCount;\n    setTimeout(() => {\n      cardsToCheck.forEach((card) => {\n        card.classList.remove('rotate');\n        openedCards = [];\n      });\n    }, 800);\n  }\n}\n\nresetBtn.addEventListener('click', () => {\n  start();\n});\n\nfunction start() {\n  matchedCount = 0;\n  matchedCounter.textContent = matchedCount;\n  failedCount = 0;\n  failedCounter.textContent = failedCount;\n  time = 0;\n  timer.textContent = time;\n  openedCards = [];\n  deck.innerHTML = '';\n  playingNow = false;\n  clearInterval(intervalId);\n  createDeck();\n}\n\nretry.addEventListener('click', () => {\n  congrats.classList.remove('show');\n  start();\n});\nstart();\n\n\n//# sourceURL=webpack://js_webpack_project_starter/./src/js/modules/memory.js?");

/***/ }),

/***/ "./src/js/modules/slide.js":
/*!*********************************!*\
  !*** ./src/js/modules/slide.js ***!
  \*********************************/
/***/ (() => {

eval("const menuCover = document.querySelector('.sp-cover');\nconst menu = document.querySelectorAll('.sp-menu > li');\nconst backToMenu = document.querySelector('.sp-back-to-menu');\nconst originalImage = document.querySelector('#sp-original-image');\nconst showOriginalBtn = document.querySelector('#sp-show-original-btn');\nconst screen = document.querySelector('.sp-screen');\nconst counter = document.querySelector('.sp-counter');\n\nlet level;\nlet size;\nlet orderedArray = [];\nlet hiddenTileIndex;\nlet tilesArray = [];\nlet tiles;\nlet count = 0;\nconst images = ['space', 'veges'];\nlet selectedImage;\nconst levelMap = {\n  easy: { grid: 'auto auto', size: 2 },\n  medium: { grid: 'auto auto auto', size: 3 },\n  difficult: { grid: 'auto auto auto auto', size: 4 },\n};\n\nmenu.forEach((item) => {\n  item.addEventListener('click', () => {\n    menuCover.classList.add('hide');\n    level = item.dataset.level;\n    size = levelMap[level].size;\n    orderedArray = [];\n    for (let x = 0; x < size; x++) {\n      for (let y = 0; y < size; y++) {\n        let tileXY = '' + x + y;\n        orderedArray.push(tileXY);\n      }\n    }\n    hiddenTileIndex = Math.floor(Math.random() * size ** 2);\n    screen.style.gridTemplateColumns = levelMap[level].grid;\n    start();\n  });\n});\n\nbackToMenu.addEventListener('click', () => {\n  menuCover.classList.remove('hide');\n  screen.classList.remove('zoom');\n});\n\nfunction setOriginalImage() {\n  selectedImage = images[Math.floor(Math.random() * images.length)];\n  originalImage.setAttribute(\n    'src',\n    `./images/slide_puzzle/${selectedImage}/${selectedImage}.png`\n  );\n}\n\noriginalImage.onload = () => {\n  const naturalWidth = originalImage.naturalWidth;\n  const naturalHeight = originalImage.naturalHeight;\n  const ratio = Math.floor((naturalHeight / naturalWidth) * 1000) / 1000;\n  screen.style.width = '480px';\n  screen.style.height = `${Math.floor(480 * ratio)}px`;\n  console.log(naturalWidth);\n};\n\nshowOriginalBtn.addEventListener('mouseover', () => {\n  originalImage.classList.add('show');\n});\n\nshowOriginalBtn.addEventListener('mouseleave', () => {\n  originalImage.classList.remove('show');\n});\n\nfunction renderTiles(arr) {\n  screen.innerHTML = '';\n  arr.forEach((tile, index) => {\n    const div = document.createElement('div');\n    div.classList.add('sp-tile');\n    if (index === hiddenTileIndex) {\n      div.classList.add('hidden');\n    }\n    div.style.backgroundImage = `url(./images/slide_puzzle/${selectedImage}/${level}/tile${tile}.png)`;\n    screen.appendChild(div);\n  });\n}\n\nfunction start() {\n  setOriginalImage();\n  count = 0;\n  counter.textContent = count;\n  tilesArray = generateShuffledArray(orderedArray);\n  renderTiles(tilesArray);\n  updateScreen();\n}\n\nfunction generateShuffledArray(arr) {\n  let shuffledArray = arr.slice();\n  for (let i = shuffledArray.length - 1; i > -1; i--) {\n    let randomIndex = Math.floor(Math.random() * shuffledArray.length);\n    let tempValue = shuffledArray[i];\n    shuffledArray[i] = shuffledArray[randomIndex];\n    shuffledArray[randomIndex] = tempValue;\n  }\n  return shuffledArray;\n}\n\nfunction updateScreen() {\n  tiles = document.querySelectorAll('.sp-tile');\n  const hiddenTileRow = Math.floor(hiddenTileIndex / size);\n  const hiddenTileCol = hiddenTileIndex % size;\n\n  function generateNewArray(arr, index, hiddenTileIndex) {\n    const tempValue = arr[index];\n    arr[index] = arr[hiddenTileIndex];\n    arr[hiddenTileIndex] = tempValue;\n    return arr;\n  }\n\n  function updateTiles(index) {\n    tilesArray = generateNewArray(tilesArray, index, hiddenTileIndex);\n    hiddenTileIndex = index;\n    renderTiles(tilesArray);\n    count++;\n    counter.textContent = count;\n    setTimeout(() => {\n      if (JSON.stringify(tilesArray) === JSON.stringify(orderedArray)) {\n        complete();\n      }\n    });\n  }\n\n  tiles.forEach((tile, index) => {\n    tile.addEventListener('click', () => {\n      const row = Math.floor(index / size);\n      const col = index % size;\n      if (level === 'easy') {\n        updateTiles(index);\n      } else {\n        if (\n          (row === hiddenTileRow && Math.abs(col - hiddenTileCol) === 1) ||\n          (col === hiddenTileCol && Math.abs(row - hiddenTileRow) === 1)\n        ) {\n          updateTiles(index);\n        }\n      }\n      updateScreen();\n    });\n  });\n}\n\nfunction complete() {\n  tiles[hiddenTileIndex].classList.remove('hidden');\n  screen.classList.add('zoom');\n  tiles.forEach((tile) => {\n    tile.classList.add('complete');\n  });\n}\n\n\n//# sourceURL=webpack://js_webpack_project_starter/./src/js/modules/slide.js?");

/***/ }),

/***/ "./src/js/modules/todo.js":
/*!********************************!*\
  !*** ./src/js/modules/todo.js ***!
  \********************************/
/***/ (() => {

eval("const addForm = document.querySelector('.td-add-form');\nconst addInput = document.querySelector('.td-add-input');\nconst todosUl = document.querySelector('.todos');\nconst donesUl = document.querySelector('.dones');\nconst searchForm = document.querySelector('.td-search-form');\nconst searchInput = document.querySelector('.td-search-input');\nlet todoData = [];\naddForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  let todoObj = {\n    content: addInput.value.trim(),\n    isDone: false,\n  };\n  if (todoObj.content) {\n    todoData.push(todoObj);\n  }\n  addInput.value = ' ';\n  updateLS();\n  updateTodo();\n});\n\nfunction updateLS() {\n  localStorage.setItem('myTodo', JSON.stringify(todoData));\n}\n\nfunction getTodoData() {\n  return JSON.parse(localStorage.getItem('myTodo')) || [];\n}\nfunction createTodoElement(todo) {\n  const todoItem = document.createElement('li');\n  todoItem.classList.add('td-item');\n  const todoContent = document.createElement('p');\n  todoContent.classList.add('td-content');\n  todoContent.textContent = todo.content;\n  todoItem.appendChild(todoContent);\n\n  const btnContainer = document.createElement('div');\n  btnContainer.classList.add('td-btn-container');\n  const btn = document.createElement('img');\n  btn.classList.add('td-btn');\n  const upBtn = btn.cloneNode(false);\n  upBtn.setAttribute('src', './images/todo_button/up.png');\n\n  if (!todo.isDone) {\n    upBtn.classList.add('edit-btn');\n    btn.classList.add('isDone-btn');\n    btn.setAttribute('src', './images/todo_button/ok.png');\n    btnContainer.appendChild(btn);\n    btnContainer.appendChild(upBtn);\n    todoItem.appendChild(btnContainer);\n    todosUl.appendChild(todoItem);\n  } else {\n    upBtn.classList.add('undo-btn');\n    btn.classList.add('delete-btn');\n    btn.setAttribute('src', './images/todo_button/cancel.png');\n    btnContainer.appendChild(btn);\n    btnContainer.appendChild(upBtn);\n    todoItem.appendChild(btnContainer);\n    donesUl.appendChild(todoItem);\n  }\n  todoItem.addEventListener('click', (e) => {\n    if (e.target.classList.contains('isDone-btn')) {\n      todo.isDone = true;\n    }\n    if (e.target.classList.contains('undo-btn')) {\n      todo.isDone = false;\n    }\n    if (e.target.classList.contains('edit-btn')) {\n      addInput.value =\n        e.target.parentElement.previousElementSibling.textContent;\n      todoData = todoData.filter((data) => data !== todo);\n      addInput.focus();\n    }\n    if (e.target.classList.contains('delete-btn')) {\n      todoData = todoData.filter((data) => data !== todo);\n    }\n    updateLS();\n    updateTodo();\n  });\n}\n\nfunction updateTodo() {\n  todosUl.innerHTML = ' ';\n  donesUl.innerHTML = ' ';\n  todoData = getTodoData();\n  todoData.forEach((todo) => {\n    createTodoElement(todo);\n  });\n}\n\nupdateTodo();\n\nsearchForm.addEventListener('submit', () => {\n  e.preventDefault();\n});\nsearchInput.addEventListener('keyup', () => {\n  const searchWord = searchInput.value.trim().toLowerCase();\n  const todoItems = document.querySelectorAll('.td-item');\n  todoItems.forEach((todoItem) => {\n    todoItem.classList.remove('hide');\n    if (!todoItem.textContent.toLowerCase().includes(searchWord)) {\n      todoItem.classList.add('hide');\n    }\n  });\n});\n\n\n//# sourceURL=webpack://js_webpack_project_starter/./src/js/modules/todo.js?");

/***/ }),

/***/ "./src/js/modules/typing.js":
/*!**********************************!*\
  !*** ./src/js/modules/typing.js ***!
  \**********************************/
/***/ (() => {

eval("const startPage = document.querySelector('#ty-start-page');\nconst typingGame = document.querySelector('#ty-game');\nconst titleTime = document.querySelector('#ty-title-time');\nconst timer = document.querySelector('#ty-timer');\nconst timeSelectEl = document.querySelector('.ty-time-select');\nconst typing = document.querySelector('#typing');\nconst backToStart = document.querySelector('#ty-back-to-start');\nconst resultContainer = document.querySelector('#ty-result-container');\nconst textarea = document.querySelector('#ty-textarea');\nconst quote = document.querySelector('#ty-quote');\nconst author = document.querySelector('#ty-author-name');\nconst LPM = document.querySelector('#ty-LPM');\nconst quoteReview = document.querySelector('#ty-quote-review');\n\nlet timelimit = 30;\nlet remainingTime;\nlet isActive = false;\nlet isPlaying = false;\nlet intervalId = null;\nlet quotes;\nlet typedCount;\nlet LPMCount;\n\ntimeSelectEl.addEventListener('change', () => {\n  timelimit = timeSelectEl.value;\n});\nwindow.addEventListener('keypress', (e) => {\n  isActive = typing.classList.contains('active');\n  if (e.key === 'Enter' && isActive && !isPlaying) {\n    start();\n    isActive = false;\n    isPlaying = true;\n  }\n  return;\n});\n\nasync function start() {\n  startPage.classList.remove('show');\n  typingGame.classList.add('show');\n  titleTime.textContent = timelimit;\n  remainingTime = timelimit;\n  timer.textContent = remainingTime;\n  await fetchAndRenderQuotes();\n  textarea.disabled = false;\n  textarea.focus();\n  typedCount = 0;\n\n  intervalId = setInterval(() => {\n    remainingTime -= 1;\n    timer.textContent = remainingTime;\n    if (remainingTime <= 0) {\n      showResult();\n    }\n  }, 1000);\n}\n\nbackToStart.addEventListener('click', () => {\n  typingGame.classList.remove('show');\n  resultContainer.classList.remove('show');\n  startPage.classList.add('show');\n  isPlaying = false;\n});\n\nfunction showResult() {\n  textarea.disabled = true;\n  resultContainer.classList.add('show');\n  clearInterval(intervalId);\n  LPMCount =\n    remainingTime === 0\n      ? Math.floor((typedCount * 60) / timelimit)\n      : Math.floor((typedCount * 60) / (time.limit - remainingTime));\n  quoteReview.innerHTML = `${quotes.quote}<br> --- ${quotes.author}`;\n  let count = 0;\n  setTimeout(() => {\n    resultContainer.classList.add('show');\n    const countup = setInterval(() => {\n      LPM.textContent = count;\n      count += 1;\n      if (count >= LPMCount) {\n        clearInterval(countup);\n      }\n    }, 20);\n  }, 1000);\n}\n\nasync function fetchAndRenderQuotes() {\n  quote.innerHTML = '';\n  textarea.value = '';\n\n  const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/quotes/random';\n  const response = await fetch(RANDOM_QUOTE_API_URL);\n  const data = await response.json();\n  // console.log(response);\n  // console.log(data);\n\n  quotes = { quote: data.content, author: data.author };\n  quotes = {\n    quote: data[0].content,\n    author: data[0].author,\n  };\n  console.log(quotes);\n  quotes.quote.split('').forEach((letter) => {\n    const span = document.createElement('span');\n    span.textContent = letter;\n    quote.appendChild(span);\n  });\n  author.textContent = quotes.author;\n  console.log(quote);\n  console.log(author);\n}\n\ntextarea.addEventListener('input', () => {\n  let inputArray = textarea.value.split('');\n  let spans = quote.querySelectorAll('span');\n  spans.forEach((span) => {\n    span.className = '';\n  });\n  typedCount = 0;\n  inputArray.forEach((letter, index) => {\n    if (letter === spans[index].textContent) {\n      spans[index].classList.add('correct');\n      if (spans[index].textContent !== ' ') {\n        typedCount += 1;\n      }\n    } else {\n      spans[index].classList.add('wrong');\n      if (spans[index] === '') {\n        spans[index].classList.add('bar');\n      }\n    }\n  });\n  if (\n    spans.length === inputArray.length &&\n    [...spans].every((span) => span.classList.contains('correct'))\n  ) {\n    showResult();\n  }\n});\n\n\n//# sourceURL=webpack://js_webpack_project_starter/./src/js/modules/typing.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;