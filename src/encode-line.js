const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length <= 1){
    return str;
  }
  let answer = [];
  let sum = 1;
  let prev = '';
  answer = '';
  let tempArr = [];
  for (let i = 0; i < str.length; i++){
  //  console.log(str.charAt(i))
    if (str.charAt(i) == prev){
  //    console.log('one', tempArr);
      tempArr.push(str.charAt(i));
    }
    else if (tempArr.length == 0) {
      prev = str.charAt(i);
      tempArr.push(str.charAt(i));
   //   console.log('two', tempArr);
    }
    else {
      if (tempArr.length > 1){
        answer = answer.concat(tempArr.length).concat(tempArr[0]);
      }
      else {
        answer = answer.concat(tempArr[0]);
      }
      tempArr = [];
      tempArr.push(str.charAt(i));
      prev = str.charAt(i);
     // console.log('three', tempArr, answer);
    }

  }
  if (tempArr.length > 1){
    answer = answer.concat(tempArr.length).concat(tempArr[0]);
  }
  else {
    answer = answer.concat(tempArr[0]);
  }
  // remove line with error and write your code here
  return answer
}

//console.log(encodeLine('xyz'));
module.exports = {
  encodeLine
};
