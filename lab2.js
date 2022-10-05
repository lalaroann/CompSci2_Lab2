
// Loading the data of the csv file into the program
const fs = require('fs');
const { isNumberObject } = require('util/types');
let data = fs.readFileSync('numbers.csv');
data = String(data);
let arrayOfNumbers = data.split(',');
for(let i = 0; i < arrayOfNumbers.length; i++){
    arrayOfNumbers[i] = Number(arrayOfNumbers[i]);
}

// To print out the numbers in a table in the file loaded.
console.table(arrayOfNumbers);

// Using the findMax() to find the greatest number in the array
let maxValue = findMax(arrayOfNumbers);

// Using the findMin() to find the least number in the array
let minValue = findMin(arrayOfNumbers);

// The function will determine if the given numbers in the array is a number or not
findNaN(arrayOfNumbers);
console.log("The min value is: "+ minValue);
console.log("The max value is: "+ maxValue);

// Finding how many pairs of numbers there are between the two numbers
let numOfPairs = findAbsolute((maxValue - minValue) + 1);


// Assigning the Numbers into the array
for(let i = 0; i < numOfPairs; i++){
    arrayOfNumbers[i] = minValue + i;
}

// Finding the sum of the array
let sumOfArrays = 0;
for(let i = 0; i < numOfPairs; i++){
    sumOfArrays =  sumOfArrays + arrayOfNumbers[i];
}
console.log("\nThe sum of the array is: " + sumOfArrays);

// The mean of the array
let theMean = sumOfArrays/numOfPairs;
console.log("The mean of the array is: " + theMean);

// The Median of the array
let indexOfTheMedian = findMedianIndex(numOfPairs);
let theMedian = arrayOfNumbers[indexOfTheMedian];
console.log("The median of the array is: " + theMedian);

// The gaussian sum
let theGaussianSum = ((minValue + maxValue) * numOfPairs )/2;
console.log("The gaussian sum is: " + theGaussianSum);



// ------------Functions------------

function findMedianIndex(a){
    if (a % 2 == 0){
        return a/2;
    } else {
        return (a/2) - 0.5;
    }
}

function findMax(x){
    let theMaxValue = x[0];
    for (let i = 0; i <x.length; i++){
        if(theMaxValue<x[i]){
            theMaxValue = x[i];
        }
    }
    return theMaxValue;
}

function findMin(x){
    let theMinValue = x[0];
    for (let i = 0; i <x.length; i++){
        if(theMinValue>x[i]){
            theMinValue = x[i];
        }
    }
    return theMinValue;
}

function findAbsolute(x){
    let theAbsolute = 0;
    if(x <= 0){
        theAbsolute = x * -1;
    } else{
        theAbsolute = x;
    }
    return theAbsolute;
}

function findNaN(x){

    for(let i = 0; i < x.length; i++){
        if (isNaN(x[i])){
            console.log("There is NaN in the array!");
            maxValue = NaN;
            minValue = NaN;
            break;
        }
    }
}