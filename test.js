/* global describe it */
'use strict'
require('co-mocha')
require('should')
const nodejsLatest = require('./')

describe('nodejs-latest', function () {
  this.timeout(1000 * 10)

  it('get latest version', function * () {
    let latest = yield nodejsLatest.latest()

    latest.version.startsWith('v').should.be.false()
    latest.lts.should.be.false()
    String(parseInt(latest.modules)).should.equal(latest.modules)
  })

  it('get latest lts version', function * () {
    let lts = yield nodejsLatest.latestLTS()

    lts.version.startsWith('v').should.be.false()
    ;(typeof lts.lts).should.equal('string')
    String(parseInt(lts.modules)).should.equal(lts.modules)
  })
})
