const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;
  const time = turnsSpeed / 3600;
  //console.log(turns)
  return {'turns': turns, 'seconds' : Math.floor(turns / time)};
  // remove line with error and write your code here
}
//console.log(calculateHanoi(9, 4308))

module.exports = {
  calculateHanoi
};
