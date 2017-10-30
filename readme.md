# combijson [![Build Status](https://travis-ci.org/maxrimue/combijson.svg?branch=master)](https://travis-ci.org/maxrimue/combijson) [![codecov](https://codecov.io/gh/maxrimue/combijson/branch/master/graph/badge.svg)](https://codecov.io/gh/maxrimue/combijson) [![NPM version](https://img.shields.io/npm/v/combijson.svg)](https://www.npmjs.com/package/combijson)
> This module helps you with easy and fast merging of several objects and/or JSON strings

## About

`combijson` accepts one array as an argument which can hold several objects.
The index of each object represents its priority: `combijson` will go over each object starting with the one at index 0,
all values of the following objects will only be added to the resulting object, so values from 'superior' objects won't
be overwritten.

For example, if you want to create a configuration based on defaults and user data, you could do:  
```javascript
var config = combijson([userdata, defaults]);
```

In this case, all user data would be added to the final object, and defaults would only be added if they don't yet exist
in the `userdata` object already.

You can also pass an empty object/no argument at all without causing errors.
The result would be an empty object.


## Installation

Download it using your favourite package managers:  
 + Yarn:  
   ```shell
   yarn add combijson
   ```
 + npm:  
   ```
   npm install --save combijson
   ```

Or download any umd distribution from [repo](/dist/umd/). You can also use [rawgit](https://rawgit.com)
and [npmcdn](https://unpkg.com/) on your own risk.


## Usage  

Import it if you haven't yet done it:  
```javascript
var combijson = require('combijson');
```

If you are using it in browser, include it from local files:  
```html
<script src="path/to/combijson.min.js"></script>
```

Or from [npmcdn/combijson/](https://unpkg.com/combijson/):  
```html
<script src="https://unpkg.com/combijson@1.1.1/dist/umd/combijson.min.js"></script>
```  

Have fun!  
```javascript
var obj1 = {hello: 'world'};
var obj2 = {hello: 'there', node: 'rocks'};

combijson([obj1, obj2]);          // {hello: 'world', node: 'rocks'}

var obj3 = '{"hello": "there"}';
var obj4 = {hello: 'world'};

combijson([obj3, obj4]);          // {hello: 'there'}

var obj5 = {};
var obj6 = {hello: {there: true}};
var obj7 = {hello: {there: false}};

combijson([obj5, obj6, obj7]);    // {hello: {there: true}}

```
