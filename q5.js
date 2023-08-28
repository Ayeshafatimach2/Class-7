"use strict";
//QUESTION-5
//Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let percentage = [100, 50, 44, 77, 33, 95, 62, 47];
for (let index = 0; index < percentage.length; index++) {
    if (percentage[index] < 50) {
        percentage.splice(index, 1);
    }
}
console.log(percentage);
let gradesPercentage = [93, 33, 83, 22, 50, 23, 99, 83, 49];
for (let index = 0; index < gradesPercentage.length; index++) {
    if (gradesPercentage[index] < 50) {
        gradesPercentage.splice(index, 1);
    }
}
console.log(gradesPercentage);
