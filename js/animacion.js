'use strict';

// a user must write this function from scratch and can use the others
function moveText() {
    var optionSelected = document.querySelector("#option").value;
    var elem = document.querySelector('#collapseNivel01');
    var iterations = 1;
    window[optionSelected](elem, iterations);
}

window.addEventListener('load', function() {
    document.getElementById('option').addEventListener('change', moveText);
    document.getElementById('boxAnimacionNivel01').addEventListener('click', moveText);
});

function bounce(elem, iterations) {
    var keyframes = [{
        transform: 'translate3d(0,0,0)',
        offset: 0
    }, {
        transform: 'translate3d(0,0,0)',
        offset: 0.2
    }, {
        transform: 'translate3d(0,-30px,0)',
        offset: 0.4
    }, {
        transform: 'translate3d(0,-30px,0)',
        offset: 0.43
    }, {
        transform: 'translate3d(0,0,0)',
        offset: 0.53
    }, {
        transform: 'translate3d(0,-15px,0)',
        offset: 0.7
    }, {
        transform: 'translate3d(0,0,0)',
        offset: 0.8
    }, {
        transform: 'translate3d(0,-15px,0)',
        offset: 0.9
    }, {
        transform: 'translate3d(0,0,0)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
    };
    return elem.animate(keyframes, timing);
}

function bounceIn(elem, iterations) {
    var keyframes = [
        { transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 0 },
        { transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 },
        { transform: 'scale3d(.9, .9, .9)', offset: 0.4 },
        { transform: 'scale3d(1.03, 1.03, 1.03)', opacity: '1', offset: 0.6 },
        { transform: 'scale3d(.97, .97, .97)', offset: 0.8 },
        { transform: 'scale3d(1, 1, 1)', opacity: '1', offset: 1 }
    ];
    var timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)' };
    return elem.animate(keyframes, timing);
}

function bounceOut(elem, iterations) {
    var keyframes = [
        { transform: 'none', opacity: '1', offset: 0 },
        { transform: 'scale3d(.9, .9, .9)', opacity: '1', offset: 0.2 },
        { transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.5 },
        { transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.55 },
        { transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 1 }
    ];
    var timing = { duration: 900, iterations: iterations };
    return elem.animate(keyframes, timing);
}

function bounceInDown(elem, iterations) {
    var keyframes = [
        { transform: 'translate3d(0, -3000px, 0)', opacity: '0', offset: 0 },
        { transform: 'translate3d(0, 25px, 0)', opacity: '1', offset: 0.6 },
        { transform: 'translate3d(0, -100px, 0)', offset: 0.75 },
        { transform: 'translate3d(0, 5px, 0)', offset: 0.9 },
        { transform: 'none', opacity: '1', offset: 1 }
    ];
    var timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)' };
    return elem.animate(keyframes, timing);
}

function bounceOutDown(elem, iterations) {
    var transitingTimingFunction = elem.style['transition-timing-function'];
    var keyframes = [
        { transform: 'none', opacity: '1', offset: 0 },
        { transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2 },
        { transform: 'translate3d(0, -20px, 0)', opacity: '1', offset: 0.4 },
        { transform: 'translate3d(0, -20px, 0)', opacity: '1', offset: 0.45 },
        { transform: 'translate3d(0, 2000px, 0)', opacity: '0', offset: 1 }
    ];
    var timing = { duration: 900, iterations: iterations };
    return elem.animate(keyframes, timing);
}

function bounceInUp(elem, iterations) {
    var keyframes = [
        { transform: 'translate3d(0, 3000px, 0)', opacity: '0', offset: 0 },
        { transform: 'translate3d(0, -25px, 0)', opacity: '1', offset: 0.6 },
        { transform: 'translate3d(0, 100px, 0)', offset: 0.75 },
        { transform: 'translate3d(0, -5px, 0)', offset: 0.9 },
        { transform: 'translate3d(0, 0, 0)', opacity: '1', offset: 1 }
    ];
    var timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)' };
    return elem.animate(keyframes, timing);
}

function bounceOutUp(elem, iterations) {
    var keyframes = [
        { transform: 'none', opacity: '1', offset: 0 },
        { transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2 },
        { transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.4 },
        { transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.45 },
        { transform: 'translate3d(0, -2000px, 0)', opacity: '0', offset: 1 }
    ];
    var timing = { duration: 900, iterations: iterations };
    return elem.animate(keyframes, timing);
}

function bounceInLeft(elem, iterations) {
    var keyframes = [
        { transform: 'translate3d(-3000px, 0, 0)', opacity: '0', offset: 0 },
        { transform: 'translate3d(25px, 0, 0)', opacity: '1', offset: 0.6 },
        { transform: 'translate3d(-100px, 0, 0)', offset: 0.75 },
        { transform: 'translate3d(5px, 0, 0)', offset: 0.9 },
        { transform: 'none', opacity: '1', offset: 1 }
    ];
    var timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)' };
    return elem.animate(keyframes, timing);
}

function bounceOutLeft(elem, iterations) {
    var keyframes = [
        { transform: 'none', opacity: '1', offset: 0 },
        { transform: 'translate3d(100px, 0, 0)', opacity: '1', offset: 0.2 },
        { transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.4 },
        { transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.45 },
        { transform: 'translate3d(-2000px, 0, 0)', opacity: '0', offset: 1 }
    ];
    var timing = { duration: 900, iterations: iterations };
    return elem.animate(keyframes, timing);
}

function bounceInRight(elem, iterations) {
    var keyframes = [
        { transform: 'translate3d(3000px, 0, 0)', opacity: '0', offset: 0 },
        { transform: 'translate3d(-25px, 0, 0)', opacity: '1', offset: 0.6 },
        { transform: 'translate3d(100px, 0, 0)', offset: 0.75 },
        { transform: 'translate3d(-5px, 0, 0)', offset: 0.9 },
        { transform: 'none', opacity: '1', offset: 1 }
    ];
    var timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)' };
    return elem.animate(keyframes, timing);
}

function bounceOutRight(elem, iterations) {
    var keyframes = [
        { transform: 'none', opacity: '1', offset: 0 },
        { transform: 'translate3d(100px, 0, 0)', opacity: '1', offset: 0.2 },
        { transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.4 },
        { transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.45 },
        { transform: 'translate3d(2000px, 0, 0)', opacity: '0', offset: 1 }
    ];
    var timing = { duration: 900, iterations: iterations };
    return elem.animate(keyframes, timing);
}