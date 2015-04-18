'use strict';

exports.__esModule = true;

var _curry2 = require('fj-curry');

var bind = function bind(context, fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn.apply(context, args);
  };
};

exports['default'] = _curry2.curry2(bind);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3NCQUF1QixVQUFVOztBQUVqQyxJQUFJLElBQUksR0FBRyxjQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUs7QUFDMUIsU0FBTztzQ0FBSSxJQUFJO0FBQUosVUFBSTs7O1dBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0dBQUEsQ0FBQztDQUM3QyxDQUFDOztxQkFFYSxRQU5OLE1BQU0sQ0FNTyxJQUFJLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXJyeTIgfSBmcm9tICdmai1jdXJyeSc7XG5cbmxldCBiaW5kID0gKGNvbnRleHQsIGZuKSA9PiB7XG4gIHJldHVybiAoLi4uYXJncykgPT4gZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeTIoYmluZCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=