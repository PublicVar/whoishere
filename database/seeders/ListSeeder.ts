import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ListFactory } from 'Database/factories'

export default class ListSeederSeeder extends BaseSeeder {
    public static developmentOnly = true

    public async run () {
        await ListFactory.createMany(3);
    }
}
