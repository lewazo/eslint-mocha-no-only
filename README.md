# eslint-mocha-no-only

Warns when a Mocha JavaScript test framework keyword 'only' is used.

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

Add `eslint-mocha-no-only` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

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
