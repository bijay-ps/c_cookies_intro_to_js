// PRIMITIVE DATA TYPES
let num = 10; //Number
num = "Jane"; // implicit conversion
let str = "Bijay123!!";
let numStr = "10"; // String
numStr = Number("10"); // Explicit conversion
console.log(typeof numStr);

let bool = true;

// console.log(full_name);
var full_name;

console.log(num == numStr); //loose equality operator
console.log(num === numStr); //Strict equality operator
console.log(10 === "10"); //Strict equality operator

console.log(null === undefined);
console.log(null == undefined);

// NON PRIMITIVE DATA TYPES
const arr = [12, 13, 4, 5, -9, "Bijay", "Singh"];
console.log(arr);

const person = {
  fname: "Bijay",
  age: 30,
  employeed: true,
  hobbies: ["reading", "playing PS 4"],
};

console.log(person);

function sum(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}

sum(2, 5);
