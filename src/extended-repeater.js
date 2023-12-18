const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  params = JSON.parse(JSON.stringify(options));
  // все в строки
  let newstr = String.toString(str);
  if (!params.addition){
    params.addition = '';
  }
  params.addition = String(params.addition);
  if (!params.separator) {
    params.separator = '+'
  }
  params.separator = String(params.separator);
  if (!params.additionSeparator) {
    params.additionSeparator = '|'
  }
  params.additionSeparator = String(params.additionSeparator);
  params.repeatTimes = Number.parseInt(params.repeatTimes);
  params.additionRepeatTimes = Number.parseInt(params.additionRepeatTimes);



 // console.log(params);
 // console.log(params.addition);

  // функция построения повторений
  function letsBuid(myString, count, delimeter){
    return myString.concat(delimeter).repeat(count-1).concat(myString)
  }

  // сооружаем addition
  let baseAddition = letsBuid(params.addition, params.additionRepeatTimes, params.additionSeparator);
  //сооружаем базовую строку
  let baseStr = letsBuid(String(str).concat(baseAddition), params.repeatTimes, params.separator);
  return baseStr;
  // remove line with error and write your code here
}
//console.log(repeater('la', { repeatTimes: 3 }));
//console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));
module.exports = {
  repeater
};
