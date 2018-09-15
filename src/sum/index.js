/**
* This function should return sum of two numbers
*
* @param {number} a - this is a number value
* @param {number} b - this is a number value
* @return {number} result of the sum values
* @example
* sum(1, 2);   // 3
* sum(0, 5);   // 5
* sum(-1, 13); // 12
*/
function sum(a,b) {
    /* your logic here...*/
    let sum = 0;
    for(let i=0;i<2;i++){
      if(arguments[i] !== undefined){
        if(!isNaN(arguments[i])){
            if(isFinite(arguments[i])){
                if(typeof(arguments[i])=== "number" && arguments[i] !== undefined){
                    sum+=arguments[i];
                }else{throw new Error};
            }else{throw new Error};
        }else{throw new Error};
      }else{throw new Error};
    }
    return sum;
}


export default sum;
