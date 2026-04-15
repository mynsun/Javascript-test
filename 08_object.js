const human = {
  name: "라일랜드",
  age: 30,
};

human.age = 20;
human["name"] = "그레이스";
console.log(human.name, human["age"]);

const eridian = {
  name: "로키",
  age: 30,
  greet: function () {
    console.log(`안녕 나는 ${this.name}야!`);
  },
  goodbye() {
    console.log("goodbye");
  },
};
eridian.greet();
eridian.goodbye();

human.job = "teacher";
console.log(human.job);

human.info = function () {
  console.log(`이름은 ${this.name}이고, 직업은 ${this.job}이다.`);
};
human.info();

delete human.age;
console.log(human.age);

function Person(name, age) {
  ((this.name = name),
    (this.age = age),
    (this.greet = function () {
      console.log(`안녕 나는 ${this.name}야!`);
    }));
}

const person1 = new Person("양관식", 20);
const person2 = new Person("오애순", 20);
console.log(person1);
console.log(person2);
console.log(person1.name, person1.age);
person2.greet();

function Student(name, age) {
  ((this.name = name),
    (this.age = age),
    function greet() {
      console.log(`이름은 ${this.name}이고, 나이는 ${this.age}입니다.`);
    });
}

const student1 = new Student("양관식", 18);
const student2 = new Student("오애순", 16);

console.log(student1);
console.log(student2);
console.log(student1.age);
console.log(student2.name);

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, " + this.name);
  }
}

const person3 = new Person1("양금명", 20);
console.log(person3.age, person3.name);
person3.greet();

class Person2 {
  #idNo;
  constructor(name, age, idNo) {
    this.name = name;
    this.age = age;
    this.#idNo = idNo;
  }
  getIDNo() {
    console.log(`idNo: ${this.#idNo}`);
  }
}
const person4 = new Person2("양금명", 20, "123456");
person4.getIDNo();
