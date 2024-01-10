// ternary operator = a shortcut to if{} and else{} statements
//                      helps to assign a variable based on a condition
//                      condition ? codeIfTrue : codeIfFalse


// let age = 17;
// let message = age >= 18 ? "You are an adult." : "You are minor."
// console.log(message);

// let time = 14;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon!"
// console.log(greeting);

let purchaseAmount = 100;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);