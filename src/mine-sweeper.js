const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = new Array(matrix.length);
  for (let i = 0; i < newMatrix.length; i++) {
    newMatrix[i] = new Array(matrix[0].length).fill(0);
  }
  const l = matrix.length - 1;
  const h = matrix[0].length - 1;

  // просто прверяем ячейки слева справа вверху внизу аккуратно расписав границы
  // углы
  if (matrix[0][0]){
    //newMatrix[0][0]+=1
    newMatrix[0][1]+=1;
    newMatrix[1][0]+=1;
    newMatrix[1][1]+=1;
  }
  if (matrix[0][h]){
   // newMatrix[0][h]+=1
    newMatrix[0][h-1]+=1;
    newMatrix[1][h]+=1;
    newMatrix[1][h-1]+=1;
  }
  if (matrix[l][0]){
    //newMatrix[l][0]+=1
    newMatrix[l-1][0]+=1;
    newMatrix[l][1]+=1;
    newMatrix[l-1][1]+=1;
  }
  if (matrix[l][h]){
    //newMatrix[l][h]+=1
    newMatrix[l][h-1]+=1;
    newMatrix[l-1][h]+=1;
    newMatrix[l-1][h-1]+=1;
  }

 // console.log('after points', newMatrix);
 
  // проход по нулевой строке
  for (let j=1; j < l; j++){
    if (matrix[0][j]){
     // console.log('first row');
      //newMatrix[0][j]+=1
      newMatrix[0][j-1] += 1;
      newMatrix[0][j+1] += 1;
      newMatrix[1][j] += 1;

      newMatrix[1][j-1] += 1;
      newMatrix[1][j+1] += 1;
    }
  }
  // проход по последней
  for (let j=1; j < l; j++){
    if (matrix[l][j]){
      //console.log('last row');
      //newMatrix[l][j]+=1
      newMatrix[l][j-1] += 1;
      newMatrix[l][j+1] += 1;
      newMatrix[l-1][j] += 1;

      newMatrix[l-1][j-1] += 1;
      newMatrix[l-1][j+1] += 1;
    }
  }
  // проход по первому столбцу
  for (let i=1; i < h; i++){
    if (matrix[i][0]){
     // console.log('first column');
     // newMatrix[i][0]+=1
      newMatrix[i-1][0] += 1;
      newMatrix[i+1][0] += 1;
      newMatrix[i][1] += 1;

      newMatrix[i-1][1] += 1;
      newMatrix[i+1][1] += 1;
    }
  }
  // проход по последнему столбцу
  for (let i=1; i < h; i++){
    if (matrix[i][l]){
    //  console.log('last column');
      //newMatrix[i][l]+=1
      newMatrix[i-1][l] += 1;
      newMatrix[i+1][l] += 1;
      newMatrix[i][l-1] += 1;

      newMatrix[i-1][l-1] += 1;
      newMatrix[i+1][l-1] += 1;
    }
  }
 // console.log('after rows', newMatrix);
//проход по остальным строкам
  for (i = 1; i < h; i++){
    for (let j = 1; j < l; j++){
      if (matrix[i][j]){
     //   console.log('got one',i,j)
        //newMatrix[i][j]+=1
    
        newMatrix[i][j-1] += 1;
        newMatrix[i][j+1] += 1;

        newMatrix[i+1][j-1] += 1;
        newMatrix[i+1][j] += 1;
        newMatrix[i+1][j+1] += 1;

        newMatrix[i-1][j-1] += 1;
        newMatrix[i-1][j] += 1;
        newMatrix[i-1][j+1] += 1;
      }
    }
  }
  return newMatrix;
  // remove line with error and write your code here
}

const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
 ];
//console.log(minesweeper(matrix));
module.exports = {
  minesweeper
};
