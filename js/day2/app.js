
import { readFile } from 'fs';
import { IDValidator } from './validator.js';

(() => {
    const validator = new IDValidator();

    function splitRange(range) {
        let ends = range.split("-");
        return { low: +(ends[0]), high: +(ends[1]) };
    }

    readFile('../../inputs/day2.txt', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        let ranges = data.split(",")
                        .map(splitRange);

        // get values in each range

        // iterate over ranges to validate inputs

        console.log(dial.count);
    });
    
})();
