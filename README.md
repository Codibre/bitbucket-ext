[![Actions Status](https://github.com/Codibre/bitbucket-ext/workflows/build/badge.svg)](https://github.com/Codibre/bitbucket-ext/actions)
[![Actions Status](https://github.com/Codibre/bitbucket-ext/workflows/test/badge.svg)](https://github.com/Codibre/bitbucket-ext/actions)
[![Actions Status](https://github.com/Codibre/bitbucket-ext/workflows/lint/badge.svg)](https://github.com/Codibre/bitbucket-ext/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/test_coverage)](https://codeclimate.com/github/Codibre/bitbucket-ext/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/maintainability)](https://codeclimate.com/github/Codibre/bitbucket-ext/maintainability)
[![Packages](https://david-dm.org/Codibre/bitbucket-ext.svg)](https://david-dm.org/Codibre/bitbucket-ext)
[![npm version](https://badge.fury.io/js/%40codibre%2Fbitbucket-ext.svg)](https://badge.fury.io/js/%40codibre%2Fbitbucket-ext)

A tool to manipulate your Bitbucket repositories more easily

## How to Install

If you'll use it as a package in your project

```
npm i bitbucket-ext
```

If you'll use it as a cli:
```
npm i -g bitbucket-ext
```

## How to use it

First, create your config file named **bitbucket-ext.json** in your home or current folder with the following properties:

```ts
{
  "user": "your Bitbucket user name",
  "password": "we recommend to use an app password",
  "workspace": "your workspace name"
}
```

Now, just use one of the commands available:

### create-repo

This command will create a new repo for you

```
bitbucket-ext create-repo <repository name> --private --project <project name>
```

### copy-settings

This command will copy all the settings from one repository to another (no source code is changed)

```
bitbucket-ext copy-settings <origin repo> <destination repo>
```


## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
