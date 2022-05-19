// let numbers = [1, 5, 34, 65, 3, 99, 54, 876, 456, 2, 8, 9, 4, 890, 7]

// let s = numbers.sort((a, b)=> a - b)
// console.log(s);

// let f = numbers.filter(value =>{
//     if (value%10 === 0) {
//         return value
//     }
// })

// console.log(f);

// numbers.forEach(value => console.log(value))

// let m = numbers.map(value => value*3)

// console.log(m);

// let words = ['dog', 'cat', 'pig', 'cow', 'horse', 'chiken', 'sheep', 'fish', 'lizard', 'bull'] 

// let s = words.sort((a, b) =>{
//     if (a > b) {
//         return 1
//     }
//     return -1
// })
// console.log(s);

// let f = words.filter(value => {
//     if (value.length < 4) {
//         return value
//     }
// })

// console.log(f);

// let m = words.map(value => value.concat('!'))

// console.log(m);

// let users = [ 
//     {name: 'vasya', age: 31, status: false}, 
//     {name: 'petya', age: 30, status: true}, 
//     {name: 'kolya', age: 29, status: true}, 
//     {name: 'olya', age: 28, status: false}, 
//     {name: 'max', age: 30, status: true}, 
//     {name: 'anya', age: 31, status: false}, 
//     {name: 'oleg', age: 28, status: false}, 
//     {name: 'andrey', age: 29, status: true}, 
//     {name: 'masha', age: 30, status: true}, 
//     {name: 'olya', age: 31, status: false}, 
//     {name: 'max', age: 31, status: true} ];

// let s = users.sort((a, b) => {
//     if (a.age > b.age) {
//         return 1
//     }
//     return -1
// })

// console.log(s);

// let s1 = users.sort((a, b) => {
//     if (a.name.length > b.name.length) {
//         return -1
//     }
//     return 1
// })

// console.log(s1);

// let newusers = []

// users.forEach((value, index) => {
//     value.id = index
//     newusers.push(value)
//     console.log(value);
// })

// let s = newusers.sort((a, b) => {
// if (a.id > b.id) {
//     return -1
// }
// return 1})
// console.log(s);

// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} 
// ];

// let f = cars.filter(value => {
//     if (value.producer === 'subaru' && value.power > 300 && value.engine.startsWith('ej')) {
//         return value
//     }
// })

// console.log(f);

// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
// ];

// let s = usersWithAddress.sort((a, b) => {
//     if (a.address.number > b.address.number) {
//         return 1
//     }
//     return -1
// })
// console.log(s);

// let f = usersWithAddress.filter(value => value.address.number%2 === 0)
// console.log(f);

