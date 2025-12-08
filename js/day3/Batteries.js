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

    // path of choosing i
    let include = [batteries[i]].concat(pickN(i+1, batteries.slice(1, batteries.length), n-1));

    // path of not choosing i
    let exclude = pickN(i+1, batteries.slice(1, batteries.length, n));

    return arrMax(include, exclude);
}

function addable(arr) {
    let n = arr.length;
    for (let i = n-1; i > -1; i--) {
        arr[i] = arr[i]*(10**i);
    }
    return arr;
}

function placeSum(arr) {
    return addabble(arr).reduce((acc, ind) => { return acc + ind }, 0);
}

function arrMax(...arrs) {
    let sums = arrs.map(placeSum);
    return Math.max(...sums);
}
