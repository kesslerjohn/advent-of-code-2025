/** 
 *  @param {number[]} batteries: an array of battery joltage values
 *  @returns {number[]} array of selected values 
 * */
export function pickN(i, batteries, n = 2) {

    if (n == 0) {
        // return without recursive call
        return [];
    }

    if (batteries.length < n) {
        return [];
    }

    pickN(i+1, batteries.slice(1, batteries.length), n-1);
    
}

function addable(arr) {
    let n = arr.length;
    for (let i = n-1; i > -1; i--) {
        arr[i] = arr[i]*(10**i);
    }
    return arr;
}

function sum(arr) {
    return arr.reduce((acc, ind) => { return acc + ind }, 0);
}
