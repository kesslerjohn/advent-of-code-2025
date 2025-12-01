export class Dial {

	#size;
	#pos;
	#count;

	constructor(size, start) {
		this.#size = size;
		this.#pos = start;
		this.#count = 0;
	}

	turn(direction) {
		this.#pos += +(direction);
		if (this.#pos === 0){
			this.#count += 1;
		}
	}

	get count() {
		return this.#count;
	}

}
