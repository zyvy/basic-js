const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // check is array correct
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }

  // main algo
  newArr = new Array;
  for (let i = 0; i < arr.length; i += 1) {
    const current = arr[i];
    if (current === '--discard-next'){
      i += 1;
      continue
    }
    else if (current === '--discard-prev') {
      if (arr[i-2] === '--discard-next'){
        continue;
      }
      else {
        newArr.pop();
        continue;
      }
    }
    else if (current === '--double-next') {
      if (arr[i+1]) {
        newArr.push(arr[i+1]);
      }
      continue;
    }
    else if (current === '--double-prev') {
      if (arr[i-2] === '--discard-next') {
        continue;
      }
      if (arr[i-1]) {
        newArr.push(arr[i-1]);
      }
      continue;
    }
    newArr.push(current);
  }
  return newArr

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

//console.log(transform([1, 2, 3, '--double-next', 4, 5]));
module.exports = {
  transform
};
