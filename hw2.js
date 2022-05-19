// let strarr = ['blue', 'black', 'green', 'yellow', 'red']
// let intarr = [1, 34, 65, 23, 3]
// let vararr = [34, 'black', false, 5, true]

// console.log(strarr);
// console.log(intarr);
// console.log(vararr);

// let emarr = []

// emarr[0] = 'blue'
// emarr[1] = 23
// emarr[2] = false
// emarr[3] = 'green'
// emarr[4] = 31
// console.log(emarr);

// let colors = ['blue', 'black', 'green', 'yellow', 'red', 'purple', 'orange', 'brown', 'white', 'violet']

// for (const color of colors) {
//     console.log(color); 
// }

// let arr = ['blue', 23, 'green', 56, 'red', false, 'orange', true, false, 45]

// for (const item of arr) {
//     if (typeof item === 'boolean') {
//         console.log(item);
//     }
// }

// for (const item of arr) {
//     if (typeof item === 'number') {
//         console.log(item);
//     }
// }

// for (const item of arr) {
//     if (typeof item === 'string') {
//         console.log(item);
//     }
// }

// let arr = []

// arr[0] = 12
// arr[1] = 'blue'
// arr[2] = false
// arr[3] = 546
// arr[4] = 'black'
// arr[5] = true
// arr[6] = 'mavpa'
// arr[7] = true
// arr[8] = 34
// arr[9] = 'black'

// for (const item of arr) {
//     console.log(item);  
// }

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//     if (i%2 == 0) {
//         console.log(i);  
//     }
// }

// for (let i = 0; i <= 100; i++) {
//       if (i%2) {
//           console.log(i); 
//       }
// }

// for (let min = 0; min <= 2; min++) {
//     for (let sec = 0; sec < 60; sec++) {
//         if (min === 2 && sec > 0 ) {
//             break 
//         }
//         console.log(min, sec)
//     }  
// }

// for (let hours = 0; hours <= 2; hours++) {
//     for (let min = 0; min <= 20; min++) {
//         for (let sec = 0; sec < 60; sec++) {
//             if (min === 20 && sec > 0) {
//                 break
//             }
//             console.log(hours, min, sec); 
//         }
//     }
// }

// let arr = [ 'a', 'b', 'c'] 


// for (let i = 1; i <= 1; i++) {
//     console.log(arr.join(''));
// }

// let arr = [1, 2, 3]

// let arrcopy = arr.reverse()
// console.log(arrcopy);

// arr.push(4, 5, 6)
// console.log(arr);

// arr.unshift(4, 5, 6)
// console.log(arr);

// let arr = ['js', 'css', 'jq']

// let sh = arr.shift([0])
// console.log(sh);

// let p = arr.pop([2])
// console.log(p);

// let arr = [1, 2, 3, 4, 5]

// let ar = arr.slice(3)

// console.log(ar);

// let ar = arr.reverse().slice(3).reverse()

// console.log(ar);

// let ae = arr.splice(1, 2)

// console.log(ae);

// console.log(arr);

// let ar = arr.splice(3, 0, 'a', 'b', 'c')

// console.log(arr);

// let ar = arr.splice(1, 0, 'a', 'b')
// let a1 = arr.splice(-1, 0, 'c')
// let a2 = arr.splice(8, 0, 'e')

// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// for (const i of arr) {
//     if (i%2 === 0 ) {
//        console.log(i); 
//     }
// }

// for (const i of arr) {
//     if (i%2) {
//        console.log(i); 
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// let newarr = []

// for (const i of arr) {
//     newarr.push(i)  
// }

// console.log(newarr);

// let arr = [2,17,13,6,22,31,45,66,100,-18]

// i = 0
// while (i < arr.length) {
//     console.log(arr[i]);
//     i ++
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

// i = 0
// while (i < arr.length) {
//     if (arr[i]%2) {
//         console.log(arr[i]);
//     }
//     i ++   
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2) {
//         console.log(arr[i]);  
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2 === 0 ) 
//     {
//       console.log(i);  
//     }
// }

// i = 0 
// while (i < arr.length) {
//     if (arr[i]%2 === 0) {
//         console.log(arr[i]);
        
//     }
//     i ++
// }

// for (let i = 0; i < arr.length; i++) {
//     if (i%3) {
//         arr[i] = 'okten'
//     }
    
// }
// console.log(arr);

// let rarr = arr.reverse()

// i = 0
// while (i < rarr.length) {
//     console.log(rarr[i]);
//     i ++
    
// }

// for (let i = 0; i < rarr.length; i++) {
//     console.log(rarr[i]);
    
// }

// i = 0
// while (i < rarr.length) {
//     if (rarr[i]%2) {
//         console.log(rarr[i]);
        
//     }
//     i++
// }

// for (let i = 0; i < rarr.length; i++) {
//     if (rarr[i]%2) {
//         console.log(rarr[i]);
//     }
    
// }

// i = 0 
// while (i < rarr.length) {
//     if (rarr[i]%2 === 0 ) {
//         console.log(rarr[i]);
        
//     }
//     i ++
// }

// for (let i = 0; i < rarr.length; i++) {
//     if (rarr[i]%2 === 0) {
//         console.log(rarr[i]);
//     }
// }

// for (let i = 0; i < rarr.length; i++) {
//     if (i%3) {
//         rarr[i] = 'okten'  
//     }
//     console.log(rarr[i]);
// }

// let emptyarr = []

// for (let i = 0; i <= 100; i++) {
//     if (i%2 === 0) {
//         emptyarr.push(i)
        
//     }
    
// }
// console.log(emptyarr);

// for (let i = 0; i <= 100; i++) {
//     if (i%2) {
//         emptyarr.push(i)
        
//     }
// }
// console.log(emptyarr);

// let emptyarr = []

// for (let i = 0; i < 100; i++) {
//         emptyarr.push(i)
// }

// console.log(emptyarr);

// j = 0
// while (j < emptyarr.length) {
//     if (emptyarr[j]%2 === 0) {
//      emptyarr[j]
//     }
//     j +=3
// }

// let arr = ['blue', 23, 'green', 56, 'red', false, 'orange', true, false, 45]

// let newarr = []

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//         newarr.push(arr[i])
//     }
// }
// console.log(newarr);

// let str = 'Anna'

// let sp = str.split('')
// console.log(sp);