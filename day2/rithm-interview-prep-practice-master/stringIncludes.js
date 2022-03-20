// add whatever parameters you deem necessary - good luck!
function stringIncludes(str,char){
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
          return true;
        }
      }
      return false;

}
let output = stringIncludes('divya', 'a');
console.log(output)