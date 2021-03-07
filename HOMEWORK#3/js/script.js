
let option = prompt(`Write "C" for celsius to fahrenheit or write "F" for fahrenheit to celsius: `);
let value = prompt(`Enter the value: `);

function celsiusToFahr(celsius) {
    let result = (celsius * 1.8) + 32;
    return result;
}

function fahrToCelsius(fahrenheit) {
    let result = (5/9) * (fahrenheit - 32);
    return result;
}

if (option === "C") {
    console.log(`${celsiusToFahr(value)}`);
} else if (option === "F") {
    console.log(`${fahrToCelsius(value)}`);
} else {
    console.log("ERROR");
}


// function celsiusToFahrenheit(x) {
//     result = x * 1.8 + 32;
//     console.log(result);
//     return result;
// }

// celsiusToFahrenheit(80);


// function fahrenheitToCelsius(p) {
//     result = (5 / 9) * (p - 32);
//     console.log(result);
//     return result;
// }

// fahrenheitToCelsius(400);


