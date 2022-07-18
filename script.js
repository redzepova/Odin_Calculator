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

//When a number buttons is pressed, concate a string with the text values of each number button.
//ex: press 1, press 8, press ., press 9 = '18.9'

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        inputNumber = createInput(inputNumber, numberButtons[i].textContent);
        console.log(`user input ${inputNumber}`);
    });
};

//addEvents(operatorButtons);
/*
Add Events
if operatorSelected is false, it's because we just put in our first number. 
grab the operator to use later, set our running total, and swith operatorSelected to true.

After that use the operator selected last time to get the right operation, the update the new running total.
set our input number to 0, and then set the operator to what we hit last time. This means that if I hit +, and
then I hit - later, the addition is evaluated first, and then set to minus to find the next number.
*/
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        if (operatorSelected === false) {
            operator = operatorButtons[i].textContent;
            runningTotal = parseFloat(inputNumber);
            operatorSelected = true;
            inputNumber = "";
        } else {
            let temp = parseFloat(inputNumber)
            let newTotal = operate(operator, runningTotal, temp);
            runningTotal = newTotal;
            inputNumber = '';
            operator = operatorButtons[i].textContent;
        };
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


