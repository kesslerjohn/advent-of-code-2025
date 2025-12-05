import { BigNumber }  from 'bignumber.js';

export class IDValidator {

    let #sum;

    constructor() {
        this.#sum = new BigNumber(0);
    }

    #stringDivisorInd(val, part){
        if (val.split(part).join('') == '') {
            return true;
        }
        return false;
    }

    #validateID(val) {
        let part;
        for (let i = 1; i <= Math.floor(val.length/2); i++) {
            part = val.substr(0, i);
            if (this.#stringDivisorInd(val, part)) {
                this.#sum = this.#sum.plus(val);
                break;
            }
        }
    }
}
