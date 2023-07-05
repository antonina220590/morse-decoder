const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let arr = [];
  for(let i = 0; i < expr.length; i += 10) {
       arr.push(expr.slice(i, i + 10))
    }

    let deleteZeros = [];

    arr.map(elem => {
      deleteZeros.push(elem.replace(/(00)/gm, ''))
    })


    let changeTens = [];
    deleteZeros.map(elem => {
      changeTens.push(elem.replace(/(10)/gm, '.'))
    })

    let changeElevens = [];
    changeTens.map(elem => {
      changeElevens.push(elem.replace(/(11)/gm, '-'))
    })



    let sentence = [];
    for(let j = 0; j < changeElevens.length; j++) {
      sentence.push(MORSE_TABLE[changeElevens[j]])
    }

    return sentence.join('')
}


module.exports = {
    decode
}