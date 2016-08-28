'use strict'
const exec = require('child_process').exec

const nodeDistUrl = 'https://nodejs.org/dist/index.json'
let dists

function getDists () {
  if (dists) return Promise.resolve(dists)

  return new Promise(function (resolve, reject) {
    exec(`curl ${nodeDistUrl}`, function (err, stdout, stderr) {
      if (err) return reject(err)
      let parsed = JSON.parse(stdout)

      dists = parsed
      return resolve(parsed)
    })
  })
}

exports.latest = function () {
  return getDists()
    .then(function (dists) { return format(dists[0]) })
}

exports.latestLTS = function () {
  return getDists()
    .then(function (dists) { return format(dists.find((dist) => dist.lts)) })
}

function format (dist) {
  if (dist.version.startsWith('v')) dist.version = dist.version.slice(1)
  if (dist.files) delete dist.files
  if (dist.date) delete dist.date

  return dist
}
