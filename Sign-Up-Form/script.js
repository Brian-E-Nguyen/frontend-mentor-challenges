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

  checkInputLength(formData);
  validateEmail(formData.email);
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
  let allValidData = true;
  if (!data.firstName.length) {
    const firstNameElement = document.getElementById('firstName');
    firstNameElement.classList.add('input-error');
    let firstNameErrorMessage =
      '<p class="signup-form__error active">First name cannot be empty</p>';
    firstNameElement.insertAdjacentHTML('afterend', firstNameErrorMessage);
    allValidData = false;
  }
  if (!data.lastName.length) {
    const lastNameElement = document.getElementById('lastName');
    lastNameElement.classList.add('input-error');
    let lastNameErrorMessage =
      '<p class="signup-form__error active">Last name cannot be empty</p>';
    lastNameElement.insertAdjacentHTML('afterend', lastNameErrorMessage);
    allValidData = false;
  }
  if (!data.email.length) {
    const emailElement = document.getElementById('email');
    emailElement.classList.add('input-error');
    let emailErrorMessage =
      '<p class="signup-form__error active">Email cannot be empty</p>';
    emailElement.insertAdjacentHTML('afterend', emailErrorMessage);
    allValidData = false;
  }
  if (!data.password.length) {
    const passwordElement = document.getElementById('password');
    passwordElement.classList.add('input-error');
    let passwordErrorMessage =
      '<p class="signup-form__error active">Password cannot be empty</p>';
    passwordElement.insertAdjacentHTML('afterend', passwordErrorMessage);
    allValidData = false;
  }
  return allValidData;
};
