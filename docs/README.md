fluent-iterable - v0.0.4

# fluent-iterable - v0.0.4

## Table of contents

### Variables

- [REPOSITORIES](README.md#repositories)

### Functions

- [copySettings](README.md#copysettings)
- [createRepo](README.md#createrepo)

## Variables

### REPOSITORIES

• `Const` **REPOSITORIES**: *repositories*= 'repositories'

## Functions

### copySettings

▸ **copySettings**(`source`: *string*, `destination`: *string*): *AsyncGenerator*<any, void, undefined\>

#### Parameters:

Name | Type |
:------ | :------ |
`source` | *string* |
`destination` | *string* |

**Returns:** *AsyncGenerator*<any, void, undefined\>

___

### createRepo

▸ **createRepo**(`repositoryName`: *string*, `options`: { `private?`: *boolean* ; `project?`: *string* ; `settings?`: *string*  }): *AsyncGenerator*<any, void, undefined\>

#### Parameters:

Name | Type |
:------ | :------ |
`repositoryName` | *string* |
`options` | *object* |
`options.private?` | *boolean* |
`options.project?` | *string* |
`options.settings?` | *string* |

**Returns:** *AsyncGenerator*<any, void, undefined\>
