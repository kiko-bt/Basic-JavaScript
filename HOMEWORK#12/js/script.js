let numbers = [2, 5, 7, 11, 17, 1];
let holder = document.getElementById('list');
let sum = 0;

    function myFunction() {
    for (i = 0; i < numbers.length; i++) {
        holder.innerHTML += "<li>"+numbers[i]+"</li>";
        sum += numbers[i]
    }
     for (i = 0; i < numbers.length; i++) {
        if (numbers.length - 1 === i) {
            document.getElementsByTagName('div')[0].innerHTML += `${numbers[i]} = ${sum}`;
            }
           
        else {
            document.getElementsByTagName('div')[0].innerHTML += `${numbers[i]} +`;
            }
        }
    }
    
myFunction();