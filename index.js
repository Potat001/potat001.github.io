//For å kunne skrive direkte inn i kalkulatoren (seinare kanskje).
//function validateMathInput(input) {
//    input.value = input.value.replace(/[^0-9+\-*/.() ]/g, 'Math.sin Math.cos');
//}
window.onload = function() {
    document.getElementById("display").value = '';};

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function removePrevious() {
    display.value = display.value.slice(0,-1);
}

function clearDisplay() {
    display.value = "";
}
function trigonimetricFunctions() {
    if(display.value = "sin") {
        display.value = Math.sin;
    } else if(display.value = "cos") {
        display.value = Math.cos;
    }
}

function bracketOne() {
    display.value += "(";
}

function bracketTwo() {
    display.value += ")";
}
function calculate() {
    try {
    display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}