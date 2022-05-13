const passbox = document.querySelector('#passbox')
const req = document.createElement('div');
const confirmPass = document.createElement('div');
const confbox = document.querySelector('#confbox');
const conPw = document.querySelector('#confirm-pass');

var header = document.createElement('h2');
header.append('Password must contain the following:');
header.style.textAlign = 'center';

var letter = document.createElement('p');
letter.setAttribute('id', 'letter');
letter.setAttribute('class', 'invalid');
letter.innerText = '\n✗ - A lowercase letter';

var capital = document.createElement('p');
capital.setAttribute('id', 'capital');
capital.setAttribute('class', 'invalid');
capital.innerText = '✗ - A Capital (Uppercase) letter';

var number = document.createElement('p');
number.setAttribute('id', 'number');
number.setAttribute('class', 'invalid');
number.innerText = '✗ - A number';

var speChar = document.createElement('p');
speChar.setAttribute('id', 'speChar');
speChar.setAttribute('class', 'invalid');
speChar.innerText = '✗ - A Special character';

var length = document.createElement('p');
length.setAttribute('id', 'length');
length.setAttribute('class', 'invalid');
length.innerText = '✗ - Minimum 8 characters';

const password = document.querySelector('#pass')
password.addEventListener('focus', () => {
    req.style.width = "200px";
    req.style.height = "170px";
    req.style.backgroundColor = 'white';
    req.style.border = '1px solid black';
    req.style.margin = '5px';
    req.style.padding = '5px'
    req.append(header);
    req.appendChild(letter);
    req.appendChild(capital);
    req.appendChild(number);
    req.appendChild(speChar);
    req.appendChild(length);
    req.style.position = 'absolute'
    passbox.appendChild(req);
});

password.addEventListener('blur', () => {
    passbox.removeChild(req);
});

password.addEventListener('keyup', () => {
    if (password.value != conPw.value) {
        confPass.style.border = '2px solid red';
    }
    
    if (password.value == conPw.value) {
        confPass.style.border = '2px solid #E5E7EB';
    }

    var lowerCaseLetters = /[a-z]/g;
    if(password.value.match(lowerCaseLetters)) {
        letter.innerText = '\n✔ - A lowercase letter';
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.innerText = '\n✗ - A lowercase letter';
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    var upperCaseLetters = /[A-Z]/g;
    if(password.value.match(upperCaseLetters)) {
        capital.innerText = '✔ - A Capital (Uppercase) letter';
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.innerText = '✗ - A Capital (Uppercase) letter';
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    var numbers = /[0-9]/g;
    if(password.value.match(numbers)) {
        number.innerText = '✔ - A number';
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.innerText = '✗ - A number';
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    var specialChar = /[^a-zA-Z0-9]/g;
    if(password.value.match(specialChar)) {
        speChar.innerText = '✔ - A Special character';
        speChar.classList.remove("invalid");
        speChar.classList.add("valid");
    } else {
        speChar.innerText = '✗ - A Special character';
        speChar.classList.remove("valid");
        speChar.classList.add("invalid");
    }

    if(password.value.length >= 8) {
        length.innerText = '✔ - Minimum 8 characters';
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.innerText = '✗ - Minimum 8 characters';
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
});

const form = document.querySelector('#submit');
form.addEventListener('click', () => {
    if (password.value != conPw.value) {
        confirmPass.innerText = "password did not match";
        confirmPass.style.width = "140px";
        confirmPass.style.height = "15px";
        confirmPass.style.textAlign = 'center';
        confirmPass.style.backgroundColor = 'white';
        confirmPass.style.border = '1px solid black';
        confirmPass.style.margin = '5px';
        confirmPass.style.padding = '5px'
        confirmPass.style.position = 'absolute'
        confbox.appendChild(confirmPass);
    } else {
        form.setAttribute('form', 'my-form');
    }
})

const confPass = document.querySelector('#confirm-pass');
confPass.setAttribute('require', password.value);
confPass.addEventListener('focus', () => {
    if (password.value != conPw.value) {
        confirmPass.innerText = "password did not match";
        confirmPass.style.width = "140px";
        confirmPass.style.height = "15px";
        confirmPass.style.textAlign = 'center';
        confirmPass.style.backgroundColor = 'white';
        confirmPass.style.border = '1px solid black';
        confirmPass.style.margin = '5px';
        confirmPass.style.padding = '5px'
        confirmPass.style.position = 'absolute'
        confbox.appendChild(confirmPass);
        confPass.style.border = '2px solid red';
    } else {
        confirmPass.innerText = "";
        confirmPass.style.width = "0px";
        confirmPass.style.height = "0px";
        confirmPass.style.backgroundColor = 'white';
        confirmPass.style.border = '0px solid black';
        confirmPass.style.margin = '0px';
        confirmPass.style.padding = '0px'
        confirmPass.style.position = 'absolute'
        confbox.appendChild(confirmPass);
        confPass.style.border = '2px solid #E5E7EB';
    }
});

confPass.addEventListener('keyup', () => {
    if (password.value != conPw.value) {
        confirmPass.innerText = "password did not match";
        confirmPass.style.width = "140px";
        confirmPass.style.height = "15px";
        confirmPass.style.textAlign = 'center';
        confirmPass.style.backgroundColor = 'white';
        confirmPass.style.border = '1px solid black';
        confirmPass.style.margin = '5px';
        confirmPass.style.padding = '5px'
        confirmPass.style.position = 'absolute'
        confbox.appendChild(confirmPass);
        confPass.style.border = '2px solid red';
    } else {
        confirmPass.innerText = "";
        confirmPass.style.width = "0px";
        confirmPass.style.height = "0px";
        confirmPass.style.backgroundColor = 'white';
        confirmPass.style.border = '0px solid black';
        confirmPass.style.margin = '0px';
        confirmPass.style.padding = '0px'
        confirmPass.style.position = 'absolute'
        confbox.appendChild(confirmPass);
        confPass.style.border = '2px solid #E5E7EB';
    }
});

confPass.addEventListener('blur', () => {
    confirmPass.innerText = "";
    confirmPass.style.width = "0px";
    confirmPass.style.height = "0px";
    confirmPass.style.backgroundColor = 'white';
    confirmPass.style.border = '0px solid black';
    confirmPass.style.margin = '0px';
    confirmPass.style.padding = '0px'
    confirmPass.style.position = 'absolute'
    confbox.appendChild(confirmPass);
});