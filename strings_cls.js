let str1 = "Hi";
let str2 = "Hello";
let str3 = `Hi Hello`;

// console.log(str1);
// console.log(str2);
// console.log(str3);

// console.log(str2[0]);
str2[0] = "h";
console.log(str2);
str2 = "Bye";
// console.log(str2);
console.log("###########");
// console.log("Hi" === "hi");
// console.log(str2.length);

let nick_name = "Sonu";

// console.log(nick_name.toUpperCase());
// console.log(nick_name.toLowerCase());
console.log("==========");
console.log(nick_name.indexOf("b"));

const intro = str1.concat(" ").concat(nick_name); // "Hi Sonu"
// console.log(intro);

// console.log(nick_name.charAt(3));

let garbagStr = "     Hello there     ";
// console.log(garbagStr.length);
// console.log(garbagStr.trim());

let txt = "Hey there, how are you";
// console.log(txt.slice(11));

let someTxt =
  'The quick brown fox jumps over the lazy dog. "If" the dog reacted, was it really lazy?';
// console.log(someTxt.replace("dog", "monkey"));
console.log("=====#######");
console.log(someTxt);
let txt3 = "The quick brown fox jumps over the lazy dog";
const arrFromTxt3 = txt3.split(" ");
// console.log(arrFromTxt3);

let url1 = "www.xyz.com/products/books";
let url2 = "www.xyz.com/products/mobiles";
const urlsPlit = url1.split("/");
console.log(urlsPlit[urlsPlit.length - 1]);
urlsPlit[urlsPlit.length - 1] = "laptops";
console.log(urlsPlit);
console.log(urlsPlit.join("/"));
