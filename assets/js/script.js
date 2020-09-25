const passwordElement = document.querySelector('#password');
const passwordLengthElement = document.querySelector('#passwordLength');
const passwordLengthValueElement = document.querySelector('#passwordLengthValue');
const characterUppercaseElement = document.querySelector('#characterUppercase');
const characterLowercaseElement = document.querySelector('#characterLowercase');
const characterNumberElement = document.querySelector('#characterNumber');
const characterSymbolElement = document.querySelector('#characterSymbol');
const generatePasswordElement = document.querySelector('#generatePassword');
const copyPasswordElement = document.querySelector('#copyPassword');
const copyConfirmElement = document.querySelector('#copyConfirm');

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
      copyConfirmElement.classList.remove('show');      
      passwordElement.selectionEnd = passwordElement.selectionStart;
    },
    2000
  );  
}

generatePasswordElement.addEventListener('click', generatePassword);

passwordLengthElement.addEventListener('input', showPasswordLengthValue);

copyPasswordElement.addEventListener('click', copyPassword);