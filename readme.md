# combijson [![Build Status](https://travis-ci.org/maxrimue/combijson.svg?branch=master)](https://travis-ci.org/maxrimue/combijson) [![Greenkeeper badge](https://badges.greenkeeper.io/maxrimue/combijson.svg)](https://greenkeeper.io/)

```shell
yarn add combijson # or:
npm install --save combijson
```

This module helps you with easy and fast merging of several objects and/or JSON strings:

```javascript
const combijson = require('combijson');

const obj1 = {hello: 'world'};
const obj2 = {hello: 'there', node: 'rocks'};

combijson([obj1, obj2]); // {hello: 'world', node: 'rocks'}

const obj3 = '{"hello": "there"}';
const obj4 = {hello: 'world'};

combijson([obj3, obj4]); // {hello: 'there'}

const obj5 = {};
const obj6 = {hello: {there: true}};
const obj7 = {hello: {there: false}};

combijson([obj5, obj6, obj7]); // {hello: {there: true}}
```

`combijson` accepts one array as an argument which can hold several objects. The index of each object represents its priority: `combijson` will go over each object starting with the one at index 0, all values of the following objects will only be added to the resulting object, so values from 'superior' objects won't be overwritten.

For example, if you want to create a configuration based on a template and user data, you could do:

```javascript
const config = combijson([userdata, template]);
```

In this case, all user data would be added to the final object, and template keys would only be added if they don't yet exist in the `userdata` object already.

You can also pass an empty object/no argument at all without causing errors. The result would be an empty object.
