let wrapDiv = document.getElementById('studentForm');
let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let age = document.getElementById('age');
let button = document.getElementById('btn');
let result = document.getElementById('result');
let printer = document.getElementById('printer');
let arr = [];

function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}


button.addEventListener('click', function(){
    printer.innerHTML = `<li>${firstName.value} ${lastName.value}</li> ${age.value} years old`;
});