import crypto from 'node:crypto';

export default function byteStream(size = 256) {
  const buffer = Buffer.allocUnsafe(size);
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
