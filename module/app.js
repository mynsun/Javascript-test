import { add, multiply } from "./math.js";
import greet from "./greet.js";
import getUserName, { age } from "./user.js";

console.log(add(2, 3));
console.log(multiply(2, 3));

console.log(greet("로키"));

console.log(getUserName());
console.log(age);
