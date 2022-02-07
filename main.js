const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const spCharacters = '!@#$%^&*';

function generatePassword() {
    let includeLetters = document.getElementById('letters').checked;
    let includeNumbers = document.getElementById('numbers').checked;
    let includeSPChars = document.getElementById('spCharacters').checked;
    let possibleCharacters = '';
    let password = '';

    if (includeLetters) {
        possibleCharacters += letters;
    }
    if (includeNumbers) {
        possibleCharacters += numbers;
    }
    if (includeSPChars) {
        possibleCharacters += spCharacters;
    }

    for (let i = 0; i < 10; i++) {
        password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
    }

    if (password == '') {
        return 'Please check at least one of the checkboxes below'
    } else {
        return password;
    }
}

output.innerText = generatePassword();

document.getElementById('generate').onclick = function () {
    output.innerText = generatePassword();
}

