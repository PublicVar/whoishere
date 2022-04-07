import { DateTime } from 'luxon'
import { v4 as uuid} from 'uuid'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number
 
  @column()
  public uid: string

  @column()
  public firstname: string

  @column()
  public lastname: string

  @column()
  public email: string

  @column()
  public active: boolean

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static assignUuid(user: User) {
      if(null === user.uid){
          user.uid = uuid()
      }
  }
}
