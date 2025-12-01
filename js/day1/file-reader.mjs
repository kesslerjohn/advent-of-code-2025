import { Dial } from './dial.mjs';
import fs from 'fs';

export class FSWrapper() {
	
	#filePath;

	constructor(filePath) {
		this.#filePath = filePath;
	}

	lines() {
		return fs.readFile(this.#filePath, 'utf8', (err, data) => {
		if (err) {
			throw err;
		}
		return data.split("\n");
	});

}
