let score: number | string = 22;

score = "22"; // valid
score = 33; // valid

type User = {
    name: string,
    id: number | string,
    isActive: boolean
}
type Admin = {
    username: string,
    id: number | string,
    isActive: boolean
}

let hilal: User | Admin = {
    name: "hilal",
    id: 1,
    isActive: true
}

hilal = {
    username: "admin",
    id: "admin123",
    isActive: false
}


function getDbId(id: number | string) {
    // do something
    console.log(`DB id is: ${id}`);
}
getDbId(3); // valid
getDbId("3"); // valid


getDbId2(3); // valid
getDbId2("3"); // valid
function getDbId2(id: number | string) {
    if (typeof id === "string") {
        id = id.toLowerCase();
    }
    // do something
    console.log(`DB id is: ${id}`);
}

// array

// const data: number[] = [1, 2, 3, "4"];
const data: number[] = [1, 2, 3, 4]; // valid
const data2: string[] = ["1", "2", "3", "4"]; // valid
const data3: (string | number | boolean)[] = ["1", "2", 3, true]


let pi:3.14 = 3.14; // valid
// pi = 3.1415; // error, pi can only be 3.14


let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle"; // valid
// seatAllotment = "back"; // error, only "aisle", "middle", "window" are allowed




export {};