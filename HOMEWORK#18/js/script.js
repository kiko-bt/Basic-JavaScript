let button = $('#btn');
let header = $('h1').first();


button.on('click', function(){
    let textFromInput = $("input:text").val();
    $("h1").text('Hello' + ' ' + textFromInput);
});


