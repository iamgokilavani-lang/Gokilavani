// 1. API Task - User Names Uppercase

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    const upperUsers = data.map((user) => user.username.toUpperCase());

    console.log(upperUsers);
  })
  .catch((err) => console.log(err));




// 2. API Task - Expensive Products

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    const expensiveProducts = products.filter(
      (product) => product.price > 100
    );

    console.log(expensiveProducts);
  })
  .catch((err) => console.log(err));





// 3. Date Concept Task - Digital Clock

const now = new Date();

console.log(
  now.getHours(),
  ":",
  now.getMinutes(),
  ":",
  now.getSeconds()
);






// 4. String Concept Task - Username Checker

let userName = " gokilavai ";

let finalName = userName.trim().toUpperCase();

console.log(finalName);

console.log(finalName.includes("vani"));







// 5. Array Concept Task - Student Rank System

let marks = [450, 300, 700, 200, 900];

let sortedMarks = marks.sort((a, b) => b - a);

let top3 = sortedMarks.slice(0, 3);

console.log(top3);
