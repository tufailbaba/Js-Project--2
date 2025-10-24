const prompt = require("prompt-sync")();
let number1;
let number2;
while (true) {
   number1 = Number(prompt("Enter number 1: "));
  if (isNaN(number1)) {
    console.log("Invalid input");
  } else {
    break;
  }
}

while (true) {
   number2 = Number(prompt("Enter number 2: "));
  if (isNaN(number2)) {
    console.log("Invalid input");
  } else {
    break;
  }
}

const operator = prompt("Enter sign: ");

let result;
let valid = true;
switch (operator) {
  case "+":
    result = number1 + number2;
    // console.log(result);
    break;

  case "-":
    result = number1 - number2;
    // console.log(result);
    break;

  case "/":
    result = number1 / number2;
    // console.log(result);
    break;

  case "*":
    result = number1 * number2;
    // console.log(result);
    break;

  default:
    console.log("Invalid operator!");
    valid = false;
}

if (valid) console.log(number1, operator, number2, "=", result);
