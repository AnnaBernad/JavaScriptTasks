// створити функцію яка виводить масив

// let arr = [1, 2, 3, 4, 5]

// function sumAll(array) {
//     console.log(array);

// }
// sumAll(arr)

// створити функцію яка приймає три числа та виводить та повертає найменьше.

// function getMinNum(a, b, c) {
//     if (a < b && a < c) {
//         return a
//     } else if (b < a && b < c){
//         return b
//     } else {
//         return c
//     }
// }

// console.log( getMinNum(4, 3, 1));

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function getMaxNum(a, b, c) {
//     if (a > b && a > c) {
//         return a
//     } else if (b > a && b > c){
//         return b
//     } else {
//         return c
//     }
// }

// console.log(getMaxNum(5, 2, 3));

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function getMinMax(...args) {
//     console.log(args);
//     console.log(Math.min(...args));
//     return Math.max(...args)

// }

// console.log(getMinMax(1, 2, 3, 7, 5));

//створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function sumArr(...args) {
//     let sum = 0
//     for (const i of args) {
//         sum += i
//     }
//     return sum
// }

// console.log(sumArr(1, 2, 3, 4, 6)); 

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function sumArr(array) {
//     let sum = 0
//     for (const i of array) {
//         sum += i
//     }
//     return sum/array.length
// }

// console.log(sumArr([1, 2, 3, 4, 5])); 

// function sum(a, b) {
//     console.log('start....');
//     return a + b
// }

// function divider(devide) {
//     return sum(2, 2)/devide
// }

// console.log(divider(2));

// Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// let getNumOfObj = array => array.length

//  Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// function calcFields(array) {
//      let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         let fields = Object.keys(array[i]).length
//         sum += fields

//     }
//     return sum
// }

// let ar = calcFields([
//         { name: 'Lucky', age: 3, color: 'dark', hair: 'long', height: 123},
//         { name: 'Anna', surname: 'Bern', age: 21, color: 'white', hair: 'middle'}, 
//         { model: 'sedan', color: 'black', motor: 5.4, name: 'elsa', move: 'full'}, 
//         { color: 'brawn', rooms: 4, style: 'modern', residents: 2, town: 'Odessa'}, 
//         { color: 'yellow', theme: 'roman', pages: '453', name: 'Olah', author: 'Melissa'}])

// console.log(ar);

//створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
 

// function calcElements(a, b) {
//     let sumarr = []
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < b.length; j++) {
//             if (i === j) {
//                 sumarr.push(a[i] + b[i])
//             }
//         }
//     }
//     return sumarr
// }

// let res = calcElements([1,2,3,4], [2,3,4,5])
// console.log(res);

//функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.

// function concat(arr1, arr2) {
//     let newarr = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i].id === arr2[j].user_id) {
//                 let newObj = Object.assign(arr1[i], arr2[j])
//                 newarr.push(newObj)
//             }
//         }   
//     }
//     return newarr
// }

// console.log(concat([
//     {id: 1, name: 'vasya', age: 31, status: false}, 
//     {id: 2, name: 'petya', age: 30, status: true}, 
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
// ], [
//     {user_id: 3, country: 'USA', city: 'Portland'}, 
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//     {user_id: 2, country: 'Poland', city: 'Krakow'}, 
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ]));

// reverse the number

// function f(number) {
//     number = number + ''
//     n = number.split('').reverse().join('')
//     return Number(n)

// }

// console.log(f(123456));

// function hello() {
//     return 'Hello'
// }

// console.log(hello());

// function hello2(name = 'Guest') {
//     return `Hello ${name}`
// }

// console.log(hello2('Anna'));

// let f = (n, m) => console.log(n + m);

// f(1, 2)

// Создайте функцию repeat(str, n), которая возвращает строку, состоящую и n повторений строки str. n — по умолчанию 2, str — пустая строка

// let f = function(str = ' ', n = 2){
//     return str.repeat(n)
// }

// console.log(f('Anna', 3));

// function avg(...args) {
//     let sum = 0
//     for (let i = 0; i < args.length; i++) {
//       sum += args[i]
//     }
//     return sum/args.length
// }

// console.log(avg(1, 2, 3, 4));

// Создайте функцию m(a,b) оболочку для mul(). m() должна принимать два аргумента а возвращать результат работы mul() с этими двумя аргументами После выполнения задания поэкспериментируйте, создайте функцию log(), которая будет принимать одно значение, а вызывать  console.log() с этим значением.


// function m(a, b) {
//     let f = () => console.log(a + b);
//     return f()
// }

// m(1, 2)
// Напишите функцию operation(m,n,o), в которой m и n — числовые переменные, а o — функциональный литерал, который берет два аргумента и выполняет математическую операцию над ними (например, функция mul() из задания 4.)

// function operation(m, n, o) {
//     if (o === '+') {
//         return m + n
//     } else if (o ==='-'){
//         return m - n
//     } else if (o === '*'){
//         return `result: ${m*n}`
//     } else {
//         console.log('no');
//     }
// }

// console.log(operation(1, 2, '+'));

//// замикання

// function addN(n) {
//     return function(m){
//         console.log(m + n);
//     }
// }
// let n = addN(3)
// n(3)

// function words(n) {
//     n = n + ''
//     if (n<=10 && n>=5){
//         console.log(`${n} товаров`);
//     } else {
//         console.log(`${n} tovara`);
//     }
// }

// words(22)

// var str = 'hello';
// str = str[0].toUpperCase() + str.substring(1)
// console.log(str);

// С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

// С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.

// С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
// let arr = []
// for (let i = 1; i < 10; i++) {
//     arr.push(i)
// }
// let str = arr.reverse().join('-');
// console.log(str);

// for (let i = 0; i < 20; i++) {
//     let i = 'x'
//     console.log(i);
    
// }
// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

// function getD(number) {
//     let arr = []
//     for (let i = 1; i < 101; i++) {
//        if (number%i === 0) {
//           arr.push(i)
//        }
//     }
//     return arr
// }

// console.log(getD(45));

// заповнення числами рандомними 

// var arr = [];
// for (var i = 0; i < 10; i++) {
// 	arr.push(Math.round(Math.random() * 10) + 1);
// }
// console.log(arr);