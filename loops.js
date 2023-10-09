// Goal is to print 1 to 100;

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Goal is to print 100 to 1;
for (let i = 100; i >= 1; i--) {
  //   console.log(i);
}

const arr = [45, 30, 50, 10, 25, 37, 40];
// length = 5 in this case
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

// infinite loop
// for(;;) {
//     console.log('PRINT');
// }

// For..in loop
const person = {
  person_name: "Jane Doe",
  age: 32,
  hobbies: ["reading", "music"],
  employmentStatus: true,
};

for (let keyOfObj in person) {
  //   console.log(keyOfObj, ":", person[keyOfObj]);
}

//For..of loop
let arr2 = ["Saheel", "Mayank", "Chandra", "Vikram"];

for (let name of arr2) {
  //   console.log(name);
}

// console.log("=============================");

for (let i = 0; i <= arr2.length-1; i++) {
  //   console.log(arr2[i]);
}

// console.log("=============================");

let std_name = "Prince";
for (let character of std_name) {
  //   console.log(character);
}

// MAP and SET
// enumerable and iterate

// forEach

// console.log("##############################");

const books = [
  {
    bookName: "Harry Potter 1",
    author_name: "J K Rowling",
  },
  {
    bookName: "Angles & Demons",
    author_name: "Dan Brown",
  },
];

// for
books.forEach(function (element, i) {   //   console.log(i, element.bookName); });

// continue and break

const arr_nums = [23, -90, 100, 65, 12, 7, 55, 23, 13, 7];
for (let i = 0; i < arr_nums.length; i++) {
  if (arr_nums[i] === 7) break;
  //   console.log(arr_nums[i]);
}

for (let i = 0; i < arr_nums.length; i++) {
  if (arr_nums[i] === 7) continue;
  //   console.log(arr_nums[i]);
}

// while loop

let i = 22;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

console.log("##########################");
do {
  console.log(i);
  i++;
} while (i <= 20)
