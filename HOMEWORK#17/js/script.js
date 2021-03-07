let selector = document.getElementById('selector');
let button = document.getElementById('btn');
let div = document.getElementById('div');


function AllBooks(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
};


let wallFlower = new AllBooks('The Perks of Being a Wallflower', 'by Stephen Chbosky', false);
let theMan = new AllBooks('The Man Without Qualities', 'by Robert Musil', true);
let elephantTree = new AllBooks('The Elephant Tree', 'by Robert Musil', true);
let zombieRoom = new AllBooks('The Zombie Room', 'by R.D. Ronald', false);
let suns = new AllBooks('A Thousand Splendid Suns', 'by Khaled Hosseini', true);

button.addEventListener('click', function() {
    if (selector.value === `The Perks of Being a Wallflower`) {
        div.innerHTML = `<p>The title is: "${Wallflower.title}", author: ${Wallflower.author}</p>`
        if (Wallflower.readingStatus === true) {
            div.innerHTML += `… a wealth of great advice… clear, succinct, robust … compact and accessible…`
        } else {
            div.innerHTML += `You must read this book!`;
        }
    }
    if (selector.value === 'The Man Without Qualities') {
        div.innerHTML = `<p>The title is: "${theMan.title}", author: ${theMan.author}</p>`
        if (theMan.readingStatus === true) {
            div.innerHTML += `Your book will help me and my colleagues to smarten up a lot of what we do around giving time, skills and even money to causes hellbent on bettering our world.`
        } else {
            div.innerHTML += `if you like to have a great qualities in your life like a man, you must read this book!`;
        }
    }
    if (selector.value === 'The Elephant Tree') {
        div.innerHTML = `<p>The title is: "${elephantTree.title}, author: ${elephantTree.author}</p>`
        if (elephantTree.readingStatus === true) {
            div.innerHTML += `The biggest pleasure comes from what we read, not from on what we read.`
        } else {
            div.innerHTML += `Excellent book. You must know about that drug dealing operation!`;
        }
    }


    if (selector.value === 'The Zombie Room') {
        div.innerHTML = `<p>The title is: "${zombieRoom.title}, author: ${zombieRoom.author}</p>`
        if (zombieRoom.readingStatus === true) {
            div.innerHTML += `I was read that book two times, but I dont understand what happened with last men of prison.`
        } else {
            div.innerHTML += `If you have time, you can read it.`;
        }
    }


    if (selector.value === 'A Thousand Splendid Suns') {
        div.innerHTML = `<p>The title is: "${suns.title}, author: ${suns.author}</p>`
        if (suns.readingStatus === true) {
            div.innerHTML += 'Very good book, right?'
        } else if (suns.readingStatus === false) {
            div.innerHTML += `I always felt to be some kind of different to other people in many ways. Now I know that also others are like me.
        I suggest you read the book!`
        }
    }
});

