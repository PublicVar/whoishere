import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeederSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    const uniqueKey = 'email'

    await User.updateOrCreateMany(uniqueKey, [
      {
        firstname: 'Admin',
        lastname: 'User',
        email: 'admin-user@mail.com',
        password: 'passw0rd',
        active: true,
        isSuperAdmin: true,
      },
    ])
  }
}
