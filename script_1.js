/* forEach, map, find, filter, some, every */

/* forEach */
function myForEach(callback, array) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

let sum = 0;
myForEach((item) => (sum += item), [1, 2, 3]);
console.log(sum);

/* map */

function myMap(callback, array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result[i] = callback(array[i], i, array);
  }
  return result;
}

console.log(myMap(item => item * 2, [2, 3, 4]));

/* find */
function myFind(callback, array){
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array)){
      return array[i];
    }
  }
}

console.log(myFind(item => item > 4, [1, 2, 3, 4, 5, 3]));

/* filter */
function myFilter(callback, array){
  let result = [];
  let resultIndex = 0;

  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array)){
      result[resultIndex] = array[i];
      resultIndex++;
    }
  }

  return result;
}

console.log(myFilter(item => item.name === 'Ashot',   
[{name: 'Mikayel', age: 19}, { name: 'Ashot', age: 13}, {name: 'Ashot', age: 15}]
));

/* some */
function mySome(callback, array){
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array)){
      return true;
    }
  }
}

console.log(mySome((item) => (item > 2), [1, 2, 2, 1, 3, 4]));
/* every */
function myEvery(callback, array){
  let result = true;

  for(let i = 0; i < array.length; i++){
    if(!callback(array[i], i, array)){
      return false;
    } 
    result = true;
  }

  return result;
}

console.log(myEvery((item) => (item > 3), [4, 5, 6, 3]));