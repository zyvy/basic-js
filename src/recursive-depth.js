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
    //console.log('started', arr[0], arr.length);
    for (let i = 0; i < arr.length; i++) {
    //  console.log("enter with", arr[i]);
   //   console.log("max is", this.maxDepth);
      if (Array.isArray(arr[i])) {
     //   console.log("found new", arr[i]);
        this.currentFloor += 1;
     //   console.log("go to fllor", this.currentFloor);
        this.calculateDepth(arr[i]);
      } else if (this.currentFloor > 1 && i === arr.length - 1) {
        // добежали до конца текущего и уходим на уровень назад
        if (this.currentFloor > this.maxDepth) {
          this.maxDepth = this.currentFloor;
      //    console.log("max is", this.maxDepth);
        }
        this.currentFloor -= 1;
      //  console.log('go bottom 1', this.currentFloor);
      }
      // если пустой
      else if (this.currentFloor > 1 && arr.length === 0) {
        if (this.currentFloor > this.maxDepth) {
          this.maxDepth = this.currentFloor;
     //     console.log("max is", this.maxDepth);
        }
        this.currentFloor -= 1;
     //   console.log('go bottom 2', this.currentFloor);
      }
    }
    // remove line with error and write your code here
    this.currentFloor = 1;
    return this.maxDepth;
  }
}
const depthCalc = new DepthCalculator();
//console.log(depthCalc.calculateDepth([1, 2, 3,4]))
//console.log(depthCalc.calculateDepth([1, [[[[[]]]]], 9, [0, [[]]]]));
//console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]))
//console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5, [9]], 6, [7,8]]))
module.exports = {
  DepthCalculator,
};
