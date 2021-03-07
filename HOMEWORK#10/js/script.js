// firstNames = ['Trajko', 'Petko', 'Mitko', 'Gjoko'];
// lastNames = ['Williams', 'Petkovski', 'Georgiev', 'Bezimenov'];
// fullNames = [];

// function FullNameFunc (firstNames, lastNames) {
//     for (let index = 0; index < firstNames.lenght; index++) {
//         fullNames.push((index + 1) + '.' + firstNames[index] + ' ' + lastNames[index]);
//     }
//     console.log(fullNames);
// }

// FullNameFunc(firstNames, lastNames);




let names = ['Petar','Hristijan', 'Dragan', 'Nikolce'];
let lastNames = ['Todorovski', 'Petrovski', 'Bozinovski', 'Ristevski'];
let fullNames = [];

function fullName () {
    for (i = 0;  i < names.length; i++) {
        fullNames.push(i+1 + "." + " " + names[i] + " " + lastNames[i]);
    }
    console.log(fullNames)
}

fullName();


