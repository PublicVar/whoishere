/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.route('/login', ['GET', 'POST'], 'SecuritiesController.login').as('login')

Route.get('/', 'HomeController.index').as('home')

Route.group(() => {
  Route.get('/list/:id', 'ListsController.show').where('id', /\w+/).as('list_show')

  Route.post('/list/:id', 'ListsController.roll').where('id', /\w+/).as('list_roll')

  Route.get('/lists', 'ListsController.index').as('list_index')

  Route.get('/list/presence-list/:id', 'ListsController.rolled')
    .where('id', /\w+/)
    .as('list_rolled')
}).middleware('auth:web')
