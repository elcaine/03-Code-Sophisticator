// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 
}
function generatePassword(){
  let passwordParams = [5];
  // STOPPED RIGHT HERE!!  Trying do this with JSON??
  passwordParams[0] = ["Number Chars": getNumberCharacters()];
  passwordParams[1] = ["Lowers", getTypes("Lower Case")];
  passwordParams[2] = getTypes("Upper Case");
  passwordParams[3] = getTypes("Numeric Characters");
  passwordParams[4] = getTypes("Special Characters");
  for(let i = 0; i < passwordParams.length; i++){
    console.log(passwordParams[i]);
  }
  return passwordParams;
}

function getNumberCharacters(){
  let digitsStr = prompt("How long would you like the password to be?\
                        \nMust be at least 8 and no more than 128 characters.");
  let inputNeeded = true;
  let digitsNum = -1;
  while(inputNeeded){
    inputNeeded = false;
    digitsNum = parseInt(digitsStr);
    if(isNaN(digitsNum)){
      console.log("Error, input must be a number");
      inputNeeded = true;
      digitsStr = prompt("ERROR!\nMust be a number.");
    }
    else if (digitsNum < 8 || digitsNum > 128) {
      console.log("Error, input must be at least 8 and no more than 128 characters!");
      inputNeeded = true;
      digitsStr = prompt("ERROR!\nMust be at least 8 and no more than 128 characters.");
    }
  }
  return digitsNum;
}

function getTypes(thisType){
  let answer = prompt("Would you like "+ thisType +" included?\
                      \nEnter \"/Y\" for yes or \"N\" for no.");
  while(true){
    if(answer == "y" || answer == "Y"){
      return true;
    }
    else if(answer == "n" || answer == "N"){
      return false;
    }
    answer = prompt("Invalid input!\nWould you like "+ thisType +" included?\
                      \nEnter \"Y\" for yes or \"N\" for no.");
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
