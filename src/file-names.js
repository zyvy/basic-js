const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let tempNames = [];
  for (let i = 1; i < names.length; i++) {
    tempNames = names.slice(0, i);
    //tempNames.push(...names.slice(i+1));
    //console.log(tempNames, i);
   // console.log(names[i]);
    if (tempNames.includes(names[i])) {
     // console.log("includes");
      let newname
      for (let j = 1; j <= tempNames.length; j++) {
        newname = names[i].concat(`(${j})`);
       // console.log('newname', newname)
        if (tempNames.includes(newname)) {
          continue;
        } else {
          names[i] = newname;
          break
        }
      }
    }
    else {
      continue
    }
    // remove line with error and write your code here
  }
  return names;
}
//console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));
module.exports = {
  renameFiles,
};
