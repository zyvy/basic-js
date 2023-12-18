const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let numStr = n.toString();
  for (let dig of numStr){
    sum += parseInt(dig);
  };
  if (sum > 9){
   // console.log('mysum', sum)
    sum = getSumOfDigits(sum);
  } else{
    return sum;
  }
  // remove line with error and write your code here
  return sum
}
//console.log(getSumOfDigits(198));
module.exports = {
  getSumOfDigits
};
