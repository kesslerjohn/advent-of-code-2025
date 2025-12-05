
import { readFile } from 'fs';
import { Dial } from './dial.js';

(() => {
    const dial = new Dial(100, 50);

    readFile('../../inputs/day1.txt', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        let lines = data.split("\n");

        lines.forEach((line) => {
            dial.turn(line); 
        });

        console.log(dial.count);
    });
    
})();
