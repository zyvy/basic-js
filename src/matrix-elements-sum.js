const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  // если j-тый элемент i-той строки 0 то, для i+1 строки j-тый элемент не считаем
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++){
      if (i == 0){
        sum += matrix[i][j];
      }
      else if (matrix[i-1][j] != 0){
        sum += matrix[i][j];
      }
    }

  } 
  return sum;
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};
