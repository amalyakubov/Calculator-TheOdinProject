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

let firstNumber = [];
let operator;
let secondNumber = [];

function operate(firstNumber, operator, secondNumber) {
    if (operator === '+') {
      return add(+firstNumber.join(''), +secondNumber.join(''));
    } else if (operator === '-') {
      return subtract(+firstNumber.join(''), +secondNumber.join(''));
    } else if (operator === '*') {
      return multiply(+firstNumber.join(''),+secondNumber.join(''));
    } else if (operator === '/') {
      return divide(+firstNumber.join(''), +secondNumber.join(''));
    } else {
      return 'Unknown error';
    }
}

let display = document.querySelector('div');
let displayValue;
let buttons = document.body.getElementsByClassName('number');
let operations = document.body.getElementsByClassName('operations');

Array.from(buttons).forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        event.stopPropagation();
        if (operatorClicked === false) {
            firstNumber.push(+event.target.textContent);
        } else if (operator != 0 || operator != undefined) {
            secondNumber.push(+event.target.textContent);
        }
        displayValue = event.target.textContent;
        display.textContent = displayValue;
    })
});

let operatorClicked = false;

let calc = document.getElementById('calc');
calc.addEventListener('click', (event) => {
    event.stopPropagation();
    displayValue = operate(firstNumber, operator, secondNumber);
    display.textContent = displayValue;
})

let addition = document.getElementById('addition');
addition.addEventListener('click', (event) => {
    event.stopPropagation();
    operator = '+';
    operatorClicked = true;
})

let subtraction = document.getElementById('subtraction');
subtraction.addEventListener('click', (event) => {
    event.stopPropagation();
    operator = '-';
    operatorClicked = true;
})

let multiplication = document.getElementById('multiplication');
multiplication.addEventListener('click', (event => {
    event.stopPropagation();
    operator = '*';
    operatorClicked = true;
}))

let division = document.getElementById('division');
division.addEventListener('click', (event) => {
    event.stopPropagation();
    operator = '/';
    operatorClicked = true;
})

let clear = document.getElementById('clear');
clear.addEventListener('click', (event) => {
    event.stopPropagation();
    firstNumber = 0;
    operator = 0;
    secondNumber = 0;
    display.textContent = '';
})