const nontification = document.body.querySelector('.notification');
const closeNontificationBtn = document.getElementById('closeBtn');
const buttonNontificationYes  = document.getElementById('accept_button');
const container = document.getElementById('container');
const inputName = document.getElementById('input_name');
const inputLastName = document.getElementById('input_last_name');
const inputPassword = document.getElementById('input_password');
const inputNumber = document.getElementById('input_number');
const registBtn = document.getElementById('regist_btn');
const showPassword = document.getElementById('show_password');
const closeRegistWindowBtn = document.getElementById('cancel_btn');
const errorValidation = new Set();
const repeatInputPassword = document.getElementById('repeat_input_password');
const passwordInput = document.querySelectorAll('.password_input');
const errorMessage = document.getElementById('error_message');
const overLayModal = document.querySelector('.overlay_modal');


window.addEventListener('keypress', event => {
    if(event.code === 13) {
        container.classList.add('hide');
        overLayModal.style.display = 'none';
    }
})


function compareInputPassowrd(inputPass, repeatInputPass) {
    inputPass = inputPassword.value;
    repeatInputPass = repeatInputPassword. value;
    if (inputPass === repeatInputPass ) {
        errorValidation.delete(errorMessage)
    } else {errorValidation.add(errorMessage)}

    return errorValidation.size
}

function checkEmptyInputs() {
    return inputName.value.length &&
    inputLastName.value.length &&
   // inputPassword.value.length &&
    inputNumber.value.length    
}

function showHideText() {
    passwordInput.forEach(input => {
        input.type === 'text'
    })

    // if (inputPassword.type === 'password') {
    //     inputPassword.type = 'text';
    //     showPassword.innerHTML = 'hide password-text';
    // } else {
    //     inputPassword.type = 'password';
    //     showPassword.innerHTML = 'show password-text';
    // }    
};

function checkNumberValidation(event) {
    if(isNaN(Number(event.target.value))) {
        errorValidation.add(event.target.nextElementSibling);
        event.target.nextElementSibling.classList.remove('hide');
    } else {
        errorValidation.delete(event.target.nextElementSibling);
        event.target.nextElementSibling.classList.add('hide');   
    }
    registBtn.disabled = !!errorValidation.size || !checkEmptyInputs();
}

function blockContextMenu(event) {event.preventDefault()};

function checkValidation(event) {
    if(event.target.value.length > 15) {
        errorValidation.add(event.target.nextElementSibling);
        event.target.nextElementSibling.classList.remove('hide');
    } else  {
        event.target.nextElementSibling.classList.add('hide');
        errorValidation.delete(event.target.nextElementSibling);
    } 
    registBtn.disabled = !!errorValidation.size || !checkEmptyInputs();
};

inputName.addEventListener('input', checkValidation);

inputLastName.addEventListener('input', checkValidation);

setTimeout(function() {nontification.classList.remove('hideNontification')}, 100);

closeNontificationBtn.addEventListener('click', () => nontification.classList.add('hideNontification'));

buttonNontificationYes.addEventListener('click', () => {
    container.classList.remove('hide');
    overLayModal.style.display = 'block';

});

closeRegistWindowBtn.addEventListener('click', event => {
    container.classList.add('hide');
    overLayModal.style.display = 'none';
});

showPassword.addEventListener('click', showHideText);

inputNumber.addEventListener('input',checkNumberValidation);

window.addEventListener('click', (event)=> {
    if(event.target === overLayModal) {
        container.classList.add('hide');
        overLayModal.style.display = 'none';
    }
})