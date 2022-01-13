const form = document.getElementsByTagName('form')[0];

const validateEmail = (event) => {
  event.preventDefault();
  let email = document.getElementById('email').value;
  let isValidEmail = false;
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.length) {
    if (email.match(emailFormat)) {
      isValidEmail = true;
    } else {
    }
  } else {
    let errorMessage = document.getElementById('error-message');
    errorMessage.classList.add('active');
    errorMessage.innerText = 'Field cannot be blank';
  }
  return isValidEmail;
};

form.addEventListener('submit', validateEmail);
