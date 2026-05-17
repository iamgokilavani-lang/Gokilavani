//Student Attendance Form
let presentStudents = ["goki", "nalan", "nila"];

let absentStudents = ["nalan", "nila"];

let finalStudents = [
    ...presentStudents,
    ...absentStudents,
    "goki"
];

console.log("Final Student List");

for(let i = 0; i < finalStudents.length; i++) {
    console.log(finalStudents[i]);
}
//output
//gokila
//angu
//veni
//nalan
//nila
//laxmi

//2.E-Commerce Mart
var mobileDetails = {
    brand: "oopo",
    model: "oopo pro",
    price: 25000
};

var chargerDetails = {
    type: "Fast Charger",
    watt: "45W"
};

var finalObject = Object.assign(
    {},
    mobileDetails,
    chargerDetails,
    { deliveryDate: "20-05-2020" }
);

console.log(finalObject);

//output={brand: 'oopo', model: 'oopo pro', price: 25000, type: 'Fast Charger', watt: '45W',
//brand: "oopo"
//deliveryDate: "20-05-2020"
//model: oopo pro"
//price: 30000
//type: "Fast Charger"
//watt: "45W"
//[[Prototype]]: Object

//3.Food Delivery App
function orderFood(...items) {
    console.log("Total items ordered: " + items.length);
    console.log("First item: " + items[0]);
    console.log("Last item: " + items[items.length - 1]);
}

orderFood("dosa","Pizza", "Burger", "Pasta", "Fried Rice","Poori","Noodles");

//Output
//Total items ordered: 7
//First item: Dosa
//Last item: Noodles

//4.Employee Salary Filter
let employees = [
    { name: "gokila", salary: 45000 },
    { name: "nalan", salary: 60000 },
    { name: "nila", salary: 75000 },
    { name: "angu", salary: 40000 }
];

let filteredEmployees = employees.filter(emp => emp.salary > 50000);

console.log("Employees with salary above 50000:");
console.log(filteredEmployees);

//output
//(2) [{…}, {…}]
//0:{name: 'nalan', salary: 60000}
//1: {name: 'nila', salary: 75000}
//length: 2
//[[Prototype]]: Array(0)

//5.Online Game Score Board
let scores = [120, 150, 200, 180, 100];

let totalScore = scores.reduce((total, score) => {
    return total + score;
}, 0);

console.log("Final Total Score: " + totalScore);

//output
//Final Total Score: 750
