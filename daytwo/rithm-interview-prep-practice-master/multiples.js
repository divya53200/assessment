// add whatever parameters you deem necessary - good luck!
function multiples(x, n) {
    const arr = [];
    // multiply x * i for every number from 1 up to and including n
    for (let i = 1; i <= n; i++) {
      arr.push(i * x);
    }
    return arr;
  }
  let output=multiples(3, 4) // [3, 6, 9, 12]  
  console.log(output)