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

  checkInputLength(formData);
};
form.addEventListener('submit', validateForm);

const validateEmail = (email) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailFormat)) {
    let errorEmailElement = document.getElementById('email-error');
    errorEmailElement.classList.add('active');

    let emailInput = document.getElementById('email');
    emailInput.classList.add('input-error');
    errorEmailElement.classList.add('active');
    errorEmailElement.innerText = 'Looks like this is not an email';
    let emailElement = document.getElementById('email');
    emailElement.classList.add('input-error');
  }
};

const checkInputLength = (data) => {
  if (!data.firstName.length) {
    let errorFirstNameElement = document.getElementById('first-name-error');
    errorFirstNameElement.classList.add('active');
    errorFirstNameElement.innerText = 'First Name cannot be empty';

    let firstNameInput = document.getElementById('firstName');
    firstNameInput.classList.add('input-error');
  }
  if (!data.lastName.length) {
    let errorLastNameElement = document.getElementById('last-name-error');
    errorLastNameElement.classList.add('active');
    errorLastNameElement.innerText = 'Last Name cannot be empty';

    let lastNameInput = document.getElementById('lastName');
    lastNameInput.classList.add('input-error');
  }
  if (!data.email.length) {
    let errorEmailElement = document.getElementById('email-error');
    errorEmailElement.classList.add('active');
    errorEmailElement.innerText = 'Email cannot be empty';

    let emailInput = document.getElementById('email');
    emailInput.classList.add('input-error');
  } else {
    validateEmail(data.email);
  }
  if (!data.password.length) {
    let errorPasswordElement = document.getElementById('password-error');
    errorPasswordElement.classList.add('active');
    errorPasswordElement.innerText = 'Password cannot be empty';

    let passwordInput = document.getElementById('password');
    passwordInput.classList.add('input-error');
  }
};
