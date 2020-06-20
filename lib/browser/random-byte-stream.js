/* global crypto */

module.exports = byteStream;

function byteStream() {

  const SIZE = 256;
  let buffer = new Uint8Array(256);
  let index = SIZE;

  return { getByte };

  function getByte() {
    if (index >= SIZE) {
      crypto.getRandomValues(buffer);
      index = 0;
    }
    return buffer[index++];
  }
}
