// Variable that sets base length of 8 characters.
var characterLength = 8; 
//Variable that creates an array that stores random numbers and characters listed below
var choiceArray = [];
//Variable for special characters
var specialCharArray = ['!', '@','#','$','%','^','&','*','(',')','/','?','+'];
//Variable for array of lowercase letters
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//Variable for array of uppercase letters
var uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//Variable for array of numbers
var numberArray = ['0','1','2','3','4','5','6','7','8','9'];

// Assignment Code
//Selects the id "generate" from HTML and assigns it to the variable "generateBtn"
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
//Once user clicks the button the function "writePassword" will begin
generateBtn.addEventListener("click", writePassword);

//Function for prompts: 
function getPrompts() {
  choiceArray = [];

  //When user enters number of characters, the number is stored in 'characterLength'; the prompt asks how many characters and converts the string into an integer via "parseInt"
  characterLength = parseInt(prompt("How many characters would you like your password to contain? (8-128 characters"))
  
  //If 'characterLength' is not a number or if user inputs a number less than 8 or greater than 128; alerts the prompt message. 
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){
    alert("Character length must be a number between 8-128. Please try again.");
    return false;
  }
  //If user inputs a number that returns 'true', the user will move on to the following prompts:
  //If user answers 'Ok' to confirm prompt, choiceArray will concatenate lowercase, uppercase, special char, and numbers into the empty "choicearray" variable depending on choices
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
//Once user chooses type of characters, the "choiceArray" will need to choose characters randomly based on specific characterLength entered.

// Write password to the #password input
//Creates a funciton to write password; the "getPrompts" function is stored into "correctPrompts" variable and either returns true or false. 
function writePassword() {
  var correctPrompts = getPrompts(); //returns true or false
  var passwordText = document.querySelector("#password"); //selects the id "password" from HTML and assigns to variable "passwordText"
  
  //If the function returns true and stores values user inputs into "correctPrompts" then, the "generatePassword" function will run and store into "newPassword"
  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  
  } 
  
}

function generatePassword() {
  var password = ""; //empty string
  //for loop that will keep going for however long the length the user inputs
  for(var i = 0; i < characterLength; i++) {
    // random value between 0 and "characterLength" input from user and stores the characters into "randomIndex"
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    //now, "password" will take the empty string and add the characters in "randomIndex"
    password = password + choiceArray[randomIndex];
}
  return password;
}
