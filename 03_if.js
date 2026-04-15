const adult = 19;
let age = 15;
if (age < adult) {
console.log('당신은 미성년자네요');
}

let gender = 'male';
if (age < adult) {
if (gender === 'male') {
console.log('당신은 미성년 남성이네요');
} else {
console.log('당신은 미성년 여성이네요');
}
}
console.log('-------------------');

let isLoggedIn = true
let token = 0
if (isLoggedIn && token) {
    console.log('로그인 상태입니다');
} else if (isLoggedIn && !token) {
    console.log('토큰이 없습니다');
} else {
    console.log('로그인이 필요합니다');
}

age = 15;
let isMember = false;
if (age < 18 || isMember) {
console.log('할인 대상입니다');
} else {
console.log('할인 대상이 아닙니다');
}
console.log('--------------');

const browser = '크롬';
let browserName;

if (browser === 'Edge') {
    browserName = '엣지';
} else if (browser === 'Safari') {
    browserName = '사파리';
} else if (browser === '크롬') {
    browserName = '크롬';
} else {
    browserName = '알려지지 않은 브라우저';
}

console.log(`브라우저명은 ${browserName}`);