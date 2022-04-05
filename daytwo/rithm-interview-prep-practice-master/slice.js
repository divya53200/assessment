// add whatever parameters you deem necessary - good luck!
function slice(arr, start, end) {
    let newArr = [];
    // handle end not being passed or being too large
    if (end === undefined || end > arr.length) {
      end = arr.length;
    }
    // slice from start to end
    for (let i = start; i < end; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
let output=slice([1, 2, 3, 4, 5], 0, 2);
console.log(output)  