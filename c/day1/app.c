#include <stdio.h>
#include "dial.h"

int main() {

    struct dial *dp = initDial(5, 2);

    char pos[2];
    sprintf(pos, "%d", dp->pos);

    printf("The dial is pointed to: %s\n", pos);

    char turn[4] = "L10";

    int mult = resolveDirection(turn);

    // when cast to string, the result of mult will be either
    // length 3 ("-1\0") or length 2 ("1\0")
    int size;
    if (mult < 0) {
        size = 3;
    } else {
        size = 2;
    }

    char dir[size];

    sprintf(dir, "%d", mult);

    printf("Turning direction is: %s\n", dir);

    return 0;
}
