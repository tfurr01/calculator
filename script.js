let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(num1, num2, op) {
    if (op === 'plus') {
        add(num1, num2);
    }
    else if (op === 'minus') {
        subtract(num1, num2);
    }
    else if (op === 'multiply') {
        multiply(num1, num2);
    }
    else {
        divide(num1, num2);
    }
}

