/* global crypto */

module.exports = byteStream;

function byteStream(size = 256) {
  let buffer = new Uint8Array(size);
  let index = size;

  return { next };

  function next() {
    if (index >= size) {
      crypto.getRandomValues(buffer);
      index = 0;
    }
    return buffer[index++];
  }
}
