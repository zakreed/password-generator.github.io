const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

function generatePassword() {
    const includeLetters = document.getElementById('letters').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSPChars = document.getElementById('spCharacters').checked;
    let password = '';

    if (includeLetters === true) {
        for (let i = 0; i < 10; i++) {
            password += letters.charAt(Math.floor(Math.random() * letters.length))
        }
    }
    return password;
}

function main() {
    console.log(generatePassword());
}

main();