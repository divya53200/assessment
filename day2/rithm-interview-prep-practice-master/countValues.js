// add whatever parameters you deem necessary - good luck!
function countValues(arr, val) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        count++;
      }
    }
    return count;
  }
let output=countValues([4,1,4,2,3,4,4], 100) 
console.log(output)  