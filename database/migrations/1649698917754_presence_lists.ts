import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PresenceLists extends BaseSchema {
  protected tableName = 'presence_lists'
  protected tableNamePersonPresence = 'person_presences'

  public async up() {
    this.schema
      .createTable(this.tableName, (table) => {
        table.increments('id').primary()
        table.datetime('date')
        table.integer('list_id').unsigned().references('lists.id').onDelete('CASCADE')
        /**
         * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
         */
        table.timestamp('created_at', { useTz: true })
        table.timestamp('updated_at', { useTz: true })
      })
      .createTable(this.tableNamePersonPresence, (table) => {
        table.increments('id').primary()
        table.boolean('is_present')
        table.integer('user_id').unsigned().references('users.id')
        table
          .integer('presence_list_id')
          .unsigned()
          .references('presence_lists.id')
          .onDelete('CASCADE')
        /**
         * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
         */
        table.timestamp('created_at', { useTz: true })
        table.timestamp('updated_at', { useTz: true })
      })
  }

  public async down() {
    this.schema.dropTable(this.tableName).dropTable(this.tableNamePersonPresence)
  }
}
