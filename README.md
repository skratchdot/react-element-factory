# react-factories

A few react helpers for React v0.12.0

## dev info

```bash
git clone git@gist.github.com:/797af25cec75c43ee056.git react-factories
cd react-factories
# to re-generate elements
node ./generate-elements.js
# to re-generate index.js
node ./generate-index.js
```

## in your project

package.json dependencies:

```js
"react": ">=0.12.0",
"react-factories": "git://gist.github.com/797af25cec75c43ee056.git"
````

usage:

```js
var React = require('react');

// add html/svg elements to global scope
require('react-factories')(this);

console.log(h1);
```

## links

- https://news.ycombinator.com/item?id=8522695
- https://gist.github.com/deadlyicon/da8c020662ea8e6002dc
