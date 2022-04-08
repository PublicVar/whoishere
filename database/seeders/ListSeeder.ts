import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import List from 'App/Models/List';
import User from 'App/Models/User';
import { ListFactory, UserForListFactory } from 'Database/factories'

export default class ListSeederSeeder extends BaseSeeder {
    public static developmentOnly = true

    public async run () {
        await ListFactory.with('persons', 10).createMany(10);
    }

}
