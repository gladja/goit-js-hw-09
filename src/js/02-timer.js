import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const ref = {
  inputValueEl: document.querySelector('#datetime-picker'),
  btnStartEl: document.querySelector('button'),
  timerEl: document.querySelector('.timer'),
}

ref.inputValueEl.addEventListener('input', getTime);
ref.btnStartEl.addEventListener('click', startCount);

ref.btnStartEl.setAttribute("disabled", "disabled")

// let date = new Date();
let timeInterval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0].getTime());
  },
};

const fp = flatpickr('#datetime-picker', options);

function getTime() {
// console.log(fp.now);
// console.log(fp.selectedDates[0]);
// console.log(fp.selectedDates[0] - fp.now);
  fp.selectedDates[0] > fp.now ?
    ref.btnStartEl.removeAttribute('disabled') :
    ref.btnStartEl.setAttribute("disabled", "disabled");
}


function startCount() {
  timeInterval = setInterval(() => {
    const currentTime = Date.now()
    let value =  fp.selectedDates[0] - currentTime
    // ref.btnStartEl.setAttribute("disabled", "disabled");
    if(value < 0) {
      return
    }
    console.log(Math.round(value / 1000));
  }, 1000)
}








