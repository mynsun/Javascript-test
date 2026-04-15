let menu = 2;
switch (menu) {
case 1:
console.log('아메리카노');
break;
case 2:
console.log('카페라떼');
break;
case 3:
console.log('카푸치노');
break;
default:
console.log('없는 메뉴입니다');
}
console.log('--------------');

let browser1 = 'Chrome';
let browserName1;
switch (browser1) {
case 'Edge':
browserName1 = '엣지'; 
break;
case 'FF':
browserName1 = '파이어폭스'; 
break;
case 'Chrome':
browserName1 = '크롬'; 
break;
case 'Opera':
browserName1 = '오페라'; 
break;
case 'Safari':
browserName1 = '사파리'; 
break;
default:
browserName1 = '알려지지 않은 브라우저';
}
console.log(`브라우저명은 ${browserName1}`);
console.log('------------------');

console.log(`true is ${Boolean(true)}`);
console.log(`false is ${!!false}`);
console.log(`0 is ${Boolean(0)}`);
console.log(`-0 is ${Boolean(-0)}`);
console.log(`1 is ${Boolean(1)}`);
console.log(`-1 is ${Boolean(-1)}`);
console.log(`'' is ${Boolean('')}`);
console.log(`'0' is ${Boolean('0')}`);
console.log(`'false' is ${Boolean('false')}`);
console.log(`null is ${Boolean(null)}`);
console.log(`undefined is ${Boolean(undefined)}`);
console.log(`NaN is ${Boolean(NaN)}`);
console.log(`[] is ${Boolean([])}`);
console.log(`{} is ${Boolean({})}`);