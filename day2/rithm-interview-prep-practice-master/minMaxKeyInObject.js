// add whatever parameters you deem necessary - good luck!
function minMaxKeyInObject(obj) {
    let minKey = Infinity;
    let maxKey = -Infinity;
  
    for (let key in obj) {
      // convert key to number and compare
      let keyNum = +key; // this is shorthand for Number(key)
      if (keyNum < minKey) {
        minKey = keyNum;
      }
      if (keyNum > maxKey) {
        maxKey = keyNum;
      }
    }
  
    return [minKey, maxKey];
  }
  let output=minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
  // [1, 10]
  console.log(output)
    