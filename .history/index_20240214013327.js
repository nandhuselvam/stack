// Spread Operator

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

console.log(...arr1, ...arr2);

const arr3 = [1, 2, 3, 4];
const arr4 = [5, 6, 7, 8];
resArr = [...arr3, ...arr4]


console.log(resArr);

const Cookies = () => {
	const myCookies = ["Butter", "Peanut"];
	const yourCookies = ["Milk"];

	console.log(...myCookies, ...yourCookies);
}

Cookies()

function myToys () {
	const allToys = ["Car", "Bike", "Cycle"];
	const [favToys] = allToys;

console.log(favToys);
}

myToys()

function addition(...rest) {
	console.log(rest);
	const res = rest.map ((item) => {
		return item + item;
	});
	console.log(res);
	
}
addition(1, 2, 3);
