const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //console.log(date);
  let dayOf;
  let monthOf;
  // check reality
  if (!date){
    throw new Error("Invalid date!");
  }
  if (Number.par)
  if (Object.prototype.toString.call(date) != '[object Date]'){
    throw new Error("Invalid date!")
  }
  try {
    dayOf = date.getDate();
    monthOf = date.getMonth();
    //console.log(dayOf, monthOf)
  } catch (error) {
    //console.log(error);
    throw new Error("Invalid date!");
    //return date + "Invalid date!"
  }
  if (date.toString().length <5){
    throw new Error("Invalid date!");
    //return "Unable to determine the time of year!"
  }

  // calculate season
  //console.log `date: ${date}. formatted as day ${dayOf} of month ${monthOf}`;
  if (monthOf >= 2 && monthOf <= 4 && dayOf >=1 && dayOf <= 31) {
    return 'spring'
  }
  if (monthOf >= 5 && monthOf <= 7 && dayOf >=1 && dayOf <= 31) {
    return 'summer'
  }
  if (monthOf >= 8 && monthOf <= 10 && dayOf >=1 && dayOf <= 31) {
    return 'autumn'
  }
 // if (monthOf >= 11 && monthOf <= 1 && dayOf >=1 && dayOf <= 31) {
  return 'winter'
 // }
  //return 'Unable to determine the time of year!'
  // remove line with error and write your code here
}
//console.log(getSeason(new Date(2019, 11, 22, 23, 45, 11, 500)))

module.exports = {
  getSeason
};
