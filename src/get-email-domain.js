const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  return email.split('@').at(-1);
  // remove line with error and write your code here
}

//console.log(getEmailDomain('prettyandsimple@example.com'))

module.exports = {
  getEmailDomain
};
