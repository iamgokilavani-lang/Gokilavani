//1.student registration form

let name = prompt("Enter Student Name:");
let department = prompt("Enter Department:");
let age = prompt("Enter Age:");

console.log(`Welcome ${name}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age}`);

//output
//Welcome goki
//Department: B.E Mech
//Age: 26

//2.ATM Withdrawal System

const balance = 10000;
let amount = Number(prompt("Enter Withdrawal Amount:"));

if (amount < 100) {
    console.log("Minimum withdrawal amount is 100");
} else if (amount <= balance) {
    let remaining = balance - amount;
    console.log(`Transaction Successful!`);
    console.log(`Withdrawn: ${amount}`);
    console.log(`Remaining Balance: ${remaining}`);
} else {
    console.log("Insufficient Balance!");
    console.log(`Your Balance: ${balance}`);
}

//Output
//Transaction Successful!
//Withdrawn: 500
//Remaining Balance: 9500

//3.Swiggy Discount Checker


let order = Number(prompt("Enter Order Amount:"));

let message = order > 499 ? "Free Delivery Available" : "Delivery Charges Applied";

console.log(`Order Amount: ${order}`);
console.log(message);

//output
//Order Amount: 500
//Free Delivery Available

//4.Instagram Login System

let username = prompt("Enter Username:");

if (username === "admin") {
    let password = prompt("Enter Password:");
    
    if (password === "1234") {
        console.log("Login Successful! Welcome admin");
    } else {
        console.log("Wrong Password!");
    }
} else {
    console.log("Invalid Username!");
}

//output
//Login Successful! Welcome admin

//5.Traffic Signal System

let signal = prompt("Enter Signal Color (red / yellow / green):").toLowerCase();

switch (signal) {
    case "red":
        console.log("STOP");
        break;
    case "yellow":
        console.log("READY");
        break;
    case "green":
        console.log("GO");
        break;
    default:
        console.log("Invalid Signal Color!");
}

//output
//GO

//6.Employee Salary Calculator

function salaryCalculation(basicSalary, bonus) {
    let totalSalary = basicSalary + bonus;
    return totalSalary;
}

let basic = Number(prompt("Enter Basic Salary:"));
let bonus = Number(prompt("Enter Bonus:"));

let total = salaryCalculation(basic, bonus);

console.log(`Basic Salary: ${basic}`);
console.log(`Bonus: ${bonus}`);
console.log(`Total Salary: ${total}`);

//output
//Basic Salary: 25000
//Bonus: 5000
//Total Salary: 30000

//7.E-Commerce Cart Total
const prices = [100, 200, 300, 400];

let cartTotal = 0;

for (let i = 0; i < prices.length; i++) {
    cartTotal = cartTotal + prices[i];
}

let cartAverage = cartTotal / prices.length;

console.log(`Products: ${prices}`);
console.log(`Total Price: ${cartTotal}`);
console.log(`Average Price: ${cartAverage}`);

//output
//Products: 100,200,300,400
//Total Price: 1000
//Average Price: 250

//8.WhatsApp Contact Book

const contact = {
    name: "goki",
    phone: "987654321",
    status: "Welcome"
};

for (let key in contact) {
    console.log(`${key}: ${contact[key]}`);
}

//output
//name: goki
//phone: 987654321
//status: Welcome

//9.Movie Ticket Booking

function payment(movieName, seats) {
    let ticketPrice = 150;
    let totalAmount = seats * ticketPrice;
    console.log(`Payment Processing...`);
    console.log(`Movie: ${movieName}`);
    console.log(`Seats: ${seats}`);
    console.log(`Total Amount: ₹${totalAmount}`);
    console.log(`Payment Successful!`);
}

function bookTicket(movieName, seats, callback) {
    console.log(`Booking Ticket for "${movieName}"...`);
    console.log(`${seats} Seat(s) Booked Successfully!`);
    callback(movieName, seats);
}

let movie = prompt("Enter Movie Name:");
let seats = Number(prompt("Enter Number of Seats:"));

bookTicket(movie, seats, payment);

//output
//Booking Ticket for "Kara"...
//2 Seat(s) Booked Successfully!
// Payment Processing...
//Movie: Kara
//Seats: 2
//Total Amount: ₹280
//Payment Successful!

//10.Food Delivery Time Tracker

function* foodDelivery() {
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}

const tracker = foodDelivery();

console.log(tracker.next().value);
console.log(tracker.next().value);
console.log(tracker.next().value);
console.log(tracker.next().value);

//output
//Order Confirmed
//Preparing Food
//Out for Delivery
//Delivered
