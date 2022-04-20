import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'

export default class SecuritiesController {
  public async login({ auth, request, response, view, session }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    if (email && password) {
      try {
        await auth.use('web').attempt(email, password)
        response.redirect(Route.makeUrl('list_index'))
      } catch {
        session.flash('errors', {
          title: 'Login error',
          description: 'Email or password invalid.',
        })
        return view.render('security/login')
      }
    }

    return view.render('security/login')
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()

    response.redirect(Route.makeUrl('home'))
  }
}
