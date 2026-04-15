function cal(num1, operate, num2) {
    let result;
    switch(operate) {
        case '+': 
        result = num1 + num2;
        break;
        case '-': 
        result = num1 - num2;
        break;
        case '*': 
        result = num1 * num2;
        break;
        case '/': 
        result = num1 / num2;
        break;
        default: 
        result = undefined;
        // console.log('계산할 수 없습니다.');

    }
    return result;
}

console.log(cal(2, '*', 6));
console.log(cal(8, '-', 4));
console.log(cal(4, '/', 4));