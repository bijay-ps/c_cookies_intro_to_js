let num_1 = 10;
let num_2 = 2;

// addition
const sum_result = num_1 + num_2;
// console.log(sum_result);

let counter = 0;
// counter = counter + 1;
// counter++;
// ++counter;
// counter = counter + 5;
// counter += 5; // shorthand: counter = counter + 5
// console.log(counter);
// console.log(++counter + num_1); //10
// console.log(counter);

//subtraction
// num_1 - num_2
// -=
// *
// *=
// /=

// **=

// Modulo Operator
const rem = num_1 % 3;
// console.log(rem);

// **

/*console.log(2 ** 3);
console.log(34 < 98);
*/

let allowedToVote = false;
let age = 17;
// console.log(2 <= 2); // Is 2(Left side) gretaer than OR equal to 2(right side)
// console.log(age >= 18);
if (age >= 18) {
  allowedToVote = true;
}
// console.log(allowedToVote);

let a = 2;
// console.log(a == 4);
// console.log(a === "2");
// console.log(typeof a);

let fName = "";
let sName = "biJAY";

// console.log(fName.toLowerCase() == sName.toLowerCase());

if (a === "2") {
  // true or false
}

// console.log(4 !== "4"); // 4 != 4

let flag1 = true;
let flag2 = false;
let flag3 = true;
let flag4 = false;

// console.log(flag1 && flag2);
// console.log(flag1 && flag3);
// console.log(flag2 && flag4);

let isCouple = true;

if (age >= 18 || isCouple) {
}

// console.log(flag1 || flag2);
// console.log(flag1 || flag3);
// console.log(flag2 || flag4);

// console.log(!flag1);
// console.log(!flag3);
// console.log(!flag2);

// 0 1
if (0) {
  //
}

// FALSY VALUES:
// 0
// false
// ''
// undefined
// null
// NaN

let ax = "2#@$$2";
ax = Number(ax);
// console.log(ax, typeof ax);

// console.log(5 & 6);

// console.log(5 | 6);

// R, W, E
let read = 4; // 00000100; "Read"
let write = 2; // 00000010; "Write"
let execute = 1; // 00000001; "Execute"

let myPermissions = 0;
myPermissions = myPermissions | read;
// console.log(myPermissions & write);

// console.log(5 ^ 3); //XOR

console.log(~5); //NOT -(A + 1)

console.log(5 << 3);

console.log(5 >> 3);

let firstS = "Hi";
let secondS = " Hello";
console.log(firstS + " I am Bijay" + secondS);
const x = "3";
const xInNumber = +x;
console.log("xInNumber ", xInNumber, typeof xInNumber);

let i = "2";
i === "2" ? console.log("It is true") : console.log("False");
