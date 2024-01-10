// const min = 50;
// const max = 100;

// // let randomNum = Math.floor(Math.random() * max) + min;
// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

const rollBtn = document.getElementById("rollBtn");
const rollLabel1 = document.getElementById("rollLabel1");
const rollLabel2 = document.getElementById("rollLabel2");
const rollLabel3 = document.getElementById("rollLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

rollBtn.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    rollLabel1.textContent = randomNum1;
    rollLabel2.textContent = randomNum2;
    rollLabel3.textContent = randomNum3;
}