#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
  {
    name: "firstNumber",
    type: "number",
    message: "Enter your first number",
  },
  {
    name: "secondNumber",
    type: "number",
    message: "Enter your second number",
  },
  {
    name: "operator",
    type: "list",
    message: "Select the operator to perform action",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Exponent",
    ],
  },
]);

switch (answer.operator) {
  case (answer.operator = "Addition"):
    console.log(answer.firstNumber + answer.secondNumber);
    break;
  case (answer.operator = "Subtraction"):
    console.log(answer.firstNumber - answer.secondNumber);
    break;
  case (answer.operator = "Multiplication"):
    console.log(answer.firstNumber * answer.secondNumber);
    break;
  case (answer.operator = "Division"):
    console.log(answer.firstNumber / answer.secondNumber);
    break;
  case (answer.operator = "Exponent"):
    console.log(answer.firstNumber ** answer.secondNumber);
    break;
  default:
    console.log("Please select a valid operator");
}
