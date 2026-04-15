const nums = [1, 2, 3, 4, 5];

const doubled = nums.map((num) => {
  return num * 2;
});
console.log(doubled);

const evenNumbers = nums.filter((num) => {
  return num % 2 === 0;
});
console.log(evenNumbers);

const list = ["슈가", "차은우", "박서준", "이도현", "제이홉", "주우재", "지민"];
const bts = ["진", "슈가", "제이홉", "RM", "지민", "뷔", "정국"];

const result = list.filter((name) => {
  return bts.includes(name);
});
// const result = list.filter((name) => bts.includes(name)).join(', ');
console.log(result);
console.log(result.join(", "));
console.log("----------");

const sum = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);
