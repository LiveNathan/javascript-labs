/**
 * In these questions you will be practicing how to use map and forEach.
 *
 * 1. Use a random number generator to generate an array of 100 values. */
let randomNumbers = Array.from({length: 100}, () => Math.floor(Math.random() * 100));

// function to calculate sum, count and average
function calculateStats(array) {
    let sum = array.reduce((acc, val) => acc + val, 0);
    let average = sum / array.length;
    return {
        sum: sum,
        count: array.length,
        average: average
    };
}

// 2. Use function on the array to output the sum, count and average.
let stats = calculateStats(randomNumbers);

// * 3. Use map to create a new array from the first one that halves all the values.
let randomNumbersHalf = randomNumbers.map(num => num / 2);

//  * 4. Use function on the new array to output the sum, count and average again.
let halfStats = calculateStats(randomNumbersHalf);

console.log(stats);
console.log(halfStats);

//  * 5. Refactor: define the sum, count and average function as a separate function and pass it to the forEach functions as a name

function sumCountAverage(array) {
    let sum = 0;
    let count = 0;
    let average = 0;
    array.forEach((element) => {
        sum += element;
        count++;
        average = sum / count;
    })
    return [sum, count, average];
}