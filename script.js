let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const mult = document.getElementById('x');
const division = document.getElementById('/');
const clear = document.getElementById('C');
const equals = document.getElementById('=');
const display = document.getElementById('display');
let firstNumber = null;
let secondNumber = null;
let operator = '';
let result = 0;
let displayText = '';

//add onclick to each button
//first row
one.addEventListener('click', function () {
    displayText += '1';
    console.log(displayText);
    display.innerHTML = displayText;
});
two.addEventListener('click', function () {
    displayText += '2';
    console.log(displayText);
    display.innerHTML = displayText;
});
three.addEventListener('click', function () {
    displayText += '3';
    console.log(displayText);
    display.innerHTML = displayText;
});
four.addEventListener('click', function () {
    displayText += '4';
    console.log(displayText);
    display.innerHTML = displayText;
});
five.addEventListener('click', function () {
    displayText += '5';
    console.log(displayText);
    display.innerHTML = displayText;
});
six.addEventListener('click', function () {
    displayText += '6';
    console.log(displayText);
    display.innerHTML = displayText;
});
seven.addEventListener('click', function () {
    displayText += '7';
    console.log(displayText);
    display.innerHTML = displayText;
});
eight.addEventListener('click', function () {
    displayText += '8';
    console.log(displayText);
    display.innerHTML = displayText;
});
nine.addEventListener('click', function () {
    displayText += '9';
    console.log(displayText);
    display.innerHTML = displayText;
});
zero.addEventListener('click', function () {
    displayText += '0';
    console.log(displayText);
    display.innerHTML = displayText;
});
//operators
plus.addEventListener('click', function () {   
    firstNumber = Number(displayText);
    displayText += '+';
    operator = 'plus';
    console.log(firstNumber);
    display.innerHTML = displayText;
});
minus.addEventListener('click', function () {
    firstNumber = Number(displayText);
    displayText += '-';
    operator = 'minus';
    console.log(firstNumber);
    display.innerHTML = displayText;
});
mult.addEventListener('click', function () {
    firstNumber = Number(displayText);
    displayText += 'x';
    operator = 'multiply'; 
    console.log(firstNumber);
    display.innerHTML = displayText;
});
division.addEventListener('click', function () {
    firstNumber = Number(displayText);
    displayText += '/';
    operator = 'divide';
    console.log(firstNumber);
    display.innerHTML = displayText;
});
clear.addEventListener('click', function () {
    display.innerHTML = '';  
    firstNumber = null;
    secondNumber = null;
    operator = '';
    result = 0;
    displayText = '';
});
equals.addEventListener('click', function () {
    //store second number
    for (let i = 0; i < displayText.length; i ++) {
        if (displayText[i] === '+' || displayText[i] === '-' || displayText[i] === 'x' || displayText[i] === '/') {
            secondNumber = Number(displayText.slice(i+1));
        }
    }
    display.innerHTML = '';
    operate(firstNumber, secondNumber, operator);
    displayText = result.toString();
    display.innerHTML = displayText;
});


function operate(num1, num2, op) {
    if (op = 'divide' && num2 === 0) {
        result = 'Error';
    }
    else if (op === 'plus') {
        result = add(num1, num2);
    }
    else if (op === 'minus') {
        result = subtract(num1, num2);
    }
    else if (op === 'multiply') {
        result = multiply(num1, num2);
    }
    else {
        result = divide(num1, num2);
    }
}

