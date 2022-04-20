import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import List from 'App/Models/List'
import User from 'App/Models/User'

export default class ListPolicy extends BasePolicy {
  public async before(user: User | null) {
    if (user && user?.isSuperAdmin) {
      return true
    }
  }

  public async list(user: User, list: List) {
    return user.id === list.owner.id
  }
}
