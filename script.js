const addition = ((a, b) => a + b);
const subtraction = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const division = ((a, b) => a/b);
let operatorSelected = false;
let firstNumber = '';
let secondNumber = '';
let result = 0;
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');

function addEvents (nodeList) {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener('click', () => {
            console.log(nodeList[i].textContent);
        });
    };
};

addEvents(numberButtons);

addEvents(operatorButtons);



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


