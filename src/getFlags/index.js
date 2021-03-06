/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  let myArr = [];
    for(let i=0;i<arr.length;i++){
         for(let j=0;j<arr[i].flags.length;j++){
             myArr.push(arr[i].flags[j]);
        }  
    }
    return myArr;
};

export default getFlags;
