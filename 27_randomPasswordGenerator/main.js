// RANDOM PASSWORD GENERATOR


function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "`~!@#$%^&*()_-+=<>,./?';:][{}";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    // console.log(allowedChars);

    if(length <= 0){
        return `(password length must be at least 8 characters.)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;
const generateBtn = document.getElementById("generateBtn");
const passwordGenerated = document.getElementById("passwordGenerated");
let intervalId;

const password = generatePassword(passwordLength,
                                includeLowercase,
                                includeUppercase,
                                includeNumbers,
                                includeSymbols);

// console.log(`Generated password: ${password}`);

generateBtn.onclick = function(){
    passwordGenerated.textContent = `${password}`;
    
    setTimeout(() => {
        document.location.reload();
    }, 5000);
}

function copyToClipboard() {
    var paragraph = document.getElementById("passwordGenerated");
    var textArea = document.createElement("textarea");
    textArea.value = paragraph.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert("Password copied to the clipboard!");
}


document.getElementById("generateBtn").addEventListener("click", function () {
    startTimer(5); // Start a 5-second countdown
});

function startTimer(duration) {
    var countdownTimer = document.getElementById("countdownTimer");
    var countdown = duration;

    function updateTimer() {
        countdownTimer.textContent = `Reloading in ${countdown} seconds`;
    }

    updateTimer(); // Initial display

    var timerInterval = setInterval(function () {
        countdown--;
        updateTimer();

        if (countdown <= 0) {
            clearInterval(timerInterval);
            document.location.reload();
        }
    }, 1000); // Update every 1000 milliseconds (1 second)
}