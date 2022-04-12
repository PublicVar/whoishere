import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import List from 'App/Models/List'
import PersonPresence from 'App/Models/PersonPresence'
import PresenceList from 'App/Models/PresenceList'
import User from 'App/Models/User'
import { DateTime } from 'luxon'

export default class ListsController {
  public async show({ view, params }: HttpContextContract) {
    const { id } = params

    const list = await List.findOrFail(id)
    await list.load('persons')

    return view.render('lists/show', { list })
  }

  public async index({ view }: HttpContextContract) {
    const lists = await List.all()

    return view.render('lists/index', { lists })
  }

  public async roll({ params, request, response }: HttpContextContract) {
    const { id } = params

    const list: List = await List.findOrFail(id)

    const day: DateTime = DateTime.now()

    const presenceList: PresenceList = await list.related('presenceLists').create({ date: day })

    const personPresent = await Promise.all(
      request.input('personPresent').map(async (personUid: string) => {
        const person: User | null = await User.findByOrFail('uid', personUid)

        const personPresent = await PersonPresence.create({ isPresent: true })
        await personPresent.related('person').associate(person)
        await personPresent.related('presenceList').associate(presenceList)

        return personPresent
      })
    )

    await presenceList.related('presences').createMany(personPresent)

    response.redirect().toRoute('list_rolled', { id: presenceList.id })
  }

  public async rolled({ view, params }: HttpContextContract) {
    const { id } = params

    const presenceList: PresenceList = await PresenceList.findOrFail(id)
    await presenceList.load('presences', (presencesQuery) => presencesQuery.preload('person'))

    return view.render('lists/rolled', { presenceList })
  }
}
