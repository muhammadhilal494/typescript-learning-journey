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


export {};