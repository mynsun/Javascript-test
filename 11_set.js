const set = new Set([1, 2, 3, 4, 5]);
console.log(set);

console.log(set.size);

set.add(6);
console.log(set);
set.add(6);
console.log(set);

console.log(set.has(3));
console.log(set.has(7));

set.delete(6);
console.log(set);

// set.clear();
// console.log(set);

set.forEach((item) => console.log(item));

for (const value of set.values()) {
  console.log(value);
}

console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.random() * 10);
