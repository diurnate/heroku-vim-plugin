heroku-vim-plugin
============

Heroku vim CLI plugin

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [Installation](#installation)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Installation
<!-- installation -->
```sh-session
$ heroku plugins:install @diurnate/heroku-vim-plugin
```
<!-- installationstop -->

# Usage
<!-- usage -->
```sh-session
$ heroku vim -a <app>
Preparing commands for Heroku console...
- vim setup added
Starting Dyno with additional tools...
Running 
...
$ vim <filename>
...
```
<!-- usagestop -->

# Heroku Commands
<!-- commands -->
* [`vim`](#vim)

## `vim`

Connect to the given app adding a statically linked `vim` to edit files within the Dyno

```
USAGE
  $ heroku vim -a <app>

OPTIONS
  -a, --app Heroku app to connect to

DESCRIPTION
  This command will behave as `heroku run bash` once connected, with the additional `vim` command to edit files
  using vim text editor.
```

_See code: [src/commands/vim.js](https://github.com/diurnate/heroku-vim-plugin/src/commands/vim.js)_
<!-- commandsstop -->
