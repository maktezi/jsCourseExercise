// array = a variable like structure that can hold
//          more than 1 value

let fruits = ["apple", "orange", "banana", "coconut"];

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// print array in reverse
// for(let i=fruits.length - 1; i >= 0; i--){
//     console.log(fruits[i])
// }

fruits.sort().reverse();

for(let fruit of fruits){
console.log(fruit);
}