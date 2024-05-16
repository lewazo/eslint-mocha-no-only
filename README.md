# eslint-mocha-no-only

This package contains an ESLint rule which throws an error (or warning) when the `only()` method is called on `describe`, `context`, `it`, `specify`, `suite` and `test` Mocha test keywords.

## Why do I need this?
`only()` is a useful Mocha feature that lets the test runner run one specific part of a test suite. Often, developers may end up forgetting to remove the `only()` method before commiting and pushing their code. This results in the CI tool running only one specific test in the suite which may end up in a false-positive build.

By having ESLint throw an error in such cases, you can rest assured your CI tool runs all your test suites.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-mocha-no-only`:

```
$ npm install eslint-plugin-mocha-no-only --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-mocha-no-only` globally.

## Usage

Enable the `eslint-plugin-mocha-no-only` plugin and rules in your `eslint.config.js` file.

```js
import globals from "globals";
import pluginJs from "@eslint/js";
import mochaNoOnly from "eslint-plugin-mocha-no-only"


export default [
  {
    languageOptions: { globals: globals.browser },
    plugins: { mochaNoOnly },
    rules: { "mochaNoOnly/mocha-no-only": ["error"] }
  },
  pluginJs.configs.recommended,
];

```

**Note:** You may want to only enable this rule for files in your tests suite. This can be done by adding an additional config object with a `files` key.

```js
import globals from "globals";
import pluginJs from "@eslint/js";
import mochaNoOnly from "eslint-plugin-mocha-no-only"


export default [
  {
    languageOptions: { globals: globals.browser },
    plugins: { ... },
    rules: { ... }
  },
  {
    files: ["test/**.js"],
    plugins: { mochaNoOnly },
    rules: { "mochaNoOnly/mocha-no-only": ["error"] }
  },
  pluginJs.configs.recommended,
];

```

## Examples

### Failing
```js
describe("foobar", function() {
  var foo;
  beforeEach(function() {
    foo = new Foo();
  });

  it.only("should do things", function() {
    expect(foo).to.do.things;
  });
});
```

### Passing
```js
describe("foobar", function() {
  var foo;
  beforeEach(function() {
    foo = new Foo();
  });

  it("should do things", function() {
    expect(foo).to.do.things;
  });
});
```
