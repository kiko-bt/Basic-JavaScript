let input = prompt('Type 1 if you want to convert dog to human years, otherwise type 2: ');
let chosen = parseInt(input);

switch (chosen) {
    case 1:
        let inputOne = prompt('Enter dog years: ');
        let dogYears = parseInt(inputOne);

        function converter() {
        let result = dogYears * 7;
        return result;
        }

        console.log(`Your dog have ${converter()} human years`);
        break;
    case 2: 
        let inputTwo = prompt('Enter your years: ');
        let humanYears = parseInt(inputTwo);
    
        function converterToHuman() {
        let result = humanYears / 7;
        return result.toFixed(1);
        }
        
        console.log(`You have ${converterToHuman()} dog years`);
        break;
    default:
        console.log('ERROR! Type numbers');
        break;
}





//Other solution


// let inputOne = prompt('Enter dog years: ');
// let dogYears = parseInt(inputOne);

// function converter() {
//     let result = dogYears * 7;
//     return result;
// }

// console.log(`Human have ${converter()} dog years`);


// let inputTwo = prompt(`Enter human years: `);
// let humanYears = parseInt(inputTwo);

// function converterToHuman() {
//     let result = humanYears / 7;
//     return result.toFixed(1);
// }

// console.log(`Dog have ${converterToHuman()} human years`);