const {test} = require('@oclif/test')
const utils = require('../../src/utils')
const sinon = require('sinon')

let dynoStub

describe('vim', () => {
  beforeEach(function () {
    dynoStub = sinon.stub(utils, 'startDyno')
    process.env.VIM_SOURCE = 'test'
  })

  test
  .stdout()
  .command(['vim', '-a', 'test-app'])
  .it('runs vim heroku command', () => {
    sinon.assert.called(dynoStub)
  })
})
