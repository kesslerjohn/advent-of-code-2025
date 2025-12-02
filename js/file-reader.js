import fs from 'fs';

export class FSWrapper {
    
    #filePath;

    constructor(filePath) {
        this.#filePath = filePath;
    }

    run() {
        fs.readFile(this.#filePath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let lines = data.split("\n");

            lines.forEach((line) => {
                callBack(line);
            });

        });

    }

}
