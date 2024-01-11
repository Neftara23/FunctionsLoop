/**
 * Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 */

let onlineStatus = ['mockIng99', 'J0eyPunch', 'glassedFer'];

function check (array){
        if(onlineStatus.length <= 1){
            console.log(onlineStatus[0], onlineStatus[1]);
            console.log("Are online now");
        } else{ 
            console.log(onlineStatus[0], onlineStatus[1]);
            console.log(`And ${onlineStatus.length -2}`);
            console.log('more are online now');  
        }
    
}

console.log(check(onlineStatus));