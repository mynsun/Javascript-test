function genLotto() {
  let numbers = [];

  while (numbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
}

let result = genLotto().sort((n1, n2) => n1 - n2);
console.log(result);

function genLottoWithSet() {
  let numbers = new Set();

  while (numbers.size < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    numbers.add(num);
  }
  const result = [...numbers]; // [...]은 Sort를 배열의 형태로 전환해주는 역할
  return result.sort((n1, n2) => n1 - n2);
}

console.log(genLottoWithSet());
