const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Array = s1.split('');
  let s2Array = s2.split('');
  let common = 0;
  for (i = 0; i < s1.length; i++){
   // console.log('look for s1', s1Array[i]);
    for (j = 0; j < s2.length; j++){
     // console.log('look for s2', s2Array[j]);
      if (s1Array[i] == s2Array[j]){
        common += 1;
        s2Array = s2Array.slice(0, j).concat(s2Array.slice(j+1));
        //console.log(s2Array)
        break;
      }
    }
  }
  return common;


  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

//console.log(getCommonCharacterCount('aabcc', 'adcaa'))

module.exports = {
  getCommonCharacterCount
};
