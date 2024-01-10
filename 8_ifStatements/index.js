// IF Statements = if a condition is true, execute some code
//                  if not, do something else

let time;
let reset;

document.getElementById("myButton").onclick = function() {
    time = document.getElementById("myTime").value;

    if(time === "") {
        document.getElementById("myLabel").textContent = "Please enter time!"
    }
    else if (time <= 11) {
        document.getElementById("myLabel").textContent = "Good Morning"
    }
    else if (time <= 17) {
        document.getElementById("myLabel").textContent = "Good Afternoon"
    }
    else if (time <= 24) {
        document.getElementById("myLabel").textContent = "Good Night"
    }
    else {
        document.getElementById("myLabel").textContent = "Enter valid time!"
    }
}

resetBtn.onclick = function() {
    reset = "";
    myLabel.textContent = reset;
    myTime.value = "";
}
