const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const spCharacters = '!@#$%^&*';

function generatePassword() {
    let includeLetters = document.getElementById('letters').checked;
    let includeNumbers = document.getElementById('numbers').checked;
    let includeSPChars = document.getElementById('spCharacters').checked;
    let possibleCharacters = '';
    let password = '';

    includeLetters && (possibleCharacters += letters);
    includeNumbers && (possibleCharacters += numbers);
    includeSPChars && (possibleCharacters += spCharacters);

    for (let i = 0; i < 10; i++) {
        password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
    }
    return password;
}

let output = document.getElementById('output');
output.innerText = generatePassword();