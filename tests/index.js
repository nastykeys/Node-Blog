const {boot, shutdown, port} = require('../app'),
expect = require('expect.js'),
superagent = require('superagent')

describe('Server', () => {
    before(() => {
        boot()
    })
    describe('Homepage', () => {
        it('responds to GET request', (done) => {
            superagent
                .get(`http://localhost:${port}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    done()
            })
        })
    })

    after(() => shutdown())
})