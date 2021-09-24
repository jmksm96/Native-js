'use strict';

//Методы вызова функции:

//!1. Вызов функции

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }

// showThis(4, 5);
//* Со строгим режимом undefined, обычная функция = window.

//!2. Вызов функции в качестве объекта
//* Контекст у методов объекта - сам объект.

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);
//   },
// };
// obj.sum();

//!3.
//* this в конструкторах и классах - новый экземпляр объекта
//* bind создаёт новую функцию и к ней привязывает контекст

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello!`, this.name);
//   };
// }
// User.hello();

// let man = new User('Man', 25);
// function sayName(surname) {
//   console.log(this.age);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'John',
//   age: 22,
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//   console.log(this);
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(2));

const obj = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this);
    };
  },
};
