const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);

let array = new Array(2);
console.log(array);

array = new Array(1, 2, 3, 4, 5);
console.log(array);

console.log(numbers.length);

numbers[3] = -4;
numbers[5] = 6;
console.log(numbers.length, numbers);

numbers[8] = 7;
console.log(numbers.length, numbers);

delete numbers[1];
console.log(numbers.length, numbers);

let bts1 = ["진", "슈가", "제이홉", "RM"];
console.log(bts1);
let bts2 = new Array("지민", "뷔", "정국");
console.log(bts2);
console.log(bts1.indexOf("슈가"));
console.log(bts1.indexOf("진"));
console.log(bts2.indexOf("슈가"));
console.log(bts2.indexOf("제이홉"));

console.log(bts1.includes("RM"));
console.log(bts2.includes("지민"));
console.log(bts2.includes("RM"));
console.log("----------");

bts1.push("박보검");
console.log(bts1);
console.log(bts1.length);
bts1.unshift("이도현");
console.log(bts1);

let first = bts1.shift();
console.log(bts1);
console.log(first);
let last = bts1.pop();
console.log(last);
console.log(bts1);
console.log("----------");

const deleted = bts1.splice(1, 1);
console.log(bts1);
console.log(deleted);

bts1.splice(1, 0, "박보검", "이도현");
console.log(bts1);
console.log("----------");

let bts3 = bts1.slice(0, 2);
console.log(bts3);
console.log(bts1);

bts3 = bts1.slice(-1);
console.log(bts3);
bts3 = bts1.slice(-3);
console.log(bts3);
console.log("----------");

const bts = bts1.concat(bts2);
console.log(bts);

const rbts = bts.reverse();
console.log(rbts);

let members = bts.join(", ");
console.log(members);
console.log("----------");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

const numbers1 = [40, 100, 1, 5, 25, 10];
numbers1.sort();
console.log(numbers1);
console.log("----------");

numbers1.sort(function (n1, n2) {
  return n1 - n2;
});
console.log(numbers1);

numbers1.sort(function (n1, n2) {
  return n2 - n1;
});
console.log(numbers1);
console.log("----------");

const items = [
  { name: "Apple", price: 50 },
  { name: "Banana", price: 10 },
  { name: "Mango", price: 30 },
];

items.sort((a, b) => a.price - b.price);
console.log(items);

items.sort((a, b) => b.price - a.price);
console.log(items);

items.sort((a, b) => a.name.localeCompare(b.name));
console.log(items);
console.log("----------");

const bts4 = ["RM", "진", "슈가", "제이홉", "지민", "뷔", "정국"];
for (let i = 0; i < bts4.length; i++) {
  console.log(bts[i]);
}

for (let member of bts4) {
  console.log(member);
}

bts4.forEach((member, index, array) => {
  console.log(
    `전체 ${array.length}명 중에 ${index}번째 멤버 ${members}입니다.`,
  );
});
