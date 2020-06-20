const crypto = require('crypto');

module.exports = byteStream;


function byteStream() {

  const SIZE = 256;
  let buffer = new Buffer.allocUnsafe(256);
  let index = SIZE;

  return { getByte };

  function getByte() {
    if (index >= SIZE) {
      crypto.randomFillSync(buffer);
      index = 0;
    }
    return buffer[index++];
  }
}
