const ref = {
  bodyEl: document.querySelector('body'),
  btnStartEl: document.querySelector('[data-start]'),
  btnStopEl: document.querySelector('[data-stop]')
}

ref.btnStartEl.addEventListener('click', startChangeColor);
ref.btnStopEl.addEventListener('click', stopChangeColor);

let timeInterval = null;

function startChangeColor() {
  timeInterval = setInterval(() => {
    ref.bodyEl.style.backgroundColor = getRandomHexColor();
    ref.btnStartEl.setAttribute("disabled", "disabled")
    console.log('start');
  }, 1000)}

function stopChangeColor() {
  clearInterval(timeInterval);
  ref.btnStartEl.removeAttribute('disabled')
  console.log('stop');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}