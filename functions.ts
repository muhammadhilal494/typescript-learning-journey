function sum(num: number){
    // num.toUpperCase() // one problem

    return num + 2
}

// sum("5"); // another problem
sum(5);

function getUpper(val){
    return val.toUpperCase()
}

// getUpper(); // give error
// getUpper(5); // give error
getUpper("hello");

function signUpUser(name: string, email: string,
     password: string, isPaid: boolean) {

}

// signUpUser(1, 2, 3, 4); // give error
signUpUser("hilal", "hilal@exmple", "12345", true); // valid 

let loginUser = (name: string, email: string,
     isPaid: boolean) => {}

// loginUser("hilal", "hilal@example"); // error

let loginUserS = (name: string, email: string,
     isPaid: boolean = true) => {}

loginUserS("hilal", "hilal@example"); // isPaid will be true by default

function addTwo(num: number): number{
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

const getValue = (myVal: number): string => {
          return ""
}

// const heros = ["thor", "spiderman", "ironman"];
const heros = [1, 2, 3]; // this is not a good practice
heros.map((hero): string => {
    return `hero is ${hero}`
     // return 2;
})


function consoleError(errmsg: string): void {
     console.log(errmsg);
     // return 2; // void function should not return anything
}

function handleError(errmsg: string): never {
     throw new Error(errmsg);
}




export {}