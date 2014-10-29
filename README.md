# react-element-factory

A few react helpers for the changes from React v0.11.0 to v0.12.0


## Getting Started

Install the module with: `npm install --save react-element-factory`

```javascript
var React = require('react');

h1(); // doesn't exist

// add html/svg elements to global scope
require('react-element-factory')(this);

h1(); // now it exists
```


## Dev Info

```bash
git clone git@github.com:skratchdot/react-element-factory.git
cd react-element-factory
# to re-generate elements
node ./scripts/generate-elements.js
# to re-generate index.js
node ./scripts/generate-index.js
```


## Links

- https://news.ycombinator.com/item?id=8522695
- https://gist.github.com/deadlyicon/da8c020662ea8e6002dc


## License

Copyright (c) 2014 skratchdot  
Licensed under the MIT license.

