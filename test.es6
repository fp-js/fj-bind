import assert from 'assert';
import bind from './';


it('fj-bind', () => {
  var context = {
    foo: 'bar'
  };

  function moo() {
    return this.foo;
  }

  function mooWithArgs(a, b) {
    return this.foo + a + b;
  }

  assert.equal(bind(context)(moo)(), 'bar');
  assert.equal(bind(context)(mooWithArgs)(1, 2), 'bar12');
});
