#ifndef _DIAL_H
#define _DIAL_H

#include <string.h>

struct dial {
    int size;
    int pos;
    int count;
};

struct dial* initDial(int size, int pos) {
    struct dial res, *dp;

    res.size = size;
    res.pos = pos;
    res.count = 0;

    dp = &res;

    return dp;
}

int countFullTurns(int dividend, int divisor) {
    return dividend/divisor;
}

int checkPartialClicks(int dividend, int divisor) {
    return dividend%divisor;
}

int resolveDirection(char *line) {
    // determine sign by line[0];
    // the length of line is not fixed
    int mult;
    switch (line[0]){
        case 'L':
            mult = -1;
            break;
        default:
            mult = 1;
            break;
    }

    return mult;
}

#endif
