/**
 * returns either Yes if for every opening bracket, or brace in an 
 * array there is a closing brace or bracket. Else it will return No
 * eg ['{','(','}'] => No
 *    ['[','{','(',')','}',']'] => Yes
 * 
 * 
 * @param {[]} arr Input array
 *
 */

let opening = ['(','{','['];
let closing = [')','}',']'];
let stack = []

function Brackets(str) {
  for(let i = 0; i < str.length; i++) {
    if(opening.includes(str[i])) {
      stack.push(str[i]);
    } else {
        let last = stack[stack.length - 1];
        let index = closing.indexOf(str[i]);
        let test = opening[index];
        if(test == last) {
          stack.pop();
        } else {
          return false
        }
      }
    }
    
    return stack.length == 0;
}

console.log(Brackets('{([])}'))

