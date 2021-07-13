'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JogadorSchema extends Schema {
  up () {
    this.create('jogadors', (table) => {
      table.increments()
      table.string('nome').unique()
      table.integer('numero')
      table.integer('time_id').references('id').inTable('times')
      table.timestamps()
    })
  }

  down () {
    this.drop('jogadors')
  }

}

module.exports = JogadorSchema
