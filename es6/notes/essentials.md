## Introduction
ES6 or EcmaScript 2015 - 6th gen. of JS

#### What's new?
- Syntax & features
- Classes, modules, arrays, object manipulation, etc.

#### Constraints?
All browsers doen't support ES6, but they do support pre-ES6 javascript. 
Tools like - babel & webpack help in transpiling the code from ES6 to ES5

### Setup node as our environment to code:
- Node.js is a JS runtime built on Chrome's V8 Javascript engine.
- Node.js package ecosysem, npm is the largest ecosystem of open-source libraries.
- Install from => nodejs.org
- Check versions => `node -v && npm -v`

#### Setting up ES6 tools:
Transpilers - for reading a code in one language and producing in other. Eg - coffeescript,typescript
- Babel for transpiling ES6 code to ES5 that browser can support.
understand in -> babeljs.io

- Webpack for allowing to run an environment that hosts babel. 
It is a bundle moduler. It bundles modules into one .js file (bundle.js) to reduce errors and resources on the client-side.

It comes with a dev-server, gives us live code updating for free!


#### Setting up Webpack
> mkdir es6
> cd es6
> npm init -y 
(creates package.json => has JSON object with project details as well as dependencies, that we'll install later)
>npm install --save-dev webpack
(install node modules)
> mkdir build -> new file index.html -> html skeleton with <script src="bundle.js"></script>
> mkdir app -> index.s -> console.log
> Specify entry and output in webpack.config.js
> Add start script in package.json
> npm run build

Limitations -
- no hot reload
- not addded babel loaders

To overcome it -
> npm install babel-core babel-loader babel-preset-es2015 babel-polyfill webpack-dev-server --save-dev

babel-polyfill transpiles code into native language

Next,
> Added loaders in module and setup web-server by defining the port:3000 in webpack.config.js
> Added the following in package.json -
```
"scripts": {
    "build": "webpack",
    "start": "webpack-dev-server"
    },
  "babel": {
      "presets": ["es2015"]
    }
```

________________________________________________________________________________________________
On browser, our app runs on `localhost:3000`
________________________________________________________________________________________________