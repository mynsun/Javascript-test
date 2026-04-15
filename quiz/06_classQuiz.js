class Vehicle {
  constructor(speed) {
    this.speed = speed;
  }
  speedUp() {
    this.speed += 10;
  }
  speedDown() {
    this.speed -= 10;
  }
  info() {
    console.log(`현재 속도는 ${this.speed}입니다.`);
  }
}

const speed1 = new Vehicle(20);
console.log(speed1);
speed1.speedUp();
speed1.info();
speed1.speedDown();
speed1.info();

class Car extends Vehicle {
  constructor(speed, wheels, seats) {
    super(speed);
    if (!wheels) {
      this.wheels = 4;
    }
    this.wheels = 4;
    this.seats = seats;
  }
  drive() {
    console.log(`현재 속도는 ${this.speed}로 운행`);
  }
}

const car = new Car(100, 4, 4);
car.speedUp();
console.log(car.speed);
car.drive();

class Truck extends Car {
  constructor(speed, wheels, seats, load) {
    super(speed);
    super(wheels);
    super(seats);
    this.load = 0;
  }
  load() {
    console.log(`load`);
  }
  unLoad() {
    console.log(`unLoad`);
  }
}
