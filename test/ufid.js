import assert from 'node:assert/strict';
import test from 'node:test';
import randomByteStream from '#random-byte-stream';
import generator from '../lib/ufid.js';

test('basic', () => {
  const uid = generator();
  const a = uid();

  assert.equal(a.length, 6);
  assert.match(a, /^[a-zA-Z0-9]+$/);

  const b = uid();
  assert.equal(b.length, 6);
  assert.match(b, /^[a-zA-Z0-9]+$/);

  assert.notEqual(a, b);
});

test('overwrite size', () => {
  const uid = generator();
  const a = uid();

  assert.equal(a.length, 6);
  assert.match(a, /^[a-zA-Z0-9]+$/);

  const b = uid(10);
  assert.equal(b.length, 10);
  assert.match(b, /^[a-zA-Z0-9]+$/);
});

test('with alphabet', () => {
  const uid = generator({ alphabet: 'abc123' });
  const a = uid();

  assert.equal(a.length, 6);
  assert.match(a, /^[abc123]+$/);
});

test('with size', () => {
  const uid = generator({ size: 10 });
  const a = uid();

  assert.equal(a.length, 10);
  assert.match(a, /^[a-zA-Z0-9]+$/);
});

test('with buffer size', () => {
  const uid = generator({ bufferSize: 1024, size: 100 });
  const a = uid();

  assert.equal(a.length, 100);
  assert.match(a, /^[a-zA-Z0-9]+$/);
});

test('with custom byte stream', () => {
  const byteStream = {
    next: () => Math.floor(Math.random() * 255)
  };
  const uid = generator({ byteStream });

  const a = uid();
  assert.equal(a.length, 6);
  assert.match(a, /^[a-zA-Z0-9]+$/);
});

test('with shared buffer', () => {
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
