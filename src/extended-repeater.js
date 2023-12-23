const { NotImplementedError } = require("../extensions/index.js");

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
  let newstr = String.toString(str);
  let repeatTimes = String(options.repeatTimes);
  let separator = "+";
  if (String(options.separator) != "undefined") {
    separator = String(options.separator);
  }
  let addition = "";
  if (String(options.addition) != "undefined") {
    addition = String(options.addition);
  }
  let additionRepeatTimes = 1;
  if (options.additionRepeatTimes) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  let additionSeparator = "|";
  if (String(options.additionSeparator) != "undefined") {
    additionSeparator = String(options.additionSeparator);
  }

  // console.log(params);
  // console.log(params.addition);

  // функция построения повторений
  function letsBuid(myString, count, delimeter) {
    return myString
      .concat(delimeter)
      .repeat(count - 1)
      .concat(myString);
  }

  // сооружаем addition
  let baseAddition = letsBuid(addition, additionRepeatTimes, additionSeparator);
  //сооружаем базовую строку
  let baseStr = letsBuid(
    String(str).concat(baseAddition),
    repeatTimes,
    separator
  );
  return baseStr;
  // remove line with error and write your code here
}
// console.log(repeater('la', { repeatTimes: 3 }));
// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));
// console.log(repeater(-222, { repeatTimes: 4, separator: '||', addition: new Map(), additionRepeatTimes: 3, additionSeparator: '&&' }));
// console.log('-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]')
module.exports = {
  repeater,
};
