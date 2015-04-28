window.onload = function() {
    getSentence();
}
function refresh() {
    getSentence();
    getButtonText();
}
function getSentence() {
    var sentence =
        getRandom(angryStatement) + '. ' +
        'If you ' + getEmphasis() + ' ' + getRandom(care) +
        ' me, you would\'ve ' + getAction();
    document.getElementById('sentence').innerHTML = sentence;
    return;
}
function getButtonText() {
    document.getElementById('generate').innerHTML = getRandom(button);
}
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function getRandomNum(start, count) {
    return start + Math.floor(Math.random() * count);
}
function getEmphasis() {
    var e = getRandom(emphasis);
    if (Date.now() % 5 === 0) {
        return e.split('').join('-');
    }
    return e;
}
function getAction() {
    var a = getRandom(action);
    a = a.split('{int}').join(getRandomNum(5, 20))
        .split('{color}').join(getRandom(color))
        .split('{homemadeItem}').join(getRandom(homemadeItem))
        .split('{namedThing}').join(getRandom(namedThing));
    return a;
}
