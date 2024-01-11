/**
 * Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 */
let a = 2;
let b = 10;
let multiArr =[];
function arrayMultiples(base, limit) {
        if(!Number.isInteger(base) || !Number.isInteger(limit) || limit <= 0){
            console.log("Invalid input")
        } else{
            for (let i= 1; i<=limit ;i++ ){
                multiArr.push(base*i);
        }
        }
        return multiArr;
}

console.log(`The result is: ${arrayMultiples(a,b)}`);