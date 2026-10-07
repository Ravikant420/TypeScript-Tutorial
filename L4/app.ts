// Function return type

function add(num1 : number ,num2 : number) : number {
    return num1 + num2; // return 30
}


function greet (name : string) : void{
   console.log(`Hi, ${name}`) ;
}

// let combineFunction : Function;

// // combineFunction = 10; // Invalid
// // combineFunction = function() {}; // valid
// combineFunction = add; // valid
// // combineFunction = greet;
// console.log(combineFunction(1,2));


// Good Practice

let combinedFunction : (a : number, b : number) => number;

combinedFunction = add;

console.log(combinedFunction(100, 200));

// Function type & callbacks

type CB = (n: number) => void;

function addHandle(num1 : number, num2 : number, cb : CB ) {
    const result = num1 + num2;
    cb(result);
}

addHandle(10, 20, (result : number)=> {
    console.log(result);
})