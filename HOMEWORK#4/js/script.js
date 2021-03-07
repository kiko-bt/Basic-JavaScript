let now = new Date();
let currentYear = now.getFullYear();

function calculateAge(birthyear, currentyear){
        let result = currentyear - birthyear;
        return result;
}

console.log(calculateAge(2002, currentYear));
console.log(calculateAge(1994, currentYear));
console.log(calculateAge(1956, currentYear));