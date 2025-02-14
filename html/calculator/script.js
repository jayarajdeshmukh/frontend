// script.js
let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value); // Use eval to evaluate the expression
    } catch (error) {
        display.value = 'Error';
    }
}