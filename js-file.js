const displayMain = document.querySelector(".display");
const secondaryDisplay = document.querySelector(".secondaryDisplay");
const numbers = document.querySelectorAll('.number');
const dot = document.getElementById('dot');
const operators = document.querySelectorAll('.operator');
const equal = document.getElementById('equals')
const clearAll = document.getElementById('clear')
const clear = document.getElementById('backspace')

displayMain.innerText = "";
let firstOperand = "";
let secondOperand = "";
let firstOperator = "";
let secondOperator = "";
let dotUsed = "";




numbers.forEach(number => {
    number.addEventListener('click', function () {
        displayMain.innerText += number.innerText;
        secondaryDisplay.innerText = "";
    })
})



dot.addEventListener('click', function () {
    useSingleDecimal();
})


operators.forEach(operator => {
    operator.addEventListener('click', function () {
        if (firstOperand === "") {
            firstOperand = displayMain.innerText;
            firstOperator = operator.innerText;
            displayMain.innerText = "";
        }
        else if (firstOperand !== "") {
            secondOperand = displayMain.innerText;
            displayMain.innerText = operate(firstOperand, firstOperator, secondOperand);
            firstOperand = displayMain.innerText;
            firstOperator = operator.innerText;
            displayMain.innerText = "";
            secondaryDisplay.innerText = firstOperand;
            console.log(firstOperand)
        }
        dot.disabled = false;
    })
})

let useSingleDecimal = function () {
    dotUsed = displayMain.innerText.includes(".");
    if (dotUsed === false) { displayMain.innerText += dot.innerText }
    if (dotUsed === true) { dot.disabled = true }
}


equal.addEventListener('click', function () {
    a = (firstOperand);
    b = (displayMain.innerText);
    result = displayMain.innerText = (operate(a, firstOperator, b))
    dot.disabled = false;

})



clearAll.addEventListener('click', function () {
    displayMain.innerText = "";
    firstOperand = "";
    secondOperand = "";
    firstOperator = "";
    secondOperator = "";
    dot.disabled = false;
})

const backspace = function () {
    let displayInput = displayMain.innerText
    return displayMain.innerText = displayInput.slice(0, -1);
}



clear.addEventListener('click', function () { backspace() })



const add = function (x, y) {
    return x + y;
};


const subtract = function (x, y) {
    return x - y;
};



const multiply = function (x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}

const operate = function (a, op, b) {
    a = Number(a);
    b = Number(b);
    if (op === "+") { return add(a, b) };
    if (op === "-") { return subtract(a, b) };
    if (op === "*") { return multiply(a, b) };
    if (op === "/" && b > 0) { return divide(a, b) };
    if (op === "/" && b === 0) { return "Can't divide by 0" }

}

