const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateEmail();
});

const validateEmail = () => {
  let email = document.getElementById('email').value;
  let isValidEmail = false;
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.length) {
    if (email.match(emailFormat)) {
      isValidEmail = true;
    } else {
    }
  } else {
  }
  return isValidEmail;
};
