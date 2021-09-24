'use strict';
/*
    Создать функцию с именем getBiggest
    Функция должна возвращать самое большое число из переданных параметров
    Функция должна уметь работать с разным количеством параметров
*/

/*
    Создать функцию с именем duplicate
    Функция должна принимать массив
    Функция должна возвратить удвоенный массив
    Пример: [1,2,3] => [1,2,3,1,2,3] 
*/

/*
    Создать функцию с именем isPalindrome
    Проверить является ли строка палиндромом
    Пример палиндромов: 'доход', 'шалаш'
*/

/*
    Создайте массив с десятью случайными элементами от 0 до 100;
    Создать функцию с именем replacer, которая будет заменять все “0” на строку “zero”;
    Функция должна возвращать новый массив
    Пример: [1zero2, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1];
    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/

//1
// const getBiggest = (...args) => {
//   return Math.max(...args);
// };
// console.log(getBiggest(1000, 2, 3, 10, 6));

//2
// const array = [1, 2, 3];
// const array2 = [1, 2, 3];

// const duplicate = array => {
//   return [...array, ...array];
// };
// console.log(duplicate(array, array2));

//3
// const isPalindrome = str => {
//   let strReverse = str.split('').reverse().join('');
//   if (strReverse == str) {
//     return 'yes';
//   } else {
//     return 'no';
//   }
// };
// console.log(isPalindrome('шалаш'));

//4

let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.round(Math.random() * 100));
}

const replacer = arr => {
  let arrMapped = arr.map(i => i.toString());
  if (arrMapped.includes('0')) {
    arrMapped.replace('0', 'zero');
  }
  console.log('mapped', arrMapped);
  return arrMapped;
};
console.log(replacer(arr));
