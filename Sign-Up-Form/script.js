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
};
form.addEventListener('submit', validateForm);

const checkInputLength = (data) => {
  if (!data.firstName.length) {
    var errorFirstNameElement = document.getElementsByClassName(
      'signup-form__error first-name'
    )[0];
    errorFirstNameElement.classList.add('active');
  }
  if (!data.lastName.length) console.log(data.lastName);
  if (!data.email.length) console.log(data.email);
  if (!data.password.length) console.log(data.password);
};
