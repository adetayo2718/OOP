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

// CONSTRUCTOR fUNCTION

// const Person = function (firstName, lastName, yearOfBirth) {
//   (this.firstName = firstName),
//     (this.lastName = lastName),
//     (this.yearOfBirth = yearOfBirth);
//   this.age = this.calcAge();
// };

// Person.prototype.calcAge = function () {
//   return 2023 - this.yearOfBirth;
// };

// const john = new Person('John', 'Fayose', 1993);

// john.age = john.calcAge();
// console.log(john);
// console.log(john.hasOwnProperty('age'));

// //CLASS OBJECT

// class PersonCF {
//   constructor(fullname, yearOfBirth) {
//     this.fullname = fullname;
//     this.yearOfBirth = yearOfBirth;
//     this.age = this.calcAge();
//   }

//   calcAge() {
//     return 2023 - this.yearOfBirth;
//   }
// }

// const charley = new PersonCF('Charley Wade', 1997);

// console.log(charley);
// charley.age = charley.calcAge();

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //Instance methods
//   get age() {
//     return 2023 - this.birthYear;
//   }
//   calcAge() {
//     return 2023 - this.birthYear;
//   }
//   greet() {
//     console.log(`Hello ${this.firstName}, your age is: ${this.age}`);
//   }

//   //Setters and getters
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name.`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   //Static Method
//   static hey() {
//     console.log('Hey, Hello.');
//   }
// }

// const john = new PersonCl('john obina', 1986);
// console.log(john.fullName);

// const ty = new PersonCl('tayo Adebowale', 1990);

// //OBJECT.CREATE

// const PersonOBProto = {
//   calcAge() {
//     return 2023 - this.yearOfBirth;
//   },

//   init(firstName, yearOfBirth) {
//     (this.firstName = firstName),
//       (this.yearOfBirth = yearOfBirth),
//       (this.age = this.calcAge());
//   },
// };

// const mary = Object.create(PersonOBProto);
// mary.init('Mary', 1995);
// console.log(mary);

// const Car = function (brand, color) {};
// const bm = new Car();

// class CarC {
//   constructor(brand, color) {}
// }

// const mercedes = new CarC();

// const CarObPrototype = {
//   calcSpeed() {},

//   init() {},
// };

// const audi = Object.create(CarObPrototype);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   return 2023 - this.birthYear;
// };

// const segun = new Person('segun oni', 1987);

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`i am ${this.firstName} and i study ${this.course}`);
// };

// const mike = new Student('Mike Otesile', 1999, 'Accounting');

// Student.prototype.constructor = Student;

// const Year = function (firstName, birthYear, course, year) {
//   Student.call(this, firstName, birthYear, course);
//   this.year = year;
// };

// Year.prototype = Object.create(Student.prototype);

// Year.prototype.info = function () {
//   console.log(`My name is ${this.firstName} and i am in year ${this.year}`);
// };

// const shola = new Year('Shola', 1992, 'Computer Science', 4);

// Year.prototype.constructor = Year;

// console.dir(shola.__proto__);
// console.dir(mike.__proto__);
// console.dir(segun.__proto__);

// console.log(shola.info());
// console.log(shola.introduce());
// console.log(shola.calcAge());

// class Account {
//   // 1) Public Filed (instances)
//   locale = navigator.language;
//   // 2) Private Filed
//   #movements = [];

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;

//     console.log(`Thank you for opening an account with us ${this.owner}`);
//   }
//   deposit(val) {
//     this.#movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }
//   loanApproved(val) {
//     return true;
//   }
//   loanRequest(val) {
//     if (this.loanApproved) {
//       this.deposit(val);
//       console.log(`${val} has been Approved for ${this.owner}`);
//     }
//   }
// }

// const act1 = new Account('Jonas', 'EUR', 1111);
// const act2 = new Account('Sara', 'EUR', 1111);

// act1.deposit(300);
// act1.deposit(-90);
// act1.loanRequest(1000);
// console.log(act1);

// //OOP.

// //Abstraction, Encapsulation, Inheritance,

// //constructor Fuctions, ES6 Class, ,Object.create.

// const Person = function (firstname, birthyear) {
//   this.firstname = firstname;
//   this.birthyear = birthyear;
// };

// Person.prototype.calcAge = function () {
//   return 2023 - this.birthyear;
// };

// const john = new Person('John', 1932);
// console.log(john);
// let sum = 0;

// class Person2 {
//   constructor(lastname, year) {
//     this.lastname = lastname;
//     this.year = year;
//   }

//   calcAge() {
//     return 2023 - this.year;
//   }
//   birthdays() {
//     sum++;
//     const age = this.calcAge() + sum;
//     return age;
//   }
// }

// const ty = new Person2('Adetayo', 1986);
// console.log(ty);
// const year1 = ty.birthdays();
// const year2 = ty.birthdays();
// const year3 = ty.birthdays();

// const Person3 = {
//   calcAge() {
//     2023 - this.birthyear;
//   },
//   init(name, year) {
//     (this.name = name), (this.year = year);
//   },
// };

// const bose = Object.create(Person3);
// bose.init('Abosede', 1993);
// console.dir(bose);

// document.querySelector('body').addEventListener('click', e => {
//   console.log(navigator.geolocation);
// });

// const People = function (group, year) {
//   this.group = group;
//   this.year = year;
// };

// People.prototype.years = function () {
//   console.log(this);
//   console.log(this.year);
//   return 2023 - this.year;
// };

// const groupA = new People('Adasofunjo', 1990);

// console.log(groupA.years());

// console.log(groupA);

// const page = {
//   showRoom: function (name) {
//     console.log(`Hello ${name}, You have clicked on the page body`);
//   },
// };

// document.querySelector('body').addEventListener('click', function () {
//   console.log(this);
// });

// //Prototypal Inheritance.

// const arr = [1, 3, 9, 6, 3, 9, 6, 3];
// console.log(arr);
// // console.dir(arr.__proto__);

// Array.prototype.unique = function unique() {
//   console.log(this);
//   return [...new Set(this)];
// };

// console.log(arr.__proto__);
// console.log(arr.unique());

// h1 = document.querySelectorAll('h1');
// var h1;
// console.dir(h1);

// const arr1 = Array.from(h1);
// console.log(arr1);

//Inheritance between classes.

const Person = function (firstname, birthyear) {
  this.firstname = firstname;
  this.birthyear = birthyear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthyear);
};

const john = new Person('John Ibiyomi', 1982);

console.log(john);
john.calcAge();

const Pastor = function (firstname, birthyear, church) {
  Person.call(this, firstname, birthyear);
  this.church = church;
};

Pastor.prototype = Object.create(Person.prototype);

Pastor.prototype.greet = function () {
  console.log(
    `Pastor ${this.firstname} say's hello from the ${this.church} ministries.`
  );
};

const david = new Pastor('David Oyedele', 1985, 'G.I.C');

console.dir(david);
console.dir(john);
david.greet();
david.calcAge();
console.log(david instanceof Pastor);
console.log(david instanceof Person);
console.log(david instanceof Object);

const Heads = function (firstname, birthyear, church, zone) {
  Pastor.call(this, firstname, birthyear, church);
  this.zone = zone;
};

Heads.prototype = Object.create(Pastor.prototype);

Heads.prototype.founders = function () {
  console.log(
    `${this.firstname} is a founding father of ${this.church} ministries`
  );
};

const adedayo = new Heads('Adedayo Okiki', 1985, 'G.I.C', 'Headquaters');

Heads.prototype.constructor = Heads;

console.log(adedayo);
adedayo.greet();

console.dir(adedayo.__proto__);
