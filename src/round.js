var global;
if (typeof GLOBAL !== 'undefined') {
    global = GLOBAL;
}
else if (typeof window !== 'undefined') {
    global = window;
}

// No support if not node.js or browser
if (global) {
    if (typeof global.Math !== 'object') {
        global.Math = {};
    }

    var origRound = global.Math.round || function(x) {
        return (x + 0.5) | 0;
    };

    var pow = global.Math.pow || function(x, y) {
        if (y < 0) return 1 / pow(x, -y);
        var ret = 1;
        while (y) {
            if (y & 1) ret *= x;
            y >>= 1;
            x *= x;
        }
        return ret;
    };

    global.Math.round = function(num, dec) {
        var f = pow(10, dec || 0);
        return origRound(num * f) / f;
    };
}
