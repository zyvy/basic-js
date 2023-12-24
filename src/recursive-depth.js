const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.maxDepth = 1;
    this.currentFloor = 1;
  }
  calculateDepth(arr) {
    let myMax = 1;
    //console.log('started', arr[0], arr.length);
    for (let i = 0; i < arr.length; i++) {
 //     console.log("enter with", arr[i]);
  //    console.log("max is", myMax);
      if (Array.isArray(arr[i])) {
  //      console.log("found new", arr[i]);
        myMax = Math.max(myMax, this.calculateDepth(arr[i]) + 1)
  //      console.log("go to fllor", this.currentFloor);
      }
     
    
  }
  return myMax;
}
}
//const depthCalc = new DepthCalculator();
//console.log(depthCalc.calculateDepth([1, 2, 3,4]))
//console.log(depthCalc.calculateDepth([1, [[[[[]]]]], 9, [0, [[]]]]));
//console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]))
//console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5, [9]], 6, [7,8]]))
module.exports = {
  DepthCalculator,
};
