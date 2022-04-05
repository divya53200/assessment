// add whatever parameters you deem necessary - good luck!
function removeVowels(str) {
    const vowels = 'aeiouAEIOU';
    let newStr = '';
    for(let char of str){
      if(!vowels.includes(char)) newStr += char
    }
    return newStr
  }
  let output=removeVowels("Hello!");
  console.log(output)