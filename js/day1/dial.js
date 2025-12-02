export class Dial {

	#size;
	#pos;
	#count;

	constructor(size, start) {
		this.#size = size+1;
		this.#pos = start;
		this.#count = 0;
	}

    #resolveDirection(line) {
        return line
                .replace(/^L/, "-")
                .replace(/^R/, "");
    }

    #mod(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor;
    }

	turn(line) {
        let direction = this.#resolveDirection(line);
		this.#pos = this.#mod(this.#pos + +(direction), this.#size);
		if (this.#pos == 0){
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
