// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Here is one way I think I know how to do this:

// Write a separate array to list each type of character the user might want included in the password (letters, numbers, special characters)
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] // I'm 100% sure there is an easier way to do these.
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialChar = [/*There has got to be an easier way*/]

// Check with user which of these they'd like included


// Stitch each selected list together into one new array, from which the password will be generated.
var optionsArray = []
// Have user specify how long they would like the generated password to be
var passwordLength = 0 // TODO: Decide how we're getting user input.

// Pick characters from the combined character option array by randomly selecting indices until the password is the requested length.

while (password.length < passwordLength) {
  password = password + optionsArray[Math.floor(Math.random * (optionsArray.length + 1))]
}

// Print that to an alert.
alert(`${password}`)


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
