/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two-dimensional array.
 * 3. Pick 5 things from the two-dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create an array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create an array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */

let thingsInTheRoom = [
    "chair",
    "keyboard",
    "table",
    "sofa",
]

let drawers = [
    [
        "drawer1",
        "drawer2",
        "drawer3",
    ],
    [
        "drawer4",
        "drawer5",
        "drawer6",
    ],
    [
        "drawer7",
        "drawer8",
        "drawer9",
    ]
]

console.log(drawers[0][0])
console.log(drawers[1][1])
console.log(drawers[2][0])

let numbers = [];
for (let i = 0; i < 100; i++) {
numbers.push(i);
}
console.log(numbers);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

let randomNumbers = [];
for (let i = 0; i < 100; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log(randomNumbers);

let oddNumbers = [];
let evenNumbers = [];
for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] % 2 === 0) {
        evenNumbers.push(randomNumbers[i]);
    } else {
        oddNumbers.push(randomNumbers[i]);
    }
}
console.log(oddNumbers);
console.log(evenNumbers);

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log("Sum of array: " + sumArray(oddNumbers));
console.log("Sum of array: " + sumArray(evenNumbers));