const form = document.getElementsByClassName('signup-form__container')[0];

const validateForm = (event) => {
  event.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const isValidFirstName = validateFirstName(firstName);
  const isValidLastName = validateLastName(lastName);
  const isValidEmail = validateEmail(email);
  const isValidPassword = validatePassword(password);

  if (isValidFirstName && isValidLastName && isValidEmail && isValidPassword) {
    alert('Form submitted!');
  }
};
form.addEventListener('submit', validateForm);

const validateFirstName = (name) => {
  let errorFirstNameElement = document.getElementById('first-name-error');
  let firstNameInput = document.getElementById('firstName');
  let isValidName = false;

  if (name.length) {
    errorFirstNameElement.classList.remove('active');
    errorFirstNameElement.innerText = '';
    firstNameInput.classList.remove('input-error');
    isValidName = true;
  } else {
    errorFirstNameElement.classList.add('active');
    errorFirstNameElement.innerText = 'First Name cannot be empty';
    firstNameInput.classList.add('input-error');
  }

  return isValidName;
};

const validateLastName = (name) => {
  let errorLastNameElement = document.getElementById('last-name-error');
  let lastNameInput = document.getElementById('lastName');
  let isValidName = false;

  if (name.length) {
    errorLastNameElement.classList.remove('active');
    errorLastNameElement.innerText = '';
    lastNameInput.classList.remove('input-error');
    isValidName = true;
  } else {
    errorLastNameElement.classList.add('active');
    errorLastNameElement.innerText = 'Last Name cannot be empty';
    lastNameInput.classList.add('input-error');
  }

  return isValidName;
};

const validateEmail = (email) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailInput = document.getElementById('email');
  let errorEmailElement = document.getElementById('email-error');
  let isValidEmail = false;

  if (email.length) {
    if (email.match(mailFormat)) {
      errorEmailElement.classList.remove('active');
      emailInput.classList.remove('input-error');
      errorEmailElement.innerText = '';
      isValidEmail = true;
    } else {
      errorEmailElement.classList.add('active');
      emailInput.classList.add('input-error');
      errorEmailElement.innerText = 'Looks like this is not an email';
    }
  } else {
    errorEmailElement.classList.add('active');
    emailInput.classList.add('input-error');
    errorEmailElement.innerText = 'Email cannot be empty';
  }

  return isValidEmail;
};

const validatePassword = (password) => {
  let errorPasswordElement = document.getElementById('password-error');
  let passwordInput = document.getElementById('password');
  let isValidPassword = false;

  if (password.length) {
    errorPasswordElement.classList.remove('active');
    errorPasswordElement.innerText = '';
    passwordInput.classList.remove('input-error');
    isValidPassword = true;
  } else {
    errorPasswordElement.classList.add('active');
    errorPasswordElement.innerText = 'Password cannot be empty';
    passwordInput.classList.add('input-error');
  }

  return isValidPassword;
};
