// Provided function, that generates random hex color code
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Getting access to HTML Elements
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const pageBackground = document.querySelector('body');

// Initializing variable to be accesible inside function block scopes,
// that variable equals current setTimeout id
let currentTimeout = 0;

// Function that sets background page color to random hex
const colorChange = () => {
  pageBackground.style.backgroundColor = getRandomHexColor();
};

// Function, that handle startButton click event
function startEventHandler() {
  // isColorChanging = true;
  startColorChange();
  startButton.setAttribute('disabled', 'true');
  stopButton.removeAttribute('disabled');
}

// Function, that handle stopButton click event
function stopEventHandler() {
  stopColorChange();
  startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', 'true');
}

// Function, that starts timeout, that changes bg color every 1s
const startColorChange = () => {
  colorChange();
  currentTimeout = setTimeout(startColorChange, 1000);
};

// Function, that stops startColorChange function timeout
const stopColorChange = () => {
  clearTimeout(currentTimeout);
};

startButton.addEventListener('click', startEventHandler);

stopButton.addEventListener(
  'click',
  stopEventHandler,
  stopButton.setAttribute('disabled', 'true')
);
