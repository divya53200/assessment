// add whatever parameters you deem necessary - good luck!
function stringLastIndexOf(str,char){
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === char) {
          return i;
        }
      }
      return -1;
    }


let output=stringLastIndexOf('awesome', 'z');
console.log(output)