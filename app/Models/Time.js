'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Time extends Model {

    jogadores () {
        return this.hasMany('App/Models/Jogador')
    }
}

module.exports = Time
