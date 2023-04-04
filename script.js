var characterLength = 8; 
var choiceArray = [];
var specialCharArray = ['!', '@','#','$','%','^','&','*','(',')','/','?','+'];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArray = ['0','1','2','3','4','5','6','7','8','9'];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //returns true or false
  var passwordText = document.querySelector("#password");
  
  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  
  } 
  
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
}
  return password;
}
//parseInt converts string into number
function getPrompts() {
  choiceArray = [];

  characterLength = parseInt(prompt("How many characters would you like your password to contain? (8-128 characters"))
  
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){
    alert("Character length must be a number between 8-128. Please try again.");
    return false;
  }

  if (confirm("Would you like to use lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
  if (confirm("Would you like to use uppercase letters in your password?")) {
    choiceArray = choiceArray.concat(uppercaseArray);
  }
  if (confirm("Would you like to use special characters in your password?")) {
    choiceArray = choiceArray.concat(specialCharArray);
  }
  if (confirm("Would you like to use numbers in your password?")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  return true;
}