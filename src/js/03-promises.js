import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('input', onValue);
refs.formEl.addEventListener('submit', onSubmit);

let delay = 0;
let step = 0;
let amount = 0;
let position = 0;

function onValue(event) {
  const value = event.target.name;
  if (value === 'delay') {
    delay = Number(event.target.value);
  }
  if (value === 'step') {
    step = Number(event.target.value);
  }
  if (value === 'amount') {
    amount = event.target.value;
  }
}

function onSubmit(event) {
  event.preventDefault();
  const a = delay;
  for (let i = 0; i < amount; i += 1) {
    position += 1
    createPromise(position, delay);
    delay += step
    }
  position = 0;
  delay = a;
  }

function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (shouldResolve) {
          resolve({position, delay})
        } else {
          reject({position, delay})
        }
    }, delay);
  });

 promise.then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
