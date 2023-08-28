"use strict";
//QUESTION-3
// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let num2 = [34, 55, 77, 344, 25, 544, 5];
let list2 = [];
for (let i = 0; i < num2.length; i++) {
    if (num2[i] % 2 !== 0) {
        list2.push(num2[i]);
    }
}
console.log(list2, num2);
let n = [34, 532, 241, 253, 75, 2, 3, 7, 546];
let lis = [];
for (let index = 0; index < n.length; index++) {
    if (n[index] % 2 != 0) {
        lis.push(n[index]);
    }
}
console.log(lis);
