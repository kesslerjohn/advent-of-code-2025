#ifndef _DIAL_H
#define _DIAL_H

struct dial {
    int size;
    int pos;
    int count;
}

struct dial * initDial(int size, int pos) {
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
