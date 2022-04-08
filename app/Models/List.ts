import { v4 as uuid} from 'uuid'
import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class List extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uid: string

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public visible: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => User, {
    pivotTimestamps: true
  })
  public persons: ManyToMany<typeof User>

  @beforeCreate()
  public static assignUuid(list: List) {
      if(null === list.uid){
          list.uid = uuid()
      }
  }
}
