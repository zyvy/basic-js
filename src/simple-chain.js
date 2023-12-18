const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (Number(position) > 0 && Number(position) < this.chain.length){
      this.chain.splice(Number(position) - 1, 1);
      return this;
    }
    else {
      this.chain = [];
      throw Error("You can't remove incorrect link!"); 
    }
    // remove line with error and write your code here
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    // remove line with error and write your code here
    return this;
  },
  finishChain() {
    const msg = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return this.chain, msg;
  }
};
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'));
//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
///console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain())

module.exports = {
  chainMaker
};
