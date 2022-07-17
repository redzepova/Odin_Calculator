const addition = ((a, b) => a + b);
const subtraction = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const division = ((a, b) => a/b);
let operatorSelected = true;
let firstNumber = '';
let secondNumber = '';
let result = 0;
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');

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

    };
};

//add event listeners to various buttons via nodelist//
addEvents(numberButtons);

addEvents(operatorButtons);

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

console.log(number);

};


