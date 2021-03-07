// let must = Object();
// let to = false;
// let be = 1994;
// let something = "Kiko";
// let inFuture;

// function nameFunction(writeSomething){
//     let result = typeof writeSomething;
//     return result;
// }

// console.log(nameFunction(must));
// console.log(nameFunction(to));
// console.log(nameFunction(be));
// console.log(nameFunction(something));
// console.log(nameFunction(inFuture));



//Other Solution

function nameFunction(a){
    let result = typeof a;
    console.log(result);
    return result;
}

nameFunction(null);
nameFunction(false);
nameFunction(1994);
nameFunction("Kiko");
nameFunction();
