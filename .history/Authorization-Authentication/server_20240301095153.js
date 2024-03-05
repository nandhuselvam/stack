const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

console.log(...arr1, ...arr2);

function addNumbers(a, b) {
    return a + b;
}

// Example usage:

const sum = addNumbers(5,2);
console.log(`The sum of ${num1} and ${num2} is ${sum}`);