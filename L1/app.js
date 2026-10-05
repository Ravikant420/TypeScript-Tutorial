"use strict";
function add(num1, num2, printResult, someText) {
    if (printResult) {
        console.log(`${someText} ${num1 + num2}`);
    }
    else {
        return num1 + num2;
    }
}
const n1 = 20;
const n2 = 200;
const printResult = true;
const someText = "Sum of two numbers is = ";
const ans = add(n1, n2, printResult, someText);
// console.log(ans);
