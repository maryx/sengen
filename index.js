window.onload = function() {
    getSentence();
}

function refresh() {
    getSentence();
    getButtonText();
}

function getSentence() {
    var sentence =
        'If you ' + getRandom(emphasis) + ' ' + getRandom(care) +
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
