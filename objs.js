// 1. Object literal method
// let xyz = {};
// xyz.key1 = "Value 1";

let person = {
  name: "Bijay",
  age: 32,
  hobbies: ["Reading", "movies"],
  isEmployeed: true,
  1: "One",
  address: {
    houseNo: 123,
    apt: "XYZ",
    state: "KA",
    pincode: 123456789,
  },
  greet: function () {
    console.log("Hi there!, my name is ", this.name);
  },
};
Object.freeze(person);
person.name = "Bijay Singh";

let prop = "hobbies";

console.log(person);
// console.log("line 10: ", person.name);
// console.log("line 11: ", person["1"]);
// console.log("line 12: ", person[prop]); // person["hobbies"]
// console.log("line 25: ", person.address.state);
console.log("line 26: ", person.greet());
// console.log("line 30: ", Object.keys(person));
// console.log("line 31: ", Object.values(person));
// console.log("line 32: ", Object.entries(person));

const targetObj = {};
Object.assign(targetObj, person);
// console.log("line 36: ", targetObj);

// 2. Object Construction method
let personII = new Object();
personII.name = "Prakash";
personII.age = 35;
// console.log(personII);

// function calculateSum(a,b) {
//     return a+b;
// }

// const sum = calculateSum(1,2)
