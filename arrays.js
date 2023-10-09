let arr_1 = [11, 12, 13, 14, 15];
// console.log(arr_1);

let fruits = ["🍎", "🍓", "🍇"];
// console.log(fruits);

// let farmAnimals = new Array(5);
// console.log(farmAnimals);
// for (let i = 0; i < farmAnimals.length; i++) {
//   console.log(i);
// }
// farmAnimals[0] = "Cow";
// farmAnimals[1] = "cc";
// console.log(farmAnimals);

let arr = ["🐮", "🐷"];
console.log(arr);
arr.push("🐐");
console.log(arr);
console.log("line 20: ", arr.pop());
// arr.pop();
console.log(arr);
arr.unshift("🐐");
console.log(arr);
arr.shift();
console.log(arr);
const i = arr.indexOf("🐮");
console.log(arr.indexOf("🐮"));
console.log(i);

const new_arr = ["🐮", "🐷", "🐮"];
console.log(new_arr.lastIndexOf("🐮"));

console.log(arr.includes("🐔"));
console.log(arr.includes("🐮"));

// let a = 2;
// console.log(2);
// console.log(a);

// arr[3] = "🐴"

const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log("#########################");
// console.log(animals.slice(2));
// console.log(animals);

//   0      1      2      3
const months = ["Jan", "Mar", "Apr", "Jun"];
months.splice(1, 0, "Feb");
// console.log(months);
months.splice(4, 1, "May");
// console.log(months);
// months.splice(2, 2);
// console.log(months);

const nums = [5, 4, 100, 12, 9, 89, 13];
const r1 = nums.find(function (elt) {
  return elt > 10;
});
// console.log(r);
const r2 = nums.filter(function (elt) {
  return elt > 10;
});
// console.log(r2);

const r3 = nums.map(function (elt) {
  return elt * 2;
});
// console.log(r3);

const elts = ["Fire", "Air", "Water"];
// console.log(elts.join(""));
// console.log(elts.join(" & "));

const counts = ["one", "two", "three"];
// console.log(counts.reverse());

const numsArr = [1, 2, 3, 4];

const sumTotal = numsArr.reduce(function (acc, currentElt) {
  return acc + currentElt;
}, 5);

console.log(sumTotal);
