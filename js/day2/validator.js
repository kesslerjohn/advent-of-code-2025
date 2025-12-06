import pkg from 'bignumber.js';
const { BigNumber } = pkg;

export class IDValidator {

    // ideas for optimizations:
    // - only check substrings whose length is a factor
    //   of the length of the value

    // - can also do this with regular math
    //   with an algorithm to find the divisor...
    //   i.e. if a given substring like '54' can divide
    //   '5454', then there is some n (in this case 101) 
    //   s.t. 54*n = 5454.
    //
    // - only need to check ranges with even lengths
    
    #sum;
    
    constructor() {
        this.#sum = new BigNumber(0);
    }

    #stringDivisorInd(val, part){
        if (val.split(part).join('') == '') {
            return true;
        }
        return false;
    }

    #validateEvenID(val) {

        if (val.length%2 !== 0) {
            return;
        }

        let part = val.substr(0, val.length/2);

        if (this.#stringDivisorInd(val, part)) {
            this.#sum = this.#sum.plus(val);
        }

        return;
    }

    #validateAnyID(val) {

        if (val.length < 2) {
            return;
        }

        let part;
        for (let i = 1; i <= Math.floor(val.length/2); i++) {
            part = val.substr(0, i);
            if (this.#stringDivisorInd(val, part)) {
                this.#sum = this.#sum.plus(val);
                break;
            }
        }
    }

    #validateRange(range) {
        for (let i = range.low; i <= range.high; i++) {
            this.#validateAnyID(i.toString()); 
        }
    };

    validateIDs(rangesList) {
        rangesList.map((range) => this.#validateRange(range));
        return this.#sum;
    };
}
