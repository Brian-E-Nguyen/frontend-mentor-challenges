// document
//   .getElementsByClassName('signup-form__button')[0]
//   .addEventListener('click', (event) => {
//      event.preventDefault();
//   });

const validateForm = (event) => {
  console.log(event);
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

const checkInputLength = (data) => {
  if (!data.firstName.length) console.log(data.firstName);
  if (!data.lastName.length) console.log(data.lastName);
  if (!data.email.length) console.log(data.email);
  if (!data.password.length) console.log(data.password);
};
