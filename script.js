const addition = ((a, b) => a + b);
const subtraction = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const division = ((a, b) => a/b);
let operatorSelected = false;
const numberButton = document.querySelectorAll('.number-button');

console.log(numberButton);

for(let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener('click', () => {
        console.log(numberButton[i].textContent);
    });
};


const operate = function(operator, a, b) {
    if (operator === 'add') {
        addition(a, num2);
    } else if (operator === 'minus') {
        subtraction(num1, num2);
    } else if (operator === 'times') {
        multiply(num1, num2);
    } else if (operator === 'divide') {
        division(num1, num2);
    } else {
        return 'error';
    };

console.log(number);

};


