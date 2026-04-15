const str = "JavaScript";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("script"));
console.log(str.includes("Java"));
console.log(str.startsWith("java"));
console.log(str.endsWith("Script"));
console.log(str.indexOf("a"));
console.log(str.indexOf("z"));
console.log(str.slice(0, 4));
console.log(str.slice(4));
console.log(str.replace("Script", "script"));
console.log("----------");

const str1 = "a,b,c";
const arr = str1.split(",");
console.log(arr);
const str2 = "  hello   ";
console.log(str2.trim());
const str3 = "ha";
console.log(str3.repeat(3));
const str4 = "hello";
console.log(str4.charAt(1));
