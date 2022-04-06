// add whatever parameters you deem necessary - good luck!
function repeat(str,num){
    if(num === 0) {
        return ''
      }
      let newStr = ''
      for(let i = 0; i < num; i++){
        newStr = newStr.concat(str);
      }
      return newStr;
    }

let output=repeat('divya', 3)
console.log(output)