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
};

function decode(expr) {
    let stuff = "";
    let growBox = "";
    for(i=0; i<expr.length; i += 2){
        if (expr[i]==='1' && expr[i+1]==='0'){
            growBox += ".";
            if((i + 2) % 10 === 0){
                stuff += MORSE_TABLE[`${growBox}`];
                growBox = "";
            }
          
        }
        if (expr[i]==='1' && expr[i+1]==='1'){
            growBox += "-";
            if((i + 2) % 10 === 0){
                stuff += MORSE_TABLE[`${growBox}`];
                growBox = "";
            }
        }
        if (expr[i]==='*' && (i + 2) % 10 === 0){
            stuff += " ";
            growBox = "";
        }
        

    }
    return stuff;
}



module.exports = {
    decode
}