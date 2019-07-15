let div = $('<div></div>');
$(div).appendTo('body');
$(div).addClass('div');
let ul = $('<ul></ul>');
$(ul).appendTo('body');
let li = $('<li></li>');

$('#btnSubmit').click(function() {
    event.preventDefault();
    let input = $('#input').val();
    $('<li>' + input + '</li>').appendTo(ul);
})

$(li).click(function() {
    let colorNumber = Math.floor(Math.random() * 251);
    $(li).css('color', 'rgb(colorNumber, colorNumber, colorNumber)');
})





// $('#btnSubmit').click(function() {
//     event.preventDefault()
//     let input = $('#input').val();
//     $('<h3>' + input + '</h3>').appendTo('.div');
//     $('h3').mouseover(function() {
//         console.log('Hello');
//         $('h3').css({
//             'background-color': 'blue',
//             'border-radius': '5px',
//             'border-color': 'black',
//             'padding': '0.25em'
//         });
//     })
// })





