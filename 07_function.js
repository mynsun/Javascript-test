function sayHello() {
    console.log('Hello');
}

sayHello();
sayHello();
sayHello();
console.log('----------');

function sayHello1(name) {
    console.log(`Hello ${name}`);
}

sayHello1('World!');
sayHello1(1);
console.log('----------');

function sayHello2(name) {
    return `Hello ${name}`;
}

let greeting = sayHello2('RM');
console.log(greeting);
console.log(sayHello2('morning'));
console.log('----------');

function add(num1, num2) {
    return num1 + num2;
}
let result = add(5, 4);
console.log(result);
console.log('----------');

function sayHello3(name) {
    console.log('함수시작');
    return;
    console.log('실행 안 됨');
}
greeting = sayHello3('RM');
console.log(greeting);
console.log('----------');

const sayHello4 = sayHello;
sayHello4();
sayHello();
console.log('----------');

function sayHello(name) {
console.log(`Hello ${name}`);
}
function sayHi(name) {
console.log(`Hi ${name}`);
}
function greet(name, callback) {
//doSomething
console.log(name);
callback(name);
}
greet('깐부', sayHi);
greet('선생님', sayHello);
console.log('----------');

function add1(n1, n2) {
    return n1 + n2;
}
console.log(add1(1, 2));

let add2 = function (n1, n2) {
    return n1 + n2;
};
console.log(add2(1, 2));

let add3 = (n1, n2) => {
    return n1 + n2;
};
console.log(add3(1, 2));