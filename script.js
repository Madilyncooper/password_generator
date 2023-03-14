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

 var resultLength = [];

var resultOne = [];


 var upperCase = window.prompt('Would you like Uppercase letters included in your password?').toLowerCase();


 if (upperCase === 'yes') {
  var upperCaseYes = window.alert('You have chosen to include Uppercase letters. You may proceed to the next prompt... ');
 } 
 else if (upperCase === 'no') {
  var upperCaseNo = window.alert('Uppercase letters will not be included in your password. You may proceed to the next prompt...');
 } else {
  var upperCaseError = window.prompt('ERROR! Please answer "yes" or "no"... ');
 }

 console.log(upperCase);
 console.log(upperCaseError);




  var lowerCase = window.prompt('Would you like Lowercase letters included in you password?').toLowerCase();
 

  if (lowerCase === 'yes') {
   var lowerCaseYes = window.alert('You have chosen to include lowerCase letters. You may proceed to the next prompt... ');
  } 
  else if (lowerCase === 'no') {
   var lowerCaseNo = window.alert('Lowercase letters will not be included in your password. You may proceed to the next prompt...');
  } else {
  var lowerCaseError = window.prompt('ERROR! Please answer "yes" or "no"... ');
  }

 console.log(lowerCase);
 console.log(lowerCaseError);



  var specialChar = window.prompt('Would you like special characters included in you password?').toLowerCase();
 

  if (specialChar === 'yes') {
   var specialYes = window.alert('You have chosen to include special characters. You may proceed to the next prompt... ');
  } 
  else if (specialChar === 'no') {
   var specialNo = window.alert('Special characters will not be included in your password. You may proceed to the next prompt...');
  } else {
   var specialError = window.prompt('ERROR! Please answer "yes" or "no"... ');
}

console.log(specialChar);
console.log(specialError);


  var numbersPrompt = window.prompt('Would you like numbers included in you password?').toLowerCase();
 

  if (numbersPrompt === 'yes') {
   var numbersYes = window.alert('You have chosen to include numbers. You may proceed to the next prompt... ');
  } 
  else if (numbersPrompt === 'no') {
   var numbersNo = window.alert('Numbers will not be included in your password. You may proceed to the next prompt...');
  } else {
   var numbersError = window.alert('ERROR! Please answer "yes" or "no"... ');
  }

  console.log(numbersPrompt);
  console.log(numbersError);




   var lengthOfPassword = parseInt(window.prompt('Enter password length: '));
 
  if (lengthOfPassword >= 8 && lengthOfPassword <= 128) {
   window.alert('Password length validated! You may proceed to the next prompt...');
 } else {
    lengthOfPassword;
   }

   console.log(lengthOfPassword);
   console.log(typeof lengthOfPassword);
 

   if ((upperCase || upperCaseError) && (lowerCase || lowerCaseError) && (specialChar || specialError) && (numbersPrompt || numbersError) === 'yes') {
    var resultAllYes = numbersArr.concat(upperCasedCharactersArr, lowerCasedCharactersArr, specialCharactersArr);
    console.log(resultAllYes);
   } 
  
   else if ((upperCase || upperCaseError) && (lowerCase || lowerCaseError) && (specialChar || specialError) && (numbersPrompt || numbersError) === 'no') {
    window.alert('ERROR! You have chosen no criteria. Please reload browser to start again...');
   }

   
   if (((upperCase || upperCaseError) === 'yes') && ((lowerCase || lowerCaseError) === 'no') && ((specialChar || specialError) === 'no') && ((numbersPrompt || numbersError) === 'no')) {
    
    for (var i = 0; i < lengthOfPassword; i++) {
 
         var randomUppercase = upperCasedCharactersArr[Math.floor(Math.random() * upperCasedCharactersArr.length)];
         resultOne.push(randomUppercase);
         console.log(resultOne.join(''));
       }
   }


//  for (var i = 0; i < (lengthOfPassword || lengthOfPasswordTwo); i++) {
 
//    var randomNum = numbersArr[Math.floor(Math.random() * numbersArr.length)];
//    resultLength.push(randomNum);
//    console.log(resultLength.join(''));
//  }




  

  // for (var i = 0; i < (lengthOfPassword || lengthOfPasswordTwo); i++) {
  // var randomUpperCase = upperCasedCharactersArr[Math.floor(Math.random() * upperCasedCharactersArr.length)];
  // resultUpperCase.push(randomUpperCase);
  // console.log(resultUpperCase);
  // }




 




//

//  
 
//  
 





 
// if ((upperCase || errorUpperCase) === 'yes') {
//   var one = numbersArr.concat(upperCasedCharactersArr);
//   console.log(one); 
//   } 





// Write password to the #password input

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;

// }

// Add event listener to generate button

// generateBtn.addEventListener('click', writePassword);
