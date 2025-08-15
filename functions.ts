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



export {}