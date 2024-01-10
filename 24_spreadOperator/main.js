// spread operator = ... allows an iterable such as an
//                   array or string to be expanded
//                   into separate elements
//                   (unpacks elements)

// let numbers = [1,2,3,4,5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(minimum);

// let username = "Mak Tezi";
// let letters = [...username].join("-");
// console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegies = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegies, "eggs", "milk"];
console.log(foods);