let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

/*let origKeys = Object.keys(obj);
let copyObj = function (obj, [arr] = Object.keys(obj)) {
  const tempObj = Object.create(obj);
  if (![arr]) {
   return Object.assign({}, obj, tempObj);
  } else {
    return [arr].forEach(key => tempObj[key]);
  }
}*/

function copyObj(sourceObject, keys) {
  let destinationObject = {};
  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    })
    
    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
  
}

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);

