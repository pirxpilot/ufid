export default function byteStream(size = 256) {
  const buffer = new Uint8Array(size);
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
