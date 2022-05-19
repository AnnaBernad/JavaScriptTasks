/// old version 

// function Doggie(name, age, color) {
//     this.name = name
//     this.age = age
//     this.petColor = color
//     this.speak = function() {
//        console.log('my fur is ' + this.petColor); 
//     }
// }

// let dog = new Doggie('Nick', 2, 'black')

// dog.speak()
// console.log(dog.age);

// right version /////////////////////////////////////////////
 
//  class Doggie {
//      constructor(name, age, color, place ='home'){
//          this.petName = name
//          this.age = age
//          this.color = color
//          this.place = place
//          this.owner = null
//          }
//          go () {
//              console.log('I go to ' + this.place);
//      }
//  }

//  let dog = new Doggie('A', 2, 'black')
//  dog.go()


////////////////////////////////////////////////////////////////////

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// let car = {
//     model: 'Toyota',
//     designer: 'Japan',
//     year: 2020,
//     max_speed: '160km',
//     engine: 3.5,
//     drive: function(){
//         console.log(`Riding at ${this.max_speed}/hour`);
//     },
//     info: function() {
//         for (const key in car) {
//             if (typeof car[key] !== 'function') {
//                 console.log(`${key}: ${car[key]}`);
//             }
//         }
//     },
//     increaseMaxSpeed: function(newSpeed) {
//        let increaser = parseInt(this.max_speed) + newSpeed
//        console.log(increaser + 'km');
//     },
//     changeYear: function(newYear) {
//         this.year = newYear
//     },
//     addDriver: function(driver) {
//         console.log(Object.assign((car), {driver}));
//     }
// }

// console.log(car);
// car.drive()
// car.info()
// car.increaseMaxSpeed(10)
// car.changeYear(2022)
// car.addDriver({
//     name: 'Toma',
//     age: 34
// })
// console.log(car);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car (model, origin, year, maxSpeed){
//     this.model = model,
//     this.origin = origin,
//     this.year = year,
//     this.maxSpeed = maxSpeed,
//     this.drive = function() {
//         console.log(`Driving ${this.maxSpeed}`);
//     },
//     this.info = function(){
//       console.log(`model: ${this.model},
//       origin: ${this.origin},
//       year: ${this.year},
//       maxSpeed: ${this.maxSpeed}`);
//     },
//     this.increaseMaxSpeed = function(newSpeed) {
//         let inc = parseInt(this.maxSpeed) + newSpeed
//         console.log(inc + 'km/h');
//     },
//     this.changeYear = function(newYear) {
//         this.year = newYear
//     },
//     this.addDriver = function(driver) {
//         Object.assign(this, {driver})
//     }
// }

// let oneCar = new Car('Honda', 'Ukraine', 1999, '150km/h')
// oneCar.drive()
// oneCar.info()
// oneCar.increaseMaxSpeed(30)
// oneCar.changeYear(1233)
// oneCar.addDriver({name: 'Anna', age: 21})
// console.log(oneCar);

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model, origin, year, maxSpeed, engine){
//         this.model = model,
//         this.origin = origin,
//         this.year = year,
//         this.maxSpeed = maxSpeed,
//         this.engine = engine
//     }
//     drive(){
//         console.log(`Driving: ${this.maxSpeed}`);
//     }
//     info(){
//         console.log(this);
//     }
//     increaseMaxSpeed(newSpeed){
//         let speed = parseInt(this.maxSpeed) + newSpeed
//         console.log(speed + 'km/h');
//     }
//     changeYear(newValue){
//         this.year = newValue
//     }
//     addDriver(driver){
//         Object.assign(this, {driver})
//     }
// }

// let firstCar = new Car('Honda', 'Ukraine', 2010, '34km/h', 6.4)
// console.log(firstCar);
// firstCar.drive()
// firstCar.info()
// firstCar.increaseMaxSpeed(50)
// firstCar.changeYear(1999)
// firstCar.addDriver({name: 'Anna', age: 23})
// console.log(firstCar);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Popelya{
//     constructor(name, age, footSize){
//         this.name = name,
//         this.age = age,
//         this. footSize = footSize
//     }
// }

// let firstP = new Popelya('Anna', 21, 37)
// let secondP = new Popelya('Olena', 22, 40)
// let thirdP = new Popelya('Oksana', 23, 39)

// let array = [firstP, secondP, thirdP]

// class Prince{
//     constructor(name, age, shoe){
//         this.name = name,
//         this.age = age,
//         this.shoe = shoe
//     }
// }

// let prince = new Prince('Oleg', 23, 39)

// for (let i = 0; i < array.length; i++) {
//     if (array[i].footSize === prince.shoe) {
//         console.log(array[i]);
//     }
// }

// function Card(from, to){
//     this.from = from
//     this.to = to
//     this.show = function() {
//         console.log(`From ${this.from} to ${this.to}`);
//     }
// }

// let one = new Card('Anna', 'Katya')
// one.show()

// class Human{
//     constructor(name, age, height){
//         this.name = name,
//         this.age = age,
//         this.height = height
//     }
//     getinfo (){
//         console.log(this);
//     }
//     getname (){
//         console.log(this.name);
//     }
// }

// let first = new Human('Anna', 22, 168)
// let second = new Human('Olena', 23, 177)
// let third = new Human('katya', 24, 160)

// let newarr = [first, second, third]
// console.log(second.name);



// function recurs(arr, iter) {
//     if (iter >= arr.length) {
//        return; 
//     }

//     console.log(arr[iter]);

//     recurs(arr, ++iter)
// }


// recurs([1, 3, 4, 5, 2, 4, 5, 1, 6], 0)

