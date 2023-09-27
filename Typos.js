const QwertyTypos = {
    a: ['q', 'w', 's', 'z'],
    b: ['v', 'g', 'h', 'n'],
    c: ['x', 'd', ' '],
    d: ['x', 's', 'w', 'e', 'r', 'f', 'c'],
    e: ['w', 's', 'd', 'f', 'r'],
    f: ['c', 'd', 'e', 'r', 't', 'g', 'v'],
    g: ['r', 'f', 'v', 't', 'b', 'y', 'h'],
    h: ['b', 'g', 't', 'y', 'u', 'j', 'n'],
    i: ['u', 'j', 'k', 'l', 'o'],
    j: ['n', 'h', 'y', 'u', 'i', 'k', 'm'],
    k: ['u', 'j', 'm', 'l', 'o'],
    l: ['p', 'o', 'i', 'k'],
    m: ['n', 'j', 'k', 'l', ','],
    n: ['b', 'h', 'j', 'm'],
    o: ['i', 'k', 'l', 'p'],
    p: ['o', 'l', ';'],
    q: ['1', '2', 'w', 'a'],
    r: ['e', 'd', 'f', 'g', 't'],
    s: ['q', 'w', 'e', 'z', 'x', 'c', 'a', 'd'],
    t: ['r', 'f', 'g', 'h', 'y'],
    u: ['y', 'h', 'j', 'k', 'i'],
    v: ['c', 'f', 'g', 'b', ' '],    
    w: ['q', 'a', 's', 'd', 'e'],
    x: ['z', 's', 'd', 'c'],
    y: ['t', 'g', 'h', 'j', 'u'],
    z: ['x', 's', 'a'],
    1: ['q', 'w', '2'],
    2: ['q', 'w', 'e', '1', '3'],
    3: ['w', 'e', 'r', '2', '4'],
    4: ['e', 'r', 't', '3', '5'],
    5: ['r', 't', 'y', '4', '6'],
    6: ['t', 'y', 'u', '5', '7'],
    7: ['y', 'u', 'i', '6', '8'],
    8: ['u', 'i', 'o', '7', '9'],
    9: ['i', 'o', 'p', '8', '0'],
    0: ['o', 'p', '9'],
}

const typo = (sentence, frequencyPercentage = 10, typos = QwertyTypos) => {
    sentence = sentence.split('');

    sentence = sentence.map(letter => {
        if (Math.floor(Math.random() * 100000) < frequencyPercentage) {
            const isUpper = letter === letter.toUpperCase();

            if (isUpper) {
                letter = letter.toLowerCase();
            }

            const typo = letterTypo(letter, typos);

            if (isUpper) {
                return typo.toUpperCase();
            }

            return typo;
        } else {
            return letter;
        }
    })

    return sentence.join("");
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
    letterTypo,
}
