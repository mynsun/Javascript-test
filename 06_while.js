let age = 0;
while (age < 5) {
console.log(`${age}살입니다.`);
age += 1;
}
console.log('-----------');

age = 0;
let num = 0;
while (age < 5) {
    while (num < 10) {
        console.log(`${age}살입니다.`);
    num += 1;
    }
    num = 0;
    age += 1;
}
console.log('-----------');


num = 0;
do {
    num = num + 1;
    console.log(num);
} while (num < 10);
console.log('-----------');

for (let i = 0; i < 10; i++) {
    if (i == 2) {
        break;
    }
    console.log(`${i} was executed!`);
}
console.log('------------');

for (let i = 0; i < 10; i++) {
    if (i === 2) {
        continue;
    }
console.log(`${i} was executed!`);
}
console.log('-----------');

age = 0;
while (age < 5) {
    age += 1;
    if (age === 2) {
        continue;
    }
    console.log(`${age}살 입니다.`);
}
console.log('-----------');


age = 0;
while (age < 5) {
    age+= 1;
    if (age === 2) {
        break;
    }
    console.log(`${age}살 입니다.`);
}
console.log('-----------');