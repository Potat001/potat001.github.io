//To write directly into the calculator (maybe later)
//function validateMathInput(input) {
//    input.value = input.value.replace(/[^0-9+\-*/.() ]/g, 'Math.sin Math.cos');
//}
window.onload = function() {
    document.getElementById("display").value = '';};

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function writableDisplayValidator(input) {
    input.value = input.value.replace(/[^0-9+\-?*?/?.?() ]/g, '');
}

function removePrevious() {
    display.value = display.value.slice(0,-1);
}

function clearDisplay() {
    display.value = "";
}
function trigonimetricFunctions(funcType) {
    try {
        let currentValue = parseFloat(display.value);

        let radians = currentValue * (Math.PI / 180);

        let result;
        switch(funcType) {
            case 'sin': result = Math.sin(radians);
                break;
            case 'cos': result = Math.cos(radians);
                break;
            case 'tan': result = Math.tan(radians);
                break;
            default:
                throw new Error('Unknown function');
        }
        display.value = result;
    } catch(error) {
        display.value = "Error";
    }
}

function bracketOne() {
    display.value += "(";
}

function bracketTwo() {
    display.value += ")";
}
function PI() {

    display.value += Math.PI;
}
function calculate() {
    try {
    display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}

function root() {
        let currentValue = parseFloat(display.value);

        let result = Math.sqrt(currentValue);
        display.value = result;
}

//testingWithJS

let hoverCount = 0;
const JSButton = document.getElementById("JSTestingButton");
const box = document.getElementById("box");


JSButton.addEventListener("mouseover", function() {
    hoverCount++;

    switch(true) {
        case (hoverCount === 1 || hoverCount === 2):
            JSButton.style.animation = "moveButton 5s linear infinite alternate";
            JSButton.style.backgroundColor = "FireBrick";
            JSButton.innerHTML = "Whoops, there it goes!";
            break;
        case (hoverCount >= 3 && hoverCount <= 9):
            JSButton.innerHTML = `That's ${hoverCount} attempts!`;
            JSButton.style.backgroundColor = "green";
            break;
        case (hoverCount >= 10 && hoverCount <= 39):
            JSButton.innerHTML = `That's ${hoverCount} attempts, come on!`;
            JSButton.style.backgroundColor = "DodgerBlue";
            break;
        case (hoverCount >= 40 && hoverCount <= 99):
            JSButton.style.backgroundColor = "DodgerBlue";
            JSButton.innerHTML = `${hoverCount} attempts, you're so close!`
            JSButton.style.animation = "moveButton 5s linear infinite alternate";
            JSButton.style.animation = "rainbowButton 1s infinite"
            break;
        case (hoverCount >= 100):
            JSButton.innerHTML = `That's enough (${hoverCount}), here you go, click it!`
            JSButton.style.animation = "none";
            JSButton.style.backgroundColor = "gray";
        }

    console.log(`Hovered over ${hoverCount} times`)
});

//JSButton.addEventListener('mouseout', function()  {
//    JSButton.innerHTML = "So close!";
//})
JSButton.addEventListener("click", function() {
    JSButton.style.animation = "none";
    JSButton.innerHTML = "You caught me!";
    JSButton.style.backgroundColor = "gray";
});