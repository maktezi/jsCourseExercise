// Function = a section of reusable code.
//          Declare code once, use it whenever you want.
//          Call the function to execute code.

function add(x, y){
    let result = x + y;
    return result;
}

function subtract(x, y){
    let result = x - y;
    return result;
}

function multiply(x, y){
    let result = x * y;
    return result;
}

function divide(x, y){
    let result = x / y;
    return result;
}

function isEven(number){
    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){

    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

let answer = divide(6, 4);
console.log(answer);

let boolean = isEven(11);
console.log(boolean);

console.log(isValidEmail("mak@mail.com"));