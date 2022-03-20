// add whatever parameters you deem necessary - good luck!
function min(arr) {
    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < lowest) {
        lowest = arr[i];
      }
    }
    return lowest;
}
let output=min([5, 1, 4, 7, 1, 2]);
console.log(output)  