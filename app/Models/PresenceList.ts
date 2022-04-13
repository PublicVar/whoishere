import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  hasMany,
  HasMany,
  scope,
} from '@ioc:Adonis/Lucid/Orm'
import List from './List'
import PersonPresence from './PersonPresence'

export default class PresenceList extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.date()
  public date: DateTime

  @hasMany(() => PersonPresence)
  public presences: HasMany<typeof PersonPresence>

  @column()
  public listId: number

  @belongsTo(() => List)
  public list: BelongsTo<typeof List>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static count = scope((query) => {
    query
      .withCount('presences', (queryAggr) => queryAggr.where('isPresent', true))
      .count('* as present')
  })
}
