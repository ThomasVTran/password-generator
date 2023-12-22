// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ALL logic and vars here
   console.log("You clicked the button!")
  
  //1.Prompt users
  var passwordLength = prompt("Choose password length (must be between 8 and 128)")
  console.log(passwordLength);
  if (passwordLength > 7 && passwordLength < 129 ) {
    var upper = alert("Would you like uppercases?")
    if (upper === true) {
      var upper = Math.floor(Math.random() * upper.length);
    } else {
      
    }
  } else {
    alert("Uh oh! You either chose too many characters or not enough. Try again!")
  }
  

  //  a.Password length 8 < 128
  //  b.Lowercase, uppercase, numbers, special characters
  var upper= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lower=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  // var lower = alert("Would you like lowercases?")
  //   if (lower === true) {
  //     var lower = Math.floor(Math.random() * lower.length);
  //   } else {
  var number=[0,1,2,3,4,5,6,7,8,9,]
  // var number = alert("Would you like numbers??")
  //   if (number === true) {
  //     var number = Math.floor(Math.random() * number.length);
  //   } else {
  var character=["!","@","#","$","%","^","&","*","(",")"]
  // var character = alert("Would you like special characters?")
  //   if (character === true) {
  //     var character = Math.floor(Math.random() * character.length);
  //   } else {
  //2.Validate the input
  //3.Generate password based on criteria
  
  
  //4.Display generated password to page
    return "Generated password goes here!"
  }
  // var 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
