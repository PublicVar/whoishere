import Factory from '@ioc:Adonis/Lucid/Factory'
import List from 'App/Models/List'
import { v4 as uuid } from 'uuid'

export const ListFactory = Factory
.define(List, ({faker}) => {
    return {
        id: uuid(),
        name: faker.lorem.words(),
        description: faker.company.catchPhraseDescriptor(),
        visible: true
    }
})
.build()


