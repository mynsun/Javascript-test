function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}

function calc2(num1, num2, callback) {
    return callback(num1, num2)
}

let result = calc2(4, 5, add);
console.log(result);
result = calc2(4, 5, sub);
console.log(result);
result = calc2(4, 5, mul);
console.log(result);
result = calc2(4, 5, div);
console.log(result);

