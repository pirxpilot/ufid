const test = require('node:test');
const assert = require('node:assert/strict');
const generator = require('../lib/ufid');
const randomByteStream = require('../lib/random-byte-stream');

test('basic', function () {
  const uid = generator();
  const a = uid();

  assert.equal(a.length, 6);
  assert.match(a, /^[a-zA-Z0-9]+$/);

  const b = uid();
  assert.equal(b.length, 6);
  assert.match(b, /^[a-zA-Z0-9]+$/);

  assert.notEqual(a, b);
});

test('overwrite size', function () {
  const uid = generator();
  const a = uid();

  assert.equal(a.length, 6);
  assert.match(a, /^[a-zA-Z0-9]+$/);

  const b = uid(10);
  assert.equal(b.length, 10);
  assert.match(b, /^[a-zA-Z0-9]+$/);
});

test('with alphabet', function () {
  const uid = generator({ alphabet: 'abc123' });
  const a = uid();

  assert.equal(a.length, 6);
  assert.match(a, /^[abc123]+$/);
});

test('with size', function () {
  const uid = generator({ size: 10 });
  const a = uid();

  assert.equal(a.length, 10);
  assert.match(a, /^[a-zA-Z0-9]+$/);
});

test('with buffer size', function () {
  const uid = generator({ bufferSize: 1024, size: 100 });
  const a = uid();

  assert.equal(a.length, 100);
  assert.match(a, /^[a-zA-Z0-9]+$/);
});

test('with custom byte stream', function () {
  const byteStream = {
    next: () => Math.floor(Math.random() * 255)
  };
  const uid = generator({ byteStream });

  const a = uid();
  assert.equal(a.length, 6);
  assert.match(a, /^[a-zA-Z0-9]+$/);
});

test('with shared buffer', function () {
  const byteStream = randomByteStream(128);
  const uid = generator({ byteStream });
  const uid2 = generator({ byteStream, size: 12 });

  const a = uid();
  assert.equal(a.length, 6);
  assert.match(a, /^[a-zA-Z0-9]+$/);

  const b = uid2();
  assert.equal(b.length, 12);
  assert.match(b, /^[a-zA-Z0-9]+$/);
});
