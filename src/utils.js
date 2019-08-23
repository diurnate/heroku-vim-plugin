const {Dyno} = require('@heroku-cli/plugin-run-v5')

module.exports = {
  startDyno: async opts => {
    let dyno = new Dyno(opts)
    await dyno.start()
  },
}
