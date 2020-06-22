const test = require('tape');
const generator = require('../lib/ufid');
const randomByteStream = require('../lib/random-byte-stream');

test('basic', function(t) {
  const uid = generator();
  const a = uid();

  t.equal(a.length, 6);
  t.match(a, /^[a-zA-Z0-9]+$/);

  const b = uid();
  t.equal(b.length, 6);
  t.match(b, /^[a-zA-Z0-9]+$/);

  t.notEqual(a, b);

  t.end();
});

test('overwrite size', function(t) {
  const uid = generator();
  const a = uid();

  t.equal(a.length, 6);
  t.match(a, /^[a-zA-Z0-9]+$/);

  const b = uid(10);
  t.equal(b.length, 10);
  t.match(b, /^[a-zA-Z0-9]+$/);

  t.end();
});

test('with alphabet', function(t) {
  const uid = generator({ alphabet: 'abc123' });
  const a = uid();

  t.equal(a.length, 6);
  t.match(a, /^[abc123]+$/);

  t.end();
});

test('with size', function(t) {
  const uid = generator({ size: 10 });
  const a = uid();

  t.equal(a.length, 10);
  t.match(a, /^[a-zA-Z0-9]+$/);

  t.end();
});

test('with buffer size', function(t) {
  const uid = generator({ bufferSize: 1024, size: 100 });
  const a = uid();

  t.equal(a.length, 100);
  t.match(a, /^[a-zA-Z0-9]+$/);

  t.end();
});

test('with custom byte stream', function(t) {
  const byteStream = {
    next: () => Math.floor(Math.random() * 255)
  };
  const uid = generator({ byteStream });

  const a = uid();
  t.equal(a.length, 6);
  t.match(a, /^[a-zA-Z0-9]+$/);

  t.end();
});

test('with shared buffer', function(t) {
  const byteStream = randomByteStream(128);
  const uid = generator({ byteStream });
  const uid2 = generator({ byteStream, size: 12 });

  const a = uid();
  t.equal(a.length, 6);
  t.match(a, /^[a-zA-Z0-9]+$/);

  const b = uid2();
  t.equal(b.length, 12);
  t.match(b, /^[a-zA-Z0-9]+$/);

  t.end();
});
