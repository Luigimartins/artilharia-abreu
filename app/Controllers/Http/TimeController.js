'use strict'

const Time = use('App/Models/Time')

class TimeController {

    async listarTimes({ view }) {

        const times = await Time.all()

        return view.render('/time/time', {
            times: times.toJSON()    
        })
    } 

    async salvarTime({ request, response }) {

        const time = request.only(['nome', 'cor'])        
        await Time.create(time)
        return response.route('TimeController.listarTimes')
    }

}

module.exports = TimeController
