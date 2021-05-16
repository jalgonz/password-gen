// Arrays for character types
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Prompt to choose password length
function generatePassword () {
    var chooseLength = (prompt("Choose your password length. (How many characters?)"));

    while(chooseLength <= 7 || chooseLength >= 129) {
        alert("Password length must range between 8-128 characters. Please choose a valid number. ");
        var chooseLength = (prompt("Choose your password length. (How many characters?)"));
    }
    //Prompts to choose which character types to include
    var chooseLowerChar = confirm("Select OK to include lowercase characters.");
    var chooseUpperChar = confirm("Select OK to include uppercase characters.");
    var choosenNumber = confirm("Select OK to include numerical characters");
    var chooseSpecialChar = confirm("Select OK to include special characters.");
        
        while(chooseLowerChar === false && chooseUpperChar === false && choosenNumber === false && chooseSpecialChar){
            alert("You must choose at least one character type to include")
            var chooseLowerChar = confirm("Select OK to include lowercase characters.");
            var chooseUpperChar = confirm("Select OK to include uppercase characters.");
            var choosenNumber = confirm("Select OK to include numerical characters");
            var chooseSpecialChar = confirm("Select OK to include special characters.");
        }
    // This section concatinates the chosen character types into the password
    var passwordChar = []
    if (chooseLowerChar) {
        passwordChar = passwordChar.concat(lowerChar)
      }
  
      if (chooseUpperChar) {
        passwordChar = passwordChar.concat(upperChar)
      }
        
      if (choosenNumber) {
        passwordChar = passwordChar.concat(number)
      }
  
      if (chooseSpecialChar) {
        passwordChar = passwordChar.concat(specialChar)
    }

    console.log(passwordChar)

    var generatedPassword = ""
    //Selects randomly from the chosen character types until the amount of chosen characters is reached
    for (var i = 0; i < chooseLength; i++) {
        generatedPassword = generatedPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
    }
    return generatedPassword;
}
//Writes the actual text for the generated password in the readonly text box
function writePass() {
    var password = generatePassword();
    var passText = document.querySelector("#password");

    passText.value = password;
}
//Click to start password generation
document.querySelector("#passGen").addEventListener("click", writePass);
