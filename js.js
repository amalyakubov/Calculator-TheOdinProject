function add(a, b) {
    return a + b;
} 

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber;
let operator;
let secondNumber;

function operate(firstNumber, operator, secondNumber) {
    if (operator === '+') {
        add(firstNumber, secondNumber);
    } else if (operator === '-') {
        subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        divide(firstNumber, secondNumber);
    } else {
        return 'Unknown error';
    }
}

let displayValue;
let buttons = document.body.getElementsByClassName('number');

Array.from(buttons).forEach(element => {
    addEventListener('click', (event) => {
        displayValue = event.target.textContent;
        display.textContent = displayValue;
    })
});

let display = document.querySelector('div');
