'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TimeSchema extends Schema {
  up () {
    this.create('times', (table) => {
      table.increments()
      table.string('nome')
      table.string('cor')
      table.timestamps()
    })
  }

  down () {
    this.drop('times')
  }
}

module.exports = TimeSchema
