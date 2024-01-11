/**
 * Find the name of a secret society based on the first letter of each member's name.
 

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
 */

let secretName = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];

function decoding(array){
    let initials = "";
    secretName.sort();
    for (let count = 0; count < secretName.length; count++){
            initials = initials + secretName[count].charAt(0);
         }
    return initials;
}

console.log(`The decoding is: ${decoding(secretName)}`);