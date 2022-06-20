const password = document.querySelector('.input.pwd');
const confirmPwd = document.querySelector('.input.confirm');
const errorMsg = document.getElementById('err-msg');
const submit = document.querySelector('button');

function validate() {
    if ((document.getElementById('password').value === document.getElementById('confirm-pwd').value) && (document.getElementById('password').value !== '')) {
        password.classList.remove('error');
        confirmPwd.classList.remove('error');
        errorMsg.classList.add('hide');
        submit.disabled = false;
    } else {
        password.classList.add('error');
        confirmPwd.classList.add('error');
        errorMsg.classList.remove('hide');
        submit.disabled = true;
    }
}