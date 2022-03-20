// add whatever parameters you deem necessary - good luck!
function indexOf(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return i;
      }
    }
    return -1;
  }
  let arr = [5, 10, 15, 20];
  let output=indexOf(arr, 20);
  console.log(output)  