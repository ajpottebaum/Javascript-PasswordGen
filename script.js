// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// Array charact. Capitals, lowercase, numbers 8-128 , and special 

var uppercsArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercsArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// empty array
var resultArray = [];
var userArray = [];

uppercsArray [1]
//-----------------------------------------------------------------
  var numCharacter = prompt ("How much number of Character you want between 8 and 128?");
  var numbers = confirm ("you want numbers in your password?");
  var uppercases = confirm ("you want Uppercases in your password?");
  var lowercases = confirm ("you want lowercases in your password?");
  var characters = confirm ("you want special characters in your password?");


// condition of the array

if (numbers){
  resultArray = resultArray.concat(numberArray);
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercsArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercsArray);

}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);