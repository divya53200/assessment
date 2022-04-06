// add whatever parameters you deem necessary - good luck!
function max(arr) {
    
    let maximum = arr[0];
    
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maximum) {
        maximum = arr[i];
      }
    }
    return maximum;
  }
  let output=max([5, 1, 4, 7, 1, 2]);
  console.log(output)
  

