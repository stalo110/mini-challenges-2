
const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
  };

  Object.freeze(MORSE_CODE)
  
function morse(text) {  
  let result = "";
  let holdingArr = []; 
  

  if(typeof text == 'string' && typeof text !== 'object'){

      const wordArr = text.split('   ');

      for(const word of wordArr){
          let charArr = word.split(' '); 
          
          for (const char of charArr){
              const trimmer = char.trim();
              if(MORSE_CODE[trimmer]){
                  holdingArr.push(MORSE_CODE[char]);
              }
          }
          holdingArr.push(' ');
      }
  
     return result = holdingArr.join('').trim();
      
  } else if( text == ''){
      return '';
  }else{
      throw Error('please provide morse string');
  }
}

console.log(morse('-.. . -.-. .-   -.. . ...-'));


module.exports = morse;