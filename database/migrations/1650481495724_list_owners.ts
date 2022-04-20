import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ListOwners extends BaseSchema {
  protected tableName = 'lists'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('owner_id').unsigned().references('users.id')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('owner_id')
    })
  }
}
