pandora
=======

Github based repositories management CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pandora.svg)](https://npmjs.org/package/pandora)
[![Downloads/week](https://img.shields.io/npm/dw/pandora.svg)](https://npmjs.org/package/pandora)
[![License](https://img.shields.io/npm/l/pandora.svg)](https://github.com/Meyclem/pandora/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g pandora
$ pandora COMMAND
running command...
$ pandora (-v|--version|version)
pandora/0.0.0 darwin-x64 node-v14.17.1
$ pandora --help [COMMAND]
USAGE
  $ pandora COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pandora hello [FILE]`](#pandora-hello-file)
* [`pandora help [COMMAND]`](#pandora-help-command)
* [`pandora init [FILE]`](#pandora-init-file)

## `pandora hello [FILE]`

describe the command here

```
USAGE
  $ pandora hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ pandora hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Meyclem/pandora/blob/v0.0.0/src/commands/hello.ts)_

## `pandora help [COMMAND]`

display help for pandora

```
USAGE
  $ pandora help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `pandora init [FILE]`

describe the command here

```
USAGE
  $ pandora init [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/init.ts](https://github.com/Meyclem/pandora/blob/v0.0.0/src/commands/init.ts)_
<!-- commandsstop -->
