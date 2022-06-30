const displayMain = document.querySelector(".display");
const secondaryDisplay = document.querySelector(".secondaryDisplay");
const numbers = document.querySelectorAll('.number');
const dot = document.getElementById('dot');
const operators = document.querySelectorAll('.operator');
const equal = document.getElementById('equals')
const clearAll = document.getElementById('clearAll')
const clear = document.getElementById('backspace')

displayMain.innerText = "";
let firstOperand = "";
let secondOperand = "";
let firstOperator = "";
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
    firstOperand = result;
    firstOperand = "";
    secondOperand = "";
    

})



clearAll.addEventListener('click', function () {
    displayMain.innerText = "";
    secondaryDisplay.innerText = "";
    firstOperand = "";
    secondOperand = "";
    firstOperator = "";
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

window.addEventListener('keydown', function(event) {

    if (event.key === "0") {
        event.preventDefault();
        this.document.getElementById('zero').click();
    }
    if  (event.key === "1") {
        event.preventDefault();
        this.document.getElementById('1').click();
    }

    if  (event.key === "2") {
        event.preventDefault();
        this.document.getElementById('2').click();
    }

    if  (event.key === "3") {
        event.preventDefault();
        this.document.getElementById('3').click();
    }
    
    if  (event.key === "4") {
        event.preventDefault();
        this.document.getElementById('4').click();
    }

    if  (event.key === "5") {
        event.preventDefault();
        this.document.getElementById('5').click();
    }

    if  (event.key === "6") {
        event.preventDefault();
        this.document.getElementById('6').click();
    }

    if  (event.key === "7") {
        event.preventDefault();
        this.document.getElementById('7').click();
    }

    if  (event.key === "8") {
        event.preventDefault();
        this.document.getElementById('8').click();
    }

    if  (event.key === "9") {
        event.preventDefault();
        this.document.getElementById('9').click();
    }

    if  (event.key === "Backspace") {
        event.preventDefault();
        this.document.getElementById('backspace').click();
    }

    if  (event.key === ".") {
        event.preventDefault();
        this.document.getElementById('dot').click();
    }

    if  (event.key === "/") {
        event.preventDefault();
        this.document.getElementById('divide').click();
    }

    if  (event.key === "*") {
        event.preventDefault();
        this.document.getElementById('multiply').click();
    }

    if  (event.key === "+") {
        event.preventDefault();
        this.document.getElementById('add').click();
    }

    if  (event.key === "-") {
        event.preventDefault();
        this.document.getElementById('subtract').click();
    }

    if  (event.key === "Enter") {
        event.preventDefault();
        this.document.getElementById('equals').click();
    }
    
})


