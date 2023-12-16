const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string' || !Number.parseFloat(sampleActivity) || Number.parseFloat(sampleActivity) > 15 || Number.parseFloat(sampleActivity) <= 0) {
    return false;
  }
  let time = 0;
  let k = 0.693 / HALF_LIFE_PERIOD;
  //Math.log(MODERN_ACTIVITY/sampleActivity) / k
  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity) / k);
  // remove line with error and write your code here
}

// console.log(dateSample('1'));
// console.log(dateSample('woot'));

module.exports = {
  dateSample
};
