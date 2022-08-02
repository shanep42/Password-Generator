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
function generatePassword() {
  var generatedPassword = []
  const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] // I'm 100% sure there is an easier way to do these.
  const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
  // Check with user which of these they'd like included
  // Stitch each selected list together into one new array, from which the password will be generated.
  var optionsArray = [];

  if (document.getElementById('lowercase').checked) {
    optionsArray = optionsArray.concat(lowercase);
    console.log("Lowercase checked")
  }

  if (document.getElementById('uppercase').checked) {
    optionsArray = optionsArray.concat(uppercase)
    console.log("Uppercase checked")
  }

  if (document.getElementById('numerals').checked) {
    optionsArray = optionsArray.concat(numerals)
    console.log("Numerals checked")
  }

  if (document.getElementById('specialChar').checked) {
    optionsArray = optionsArray.concat(specialChar)
    console.log("Special characters checked")
  }

  var passwordLength = document.getElementById('length').value
  console.log(`The password length has been set to ${passwordLength}`)


  console.log(`Available character pool: ${optionsArray}`)
  // Pick characters from the combined character option array by randomly selecting indices until the password is the requested length.

  while (generatedPassword.length < passwordLength) {
    generatedPassword.push(optionsArray[Math.floor(Math.random() * (optionsArray.length + 1))])
  }

  console.log(generatedPassword)

  //Check that at least one character from each selected array is represented in the final password.
    function findMatches(arr1, arr2) {
      return arr1.some(item => arr1.includes(item))
    }
  if (findMatches(generatedPassword, lowercase) == false && (document.getElementById('lowercase').checked)) {
    generatedPassword.splice((Math.floor(Math.random() * (passwordLength + 1))), 1, lowercase[(Math.floor(Math.random() * (lowercase + 1)))])
  }
  //Assemble the 
  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);