'use strict'

const JogadorController = require('../app/Controllers/Http/JogadorController')
const TimeController = require('../app/Controllers/Http/TimeController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')

//TIME
Route.on('/add-time').render('time/add-time')
Route.get('/time', 'TimeController.listarTimes')
Route.post('/time', 'TimeController.salvarTime')

//JOGADORES
Route.get('/jogador', 'JogadorController.listarJogadores')
Route.get('/jogador/time/:id', 'JogadorController.listarJogadoresPorTime')
Route.get('/criar-jogador', 'JogadorController.criarJogador')
Route.post('/jogador', 'JogadorController.salvarJogador')



