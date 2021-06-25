[![Actions Status](https://github.com/Codibre/bitbucket-copy-settings/workflows/build/badge.svg)](https://github.com/Codibre/bitbucket-copy-settings/actions)
[![Actions Status](https://github.com/Codibre/bitbucket-copy-settings/workflows/test/badge.svg)](https://github.com/Codibre/bitbucket-copy-settings/actions)
[![Actions Status](https://github.com/Codibre/bitbucket-copy-settings/workflows/lint/badge.svg)](https://github.com/Codibre/bitbucket-copy-settings/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/test_coverage)](https://codeclimate.com/github/Codibre/bitbucket-copy-settings/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/maintainability)](https://codeclimate.com/github/Codibre/bitbucket-copy-settings/maintainability)
[![Packages](https://david-dm.org/Codibre/bitbucket-copy-settings.svg)](https://david-dm.org/Codibre/bitbucket-copy-settings)
[![npm version](https://badge.fury.io/js/%40codibre%2Fbitbucket-copy-settings.svg)](https://badge.fury.io/js/%40codibre%2Fbitbucket-copy-settings)

A tool to manipulate your Bitbucket repositories more easily

## How to Install

If you'll use it as a package in your project

```
npm i bitbucket-copy-settings
```

If you'll use it as a cli:
```
npm i -g bitbucket-copy-settings
```

## How to use it

First, create your config-file in your home or current folder with the following properties:

```ts
{
  "user": "your Bitbucket user name",
  "password": "we recommend to use an app password",
  "workspace": "your workspace name"
}
```

Now, just use one of the commands available (for now, just one lol):

### copy-settings

This command will copy all the settings from one repository to another (no source code is changed)

```
bitbucket-ext copy-settings <origin repo> <destination repo>
```


## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
