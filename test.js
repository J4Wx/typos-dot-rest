const Typos = require('./Typos');
const typos = Typos.QwertyTypos;

const str = 'Hello World, this is a test of our ability to generate typos...'

for (let i = 100; i >= 0; i = i - 1) { 
    const message = Typos.typo(str, i * 1000, typos);
    console.log(message);
}
