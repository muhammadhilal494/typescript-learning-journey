"use strict";
// const user: (string | number)[] =[1, "hilal"]
Object.defineProperty(exports, "__esModule", { value: true });
// const user: [number, string, boolean] = [1, "hilal", true]; // tuple type
var user;
// user = ["hilal", 1, true]; // tuple type, order matters
user = [1, "hilal", true]; // tuple type
// let rgb: [number, number, number] = [255, 255, 255]; // RGB color tuple
var rgb;
var newUser = [1, "hilal", true]; // valid tuple
newUser[0] = 2; // valid, number
// newUser[0] = "hilal"; // error, string is not assignable to number
newUser.push("new value"); // valid, but not recommended
