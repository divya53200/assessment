// add whatever parameters you deem necessary - good luck!
function values(obj) {
    let valuesArr = [];
    for (let key in obj) {
      valuesArr.push(obj[key]);
    }
    return valuesArr;
  }
  let obj = { a: 1, b: 2, c: 3 };
  let output=values(obj); // [1,2,3]
    console.log(output)