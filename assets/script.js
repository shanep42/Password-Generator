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
  const specialChar = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
  // Check with user which of these they'd like included

  // Stitch each selected list together into one new array, from which the password will be generated. Insert one random character from each selected array, so that at least one is included regardless of RNG.
  var optionsArray = [];

  if (document.getElementById('lowercase').checked) {
    optionsArray = optionsArray.concat(lowercase);
    generatedPassword.push(lowercase[Math.floor(Math.random() * lowercase.length)])
    console.log("Lowercase checked")
  }

  if (document.getElementById('uppercase').checked) {
    optionsArray = optionsArray.concat(uppercase)
    generatedPassword.push(uppercase[Math.floor(Math.random() * uppercase.length)])
    console.log("Uppercase checked")
  }

  if (document.getElementById('numerals').checked) {
    optionsArray = optionsArray.concat(numerals)
    generatedPassword.push(numerals[Math.floor(Math.random() * numerals.length)])
    console.log("Numerals checked")
  }

  if (document.getElementById('specialChar').checked) {
    optionsArray = optionsArray.concat(specialChar)
    generatedPassword.push(specialChar[Math.floor(Math.random() * specialChar.length)])
    console.log("Special characters checked")
  }

  var passwordLength = document.getElementById('length').value
  console.log(`The password length has been set to ${passwordLength}`)


  console.log(`Available character pool: ${optionsArray}`)
  
  // Pick characters from the combined character option array by randomly selecting indices until the password is the requested length.

  while (generatedPassword.length < passwordLength) {
    generatedPassword.push(optionsArray[Math.floor(Math.random() * (optionsArray.length))])
  }

  console.log(generatedPassword)

  // Shuffle the indices of the generatedPassword array so that the non-random selections are not bunched at the start.
  // I was stumbling over how to do the algorithm where you basically "draw from a hat" until the hat is empty before I stumbled on the name for it that I'd forgotten: a Fisher-Yates shuffle
  function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

  generatedPassword = shuffle(generatedPassword);
  //Assemble the items within the generated password array into a string that can be displayed in the text area.
  stringedPassword = "";
  for (let i = 0; i < passwordLength; i++){
    stringedPassword = stringedPassword + generatedPassword[i]
  }
  console.log(`Password as a string: ${stringedPassword}`)
  //return result of generation funciton


  return stringedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);