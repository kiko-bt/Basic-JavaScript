let money = 20000;
let input = prompt(`how much money you want to widraw?`);
let cashOut = parseInt(input);
let amountLeft = money - cashOut;

function ATM(money, cashOut) {
    let result = money - cashOut;
    return result;
}

  if (money < cashOut){
    console.log(`Your balance is ${money} EUR. Not enoght money!`);
} else if (cashOut < money) {
    console.log(`Succesfully cashout: ${cashOut} EUR`);
    console.log(`Your amount left is: ${amountLeft} EUR`);
} else {
    console.log(`Invalid! Please write numbers`);
}
