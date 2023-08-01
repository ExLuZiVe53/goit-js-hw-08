import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onSubmitForm);

const FEEDBACK_FORM_STALE = 'feedback-form-state';
let data = {};

const inData = () => {
  try {
    const dataOnJSON = localStorage.getItem(FEEDBACK_FORM_STALE);
    if (!dataOnJSON) {
      return;
    }
    data = JSON.parse(dataOnJSON);
    Object.entries(data).forEach(([key, value]) => {
      feedbackForm.elements[key].value = value;
    });
  } catch (err) {
    console.log(err.message);
  }
};

window.addEventListener('load', inData);

function onInput(event) {
  data[event.target.name] = event.target.value.trim();
  setLocalStorage();
}

function onSubmitForm(event) {
  event.preventDefault();
  data = {};
  feedbackForm.reset();
  localStorage.removeItem('FEEDBACK_FORM_STALE');
}

function setLocalStorage() {
  localStorage.setItem('FEEDBACK_FORM_STALE', JSON.stringify(data));
}
