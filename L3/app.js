"use strict";
// // UNION | -> pipe in typescript
function combine(num1, num2) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
const sum = combine(10, 20);
const combinedName = combine("Ravi", "Mernstack");
console.log(sum, combinedName);
const user = {
    name: "ravi",
    age: 21,
    skills: ["react", "node"]
};
function greet(user) {
    console.log(`Hi, I am ${user.name}`);
}
greet(user);
