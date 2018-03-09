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

Add `eslint-plugin-mocha-no-only` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "mocha-no-only"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "mocha-no-only/mocha-no-only": ["error"]
    }
}
```
**Note:** You may want to have a different `.eslintrc` file in your tests directory and place this plugin and rule in it. This would make sure ESLint doesn't throw errors on other JavaScript object named `describe.only()`, for example. There's also no need to have ESLint watch for this rule in files where there are no mocha tests.

## Examples

### Failing
```
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
```
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
