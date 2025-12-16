#include <stdio.h>
#include "dial.h"

int main() {

    struct dial *dp = initDial(5, 2);

    char pos[2];
    sprintf(pos, "%d", dp->pos);

    printf("The dial is pointed to: %s\n", pos);

    return 0;
}
