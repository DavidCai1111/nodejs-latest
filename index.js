'use strict'
const https = require('https')

const nodeDistUrl = 'https://nodejs.org/dist/index.json'
let dists

function request (url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, response => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        return reject(new Error('Failed to load page, status code: ' + response.statusCode))
      }

      let body = ''
      response.on('data', chunk => { body += chunk })
      response.on('end', () => resolve(body))
    })

    request.on('error', reject)
  })
}

function getDists () {
  if (dists) return Promise.resolve(dists)

  return request(nodeDistUrl)
    .then(result => {
      dists = JSON.parse(result)
      return dists
    })
}

function format (dist) {
  if (dist.version.startsWith('v')) dist.version = dist.version.slice(1)
  if (dist.files) delete dist.files
  if (dist.date) delete dist.date

  return dist
}

function getDist (fn) {
  return () => getDists()
    .then(fn)
    .then(format)
}

module.exports = {
  latest: getDist(dists => dists[0]),
  latestLTS: getDist(dists => dists.find(dist => dist.lts))
}
