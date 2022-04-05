// add whatever parameters you deem necessary - good luck!
function entries(obj) {
    let container = [];
    for (let key in obj) {
      // push a sub-array of [key, obj] into the parent array
      container.push([key, obj[key]]);
    }
    return container;
  }
  let obj = { a: 1, b: 2, c: 3 };
  let output=entries(obj);
  // [["a",1], ["b",2], ["c",3]]
    console.log(output)