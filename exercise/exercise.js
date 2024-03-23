// const narcisstic = (value) => {
//     const arr = value.toString().split('')
//     const length = arr.length;
//     const sum = arr.reduce((a,b) => a + b ** length,0)
//     console.log(arr,length,sum)
// }

// console.log(narcisstic(153))

// let isAnagram = function(s,t){
//     return s.toLowerCase().split('').sort().join('') == t.toLowerCase().split('').sort().join('')
// }

// console.log(isAnagram("anagram", "nagaram"))

// const findEvenIndex = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let left = arr.slice(0, i).reduce((a, b) => a + b, 0)
//         let right = arr.slice(i + 1).reduce((a, b) => a + b, 0)
//         if (left === right) return i
//         console.log(left, right)
//     }
//     return -1
// }

// console.log(findEvenIndex([1,2,3,4,3,2,1]))

// const stonePick = (arr) => {
//     arr.sort();
//     let sum = 0;
//     let nope = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             sum += arr[i];
//         } else {
//             nope += arr[i];
//         }
//     }
//     return sum

// }

// console.log(stonePick([1, 2, 3, 4, 5]))
// const findEvenIndex = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         let left = arr.slice(0, i).reduce((a, b) => a + b, 0)
//         let right = arr.slice(i + 1).reduce((a, b) => a + b, 0)
//         if(left === right) return i
//         console.log("left:", left, "right:", right,"i:", i)
//     }
//     return -1
// }

// console.log(findEvenIndex([1,2,3,4,3,2,1]))


