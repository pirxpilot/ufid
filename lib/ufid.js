const randomByteStream = require('./random-byte-stream');

module.exports = generator;

const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const ALPHABET = letters + letters.toUpperCase() + numbers;

function uid(next, alphabet, mask, defaultSize, size = defaultSize) {
  let result = '';
  while (size > 0) {
    const b = next() & mask;
    if (b < alphabet.length) {
      result += alphabet[b];
      --size;
    }
  }
  return result;
}

function generator({ alphabet = ALPHABET, size = 6, bufferSize, byteStream } = {}) {
  const { next } = createByteStream();
  const mask = 0xffffffff >>> Math.clz32(alphabet.length);
  return uid.bind(null, next, alphabet.split(''), mask, size);

  function createByteStream() {
    if (byteStream) {
      return byteStream;
    }
    if (!bufferSize) {
      bufferSize = Math.min(100 * size, 4096);
    }
    return randomByteStream(bufferSize);
  }
}
