export function getWord() {
    const data = 'Casa carro cachorro gato rato objeto pessoa lugar coisa';
    const words = getWords(data);
    const word = words[Math.floor(Math.random() * words.length)];
    return word;
}

function getWords(data) {
    data = data.replace(/(\r\n|\n|\r)/gm, '');
    data = data.toLowerCase();
    data = data.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    const words = data.split(' ');
    return words;
}