import { getWord } from './word.js';

const word = getWord();
const wordL = word.split('');
$('input').attr('maxlength', word.length);

var wordUnderlined = '';
for (let i = 0; wordL.length > i; i++) {
    wordUnderlined += '_ ';
}

$('#word').html(`${wordUnderlined}`);

function check(tried) {
    const triedL = tried.split('');
    let tent = '';
    for (let i = 0; i < word.length; i++) {
        if (wordL[i] == triedL[i]) {
            tent += wordL[i] + ' ';
        } else {
            tent += '_ ';
        }
    }
    return tent;
}

$('#dica').click(function () {
    const sorted = Math.floor(Math.random() * word.length);
    
    let tent = '';
    for (let i = 0; i < word.length; i++) {
        if (i == sorted) {
            tent += wordL[i] + ' ';
        } else {
            tent += '_ ';
        }
    }
});

$('form').submit(function (e) {
    e.preventDefault();

    const tried = $('form input').val();
    if (tried.length == word.length) {
        const tent = check(tried);
        $('#card').append(`<h3>${tent}</h3>`);


        if (tent.replace(/ /g, '') == word) {
            $('#card').append(`<h3>Parabéns, você acertou!</h3>`);
        }
    }
});