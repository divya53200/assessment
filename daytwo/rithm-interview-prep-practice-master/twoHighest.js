// add whatever parameters you deem necessary - good luck!
function twoHighest(nums) {
    
    let highest = -Infinity;
    let secondHighest = -Infinity;
  
    for (let num of nums) {
      
      if (num > secondHighest) {
        secondHighest = num;
      }
      
      if (secondHighest >= highest) {
    
        let tmp = highest;
        highest = secondHighest;
        secondHighest = tmp;
      }
    }
  
    return [secondHighest, highest];
  }
  let output=twoHighest([1, 2, 10, 8]); // [8, 10]
  console.log(output)
  