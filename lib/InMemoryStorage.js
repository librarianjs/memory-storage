'use strict'

class InMemoryStorage {
  constructor () {
    this.db = {}
  }

  get (id) {
    return Promise.resolve(this.db[id] || null)
  }

  put (key, record) {
    if (!record) {
      return Promise.reject('Invalid record')
    }
    this.db[key] = record
    return Promise.resolve()
  }
}

module.exports = InMemoryStorage
