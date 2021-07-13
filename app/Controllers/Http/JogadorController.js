'use strict'

const Jogador = use('App/Models/Jogador')
const Time = use('App/Models/Time')

class JogadorController {

    async listarJogadores({ view }) {

        const jogadores = await Jogador.query()
            .with('time')
            .fetch()


        return view.render('jogador/jogador', {
            jogadores: jogadores.toJSON()
        })
    }

    async listarJogadoresPorTime({ view, request }) {
        const { id } = request.params

        const jogadores = await Jogador.query()
            .where('time_id', '=', id)
            .with('time')
            .fetch()

        return view.render('jogador/jogador', {
            jogadores: jogadores.toJSON()
        })
    }  
    
    async criarJogador({ view }) {
        const times = await Time.all()

        console.log(times.toJSON())

        return view.render('jogador/add-jogador', {
            times: times.toJSON()
        })
    }

    async salvarJogador({ request, response }) {

        const jogadorRequest = request.only(['nome', 'numero', 'timeId'])

        const time = await Time.findBy('id', jogadorRequest.timeId)

        

        const jogador = new Jogador()
        jogador.nome = jogadorRequest.nome
        jogador.numero = jogadorRequest.numero

        await time.jogadores().save(jogador)
            

        return response.redirect('/jogador')

    }

}

module.exports = JogadorController
