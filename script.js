'use strict';

// //The new function does the below.
// // 1. New {} is created
// // 2. fuction is called, this = {}
// // 3. {} linked to prototype
// // 4. fuction automtically return the {}

// const Person = function (firstName, lastNme, birthYear, age) {
//   //instance properties
//   this.firstName = firstName;
//   this.lastNme = lastNme;
//   this.birthYear = birthYear;
//   this.age = this.calcAge();
// };

// Person.prototype.calcAge = function () {
//   return 2023 - this.birthYear;
// };

// const john = new Person('John', 'Schmedtman', 1986);

// console.log(john);

// console.log(john instanceof Person);

// console.log(john.calcAge());

// john.hour = h => {
//   console.log(h);
// };

// Person.prototype.hair = 'black';

// console.log(john.hair);

// console.log(Person.__proto__);

// console.log(Array.prototype);
// console.log(Object.prototype);
// console.log(Function.prototype);

// const Person = function (firstName, lastNme, sex, birthYear) {
//   this.firstName = firstName;
//   this.lastNme = lastNme;
//   this.sex = sex;
//   this.birthYear = birthYear;
//   this.age = this.calcAge();
// };

// Person.prototype.calcAge = function () {
//   return 2023 - this.birthYear;
// };

// const ana = new Person('ana', 'Jones', 'F', 1986);
// const Player = function (playerName, type) {};

// console.log(ana);

// const body = document.querySelector('h1').innerText;

// console.dir(body);

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (carMake, carSpeed) {
//   this.carMake = carMake;
//   this.carSpeed = carSpeed;
// };

// Car.prototype.accelerate = function () {
//   return `${(this.carSpeed += 10)} km/h`;
// };
// Car.prototype.brake = function () {
//   return `${(this.carSpeed -= 5)} km/h`;
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// console.log('---- cars object ----');

// console.log(car1);
// console.log(car2);

// console.log('---- Accelerate cars ----');

// console.log(car1.accelerate());
// console.log(car1.accelerate());
// console.log(car1.accelerate());
// console.log(car2.accelerate());
// console.log(car2.accelerate());
// console.log(car2.accelerate());

// console.log('---- cars brake ----');

// console.log(car1.brake());
// console.log(car2.brake());

class PersonCl {
  constructor(firstName, birthYear, age) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.age = this.calcAge();
  }
  calcAge() {
    return 2023 - this.birthYear;
  }
  greet() {
    console.log(`Hello ${this.firstName}, your age is: ${this.calcAge()}`);
  }
}

const john = new PersonCl('John', 1986);
const shola = new PersonCl('Shola', 2000);

console.log(john, shola);

shola.calcAge();
shola.greet();
