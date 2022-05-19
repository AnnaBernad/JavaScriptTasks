// let doggo = {
//     name: 'Lucky',
//     age: 3,
//     color: 'dark',
//     hair: 'long',
//     height: 123
// }

// let person = {
//     name: 'Anna',
//     surname: 'Bern',
//     age: 21,
//     languages: ['en', 'be', 'de', 'uk'],
//     myPet: {name: 'Gosha', age: 2, color: 'white'},
//     color: 'white',
//     hair: 'middle'
// }

// let car = {
//     model: 'sedan',
//     color: 'black',
//     motor: 5.4,
//     name: 'elsa',
//     move: 'full'
// }

// let flat = {
//     color: 'brawn',
//     rooms: 4,
//     style: 'modern',
//     roomnames: ['bath', 'kitchen', 'living'],
//     city: {town: 'Lviv', stret: 'Stusa', num: 141},
//     residents: 2,
//     town: 'Odessa'
// }

// let book = {
//     color: 'yellow',
//     theme: 'roman',
//     pages: '453',
//     name: 'Olah',
//     author: 'Melissa'
// }
//  let bigarr = [
//     { name: 'Lucky', age: 3, color: 'dark', hair: 'long', height: 123},
//     { name: 'Anna', surname: 'Bern', age: 21, color: 'white', hair: 'middle'}, 
//     { model: 'sedan', color: 'black', motor: 5.4, name: 'elsa', move: 'full'}, 
//     { color: 'brawn', rooms: 4, style: 'modern', residents: 2, town: 'Odessa'}, 
//     { color: 'yellow', theme: 'roman', pages: '453', name: 'Olah', author: 'Melissa'}]

// console.log(bigarr);

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
//     {name: 'max', age: 31, status: true}
// ];

// console.log(users[7].status);
// console.log(users[10].status);
// console.log(users[9].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[3].age + ' ' + users[9].age);
// console.log(users[4].age + ' ' + users[4].name);
// console.log(users[5].age + ' ' + users[5].status);

// let doggo = {
//     breed: 'shepherd',
//     color: 'dark',
//     size: 'big',
// }

// let person = {
//     name: 'Anna',
//     surname: 'Bern',
//     languages: ['de', 'uk', 'ua'],
//     myPet: {name:'Gosha', age: 13},
//     age: 21,
// }

// let car = {
//     model: 'sedan',
//     color: 'black',
//     motor: 5.4
// }

// let flat = {
//     rooms: 4,
//     style: 'modern',
//     residents: 2,
// }

// let book = {
//     theme: 'roman',
//     pages: '453',
//     author: 'Melissa'
// }

// for (const key in doggo) {
//     if (Object.hasOwnProperty.call(doggo, key)) {
//         console.log(key);  
//     }
// }

// for (const key in person) {
//     if (Object.hasOwnProperty.call(person, key)) {
//         console.log(key);  
//     }
// }

// for (const key in car) {
//     if (Object.hasOwnProperty.call(car, key)) {
//         console.log(key);  
//     }
// }

// for (const key in flat) {
//     if (Object.hasOwnProperty.call(flat, key)) {
//         console.log(key);  
//     }
// }

// for (const key in book) {
//     if (book.hasOwnProperty(key)) {
//         console.log(key);  
//     }
// }

// console.log(Object.keys(doggo));
// console.log(Object.keys(person));
// console.log(Object.keys(car));
// console.log(Object.keys(flat));
// console.log(Object.keys(book));

// let users = [
//     {name: 'vasya', age: 31, status: false, head: {city: 'Odessa', language: 'ua'}, skills: ['a', 'b', 'c', 'd', 'e']},
//     {name: 'petya', age: 30, status: true, head: {city: 'Kyiv', language: 'uk'}, skills: ['a', 'd', 'e']},
//     {name: 'kolya', age: 29, status: true, head: {city: 'Rivne', language: 'de'}, skills: ['a']},
//     {name: 'olya', age: 28, status: false, head: {city: 'Lviv', language: 'by'}, skills: ['d', 'e']},
//     {name: 'max', age: 30, status: true, head: {city: 'Kyiv', language: 'ua'}, skills: ['a', 'b', 'c']},
//     {name: 'anya', age: 31, status: false, head: {city: 'Harkiv', language: 'eng'}, skills: ['a', 'b', 'e']},
//     {name: 'oleg', age: 28, status: false, head: {city: 'Lviv', language: 'ua'}, skills: ['c', 'd', 'e']},
//     {name: 'andrey', age: 29, status: true, head: {city: 'Rivne', language: 'uk'}, skills: ['a', 'b', 'c', 'd', 'e', 'g']},
//     {name: 'masha', age: 30, status: true, head: {city: 'Odessa', language: 'eng'}, skills: ['a', 'b', 'c', 'd']},
//     {name: 'olya', age: 31, status: false, head: {city: 'Lviv', language: 'ua'}, skills: ['b', 'c', 'd', 'e']},
//     {name: 'max', age: 31, status: true, head: {city: 'Kyiv', language: 'de'}, skills: ['a', 'b', 'c', 'e']}
// ];

// key = 0
// while (key < users.length) {
//     console.log(users[key]);
//     key++
// }

// for (let key = 0; key < users.length; key++) {
//     console.log(users[key]);
// }

// for (const key of users) {
//     console.log(key);
// }

// let json = JSON.stringify(users)
// console.log(json);

// key = 0
// while (key < users.length) {
//     console.log(JSON.stringify(users[key]));
//     key++
// }

// let news = []
// for (let key = 0; key < users.length; key++) {
//     //  console.log(users[key]);
//     for (let j = 0; j < users[key].skills.length; j++) {
//         // console.log(users[key].skills[j]);   
//         news.push(users[key].skills[j])  
          
// }
// }
// console.log(news);  

// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']}, 
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//     {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
// ];

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     for (let k = 0; k < users[i].skills.length; k++) {
//         console.log(users[i].skills[k]); 
//     } 
// }

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];


// let news = []
// for (let i = 0; i < users.length; i++) {
//     // console.log(users[i].address);
//     news.push(users[i].address)   
// }
// console.log(news);

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false}, 
//     {id: 2, name: 'petya', age: 30, status: true}, 
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
// ]

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'}, 
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//     {user_id: 2, country: 'Poland', city: 'Krakow'}, 
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ]

// let newarr = []
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if (usersWithId.id === citiesWithId.user_id) {
//             let rightobj = Object.assign(usersWithId[i], citiesWithId[i])
//             // console.log(rightobj);
//             newarr.push(rightobj)
//         }
//     }
// }
// console.log(newarr);