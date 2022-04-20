import Factory from '@ioc:Adonis/Lucid/Factory'
import List from 'App/Models/List'
import User from 'App/Models/User'
import { v4 as uuid } from 'uuid'

export const ListFactory = Factory.define(List, ({ faker }) => {
  return {
    uid: uuid(),
    name: faker.lorem.words(),
    description: faker.company.catchPhraseDescriptor(),
    visible: true,
  }
})
  .relation('persons', () => UserForListFactory)
  .relation('owner', () => ActiveUserForListFactory)
  .build()

export const UserForListFactory = Factory.define(User, ({ faker }) => {
  return {
    uid: uuid(),
    firstname: faker.name.findName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    active: false,
    password: faker.random.alphaNumeric(8),
  }
}).build()

export const ActiveUserForListFactory = Factory.define(User, ({ faker }) => {
  return {
    uid: uuid(),
    firstname: faker.name.findName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    active: true,
    password: faker.random.alphaNumeric(8),
  }
}).build()
