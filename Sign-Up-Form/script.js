const validateForm = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
}

const checkInputLength = (field) => {
    return field.length ? true : false;
}
