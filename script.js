const addition = ((a, b) => a + b);
const subtraction = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const division = ((a, b) => a/b);

const operate = function(operator, num1, num2) {
    if (operator === 'add') {
        addition(num1, num2);
    } else if (operator === 'minus') {
        subtraction(num1, num2);
    } else if (operator === 'times') {
        multiply(num1, num2);
    } else if (operator === 'divide') {
        division(num1, num2);
    } else {
        return 'error';
    };

};


