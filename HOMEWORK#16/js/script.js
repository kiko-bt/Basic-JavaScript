let selector = document.getElementById('selector');
let button = document.getElementById('btn');
let printer = document.getElementById('printer');

function Animals(animal, kind, name, site) {
    this.animal = animal;
    this.kind = kind;
    this.name = name;
    this.site = site;
};

let dog = new Animals('Dog', 'Doberman', 'Rex');
let cat = new Animals('Cat', 'Persian', 'Milica');
let parrot = new Animals('Parrot', 'Nimfa', 'Koki');
let site = new Animals;

button.addEventListener('click', function(){
    if (selector.value === 'Dog') {
        printer.innerHTML = `<p> ${dog.animal} with race ${dog.kind} it's called ${dog.name}. The Doberman pinscher has a long head and a sleek, muscular body. ... <br> The Doberman pinscher has a short, sleek and shiny coat that is black, dark red, blue or fawn with rust-colored markings on the face, body and tail.<br> This dog is an average shedder and requires minimal grooming. Dobermans live about 10 to 12 years.</p>`
        let dogSpeak = prompt('What you want to say?')
        console.log(dogSpeak, 'In dog language: Hey bro how are you ?');
    } 
    else if (selector.value === 'Cat') {
        printer.innerHTML = `<p> ${cat.animal} with race ${cat.kind} it's called ${cat.name}. The dignified and docile Persian cat is known for being quiet and sweet.<br> Although Persians tend to be relaxed and easygoing, they also command an air of royalty.<br> They may not be quick to hiss or scratch, but that doesn't mean they won't become annoyed when bothered by loud children or pets.`
        let catSpeak = prompt('What you want to say?')
        console.log(catSpeak, 'In cat language: I am soo sweet :)');
    } 
    else if (selector.value === 'Parrot') {
        printer.innerHTML = `<p> ${parrot.animal} with race ${parrot.kind} it's called ${parrot.name}. Parrots have curved bills (beaks), strong legs and clawed feet.<br> Parrots are believed to be one of the most intelligent bird species.<br> Some species are known for imitating human voices. Most parrot species rely on seeds as food.`
        let parrotSpeak = prompt('What you want to say?')
        console.log(parrotSpeak, 'In parrot language: Can I speak with you?');
    } 
    else {
        (selector.value === site)
        location.href = `https://unsplash.com/`;
        alert('Here you can see thousands of pictures of pets!');
    }
});


