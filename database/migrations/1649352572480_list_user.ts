import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ListUser extends BaseSchema {
  protected tableName = 'list_user'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.id')
      table.integer('list_id').unsigned().references('lists.id')
      table.unique(['user_id', 'list_id'])
      table.boolean('present').nullable()
      table.datetime('presentAt').nullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
