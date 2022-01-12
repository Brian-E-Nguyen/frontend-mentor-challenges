const form = document.getElementsByClassName('signup-form__container')[0];

const validateForm = (event) => {
  event.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };
  validateFirstName(formData.firstName);
  validateLastName(formData.lastName);
  validateEmail(formData.email);
  validatePassword(formData.password);
};
form.addEventListener('submit', validateForm);

const validateFirstName = (name) => {
  let errorFirstNameElement = document.getElementById('first-name-error');
  let firstNameInput = document.getElementById('firstName');

  if (name.length) {
    errorFirstNameElement.classList.remove('active');
    errorFirstNameElement.innerText = '';
    firstNameInput.classList.remove('input-error');
  } else {
    errorFirstNameElement.classList.add('active');
    errorFirstNameElement.innerText = 'First Name cannot be empty';
    firstNameInput.classList.add('input-error');
  }
};

const validateLastName = (name) => {
  let errorLastNameElement = document.getElementById('last-name-error');
  let lastNameInput = document.getElementById('lastName');

  if (name.length) {
    errorLastNameElement.classList.remove('active');
    errorLastNameElement.innerText = '';
    lastNameInput.classList.remove('input-error');
  } else {
    errorLastNameElement.classList.add('active');
    errorLastNameElement.innerText = 'First Name cannot be empty';
    lastNameInput.classList.add('input-error');
  }
};

const validateEmail = (email) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailInput = document.getElementById('email');
  let errorEmailElement = document.getElementById('email-error');

  if (email.length) {
    if (email.match(mailFormat)) {
      errorEmailElement.classList.remove('active');
      emailInput.classList.remove('input-error');
      errorEmailElement.innerText = '';
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
};

const validatePassword = (password) => {
  let errorPasswordElement = document.getElementById('password-error');
  let passwordInput = document.getElementById('password');

  if (password.length) {
    errorPasswordElement.classList.remove('active');
    errorPasswordElement.innerText = '';
    passwordInput.classList.remove('input-error');
  } else {
    errorPasswordElement.classList.add('active');
    errorPasswordElement.innerText = 'Password cannot be empty';
    passwordInput.classList.add('input-error');
  }
};
