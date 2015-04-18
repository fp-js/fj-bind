'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _assert = require('assert');

var _assert2 = _interopRequireWildcard(_assert);

var _bind = require('./');

var _bind2 = _interopRequireWildcard(_bind);

it('fj-bind', function () {
  var context = {
    foo: 'bar'
  };

  function moo() {
    return this.foo;
  }

  function mooWithArgs(a, b) {
    return this.foo + a + b;
  }

  _assert2['default'].equal(_bind2['default'](context)(moo)(), 'bar');
  _assert2['default'].equal(_bind2['default'](context)(mooWithArgs)(1, 2), 'bar12');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7c0JBQW1CLFFBQVE7Ozs7b0JBQ1YsSUFBSTs7OztBQUdyQixFQUFFLENBQUMsU0FBUyxFQUFFLFlBQU07QUFDbEIsTUFBSSxPQUFPLEdBQUc7QUFDWixPQUFHLEVBQUUsS0FBSztHQUNYLENBQUM7O0FBRUYsV0FBUyxHQUFHLEdBQUc7QUFDYixXQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7R0FDakI7O0FBRUQsV0FBUyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN6QixXQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUN6Qjs7QUFFRCxzQkFBTyxLQUFLLENBQUMsa0JBQUssT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxQyxzQkFBTyxLQUFLLENBQUMsa0JBQUssT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQ3pELENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IGJpbmQgZnJvbSAnLi8nO1xuXG5cbml0KCdmai1iaW5kJywgKCkgPT4ge1xuICB2YXIgY29udGV4dCA9IHtcbiAgICBmb286ICdiYXInXG4gIH07XG5cbiAgZnVuY3Rpb24gbW9vKCkge1xuICAgIHJldHVybiB0aGlzLmZvbztcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vb1dpdGhBcmdzKGEsIGIpIHtcbiAgICByZXR1cm4gdGhpcy5mb28gKyBhICsgYjtcbiAgfVxuXG4gIGFzc2VydC5lcXVhbChiaW5kKGNvbnRleHQpKG1vbykoKSwgJ2JhcicpO1xuICBhc3NlcnQuZXF1YWwoYmluZChjb250ZXh0KShtb29XaXRoQXJncykoMSwgMiksICdiYXIxMicpO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=