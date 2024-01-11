/**
 * Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
 */
let positiveDom = [-1, -3, -5, 4, 6767];
function PositivelyDominant(arr) {
    let positiveSum = 0;
    let nonPositiveSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
         positiveSum++;
      } else {
         nonPositiveSum++;
      }
    }
    
    if(positiveSum > nonPositiveSum){
        return true;
    } else {
        return false;
    }
     
  }

  console.log(`This is: ${PositivelyDominant(positiveDom)}`);
  