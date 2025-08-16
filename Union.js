"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 22;
score = "22"; // valid
score = 33; // valid
var hilal = {
    name: "hilal",
    id: 1,
    isActive: true
};
hilal = {
    username: "admin",
    id: "admin123",
    isActive: false
};
function getDbId(id) {
    // do something
    console.log("DB id is: ".concat(id));
}
getDbId(3); // valid
getDbId("3"); // valid
getDbId2(3); // valid
getDbId2("3"); // valid
function getDbId2(id) {
    if (typeof id === "string") {
        id = id.toLowerCase();
    }
    // do something
    console.log("DB id is: ".concat(id));
}
// array
// const data: number[] = [1, 2, 3, "4"];
var data = [1, 2, 3, 4]; // valid
var data2 = ["1", "2", "3", "4"]; // valid
var data3 = ["1", "2", 3, true];
var pi = 3.14; // valid
// pi = 3.1415; // error, pi can only be 3.14
var seatAllotment;
seatAllotment = "aisle"; // valid
