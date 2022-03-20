// add whatever parameters you deem necessary - good luck!

function separate(arr) {
    var newArr = [];
    for(let val of arr){
      if(val === "cat"){
        newArr.push("cat")
      }
    }
    for(let val of arr){
      if(val === "water"){
        newArr.push("water")
      }
    }
    for(let val of arr){
      if(val === "dog"){
        newArr.push("dog")
      }
    }
    return newArr;
  }
 let output= separate(['dog','cat','water']) // ['cat','water','dog']
  console.log(output)
  
  function separate(arr){
    return []
            .concat(arr.filter(v => v === "cat"))
            .concat(arr.filter(v => v === "water"))
            .concat(arr.filter(v => v === "dog"))
  }
  