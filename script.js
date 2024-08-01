"use strict";
// let userName: string = "Moosa";
// console.log(userName);
// let num1: number = 45;
function addTwoNums(num1, num2) {
    let addition = num1 + num2;
    return addition;
}
console.log(addTwoNums(25, 25));
function square(num1) {
    let squaring = num1 * num1;
    return squaring;
}
console.log(square(7));
// let userName = prompt("whats your name ?");
let msg = "How are you?";
function greetUser(userName, msg) {
    console.log(userName, msg);
}
greetUser("Moosa", msg);
greetUser("Subhan", msg);
