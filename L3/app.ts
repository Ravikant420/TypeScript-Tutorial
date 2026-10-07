// // UNION | -> pipe in typescript

// function combine(num1 : number | string, num2 : number | string) {
//     let result;
//     if (typeof num1 === "number" && typeof num2 === "number"){
//         result =num1 + num2;
//     } else {
//         result = num1.toString() + num2.toString(); 
//     }
//     return result;
// }

// const sum = combine(10, 20);

// // const combinedName = combine("Ravi" , "Mernstack");

// // console.log(sum, combinedName);





// // LITERAL TYPES






// function combined(num1 : number | string, num2 : number | string, conversionType : "as-number" | "as-string") {
//     let result;
//     if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number"){
//         result =+num1 + +num2;
//     } else {
//         result = num1.toString() + num2.toString(); 
//     }
//     return result;
// }

// const sum1 = combined("10", "20", "as-number");
// const sum2 = combined(10, 50, "as-number")

// const combinedName = combined("Ravi" , "Mernstack", "as-string");

// console.log(sum1, sum2, combinedName);



// // TYPE ALIAS / CUSTOM TYPES

type Combinable = number | string;
type ConversionType = "as-number" | "as-string";

function combine(num1: Combinable, num2: Combinable) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}

const sum = combine(10, 20);

const combinedName = combine("Ravi", "Mernstack");

console.log(sum, combinedName);







// const user : {
//     name : string ;
//     age : number;
// } = {
//     name: "ravi",
//     age: 21
// }

type User = {
    name : string;
    age : number;
    skills: string[]
}



const user : User = {
    name: "ravi",
    age: 21,
    skills : ["react", "node"]
}

function greet(user: User) {
    console.log(`Hi, I am ${user.name}`);
}

greet(user);