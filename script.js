// Assignment Code
// var generateBtn = document.querySelector('#generate');

var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var upperCasedCharactersArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

var lowerCasedCharactersArr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var specialCharactersArr = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// var lengthOfPassword = parseInt(window.prompt('Password length: '));


// console.log(lengthOfPassword);
// console.log(typeof lengthOfPassword);

function validPasswordLength() {

  var lengthOfPassword = parseInt(window.prompt('Enter password length: '));
  

  console.log(lengthOfPassword);
  console.log(typeof lengthOfPassword);

  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    var invalidLength = window.alert('Please enter valid password length');
    validPasswordLength();
  }

  else if (lengthOfPassword >= 8 && lengthOfPassword <= 128) {
    window.alert('Password length validated! You may proceed to the next prompt...');
    return;
  } 
  
  else {
    var invalidLength = window.alert('Please enter valid password length');
    validPasswordLength();
  }

}

validPasswordLength();

function passwordUpperCase () {

 var upperCase = window.prompt('Would you like Uppercase letters included in your password?').toLowerCase();

 console.log(upperCase);
 console.log(typeof upperCase);

 if (upperCase === 'yes') {
  window.alert('You have chosen to include Uppercase letters. You may proceed to the next prompt... ');
 }

 else if (upperCase === 'no') {
  window.alert('Uppercase letters will not be included in your password. You may proceed to the next prompt...');
 }

 else {
  window.alert('Please answer "yes" or "no"... ');
  passwordUpperCase();
 }

}

passwordUpperCase();


function passwordLowerCase () {

  var lowerCase = window.prompt('Would you like Lowercase letters included in you password?').toLowerCase();
 
  console.log(lowerCase);
  console.log(typeof lowerCase);
 
  if (lowerCase === 'yes') {
   window.alert('You have chosen to include lowerCase letters. You may proceed to the next prompt... ');
  }
 
  else if (lowerCase === 'no') {
   window.alert('Lowercase letters will not be included in your password. You may proceed to the next prompt...');
  }
 
  else {
   window.alert('Please answer "yes" or "no"... ');
   passwordLowerCase();
  }
 
 }
 
 passwordLowerCase();

 function passwordSpecialChar () {

  var specialChar = window.prompt('Would you like special characters included in you password?').toLowerCase();
 
  console.log(specialChar);
  console.log(typeof specialChar);
 
  if (specialChar === 'yes') {
   window.alert('You have chosen to include special characters. You may proceed to the next prompt... ');
  }
 
  else if (specialChar === 'no') {
   window.alert('Special characters will not be included in your password. You may proceed to the next prompt...');
  }
 
  else {
   window.alert('Please answer "yes" or "no"... ');
   passwordSpecialChar();
  }
 
 }
 
 passwordSpecialChar();


 function passwordNumbers () {

  var numbersPrompt = window.prompt('Would you like special characters included in you password?').toLowerCase();
 
  console.log(numbersPrompt);
  console.log(typeof numbersPrompt);
 
  if (numbersPrompt === 'yes') {
   window.alert('You have chosen to include special characters. You may proceed to the next prompt... ');
  }
 
  else if (numbersPrompt === 'no') {
   window.alert('Special characters will not be included in your password. You may proceed to the next prompt...');
  }
 
  else {
   window.alert('Please answer "yes" or "no"... ');
   passwordNumbers();
  }
 
 }
 
 passwordNumbers();

 






// Write password to the #password input

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;

// }

// Add event listener to generate button

// generateBtn.addEventListener('click', writePassword);
