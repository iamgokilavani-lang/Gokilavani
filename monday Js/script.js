console.log("10" + 5) // "105" → string
console.log(10 + true) // 11 → number
console.log(false + null) // 0 → number
console.log("Hello" + undefined) // "Helloundefined" → string
console.log([1,2] + 5) // "1,25" → string
 // String + Number
console.log("Age: " + 25); // "Age: 25"
console.log(typeof("Age: " + 25)); // string

// Boolean + Number
console.log(true + 10); // 11
console.log(typeof(true + 10)); // number

// Array + String
console.log([1,2,3] + " items"); // "1,2,3 items"
console.log(typeof([1,2,3] + " items")); // string

// Object + Number
console.log({a:1} + 5); // "[object Object]5"
console.log(typeof({a:1} + 5)); // string

// Null + Number
console.log(null + 7); // 7
console.log(typeof(null + 7)); // number
 console.log(Boolean("")); // false
console.log(Boolean("javascript"));// true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true
 let mark = 45;
if (mark > 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}
 let age = 20;
if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}
 let a = 50, b = 80, c = 30;
if (a > b && a > c) {
  console.log("a is greatest");
} else if (b > a && b > c) {
  console.log("b is greatest");
} else {
  console.log("c is greatest");
}
 let light = "yellow";
switch(light) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("ready");
    break;
  case "green":
    console.log("go");
    break;
  default:
    console.log("invalid");
}
 let username = "admin";
let password = "1234";

if (username === "admin") {
  if (password === "1234") {
    console.log("Login Success");
  } else {
    console.log("Invalid Login");
  }
} else {
  console.log("Invalid Login");
}
 let hour = 14;
if (hour >= 1 && hour <= 12) {
  console.log("Morning");
} else if (hour >= 13 && hour <= 15) {
  console.log("Afternoon");
} else if (hour >= 16 && hour <= 19) {
  console.log("Evening");
} else if (hour >= 20 && hour <= 24) {
  console.log("Night");
} else {
  console.log("Invalid hour");
}
console.log(true + true); // 2
console.log("5" - 2); // 3
console.log("5" + 2); // "52"
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(Boolean(" ")); // true
console.log(Number(true)); // 1