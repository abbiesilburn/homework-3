// Assignment Code

document.querySelector("#generate").addEventListener("click", writePassword);

//variables

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var confirmLength = "";
var confirmSpecial;
var confirmNum;
var confirmUpper;
var confirmLowe;

function generatePassword(){
  // how many characters would the user like
   confirmLength = (prompt("How many characters would you like your password to contain? (must be between 8 and 128)"));

   while(confirmLength < 7 || confirmLength >= 128) {
    alert("Password length must be between 8 and 128 characters please try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    } 
    alert(`You have selected ${confirmLength} characters`);

  // what type of character would the user like
  confirmSpecial = confirm("Would you like special characters");
  confirmNume = confirm("Would you like numeric characters");    
  confirmLower = confirm("Would you like lowercase characters");
  confirmUpper = confirm("Would you like uppercase characters");

  
  var passwordCharacters = []
      
    if (confirmSpecial) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNum) {
      passwordCharacters = passwordCharacters.concat(numChar)
    }
      
    if (confirmLower) {
      passwordCharacters = passwordCharacters.concat(lowerChar)
    }

    if (confirmUpper) {
      passwordCharacters = passwordCharacters.concat(upperChar)
    }
  
    console.log(passwordCharacters)

      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}












// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);