const foodOrder = new Set([
  "Burger",
  "Fries",
  "Coke",
  "Burger",
  "Fried Rice",
  "Fries",
]);
// console.log(foodOrder);
// console.log(foodOrder.size);
// console.log(foodOrder.has("chips"));
// console.log(foodOrder.add("chips"));
// console.log(foodOrder.delete("chips"));
// foodOrder.clear();
// console.log(foodOrder);

foodOrder.forEach(function (e) {
  console.log("⭐", e);
});

const arr = [11, 12, 15, 11, 13, 12, 100];

arr.forEach(function (e) {
  console.log("=>", e);
});

const setFromArr = new Set(arr);
console.log(setFromArr);
const res = Array.from(setFromArr);
console.log(res);
