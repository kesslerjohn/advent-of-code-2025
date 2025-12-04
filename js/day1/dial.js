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

        // see where you landed
        let end = this.#mod(absolutePos, this.#size);

        if (this.#pos === 0) {

            this.#pos = end;
            return this.#pos;
        }

        if (end === 0) {
            this.#count += 1;

            this.#pos = end;
            return this.#pos;
        }

        switch (true) {
            case (direction < 0):
                if (end > this.#pos) {
                    this.#count += 1;
                }
                break;

            case (direction > 0):
                if (end < this.#pos) {
                    this.#count += 1;
                }
                break;
            default:
                break;
        } 

        this.#pos = end;
        return this.#pos;

	}

	get count() {
		return this.#count;
	}

    get pos() {
        return this.#pos;
    }

}
