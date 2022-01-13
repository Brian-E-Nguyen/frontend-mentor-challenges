const form = document.getElementsByTagName('form')[0];
console.log(form);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('yes');
});
