// /*Print odd numbers in an array*/

let arr = [1,2,3,4,5,6,7,8,9,10,11,12] 
   odds = arr.filter(n => n%2)

console.log(odds)

/* Convert all the strings to title caps in a string array*/

let str = "cricket volly ball football";

console.log(str.toUpperCase());

// /* Sum of all numbers in an array */

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((x, y) => x + y);

console.log(sum);

/* Return all the prime numbers in an array */

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);


function isPalindrome(str) {
   const reversed = str.split('').reverse().join('');
   return str === reversed;
}

function findPalindromesInArray(arr) {
   return arr.filter(item => isPalindrome(item));
}

const wordsArray = ["121", "hello", "2117997112", "civic", "world", "radar"];
const palindromes = findPalindromesInArray(wordsArray);

console.log("Palindromes in the array:", palindromes);

function findDuplicates(nums) {
   
   let duplicates = [];

   for (let num of nums) {
       if (seen[num]) {
           duplicates.push(num);
       }
   }

   return duplicates;
}

let myArray = [1, 2, 3, 4, 2, 5, 6, 3];
let result = findDuplicates(myArray);

console.log(result);
//Rotate an array by k times


function rotateArray(arr, k) {
   let n = arr.length;
   
   let rotations = k % n;

   let rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));

   return rotatedArray;
}
let originalArray = [1, 2, 3, 4, 5];
let rotations = 2;

let rotatedArray = rotateArray(originalArray, rotations);

console.log(rotatedArray);














