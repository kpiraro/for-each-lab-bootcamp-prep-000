// function iterativeLog(array, callback) {
//   array.forEach(callback);
// }
//
// function callbackFunc(element, index, array) {
//   console.log(`${index}: ${element}`);
// }

function iterativeLog(array) {
  array.forEach((element, index, array) => {console.log(`${index}: ${element}`)
})
}

function iterate(callback) {
  var dogs = ['Steve', 'Bruno', 'Eddie'];

  dogs.forEach(callback);

  return dogs;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
