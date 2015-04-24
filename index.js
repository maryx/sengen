window.onload = function() {
    getSentence();
}

function refresh() {
    getSentence();
    getButtonText();
}

function getSentence() {
    var sentence =
        'If you ' + emphasize() + ' ' + getRandom(care) +
        ' me, you would\'ve ' + getRandom(action);
    document.getElementById('sentence').innerHTML = sentence;
    return;
}

function getButtonText() {
    document.getElementById('generate').innerHTML = getRandom(button);
}
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function emphasize() {
    var e = getRandom(emphasis);
    if (Date.now() % 5 === 0) {
        return e.split;
    }
    return e;
}
