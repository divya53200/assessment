// add whatever parameters you deem necessary - good luck!
function stringFromObject(obj) {
    let finalStr = '';
    for (let key in obj) {
      finalStr += key + ' = ' + obj[key] + ', ';
    }
    return finalStr.slice(0, -2);
  }
  
  
  function stringFromObjectDeclarative(obj) {
    return Object.entries(obj)
      .map(pair => pair.join(' = '))
      .join(', ');
  }
  let output=stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"
console.log(output)
  