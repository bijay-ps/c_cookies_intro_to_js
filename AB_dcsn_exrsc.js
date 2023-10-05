function weatherReport(temp) {
  if (temp < 0) {
    console.log("It is freezing outside");
  } else if (temp >= 0 && temp <= 20) {
    console.log("The weather is cool.");
  } else if (temp >= 21 && temp <= 30) {
    console.log("The weather is warm.");
  } else {
    console.log(" it's hot outside");
  }
}

let temperature = 25;
// weatherReport(temperature);

// program for a simple calculator
// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operator = prompt("Enter the operator (+, -, *, /):");
// let result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     result = num1 / num2;
//     break;
//   default:
//     console.log("Invalid operator");
// }

// console.log(`The result of ${num1} ${operator} ${num2} is ${result}`);

let num1 = prompt("Enter the first number:");
console.log(num1);
