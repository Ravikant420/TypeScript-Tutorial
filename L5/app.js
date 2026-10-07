"use strict";
let userInput;
// let userInput : any;
let userName;
userInput = 10;
userInput = "ravi";
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
// never return type
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
const res = generateError("Internal server error", 500);
console.log(res);
