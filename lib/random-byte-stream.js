const crypto = require('crypto');

module.exports = byteStream;

function byteStream(size = 256) {
  let buffer = new Buffer.allocUnsafe(size);
  let index = size;

  return { next };

  function next() {
    if (index >= size) {
      crypto.randomFillSync(buffer);
      index = 0;
    }
    return buffer[index++];
  }
}
