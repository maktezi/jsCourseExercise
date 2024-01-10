// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into an array

//                   spread = expands an array into separate elements
//                   rest = bundles separate elements into an array


// function openFridge(...foods){ // rest parameters
//     console.log(...foods);
// }

// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "fries";
// const food4 = "lumpia";
// const food5 = "ham";

// // openFridge(food1, food2, food3, food4, food5);

// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);


function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
// const total = sum(1, 2, 3, 4, 5);
// console.log(`Total is $${total}`);


function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
// const total = getAverage(75, 100, 85, 90, 50);
// console.log(total);

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Mak", "T", "Zy");
console.log(fullName);