//QUESTION-1
// Develop a program that calculates and prints the sum of the first any even numbers using a for loop.

// let sum: number = 0;
// let arrow:number[]=[];
// for (let index = 50; index <= 100; index++) {
//     if (sum % 2 === 0) {
//         sum = sum + index
// arrow.push(index)
//     }


// }
// console.log(sum,arrow);

let sum2: number = 0;
for (let index = 50; index <= 170; index++) {
    if (index % 2 === 0) {
        sum2 = sum2 + index
    }
}
console.log(sum2);

let nu: number = 0;
for (let index = 1; index <= 784; index++) {
    if (nu % 2 === 0) {
        nu = nu + index
    }

}
console.log(nu);
