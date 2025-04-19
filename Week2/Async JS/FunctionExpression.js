function sum(a, b) {
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

// let sumResult = sum(2, 3);
// console.log(sumResult);
// let mulResult = multiply(2, 3);
// console.log(mulResult);

function operation(a, b, fun) {
    return fun(a, b);
}

console.log(operation(3, 4, multiply));

