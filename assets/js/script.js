const passwordElement = document.getElementById('password');
const passwordLengthElement = document.getElementById('passwordLength');
const passwordLengthValueElement = document.getElementById('passwordLengthValue');
const characterUppercaseElement = document.getElementById('characterUppercase');
const characterLowercaseElement = document.getElementById('characterLowercase');
const characterNumberElement = document.getElementById('characterNumber');
const characterSymbolElement = document.getElementById('characterSymbol');
const generatePasswordElement = document.getElementById('generatePassword');
const copyPasswordElement = document.getElementById('copyPassword');copyConfirm
const copyConfirmElement = document.getElementById('copyConfirm');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-+={[}]:;<,>.?/';

const getUppercaseLetter = () => {
  return uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
}

const getLowercaseLetter = () => {
  return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
}

const getNumber = () => {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

const getSymbol = () => {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePasswordCharacter = () => {
  const passwordCharacters = [];

  if(characterUppercaseElement.checked) {
    passwordCharacters.push(getUppercaseLetter());
  }

  if(characterLowercaseElement.checked) {
    passwordCharacters.push(getLowercaseLetter());
  }

  if(characterNumberElement.checked) {
    passwordCharacters.push(getNumber());
  }

  if(characterSymbolElement.checked) {
    passwordCharacters.push(getSymbol());
  }

  if(passwordCharacters.length === 0) {
    return '';
  }

  return passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
}

const generatePassword = () => {
  const passwordLength = passwordLengthElement.value;
  let password = '';

  if(characterUppercaseElement.checked) {
    password += getUppercaseLetter();
  }

  if(characterLowercaseElement.checked) {
    password += getLowercaseLetter();
  }

  if(characterNumberElement.checked) {
    password += getNumber();
  }

  if(characterSymbolElement.checked) {
    password += getSymbol();
  }

  for(let iterator = 0; iterator < passwordLength; iterator++) {
    const passwordString = generatePasswordCharacter();
    password += passwordString;
  }

  passwordElement.value = password;
}

const showPasswordLengthValue = () => {
  passwordLengthValueElement.innerText = passwordLengthElement.value;
}

const copyPassword = () => {
  passwordElement.select();
  document.execCommand('copy');
  copyConfirmElement.classList.add('show');
  setTimeout(
    () => {
      window.getSelection().removeAllRanges();
      copyConfirmElement.classList.remove('show');
    },
    2000
  );  
}

generatePasswordElement.addEventListener('click', generatePassword);

passwordLengthElement.addEventListener('input', showPasswordLengthValue);

copyPasswordElement.addEventListener('click', copyPassword);