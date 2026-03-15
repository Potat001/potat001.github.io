//To write directly into the calculator (maybe later)
//function validateMathInput(input) {
//    input.value = input.value.replace(/[^0-9+\-*/.() ]/g, 'Math.sin Math.cos');
//}
window.onload = function() {
    document.getElementById("display").value = '';

display.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        calculate();
    }
    });
};

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
let clickCount = 0;
let clickCount2 = 0;
const JSButton = document.getElementById("JSTestingButton");
const box = document.getElementById("box");
const changeBackgroundButton = document.getElementById("changeBackgroundButton");

JSButton.addEventListener("mouseover", function() {
    if(hoverCount < 60 && clickCount < 1) {
        hoverCount++;
        console.log(`Hovered over ${hoverCount} times`)
    }
    else if(hoverCount >= 60) {
        hoverCount = 60;
    }
    switch(true) {
        case (hoverCount > 0 && hoverCount <= 2 && clickCount < 1):
            JSButton.style.animation = "moveButton 2s linear infinite alternate";
            JSButton.style.backgroundColor = "FireBrick";
            JSButton.style.outline = "2px solid rgb(179, 115, 115)";
            JSButton.innerHTML = "Whoops, there it goes!";
            /**
            JSButton.style.top = "100px";
            */
            catchButtonText.innerHTML = "Catch the button!!!";
            break;
        case (hoverCount >= 3 && hoverCount <= 9 && clickCount < 1):
            JSButton.style.animation = "moveButton 2s linear infinite alternate";
            JSButton.innerHTML = `That's ${hoverCount} attempts!`;
            JSButton.style.backgroundColor = "green";
            JSButton.style.outline = "2px solid rgb(104, 133, 104)";
            catchButtonText.innerHTML = "Catch the button!!!";
            break;
        case (hoverCount >= 10 && hoverCount <= 39 && clickCount < 1):
            JSButton.style.animation = "moveButton 2s linear infinite alternate";
            JSButton.innerHTML = `That's ${hoverCount} attempts, come on!`;
            JSButton.style.backgroundColor = "DodgerBlue";
            JSButton.style.outline = "2px solid rgb(135, 195, 255)";
            catchButtonText.innerHTML = "Catch the button!!!";
            break;
        case (hoverCount >= 30 && hoverCount <= 59 && clickCount < 1):
            JSButton.style.backgroundColor = "purple";
            JSButton.style.outline = "2px solid rgb(128, 96, 128)";
            JSButton.innerHTML = `${hoverCount} attempts, you're got this!!!`
            JSButton.style.animation = "moveButton 2s linear infinite alternate";
            catchButtonText.innerHTML = "Catch the button!!!";
            break;
        case (hoverCount >= 60 && clickCount < 1):
            JSButton.innerHTML = `That's enough (${hoverCount}), here you go, click it!`
            JSButton.style.animation = "none";
            JSButton.style.background = "rgb(251, 0, 255)";
            JSButton.style.outline = "2px solid rgb(253, 144, 255)";
            hoverCount = 60;
            break;
    }
});

JSButton.addEventListener("click", function() {
    if(clickCount <= 0) {
        clickCount++;
        console.log(`Clicked ${clickCount} times`);
    }
    if((hoverCount < 60 && clickCount > 0) || (hoverCount >= 60 && clickCount >= 1)) {
        JSButton.style.animation = "none";
        JSButton.innerHTML = `You caught me after ${hoverCount} hovers over the button!`;
        JSButton.style.background = "rgb(251, 0, 255)";
        JSButton.style.outline = "2px solid rgb(253, 144, 255)";
        catchButtonText.style.marginLeft = "39%";
        catchButtonText.innerHTML = "You caught the button!!!";
        catchButton.style.marginLeft = "39%";
    }
});
changeBackgroundButton.addEventListener("click", function() {
    clickCount2++;
    console.log(`Clicked 2nd button ${clickCount2} times`)
    switch(true) {
        case(clickCount2 == 1):
            document.documentElement.style.background = "linear-gradient(to right, rgb(48, 0, 0), rgb(29, 0, 0), rgb(0, 0, 0))";
            document.querySelector("header").style.background = "linear-gradient(to right, rgb(48, 0, 0), rgb(29, 0, 0), rgb(0, 0, 0))";
            changeBackgroundButton.innerHTML = "Click me again!";
            break;
        case(clickCount2 == 2):
            document.documentElement.style.background = "linear-gradient(to right, rgb(48, 45, 0), rgb(29, 29, 0),rgb(0, 0, 0))";
            document.querySelector("header").style.background = "linear-gradient(to right, rgb(48, 45, 0), rgb(29, 29, 0),rgb(0, 0, 0))";
            changeBackgroundButton.innerHTML = "Aaaaand again!";
            break;
        case(clickCount2 == 3):
            document.documentElement.style.background = "linear-gradient(to right, rgb(8, 48, 0), rgb(2, 29, 0), rgb(0, 0, 0))";
            document.querySelector("header").style.background = "linear-gradient(to right, rgb(8, 48, 0), rgb(2, 29, 0), rgb(0, 0, 0))";
            changeBackgroundButton.innerHTML = "Again! :D";
            break;
        case(clickCount2 == 4):
            document.documentElement.style.background = "linear-gradient(to right, rgb(0, 30, 48), rgb(0, 15, 29),rgb(0, 0, 0))";
            document.querySelector("header").style.background = "linear-gradient(to right, rgb(0, 30, 48), rgb(0, 15, 29),rgb(0, 0, 0))";
            changeBackgroundButton.innerHTML = "Ooooone last time!";
            break;
        case(clickCount2 >= 5):
        document.documentElement.style.background = "linear-gradient(to right, rgb(29, 0, 48), rgb(17, 0, 29), rgb(0, 0, 0))";
        document.querySelector("header").style.background = "linear-gradient(to right, rgb(29, 0, 48), rgb(17, 0, 29), rgb(0, 0, 0))";
        changeBackgroundButton.innerHTML = "Aaaand back to normal!";
        break;
    }
});
