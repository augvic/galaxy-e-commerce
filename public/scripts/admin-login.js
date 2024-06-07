// Function to toggle the password login visibility. \\
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'text' ? '👁️' : '🔒';
});

// Function to toggle the password register visibility. \\
const togglePassword1 = document.getElementById('togglePassword1');
const passwordInput1 = document.getElementById('password-r');

togglePassword1.addEventListener('click', function() {
    const type = passwordInput1.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput1.setAttribute('type', type);
    this.textContent = type === 'text' ? '👁️' : '🔒';
});

// Function to toggle the password-confirm register visibility. \\
const togglePassword2 = document.getElementById('togglePassword2');
const passwordInput2 = document.getElementById('password-r-confirm');

togglePassword2.addEventListener('click', function() {
    const type = passwordInput2.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput2.setAttribute('type', type);
    this.textContent = type === 'text' ? '👁️' : '🔒';
});

// Function to transition the login and register box. \\
const f2Box = document.getElementById('image-box');
const registerLink = document.getElementById("register-link");
const loginLink = document.getElementById("login-link");

registerLink.addEventListener("click", function() {
    f2Box.classList.remove('move-right');
    f2Box.classList.add("move-left");
    f2Box.style.borderTopRightRadius = "0";
    f2Box.style.borderBottomRightRadius = "0";
    f2Box.style.borderTopLeftRadius = "20px";
    f2Box.style.borderBottomLeftRadius = "20px";
});

loginLink.addEventListener("click", function() {
    f2Box.classList.remove('move-left');
    f2Box.classList.add("move-right");
    f2Box.style.borderTopRightRadius = "20px";
    f2Box.style.borderBottomRightRadius = "20px";
    f2Box.style.borderTopLeftRadius = "0";
    f2Box.style.borderBottomLeftRadius = "0";
});

// Function to check password are same. \\
const password = document.getElementById("password-r");
const passwordConfirm = document.getElementById("password-r-confirm");

function checkPasswordMatch() {
    const passwordValue = password.value;
    const passwordConfirmValue = passwordConfirm.value;
    const checkText = document.getElementById("check-password");

    if (passwordValue === "" && passwordConfirmValue === "") {
        checkText.style.display = "none";
    } else if (passwordValue !== passwordConfirmValue) {
        checkText.style.display = "block";
    } else {
        checkText.style.display = "none";
    }
}
password.addEventListener("input", checkPasswordMatch);
passwordConfirm.addEventListener("input", checkPasswordMatch);

// Hiding the account create message after a delay. \\
document.addEventListener('DOMContentLoaded', function() {
    var messageSucess = document.getElementById('account-create-sucess');
    var messageFail = document.getElementById('account-create-failed');
    var messageLogin = document.getElementById('account-login');
    var messageLoginFirst = document.getElementById('loginFirst');
    if (messageSucess) {
        setTimeout(function() {
            messageSucess.style.display = 'none';
        }, 5000);
    }
    if (messageFail) {
        setTimeout(function() {
            messageFail.style.display = 'none';
        }, 5000);
    }
    if (messageLogin) {
        setTimeout(function() {
            messageLogin.style.display = 'none';
        }, 5000);
    }
    if (messageLoginFirst) {
        setTimeout(function() {
            messageLoginFirst.style.display = 'none';
        }, 5000);
    }
});