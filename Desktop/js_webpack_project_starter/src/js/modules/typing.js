const startPage = document.querySelector('#ty-start-page');
const typingGame = document.querySelector('#ty-game');
const titleTime = document.querySelector('#ty-title-time');
const timer = document.querySelector('#ty-timer');
const timeSelectEl = document.querySelector('.ty-time-select');
const typing = document.querySelector('#typing');
const backToStart = document.querySelector('#ty-back-to-start');
const resultContainer = document.querySelector('#ty-result-container');
const textarea = document.querySelector('#ty-textarea');
const quote = document.querySelector('#ty-quote');
const author = document.querySelector('#ty-author-name');
const LPM = document.querySelector('#ty-LPM');
const quoteReview = document.querySelector('#ty-quote-review');

let timelimit = 30;
let remainingTime;
let isActive = false;
let isPlaying = false;
let intervalId = null;
let quotes;
let typedCount;
let LPMCount;

timeSelectEl.addEventListener('change', () => {
  timelimit = timeSelectEl.value;
});
window.addEventListener('keypress', (e) => {
  isActive = typing.classList.contains('active');
  if (e.key === 'Enter' && isActive && !isPlaying) {
    start();
    isActive = false;
    isPlaying = true;
  }
  return;
});

async function start() {
  startPage.classList.remove('show');
  typingGame.classList.add('show');
  titleTime.textContent = timelimit;
  remainingTime = timelimit;
  timer.textContent = remainingTime;
  await fetchAndRenderQuotes();
  textarea.disabled = false;
  textarea.focus();
  typedCount = 0;

  intervalId = setInterval(() => {
    remainingTime -= 1;
    timer.textContent = remainingTime;
    if (remainingTime <= 0) {
      showResult();
    }
  }, 1000);
}

backToStart.addEventListener('click', () => {
  typingGame.classList.remove('show');
  resultContainer.classList.remove('show');
  startPage.classList.add('show');
  isPlaying = false;
});

function showResult() {
  textarea.disabled = true;
  resultContainer.classList.add('show');
  clearInterval(intervalId);
  LPMCount =
    remainingTime === 0
      ? Math.floor((typedCount * 60) / timelimit)
      : Math.floor((typedCount * 60) / (time.limit - remainingTime));
  quoteReview.innerHTML = `${quotes.quote}<br> --- ${quotes.author}`;
  let count = 0;
  setTimeout(() => {
    resultContainer.classList.add('show');
    const countup = setInterval(() => {
      LPM.textContent = count;
      count += 1;
      if (count >= LPMCount) {
        clearInterval(countup);
      }
    }, 20);
  }, 1000);
}

async function fetchAndRenderQuotes() {
  quote.innerHTML = '';
  textarea.value = '';

  const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/quotes/random';
  const response = await fetch(RANDOM_QUOTE_API_URL);
  const data = await response.json();
  // console.log(response);
  // console.log(data);

  quotes = { quote: data.content, author: data.author };
  quotes = {
    quote: data[0].content,
    author: data[0].author,
  };
  console.log(quotes);
  quotes.quote.split('').forEach((letter) => {
    const span = document.createElement('span');
    span.textContent = letter;
    quote.appendChild(span);
  });
  author.textContent = quotes.author;
  console.log(quote);
  console.log(author);
}

textarea.addEventListener('input', () => {
  let inputArray = textarea.value.split('');
  let spans = quote.querySelectorAll('span');
  spans.forEach((span) => {
    span.className = '';
  });
  typedCount = 0;
  inputArray.forEach((letter, index) => {
    if (letter === spans[index].textContent) {
      spans[index].classList.add('correct');
      if (spans[index].textContent !== ' ') {
        typedCount += 1;
      }
    } else {
      spans[index].classList.add('wrong');
      if (spans[index] === '') {
        spans[index].classList.add('bar');
      }
    }
  });
  if (
    spans.length === inputArray.length &&
    [...spans].every((span) => span.classList.contains('correct'))
  ) {
    showResult();
  }
});
