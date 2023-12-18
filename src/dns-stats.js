const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
// создадим массив массивов куда будем складывать куски днс или сумму и потом просто выведем длину или сумму
function getDNSStats(domains) {
  dnsArray = new Map();
  let finalAnswer = {};
  for (i = 0; i < domains.length; i++){
    //получим массив составляющих
    let currentDomainAray = domains[i].split('.').reverse();
    let currentDomain = [];
    let tempDomain = ''
    
   // console.log("get domains", currentDomainAray);
    //каждую из комбинаций сложим в соответствующий массив
    for (let j = 0; j < currentDomainAray.length; j++){
      tempDomain = tempDomain.concat('.')
      tempDomain = tempDomain.concat(String(currentDomainAray[j]));
     // console.log('build ', tempDomain)
      if (dnsArray.has(tempDomain)){
      //  console.log('has');
        dnsArray.set(tempDomain,dnsArray.get(tempDomain) + 1);
      }
      else {
        dnsArray.set(tempDomain, 1);
      }
    
    }
    
  }
  for (let domain of dnsArray.keys()){
    finalAnswer[domain] = dnsArray.get(domain)
  }
  //console.log('calc result', dnsArray, finalAnswer);
  return finalAnswer
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

//console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']));

module.exports = {
  getDNSStats
};
