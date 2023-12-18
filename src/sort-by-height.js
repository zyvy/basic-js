const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  sortedArr = arr.slice().sort(function(a, b) {return a - b;});
  while (Number.parseInt(sortedArr[0]) < 0){
   // console.log(sortedArr);
    sortedArr.shift();
  }
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == -1){
      continue
    }
    arr[i] = sortedArr[0];
    sortedArr.shift();
   // console.log(sortedArr);
  }
  return arr;
  // remove line with error and write your code here
}

//console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
module.exports = {
  sortByHeight
};
