import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const ref = {
  inputValueEl: document.querySelector('#datetime-picker'),
  btnStartEl: document.querySelector('button'),
  timerEl: document.querySelector('.timer'),
  dayEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

ref.inputValueEl.addEventListener('input', getTime);
ref.btnStartEl.addEventListener('click', startCount);

ref.btnStartEl.setAttribute('disabled', 'disabled');

let timeInterval = null;
let isActive = false;

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
  if (fp.selectedDates[0] > fp.now) {
    ref.btnStartEl.removeAttribute('disabled');
    Notiflix.Notify.success('Please press button Start');
  } else {
    ref.btnStartEl.setAttribute('disabled', 'disabled');
    Notiflix.Notify.failure('Please choose a date in the future');
  }
}

function startCount() {
  if (isActive) return;
  isActive = true;

  timeInterval = setInterval(() => {
    const currentTime = Date.now();
    let ms = fp.selectedDates[0] - currentTime;
    if (ms < 0) {
      Notiflix.Notify.info('Timer stop');
      clearTimeout(timeInterval);
      isActive = false;
      return;
    }
    const valueTime = convertMs(ms);
    changeTimeUi(valueTime);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
// Remaining days, hours, minutes, seconds
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function changeTimeUi(valueTime) {
  ref.dayEl.textContent = addLeadingZero(valueTime.days);
  ref.hoursEl.textContent = addLeadingZero(valueTime.hours);
  ref.minutesEl.textContent = addLeadingZero(valueTime.minutes);
  ref.secondsEl.textContent = addLeadingZero(valueTime.seconds);
}