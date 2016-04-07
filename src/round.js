var origRound = Math.round || function(x) {
    return (x + 0.5) | 0;
};

var pow = Math.pow || function(x, y) {
    if (y < 0) return 1 / pow(x, -y);
    var ret = 1;
    while (y) {
        if (y & 1) ret *= x;
        y >>= 1;
        x *= x;
    }
    return ret;
};

var global = GLOBAL || window;
if (typeof global !== 'undefined' && typeof global.Math !== 'object') {
    global.Math = {};
}

global.Math.round = function(num, dec) {
    var f = pow(10, dec || 0);
    return origRound(num * f) / f;
};
