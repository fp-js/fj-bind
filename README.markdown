# fj-bind

[![Build Status](https://travis-ci.org/fp-js/fj-bind.svg)](https://travis-ci.org/fp-js/fj-bind) [![npm version](https://badge.fury.io/js/fj-bind.svg)](http://badge.fury.io/js/fj-bind)
> Bind a context to a function FP-style

## Installation

`npm install fj-bind --save`

## Usage

```js
var bind = require('fj-bind');

var bindToMe = bind(me); // me is a object

bindToMe(func1);
bindToMe(func2);
```

## API

```
context -> function
```

A curried function that expects:

* `context` [required] : The context to bind to a function

* `function` [required]: The function which is bound to the context
