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

var resultZero = [];

var resultOne = [];

var resultTwo = [];

var resultThree = [];

var resultFour = [];

var resultFive = [];

var resultSix = [];

var resultSeven = [];

var resultEight = [];

var resultNine = [];

var resultTen = [];

var resultEleven = [];

var resultTwelve = [];

var resultThirteen = [];

var resultFourteen = [];

var resultFifteen = [];

var resultSixteen = [];

var resultSeventeen = [];


var resultEighteen = [];

var resultNineteen = [];

var resultTwenty = [];

var resultTwenty_one = [];

var resultTwenty_two = [];

var resultTwenty_three = [];

var resultTwenty_four = [];


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
 




if (((upperCase || upperCaseError) === 'yes') && ((lowerCase || lowerCaseError) === 'yes') && ((specialChar || specialError) === 'yes') && ((numbersPrompt || numbersError) === 'yes')) {
  
  for (var i = 0; i < lengthOfPassword; i++) {
 
    var resultAllYes = (numbersArr.concat(upperCasedCharactersArr, lowerCasedCharactersArr, specialCharactersArr))[Math.floor(Math.random() * 84)];
    resultZero.push(resultAllYes);
  }
    var zero = console.log(resultZero.join(''));
   } 

  
else if (((upperCase || upperCaseError) === 'no') && ((lowerCase || lowerCaseError) === 'no') && ((specialChar || specialError) === 'no') && ((numbersPrompt || numbersError) === 'no')) {
      window.alert('ERROR! You have chosen no criteria. Please reload browser to start again...');
    }


   
else if (((upperCase || upperCaseError) === 'yes') && ((lowerCase || lowerCaseError) === 'no') && ((specialChar || specialError) === 'no') && ((numbersPrompt || numbersError) === 'no')) {
    
    for (var i = 0; i < lengthOfPassword; i++) {
 
         var randomUppercase = upperCasedCharactersArr[Math.floor(Math.random() * upperCasedCharactersArr.length)];
         resultOne.push(randomUppercase);
       }
       var one = console.log(resultOne.join(''));
   }



else if (((upperCase || upperCaseError) === 'yes') && ((lowerCase || lowerCaseError) === 'yes') && ((specialChar || specialError) === 'no') && ((numbersPrompt || numbersError) === 'no')) {

    for (var i = 0; i < lengthOfPassword; i++) {
 
      var randomUpperAndLower = (upperCasedCharactersArr.concat(lowerCasedCharactersArr))[Math.floor(Math.random() * 51)];
      resultTwo.push(randomUpperAndLower);
    }
    var two = console.log(resultTwo.join(''));
   }



else if (((upperCase || upperCaseError) === 'yes') && ((lowerCase || lowerCaseError) === 'yes') && ((specialChar || specialError) === 'yes') && ((numbersPrompt || numbersError) === 'no')) {

    for (var i = 0; i < lengthOfPassword; i++) {
 
      var randomUpperAndLowerAndSpec = (upperCasedCharactersArr.concat(lowerCasedCharactersArr, specialCharactersArr))[Math.floor(Math.random() * 74)];
      resultThree.push(randomUpperAndLowerAndSpec);
    }
    var three = console.log(resultThree.join(''));
   }


else if (((upperCase || upperCaseError) === 'no') && ((lowerCase || lowerCaseError) === 'no') && ((specialChar || specialError) === 'no') && ((numbersPrompt || numbersError) === 'yes')) {

    for (var i = 0; i < lengthOfPassword; i++) {
 
      var randomNumber = numbersArr[Math.floor(Math.random() * 10)];
      resultFour.push(randomNumber);
    }
    var four = console.log(resultFour.join(''));
   }



else if (((upperCase || upperCaseError) === 'no') && ((lowerCase || lowerCaseError) === 'no') && ((specialChar || specialError) === 'yes') && ((numbersPrompt || numbersError) === 'yes')) {

    for (var i = 0; i < lengthOfPassword; i++) {
 
      var randomNumberAndSpec = (numbersArr.concat(specialCharactersArr))[Math.floor(Math.random() * 32)];
      resultFive.push(randomNumberAndSpec);
    }
    var five = console.log(resultFive.join(''));
   }



   else if (((upperCase || upperCaseError) === 'no') && ((lowerCase || lowerCaseError) === 'yes') && ((specialChar || specialError) === 'yes') && ((numbersPrompt || numbersError) === 'yes')) {

    for (var i = 0; i < lengthOfPassword; i++) {
 
      var randomNumberAndSpecAndLower = (numbersArr.concat(specialCharactersArr, lowerCasedCharactersArr))[Math.floor(Math.random() * 58)];
      resultSix.push(randomNumberAndSpecAndLower);
    }
    var six = console.log(resultSix.join(''));
   }


   else if (((upperCase || upperCaseError) === 'yes') && ((lowerCase || lowerCaseError) === 'no') && ((specialChar || specialError) === 'no') && ((numbersPrompt || numbersError) === 'yes')) {

    for (var i = 0; i < lengthOfPassword; i++) {
 
      var randomNumberAndUpper = (numbersArr.concat(upperCasedCharactersArr))[Math.floor(Math.random() * 35)];
      resultSeven.push(randomNumberAndUpper);
    }
    var seven = console.log(resultSeven.join(''));
   }


   else if (((upperCase || upperCaseError) === 'yes') && ((lowerCase || lowerCaseError) === 'yes') && ((specialChar || specialError) === 'no') && ((numbersPrompt || numbersError) === 'yes')) {

    for (var i = 0; i < lengthOfPassword; i++) {
 
      var randomNumberAndUpperAndLower = (numbersArr.concat(upperCasedCharactersArr, lowerCasedCharactersArr))[Math.floor(Math.random() * 61)];
      resultEight.push(randomNumberAndUpperAndLower);
    }
    var eight = console.log(resultEight.join(''));
   }

   else if (((upperCase || upperCaseError) === 'no') && ((lowerCase || lowerCaseError) === 'yes') && ((specialChar || specialError) === 'no') && ((numbersPrompt || numbersError) === 'yes')) {

    for (var i = 0; i < lengthOfPassword; i++) {
 
      var randomNumberAndLower = (numbersArr.concat(lowerCasedCharactersArr))[Math.floor(Math.random() * 35)];
      resultNine.push(randomNumberAndLower);
    }
    var nine = console.log(resultNine.join(''));
   }

   else if (((upperCase || upperCaseError) === 'yes') && ((lowerCase || lowerCaseError) === 'no') && ((specialChar || specialError) === 'yes') && ((numbersPrompt || numbersError) === 'no')) {

    for (var i = 0; i < lengthOfPassword; i++) {
 
      var randomUpperAndSpec = (upperCasedCharactersArr.concat(specialCharactersArr))[Math.floor(Math.random() * 48)];
      resultTen.push(randomUpperAndSpec);
    }
    var ten = console.log(resultTen.join(''));
   }


   
   else if (((upperCase || upperCaseError) === 'no') && ((lowerCase || lowerCaseError) === 'no') && ((specialChar || specialError) === 'yes') && ((numbersPrompt || numbersError) === 'no')) {

    for (var i = 0; i < lengthOfPassword; i++) {
 
      var randomSpec = (specialCharactersArr)[Math.floor(Math.random() * 22)];
      resultEleven.push(randomSpec);
    }
    var eleven = console.log(resultEleven.join(''));
   }

   else if (((upperCase || upperCaseError) === 'no') && ((lowerCase || lowerCaseError) === 'yes') && ((specialChar || specialError) === 'no') && ((numbersPrompt || numbersError) === 'no')) {

    for (var i = 0; i < lengthOfPassword; i++) {
 
      var randomLower = (lowerCasedCharactersArr)[Math.floor(Math.random() * lowerCasedCharactersArr.length)];
      resultTwelve.push(randomLower);
    }
    var twelve = console.log(resultTwelve.join(''));
   }

   else if (((upperCase || upperCaseError) === 'yes') && ((lowerCase || lowerCaseError) === 'no') && ((specialChar || specialError) === 'yes') && ((numbersPrompt || numbersError) === 'yes')) {

    for (var i = 0; i < lengthOfPassword; i++) {
 
      var randomNumberAndUpperAndSpec = (numbersArr.concat(upperCasedCharactersArr, specialCharactersArr))[Math.floor(Math.random() * 58)];
      resultThirteen.push(randomNumberAndUpperAndSpec);
    }
    var thirteen = console.log(resultThirteen.join(''));
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
