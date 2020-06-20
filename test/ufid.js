const test = require('tape');
const { generator, uid } = require('../lib/ufid');

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

test('basic', function(t) {
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

test('with alphabet', function(t) {
  const uid = generator({ size: 10 });
  const a = uid();

  t.equal(a.length, 10);
  t.match(a, /^[a-zA-Z0-9]+$/);

  t.end();
});
