"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Hilal",
    email: "hilal@example.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser();
// createUser({name: "hilal", isPaid: false});
// createUser({name: "hilal", isPaid: false, email: "h@e.com"}); // this is valid, but not recommended
var myUser = {
    name: "hilal",
    isPaid: false,
    email: "h@h.com",
};
createUser(myUser); // this is valid, but not recommended
function createCourse() {
    // return {}
    return { name: "reactjs", price: 399 };
}
function createUser1(user) {
    return { name: "", email: "", isActive: false };
}
createUser1({ name: "", email: "", isActive: false });
