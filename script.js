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


  // Iterates over each index in first array to check it against each index of second array. Returns true (and breaks) if it ever finds a match, returns false if not.
  function matchCheck (arr1, arr2){
    for (let i = 0; i < arr1.length; i++){
      for (let j = 0; j < arr2.length; j++){
        if (arr1[i] == arr2[j]){
          return true
        }
      }
    }
    return false
  }

  // If selected array was selected and included in the options array but not actually randomly selected from optionsArray by generation, could:
  //      A) Call the entire randomization effort again until we just happen to get one that fits (could be time intensive?)
  // if ((document.getElementById('lowercase').checked && !(matchCheck(generatedPassword, lowercase))) 
  //  || (document.getElementById('uppercase').checked && !(matchCheck(generatedPassword, uppercase)))
  //  || (document.getElementById('numerals').checked && !(matchCheck(generatedPassword, numerals)))
  //  || (document.getElementById('specialChar').checked && !(matchCheck(generatedPassword, specialChar)))) {
  //   generatePassword();
  //  }


  //      B) Randomly insert a character from the unrepresented array at a random index of the generated array, overwriting one to maintain length (might still take multiple passes if we happen to hit a one-of from another list)

  // function testIfAllUsed (arr1) {
  //   if (document.getElementById('lowercase').checked && !(matchCheck(generatedPassword, lowercase))) {
  //     arr1.splice((Math.floor(Math.random() * (password.length + 1))), 1, lowercase[Math.floor(Math.random() * (lowercase.length + 1))]);
  //     testIfAllUsed(arr1);
  //   }
  //   if (document.getElementById('uppercase').checked && !(matchCheck(generatedPassword, uppercase))) {
  //     arr1.splice((Math.floor(Math.random() * (password.length + 1))), 1, uppercase[Math.floor(Math.random() * (uppercase.length + 1))]);
  //     testIfAllUsed(arr1);
  //   }
  //   if (document.getElementById('numerals').checked && !(matchCheck(generatedPassword, numerals))) {
  //     arr1.splice((Math.floor(Math.random() * (password.length + 1))), 1, numerals[Math.floor(Math.random() * (numerals.length + 1))]);
  //     testIfAllUsed(arr1);
  //   }
  //   if (document.getElementById('specialChar').checked && !(matchCheck(generatedPassword, specialChar))) {
  //     arr1.splice((Math.floor(Math.random() * (password.length + 1))), 1, specialChar[Math.floor(Math.random() * (specialChar.length + 1))]);
  //     testIfAllUsed(arr1);
  //   }
  // }

  // testIfAllUsed(generatedPassword)


  //Assemble the items within the generated password array into a string that can be displayed in the text area.
  stringedPassword = "";
  for (let i = 0; i < passwordLength; i++){
    stringedPassword = stringedPassword + generatedPassword[i]
  }
  console.log(`Password as a string: ${stringedPassword}`)
  //return result of generation funciton
  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);