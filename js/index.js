import { getWord } from "./word.js";

//term.ooo

//const word = getWord();
const word = 'vasa';
const wordL = word.split('');

var wordC = '';
for (let i = 0; i < word.length; i++) {
    wordC += '_';
}
update('casa'.split(''));

function update(tent) {
    var wordC = '';
    for (let i = 0; i < word.length; i++) {
        if (tent[i] == i) {
            console.log(tent);
            wordC += tent[i];
        } else {
            wordC += '_';
        }
    }
    document.getElementById('card').appendChild(document.createElement('h3')).innerHTML = wordC;
}

function check(chute) {
    const chuteL = chute.split('');
    const tent = [];

    if (word.length == chute.length) {
        for (let i = 0; i < word.length; i++) {
            if (wordL[i] == chuteL[i]) {
                tent.push(i);
            }
        }
        return tent;
    } else {
        return 0;
    }
}
