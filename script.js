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

/*
function addEvents (nodeList) {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener('click', () => {
            inputNumber = createInput(tempNumber, nodeList[i].textContent)
            console.log(tempNumber);
        });
    };
};

*/
//When a number buttons is pressed, concate a string with the text values of each number button.
//ex: press 1, press 8, press ., press 9 = '18.9'

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        inputNumber = createInput(inputNumber, numberButtons[i].textContent);
        console.log(inputNumber);
    });
};

//addEvents(operatorButtons);

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        operator = operatorButtons[i].textContent;
        if (operatorSelected === false) {
            runningTotal = parseFloat(inputNumber);
            inputNumber = "";
            operatorSelected = true;
            console.log(runningTotal);
        } else {
            console.log(runningTotal)
        }
    });
};

//calculations. Do once operatorSelected is True//


//create a concatenated string each time number button is pressed//
const createInput = ((a,b) => a = a + b);

//convert the string of 'numbers' into an actual number//
const getNumber = (a => parseFloat(a));

//operator functions//
const operate = function(operator, a, b) {
    if (operator === '+') {
        addition(a, b);
    } else if (operator === '-') {
        subtraction(a, b);
    } else if (operator === 'x') {
        multiply(a, b);
    } else if (operator === '%') {
        division(a, b);
    } else {
        return 'error';
    };
};


