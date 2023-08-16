
function isolateDuplicates(input) {
  if (typeof input !== 'string') {
    return 'Please enter a valid string';
  }

  let result = '';
  // let count = 0;
  let prevChar = '';
  let duplicateCount = 0;
  let bracketcount = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i].toLowerCase() === prevChar.toLowerCase()) {
      if (duplicateCount == 1){
          result += '[';
      bracketcount++
      }
      duplicateCount++;
    } else {
      if (duplicateCount > 1) {
        result += ']';
      }
        duplicateCount = 0;
      } 
      
     prevChar = input[i];
     result += prevChar;
}
for (let i = result.length - 1; i > 0; i--){
  if (result[i] == '['){
      result += ']';
      return [result, bracketcount]
  } else if(result[i] == ']'){
      return [result, bracketcount]
  }
} 
return [result, bracketcount];
}


// Example usage
//   console.log(isolateDuplicates("aaaabbcdefffffffg")); // Output: ["aa[aa]bbcdeff[fffff]g", 2]
//   console.log(isolateDuplicates("abcdefg")); // Output: ["abcdefg", 0]
//   console.log(isolateDuplicates('aallll')); 