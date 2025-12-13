#include <stdio.h>
#include "dial.h"

main() {

    struct dial *dp = initDial(5, 2);

    printf("The dial is pointed to:");
    printf(dp->pos);

}
