let age = 16;
let citizenShip = "INDIAN";
let marks = 60.99;

// if the age is greater than or equals 18 and must be indian then allow
// to vote

// console.log("line no. 7: ", "IndIan" === "Indian");

// Ist case
// if (age >= 18 && citizenShip.toLowerCase() === "Indian".toLowerCase()) {
//   console.log("Allowed to Vote!!");
// }

// II case
// if (age >= 18) {
//   console.log("Allowed to vote");
// } else {
//   console.log("Not allowed to vote yet!");
// }

// III case
let VIP = false;

// if (age >= 18) {
//   console.log("Allowed Entry");
// } else if (VIP) {
//   console.log("Allowed Entry");
// } else {
//   console.log("No Entry");
// }

let isMaggieAvailableAtShop1 = false;
let isMaggieAvailableAtShop2 = false;
let isMaggieAvailableAtShop3 = true;

// if (isMaggieAvailableAtShop1) {
//   console.log("Buy");
// } else if (isMaggieAvailableAtShop2) {
//   console.log("Buy from shop 2");
// } else if (isMaggieAvailableAtShop3) {
//   console.log("Buy from shop 3");
// } else {
//   console.log("Sleep empty stomach today :(");
// }

// NESTED if else
let weekday = true;
let national_holiday = false;
let p1_issue = true;

// if (weekday) {
//   console.log("WORK!!");
//   if (national_holiday) {
//     console.log("Yay, weekday but holiday");
//   } else {
//     console.log("Shut up and WORK!!");
//   }
// } else {
//     if(expression) {

//     }
// }

//SWITCH CASE

let day = "MONDAY";

switch (day) {
  case "Monday":
    console.log("It is Monday, study maths");
    break;
  case "Tuesday":
    console.log("It is Tuesday, study Phy");
    break;
  case "Friday":
    console.log("Friday, weekend started");
    break;
  default:
    console.log("Do whatever you need to do");
}

//
let shapeName = "Triangle".toLowerCase();

switch (urlEndpoint) {
  case "square":
    // logic to calculate area of square (a sq) a**2
    break;
  case "triangle":
    // logic to calculate area of triangle
    break;
  default:
    console.log("Redirect to not found page");
}

let var_i = 10;
let expression = true;

if (expression) var_i++;
else var_i--;
