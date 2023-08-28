// QUESTION-2
// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

let num: number[] = [34, 55, 77, 344, 25, 544, 5];
let list: number[] = [];
for (let i: number = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {

        list.push(num[i])
    }
}
console.log(list);






let n_: number[] = [58935, 2893, 48939, 3895, 38639, 3589, 2984, 28529];
let li_: number[] = [];
for (let index = 0; index <= n_.length; index++) {
    if (n_[index] % 2 == 0) {
        li_.push(n_[index])

    }


}
console.log(li_);
