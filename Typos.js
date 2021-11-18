const QwertyTypos = {
    a: ['q', 'w', 's', 'z'],
    b: ['v', 'g', 'h', 'n'],
    c: ['x', 'd', 'f', 'v'],
    d: ['x', 's', 'w', 'e', 'r', 'f', 'v', 'c'],
    e: ['w', 's', 'd', 'f', 'r'],
    f: ['c', 'd', 'e', 'r', 't', 'g', 'b', 'v'],
    g: ['r', 'f', 'v', 't', 'b', 'y', 'h', 'n'],
    h: ['b', 'g', 't', 'y', 'u', 'j', 'm', 'n'],
    i: ['u', 'j', 'k', 'l', 'o'],
    j: ['n', 'h', 'y', 'u', 'i', 'k', 'm'],
    k: ['u', 'j', 'm', 'l', 'o'],
    l: ['p', 'o', 'i', 'k', 'm'],
    m: ['n', 'h', 'j', 'k', 'l'],
    n: ['b', 'g', 'h', 'j', 'm'],
    o: ['i', 'k', 'l', 'p'],
    p: ['o', 'l'],
    r: ['e', 'd', 'f', 'g', 't'],
    s: ['q', 'w', 'e', 'z', 'x', 'c'],
    t: ['r', 'f', 'g', 'h', 'y'],
    u: ['y', 'h', 'j', 'k', 'i'],
    v: ['', 'c', 'd', 'f', 'g', 'b'],    
    w: ['q', 'a', 's', 'd', 'e'],
    x: ['z', 'a', 's', 'd', 'c'],
    y: ['t', 'g', 'h', 'j', 'u'],
    z: ['x', 's', 'a'],
    1: ['q', 'w'],
    2: ['q', 'w', 'e'],
    3: ['w', 'e', 'r'],
    4: ['e', 'r', 't'],
    5: ['r', 't', 'y'],
    6: ['t', 'y', 'u'],
    7: ['y', 'u', 'i'],
    8: ['u', 'i', 'o'],
    9: ['i', 'o', 'p'],
    0: ['o', 'p'],
}

const typo = (sentence, frequencyPercentage = 10, typos = QwertyTypos) => {
    sentence = sentence.split('');

    for (let letter in sentence) {
        if (Math.floor(Math.random() * 100000) < frequencyPercentage) {
            sentence[letter] = letterTypo(sentence[letter], typos);
        }
    }

    console.log(sentence.join(''));
}

const letterTypo = (letter, typos) => {
    const options = typos[letter];

    if (options === undefined) {
        return letter;
    }

    return options[Math.floor(Math.random() * options.length)];
}

module.exports = {
    QwertyTypos,
    typo,
}
