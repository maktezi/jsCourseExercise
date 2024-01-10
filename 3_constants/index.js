const PI = 3.14159;
let radius;
let circumference;

// WINDOW PROMPT-------------------------------
// radius = window.prompt("Enter Radius");

document.getElementById("submitRadius").onclick = function() {
    // TEXT INPUT---------------------------------
    radius = document.getElementById("inputRadius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    console.log(circumference, typeof circumference);
    document.getElementById("labelRadius").textContent = circumference + " cm";
}