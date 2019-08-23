const {Command, flags} = require('@heroku-cli/command')
const utils = require('../utils')

class VimCommand extends Command {
  async run() {
    const {flags} = this.parse(VimCommand)
    const toolFolder = 'tools'
    const vimSource = process.env.VIM_SOURCE
    let toolsCommands = ''
    const tools = {
      vim: `
        mkdir ~/${toolFolder}/vim
        cd ~/${toolFolder}/vim
        curl '${vimSource}' | tar -xJ
        export VIMRUNTIME="$HOME/${toolFolder}/vim/runtime"
        export PATH="$HOME/${toolFolder}/vim:$PATH"
      `,
    }

    if (vimSource === undefined) {
      this.error('Missing env variable VIM_SOURCE with static vim url')
      return
    }

    this.log('Preparing commands for Heroku console...')
    for (let [key, value] of Object.entries(tools)) {
      this.log(`- ${key} setup added`)
      toolsCommands += value
    }

    const opts = {
      heroku: this.legacyHerokuClient,
      app: flags.app,
      showStatus: true,
      attach: true,
      notify: true,
      command: `
        mkdir ~/${toolFolder}
        ${toolsCommands}
        cd -
        bash
      `,
    }

    this.log('Starting Dyno with additional tools...')
    await utils.startDyno(opts)
  }
}

VimCommand.description = `Initialize console with extra tools
Tools Installed:
- vim
`

VimCommand.flags = {
  remote: flags.remote(),
  app: flags.app({required: true}),
}

module.exports = {VimCommand}
