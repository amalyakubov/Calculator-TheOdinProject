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
let timeDotClicked=  0;

Array.from(buttons).forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        event.stopPropagation();
        if (operatorClicked === false) {
            if (event.target.textContent === '.') {
                if (timeDotClicked === 0) {
                    firstNumber.push('.');
                    displayValue = firstNumber.join('');
                    timeDotClicked = 1;
                } 
            } else {
            firstNumber.push(+event.target.textContent);
            displayValue = firstNumber.join('');
            }
        } else if (operator != 0 || operator != undefined) {
            secondNumber.push(+event.target.textContent);
            displayValue = secondNumber.join('');
        }
        display.textContent = displayValue;
    })
});

let operatorClicked = false;

let calc = document.getElementById('calc');
calc.addEventListener('click', (event) => {
    event.stopPropagation();
    if (secondNumber[0] === 0 && operator === '/') {
        displayValue = 'ERROR: CANNOT DIVIDE BY 0';
    } else if (firstNumber.length === 0 && secondNumber.length === 0) {
        displayValue = 'Please enter the values first.';

    } 
    else {
        displayValue = operate(firstNumber, operator, secondNumber).toFixed(3);
    }
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
    firstNumber = [];
    operator = 0;
    secondNumber = [];
    timeDotClicked = 0;
    operatorClicked = false;
    display.textContent = '';
})

let remove = document.getElementById('remove');
remove.addEventListener('click', (event) => {
    if (secondNumber.length != 0) {
        secondNumber.splice(secondNumber.length - 1, 1);
        displayValue = secondNumber;
        display.textContent = secondNumber.join('');
    } else {
        firstNumber.splice(firstNumber.length - 1, 1);
        displayValue = firstNumber;
        display.textContent = displayValue.join('');
    }
})