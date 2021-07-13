'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Jogador extends Model {

    time () {
        return this.hasOne('App/Models/Time', 'time_id', 'id')
    }


}

module.exports = Jogador
