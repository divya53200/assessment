// add whatever parameters you deem necessary - good luck!
function countNumbers(arr){
    let count = 0;
    for(let val of arr){
      let valToNumber = parseInt(val)
      let isValNaN = isNaN(valToNumber)
      if(isValNaN === false){
        count++
      }
    }
    return count;
  }
  let output=countNumbers(['a','b','3','awesome','4']);  
  console.log(output)