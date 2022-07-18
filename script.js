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

<<<<<<< HEAD
/*This function adds an event listener to any node list passed to it. If the class is operator, then the 
computer should toggle operatorSelected. If not, computer should create the input number as string by 
concatenating the values of numbers pressed.

Problems: if user selects another operator, it won't work I don't think. This can only take two numbers*/

function addEvents (nodeList) {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener('click', () => {
            let tempNumber = nodeList[i].textContent;
            !operatorSelected ? firstNumber = createInput(firstNumber, tempNumber) : secondNumber = createInput(secondNumber, tempNumber);
            console.log(firstNumber);
            console.log(secondNumber);
        });
=======
//When a number buttons is pressed, concate a string with the text values of each number button.
//ex: press 1, press 8, press ., press 9 = '18.9'
>>>>>>> calc-sevnums

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        inputNumber = createInput(inputNumber, numberButtons[i].textContent);
        console.log(`user input ${inputNumber}`);
    });
};

//addEvents(operatorButtons);

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        if (operatorSelected === false) {
            operator = operatorButtons[i].textContent;
            runningTotal = parseFloat(inputNumber);
            operatorSelected = true;
            console.log(`runningTotal is ${runningTotal}`);
            inputNumber = "";
        } else {
            let temp = parseFloat(inputNumber)
            let newTotal = operate(operator, runningTotal, temp);
            runningTotal = newTotal;
            inputNumber = '';
            operator = operatorButtons[i].textContent;
        };
        console.log(`user selected ${operator}`);
        console.log(`running total is ${runningTotal}`);
        if (operator === '=') {
            operatorSelected = false;
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
        return division(a,b);
    } else {
        return a;
    };
};


