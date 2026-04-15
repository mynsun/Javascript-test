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
  return callback(num1, num2);
}

let result = calc2(5, 4, add);
console.log(result);

result = calc2(9, 5, (num1, num2) => {
  console.log(n1 - n2);
  return num1 - num2;
});
console.log(result);

result = calc2(4, 4, (num1, num2) => num1 / num2);
console.log(result);
