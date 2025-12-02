import fs from 'fs';

export class FSWrapper {
    
    #data;
    #filePath;

    constructor(filePath) {
        this.#filePath = filePath;
    }

    get lines() {
        return this.#data;
    }

    init() {
        fs.readFile(this.#filePath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            this.#data = data.split("\n");
        });

    }

}
