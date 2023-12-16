const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // input data check
  // console.log(typeof members)
  if (!(typeof members == 'array') && !(typeof members == 'object') || members == null){
    return false;
  }
  // main logic
  let secretName = new Array;
  for (let i = 0; i < members.length; i +=1) {
    if (typeof members[i] != 'string') {
      continue;
    }
    secretName.push(members[i].trim().charAt(0).toUpperCase())
  }
  return secretName.sort().join('');
  // remove line with error and write your code here
}
// let myarr = ['Matt', 'Ann', 'Dmitry', 'Max'];
// console.log(createDreamTeam(myarr));

module.exports = {
  createDreamTeam
};

