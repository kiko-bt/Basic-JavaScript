let myArray = [9, 90, 100, 49, 38, 5, 94];
let max = -Infinity;
let min = Infinity;

function myFunction() {
	for (let i = 0; i <= myArray.length; i++) {
		if (max < myArray[i]) {
			max = myArray[i];
		}
		if (min > myArray[i]) {
			min = myArray[i];
		}
	}
	let result = max + min;
	console.log(`maximum is: ${max}, minimum is: ${min}, result is: ${result}`);
}
myFunction();





