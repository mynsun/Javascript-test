const list = ["슈가", "차은우", "박서준", "이도현", "제이홉", "주우재", "지민"];
const bts = ["진", "슈가", "제이홉", "RM", "지민", "뷔", "정국"];

const result = [];
for (const name of list) {
  if (bts.includes(name)) {
    result.push(name);
  }
}
console.log(result);
console.log(result.join(", "));
