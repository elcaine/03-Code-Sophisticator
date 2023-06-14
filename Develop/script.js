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
  while(noTypesSelected){
    let passwordParams = {
      "Number of digits": getNumberCharacters(),
      "Lower Case": getTypes("Lower Case", "abcdefghijklmnopqurstuvwxyz"),
      "Upper Case": getTypes("Upper Case", "ABCDEFGHIJKLMNOPQURSTUVWXYZ"),
      "Numeric Characters": getTypes("Numeric Characters", "1234567890"),
      "Special Characters": getTypes("Special Characters", "~!@#$%^&*()_+[]\\{}|;,./<>?")
    }
  
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
      let answer = prompt("Would you like "+ thisType +" included?\
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
    /*
    let passwordParams = [5];
    // STOPPED RIGHT HERE!!  Trying do this with JSON??
    passwordParams[0] = getNumberCharacters();
    passwordParams[1] = getTypes("Lower Case");
    passwordParams[2] = getTypes("Upper Case");
    passwordParams[3] = getTypes("Numeric Characters");
    passwordParams[4] = getTypes("Special Characters");
    for(let i = 0; i < passwordParams.length; i++){
      console.log(passwordParams[i]);
    }
    */
     
   if(noTypesSelected){
     console.log("Error, must select at least one input type!");
     alert("ERROR!\nMust select at least one input type.\nStarting over :(");
    }
    else{
      return generate(passwordParams["Number of digits"]);
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
