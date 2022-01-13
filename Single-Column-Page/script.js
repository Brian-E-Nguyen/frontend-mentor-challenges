const form = document.getElementsByTagName('form')[0];

const validateEmail = (event) => {
  event.preventDefault();

  let email = document.getElementById('input-box__email').value;
  let inputBox = document.getElementById('input-box__email');
  let errorMessage = document.getElementById('error-message');

  let isValidEmail = false;
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.length) {
    if (email.match(emailFormat)) {
      isValidEmail = true;
    } else {
    }
  } else {
    errorMessage.classList.add('active');
    errorMessage.innerText = 'Field cannot be blank';

    inputBox.classList.add('active-error');
  }
  return isValidEmail;
};

form.addEventListener('submit', validateEmail);
