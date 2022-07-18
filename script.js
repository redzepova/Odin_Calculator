const addition = ((a, b) => a + b);
const subtraction = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const division = ((a, b) => a/b);
let operatorSelected = false;
let operator = ""
let inputNumber = ""
let runningTotal = 0
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const outputScreen = document.getElementById('output');

const clear = function () {
    operatorSelected = false;
    inputNumber = "";
};

//When a number buttons is pressed, concate a string with the text values of each number button.
//ex: press 1, press 8, press ., press 9 = '18.9'

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        inputNumber = createInput(inputNumber, numberButtons[i].textContent);
        outputScreen.textContent = `${inputNumber}`;
    });
};

document.getElementById('button-clear').addEventListener('click', () => {
    inputNumber = inputNumber.slice(0, inputNumber.length-1);
    outputScreen.textContent = `${inputNumber}`;
});

document.getElementById('button-clear-all').addEventListener('click', () => {
    clear();
    outputScreen.textContent = ``;
});

//addEvents(operatorButtons);

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        if (operatorSelected === false) {
            operator = operatorButtons[i].textContent;
            runningTotal = parseFloat(inputNumber);
            operatorSelected = true;
            outputScreen.textContent = `${runningTotal} ${operator}`;
            inputNumber = "";
        } else {
            let temp = parseFloat(inputNumber)
            if (operator === '%' && temp === 0) {
                outputScreen.textContent = `Surprise! Can't divide by 0! Try again.`;
                clear();
            } else {
                let newTotal = operate(operator, runningTotal, temp);
                runningTotal = newTotal;
                inputNumber = '';
                operator = operatorButtons[i].textContent;
                outputScreen.textContent = `${runningTotal} ${operator}`;
            };
        };
        if (operator === '=') {
            clear();
            outputScreen.textContent = `${runningTotal}`;
        };
    });
};

//create a concatenated string each time number button is pressed//
const createInput = ((a,b) => a = a + b);

//operator functions//
const operate = function(operator, a, b) {
    if (operator === '+') {
        return addition(a, b);
    } else if (operator === '-') {
        return subtraction(a, b);
    } else if (operator === 'x') {
        return multiply(a, b);
    } else if (operator === '%') {
        return division(a, b);
    } else {
        return a;
    };
};




