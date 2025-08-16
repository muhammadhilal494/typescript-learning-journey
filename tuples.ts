// const user: (string | number)[] =[1, "hilal"]

// const user: [number, string, boolean] = [1, "hilal", true]; // tuple type
let user: [number, string, boolean]
// user = ["hilal", 1, true]; // tuple type, order matters
user = [1, "hilal", true]; // tuple type

// let rgb: [number, number, number] = [255, 255, 255]; // RGB color tuple
let rgb: [number, number, number]
// rgb = [255, 255, 255, 23.5]; // this is valid, but not recommended
// rgb = [255, 255, 255]; // RGB color tuple

type User = [number, string, boolean];

const newUser: User = [1, "hilal", true]; // valid tuple

newUser[0] = 2; // valid, number
// newUser[0] = "hilal"; // error, string is not assignable to number

newUser.push("new value"); // valid, but not recommended



export {};