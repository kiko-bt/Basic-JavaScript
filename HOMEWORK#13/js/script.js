let input = prompt('Write here the name of the recipe');
document.getElementById('name').innerHTML += `${input}`;
let array = [];

    let ask = prompt('How many ingredients you want?');
    let number = parseInt(ask);

    if (Number.isNaN(number)) {
        alert('Please enter a number!');
    } else {
        for(i = 0; i < number; i++) {
            let askIngredient = prompt('Write an ingredients');
            array.push(askIngredient);
        }

    }

let table = document.getElementById('push');

for (i = 0; i < array.length; i++) {
    
table.innerHTML += `<tr> 
<td>${array[i]}</td>
</tr>`
};


















