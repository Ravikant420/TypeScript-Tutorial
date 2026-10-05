"use strict";
// Object, array, Tuple, Enum
// const person : {
//     firstname : string;
//     age: number;
//     skills : string[];
// } = {
//     firstname : "ravi",
//     age : 21,
//     skills: ["Reactjs", "Nodejs"],
// };
// console.log(person);
// Tuple
// const person : {
//     name : string;
//     age: number;
//     skills : string[];
//     product: [number , string] // fixed array of two types
// } = {
//     name : "Ravi",
//     age : 21,
//     skills : ["React", "Node"],
//     product : [10 , "Macbook M4"],
// }
// person.product[1] = 20; // Invalid
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
;
const person = {
    name: "ravi",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Macbook Air M2"],
    role: Role.READ_USER_ONLY
};
if (person.role === Role.AUTHOR) {
    console.log("Author");
}
else if (person.role === Role.ADMIN) {
    console.log("ADMIN");
}
else if (person.role === Role.READ_USER_ONLY) {
    console.log("read user only");
}
