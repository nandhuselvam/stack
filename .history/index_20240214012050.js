// Spread Operator

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

console.log(...arr1, ...arr2);

const arr3 = [1, 2, 3, 4];
const arr4 = [5, 6, 7, 8];
resArr = [...arr3, ...arr4]


console.log(resArr);

function Cookies = () => {
	const myCookies = ["Butter", "Peanut"];
	const yourCookies = ["Milk"];

	console.log(...myCookies, ...yourCookies);
}

Cookies()


