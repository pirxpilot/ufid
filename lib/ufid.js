const byteStream = require('./random-byte-stream');

module.exports = {
  generator,
  uid
};

const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const ALPHABET = letters + letters.toUpperCase() + numbers;

const LEN = ALPHABET.length;
const MASK = 0xFFFFFFFF >>> (Math.clz32(LEN));


const { getByte } = byteStream();

function uid(size = 6, alphabet = ALPHABET) {
  const result = new Array(size);
  for (let i = 0; i < size; ) {
    const b = getByte() & MASK;
    if (b < alphabet.length) {
      result[i++] = alphabet.charAt(b);
    }
  }
  return result.join('');
}

function generator({ alphabet = ALPHABET, size = 6 } = {}) {
  return uid.bind(null, size, alphabet);
}
