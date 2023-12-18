const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // новое число может начинаться либо с 1 либо со 2 цифры
  // если вторая цифра больше первой, то простой случай - оставляем ее
  // Если вторая цифра меньше или равна
  // то дальше сравнения текущей и следующей цифры
  // удаляем текущую если следующая больше
  // сравниваем дальше если текущая больше
  let numberArray = String(n).split('').map(Number);
  let result = [];
  // простой случай, если 2 цифра больше первой
  if (numberArray[1] > numberArray[0]){
    numberArray.splice(0,1);
    result = Number(numberArray.join(''));
    return result;
  }
  // костыль если всего 2 цифры
  if (numberArray.length === 2){
    return Math.max(numberArray[0], numberArray[1])
  }

  // сложный случай если первая больше или равна
  // сохраняем первую в результат и сравниваем дальше
 // result.push(numberArray[0]);
 // console.log('result 1', result);
  for (let i = 1; i < numberArray.length - 1; i++){
    if (numberArray[i+1] > numberArray [i]){
      numberArray.splice(i,1);
      result = result.concat(numberArray);
      //console.log('result 2', result);
      return Number(result.join(''));
    }
  }

  // remove line with error and write your code here
}

//console.log(deleteDigit(5434))

module.exports = {
  deleteDigit
};
