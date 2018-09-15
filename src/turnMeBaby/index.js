/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  if(typeof(str) === 'string'){
      let newStr = "";
      for(let i = str.length - 1;i>=0;i--){
          newStr +=str[i];
      }
  return newStr;
  }
  else{
      return new Error('this is not a string');
  }
};

export default turnMeBaby;
