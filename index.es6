import { curry2 } from 'fj-curry';

let bind = (context, fn) => {
  return (...args) => fn.apply(context, args);
};

export default curry2(bind);
