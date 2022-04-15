import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
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

  public async getPresentPersons(): Promise<number | undefined> {
    this.presences ?? (await this.load('presences'))
    const personsPresent: PersonPresence[] = this.presences?.filter(
      (personPresence: PersonPresence) => !!personPresence.isPresent === true
    )
    return personsPresent?.length
  }
}
