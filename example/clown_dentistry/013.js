var baudio = require('baudio');
var tau = Math.PI * 2;
var b = baudio(function (t) {
    return (
        (
            0.2 * square(100)
            + 0.2 * sin(2480)
            + 0.2 * sawtooth(612)
            + 0.2 * sawtooth(404)
        ) * ((sin(400) + sin(404)))
    );
    
    function sin (x) {
        return Math.sin(tau * t * x);
    }
    
    function square (x) {
        var n = Math.sin(tau * t * x);
        return n > 0 ? 1 : -1;
    }
    
    function sawtooth (x) {
        return t % (1 / x) * x * 2 - 1;
    }
});
b.play();
