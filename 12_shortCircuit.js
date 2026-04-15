console.log(true && "hello");
console.log(false && "hi");

console.log(true || "hello");
console.log(false || "hello");

let userName = "";
let displayName = userName || "Guest";

console.log(displayName);

userName = "Wizard";
displayName = userName || "Guest";

console.log(displayName);

let isLoggedIn = true;
let userProfile = { name: "Alice" };

isLoggedIn && console.log(userProfile.name);

isLoggedIn = false;
isLoggedIn && console.log(userProfile.name);
console.log("----------");

const name1 = null ?? "Guest";
console.log("name1: ", name1);

const name2 = undefined ?? "Guest";
console.log("name2: ", name2);

const name3 = "RM" ?? "Guest";
console.log("name3: ", name3);

const name4 = "" || "Guest";
console.log("name4: ", name4);

const name5 = "" ?? "Guest";
console.log("name5: ", name5);

const user = {
  name: "RM",
  age: 30,
};

const name6 = user.name;
const age6 = user.age;

const { name, age } = user;

console.log(name);
console.log(age);

const user1 = {
  name: "RM",
  age: 30,
};

const { name: userName1, age: userAge } = user1;

console.log(userName1);
console.log(userAge);

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2);

const person = { name: "RM", age: 20 };
const copy = { ...person };
console.log(copy);

const user6 = { name: "손흥민", age: 20 };
const newUser = { ...user6, age: 21 };
console.log(newUser);
console.log("-----------");

function sum(...nums) {
  console.log(nums);
}
sum(1, 2, 3, 4, 5);

function sum1(num1, num2, ...nums) {
  console.log(num1);
  console.log(num2);
  console.log(nums);
}
sum1(1, 2, 3, 4, 5);
