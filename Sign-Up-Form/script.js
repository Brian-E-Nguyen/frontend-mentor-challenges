const form = document.getElementsByClassName('signup-form__container')[0];
console.log(form);
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

  const validData = checkInputLength(formData);
  if (validData) validateEmail(formData.email);
  else console.log('ree');
};
form.addEventListener('submit', validateForm);

const validateEmail = (email) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailFormat)) {
    var emailElement = document.getElementById('email');
    let emailErrorMessage =
      '<p class="signup-form__error active">Looks like this is not an email</p>';
    emailElement.insertAdjacentHTML('afterend', emailErrorMessage);
  }
};

const checkInputLength = (data) => {
  let errorMessages = document.getElementsByClassName('active');
  console.log(errorMessages);
  let allValidData = true;
  if (!data.firstName.length) {
    var errorFirstNameElement = document.getElementsByClassName(
      'signup-form__error first-name'
    )[0];
    errorFirstNameElement.classList.add('active');

    var firstNameElement = document.getElementById('firstName');
    firstNameElement.classList.add('input-error');
    allValidData = false;
  }
  if (!data.lastName.length) {
    var errorLastNameElement = document.getElementsByClassName(
      'signup-form__error last-name'
    )[0];
    errorLastNameElement.classList.add('active');

    var lastNameElement = document.getElementById('lastName');
    lastNameElement.classList.add('input-error');
    allValidData = false;
  }
  if (!data.email.length) {
    var errorEmailElement = document.getElementsByClassName(
      'signup-form__error email'
    )[0];
    errorEmailElement.classList.add('active');

    var emailElement = document.getElementById('email');
    emailElement.classList.add('input-error');
    allValidData = false;
  }
  if (!data.password.length) {
    var errorPasswordElement = document.getElementsByClassName(
      'signup-form__error password'
    )[0];
    errorPasswordElement.classList.add('active');

    var passwordElement = document.getElementById('password');
    passwordElement.classList.add('input-error');
  }
  return allValidData;
};
