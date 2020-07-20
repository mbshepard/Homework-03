
//1 - Set applicable values for password, including both special character and no special character options
var valuesSpecChar = "ABCDEFGHIJKLMNOPQRSTUVQXYZabcedfghijklmnopqrstuvqxyz1234567890!@#$%^&*()_+~"
var valuesNoSpecChar = "ABCDEFGHIJKLMNOPQRSTUVQXYZabcedfghijklmnopqrstuvqxyz1234567890"

//2 - Prompt user for input
var lengthInput = prompt("How long do you want your password to be? (Please choose a number between 8 and 128)")
  if (lengthInput <8 || lengthInput>128){
    alert("Please choose a length between 8 and 128 characters")
  }
  
var specialCharInput = prompt("Do you want to include special characters? (Type Yes or No)")


// 3 - Write function go generate password based on inputs from (1) and (2) above

let password = ""

function generatePassword(){
  for (let index = 0; index <= lengthInput - 1; index++) {
    if (specialCharInput == "Yes") {
    password = password + valuesSpecChar.charAt(Math.floor(Math.random() * Math.floor(valuesSpecChar.length)))
    
    } else{
    password = password + valuesNoSpecChar.charAt(Math.floor(Math.random() * Math.floor(valuesNoSpecChar.length)))
    }
  }
}

generatePassword()

console.log(password)

// 4 - Link password to "Generate" button

document.getElementById("generate").addEventListener("click", function run(){
  document.getElementById("password").innerHTML = password
})


console.log(specialCharInput)
