export class IDValidator {
    constructor() {

    }

    #stringDivisorInd(val, part){
        if (val.split(part).join('') == '') {
            return true;
        }
        return false;
    }

    #validateID(val) {
        let part;
        let sum = 0;
        for (let i = 1; i <= Math.floor(val.length/2); i++) {
            part = val.substr(0, i);
            if (this.#stringDivisorInd(val, part)) {
                sum += +(val);
                break;
            }
        }
    }
}
