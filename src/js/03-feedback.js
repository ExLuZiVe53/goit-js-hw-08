import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = form.email;
const textArea = form.message;
const userData = {
  email: '',
  message: '',
};

form.addEventListener('input', throttle(onInput, 500));
function onInput(event) {
  const userData = {
    email: input.value.trim(),
    message: event.currentTarget.elements.message.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
  const localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  input.value = Object.values(localData)[0];
  textArea.value = Object.values(localData)[1];
}

// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert("Заповніть, будь ласка, обов'язково всі поля!");
  } else {
    localStorage.removeItem('feedback-form-state');
    console.log({
      email: email.value.trim(),
      message: message.value.trim(),
    });
    input.value = '';
    textArea.value = '';
  }
}
