import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import PresenceList from './PresenceList'

export default class PersonPresence extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public isPresent: boolean

  @belongsTo(() => User)
  public person: BelongsTo<typeof User>

  @column()
  public userId: number

  @belongsTo(() => PresenceList)
  public presenceList: BelongsTo<typeof PresenceList>

  @column()
  public presenceListId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
