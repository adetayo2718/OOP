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

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }
//   calcAge() {
//     return 2023 - this.birthYear;
//   }
//   greet() {
//     console.log(`Hello ${this.firstName}, your age is: ${this.age}`);
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name.`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const john = new PersonCl('john obina', 1986);
// console.log(john.fullName);

// const ty = new PersonCl('tayo Adebowale', 1990);

// const account = {
//   owner: 'John',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     console.log(this.movements.slice(-1).pop());
//   },

//   set latest(newMov) {
//     this.movements.push(newMov);
//   },

//   get bal() {
//     console.log(this.movements.reduce((sum, movs) => sum + movs, 0));
//   },
// };

// account.latest = 50;
// account.latest = 30;
// account.latest = 350;
// account.bal;

//Object.create

// const PersonProto = {
//   calcAge() {
//     return 2023 - this.birthYear;
//   },

//   init(firstName, birthYear) {
//     (this.firstname = firstName), (this.birthYear = birthYear);
//   },
// };

// const john = Object.create(PersonProto);
// // console.log(john);
// // john.firstname = 'john';
// // john.birthyear = 1970;
// // john.age = john.calcAge();

// const sara = Object.create(PersonProto);
// sara.init('sarah', 1947);
// console.log(sara.calcAge());
// console.log(sara.birthYear);

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

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class CarNew {
//   constructor(car, speed) {
//     (this.car = car), (this.speed = speed);
//   }
//   speeds() {
//     return `${(this.speed += 10)} km/h`;
//   }
//   brake() {
//     return `${(this.speed -= 5)} km/h`;
//   }
//   get speedUs() {
//     console.log(`${this.speed / 1.6} mi/h`);
//   }

//   set speedUs(sped) {
//     `${sped * 1.6} km/h`;
//   }
// }

// const bmw = new CarNew('BMW', 120);
