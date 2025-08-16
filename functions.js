"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(num) {
    // num.toUpperCase() // one problem
    return num + 2;
}
// sum("5"); // another problem
sum(5);
function getUpper(val) {
    return val.toUpperCase();
}
// getUpper(); // give error
// getUpper(5); // give error
getUpper("hello");
function signUpUser(name, email, password, isPaid) {
}
// signUpUser(1, 2, 3, 4); // give error
signUpUser("hilal", "hilal@exmple", "12345", true); // valid 
var loginUser = function (name, email, isPaid) { };
// loginUser("hilal", "hilal@example"); // error
var loginUserS = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
loginUserS("hilal", "hilal@example"); // isPaid will be true by default
function addTwo(num) {
    return num + 2;
    // return "hey"
}
addTwo(5); // error, return type is not defined
// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }
var getValue = function (myVal) {
    return "";
};
// const heros = ["thor", "spiderman", "ironman"];
var heros = [1, 2, 3]; // this is not a good practice
heros.map(function (hero) {
    return "hero is ".concat(hero);
    // return 2;
});
function consoleError(errmsg) {
    console.log(errmsg);
    // return 2; // void function should not return anything
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
