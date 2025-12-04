export class Dial {

	#size;
	#pos;
	#count;

	constructor(size, start) {
		this.#size = size;
		this.#pos = start;
		this.#count = 0;
	}

    #resolveDirection(line) {
        return +(line
                .replace(/^L/, "-")
                .replace(/^R/, ""));
    }

    #mod(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor;
    }

    #countFullTurns(dividend, divisor) {
        return Math.floor(Math.abs(dividend)/divisor);
    }

    #checkPartialClicks(dividend, divisor) {
        return this.#mod(dividend, divisor);
    }

	turn(line) {
        let direction = this.#resolveDirection(line);
        let absolutePos = this.#pos + direction;

        // always check how many full rotations we make
        this.#count += this.#countFullTurns(direction, this.#size);

        // only check partial turns if we are not starting at 0
        if (this.#pos !== 0) {

            if (absolutePos < 0 || absolutePos > this.#size){
                this.#count += 1;
            }

        }
        
        // see where you landed
        this.#pos = this.#mod(absolutePos, this.#size);

        // finally, if you land on 0, count that. 
        if (this.#pos === 0) {
            this.#count += 1;
        }

	}

	get count() {
		return this.#count;
	}

    get pos() {
        return this.#pos;
    }

}
