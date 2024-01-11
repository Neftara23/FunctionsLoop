/**
 * Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
 */
console.log("Number divided into halves");

let n = 4;

function numDiv(n) {
    let halfNum = Math.floor(n / 2);
    let Array = [halfNum,halfNum];
    return Array;
}

console.log(`The result we are looking for is: ${numDiv(n)}`);