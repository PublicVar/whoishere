import { v4 as uuid} from 'uuid'
import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'

export default class List extends BaseModel {
  public static selfAssignPrimaryKey = true;

  @column({ isPrimary: true })
  public id: string

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

  @beforeCreate()
  public static assignUuid(list: List) {
      if(null === list.id){
          list.id = uuid()
      }
  }
}
