# combijson [![Build Status](https://travis-ci.org/maxrimue/combijson.svg?branch=master)](https://travis-ci.org/maxrimue/combijson) [![codecov](https://codecov.io/gh/maxrimue/combijson/branch/master/graph/badge.svg)](https://codecov.io/gh/maxrimue/combijson)

This module helps you with easy and fast merging of several objects and/or JSON strings:

```javascript
const combijson = require('combijson');

const obj1 = {hello: 'world'};
const obj2 = {hello: 'there', node: 'rocks'};

combijson([obj1, obj2]); // {hello: 'world', node: 'rocks'}

const obj3 = '{"hello": "there"}';
const obj4 = {hello: 'world'};

combijson([obj3, obj4]); // {hello: 'there'}

```

`combijson` accepts one array as an argument which holds several objects. The index of each object represent its priority: `combijson` will go over each object starting with the one at index 0, all values of following objects will only be added to the resulting object, so values from 'superior' objects won't be overwritten.

You can also pass an empty object/no argument at all (`= {}`), meaning you can dynamically create the array argument without additional checks.
