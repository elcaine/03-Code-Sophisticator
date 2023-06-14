// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 
}

function generatePassword(){
  let noTypesSelected = true;
  let charSet = "";

  // PW generator loops until complete and correct input submitted
  while(true){
    let numDigits = getNumberCharacters();
    getTypes("Lower Case", "abcdefghijklmnopqurstuvwxyz");
    getTypes("Upper Case", "ABCDEFGHIJKLMNOPQURSTUVWXYZ");
    getTypes("Numeric", "1234567890");
    getTypes("Special", "~!@#$%^&*()_+[]\\{}|;,./<>?");
     
   // If no types are selected return is bypassed for another loop
   if(noTypesSelected){
     console.log("Error, must select at least one input type!");
     alert("ERROR!\nMust select at least one input type.\nStarting over :(");
    }
    else{
      return generate(numDigits);
    }
  }
  
  // Private helper functions to encapsulate and/or abstract code
  function getNumberCharacters(){
    let digitsStr = prompt("How long would you like the password to be?\
                          \nMust be at least 8 and no more than 128 characters.");
    let digitsNum = -1;
    while(true){
      digitsNum = parseInt(digitsStr);
      if(isNaN(digitsNum)){
        console.log("Error, input must be a number");
        digitsStr = prompt("ERROR!\nMust be a number.");
      }
      else if (digitsNum < 8 || digitsNum > 128) {
        console.log("Error, input must be at least 8 and no more than 128 characters!");
        digitsStr = prompt("ERROR!\nMust be at least 8 and no more than 128 characters.");
      }
      else{
        return digitsNum;
      }
    }
  }

  function getTypes(thisType, typeSet){
    let answer = prompt("Would you like "+ thisType +" characters included?\
                        \nEnter \"/Y\" for yes or \"N\" for no.");
    while(true){
      if(answer == "y" || answer == "Y"){
        noTypesSelected = false;
        charSet = charSet + typeSet;
        return true;
      }
      else if(answer == "n" || answer == "N"){
        return false;
      }
      answer = prompt("Invalid input!\nWould you like "+ thisType +" included?\
                        \nEnter \"Y\" for yes or \"N\" for no.");
    }
  }

  // Algorithm largely taken from: https://www.geeksforgeeks.org/random-string-generator-using-javascript/
  function generate(num) {
    let result = "";
    const charactersLength = charSet.length;
    for(let i = 0; i < num; i++) {
        result += charSet.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

// Added copy function to capture generated PW with click-button
// Code taken from: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function copyTextButton() {
  // Get the text field
  var copyText = document.getElementById("password");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
