const User = {
    name: "Hilal",
    email: "hilal@example.com",
    isActive: true
}

function createUser ({name: string, 
    isPaid: boolean,}) {
        
}

// createUser();
// createUser({name: "hilal", isPaid: false});

// createUser({name: "hilal", isPaid: false, email: "h@e.com"}); // this is valid, but not recommended

let myUser = {
    name: "hilal",
    isPaid: false,
    email: "h@h.com",
}

createUser(myUser); // this is valid, but not recommended

function createCourse(): {name: string, price: number} {
    // return {}
    return {name: "reactjs", price: 399}
}


type User = {
    name: string,
    email: string,
    isActive: boolean,
    // isActive: bool
}

function createUser1(user: User): User {
    return {name: "", email: "", isActive: false}
}

createUser1({name: "", email: "", isActive: false});    


type User1 = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number, // optional property
    // creditCardDetails: number, // required property  
}

let myUser1: User1 = {
    _id: "123",
    name: "hilal",
    email: "h@e.com",
    isActive: false
}

myUser1.email = "hilal@exapmle.com"
// myUser1._id = "456"; // error, _id is readonly  

type cardNumber = {
    cardNumber: string,
}

type cardDate = {
    cardDate: string,
}


type CardDetails = cardNumber & cardDate & {
    cvv: number
}

// type CardNumber = {
//     cardNumber: string,
//     cardDate: string,
//     cvv: number
// }


export {};