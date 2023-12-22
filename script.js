// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ALL logic and vars here
  console.log("You clicked the button!")
  var finalPassword =[]
  var randomPassword = []
  //  b.Lowercase, uppercase, numbers, special characters
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
  var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
  //1.Prompt users
  //  a.Password length 8 < 128
  var passwordLength = prompt("Choose password length (must be between 8 and 128)")
  console.log(passwordLength);
  if (passwordLength > 7 && passwordLength < 129) {
    var upperPassword = confirm("Would you like uppercases?")
    if (upperPassword === true) {
      var upperRandom = Math.floor(Math.random() * upper.length);
      console.log(upper[upperRandom])
      finalPassword.push(upper[upperRandom])
      randomPassword= randomPassword.concat(upper)
    }
    var lowerPassword = confirm("Would you like lowercases?")
    if (lowerPassword === true) {
      var lowerRandom = Math.floor(Math.random() * lower.length);
      console.log(lower[lowerRandom])
      finalPassword.push(lower[lowerRandom])
      randomPassword= randomPassword.concat(lower)
    }
    var numberPassword = confirm("Would you like numbers?")
    if (numberPassword === true) {
      var numberRandom = Math.floor(Math.random() * number.length);
      console.log(number[numberRandom])
      finalPassword.push(number[numberRandom])
      randomPassword= randomPassword.concat(number)
    }
    var characterPassword = confirm("Would you like special characters?")
    if (characterPassword === true) {
      var characterRandom = Math.floor(Math.random() * character.length);
      console.log(character[characterRandom])
      finalPassword.push(character[characterRandom])
      randomPassword= randomPassword.concat(character)
    }
    if (upperPassword === false && lowerPassword === false && numberPassword === false && characterPassword === false)
      alert("Must have at least 1 uppercase letter, lowercase letter, number, or special characcer")

  } else {
    alert("Uh oh! You either chose too many characters or not enough. Try again!")
  }

  for (var i = finalPassword.length; i < passwordLength; i++) {
    finalPassword.push(randomPassword[Math.floor(Math.random() * randomPassword.length)])
  }
  
  //2.Validate the input
  //3.Generate password based on criteria


  //4.Display generated password to page
  return finalPassword.join("")
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
